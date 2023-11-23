import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "./useActiveSectionContext";
import { SectionName } from "@/src/types/types";

const DEFAULT_THRESHOLD = 0.75;
const TIMEOUT_THRESHOLD = 1000;

/**
 * The useSectionInView hook allows tracking when a specified section of the page
 * becomes visible in the viewport and activating it.
 *
 * @param {SectionName} sectionName - The name of the section to track.
 * @param {number} threshold - Visibility threshold, ranging from 0 to 1. It determines
 * what percentage of the section's area should be visible to consider it as visible.
 * For example, 0.5 means the section is considered visible when at least 50% of it is visible.
 * @const {number} TIMEOUT_THRESHOLD - The time threshold (in milliseconds) that needs to pass
 * after the last user click before activating the section after it enters the viewport.
 * This prevents instant section activation right after a click.
 */

export const useSectionInView = (
  sectionName: SectionName,
  threshold: number = DEFAULT_THRESHOLD
) => {
  const { ref, inView } = useInView({
    threshold,
  });
  const { setActiveSection, activeSection, timeOfLastClick, setTimeOfLastClick } =
    useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > TIMEOUT_THRESHOLD) {
      setActiveSection(sectionName);
    }
  }, [inView, setActiveSection, sectionName, timeOfLastClick]);

  return { ref };
};
