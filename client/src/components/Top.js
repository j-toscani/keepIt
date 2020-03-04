import React from "react";
import { css } from "@emotion/core";

import LogoColor from "./LogoColor";
import StyledHeader from "./StyledHeader";
import Option from "../ressources/Options";
import Button from "./Button";
import { useHistory, useLocation } from "react-router";
import { useContext } from "react";
import { ThemeContext } from "../themes/ThemeContext";

export default function Top({ darkmode, toggleOverlay }) {
  let history = useHistory();
  const location = useLocation().pathname;
  const loggedOut = "/auth/login" || "/auth/register" || "/welcome" || "/";
  const { theme } = useContext(ThemeContext);

  return (
    <StyledHeader>
      {location !== loggedOut && (
        <Button
          handleClick={toggleOverlay}
          css={css`
            padding: 1px;
          `}
        >
          <Option />
        </Button>
      )}
      <h1>KeepIT</h1>
      <LogoColor darkmode={darkmode} />
      {location !== loggedOut && (
        <Button
          css={css`
            padding: 10px;
            color: ${theme.contrast};
            background: ${theme.main};
            :hover {
              background: ${theme.accent};
            }
          `}
          handleClick={() => history.push("auth/login")}
        >
          Log me out...
        </Button>
      )}
    </StyledHeader>
  );
}
