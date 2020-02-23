/** @jsx jsx */
import { useState } from "react";
import { css, jsx } from "@emotion/core";
import SmallTextInput from "../formComponents/SmallTextInput";
import Button from "../Button";

export default function RegistryForm() {
  const [registerInformation, setRegisterInformation] = useState({});

  function getInputValue(attribute, value) {
    const newRegisterInformation = { ...registerInformation };
    newRegisterInformation[attribute] = value;
    setRegisterInformation(newRegisterInformation);
  }

  return (
    <form>
      <SmallTextInput
        inputAttribute={"mail"}
        placeholder={"Enter your Mail..."}
        handleChange={(a, b) => console.log(a, b)}
      />
      <SmallTextInput
        inputAttribute={"Password"}
        placeholder={"Enter your Password..."}
        handleChange={(a, b) => console.log(a, b)}
      />
      <SmallTextInput
        inputAttribute={"password"}
        inputLabel={"Confirm Password"}
        placeholder={"Enter your password..."}
        handleChange={(a, b) => console.log(a, b)}
      />
      <Button onClick={() => alert("You are gettin logged in...")}>
        {"Register..."}
      </Button>
    </form>
  );
}
