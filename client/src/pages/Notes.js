import React from "react";

export default function Notes() {
  return (
    <div>
      {"You are at the Notes Page. Should only show if not logged in!"}
      <button onClick={() => console.log("Go to AddNote...")}>
        {"Add Note..."}
      </button>
    </div>
  );
}
