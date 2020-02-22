import React from "react";
import SmallTextInput from "../components/formComponents/SmallTextInput";
import SmallTextInput from "../components/formComponents/CapitalLetterLabel";

export default {
  title: "Form Elements"
};

export const TextInput = () => (
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
);

export const Label = () => (
  <CapitalLetterLabel
    inputLabel={"Display Label"}
    inputAttribute={"ID for the input Tag"}
  />
);
