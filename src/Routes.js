import Login from "./containers/Login";
import InputItems from "./containers/InputItems";

import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThankYou } from "./containers/ThankYou";

export function Routes() {
  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/form">
            <InputItems />
          </Route>
          <Route path="/thank-you">
            <ThankYou />
          </Route>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}