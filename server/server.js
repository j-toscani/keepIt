require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bcrypt = require("bcrypt");

const { initDatabase } = require("./db");
const { getNoteList, setNewNote, deleteNote } = require("./lib/notes");
const { getUserByMail, deleteUser, setNewUser } = require("./lib/users");

const app = express();
const path = require("path");

const port = process.env.PORT || 5000;
const dbURL = process.env.DB_URL || "mongodb://localhost:27017";
const dbName = process.env.DB_NAME || "MyNotes";

app.use(cors());
app.use(express.json());

//Authentication Routes
app.post(`/auth/register`, async (request, response) => {
  try {
    const hashedPassword = await bcrypt.hash(request.body.password, 10);
    const newUser = {
      name: request.body.name,
      email: request.body.email,
      password: hashedPassword
    };
    const findUserWithNewUserMail = await getUserByMail(newUser.email);
    if (findUserWithNewUserMail === null) {
      const newUserIsSet = await setNewUser(newUser);
      if (newUserIsSet === 1) {
        response.status(200).send("Registered!");
      } else {
        response.status(503).send("Register failed! Could not save in DB.");
      }
    } else {
      response.status(401).send("Register failed! Could not save in DB.");
    }
  } catch (error) {
    response.status(500).send("Register failed!");
  }
});

app.post(`/auth/login`, async (request, response) => {
  console.log(request.body.email);
  const user = await getUserByMail(request.body.email);
  if (user == null) {
    return response.send(400).send("User does not exist");
  }
  const comparePasswords = await bcrypt.compare(
    request.body.password,
    user.password
  );
  console.log(comparePasswords);
  try {
    if (comparePasswords) {
      response.status(200).send("Success");
    } else {
      response.status(401).send("Not allowed");
    }
  } catch (error) {
    response.status(500).send();
  }
});

//Note Routes
app.get(`/notes`, async (request, response) => {
  try {
    const notes = await getNoteList();
    return response.json(notes);
  } catch (error) {
    return response.end("Error");
  }
});

app.post(`/notes`, async (request, response) => {
  try {
    setNewNote(request.body).then(newNote => {
      response.send(newNote);
    });
  } catch (error) {
    return response.body.end("Error");
  }
});

app.post(`/notes/:id`, async (request, response) => {
  try {
    const updatedNote = await deleteNote(request.params.id);
    return response.json(updatedNote);
  } catch (error) {
    return response.end("Error");
  }
});

//DB Connection

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

initDatabase(dbURL, dbName).then(() => {
  console.log(`Database ${(dbURL, dbName)} is ready`);

  app.listen(port, () => {
    console.log(`Server listens on http://localhost:${port}`);
  });
});
