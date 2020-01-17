import React from "react";
import { css } from "@emotion/core";

export default function MainContainer({ children }) {
  return (
    <main
      css={css`
        margin: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        overflow: auto;
        flex-wrap: wrap;
      `}
    >
      {children}
    </main>
  );
}
