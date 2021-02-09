import { createGlobalStyle } from "styled-components";

import "./assets/fonts/KaushanScript.ttf";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    min-height: 100vh;
    background: ${(p) => p.theme.bodyBackgroundColor};
    color: ${(p) => p.theme.bodyFontColor};
  }

 a {
    text-decoration: none;
    color: ${(p) => p.theme.bodyFontColor};
    transition: 0.5 sease border;
    &:hover {
      border-bottom: 3px ${(p) => p.theme.bodyBorderBottomColor} solid;
    }
  }

  li {
    list-style-type: none; 
  }

  
`;

export default GlobalStyle;
