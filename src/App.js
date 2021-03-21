import React from "react";
import Intro from "./components/intro";
import Menu from "./components/router";
import "./style.css";

export default function App() {
  return (
    <div>
      <Intro title="This is a Dynamic Text" />
      <Menu />
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
