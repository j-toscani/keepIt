//Create generic form component for "NewNote" and "Regist/Login" forms

import React, { useState, useContext } from "react";
import { css } from "@emotion/core";
import Button from "./Button";
import { ThemeContext } from "../themes/ThemeContext";

export default function Form() {
  const [noteInformation, setNoteInformation] = useState({});
  const { theme } = useContext(ThemeContext);

  function createGetInputValue(seperator) {
    function getInputValue(attribute, value) {
      const newNoteInformation = { ...noteInformation };
      if (seperator) {
        const stringOfTags = value; 
        newNoteInformation[attribute] = stringOfTags.split(seperator).map(tag => tag.trim());
      } else {
          newNoteInformation[attribute] = value;
      }
      setNoteInformation(newNoteInformation);
    }
    return newConverterFunction;
  }

  return (
    <form
      css={css`
        background: ${theme.contrast};
        max-width: 300px;
        display: flex;
        flex-direction: column;
        margin: auto;
        justify-content: space-between;
        align-items: center;
        color: ${theme.mainFont};
      `}
    >
      <Button
        handleClick={e => {
          e.preventDefault();
          alert("You are gettin logged in...");
        }}
      >
        {"Log in..."}
      </Button>
    </form>
  );
}
