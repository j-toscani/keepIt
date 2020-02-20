/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import firstLetterToUppercase from "../../lib/capitalFirstLetter";

export default function SmallTextInput({
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
        {inputLabel ? inputLabel : firstLetterToUppercase(inputAttribute)}
      </label>
      <input
        css={css`
          max-width: 80px;
        `}
        name={inputAttribute}
        placeholder={placeholder ? placeholder : inputAttribute}
        onChange={event => handleChange(inputAttribute, event.target.value)}
      ></input>
    </div>
  );
}
