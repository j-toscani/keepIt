import React, { useContext } from "react";
import { css } from "@emotion/core";
import { ThemeContext } from "../themes/ThemeContext";

export default function Overlay({ open }) {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      css={css`
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        width: 75%;
        max-width: 350px;
        opacity: 0.9;
        background: ${theme.contrast};
        ${open
          ? css`
              transition: all 0.5s ease-in;
              transform: translateX(0%);
            `
          : css`
              transition: all 0.5s ease-in;
              transform: translateX(-100%);
            `};
      `}
    ></div>
  );
}
