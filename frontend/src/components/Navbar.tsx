import { motion } from "framer-motion";
import { NAV_LINKS } from "../data/constants";

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 w-full z-50 border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-md"
    >
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="text-zinc-50 font-semibold tracking-tight text-lg">Parth.dev</span>
        <ul className="flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <li key={link.name}>
              <a 
                href={link.href} 
                className="text-sm font-medium text-zinc-400 hover:text-zinc-50 transition-colors"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
}