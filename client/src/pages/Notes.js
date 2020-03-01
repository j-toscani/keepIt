import React, { useContext } from "react";
import { css } from "@emotion/core";
import Button from "../components/Button";
import Cross from "../ressources/Cross";
import { ThemeContext } from "../themes/ThemeContext";
import { useHistory } from "react-router-dom";

export default function Notes() {
  const { theme } = useContext(ThemeContext);
  let history = useHistory();

  function goToAddNotes() {
    history.push("/addnote");
  }
  return (
    <div
      css={css`
        width: 100%;
        height: 100%;
      `}
    >
      {"You are at the Notes Page. Should only show if not logged in!"}
      <Button
        css={css`
          border-radius: 50px;
          padding: 5px;
          background: ${theme.contrast};
          border: 1px solid ${theme.accent};
          position: absolute;
          bottom: 20px;
          right: 20px;
        `}
        handleClick={goToAddNotes}
      >
        <Cross
          css={css`
            fill: ${theme.accent};
          `}
        />
      </Button>
    </div>
  );
}
