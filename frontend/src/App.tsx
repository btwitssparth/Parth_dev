import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50 selection:bg-zinc-800 selection:text-zinc-50 font-sans">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Contact />
      </main>
      <footer className="py-8 text-center text-zinc-600 text-sm border-t border-zinc-900 mt-12">
        <p>© {new Date().getFullYear()} Parth Jain. All rights reserved.</p>
      </footer>
    </div>
  );
}