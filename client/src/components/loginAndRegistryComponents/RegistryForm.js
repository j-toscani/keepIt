import React, { useContext } from "react";
import { css } from "@emotion/core";
import { ThemeContext } from "../../themes/ThemeContext";

import Form from "../Form";
import { checkUsers } from "../../api/auth";
import { useHistory } from "react-router";

export default function LoginForm() {
  const { theme } = useContext(ThemeContext);
  let history = useHistory();

  const inputElements = [
    {
      placeholder: "E-Mail...",
      attribute: "email",
      type: "text",
      HTMLInputType: "email"
    },
    {
      placeholder: "Name...",
      attribute: "name",
      type: "text",
      HTMLInputType: "text"
    },
    {
      placeholder: "Password...",
      attribute: "password",
      type: "text",
      HTMLInputType: "password"
    },
    {
      placeholder: "Confirm password...",
      attribute: "confirm",
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
        onFormSubmit={async formData => {
          const registryData = formData;
          if (registryData.password === registryData.confirm) {
            const response = await checkUsers(
              "http://localhost:5000/auth/register",
              registryData
            );
            const responseText = await response.text();
            if (response.ok) {
              alert(responseText);
              history.push("/auth/login");
            } else {
              alert(responseText, response.status);
            }
          } else {
            alert("Password input not identical!");
          }
        }}
        inputElements={inputElements}
        buttonContent={"Register..."}
      />
    </div>
  );
}
