import React, { useEffect, useState } from "react";
import { Github, Linkedin, Mail, ArrowRight, Download } from "lucide-react";
import { motion } from "framer-motion";
import "./_group.css";

export function Minimalist() {
  const [typedText, setTypedText] = useState("");
  const fullText = "Building intelligent, multi-agent systems & real-world AI applications";
  
  useEffect(() => {
    let current = "";
    let i = 0;
    const interval = setInterval(() => {
      current += fullText[i];
      setTypedText(current);
      i++;
      if (i >= fullText.length) clearInterval(interval);
    }, 40);
    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div className="portfolio-minimalist relative min-h-screen w-full overflow-hidden flex items-center py-20 lg:py-0">
      {/* Background blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-[#0A192F] opacity-5 blur-[100px] mix-blend-multiply animate-blob"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-[#FF6B6B] opacity-[0.03] blur-[100px] mix-blend-multiply animate-blob animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 z-10">
        <motion.div 
          className="max-w-4xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="mb-6 flex items-center gap-4">
            <span className="h-px w-8 bg-[#0A192F]"></span>
            <span className="text-[#0A192F] uppercase tracking-[0.3em] text-xs font-semibold">AI/ML Engineer</span>
          </motion.div>

          <motion.div variants={itemVariants} className="relative inline-block mb-8">
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-[#0A192F] tracking-tighter leading-[1.1] relative z-10">
              Anjali Dhosariya
            </h1>
            <svg className="absolute w-[105%] h-8 -bottom-4 -left-2 text-[#FF6B6B] z-0" viewBox="0 0 400 12" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
              <motion.path 
                d="M2 10C100 2 300 2 398 10" 
                stroke="currentColor" 
                strokeWidth="4" 
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.2, delay: 1, ease: "easeInOut" }}
              />
            </svg>
          </motion.div>

          <motion.div variants={itemVariants} className="h-16 md:h-12 mb-10">
            <p className="text-[#6B7280] text-lg md:text-xl font-light max-w-2xl">
              {typedText}
              <span className="animate-pulse inline-block w-[2px] h-5 ml-1 bg-[#0A192F] align-middle"></span>
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 mb-16">
            <button className="group flex items-center gap-2 px-8 py-4 bg-[#0A192F] text-white rounded-none hover:bg-[#0A192F]/90 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#0A192F]/20 font-medium">
              View Projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="group flex items-center gap-2 px-8 py-4 border border-[#0A192F] text-[#0A192F] bg-transparent rounded-none hover:bg-[#0A192F]/5 transition-all duration-300 hover:scale-105 font-medium">
              <Download className="w-4 h-4" />
              Resume
            </button>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-8 md:gap-12">
            <div className="flex gap-4">
              {[Github, Linkedin, Mail].map((Icon, idx) => (
                <a key={idx} href="#" className="w-12 h-12 rounded-full border border-[#E5E7EB] flex items-center justify-center text-[#0A192F] hover:border-[#0A192F] hover:text-[#0A192F] hover:scale-110 transition-all duration-300 bg-white shadow-sm">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            <div className="hidden md:block w-px h-12 bg-[#E5E7EB]"></div>

            <div className="flex gap-6 md:gap-8 flex-wrap">
              {[
                { label: "Internships", value: "3" },
                { label: "Projects", value: "5+" },
                { label: "CGPA", value: "9.3" }
              ].map((stat, idx) => (
                <div key={idx} className="flex flex-col">
                  <span className="font-display font-bold text-2xl text-[#0A192F]">{stat.value}</span>
                  <span className="text-xs text-[#6B7280] uppercase tracking-wider">{stat.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}