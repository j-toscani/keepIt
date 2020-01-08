import React from "react";
import LogoDM from "../ressources/LogoDM";
import LogoCM from "../ressources/LogoCM";

export default function LogoColor({ darkmode }) {
  return darkmode ? <LogoDM /> : <LogoCM />;
}
