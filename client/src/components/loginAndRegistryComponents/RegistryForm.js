import React, { useContext } from "react";
import { css } from "@emotion/core";
import { ThemeContext } from "../../themes/ThemeContext";

import Form from "../Form";

export default function LoginForm() {
  const { theme } = useContext(ThemeContext);
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
    },
    {
      placeholder: "Confirm...",
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
        action={"/auth/register"}
        inputElements={inputElements}
        buttonContent={"Register..."}
      />
    </div>
  );
}
