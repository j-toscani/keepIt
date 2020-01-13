/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const StyledHeader = () => (
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
  ></header>
);

export default StyledHeader;
