import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

export default function Notes() {
  let history = useHistory();

  function goToLogin() {
    history.push("/auth/login");
  }

  useEffect(() => {
    setTimeout(() => {
      goToLogin();
    }, 3000);
  });

  return (
    <div>
      {"You are at the Welcome Page. Should only show if not logged in! "}
      {"Should push to Login after 3 - 4 seconds"}
    </div>
  );
}
