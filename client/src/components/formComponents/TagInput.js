/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import CapitalLetterLabel from "./CapitalLetterLabel";

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
      <CapitalLetterLabel
        inputAttribute={inputAttribute}
        inputLabel={inputLabel}
      />
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
