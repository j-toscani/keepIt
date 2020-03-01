import React, { useContext } from "react";
import { css } from "@emotion/core";
import { ThemeContext } from "../themes/ThemeContext";

export default function Button({ handleClick, children, className }) {
  const { theme } = useContext(ThemeContext);

  return (
    <button
      onClick={handleClick}
      onSubmit={handleClick}
      css={css`
        display: flex;
        align-items: center;
        justify-content: center;
        border: none;
        border-radius: 5px;
        color: ${theme.contrast};
        fill: ${theme.contrast};
        background: ${theme.accent};
      `}
      className={className}
    >
      {children}
    </button>
  );
}
