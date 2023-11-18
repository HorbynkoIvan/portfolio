"use client";
import { createContext, ReactNode, useEffect, useState } from "react";
import { Theme, ThemeContextType } from "@/src/types/types";

type Props = {
  children: ReactNode;
};

const THEME_KEY = "theme";
const LIGHT_THEME = "light";
const DARK_THEME = "dark";

export const ThemeContext = createContext<ThemeContextType | null>(null);

export const ThemeContextProvider = ({ children }: Props) => {
  const [theme, setTheme] = useState<Theme>(LIGHT_THEME);

  const toggleTheme = () => {
    if (theme === LIGHT_THEME) {
      setTheme(DARK_THEME);
      window.localStorage.setItem(THEME_KEY, DARK_THEME);
      document.documentElement.classList.add(DARK_THEME);
    } else {
      setTheme(LIGHT_THEME);
      window.localStorage.setItem(THEME_KEY, LIGHT_THEME);
      document.documentElement.classList.remove(DARK_THEME);
    }
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem(THEME_KEY) as Theme | null;

    if (localTheme) {
      setTheme(localTheme);

      if (localTheme === DARK_THEME) {
        document.documentElement.classList.add(DARK_THEME);
      }
    } else if (window.matchMedia("(prefers-color-scheme: dark").matches) {
      setTheme(DARK_THEME);
      document.documentElement.classList.add(DARK_THEME);
    }
  }, []);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}>
      {children}
    </ThemeContext.Provider>
  );
};
