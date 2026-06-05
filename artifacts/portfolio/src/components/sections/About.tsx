import { motion } from "framer-motion";
import { Terminal, BrainCircuit, Code2, Database } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-secondary/5 skew-y-3 origin-top-left -z-10" />
      
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-mono font-bold mb-8 flex items-center gap-4">
            <span className="text-primary text-xl">01.</span> About Me
            <div className="h-px bg-border flex-grow ml-4" />
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                I am an AI/ML Engineer with a 9.3 CGPA from DAVV, Indore, specializing in generative AI, multi-agent systems, and robust backend architectures. I bridge the gap between academic research and production-grade software.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                My focus is on building intelligent systems that solve real business problems—from AI-powered repository intelligence platforms to autonomous interview screening systems. I don't just train models; I deploy them, wrap them in scalable APIs, and integrate them into enterprise workflows.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-card border border-card-border p-5 rounded-lg flex flex-col items-start gap-3 hover:border-primary/50 transition-colors">
                <div className="p-2 bg-primary/10 rounded-md text-primary">
                  <Terminal size={24} />
                </div>
                <div>
                  <h3 className="text-white font-mono font-bold mb-1">GATE 2025</h3>
                  <p className="text-sm text-muted-foreground">AIR 3219 in Data Science & AI</p>
                </div>
              </div>
              
              <div className="bg-card border border-card-border p-5 rounded-lg flex flex-col items-start gap-3 hover:border-secondary/50 transition-colors">
                <div className="p-2 bg-secondary/10 rounded-md text-secondary">
                  <BrainCircuit size={24} />
                </div>
                <div>
                  <h3 className="text-white font-mono font-bold mb-1">Scholarship</h3>
                  <p className="text-sm text-muted-foreground">Medhavi Vidyarthi Yojana Awardee</p>
                </div>
              </div>
              
              <div className="bg-card border border-card-border p-5 rounded-lg flex flex-col items-start gap-3 hover:border-primary/50 transition-colors">
                <div className="p-2 bg-primary/10 rounded-md text-primary">
                  <Code2 size={24} />
                </div>
                <div>
                  <h3 className="text-white font-mono font-bold mb-1">Engineering</h3>
                  <p className="text-sm text-muted-foreground">Full-stack Python & FastAPI</p>
                </div>
              </div>

              <div className="bg-card border border-card-border p-5 rounded-lg flex flex-col items-start gap-3 hover:border-secondary/50 transition-colors">
                <div className="p-2 bg-secondary/10 rounded-md text-secondary">
                  <Database size={24} />
                </div>
                <div>
                  <h3 className="text-white font-mono font-bold mb-1">Data & Vector</h3>
                  <p className="text-sm text-muted-foreground">PostgreSQL, pgVector, MongoDB</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
