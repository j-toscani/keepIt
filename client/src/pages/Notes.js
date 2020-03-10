import React, { Fragment, useContext, useState } from "react";
import { css } from "@emotion/core";
import { useHistory } from "react-router-dom";

import Note from "../components/Note";
import Overlay from "../components/Overlay";
import Button from "../components/Button";
import Cross from "../ressources/Cross";

import { ThemeContext } from "../themes/ThemeContext";
import { fetchList } from "../api/notes";
import { useEffect } from "react";

export default function Notes({ open, token }) {
  const { theme } = useContext(ThemeContext);
  const [noteList, setNoteList] = useState(false);
  let history = useHistory();

  function goToAddNotes() {
    history.push("/addnote");
  }

  useEffect(() => {
    fetchList("http://localhost:5000/notes", token)
      .then(response => setNoteList(response))
      .catch(err => console.log(err));
  }, []);

  return (
    <Fragment>
      <Button
        css={css`
          border-radius: 50px;
          padding: 5px;
          background: ${theme.contrast};
          border: 1px solid ${theme.accent};
          position: absolute;
          top: 10px;
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

      {noteList &&
        noteList.map((entry, index) => (
          <Note setData={setNoteList} token={token} key={index} entry={entry} />
        ))}
      <Overlay open={open} />
    </Fragment>
  );
}
