import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Bet from "./bet";
export default function Menu() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/bet">Login</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/bet">
            <Bet title="Bet Screen" />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
