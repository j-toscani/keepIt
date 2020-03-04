import React, { useContext } from "react";
import NewNoteForm from "../components/NewNoteForm";
import { css } from "@emotion/core";
import { ThemeContext } from "../themes/ThemeContext";
import Button from "../components/Button";
import Cross from "../ressources/Cross";
import { useHistory } from "react-router-dom";

export default function AddNote({ token }) {
  const { theme } = useContext(ThemeContext);

  let history = useHistory();

  function goToBackNotes() {
    history.push("/notes");
  }

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
          background: ${theme.contrast};
          border: 1px solid ${theme.accent};
          position: absolute;
          right: -18px;
          top: -18px;
        `}
        handleClick={goToBackNotes}
      >
        <Cross
          css={css`
            fill: ${theme.accent};
            transform: rotate(45deg);
          `}
        ></Cross>
      </Button>
      <NewNoteForm token={token} />
    </div>
  );
}
