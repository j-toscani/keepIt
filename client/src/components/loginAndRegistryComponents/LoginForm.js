/** @jsx jsx */
import { useState } from "react";
import { css, jsx } from "@emotion/core";
import SmallTextInput from "../formComponents/SmallTextInput";
import Button from "../Button";

export default function LoginForm() {
  const [loginInformation, setLoginInformation] = useState({});

  function getInputValue(attribute, value) {
    const newLoginInformation = { ...loginInformation };
    newLoginInformation[attribute] = value;
    setLoginInformation(newLoginInformation);
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
      <Button onClick={() => alert("You are gettin logged in...")}>
        {"Log in..."}
      </Button>
    </form>
  );
}
