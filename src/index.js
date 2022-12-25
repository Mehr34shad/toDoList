import React from "react";
import { render } from "react-dom";
import App from "./containers/App";
import GlobalState from "./containers/GlobalState";

render(
  <GlobalState>
      <App />
  </GlobalState>,
  document.getElementById("root")
);
