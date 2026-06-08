import { motion } from "framer-motion";
import { Terminal, BrainCircuit, Code2, Database } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-mono font-bold mb-8 flex items-center gap-4">
            <span className="text-[#00F0FF] text-xl">01.</span> About Me
            <div className="h-px bg-[#1F2937] flex-grow ml-4" />
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <p className="text-[#6B7280] text-lg leading-relaxed mb-6">
                I am an AI/ML Engineer with a 9.3 CGPA from DAVV, Indore, specializing in generative AI, multi-agent systems, and robust backend architectures. I bridge the gap between academic research and production-grade software.
              </p>
              <p className="text-[#6B7280] text-lg leading-relaxed">
                My focus is on building intelligent systems that solve real business problems—from AI-powered repository intelligence platforms to autonomous interview screening systems. I don't just train models; I deploy them, wrap them in scalable APIs, and integrate them into enterprise workflows.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-[#0A0A0A] border border-[#1F2937] p-5 rounded-lg flex flex-col items-start gap-3 hover:border-[#FF00A0]/50 transition-colors">
                <div className="p-2 bg-[#FF00A0]/10 rounded-md text-[#FF00A0]">
                  <Terminal size={24} />
                </div>
                <div>
                  <h3 className="text-[#F0F0F0] font-mono font-bold mb-1">GATE 2025</h3>
                  <p className="text-sm text-[#6B7280]">AIR 3219 in Data Science & AI</p>
                </div>
              </div>
              
              <div className="bg-[#0A0A0A] border border-[#1F2937] p-5 rounded-lg flex flex-col items-start gap-3 hover:border-[#00F0FF]/50 transition-colors">
                <div className="p-2 bg-[#00F0FF]/10 rounded-md text-[#00F0FF]">
                  <BrainCircuit size={24} />
                </div>
                <div>
                  <h3 className="text-[#F0F0F0] font-mono font-bold mb-1">Scholarship</h3>
                  <p className="text-sm text-[#6B7280]">Medhavi Vidyarthi Yojana Awardee</p>
                </div>
              </div>
              
              <div className="bg-[#0A0A0A] border border-[#1F2937] p-5 rounded-lg flex flex-col items-start gap-3 hover:border-[#FF00A0]/50 transition-colors">
                <div className="p-2 bg-[#FF00A0]/10 rounded-md text-[#FF00A0]">
                  <Code2 size={24} />
                </div>
                <div>
                  <h3 className="text-[#F0F0F0] font-mono font-bold mb-1">Engineering</h3>
                  <p className="text-sm text-[#6B7280]">Full-stack Python & FastAPI</p>
                </div>
              </div>

              <div className="bg-[#0A0A0A] border border-[#1F2937] p-5 rounded-lg flex flex-col items-start gap-3 hover:border-[#00F0FF]/50 transition-colors">
                <div className="p-2 bg-[#00F0FF]/10 rounded-md text-[#00F0FF]">
                  <Database size={24} />
                </div>
                <div>
                  <h3 className="text-[#F0F0F0] font-mono font-bold mb-1">Data & Vector</h3>
                  <p className="text-sm text-[#6B7280]">PostgreSQL, pgVector, MongoDB</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
