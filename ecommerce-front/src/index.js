import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Routers from "./Routes";

ReactDOM.render(
  <React.StrictMode>
    <Routers />
  </React.StrictMode>,
  document.getElementById("root")
);
