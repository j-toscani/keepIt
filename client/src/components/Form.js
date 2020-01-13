/** @jsx jsx */

import { Fragment, useState } from "react";
import { css, jsx } from "@emotion/core";

import SmallTextInput from "./formComponents/SmallTextInput";
import TagInput from "./formComponents/TagInput";
import SubmitButton from "./formComponents/SubmitButton";

export default function Form() {
  const [noteInformation, setNoteInformation] = useState({});

  function getInputValue(attribute, value) {
    const newNoteInformation = { ...noteInformation };
    newNoteInformation[attribute] = value;
    setNoteInformation(newNoteInformation);
  }

  return (
    // change with styles
    <Fragment>
      <form
        css={css`
          background: green;
          max-width: 280px;
          min-height: 300px;
          margin: auto;
          padding: 20px;
          display: flex;
          justify-content: space-around;
          align-items: center;
          flex-direction: column;
          border-radius: 10px;
          color: black;
        `}
      >
        <SmallTextInput handleChange={getInputValue} inputAttribute={"name"} />
        <TagInput
          handleChange={getInputValue}
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
    </Fragment>
  );
}
