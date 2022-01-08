import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  ::-webkit-scrollbar {
    width: 0.5rem;
  }

  ::-webkit-scrollbar-track {
    background: ${(props) => props.theme.colors.primaryClrDk};
  }

  ::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.colors.primaryClrLt};
    background-clip: content-box;
    border-radius: 100vw;
  }

  ::-webkit-scrollbar-thumb:hover {
    background:  ${(props) => props.theme.colors.primaryClrLtr};
  }


  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    background: ${(props) => props.theme.colors.bgClr500};
    color: ${(props) => props.theme.colors.fontClr700};
    transition: all 0.2s ease 0s;
    font-family: "Lato", sans-serif;
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

export const LightTheme = {
	title: "light",
	colors: {
		primaryClr: "hsl(208,100%,55%)",
		primaryClrLt: "hsl(208, 90%, 74%)",
		primaryClrLtr: "hsl(208, 100%, 85%)",
		primaryClrDk: "hsl(208, 82%, 40%)",
		primaryClrDkr: "hsl(208, 82%, 15%)",
		fontClr900: "hsl(0, 0%, 2%)",
		fontClr700: "hsl(0, 0%, 10%)",
		fontClr500: "hsl(0, 0%, 12%)",
		fontClr300: "hsl(0, 0%, 64%)",
		bgClr900: "hsl(0, 0%, 48%)",
		bgClr700: "hsl(0, 0%, 74%)",
		bgClr500: "hsl(0, 0%, 98%)",
		bgClr300: "hsl(0, 0%, 99%)",
		white: "hsl(0,0%,100%)",
		black: "hsl(0,0%,0%)",
	},
};

export const DarkTheme = {
	title: "dark",
	colors: {
		primaryClr: "hsl(208,100%,55%)",
		primaryClrLt: "hsl(208, 90%, 74%)",
		primaryClrLtr: "hsl(208, 100%, 85%)",
		primaryClrDk: "hsl(208, 82%, 40%)",
		primaryClrDkr: "hsl(208, 82%, 15%)",
		fontClr900: "hsl(0, 0%, 48%)",
		fontClr700: "hsl(0, 0%, 85%)",
		fontClr500: "hsl(0, 0%, 95%)",
		fontClr300: "hsl(0, 0%, 100%)",
		bgClr900: "hsl(228, 16%, 6%)",
		bgClr700: "hsl(223, 15%, 9%)",
		bgClr500: "hsl(222, 16%, 12%)",
		bgClr300: "hsl(218, 7%, 20%)",
		white: "hsl(0,0%,100%)",
		black: "hsl(0,0%,0%)",
	},
};
