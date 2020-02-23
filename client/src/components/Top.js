import React, { useContext } from "react";
import LogoColor from "./LogoColor";
import StyledHeader from "./StyledHeader";
import Button from "./Button";
import Option from "../ressources/Options";

import { ThemeContext } from "../themes/ThemeContext";

export default function Top({ darkmode }) {
  const { toggleTheme } = useContext(ThemeContext);
  return (
    <StyledHeader>
      <Button onClick={toggleTheme} burgerButton>
        <Option />
      </Button>
      <h1>KeepIT</h1>
      <LogoColor darkmode={darkmode} />
    </StyledHeader>
  );
}
