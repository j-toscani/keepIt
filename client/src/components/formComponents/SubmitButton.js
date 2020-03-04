import React from "react";
import createNewNote from "../../lib/createNewNote";
import Button from "../Button";

export default function SubmitButton({ noteInformation }) {
  async function submitFunction(event) {
    event.preventDefault();
    createNewNote(noteInformation);
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
