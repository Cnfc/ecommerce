import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Routers from "./Routes";
import GlobalStyle from "./globalStyles";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Routers />
  </React.StrictMode>,
  document.getElementById("root")
);
