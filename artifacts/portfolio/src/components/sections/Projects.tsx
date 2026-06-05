import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, BookOpen, Network, X, ArrowRight, ExternalLink, Layers } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";

interface ArchStep {
  label: string;
  desc: string;
}

interface Project {
  title: string;
  subtitle: string;
  overview: string;
  bullets: string[];
  outcomes: { metric: string; label: string }[];
  arch: {
    title: string;
    steps: ArchStep[];
  };
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
    overview:
      "ReviveDesk is an AI-powered sales intelligence platform that identifies stalled B2B opportunities and autonomously generates recovery strategies. It combines CRM signals, meeting transcripts, and external company data to produce prioritised outreach plans — reducing manual sales admin by 90%.",
    bullets: [
      "Multi-Agent Orchestration via LangGraph",
      "Sentiment & Objection Detection on meeting data",
      "Deal Scoring Engine using engagement & momentum signals",
      "Automated CRM documentation and meeting intelligence",
    ],
    outcomes: [
      { metric: "90%", label: "Reduction in manual admin time" },
      { metric: "62→97%", label: "CRM data completeness improvement" },
      { metric: "5 Agents", label: "Specialised AI agents in pipeline" },
    ],
    arch: {
      title: "Multi-Agent Pipeline",
      steps: [
        { label: "CRM Ingestion", desc: "Pull deal, contact & meeting data from CRM via FastAPI endpoints" },
        { label: "Sentiment Agent", desc: "Analyse meeting transcripts for objections, tone & intent signals" },
        { label: "Research Agent", desc: "Enrich company profiles with external business signals via web search" },
        { label: "Scoring Engine", desc: "Score deals by engagement history, objection severity & momentum" },
        { label: "Strategy Agent", desc: "Generate personalised recovery plan & outreach draft per deal" },
        { label: "CRM Update", desc: "Auto-write structured notes and next-steps back to the CRM" },
      ],
    },
    tech: ["LangGraph", "Gemini 2.5 Flash", "FastAPI", "Supabase pgVector", "RAG"],
    links: { github: "#", architecture: "#", caseStudy: "#" },
  },
  {
    title: "CodeInsight AI",
    subtitle: "Repository Intelligence & Codebase Analysis System",
    overview:
      "CodeInsight AI transforms any Git repository into a queryable knowledge base. Engineers can ask natural-language questions about the codebase, generate PRDs from features, trace root causes of bugs across file dependencies, and onboard to unfamiliar systems in minutes instead of days.",
    bullets: [
      "Semantic Code Search across the full repo",
      "Repository-Aware RAG retrieval for precise context",
      "Root Cause Analysis — traces error propagation paths",
      "PRD & feature spec generation from existing code",
    ],
    outcomes: [
      { metric: "~10×", label: "Faster onboarding for new engineers" },
      { metric: "File-level", label: "RCA granularity with fix suggestions" },
      { metric: "Full repo", label: "Indexed via vector embeddings" },
    ],
    arch: {
      title: "Retrieval & Analysis Pipeline",
      steps: [
        { label: "Repo Indexing", desc: "Clone repo, parse files by type, chunk and embed code segments" },
        { label: "Vector Store", desc: "Store embeddings in Supabase pgVector with file metadata" },
        { label: "Query Router", desc: "Classify user intent — search, RCA, PRD generation, or Q&A" },
        { label: "RAG Retrieval", desc: "Semantic search retrieves the most relevant code chunks" },
        { label: "LangGraph Agent", desc: "Orchestrate multi-step reasoning — trace calls, flag impact zones" },
        { label: "Response", desc: "Return structured answer, code snippets, or generated PRD document" },
      ],
    },
    tech: ["LangGraph", "Gemini", "FastAPI", "RAG", "Supabase pgVector", "Vector Search"],
    links: { github: "#", architecture: "#", caseStudy: "#" },
  },
  {
    title: "VoiceScreenAI",
    subtitle: "AI Interview Screening Platform",
    overview:
      "VoiceScreenAI conducts fully autonomous technical and behavioural interviews using LLMs. It adapts questions in real time based on candidate responses, detects suspicious patterns, and produces explainable hiring recommendations — enabling recruiters to screen 10× more candidates without sacrificing evaluation quality.",
    bullets: [
      "Multi-Agent Architecture for question & evaluation flow",
      "LangGraph-orchestrated adaptive interview sessions",
      "Role-aware scoring with fraud & anomaly detection",
      "Explainable hiring recommendations with score breakdown",
    ],
    outcomes: [
      { metric: "10×", label: "More candidates screened per recruiter" },
      { metric: "Adaptive", label: "Question generation based on live responses" },
      { metric: "Explainable", label: "Hiring recommendations with reasoning" },
    ],
    arch: {
      title: "Interview Orchestration Flow",
      steps: [
        { label: "Session Init", desc: "Load role profile, difficulty level & interview config from Supabase" },
        { label: "Question Agent", desc: "Generate opening question based on role; adapt follow-ups dynamically" },
        { label: "Response Analysis", desc: "Evaluate answer for accuracy, depth, communication & red flags" },
        { label: "Fraud Detection", desc: "Flag copy-paste patterns, unnatural pacing & off-topic responses" },
        { label: "Scoring Agent", desc: "Aggregate scores per dimension — technical, behavioural, role fit" },
        { label: "Report Generation", desc: "Produce structured report with hire/no-hire recommendation" },
      ],
    },
    tech: ["LangGraph", "FastAPI", "Supabase", "PostgreSQL", "Llama"],
    links: { github: "#", architecture: "#", caseStudy: "#" },
  },
  {
    title: "Medical AI Assistant",
    subtitle: "RAG-Powered Clinical Knowledge Chatbot",
    overview:
      "A domain-specific medical chatbot that ingests clinical PDFs and answers questions with source-grounded, hallucination-resistant responses. It uses Pinecone for vector retrieval and Groq's LLaMA-3 for fast inference, making it suitable for medical reference queries where accuracy is non-negotiable.",
    bullets: [
      "PDF ingestion with intelligent chunking & parsing",
      "Pinecone vector search for precise passage retrieval",
      "LLaMA-3-70B inference via Groq for low-latency answers",
      "Reduced hallucinations through grounded RAG context",
    ],
    outcomes: [
      { metric: "Source-cited", label: "Every answer references source passages" },
      { metric: "Low latency", label: "Sub-second inference via Groq API" },
      { metric: "Modular", label: "Pluggable PDF ingest & query APIs" },
    ],
    arch: {
      title: "RAG Architecture",
      steps: [
        { label: "PDF Upload", desc: "User uploads clinical document via FastAPI endpoint" },
        { label: "Parsing & Chunking", desc: "Extract text, split into semantic chunks with overlap" },
        { label: "Embedding", desc: "Generate embeddings with Google Generative AI embedding model" },
        { label: "Vector Store", desc: "Upsert embeddings and metadata into Pinecone index" },
        { label: "Query & Retrieve", desc: "Embed user question, retrieve top-K relevant chunks from Pinecone" },
        { label: "LLM Answer", desc: "Feed chunks + question to LLaMA-3-70B; return cited response" },
      ],
    },
    tech: ["LangChain", "Pinecone", "Google Gen AI", "Groq", "LLaMA-3", "FastAPI"],
    links: { github: "#", architecture: "#", caseStudy: "#" },
  },
  {
    title: "News Summarizer & TTS",
    subtitle: "Multilingual News Intelligence Tool",
    overview:
      "A Python application that fetches real-time news articles by keyword, summarises them using Groq Llama, translates to Hindi, and converts to speech — enabling multilingual audio news consumption. It also runs sentiment analysis across articles to surface comparative tone insights.",
    bullets: [
      "Real-time article extraction from news sources",
      "Keyword-driven contextual summarisation via Groq Llama",
      "English → Hindi translation with multilingual support",
      "Sentiment & tone analysis across multiple articles",
    ],
    outcomes: [
      { metric: "Multilingual", label: "English summarisation + Hindi audio output" },
      { metric: "Real-time", label: "Live news fetch and instant summarisation" },
      { metric: "Comparative", label: "Tone analysis across multiple sources" },
    ],
    arch: {
      title: "Processing Pipeline",
      steps: [
        { label: "Keyword Input", desc: "User provides topic keywords for news discovery" },
        { label: "Article Fetch", desc: "Scrape and extract full-text articles from news sources" },
        { label: "Summarisation", desc: "Groq Llama generates concise, context-aware summaries" },
        { label: "Sentiment Analysis", desc: "Score each article for tone — positive, negative, neutral" },
        { label: "Translation", desc: "Translate English summary to Hindi via translation API" },
        { label: "TTS Output", desc: "Convert Hindi text to speech with gTTS; serve audio file" },
      ],
    },
    tech: ["Groq Llama", "gTTS", "NLP", "Sentiment Analysis", "Python"],
    links: { github: "#", architecture: "#", caseStudy: "#" },
  },
];

function ArchDiagram({ steps }: { steps: ArchStep[] }) {
  return (
    <div className="flex flex-col gap-1.5">
      {steps.map((step, i) => (
        <div key={i} className="flex flex-col">
          <div className="flex items-start gap-3 bg-background/60 border border-border/40 rounded-lg px-3 py-2.5">
            <span className="shrink-0 w-5 h-5 rounded-full bg-primary/20 border border-primary/40 text-primary text-[10px] font-mono font-bold flex items-center justify-center mt-0.5">
              {i + 1}
            </span>
            <div>
              <p className="text-xs font-semibold text-white">{step.label}</p>
              <p className="text-[11px] text-muted-foreground leading-snug mt-0.5">{step.desc}</p>
            </div>
          </div>
          {i < steps.length - 1 && (
            <div className="flex justify-center py-0.5">
              <ArrowRight size={12} className="text-primary/40 rotate-90" />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

function ProjectDialog({ project, open, onClose }: { project: Project | null; open: boolean; onClose: () => void }) {
  const [tab, setTab] = useState<"overview" | "architecture">("overview");

  if (!project) return null;

  return (
    <Dialog open={open} onOpenChange={(v) => { if (!v) onClose(); }}>
      <DialogContent
        className="max-w-2xl w-full bg-card border-border/60 p-0 overflow-hidden rounded-2xl max-h-[90vh] flex flex-col"
        data-testid="dialog-project"
      >
        {/* Header */}
        <div className="px-6 pt-6 pb-4 border-b border-border/40 shrink-0">
          <div className="flex items-start justify-between gap-4">
            <div>
              <DialogTitle className="text-xl font-bold text-white mb-1">{project.title}</DialogTitle>
              <p className="text-xs text-secondary font-medium">{project.subtitle}</p>
            </div>
            <button
              onClick={onClose}
              data-testid="button-dialog-close"
              className="shrink-0 p-1.5 rounded-md text-muted-foreground hover:text-white hover:bg-white/10 transition-colors"
            >
              <X size={16} />
            </button>
          </div>

          {/* Tabs */}
          <div className="flex gap-1 mt-4">
            {(["overview", "architecture"] as const).map((t) => (
              <button
                key={t}
                data-testid={`tab-${t}`}
                onClick={() => setTab(t)}
                className={`flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-md font-mono transition-all duration-200 ${
                  tab === t
                    ? "bg-primary/20 text-primary border border-primary/40"
                    : "text-muted-foreground hover:text-white border border-transparent"
                }`}
              >
                {t === "overview" ? <Layers size={11} /> : <Network size={11} />}
                {t.charAt(0).toUpperCase() + t.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Scrollable content */}
        <div className="overflow-y-auto flex-1 px-6 py-5 space-y-5">
          <AnimatePresence mode="wait">
            {tab === "overview" ? (
              <motion.div
                key="overview"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
                className="space-y-5"
              >
                {/* Overview */}
                <div>
                  <h4 className="text-[10px] uppercase tracking-widest text-muted-foreground/60 font-mono mb-2">Overview</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{project.overview}</p>
                </div>

                {/* Key Features */}
                <div>
                  <h4 className="text-[10px] uppercase tracking-widest text-muted-foreground/60 font-mono mb-2">Key Features</h4>
                  <ul className="space-y-2">
                    {project.bullets.map((b, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/70 shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Outcomes */}
                <div>
                  <h4 className="text-[10px] uppercase tracking-widest text-muted-foreground/60 font-mono mb-2">Impact</h4>
                  <div className="grid grid-cols-3 gap-3">
                    {project.outcomes.map((o, i) => (
                      <div key={i} className="bg-background/60 border border-border/40 rounded-lg px-3 py-3 text-center">
                        <p className="text-base font-bold text-primary font-mono">{o.metric}</p>
                        <p className="text-[10px] text-muted-foreground leading-tight mt-1">{o.label}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech */}
                <div>
                  <h4 className="text-[10px] uppercase tracking-widest text-muted-foreground/60 font-mono mb-2">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t, i) => (
                      <span key={i} className="text-xs font-mono px-2.5 py-1 rounded-md bg-primary/10 border border-primary/20 text-primary/80">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="architecture"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
                className="space-y-4"
              >
                <div>
                  <h4 className="text-[10px] uppercase tracking-widest text-muted-foreground/60 font-mono mb-1">{project.arch.title}</h4>
                  <p className="text-xs text-muted-foreground/60 mb-4">Step-by-step data and control flow</p>
                  <ArchDiagram steps={project.arch.steps} />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Footer links */}
        <div className="px-6 py-4 border-t border-border/40 flex gap-2 flex-wrap shrink-0">
          {project.links.github && (
            <a
              href={project.links.github}
              data-testid="link-dialog-github"
              className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-md border border-border/60 text-muted-foreground hover:text-primary hover:border-primary/50 transition-all font-mono"
            >
              <Github size={12} /> GitHub
            </a>
          )}
          {project.links.architecture && (
            <a
              href={project.links.architecture}
              data-testid="link-dialog-architecture"
              className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-md border border-border/60 text-muted-foreground hover:text-secondary hover:border-secondary/50 transition-all font-mono"
            >
              <Network size={12} /> Architecture
            </a>
          )}
          {project.links.caseStudy && (
            <a
              href={project.links.caseStudy}
              data-testid="link-dialog-casestudy"
              className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-md border border-border/60 text-muted-foreground hover:text-accent hover:border-accent/50 transition-all font-mono"
            >
              <BookOpen size={12} /> Case Study
            </a>
          )}
          <a
            href="#"
            data-testid="link-dialog-external"
            className="ml-auto flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-md bg-primary/10 border border-primary/30 text-primary hover:bg-primary/20 transition-all font-mono"
          >
            <ExternalLink size={12} /> View Project
          </a>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 relative bg-card/20">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-mono font-bold mb-3 flex items-center gap-4">
            <span className="text-primary text-xl">04.</span> Some Things I've Built
            <div className="h-px bg-border flex-grow ml-4" />
          </h2>
          <p className="text-xs text-muted-foreground/60 font-mono mb-12">Click any card to explore the project in detail</p>
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
              onClick={() => setSelected(project)}
              className="bg-card border border-card-border rounded-xl p-6 flex flex-col cursor-pointer hover:-translate-y-1 hover:border-primary/50 hover:shadow-[0_0_24px_rgba(99,102,241,0.1)] transition-all duration-300 group"
            >
              <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors mb-1">
                {project.title}
              </h3>
              <p className="text-xs text-secondary font-medium mb-4 leading-snug">
                {project.subtitle}
              </p>

              <ul className="space-y-1.5 mb-5 flex-grow">
                {project.bullets.map((b, bIdx) => (
                  <li key={bIdx} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/70 shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>

              <div className="mb-4 pt-4 border-t border-border/40">
                <p className="text-[10px] uppercase tracking-widest text-muted-foreground/60 font-mono mb-2">Tech</p>
                <p className="text-xs font-mono text-primary/80 leading-relaxed">
                  {project.tech.join(" • ")}
                </p>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex gap-2 flex-wrap">
                  {project.links.github && (
                    <span
                      onClick={(e) => e.stopPropagation()}
                      className="inline-block"
                    >
                      <a
                        href={project.links.github}
                        data-testid={`link-github-${idx}`}
                        className="flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-md border border-border/60 text-muted-foreground hover:text-primary hover:border-primary/50 transition-all font-mono"
                      >
                        <Github size={11} /> GitHub
                      </a>
                    </span>
                  )}
                </div>
                <span className="text-xs text-muted-foreground/50 font-mono flex items-center gap-1 group-hover:text-primary/60 transition-colors">
                  Details <ArrowRight size={11} />
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <ProjectDialog
        project={selected}
        open={!!selected}
        onClose={() => setSelected(null)}
      />
    </section>
  );
}
