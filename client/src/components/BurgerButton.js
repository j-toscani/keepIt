import React from "react";
import styled from "styled-components";
import Options from "../ressources/Options";

const StyledButton = styled.button`
  height: 40px;
  width: 40px;
  padding: 5px;
  margin: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
`;

export default function BurgerButton({ onClick }) {
  return (
    <StyledButton onClick={onClick}>
      <Options />
    </StyledButton>
  );
}
