import { motion, type Variants } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { FiGithub, FiLinkedin } from "react-icons/fi";

export default function Hero() {
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { type: "spring", stiffness: 300, damping: 24 } 
    },
  };

  return (
    <section id="about" className="pt-32 pb-24 px-6 min-h-[85vh] flex flex-col justify-center max-w-5xl mx-auto">
      <motion.div variants={container} initial="hidden" animate="show" className="max-w-3xl">
        <motion.div variants={item} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 mb-8">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-xs font-medium text-zinc-300 tracking-wide">B.Sc. IT Graduate (Class of 2026)</span>
        </motion.div>
        
        <motion.h1 variants={item} className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-zinc-50 mb-6 leading-[1.1]">
          Building secure, scalable web applications.
        </motion.h1>
        
        <motion.p variants={item} className="text-lg text-zinc-400 max-w-xl mb-10 leading-relaxed">
          I'm Parth Jain, a Full-Stack Developer specializing in the MERN stack. I design complex database architectures, develop RESTful APIs, and integrate real-time functionality to solve real-world problems.
        </motion.p>
        
        <motion.div variants={item} className="flex flex-wrap items-center gap-4">
          <a href="#projects" className="inline-flex items-center justify-center h-11 px-6 rounded-md bg-zinc-50 text-zinc-950 font-medium transition-colors hover:bg-zinc-200">
            View Work <ArrowRight className="ml-2 w-4 h-4" />
          </a>
          
          <a href="#contact" className="inline-flex items-center justify-center h-11 px-6 rounded-md border border-zinc-800 bg-transparent text-zinc-50 font-medium transition-colors hover:bg-zinc-900">
            Contact Me
          </a>
          
          <a href="/Parth Jain Resume.pdf" download className="inline-flex items-center justify-center h-11 px-6 rounded-md border border-zinc-800 bg-transparent text-zinc-50 font-medium transition-colors hover:bg-zinc-900">
            Resume <Download className="ml-2 w-4 h-4" />
          </a>

          <div className="flex items-center gap-2 ml-4">
            <a href="https://github.com/btwitssparth" target="_blank" rel="noreferrer" className="p-2 rounded-md text-zinc-400 hover:text-zinc-50 hover:bg-zinc-900 transition-colors">
              <FiGithub className="w-5 h-5" />
            </a>
            {/* Swap the string below with your actual LinkedIn URL */}
            <a href="https://www.linkedin.com/in/parth-jain-8200aa270/ rounded-md text-zinc-400 hover:text-zinc-50 hover:bg-zinc-900 transition-colors">
              <FiLinkedin className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}