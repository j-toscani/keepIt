/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const MainContainer = ({ children }) => (
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

export default MainContainer;
