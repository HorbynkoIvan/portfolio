import Intro from "@/src/components/Intro";
import Divider from "@/src/components/Divider";
import About from "@/src/components/About";
import Projects from "@/src/components/Projects";
import Skills from "@/src/components/Skills";
import Experience from "@/src/components/Experience";
import Contact from "@/src/components/Contact";

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
