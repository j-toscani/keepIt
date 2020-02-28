//Create generic form component for "NewNote" and "Regist/Login" forms

import React, { useState, useContext } from "react";
import { css } from "@emotion/core";
import Button from "./Button";
import { ThemeContext } from "../themes/ThemeContext";
import SmallTextInput from "./formComponents/SmallTextInput";

export default function Form( {inputElements}) {
  const [noteInformation, setNoteInformation] = useState({});
  const { theme } = useContext(ThemeContext);

  function createGetInputValue(seperator) {
    function getInputValue(attribute, value) {
      const newNoteInformation = { ...noteInformation };
      if (seperator) {
        const stringOfTags = value;
        newNoteInformation[attribute] = stringOfTags
          .split(seperator)
          .map(tag => tag.trim());
      } else {
        newNoteInformation[attribute] = value;
      }
      setNoteInformation(newNoteInformation);
    }
    return getInputValue;
  }

  return (
    <form
      autocomplete="off"
      css={css`
        background: ${theme.contrast};
        max-width: 300px;
        display: flex;
        flex-direction: column;
        margin: auto;
        padding: 10px;
        justify-content: space-between;
        align-items: center;
        color: ${theme.mainFont};
      `}
    >
      {inputElements && inputElements.map((inputElement) => {
          const {type, attribute, placeholder} = inputElement;
          if ( !type || !attribute || !placeholder){
              throw console.error("Missing formelement information!");
          }
          else if (type === "text"){
              return <SmallTextInput handleChange={createGetInputValue()} inputAttribute={attribute} placeholder={placeholder} type={inputElement.HTMLInputType ? inputElement.HTMLInputType : ""}/>
          } else if (type === "tag"){
            return <SmallTextInput handleChange={createGetInputValue(inputElement.seperator)} inputAttribute={attribute} placeholder={placeholder} type={inputElement.HTMLInputType ? inputElement.HTMLInputType : ""}/>
          }
      })}
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
