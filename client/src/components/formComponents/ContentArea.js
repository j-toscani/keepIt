import React, { useState } from "react";
import { css } from "@emotion/core";
import firstLetterToUppercase from "../../lib/capitalFirstLetter";

export default function ContentArea({
  handleChange,
  inputAttribute,
  inputLabel,
  value,
  placeholder
}) {
  const fallbackValue = firstLetterToUppercase(inputAttribute);
  const [inputValue, setInputValue] = useState(value);

  return (
    <div
      css={css`
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin-top: 5px;
        margin-bottom: 10px;
        width: 100%;
      `}
    >
      <label>{inputLabel ? inputLabel : fallbackValue}</label>
      <textarea
        value={inputValue}
        css={css`
          width: 100%;
          height: 120px;
          max-width: 340px;
          margin: 10px;
          resize: none;
        `}
        required
        placeholder={
          placeholder ? placeholder : `Write your /"${fallbackValue}"/ here...`
        }
        onChange={event => {
          handleChange(inputAttribute, event.target.value);
        }}
      ></textarea>
    </div>
  );
}
