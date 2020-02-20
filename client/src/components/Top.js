import React from "react";
import LogoColor from "./LogoColor";
import StyledHeader from "./StyledHeader";
import Button from "./Button";
import Option from "../ressources/Options";

export default function Top({ darkmode }) {
  return (
    <StyledHeader>
      <Button burgerButton>
        <Option />
      </Button>
      <h1>KeepIT</h1>
      <LogoColor darkmode={darkmode} />
    </StyledHeader>
  );
}
