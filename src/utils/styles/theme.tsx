import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    background: ${(props) => props.theme.colors.bgClr};
    color: ${(props) => props.theme.colors.fontClr};
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
		primaryBg: "hsl(208,100%,55%)",
		fontClr: "#111",
		bgClr: "#fbfbfb",
		navClr: `rgba(0,0,0,0.9)`,
	},
};

export const DarkTheme = {
	title: "dark",
	colors: {
		primaryBg: "hsl(208,100%,55%)",
		fontClr: "white",
		bgClr: "#121212",
		navClr: `rgba(0,0,0,0.9)`,
	},
};
