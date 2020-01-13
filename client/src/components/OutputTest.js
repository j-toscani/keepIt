/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import Note from "./Note";

export default function OutputTest({ setData, data }) {
  return (
    <div
      css={css`
        margin: 20px;
        border: 1px solid black;
        padding: 10px;
      `}
    >
      {data === "waiting for Data" &&
        data.map(entry => (
          <Note key={entry._id} entry={entry} setData={setData}></Note>
        ))}
    </div>
  );
}
