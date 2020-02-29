import React from "react";
import Button from "../src/components/Button";
import Option from "../src/ressources/Options";
import Cross from "../src/ressources/Cross";
import { css } from "@emotion/core";

export default {
  title: "Buttons"
};

export const MenuButton = () => (
  <Button
    burgerButton
    children={<Option />}
    handleClick={() => alert("Clicked!")}
  />
);

export const DefaultButton = () => (
  <Button
    burgerButton
    children={"Click me!"}
    handleClick={() => alert("Clicked!")}
  />
);

export const ButtonCross = () => (
  <Button
    css={css`
      border-radius: 50px;
      padding: 5px;
      background: #402b18;
      border: 1px solid #f2d4ae;
    `}
  >
    <Cross
      css={css`
        fill: #f2d4ae;
        transform: rotate(45deg);
      `}
    />
  </Button>
);
