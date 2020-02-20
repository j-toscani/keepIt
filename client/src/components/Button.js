import React, { useContext } from "react";
import { css } from "@emotion/core";

import { ThemeContext } from "../themes/ThemeContext";

export default function Button({ children, burgerButton }) {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      css={css`
        display: flex;
        align-items: center;
        justify-content: center;
        background: none;
        border: none;
        border-radius: 5px;
        color: ${theme.contrast};
        background: ${theme.accent};
        ${burgerButton
          ? css`
              padding: 5px;
              box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.5);
            `
          : css`
              padding: 10px;
              margin: 10px;
              box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.2);
            `};
      `}
    >
      {children}
    </button>
  );
}
