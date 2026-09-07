// src/sections/Hero.tsx
import React from 'react';
import { personalInfo, skills } from '../data/constants';

const Hero: React.FC = () => {
  // Key skills displayed directly in the Hero banner
  const featuredSkills = [
    ...skills.backend.slice(0, 2),  // Node.js, Express.js
    ...skills.databases.slice(0, 2),// MongoDB, MySQL
    ...skills.frontend.slice(2, 4), // React.js, Tailwind CSS
    "TypeScript",
    "REST APIs"
  ];

  return (
    <section className="min-h-screen bg-slate-950 text-white flex items-center pt-24 pb-16 px-6 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto w-full z-10">
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-950/80 border border-indigo-800/50 text-indigo-300 text-xs font-mono mb-6">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          Available for Full-Stack & Backend Roles
        </div>

        {/* Greeting & Name */}
        <p className="text-indigo-400 font-mono text-sm tracking-wide mb-2">
          Hi, my name is
        </p>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-slate-100 tracking-tight mb-3">
          {personalInfo.name}
        </h1>

        <h2 className="text-2xl sm:text-4xl font-bold text-slate-400 mb-6">
          {personalInfo.role}
        </h2>

        {/* Tagline / Professional Summary */}
        <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mb-8">
          {personalInfo.tagline}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-4 mb-10">
          <a
            href="#projects"
            className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-sm rounded-lg transition-all duration-200 shadow-lg shadow-indigo-600/25 flex items-center gap-2"
          >
            <span>View Projects</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </a>

          <a
            href="/Parth_Jain_Resume.pdf"
            download="Parth_Jain_Resume.pdf"
            className="px-6 py-3 bg-slate-900 hover:bg-slate-800 text-indigo-300 border border-indigo-500/30 hover:border-indigo-500/60 font-medium text-sm rounded-lg transition-all duration-200 flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            <span>Download Resume</span>
          </a>

          <a
            href="#contact"
            className="px-6 py-3 border border-slate-800 hover:border-slate-700 text-slate-400 hover:text-white font-medium text-sm rounded-lg transition-all duration-200"
          >
            Get In Touch
          </a>
        </div>

        {/* Core Tech Stack Bar & External Links */}
        <div className="pt-8 border-t border-slate-800/80 grid sm:grid-cols-2 gap-6 items-center">
          {/* Skill Pills */}
          <div>
            <p className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-3">
              Core Technical Stack
            </p>
            <div className="flex flex-wrap gap-2">
              {featuredSkills.map((tech, idx) => (
                <span
                  key={idx}
                  className="text-xs font-mono bg-slate-900 text-slate-300 px-2.5 py-1 rounded border border-slate-800"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Social Profiles */}
          <div className="flex items-center gap-3 sm:justify-end">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2 bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white rounded-lg border border-slate-800 transition flex items-center gap-2 text-xs font-mono"
              aria-label="GitHub Profile"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
              <span>GitHub</span>
            </a>

            <a
              href={`mailto:${personalInfo.contactEmail}`}
              className="px-3 py-2 bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white rounded-lg border border-slate-800 transition flex items-center gap-2 text-xs font-mono"
              aria-label="Email Me"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>Email</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;