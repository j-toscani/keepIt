import React from "react";
import styled from "styled-components";
import { fetchNoteList, deleteEntry } from "../lib/fetchNotes";

const TextField = styled.div`
  margin: 20px;
  border: 1px solid black;
  padding: 10px;
`;

export default function OutputTest({ setData, data }) {
  return (
    <TextField>
      {data != null &&
        data.map(entry => (
          <div key={entry._id}>
            {entry._id +
              " " +
              entry.name +
              " " +
              entry.content +
              " " +
              entry.published}
            <button
              onClick={() => {
                deleteEntry("/notes", entry._id);
                fetchNoteList("/notes").then(response => setData(response));
              }}
            >
              X
            </button>
          </div>
        ))}
    </TextField>
  );
}
