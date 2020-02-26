import React from "react";
import createNewNote from "../../lib/createNewNote";
import Button from "../Button";

export default function SubmitButton({ noteInformation }) {
  return (
    <Button
      type="submit"
      handleClick={async e => {
        e.preventDefault();
        createNewNote(noteInformation).then(response => console.log(response));
      }}
      handleSubmit={async e => {
        e.preventDefault();
        createNewNote(noteInformation).then(
          () => console.log("sending data was successful"),
          () => console.log("creating note was unsseccessful")
        );
      }}
    >
      Submit
    </Button>
  );
}
