import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      primaryBg: string,
      fontClr: string,
      bgClr: string,
      navClr: string,
    }
  }
}