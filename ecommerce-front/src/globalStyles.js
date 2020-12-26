import { createGlobalStyle } from "styled-components";

import "./fonts/KaushanScript.ttf";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    min-height: 100vh;
    background: wheat;
    color: black;
  }

  a {
    text-decoration: none;
  }
`;

export default GlobalStyle;
