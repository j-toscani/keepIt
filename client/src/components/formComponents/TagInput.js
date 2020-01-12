import React from "react";
import { css } from "@emotion/core";

export default function TagInput({
  handleChange,
  inputAttribute,
  inputLabel,
  placeholder
}) {
  return (
    <div
      css={css`
        width: 100%;
        display: flex;
        justify-content: space-between;
      `}
    >
      <label htmlFor={inputAttribute}>
        {inputLabel ? inputLabel : inputAttribute}
      </label>
      <input
        css={css`
          max-width: 80px;
        `}
        name={inputAttribute}
        placeholder={placeholder ? placeholder : inputAttribute}
        onChange={event =>
          handleChange(inputAttribute, event.target.value.split(";"))
        }
      ></input>
    </div>
  );
}
