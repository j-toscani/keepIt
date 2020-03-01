import React, { useContext } from "react";

import { ThemeContext } from "../themes/ThemeContext";
import { css } from "@emotion/core";

import LoginForm from "../components/loginAndRegistryComponents/LoginForm";
import RegistryForm from "../components/loginAndRegistryComponents/RegistryForm";
import { Switch, Route } from "react-router-dom";
import CategoryBumper from "../components/loginAndRegistryComponents/CategoryBumper";

export default function Login() {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      css={css`
        height: 320px;
        width: 260px;
        position: relative;
        background: ${theme.contrast};
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-direction: column;
      `}
    >
      <div
        css={css`
          top: -40px;
          left: 0;
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          position: absolute;
        `}
      >
        <CategoryBumper path={"/auth/login"} content={"Login..."} />
        <CategoryBumper path={"/auth/register"} content={"Register..."} />
      </div>
      <Switch>
        <Route exact path="/auth/login">
          <LoginForm />
        </Route>
        <Route exact path="/auth/register">
          <RegistryForm />
        </Route>
      </Switch>
    </div>
  );
}
