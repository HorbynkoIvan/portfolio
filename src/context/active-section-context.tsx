"use client";
import { useState, createContext, Dispatch, SetStateAction, ReactNode } from "react";
import type { SectionName } from "@/src/types/types";
import { log } from "util";

type ActiveSectionContextProviderProps = {
  children: ReactNode;
};

type ActiveSectionContextType = {
  activeSection: SectionName;
  setActiveSection: Dispatch<SetStateAction<SectionName>>;
  timeOfLastClick: number;
  setTimeOfLastClick: Dispatch<SetStateAction<number>>;
};

export const ActiveSectionContext = createContext<ActiveSectionContextType | null>(null);

/**
 * The ActiveSectionContextProvider component provides a context for managing
 * the active section of your application and tracking the time of the last user click.
 */

export const ActiveSectionContextProvider = ({ children }: ActiveSectionContextProviderProps) => {
  // Initialize the active section with "Home" and time of last click with 0.
  const [activeSection, setActiveSection] = useState<SectionName>("Home");
  const [timeOfLastClick, setTimeOfLastClick] = useState(0);

  // This context provider exposes the active section and time of last click values to its children.
  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
        timeOfLastClick,
        setTimeOfLastClick,
      }}>
      {children}
    </ActiveSectionContext.Provider>
  );
};
