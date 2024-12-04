import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Home from "../views/ModuleBox/Home/Home";
import CourseCenter from "../views/ModuleBox/CourseCenter/CourseCenter";
import CourseItem from "../views/ModuleBox/CourseCenter/CourseItem/CourseItem";
import ExperimentalEnvironment from "../views/ModuleBox/ExperimentalEnvironment/ExperimentalEnvironment";
import NotFound from "../views/NotFound/NotFound";

import Steps1 from "../views/ModuleBox/ExperimentalEnvironment/Steps/Steps1/Steps1";
import Steps2 from "../views/ModuleBox/ExperimentalEnvironment/Steps/Steps2/Steps2";
import Steps3 from "../views/ModuleBox/ExperimentalEnvironment/Steps/Steps3/Steps3";
import Steps4 from "../views/ModuleBox/ExperimentalEnvironment/Steps/Steps4/Steps4";
import Steps5 from "../views/ModuleBox/ExperimentalEnvironment/Steps/Steps5/Steps5";
import Steps6 from "../views/ModuleBox/ExperimentalEnvironment/Steps/Steps6/Steps6";
import Steps7 from "../views/ModuleBox/ExperimentalEnvironment/Steps/Steps7/Steps7";
import Steps8 from "../views/ModuleBox/ExperimentalEnvironment/Steps/Steps8/Steps8";
import Steps9 from "../views/ModuleBox/ExperimentalEnvironment/Steps/Steps9/Steps9";
import Steps10 from "../views/ModuleBox/ExperimentalEnvironment/Steps/Steps10/Steps10";
import Steps11 from "../views/ModuleBox/ExperimentalEnvironment/Steps/Steps11/Steps11";
import Steps12 from "../views/ModuleBox/ExperimentalEnvironment/Steps/Steps12/Steps12";
import Steps13 from "../views/ModuleBox/ExperimentalEnvironment/Steps/Steps13/Steps13";
import Steps14 from "../views/ModuleBox/ExperimentalEnvironment/Steps/Steps14/Steps14";
import Steps15 from "../views/ModuleBox/ExperimentalEnvironment/Steps/Steps15/Steps15";

function ModuleRouter() {
  return (
    <Switch>
      <Route path="/home" component={Home} />
      <Route path="/courseCenter" exact component={CourseCenter} />
      <Route path="/courseCenter/courseItem/:url" component={CourseItem} />
      <Route path="/experimentalEnvironment" exact component={ExperimentalEnvironment} />
      <Route path="/experimentalEnvironment/steps1" component={Steps1} />
      <Route path="/experimentalEnvironment/steps2" component={Steps2} />
      <Route path="/experimentalEnvironment/steps3" component={Steps3} />
      <Route path="/experimentalEnvironment/steps4" component={Steps4} />
      <Route path="/experimentalEnvironment/steps5" component={Steps5} />
      <Route path="/experimentalEnvironment/steps6" component={Steps6} />
      <Route path="/experimentalEnvironment/steps7" component={Steps7} />
      <Route path="/experimentalEnvironment/steps8" component={Steps8} />
      <Route path="/experimentalEnvironment/steps9" component={Steps9} />
      <Route path="/experimentalEnvironment/steps10" component={Steps10} />
      <Route path="/experimentalEnvironment/steps11" component={Steps11} />
      <Route path="/experimentalEnvironment/steps12" component={Steps12} />
      <Route path="/experimentalEnvironment/steps13" component={Steps13} />
      <Route path="/experimentalEnvironment/steps14" component={Steps14} />
      <Route path="/experimentalEnvironment/steps15" component={Steps15} />

      {/* <Route path="/" exact render={() => <Redirect to="/home" />} /> */}
      <Route path="/" exact render={() => <Redirect to="/experimentalEnvironment" />} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default ModuleRouter;
