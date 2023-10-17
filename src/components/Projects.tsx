"use client";

import React from "react";
import SectionHeading from "./SectionHeading";
import { projectsData } from "@/src/lib/projects_mock";
import Project from "./Project";
import { useSectionInView } from "@/src/hooks/useSectionInView";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>My projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}