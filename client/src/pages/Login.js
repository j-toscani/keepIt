import React from "react";

export default function Login() {
  return (
    <div>
      {"You are at the login Page. Should only show if not logged in!"}
      <button onClick={() => alert("You are gettin logged in...")}>
        {"Log in..."}
      </button>
      <button onClick={() => console.log("You have registered...")}>
        {"Register..."}
      </button>
    </div>
  );
}
