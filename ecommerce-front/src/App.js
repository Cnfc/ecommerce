import React, { useState } from "react";
import { ThemeProvider } from "styled-components";

import Routers from "./Routes";
import GlobalStyle from "./globalStyles";

import "./App.css";

import LightTheme from "themes/light";
import DarkTheme from "themes/dark";

function App() {
  const [theme, setTheme] = useState(LightTheme);

  return (
    <ThemeProvider
      theme={{
        ...theme,
        setTheme: () => {
          setTheme((s) => (s.id === "light" ? DarkTheme : LightTheme));
        },
      }}
    >
      <GlobalStyle />
      <Routers />
    </ThemeProvider>
  );
}

export default App;
