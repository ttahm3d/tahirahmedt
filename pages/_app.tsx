import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Page } from "../styles/globals";
import { useState } from "react";
import { ThemeProvider, DefaultTheme } from "styled-components";
import { GlobalStyles, LightTheme, DarkTheme } from "../styles/theme";
import Footer from "../src/components/Footer/Footer";
import Header from "../src/components/Header/Header";

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState<DefaultTheme>(DarkTheme);

  const toggleTheme = () => {
    setTheme(theme.title === "light" ? DarkTheme : LightTheme);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Page>
        <Header theme={theme.title} toggleTheme={toggleTheme} />
        <Component {...pageProps} />
        <Footer />
      </Page>
    </ThemeProvider>
  );
}
export default MyApp;
