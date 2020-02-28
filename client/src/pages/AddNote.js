import React, { useContext } from "react";
import NewNoteForm from "../components/NewNoteForm";
import { css } from "@emotion/core";
import { ThemeContext } from "../themes/ThemeContext";

export default function AddNote() {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      css={css`
        padding: 10px;
        width: 280px;
        background: ${theme.contrast};
      `}
    >
      <NewNoteForm />
    </div>
  );
}
