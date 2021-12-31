import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      primaryClr: string,
      primaryClrLt: string,
      primaryClrLtr: string,
      primaryClrDk: string,
      primaryClrDkr: string,
      fontClr900: string,
      fontClr700: string,
      fontClr500: string,
      fontClr300: string,
      bgClr900: string,
      bgClr700: string,
      bgClr500: string,
      bgClr300: string,
    }
  }
}
