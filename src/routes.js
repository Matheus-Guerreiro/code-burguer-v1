import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./container/Home";
import Orders from "./container/Orders";

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/orders" component={Orders} />
      </Switch>
    </Router>
  );
}

export default Routes;
