import { links } from "@/src/mocks/links_mock";

export type SectionName = (typeof links)[number]["name"];

export type Theme = "light" | "dark";

export type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};
