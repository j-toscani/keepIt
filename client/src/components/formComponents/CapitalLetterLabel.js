/** @jsx jsx */
import { jsx } from "@emotion/core";
import firstLetterToUppercase from "../../lib/capitalFirstLetter";

export default function CapitalLetterLabel({ inputLabel, inputAttribute }) {
  return (
    <label htmlFor={inputAttribute}>
      {inputLabel ? inputLabel : firstLetterToUppercase(inputAttribute)}
    </label>
  );
}
