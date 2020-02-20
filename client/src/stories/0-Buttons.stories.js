import React from "react";
import Button from "../components/Button";

export default {
  title: "Buttons"
};

export const MenuButton = () => (
  <Button handleClick={() => alert("Clicked!")} />
);
