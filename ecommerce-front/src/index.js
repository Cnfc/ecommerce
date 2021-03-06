import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import store from "./store/store";
import "./i18n";

import App from "./App";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
