import React, { useContext } from "react";
import { css } from "@emotion/core";
import { ThemeContext } from "../themes/ThemeContext";
import Form from "./Form";
import createNewNote from "../lib/createNewNote";

export default function NewNoteForm({ token }) {
  const { theme } = useContext(ThemeContext);

  const inputElements = [
    {
      placeholder: "Name your note",
      attribute: "name",
      type: "text",
      HTMLInputType: "text"
    },
    {
      placeholder: "Put your Content here!",
      attribute: "content",
      type: "textArea",
      label: "Content"
    },
    {
      placeholder: "E.g.: Tag1; Tag2 ...",
      attribute: "tags",
      seperator: ";",
      HTMLInputType: "text",
      type: "text"
    }
  ];

  return (
    <div
      css={css`
        max-width: 280px;
        min-height: 380px;
        margin: auto;
        background: ${theme.contrast};
        padding: 15px;
      `}
    >
      <Form
        onFormSubmit={formData => {
          createNewNote(formData, token)
            .then(() => alert("Note created"))
            .catch(() => alert("Note not created"));
        }}
        inputElements={inputElements}
        buttonContent={"Add Note!"}
      />
    </div>
  );
}
