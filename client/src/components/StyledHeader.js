/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const StyledHeader = () => (
  //change with styles
  <header
    css={css`
      background: yellow;
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
