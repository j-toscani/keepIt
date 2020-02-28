/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import CapitalLetterLabel from "./CapitalLetterLabel";
import firstLetterToUppercase from "../../lib/capitalFirstLetter";

export default function SmallTextInput({
  handleChange,
  inputAttribute,
  type,
  placeholder
}) {
  const altPlaceholder = firstLetterToUppercase(inputAttribute);
  return (
    <div
      css={css`
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 15px;
      `}
    >
      <CapitalLetterLabel inputAttribute={inputAttribute} />
      <input
        css={css`
          max-width: 120px;
          margin-left: 10px;
        `}
        type={type}
        name={inputAttribute}
        placeholder={placeholder ? placeholder : altPlaceholder}
        onChange={event => handleChange(inputAttribute, event.target.value)}
      ></input>
    </div>
  );
}
