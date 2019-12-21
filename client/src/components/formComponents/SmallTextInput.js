import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const StyledInput = styled.input`
  max-width: 80px;
`;

export default function SmallTextInput({
  handleChange,
  inputAttribute,
  inputLabel,
  placeholder
}) {
  return (
    <StyledContainer>
      <label htmlFor={inputAttribute}>
        {inputLabel ? inputLabel : inputAttribute}{" "}
      </label>
      <StyledInput
        name={inputAttribute}
        placeholder={placeholder ? placeholder : inputAttribute}
        onChange={event => handleChange(inputAttribute, event.target.value)}
      ></StyledInput>
    </StyledContainer>
  );
}
