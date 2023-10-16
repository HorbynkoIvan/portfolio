import Intro from "@/src/components/Intro";
import Divider from "@/src/components/Divider";
import About from "@/src/components/About";
import Projects from "@/src/components/Projects";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <Divider />
      <About />
      <Projects />
    </main>
  );
}
