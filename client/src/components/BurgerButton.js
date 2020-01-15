import React, { useContext } from "react";
import { css } from "@emotion/core";
import Options from "../ressources/Options";
import { ThemeContext } from "../themes/ThemeContext";

export default function BurgerButton() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  console.log(theme);

  return (
    <button
      onClick={toggleTheme}
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
