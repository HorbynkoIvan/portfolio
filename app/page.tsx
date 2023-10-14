import Intro from "@/components/Intro";
import Divider from "@/components/Divider";
import About from "@/components/About";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <Divider />
      <About />
    </main>
  );
}
