const { getCollection } = require("../db");

const collectionName = "notes";

async function setNewNote(note) {
  const noteCollection = await getCollection(collectionName);
  const setNote = await noteCollection.insertOne(note);
  return setNote;
}

async function getNoteList() {
  const noteCollection = await getCollection(collectionName);
  const gotNoteList = await noteCollection.find({});
  return gotNoteList;
}

async function deleteNote(noteId) {
  const noteCollection = await getCollection(collectionName);
  const deletedNote = await noteCollection.deleteOne(noteId);
  return deletedNote;
}

exports.setNewNote = setNewNote;
exports.getNoteList = getNoteList;
exports.deleteNote = deleteNote;
