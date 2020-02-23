/** @jsx jsx */
import { useContext } from "react";
import { ThemeContext } from "../../themes/ThemeContext";

import { css, jsx } from "@emotion/core";
import { Link, useLocation } from "react-router-dom";

export default function CategoryBumper({ path, content }) {
  const { theme } = useContext(ThemeContext);
  const active = useLocation().pathname === path;

  return (
    <Link
      css={css`
        width: 100%;
        :focus {
          outline: none;
          border: none;
        }
      `}
      to={path}
    >
      <button
        css={css`
          padding: 15px;
          border: none;
          border-radius: 10px 10px 0px 0px;
          width: 100%;
          background: ${active ? theme.contrast : theme.mainInactive};
          color: ${active ? theme.mainFont : theme.contrastFont};
          :focus {
            outline: none;
            border: none;
          }
        `}
      >
        {content}
      </button>
    </Link>
  );
}
