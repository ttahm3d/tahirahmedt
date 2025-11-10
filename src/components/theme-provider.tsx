"use client";

import {
  ThemeProvider as NextThemeProvider,
  ThemeProviderProps,
} from "next-themes";

export function ThemeProvider({ children }: ThemeProviderProps) {
  return (
    <NextThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </NextThemeProvider>
  );
}
