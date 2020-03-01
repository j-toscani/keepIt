import React from "react";
import SmallTextInput from "../src/components/formComponents/SmallTextInput";
import Form from "../src/components/Form";
import { css } from "@emotion/core";

export default {
  title: "Form Elements"
};

export const TextInput = () => (
  <div style={{ width: "100px" }}>
    <SmallTextInput
      inputAttribute={"name"}
      onClick={() =>
        alert(
          `You clicked the Textinput with the following props: InputAttribute:${inputAttribute}, placeholder:${inputAttribute}, inputLabel:${
            inputLabel ? inputLabel : "Fallback value of inputLabel"
          }`
        )
      }
    />
  </div>
);

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
    placeholder: "E.g. : Tag1; Tag2 ...",
    attribute: "tags",
    HTMLInputType: "text",
    seperator: ";",
    type: "text"
  }
];

export const FormTest = () => {
  return (
    <div
      css={css`
        max-width: 280px;
        min-height: 420px;
        margin: auto;
        background: #402b18;
        padding: 15px;
        padding-top: 40px;
      `}
    >
      <Form inputElements={inputElements} buttonContent={"Add Note!"} />
    </div>
  );
};
