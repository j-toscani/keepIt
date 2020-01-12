import { Global, css } from "styled-components";

export default function GlobalStyles() {
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
          background: ${props => props.theme.main};
          color: ${props => props.theme.accentFont};
          font-family: "Roboto", sans-serif;
        }
      `}
    ></Global>
  );
}
