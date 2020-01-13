/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import createNewNote from "../../lib/createNewNote";

export default function SubmitButton({ noteInformation }) {
  return (
    <button
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
    </button>
  );
}
