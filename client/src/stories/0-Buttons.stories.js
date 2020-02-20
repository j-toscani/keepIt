import React from "react";
import Button from "../components/Button";
import Option from "../ressources/Options";

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
