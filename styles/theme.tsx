import {
  blue,
  blueDark,
  slate,
  slateDark,
  plum,
  plumDark,
  mauve,
  mauveDark,
} from "@radix-ui/colors";

const LightTheme = {
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
    bgClr700: "hsl(0, 0%, 92%)",
    bgClr500: "hsl(0, 0%, 98%)",
    bgClr300: "hsl(0, 0%, 99%)",
    white: "hsl(0,0%,100%)",
    black: "hsl(0,0%,0%)",
    ...blue,
    ...plum,
    ...slate,
    ...mauve,
  },
};

const DarkTheme = {
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
    ...blueDark,
    ...plumDark,
    ...slateDark,
    ...mauveDark,
  },
};

export { LightTheme, DarkTheme };
