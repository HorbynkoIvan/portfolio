import { useContext } from "react";
import { ThemeContext } from "@/src/context/theme-context";
import { ThemeContextType } from "@/src/types/types";

/**
 * Custom hook for accessing the theme context.
 * @returns {ThemeContextType} The theme context, including the current theme
 * and a function to toggle it.
 * @throws {Error} Throws an error if used outside a ThemeContextProvider.
 */

export const useThemeContext = (): ThemeContextType => {
  const context = useContext(ThemeContext);

  if (context === null) {
    throw new Error("useTheme must be used within a ThemeContextProvider");
  }

  return context;
};
