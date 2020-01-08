import React from "react";
import { fetchList, deleteEntry } from "../api/notes";

export default function Note({ entry, setData }) {
  return (
    <div>
      <ul>
        <li>{entry._id}</li>
        <li>{entry.name}</li>
        <li>{entry.content}</li>
        <li>{(entry.published.date, entry.published.dateTime)}</li>
      </ul>
      <button
        onClick={() => {
          deleteEntry("/notes", entry._id);
          fetchList("/notes").then(response => setData(response));
        }}
      >
        X
      </button>
    </div>
  );
}
