import { createGlobalStyle } from "styled-components";
import backgroundImage from "./images/backgroundImage.jpeg";

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *,
  ::before,
  ::after {
    box-sizing: inherit;
  }

  body {
    background: url(${backgroundImage});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    background-attachment: fixed;
    font-family: "Oswald", sans-serif;
  }

`;
