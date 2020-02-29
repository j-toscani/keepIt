import React, { useContext } from "react";
import { css } from "@emotion/core";
import LogoColor from "./LogoColor";
import StyledHeader from "./StyledHeader";
import Button from "./Button";
import Option from "../ressources/Options";

import { ThemeContext } from "../themes/ThemeContext";

export default function Top({ darkmode }) {
  const { toggleTheme } = useContext(ThemeContext);
  return (
    <StyledHeader>
      <Button
        onClick={toggleTheme}
        css={css`
          padding: 1px;
        `}
      >
        <Option />
      </Button>
      <h1>KeepIT</h1>
      <LogoColor darkmode={darkmode} />
    </StyledHeader>
  );
}
