require("dotenv").config();
const express = require("express");

const { initDatabase } = require(".db");

const app = express();
const path = require("path");

const port = process.env.PORT || 5000;
const dbURL = process.env.DB_URL || "http://localhost:27017";
const dbName = process.env.DB_NAME || "MyNotes";

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
    const newNote = await setNewNote(request.body);
    return response.json(newNote);
  } catch (error) {
    return response.end("Error");
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

initDatabase(process.env.DB_URL, process.env.DB_NAME).then(() => {
  console.log(`Database ${(process.env.DB_URL, process.env.DB_NAME)} is ready`);

  app.listen(process.env.PORT, () => {
    console.log(`Server listens on http://localhost:${process.env.PORT}`);
  });
});
