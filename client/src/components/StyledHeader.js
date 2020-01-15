import React from "react";
import { css } from "@emotion/core";

export default function StyledHeader(props) {
  return (
    <header
      css={css`
        background: red;
        color: orange;
        display: flex;
        padding: 20px;
        width: 100%;
        height: 100%;
        align-items: center;
        justify-content: space-around;
      `}
    >
      {props.children}
    </header>
  );
}
