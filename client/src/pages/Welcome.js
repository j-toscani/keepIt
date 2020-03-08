import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

export default function Notes() {
  let history = useHistory();

  function goToLogin() {
    history.push("/auth");
  }

  useEffect(() => {
    setTimeout(() => {
      goToLogin();
    }, 3000);
  });

  return <div>{"You will be redirected to the login Page in 3 seconds"}</div>;
}
