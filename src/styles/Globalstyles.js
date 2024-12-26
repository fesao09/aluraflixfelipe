// src/styles/GlobalStyles.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    background-color: #181818; // Fundo principal
    color: #FFFFFF; // Cor do texto padrão
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;

export default GlobalStyles;
