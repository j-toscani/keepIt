import React from "react";
import Button from "../components/Button";

export default function Login() {
  return (
    <div>
      {"You are at the login Page. Should only show if not logged in!"}
      <Button onClick={() => alert("You are gettin logged in...")}>
        {"Log in..."}
      </Button>
      <Button onClick={() => console.log("You have registered...")}>
        {"Register..."}
      </Button>
    </div>
  );
}
