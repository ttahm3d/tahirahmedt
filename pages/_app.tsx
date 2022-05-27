import type { AppProps } from "next/app";
import { Page } from "../styles/globals";
import { useState } from "react";
import { ThemeProvider, DefaultTheme } from "styled-components";
import { GlobalStyles } from "../styles";
import { LightTheme, DarkTheme } from "../styles/theme";
import Footer from "../src/components/Footer/Footer";
import Head from "next/head";
import Header from "../src/components/Header/Header";

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState<DefaultTheme>(DarkTheme);

  const toggleTheme = () => {
    setTheme(theme.title === "light" ? DarkTheme : LightTheme);
  };

  return (
    <ThemeProvider theme={theme}>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@200;300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
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
