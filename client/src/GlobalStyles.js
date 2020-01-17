/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Global, css } from "@emotion/core";
import { useContext } from "react";
import { ThemeContext } from "./themes/ThemeContext";

export default function GlobalStyles() {
  const { theme } = useContext(ThemeContext);

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
          background: ${theme.main};
          color: ${theme.mainFont};
          font-family: "Roboto", sans-serif;
        }
      `}
    ></Global>
  );
}
