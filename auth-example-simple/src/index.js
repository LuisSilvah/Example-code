import React from "react";
import ReactDOM from "react-dom";

import Router from "./router";

const rootElement = document.getElementById("app");
ReactDOM.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
  rootElement
);
