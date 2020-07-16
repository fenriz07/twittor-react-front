import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { map } from "lodash";
import configRouting from "./configRouting";

export default function Routing(props) {
  const { setRefreshCheckLogin } = props;

  return (
    <Router>
      <Switch>
        {map(configRouting, (route, i) => (
          <Route key={i} path={route.path} exact={route.path}>
            <route.page setRefreshCheckLogin={setRefreshCheckLogin} />
          </Route>
        ))}
      </Switch>
    </Router>
  );
}
