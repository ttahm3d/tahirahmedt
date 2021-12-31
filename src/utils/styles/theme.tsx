import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    background: ${(props) => props.theme.colors.bgClr500};
    color: ${(props) => props.theme.colors.fontClr500};
    transition: all 0.2s ease 0s;
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
		primaryClrLt: "hsl(208, 100%, 68%)",
		primaryClrLtr: "hsl(208, 100%, 85%)",
		primaryClrDk: "hsl(208, 82%, 40%)",
		primaryClrDkr: "hsl(208, 82%, 26%)",
		fontClr900: "hsl(0, 0%, 5%)",
		fontClr700: "hsl(0, 0%, 8%)",
		fontClr500: "hsl(0, 0%, 10%)",
		fontClr300: "hsl(0, 0%, 64%)",
		bgClr900: "hsl(0, 0%, 48%)",
		bgClr700: "hsl(0, 0%, 74%)",
		bgClr500: "hsl(0, 0%, 98%)",
		bgClr300: "hsl(0, 0%, 99%)",
	},
};

export const DarkTheme = {
	title: "dark",
	colors: {
		primaryClr: "hsl(208,100%,55%)",
		primaryClrLt: "hsl(208, 100%, 68%)",
		primaryClrLtr: "hsl(208, 100%, 85%)",
		primaryClrDk: "hsl(208, 82%, 40%)",
		primaryClrDkr: "hsl(208, 82%, 26%)",
		fontClr900: "hsl(0, 0%, 48%)",
		fontClr700: "hsl(0, 0%, 74%)",
		fontClr500: "hsl(0, 0%, 99%)",
		fontClr300: "hsl(0, 0%, 100%)",
		bgClr900: "hsl(228, 16%, 6%)",
		bgClr700: "hsl(223, 15%, 9%)",
		bgClr500: "hsl(222, 16%, 12%)",
		bgClr300: "hsl(218, 7%, 20%)",
	},
};
