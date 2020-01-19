import React from "react";

export default function Login() {
  return (
    <div>
      {"You are at the login Page. Should only show if not logged in!"}
      <button onCLick={() => alert("You are gettin logged in...")}>
        {"Log in..."}
      </button>
      <button onCLick={() => console.log("You have registered...")}>
        {"Register..."}
      </button>
    </div>
  );
}
