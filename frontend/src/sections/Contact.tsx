// src/sections/Contact.tsx
import React from 'react';
import { personalInfo } from '../data/constants';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-slate-950 text-slate-100 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-100 mb-8 flex items-center gap-3">
          <span className="text-indigo-400 font-mono text-xl">04.</span> Get In Touch
          <span className="h-px bg-slate-800 flex-grow ml-4"></span>
        </h2>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-white">Let's Build Something Together</h3>
          <p className="text-slate-400 max-w-xl mx-auto mb-8 leading-relaxed">
            I am currently open to full-stack and backend software engineering opportunities. Whether you have a project in mind or want to connect, feel free to reach out.
          </p>

          <div className="grid sm:grid-cols-3 gap-4 mb-8 text-left">
            <a
              href={`mailto:${personalInfo.contactEmail}`}
              className="p-4 bg-slate-950 border border-slate-800 rounded-xl hover:border-indigo-500/50 transition group"
            >
              <span className="text-xs font-mono text-indigo-400 uppercase">Email</span>
              <p className="text-sm font-medium text-slate-200 group-hover:text-indigo-300 truncate mt-1">
                {personalInfo.contactEmail}
              </p>
            </a>

            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-slate-950 border border-slate-800 rounded-xl hover:border-indigo-500/50 transition group"
            >
              <span className="text-xs font-mono text-indigo-400 uppercase">GitHub</span>
              <p className="text-sm font-medium text-slate-200 group-hover:text-indigo-300 truncate mt-1">
                github.com/btwitssparth
              </p>
            </a>

            <div className="p-4 bg-slate-950 border border-slate-800 rounded-xl">
              <span className="text-xs font-mono text-indigo-400 uppercase">Location</span>
              <p className="text-sm font-medium text-slate-200 mt-1">
                {personalInfo.location}, India
              </p>
            </div>
          </div>

          <a
            href={`mailto:${personalInfo.contactEmail}`}
            className="inline-block px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-medium rounded-xl transition shadow-lg shadow-indigo-600/20"
          >
            Send Me an Email
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;