import React from "react";
import { css } from "@emotion/core";

export default function MainContainer({ children }) {
  return (
    <main
      css={css`
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        overflow: auto;
        flex-wrap: wrap;
        ::-webkit-scrollbar {
          display: none;
        }
      `}
    >
      {children}
    </main>
  );
}
