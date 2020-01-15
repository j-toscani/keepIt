import { css } from "@emotion/core";

const StyledHeader = () => (
  <header
    css={css`
      background: ${props => props.theme.contrast};
      color: ${props => props.theme.mainFont};
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
