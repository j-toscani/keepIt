import React, { useState, useContext } from "react";
import { css } from "@emotion/core";
import Button from "./Button";
import { ThemeContext } from "../themes/ThemeContext";
import SmallTextInput from "./formComponents/SmallTextInput";
import ContentArea from "./formComponents/ContentArea";

export default function Form({
  inputElements,
  onFormSubmit,
  buttonContent,
  action
}) {
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
      onSubmit={() => onFormSubmit(noteInformation)}
      action={action}
      autoComplete="off"
      css={css`
        background: ${theme.contrast};
        height: 100%;
        width: 100%;
        padding: 10px;
        color: ${theme.mainFont};
      `}
    >
      {inputElements &&
        inputElements.map(inputElement => {
          const { type, attribute, placeholder } = inputElement;
          if (!type || !attribute || !placeholder) {
            throw console.error(
              "Missing formelement information for inputElement: ",
              type
            );
          } else if (type === "text") {
            return (
              <SmallTextInput
                key={attribute}
                handleChange={createGetInputValue()}
                inputAttribute={attribute}
                placeholder={placeholder}
                type={
                  inputElement.HTMLInputType ? inputElement.HTMLInputType : ""
                }
              />
            );
          } else if (type === "tag") {
            return (
              <SmallTextInput
                key={attribute}
                handleChange={createGetInputValue(inputElement.seperator)}
                inputAttribute={attribute}
                placeholder={placeholder}
                type={
                  inputElement.HTMLInputType ? inputElement.HTMLInputType : ""
                }
              />
            );
          } else if (type === "textArea" || "textarea") {
            return (
              <ContentArea
                key={attribute}
                handleChange={createGetInputValue()}
                inputAttribute={attribute}
                placeholder={placeholder}
                inputLabel={inputElement.label ? inputElement.label : false}
              />
            );
          }
        })}
      <Button
        css={css`
          padding: 10px;
          font-size: 16px;
          margin: auto;
          margin-top: 20px;
        `}
        handleClick={e => {
          e.preventDefault();
          onFormSubmit(noteInformation);
        }}
      >
        {buttonContent}
      </Button>
    </form>
  );
}
