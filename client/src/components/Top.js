import React from "react";
import LogoColor from "./LogoColor";
import StyledHeader from "./StyledHeader";
import BurgerButton from "./BurgerButton";

export default function Top({ handleClick, darkmode }) {
  return (
    <StyledHeader>
      <BurgerButton onClick={handleClick} />
      <h1>KeepIT</h1>
      <LogoColor darkmode={darkmode} />
    </StyledHeader>
  );
}
