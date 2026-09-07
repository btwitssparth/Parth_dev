// src/sections/Projects.tsx
import React from 'react';
import { projects } from '../data/constants';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-slate-900 text-slate-100 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-100 mb-8 flex items-center gap-3">
          <span className="text-indigo-400 font-mono text-xl">03.</span> Featured Projects
          <span className="h-px bg-slate-800 flex-grow ml-4"></span>
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-slate-950 p-6 rounded-xl border border-slate-800 flex flex-col justify-between hover:border-slate-700 transition duration-300"
            >
              <div>
                <div className="flex justify-between items-start mb-2">
                  <span className="text-xs font-mono text-indigo-400 uppercase tracking-widest">
                    Project 0{project.id}
                  </span>
                  <div className="flex space-x-3 text-slate-400">
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white transition"
                        aria-label="GitHub Repository"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                        </svg>
                      </a>
                    )}
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white transition"
                        aria-label="Live Demo"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-slate-100">{project.title}</h3>
                <p className="text-xs text-indigo-400 font-mono mb-4">{project.subtitle}</p>

                <ul className="text-slate-400 text-sm mb-6 leading-relaxed space-y-2">
                  {project.description.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-indigo-400 shrink-0">▹</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800/60">
                {project.techStack.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-xs font-mono bg-indigo-950/60 text-indigo-300 px-2.5 py-1 rounded border border-indigo-800/40"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;