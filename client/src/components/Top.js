import React, { useContext, useEffect } from "react";
import { css } from "@emotion/core";
import { useHistory } from "react-router-dom";
import LogoColor from "./LogoColor";
import StyledHeader from "./StyledHeader";
import Button from "./Button";
import Option from "../ressources/Options";
import Cross from "../ressources/Cross";

import { ThemeContext } from "../themes/ThemeContext";

export default function Top({ darkmode, toggleOverlay }) {
  const { theme } = useContext(ThemeContext);

  const currentLocation = window.location.pathname;
  const onNewNotePage = currentLocation === "/addnote";

  let history = useHistory();

  function goToAddNotes() {
    history.push("/addnote");
  }

  return (
    <StyledHeader>
      <Button
        handleClick={toggleOverlay}
        css={css`
          padding: 1px;
        `}
      >
        <Option />
      </Button>
      <h1>KeepIT</h1>
      <LogoColor darkmode={darkmode} />
      {!onNewNotePage && (
        <Button
          css={css`
            border-radius: 50px;
            padding: 5px;
            background: ${theme.contrast};
            border: 1px solid ${theme.accent};
            position: absolute;
            bottom: -20px;
            right: 10px;
          `}
          handleClick={goToAddNotes}
        >
          <Cross
            css={css`
              fill: ${theme.accent};
            `}
          />
        </Button>
      )}
    </StyledHeader>
  );
}
