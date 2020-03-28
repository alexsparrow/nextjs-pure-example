
import React from "react";
import { greeting, counterC as Counter } from "../src/Hello.purs";

export default () => (
  <div>
    <h1>{greeting("World")}</h1>
    <Counter />
  </div>
);