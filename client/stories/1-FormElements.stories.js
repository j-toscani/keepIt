import React from "react";
import SmallTextInput from "../src/components/formComponents/SmallTextInput";
import Form from "../src/components/Form";

export default {
  title: "Form Elements"
};

export const TextInput = () => (
  <div style={{ width: "100px" }}>
    <SmallTextInput
      inputAttribute={"name"}
      onClick={() =>
        alert(
          `You clicked the Textinput with the following props: InputAttribute:${inputAttribute}, placeholder:${inputAttribute}, inputLabel:${
            inputLabel ? inputLabel : "Fallback value of inputLabel"
          }`
        )
      }
    />
  </div>
);

const inputElements = [
  {
    placeholder: "Name",
    attribute:"name",
    type: "text",
    HTMLInputType: "text"
  },
  {
    placeholder: "Password",
    attribute:"password",
    HTMLInputType: "password",
    type: "text"
  },
  {
    placeholder: "Tags",
    attribute:"tags",
    HTMLInputType: "text",
    type: "tag"
  }
]

export const FormTest = () => <Form inputElements={inputElements}/>;
