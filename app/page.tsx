import { Divider } from "@/src/components";
import { Intro, About, Projects, Skills, Experience, Contact } from "@/src/sections";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <Divider />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </main>
  );
}
