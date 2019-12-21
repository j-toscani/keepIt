import React from "react";
import styled from "styled-components";

const StyledForm = styled.form`
  background: ${props => props.theme.accent};
  max-width: 280px;
  margin-top: auto;
  padding: 20px;
  display: flex;
  justify-content: space-around;
  min-height: 200px;
  align-items: center;
  flex-direction: column;
  border-radius: 10px;
  color: ${props => props.theme.mainFont};
`;

const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const TextField = styled.p`
  margin: 20px;
  border: 1px solid black;
  padding: 10px;
`;

export default function OutputTest() {
  return (
    <Container>
      <StyledForm>
        <label htmlFor="noteId">ID</label>
        <input name="noteId" placeholder="Note-ID"></input>
        <button type="submit">Get note...</button>
      </StyledForm>
      <TextField>Empty</TextField>
    </Container>
  );
}
