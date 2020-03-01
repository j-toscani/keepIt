/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import firstLetterToUppercase from "../../lib/capitalFirstLetter";

export default function ContentArea({
  handleChange,
  inputAttribute,
  inputLabel,
  placeholder
}) {
  const fallbackValue = firstLetterToUppercase(inputAttribute);
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
        placeholder={
          placeholder ? placeholder : `Write your /"${fallbackValue}"/ here...`
        }
        onChange={handleChange}
      ></textarea>
    </div>
  );
}
