import { createNewEntry } from "../api/notes";

function addDateAndTimeInfoToData(data) {
  const timestamp = new Date(Date.now());
  const date = timestamp.toDateString();
  const dateTime =
    timestamp.getHours() +
    ":" +
    (timestamp.getMinutes() <= 9
      ? 0 + timestamp.getMinutes()
      : timestamp.getMinutes()) +
    ":" +
    (timestamp.getSeconds() <= 9
      ? 0 + timestamp.getSeconds()
      : timestamp.getSeconds());
  data["published"] = { date, dateTime, timestamp };
  return data;
}

export default async function createNewNote(formData) {
  let note = { ...formData };
  if (note.content && note.name) {
    try {
      note = addDateAndTimeInfoToData(note);
      const value = await createNewEntry("http://localhost:5000/notes", note);
      return value.json();
    } catch (err) {
      return err;
    }
  } else {
    alert("Please enter content and a headline to your note.");
  }
}
