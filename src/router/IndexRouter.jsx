import React from "react";
import { HashRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { isLogin } from "../utils/handleToken";

import Login from "../views/Login/Login";
import Registered from "../views/Registered/Registered";
import ModuleBox from "../views/ModuleBox/ModuleBox";

function IndexRouter() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/registered" component={Registered} />
        {/* <Route path="/" render={() => (isLogin() ? <ModuleBox /> : <Redirect to="/login" />)} /> */}
        <Route path="/" render={() => <ModuleBox />} />
      </Switch>
    </Router>
  );
}

export default IndexRouter;
