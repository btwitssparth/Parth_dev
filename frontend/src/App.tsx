// src/App.tsx
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';

import Projects from './sections/Projects';
import Contact from './sections/Contact';

const Footer: React.FC = () => (
  <footer className="p-6 text-center bg-slate-950 text-slate-500 border-t border-slate-800 text-sm">
    © {new Date().getFullYear()} Parth Jain. Built with React, TypeScript & Tailwind CSS.
  </footer>
);

const App: React.FC = () => {
  return (
    <div className="font-sans antialiased bg-slate-950 text-slate-100 selection:bg-indigo-500 selection:text-white">
      <Navbar />
      <main>
        <Hero />
       
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;