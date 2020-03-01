import React from "react";
import { css } from "@emotion/core";
import Button from "../components/Button";
import Cross from "../ressources/Cross";

export default function Notes() {
  return (
    <div>
      {"You are at the Notes Page. Should only show if not logged in!"}
      <Button>
        <Cross />
      </Button>
    </div>
  );
}
