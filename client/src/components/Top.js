import React from "react";
import LogoColor from "./LogoColor";
import StyledHeader from "./StyledHeader";
import BurgerButton from "./BurgerButton";

export default function Top({ darkmode }) {
  return (
    <StyledHeader>
      <BurgerButton />
      <h1>KeepIT</h1>
      <LogoColor darkmode={darkmode} />
    </StyledHeader>
  );
}
