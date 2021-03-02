import React from "react";
import { Router } from "@reach/router";
import Home from "./pages/index";
import SecondPage from "./pages/SecondPage";
const Routes = ({ props }) => {
  return (
    <Router>
      <Home path="/" props={props} />
      <SecondPage path="/second" props={props} />
    </Router>
  );
};

export default Routes;
