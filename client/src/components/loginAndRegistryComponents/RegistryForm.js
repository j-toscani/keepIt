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
    <form
      css={css`
        height: 160px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      `}
    >
      <SmallTextInput
        type={"email"}
        inputAttribute={"mail"}
        placeholder={"Enter your Mail..."}
        handleChange={getInputValue}
      />
      <SmallTextInput
        type={"password"}
        inputAttribute={"password"}
        placeholder={"Enter your Password..."}
        handleChange={getInputValue}
      />
      <SmallTextInput
        type={"password"}
        inputAttribute={"confirm"}
        placeholder={"Enter your password..."}
        handleChange={getInputValue}
      />
      <Button handleClick={() => alert("You are gettin logged in...")}>
        {"Register..."}
      </Button>
    </form>
  );
}
