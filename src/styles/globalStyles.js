import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html, body {
    height: 100%;
    margin: 0;
    padding: 0;
    font-family: "Montserrat", sans-serif;
    background-color: #0a192f;
    color: #fff;
  }

  * {
    box-sizing: border-box;
  }

  body {
    width: 100%;
    min-height: 100vh;
    overflow-y: auto; /* Permite scroll global */
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul{
    list-style-type:none;
  }
`;
