import { css } from "@emotion/core";

const StyledHeader = ({ children }) => (
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
    {children}
  </header>
);

export default StyledHeader;
