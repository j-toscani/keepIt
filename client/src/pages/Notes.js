import React, { Fragment } from "react";

import Note from "../components/Note";
import Overlay from "../components/Overlay";

export default function Notes({ open }) {
  const entry = {
    _id: 1,
    name: "My Note...",
    content:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero quisquam, nobis cumque quam similique tenetur cum minus temporibus rem est nisi, non, id ratione sed voluptate maiores earum repellendus vel."
  };

  const entryArray = [entry, entry, entry, entry, entry];

  return (
    <Fragment>
      {entryArray &&
        entryArray.map((entry, index) => <Note key={index} entry={entry} />)}
      <Overlay open={open} />
    </Fragment>
  );
}
