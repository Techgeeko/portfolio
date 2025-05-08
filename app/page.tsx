import About from "@/components/about";
import Approach from "@/components/approach";
import Contact from "@/components/contact";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-900 text-zinc-100">
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Approach />
      <Contact />
    </main>
  )
}
