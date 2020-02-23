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
        inputAttribute={"Password"}
        placeholder={"Enter your Password..."}
        handleChange={getInputValue}
      />
      <Button
        handleClick={e => {
          debugger;
          e.preventDefault();
          alert("You are gettin logged in...");
        }}
      >
        {"Log in..."}
      </Button>
    </form>
  );
}
