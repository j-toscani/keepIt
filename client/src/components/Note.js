import React, { useContext } from "react";
import { css } from "@emotion/core";
import { ThemeContext } from "../themes/ThemeContext";
import { fetchList, deleteEntry } from "../api/notes";
import Button from "../components/Button";

export default function Note({ entry, setData, token }) {
  const { theme } = useContext(ThemeContext);

  const { _id, name, content } = entry;
  return (
    <div
      css={css`
        width: 200px;

        margin: 10px;
      `}
    >
      <div
        css={css`
          display: flex;
          align-items: center;
          justify-content: space-around;
          border-bottom: 1px solid black;
          padding: 5px;
          background: ${theme.contrast};
        `}
      >
        <label>{name}</label>
        <Button
          css={css`
            font-size: 12px;
            margin-left: auto;
          `}
          handleClick={() => {
            deleteEntry("http://localhost:5000/notes", _id, token).then(() =>
              fetchList("http://localhost:5000/notes", token).then(response =>
                setData(response)
              )
            );
          }}
        >
          X
        </Button>
      </div>

      <div
        css={css`
          padding: 10px;

          width: 100%;
          overflow: auto;
          background: ${theme.accent};
          color: ${theme.contrast};
        `}
      >
        {content}
      </div>
    </div>
  );
}
