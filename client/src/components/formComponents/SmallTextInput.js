/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import CapitalLetterLabel from "./CapitalLetterLabel";

export default function SmallTextInput({
  handleChange,
  inputAttribute,
  inputLabel
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
          max-width: 120px;
        `}
        name={inputAttribute}
        placeholder={inputAttribute}
        onChange={event => handleChange(inputAttribute, event.target.value)}
      ></input>
    </div>
  );
}
