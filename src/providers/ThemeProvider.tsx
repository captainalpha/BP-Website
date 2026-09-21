"use client";

import { StorageKeys } from "@/utils/constants";
import React, {
  useState,
  useEffect,
  ReactNode,
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
} from "react";

interface IProps {
  children: ReactNode;
}

interface IThemeContext {
  colorScheme: ColorScheme;
  setColorScheme: Dispatch<SetStateAction<ColorScheme>>;
}

const ThemeContext = createContext<IThemeContext>({
  colorScheme: "light",
  setColorScheme: () => {},
});

const ThemeProvider = ({ children }: IProps) => {
  const [colorScheme, setColorScheme] = useState<ColorScheme>("light");

  const setTheme = (scheme: ColorScheme) => {
    localStorage.setItem(StorageKeys.COLOR_SCHEME, scheme);
    const isDark =
      scheme === "dark" ||
      (scheme === "system" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);

    if (isDark) {
      document.documentElement.style.setProperty("--background", "#0a0a0a");
      document.documentElement.style.setProperty("--foreground", "#ededed");
      document.documentElement.style.setProperty("--btn-color", "yellow");
    } else {
      document.documentElement.style.setProperty("--background", "#ffffff");
      document.documentElement.style.setProperty("--foreground", "#171717");
      document.documentElement.style.setProperty("--btn-color", "green");
    }
  };

  useEffect(() => {
    const localScheme = localStorage.getItem(StorageKeys.COLOR_SCHEME);
    if (localScheme) setColorScheme(localScheme as ColorScheme);
  }, []);

  useEffect(() => {
    setTheme(colorScheme);
    if (colorScheme === "system") {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      const handleMediaQueryChange = () => {
        setTheme("system");
      };
      mediaQuery.addEventListener("change", handleMediaQueryChange);

      return () => {
        mediaQuery.removeEventListener("change", handleMediaQueryChange);
      };
    }
  }, [colorScheme]);

  return (
    <ThemeContext.Provider value={{ colorScheme, setColorScheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}

export default ThemeProvider;
