import React from "react";
import Note from "../src/components/Note";

export default {
  title: "Note"
};

const entry = {
  _id: "097asd0zq",
  name: "John",
  content: "This is some content"
};

export const NewNote = () => <Note entry={entry} />;
