require("dotenv").config();
const express = require("express");
const cors = require("cors");

const { initDatabase } = require("./db");
const { getNoteList, setNewNote, deleteNote } = require("./lib/notes");

const app = express();
const path = require("path");

const port = process.env.PORT || 5000;
const dbURL = process.env.DB_URL || "mongodb://localhost:27017";
const dbName = process.env.DB_NAME || "MyNotes";

app.use(cors());
app.use(express.json());

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
      console.log(newNote);
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
