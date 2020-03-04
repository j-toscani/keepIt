import React, { useContext } from "react";
import { css } from "@emotion/core";
import { ThemeContext } from "../../themes/ThemeContext";
import { useHistory } from "react-router-dom";
import { checkUsers } from "../../api/auth";

import Form from "../Form";

export default function LoginForm({ setToken }) {
  const { theme } = useContext(ThemeContext);
  let history = useHistory();

  function goToNotes() {
    history.push("/notes");
  }

  async function handleFormSubmit(formData) {
    const loginData = { ...formData };
    const checkCredentials = await checkUsers(
      "http://localhost:5000/auth/login",
      loginData
    );
    const responseText = await checkCredentials.json();
    if (checkCredentials.ok) {
      setToken(responseText);
      goToNotes();
    } else {
      alert(responseText);
    }
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
