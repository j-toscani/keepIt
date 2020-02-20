import React from "react";
import createNewNote from "../../lib/createNewNote";
import Button from "../Button";

export default function SubmitButton({ noteInformation }) {
  return (
    <Button
      type="submit"
      onClick={e => {
        e.preventDefault();
        createNewNote(noteInformation);
      }}
      onSubmit={e => {
        e.preventDefault();
        createNewNote(noteInformation);
      }}
    >
      Submit
    </Button>
  );
}
