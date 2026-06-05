import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Download, ChevronRight, Github, Linkedin, Mail } from "lucide-react";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const roles = ["AI/ML Engineer", "Generative AI Builder", "Python Developer"];
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  if (!mounted) return null;

  return (
    <section id="hero" className="relative min-h-[100dvh] flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Image / Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/hero-bg.png" 
          alt="Abstract Neural Network" 
          className="w-full h-full object-cover opacity-30 mix-blend-screen"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent opacity-50" />
      </div>

      <div className="container relative z-10 px-6 mx-auto">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="h-px w-8 bg-primary" />
            <span className="text-primary font-mono text-sm tracking-wider uppercase">Hello, I'm</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold font-mono tracking-tighter text-white mb-6"
          >
            Anjali Dhosariya.
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl md:text-5xl font-bold text-muted-foreground mb-8 h-[1.2em] flex items-center"
          >
            I am a{" "}
            <span className="text-secondary ml-3 inline-block">
              {roles[roleIndex]}
            </span>
            <motion.span 
              animate={{ opacity: [0, 1, 0] }}
              transition={{ repeat: Infinity, duration: 1 }}
              className="inline-block w-[3px] h-[1em] bg-secondary ml-1 align-middle"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-12 leading-relaxed"
          >
            I build intelligent, multi-agent systems and real-world AI applications that solve complex business problems.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap items-center gap-6"
          >
            <a
              href="#projects"
              className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-mono font-bold tracking-wide overflow-hidden rounded-sm transition-transform hover:scale-[1.02]"
              data-testid="link-view-projects"
            >
              <span className="relative z-10 flex items-center gap-2">
                View Projects
                <ChevronRight size={18} className="transition-transform group-hover:translate-x-1" />
              </span>
              <div className="absolute inset-0 h-full w-0 bg-white/20 transition-all duration-300 ease-out group-hover:w-full" />
            </a>

            <a
              href="#"
              className="inline-flex items-center gap-2 px-8 py-4 border border-white/10 text-white font-mono font-medium rounded-sm hover:bg-white/5 transition-colors"
              data-testid="link-download-resume"
            >
              <Download size={18} />
              Resume
            </a>

            <div className="flex items-center gap-4 ml-4">
              <a href="https://github.com/AnjaliDhosariya" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-white transition-colors" data-testid="link-github">
                <Github size={24} />
              </a>
              <a href="https://in.linkedin.com/in/anjalidhosariya" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-linkedin">
                <Linkedin size={24} />
              </a>
              <a href="mailto:anjalidhosariya1126@gmail.com" className="text-muted-foreground hover:text-secondary transition-colors" data-testid="link-email">
                <Mail size={24} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
