import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 max-w-5xl mx-auto border-t border-zinc-800/50">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center text-center max-w-2xl mx-auto"
      >
        <h2 className="text-3xl font-bold tracking-tight text-zinc-50 mb-4">Let's build together.</h2>
        <p className="text-zinc-400 mb-10 leading-relaxed">
          Whether you need a complex backend architecture, real-time WebSocket integration, or a full-stack MERN application, I'm ready to write clean, maintainable code for your next project.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-zinc-300">
          <a href="mailto:parthwhats@gmail.com" className="flex items-center gap-3 hover:text-zinc-50 transition-colors group">
            <Mail className="w-5 h-5 text-zinc-500 group-hover:text-zinc-50 transition-colors" />
            <span>parthwhats@gmail.com</span>
          </a>
          <div className="flex items-center gap-3">
            <Phone className="w-5 h-5 text-zinc-500" />
            <span>8591670298</span>
          </div>
          <div className="flex items-center gap-3">
            <MapPin className="w-5 h-5 text-zinc-500" />
            <span>Mumbai, India</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}