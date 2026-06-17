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
            <span className="text-secondary text-xl">01.</span> About Me
            <div className="h-px bg-border flex-grow ml-4" />
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                I am an AI/ML Engineer specializing in Generative AI,
                Multi-Agent Systems, and Production-Grade Backend Development. I
                hold an M.Tech Dual Degree in Artificial Intelligence & Data
                Science from DAVV, Indore, graduating with a CGPA of 9.3.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                I build end-to-end AI products that move beyond prototypes into
                real-world business workflows. My experience spans autonomous AI
                agents, RAG systems, semantic search, repository intelligence,
                interview automation, enterprise integrations, and scalable API
                development.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                My expertise lies in combining LLMs, LangGraph, FastAPI, vector
                databases, cloud technologies, and modern software engineering
                practices to create intelligent systems that automate workflows,
                improve decision-making, and deliver measurable business impact.
                I am passionate about transforming cutting-edge AI research into
                scalable, reliable, and production-ready software solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-card border border-border p-5 rounded-lg flex flex-col items-start gap-3 hover:border-primary/50 transition-colors">
                <div className="p-2 bg-primary/10 rounded-md text-primary">
                  <Terminal size={24} />
                </div>
                <div>
                  <h3 className="text-foreground font-mono font-bold mb-1">
                    GATE 2025
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    AIR 3219 in Data Science & AI
                  </p>
                </div>
              </div>

              <div className="bg-card border border-border p-5 rounded-lg flex flex-col items-start gap-3 hover:border-secondary/50 transition-colors">
                <div className="p-2 bg-secondary/10 rounded-md text-secondary">
                  <BrainCircuit size={24} />
                </div>
                <div>
                  <h3 className="text-foreground font-mono font-bold mb-1">
                    Scholarship
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Medhavi Vidyarthi Yojana Awardee
                  </p>
                </div>
              </div>

              <div className="bg-card border border-border p-5 rounded-lg flex flex-col items-start gap-3 hover:border-primary/50 transition-colors">
                <div className="p-2 bg-primary/10 rounded-md text-primary">
                  <Code2 size={24} />
                </div>
                <div>
                  <h3 className="text-foreground font-mono font-bold mb-1">
                    Engineering
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Full-stack Python & FastAPI
                  </p>
                </div>
              </div>

              <div className="bg-card border border-border p-5 rounded-lg flex flex-col items-start gap-3 hover:border-secondary/50 transition-colors">
                <div className="p-2 bg-secondary/10 rounded-md text-secondary">
                  <Database size={24} />
                </div>
                <div>
                  <h3 className="text-foreground font-mono font-bold mb-1">
                    Data & Vector
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    PostgreSQL, pgVector, MongoDB
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
