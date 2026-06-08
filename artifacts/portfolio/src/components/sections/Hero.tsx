import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ChevronRight, Download } from "lucide-react";

const CodeRain = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();
    window.addEventListener("resize", setCanvasSize);

    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$+-*/=%\"'#&_(),.;:?!\\|{}<>[]^~";
    const fontSize = 14;
    let columns = canvas.width / fontSize;
    let drops = Array.from({ length: columns }).fill(1) as number[];

    const draw = () => {
      ctx.fillStyle = "rgba(5, 5, 5, 0.1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.font = `${fontSize}px "JetBrains Mono", monospace`;
      for (let i = 0; i < drops.length; i++) {
        const text = letters[Math.floor(Math.random() * letters.length)];
        ctx.fillStyle = Math.random() > 0.5 ? "#00F0FF" : "#FF00A0";
        ctx.globalAlpha = 0.08;
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 50);
    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", setCanvasSize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0 w-full h-full pointer-events-none"
    />
  );
};

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const [subtitle, setSubtitle] = useState("");
  const fullSubtitle = "AI/ML Engineer | Generative AI | Multi-Agent Systems";

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setSubtitle(fullSubtitle.slice(0, i));
      i++;
      if (i > fullSubtitle.length) clearInterval(interval);
    }, 40);
    return () => clearInterval(interval);
  }, []);

  if (!mounted) return null;

  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden bg-[#050505]"
    >
      {/* Background Effects */}
      <CodeRain />
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `linear-gradient(to right, #1F2937 1px, transparent 1px), linear-gradient(to bottom, #1F2937 1px, transparent 1px)`,
          backgroundSize: "4rem 4rem",
        }}
      />

      {/* Corner Accents */}
      <div className="absolute top-4 left-4 w-16 h-16 border-t-2 border-l-2 border-[#1F2937] pointer-events-none z-10" />
      <div className="absolute top-4 right-4 w-16 h-16 border-t-2 border-r-2 border-[#1F2937] pointer-events-none z-10" />
      <div className="absolute bottom-4 left-4 w-16 h-16 border-b-2 border-l-2 border-[#1F2937] pointer-events-none z-10" />
      <div className="absolute bottom-4 right-4 w-16 h-16 border-b-2 border-r-2 border-[#1F2937] pointer-events-none z-10" />

      <div className="container relative z-10 px-4 md:px-8 mx-auto">
        <div className="max-w-4xl mx-auto">
          {/* Animated Gradient Border Card */}
          <div className="animated-border-box shadow-[0_0_50px_rgba(0,0,0,0.8)]">
            <div className="animated-border-content p-8 md:p-12 lg:p-16 flex flex-col gap-6">

              {/* Top Bar */}
              <div className="flex items-center justify-between mb-2 pb-4 border-b border-[#1F2937]/50">
                <div className="flex items-center gap-2 text-[#6B7280]">
                  <span className="text-xs tracking-widest uppercase">sys.init_sequence</span>
                </div>
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-[#1F2937]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#1F2937]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#FF00A0] shadow-[0_0_8px_#FF00A0]"></div>
                </div>
              </div>

              {/* Intro */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-2 text-[#00F0FF] text-sm md:text-base font-bold tracking-wider"
              >
                <ChevronRight className="w-5 h-5" />
                <span>HELLO, I&apos;M</span>
              </motion.div>

              {/* Name with Glitch */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h1 className="glitch-load text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold uppercase text-[#FF00A0] tracking-tighter leading-none mb-2 break-words">
                  Anjali Dhosariya
                </h1>
              </motion.div>

              {/* Typing Subtitle */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-[#F0F0F0] text-lg md:text-xl lg:text-2xl font-medium min-h-[2rem] md:min-h-[2.5rem] flex items-center"
              >
                <span className="text-[#6B7280] mr-2">$</span>
                <span>{subtitle}</span>
                <span className="inline-block w-3 h-6 md:h-7 bg-[#00F0FF] ml-1 animate-blink shadow-[0_0_8px_#00F0FF]"></span>
              </motion.div>

              {/* Stats Row */}
              <div className="flex flex-wrap gap-4 md:gap-8 mt-4 py-6 border-y border-[#1F2937]/50 text-sm md:text-base text-[#6B7280]">
                <div className="flex flex-col">
                  <span className="text-xs uppercase tracking-widest mb-1 text-[#00F0FF]">Experience</span>
                  <span className="text-[#F0F0F0] font-bold">3 Internships</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs uppercase tracking-widest mb-1 text-[#00F0FF]">Portfolio</span>
                  <span className="text-[#F0F0F0] font-bold">5+ Projects</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs uppercase tracking-widest mb-1 text-[#00F0FF]">Academic</span>
                  <span className="text-[#F0F0F0] font-bold">9.3 CGPA</span>
                </div>
              </div>

              {/* Buttons & Socials */}
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mt-6">
                <div className="flex flex-wrap gap-4">
                  <a
                    href="#projects"
                    className="neon-btn-pink bg-[#FF00A0]/10 border border-[#FF00A0] text-[#FF00A0] px-6 py-3 font-bold tracking-wider uppercase text-sm flex items-center gap-2 group"
                  >
                    <ChevronRight className="w-4 h-4" />
                    View Projects
                  </a>
                  <a
                    href="#"
                    className="neon-btn-cyan bg-transparent border border-[#00F0FF] text-[#00F0FF] px-6 py-3 font-bold tracking-wider uppercase text-sm flex items-center gap-2 group"
                  >
                    <Download className="w-4 h-4" />
                    Resume
                  </a>
                </div>

                <div className="flex items-center gap-6">
                  <a
                    href="https://github.com/AnjaliDhosariya"
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#6B7280] hover:text-[#FF00A0] icon-hover-glow"
                    aria-label="GitHub"
                  >
                    <Github className="w-6 h-6" />
                  </a>
                  <a
                    href="https://in.linkedin.com/in/anjalidhosariya"
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#6B7280] hover:text-[#00F0FF] icon-hover-glow"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a
                    href="mailto:anjalidhosariya1126@gmail.com"
                    className="text-[#6B7280] hover:text-[#F0F0F0] icon-hover-glow"
                    aria-label="Email"
                  >
                    <Mail className="w-6 h-6" />
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
