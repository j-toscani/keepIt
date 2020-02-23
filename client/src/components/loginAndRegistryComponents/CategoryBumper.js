/** @jsx jsx */
import { useContext } from "react";
import { css, jsx } from "@emotion/core";
import { Link } from "react-router-dom";

export default function CategoryBumper({ path, content, active }) {
  return (
    <Link
      css={css`
        width: 100%;
      `}
      to={path}
    >
      <button
        css={css`
          padding: 5px;
          border: none;
          border-radius: 10px 10px 0px 0px;
          width: 100%;
        `}
      >
        {content}
      </button>
    </Link>
  );
}
