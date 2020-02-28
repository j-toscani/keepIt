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

export const FormTest = () => (
  <Form/>
)

