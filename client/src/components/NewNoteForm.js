import React, { Fragment, useState, useContext } from "react";
import { css } from "@emotion/core";

import SmallTextInput from "./formComponents/SmallTextInput";
import SubmitButton from "./formComponents/SubmitButton";
import { ThemeContext } from "../themes/ThemeContext";

export default function NewNoteForm() {
  const [noteInformation, setNoteInformation] = useState({});
  const { theme } = useContext(ThemeContext);

  function getInputValue(attribute, value) {
    const newNoteInformation = { ...noteInformation };
    newNoteInformation[attribute] = value;
    setNoteInformation(newNoteInformation);
  }

  function getInputValueToArray(seperator) {
    function newConverterFunction(attribute, value) {
      const newNoteInformation = { ...noteInformation };
      newNoteInformation[attribute] = value.split(seperator);
      setNoteInformation(newNoteInformation);
    }
    return newConverterFunction;
  }

  return (
    <form
      css={css`
        background: ${theme.contrast};
        max-width: 280px;
        min-height: 420px;
        margin: auto;
        padding: 20px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-direction: column;
        color: ${theme.mainFont};
      `}
    >
      <SmallTextInput handleChange={getInputValue} inputAttribute={"name"} />
      <SmallTextInput
        handleChange={getInputValueToArray(";")}
        inputAttribute={"tags"}
        placeholder={"Tag1; Tag2; Tag3 ..."}
      />
      <label>Content</label>
      <textarea
        style={{ width: "240px" }}
        placeholder="Textfield to write stuff in..."
        onChange={event => getInputValue("content", event.target.value)}
      ></textarea>
      <SubmitButton noteInformation={noteInformation} />
    </form>
  );
}
