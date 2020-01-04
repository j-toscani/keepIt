import React from "react";
import { fetchNoteList, deleteEntry } from "../lib/fetchNotes";

export default function Note({ entry, setData }) {
  return (
    <div key={entry._id}>
      <ul>
        <li>{entry._id}</li>
        <li>{entry.name}</li>
        <li>{entry.content}</li>
        <li>{(entry.published.date, entry.published.dateTime)}</li>
      </ul>
      <button
        onClick={() => {
          deleteEntry("/notes", entry._id);
          fetchNoteList("/notes").then(response => setData(response));
        }}
      >
        X
      </button>
    </div>
  );
}
