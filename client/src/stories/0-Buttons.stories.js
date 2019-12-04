import React from "react";
import BurgerButton from "../components/BurgerButton";

export default {
  title: "Buttons"
};

export const MenuButton = () => (
  <BurgerButton handleClick={alert("Clicked!")} />
);
