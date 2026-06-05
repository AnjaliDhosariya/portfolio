import { motion } from "framer-motion";
import { Github, BookOpen, Network } from "lucide-react";

interface Project {
  title: string;
  subtitle: string;
  bullets: string[];
  tech: string[];
  links: {
    github?: string;
    architecture?: string;
    caseStudy?: string;
  };
}

const PROJECTS: Project[] = [
  {
    title: "ReviveDesk",
    subtitle: "Multi-Agent B2B Sales Recovery Platform",
    bullets: [
      "Multi-Agent Orchestration",
      "Sentiment & Objection Detection",
      "Deal Scoring Engine",
      "Automated CRM Documentation",
    ],
    tech: ["LangGraph", "Gemini 2.5 Flash", "FastAPI", "Supabase pgVector", "RAG"],
    links: { github: "#", architecture: "#", caseStudy: "#" },
  },
  {
    title: "CodeInsight AI",
    subtitle: "Repository Intelligence & Codebase Analysis System",
    bullets: [
      "Semantic Code Search",
      "Repository-Aware Retrieval",
      "Root Cause Analysis Workflows",
      "PRD Generation from Codebase",
    ],
    tech: ["LangGraph", "Gemini", "FastAPI", "RAG", "Vector Search"],
    links: { github: "#", architecture: "#", caseStudy: "#" },
  },
  {
    title: "VoiceScreenAI",
    subtitle: "AI Interview Screening Platform",
    bullets: [
      "Multi-Agent Architecture",
      "LangGraph Orchestration",
      "Fraud Detection",
      "Automated Candidate Evaluation",
    ],
    tech: ["LangGraph", "FastAPI", "Supabase", "Llama"],
    links: { github: "#", architecture: "#", caseStudy: "#" },
  },
  {
    title: "Medical AI Assistant",
    subtitle: "RAG-Powered Clinical Knowledge Chatbot",
    bullets: [
      "PDF Ingestion & Parsing",
      "Vector Search Retrieval",
      "Hallucination Reduction",
      "Context-Aware Medical Responses",
    ],
    tech: ["LangChain", "Pinecone", "Google Gen AI", "Groq", "FastAPI"],
    links: { github: "#", architecture: "#", caseStudy: "#" },
  },
  {
    title: "News Summarizer & TTS",
    subtitle: "Multilingual News Intelligence Tool",
    bullets: [
      "Real-Time Article Extraction",
      "Keyword-Driven Summarization",
      "Hindi Translation Support",
      "Sentiment & Tone Analysis",
    ],
    tech: ["Groq Llama", "gTTS", "NLP", "Sentiment Analysis"],
    links: { github: "#", architecture: "#", caseStudy: "#" },
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative bg-card/20">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-mono font-bold mb-12 flex items-center gap-4">
            <span className="text-primary text-xl">04.</span> Some Things I've Built
            <div className="h-px bg-border flex-grow ml-4" />
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={idx}
              data-testid={`card-project-${idx}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
              className="bg-card border border-card-border rounded-xl p-6 flex flex-col hover:-translate-y-1 hover:border-primary/50 hover:shadow-[0_0_24px_rgba(99,102,241,0.08)] transition-all duration-300 group"
            >
              {/* Title & subtitle */}
              <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors mb-1">
                {project.title}
              </h3>
              <p className="text-xs text-secondary font-medium mb-4 leading-snug">
                {project.subtitle}
              </p>

              {/* Bullet features */}
              <ul className="space-y-1.5 mb-5 flex-grow">
                {project.bullets.map((b, bIdx) => (
                  <li key={bIdx} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/70 shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>

              {/* Tech stack */}
              <div className="mb-5 pt-4 border-t border-border/40">
                <p className="text-[10px] uppercase tracking-widest text-muted-foreground/60 font-mono mb-2">
                  Tech
                </p>
                <p className="text-xs font-mono text-primary/80 leading-relaxed">
                  {project.tech.join(" • ")}
                </p>
              </div>

              {/* Action buttons */}
              <div className="flex gap-2 flex-wrap">
                {project.links.github && (
                  <a
                    href={project.links.github}
                    data-testid={`link-github-${idx}`}
                    className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-md border border-border/60 text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-200 font-mono"
                  >
                    <Github size={12} />
                    GitHub
                  </a>
                )}
                {project.links.architecture && (
                  <a
                    href={project.links.architecture}
                    data-testid={`link-architecture-${idx}`}
                    className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-md border border-border/60 text-muted-foreground hover:text-secondary hover:border-secondary/50 transition-all duration-200 font-mono"
                  >
                    <Network size={12} />
                    Architecture
                  </a>
                )}
                {project.links.caseStudy && (
                  <a
                    href={project.links.caseStudy}
                    data-testid={`link-casestudy-${idx}`}
                    className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-md border border-border/60 text-muted-foreground hover:text-accent hover:border-accent/50 transition-all duration-200 font-mono"
                  >
                    <BookOpen size={12} />
                    Case Study
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
