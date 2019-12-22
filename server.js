require("dotenv").config();
const express = require("express");

const { initDatabase } = require("./lib/database");

const app = express();
const path = require("path");

app.use(express.json());

app.get(`/notes`, async (request, response) => {
  try {
    if (user) {
      const notes = await getNoteList();
      return response.json(notes);
    }
  } catch (error) {
    return response.end("Error");
  }

  response.end();
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
