import type { AppProps } from "next/app";
import { Page } from "../styles/globals";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../styles";
import { LightTheme, DarkTheme } from "../styles/theme";
import Footer from "../src/components/Footer/Footer";
import Head from "next/head";
import Header from "../src/components/Header/Header";
import useLocalStorage from "../src/utils/hooks/useLocalStorage";

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useLocalStorage("preferred-mode", "light");

  const toggleTheme: () => void = () =>
    theme === "light" ? setTheme("dark") : setTheme("light");

  return (
    <ThemeProvider theme={theme === "light" ? LightTheme : DarkTheme}>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@200;300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="./logo.svg" />
      </Head>
      <GlobalStyles />
      <Page>
        <Header theme={theme} toggleTheme={toggleTheme} />
        <Component {...pageProps} />
        <Footer />
      </Page>
    </ThemeProvider>
  );
}
export default MyApp;
