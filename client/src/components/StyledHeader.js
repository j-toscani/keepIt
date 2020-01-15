// For some reason, parcel won't allow process.env.NODE_ENV access (process is undefined) if there is not "process" in the file.
// @emotion/babel-preset-css-prop will transform this file and access process.env.NODE_ENV (see https://emotion.sh/docs/@emotion/babel-preset-css-prop#example), but parcel will not notice (https://en.parceljs.org/env.html#%F0%9F%8C%B3-environment-variables).
// A workaround is to write "process" in this file (comment works):
// process;
// I would recommend to create a Parcel issue.

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
