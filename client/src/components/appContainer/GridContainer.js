/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const GridContainer = ({ children }) => (
  <div
    css={css`
      margin: 0;
      width: 100vw;
      height: 100vh;
      display: grid;
      grid-template: 80px 1fr / 1fr;
    `}
  >
    {children}
  </div>
);

export default GridContainer;
