import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Intro from "./components/intro";
import Bet from "./components/bet";
import "./style.css";

export default function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <Intro
          title="Welcome to the Game"
          subtitle="bet.highradius.com"
          intro_img="https://cdn-staging.highradius.com/wp-content/uploads/2021/03/intro-img1.png"
        />
      </Route>
      <Route path="/bet" component={Bet} />
    </Switch>
  );
}
