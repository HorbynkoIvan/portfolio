import type { Metadata } from "next";
import { ReactNode } from "react";
import { Mulish } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { ThemeContextProvider, ActiveSectionContextProvider } from "@/src/context";
import { BackgroundElements, Header, Footer, ThemeSwitcherButton } from "@/src/components";

const mulish = Mulish({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ivan | Portfolio",
  description: "Ivan is a frontend developer with a 5+ years of experience",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${mulish.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 
        dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}>
        <BackgroundElements />

        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />
            <Toaster position="top-right" />
            <ThemeSwitcherButton />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
