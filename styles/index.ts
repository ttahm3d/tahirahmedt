import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  ::-webkit-scrollbar {
    width: 0.5rem;
  }

  ::-webkit-scrollbar-track {
    background: ${(props) => props.theme.colors.plum3};
  }

  ::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.colors.plum9};
    background-clip: content-box;
    border-radius: 100vw;
  }

  ::-webkit-scrollbar-thumb:hover {
    background:  ${(props) => props.theme.colors.plum6};
  }


  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    background: ${(props) => props.theme.colors.blue1};
    color: ${(props) => props.theme.colors.mauve12};
    transition: all 0.2s ease 0s;
    font-family: 'IBM Plex Sans', sans-serif;
    line-height: 1.5;
    margin:0;
  }
  
  h1, h2, h3, h4 {
    margin:0;
    padding-top: 2rem;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  img {
    max-width:100%;
  }

`;

export {GlobalStyles}