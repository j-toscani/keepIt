import { css } from "@emotion/core";
import Options from "../ressources/Options";

export default function BurgerButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      css={css`
        height: 40px;
        width: 40px;
        padding: 5px;
        margin: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: none;
        border: none;
      `}
    >
      <Options />
    </button>
  );
}
