import React, { useContext } from "react";
import NewNoteForm from "../components/NewNoteForm";
import { css } from "@emotion/core";
import { ThemeContext } from "../themes/ThemeContext";
import Button from "../components/Button";
import Cross from "../ressources/Cross";

export default function AddNote() {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      css={css`
        padding: 10px;
        width: 280px;
        background: ${theme.contrast};
        position: relative;
      `}
    >
      <Button
        css={css`
          border-radius: 50px;
          padding: 5px;
          background: #402b18;
          border: 1px solid #f2d4ae;
          position: absolute;
          right: -18px;
          top: -18px;
        `}
      >
        <Cross
          css={css`
            fill: #f2d4ae;
            transform: rotate(45deg);
          `}
        ></Cross>
      </Button>
      <NewNoteForm />
    </div>
  );
}
