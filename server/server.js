require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bcrypt = require("bcrypt");

const { initDatabase } = require("./db");
const { getNoteList, setNewNote, deleteNote } = require("./lib/notes");

const app = express();
const path = require("path");

const port = process.env.PORT || 5000;
const dbURL = process.env.DB_URL || "mongodb://localhost:27017";
const dbName = process.env.DB_NAME || "MyNotes";

const users = [];

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Authentication Routes

app.post(`/auth/register`, async (request, response) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    //Store User in DB
    users.push({
      id: Date.now().toString(),
      email: request.body.email,
      password: hashedPassword
    });
    response.redirect("/auth/login");
  } catch (error) {
    alert("Something went wrong!");
  }
  console.log(users);
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
