/** @jsx jsx */
import { css, jsx } from "@emotion/core";

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
        {inputLabel ? inputLabel : inputAttribute}{" "}
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
