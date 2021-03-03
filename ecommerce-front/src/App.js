import React, { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { ApolloProvider, Query } from "react-apollo";

import Routers from "./Routes";
import GlobalStyle from "./globalStyles";
import { changeGraphQLUri } from "pages/Apollo/meta/actions";

import "./App.css";

import LightTheme from "themes/light";
import DarkTheme from "themes/dark";

// const client = new ApolloClient({
//   uri:
//     "https://api-eu-central-1.graphcms.com/v2/ckl22zsj2hab701xs7qp1a69g/master",
// });

function App() {
  const [theme, setTheme] = useState(LightTheme);

  useEffect(() => {}, []);

  return (
    // <ApolloProvider client={client}>
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
    // </ApolloProvider>
  );
}

export default App;
