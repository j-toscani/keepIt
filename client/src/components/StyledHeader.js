import React, { useContext } from "react";
import { css } from "@emotion/core";
import { ThemeContext } from "../themes/ThemeContext";

export default function StyledHeader({ children }) {
  const { theme } = useContext(ThemeContext);

  return (
    <header
      css={css`
        background: ${theme.accent};
        display: flex;
        padding: 20px;
        width: 100%;
        height: 100%;
        align-items: center;
        justify-content: space-around;
      `}
    >
      {children}
    </header>
  );
}
