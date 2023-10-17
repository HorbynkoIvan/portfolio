import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/src/context/active-section-context";
import { useEffect } from "react";
import { SectionName } from "@/src/types/types";

export const useSectionInView = (sectionName: SectionName, threshold = 0.75) => {
  const { setActiveSection, activeSection, timeOfLastClick, setTimeOfLastClick } =
    useActiveSectionContext();
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionName);
    }
  }, [inView, setActiveSection, sectionName, timeOfLastClick]);

  return { ref };
};
