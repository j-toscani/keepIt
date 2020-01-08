import React from "react";
import styled from "styled-components";
import Note from "./Note";

const TextField = styled.div`
  margin: 20px;
  border: 1px solid black;
  padding: 10px;
`;

export default function OutputTest({ setData, data }) {
  return (
    <TextField>
      {data != null &&
        data.map(entry => (
          <Note key={entry._id} entry={entry} setData={setData}></Note>
        ))}
    </TextField>
  );
}
