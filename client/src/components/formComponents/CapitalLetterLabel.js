/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import firstLetterToUppercase from "../../lib/capitalFirstLetter";

export default function CapitalLetterLabel({ inputLabel, inputAttribute }) {
  return (
    <label
      css={css`
        width: 100%;
        margin-bottom: 5px;
      `}
      htmlFor={inputAttribute}
    >
      {inputLabel ? inputLabel : firstLetterToUppercase(inputAttribute)}
    </label>
  );
}
