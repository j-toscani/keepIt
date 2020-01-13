/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Global, css } from "@emotion/core";

export default function GlobalStyles() {
  //change with styles
  return (
    <Global
      styles={css`
        *,
        *:before,
        *:after {
          box-sizing: border-box;
        }
        body {
          font-size: 16px;
          margin: 0;
          padding: 0;
          background: black;
          color: white;
          font-family: "Roboto", sans-serif;
        }
      `}
    ></Global>
  );
}
