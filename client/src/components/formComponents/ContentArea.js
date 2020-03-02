import React, { useState } from "react";
import { css } from "@emotion/core";
import firstLetterToUppercase from "../../lib/capitalFirstLetter";

export default function ContentArea({
  handleChange,
  inputAttribute,
  inputLabel,
  placeholder,
  value
}) {
  const fallbackValue = firstLetterToUppercase(inputAttribute);
  const [inputValue, setinputValue] = useState(value);
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
        css={css`
          width: 100%;
          height: 120px;
          max-width: 340px;
          margin: 10px;
          resize: none;
        `}
        required
        value={value}
        placeholder={
          placeholder ? placeholder : `Write your /"${fallbackValue}"/ here...`
        }
        onChange={handleChange}
      ></textarea>
    </div>
  );
}
