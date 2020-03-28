
import React from "react";
import { greeting, mkCounter } from "../src/Hello.purs";

const Counter = mkCounter();

export default () => (
  <div>
    <h1>{greeting("World")}</h1>
    <Counter />
  </div>
);