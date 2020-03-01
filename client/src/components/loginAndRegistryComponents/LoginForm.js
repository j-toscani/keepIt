import React, { useContext } from "react";
import { css } from "@emotion/core";
import { ThemeContext } from "../../themes/ThemeContext";
import { useHistory } from "react-router-dom";

import Form from "../Form";

export default function LoginForm() {
  const { theme } = useContext(ThemeContext);
  let history = useHistory();

  function goToNotes() {
    history.push("/notes");
  }

  function handleFormSubmit(formData) {
    console.log(formData);
    alert(`You entered: ${JSON.stringify(formData)}.`);
    goToNotes();
  }

  const inputElements = [
    {
      placeholder: "E-Mail...",
      attribute: "email",
      type: "text",
      HTMLInputType: "email"
    },
    {
      placeholder: "Password...",
      attribute: "password",
      type: "text",
      HTMLInputType: "password"
    }
  ];

  return (
    <div
      css={css`
        padding: 10px;
        height: 100%;
        background: ${theme.contrast};
      `}
    >
      <Form
        action={"/auth/login"}
        inputElements={inputElements}
        onFormSubmit={handleFormSubmit}
        buttonContent={"Log in..."}
      />
    </div>
  );
}
