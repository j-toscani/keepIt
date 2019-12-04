import React from "react";
import styled from "styled-components";

const StyledForm = styled.form`
  background: ${props => props.theme.accent};
  max-width: 280px;
  min-height: 300px;
  margin: auto;
  padding: 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  border-radius: 10px;
  color: ${props => props.theme.mainFont};
`;

export default function Form() {
  return (
    <>
      <StyledForm>
        <label>Name</label>
        <input placeholder="Name"></input>
        <label>Tags</label>
        <input placeholder="Tag1; Tag2; Tag3 ..."></input>
        <label>Content</label>
        <textarea
          style={{ maxWidth: "240px" }}
          placeholder="Textfield to write stuff in..."
        ></textarea>
        <button type="submit">Submit</button>
      </StyledForm>
    </>
  );
}
