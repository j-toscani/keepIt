import React, { useContext } from "react";
import { css } from "@emotion/core";
import Options from "../ressources/Options";
import { ThemeContext } from "../themes/ThemeContext";

export default function BurgerButton() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      css={css`
        height: 40px;
        width: 40px;
        padding: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        background: none;
        border: 0;
        border-radius: 5px;
        background: ${theme.contrast};
      `}
    >
      <Options />
    </button>
  );
}
