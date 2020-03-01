import React, { useContext } from "react";
import { css } from "@emotion/core";
import Button from "../components/Button";
import Cross from "../ressources/Cross";
import { ThemeContext } from "../themes/ThemeContext";
import { useHistory } from "react-router-dom";
import Note from "../components/Note";

export default function Notes() {
  const { theme } = useContext(ThemeContext);
  let history = useHistory();

  function goToAddNotes() {
    history.push("/addnote");
  }

  const entry = {
    _id: 1,
    name: "My Note...",
    content:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero quisquam, nobis cumque quam similique tenetur cum minus temporibus rem est nisi, non, id ratione sed voluptate maiores earum repellendus vel."
  };

  const entryArray = [entry, entry, entry, entry, entry];

  return (
    <div
      css={css`
        width: 100%;
        height: 100%;
        display: flex;
        flex-flow: wrap;
        justify-content: center;
      `}
    >
      {entryArray &&
        entryArray.map((entry, index) => <Note key={index} entry={entry} />)}
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
