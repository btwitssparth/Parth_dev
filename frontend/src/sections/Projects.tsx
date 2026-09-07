import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FiGithub } from "react-icons/fi";
import { PROJECTS } from "../data/constants";

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 max-w-5xl mx-auto border-t border-zinc-800/50">
      <div className="mb-12">
        <h2 className="text-3xl font-bold tracking-tight text-zinc-50 mb-4">Selected Work</h2>
        <p className="text-zinc-400 max-w-2xl">A collection of projects showcasing modern UI principles, performance, and solid engineering.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {PROJECTS.map((project, i) => (
          <motion.div 
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group relative flex flex-col justify-between p-6 rounded-xl border border-zinc-800 bg-zinc-900/40 hover:bg-zinc-900 transition-colors"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-zinc-50">{project.title}</h3>
                <div className="flex items-center gap-3">
                  <a href={project.github} target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-zinc-50 transition-colors">
                    <FiGithub className="w-5 h-5" />
                  </a>
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-zinc-50 transition-colors">
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6">{project.description}</p>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {project.tags.map(tag => (
                <span key={tag} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border border-zinc-800 bg-zinc-950 text-zinc-300">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}