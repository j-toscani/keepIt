import React from "react";
import createNewNote from "../../lib/createNewNote";
import Button from "../Button";

export default function SubmitButton({ noteInformation }) {
  async function submitFunction(event) {
    event.preventDefault();
    createNewNote(noteInformation).then(
      () => console.log("sending data was successful"),
      () => console.log("creating note was unsseccessful")
    );
  }
  return (
    <Button
      type="submit"
      handleClick={event => submitFunction(event)}
      handleSubmit={event => submitFunction(event)}
    >
      Submit
    </Button>
  );
}
