import React from "react";
import styled from "styled-components";
import SmallTextInput from "./formComponents/SmallTextInput";
import TagInput from "./formComponents/TagInput";

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
  const [noteInformation, setNoteInformation] = React.useState({});

  function getInputValue(attribute, value) {
    const newNoteInformation = { ...noteInformation };
    newNoteInformation[attribute] = value;
    setNoteInformation(newNoteInformation);
  }

  function addTimeInfoToOutput() {
    const output = { ...noteInformation };

    if (output.content && output.name) {
      const timestamp = new Date(Date.now());
      const date = timestamp.toDateString();
      const dateTime =
        timestamp.getHours() +
        ":" +
        timestamp.getMinutes() +
        ":" +
        (timestamp.getSeconds() <= 9
          ? 0 + timestamp.getSeconds()
          : timestamp.getSeconds());
      output["published"] = { date, dateTime };
      return output;
    } else {
      alert("Please enter content and a headline to your note.");
    }
  }

  return (
    <>
      <StyledForm>
        <SmallTextInput handleChange={getInputValue} inputAttribute={"name"} />
        <TagInput
          handleChange={getInputValue}
          inputAttribute={"tags"}
          placeholder={"Tag1; Tag2; Tag3 ..."}
        />
        <label>Content</label>
        <textarea
          style={{ width: "240px" }}
          placeholder="Textfield to write stuff in..."
          onChange={event => getInputValue("content", event.target.value)}
        ></textarea>
        <button
          type="submit"
          onClick={e => {
            e.preventDefault();
            const output = addTimeInfoToOutput();
            console.log(output);
          }}
          onSubmit={e => {
            e.preventDefault();
            const output = addTimeInfoToOutput();

            console.log(output);
          }}
        >
          Submit
        </button>
      </StyledForm>
    </>
  );
}
