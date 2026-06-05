import { motion } from "framer-motion";
import { FolderGit2, ExternalLink } from "lucide-react";

const PROJECTS = [
  {
    title: "ReviveDesk",
    techStr: "Gemini 2.5 Flash, LangGraph, FastAPI, Supabase pgVector, RAG",
    description: "Built a multi-agent sales intelligence platform to identify and revive stalled B2B opportunities using CRM and meeting data. Developed AI agents for company research, sentiment analysis, objection detection, and automated sales recovery strategy generation. Implemented deal scoring using engagement history, sentiment trends, and business signals to prioritize recovery opportunities. Automated meeting intelligence and CRM documentation workflows, significantly reducing manual effort and improving data quality.",
    tags: ["Multi-Agent AI", "LangGraph", "RAG", "FastAPI", "Supabase", "Gemini"]
  },
  {
    title: "CodeInsight AI",
    techStr: "Gemini, LangGraph, FastAPI, RAG, Vector Search",
    description: "Developed an AI-powered repository intelligence system for codebase understanding, engineering onboarding, and software maintenance. Implemented semantic code search and repository-aware retrieval to assist PRD generation and feature analysis. Built RCA workflows that identify potentially impacted files, trace probable error sources, and recommend corrective code changes. Enabled faster developer productivity through AI-assisted code navigation, debugging support, and contextual engineering insights.",
    tags: ["Code Intelligence", "RAG", "LangGraph", "Semantic Search", "Gemini"]
  },
  {
    title: "VoiceScreenAI",
    techStr: "LangGraph, FastAPI, Supabase, Llama",
    description: "Engineered an AI-driven interview screening platform leveraging LLMs to autonomously conduct and evaluate technical and behavioral interviews. Architected multi-agent workflows using LangGraph to orchestrate question generation, response analysis and interview flow. Built RESTful APIs with FastAPI and Supabase (PostgreSQL) to manage interview sessions, scoring and persistent state. Implemented adaptive, role-aware scoring with relevance and fraud detection, producing automated and explainable hiring recommendations.",
    tags: ["Multi-Agent AI", "LangGraph", "FastAPI", "Supabase", "Llama"]
  },
  {
    title: "Medical AI Assistant",
    techStr: "LangChain, Pinecone, Google Generative AI, RAG, FastAPI",
    description: "Developed a medical chatbot using LangChain, Pinecone, and Google Generative AI embeddings with RAG architecture. Built FastAPI backend with modular APIs for PDF ingestion, query handling, and context-aware responses. Integrated Groq's LLaMA-3-70B-8192 for accurate medical insights with reduced hallucinations. Implemented PDF parsing, embedding generation, and vector search for precise information retrieval.",
    tags: ["RAG", "LangChain", "Pinecone", "Medical AI", "Groq"]
  },
  {
    title: "News Summarizer & TTS",
    techStr: "Groq Llama, gTTS, Sentiment Analysis",
    description: "Developed a full-stack Python application that extracts and summarizes real-time news articles. Integrated Groq Llama to generate context-aware summaries tailored to user-input keywords. Implemented multilingual support by translating English summaries to Hindi using translation APIs. Converted translated summaries into speech using gTTS, enabling audio playback for user engagement. Performed sentiment analysis and comparative insights across multiple articles to highlight tone.",
    tags: ["NLP", "LLM", "TTS", "Multilingual", "Sentiment Analysis"]
  }
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
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-card border border-card-border rounded-xl p-6 flex flex-col h-full hover:-translate-y-2 hover:border-primary/50 transition-all duration-300 group shadow-lg"
            >
              <div className="flex justify-between items-start mb-6">
                <FolderGit2 size={40} className="text-primary stroke-1" />
                <a href="#" className="text-muted-foreground hover:text-secondary transition-colors" data-testid={`link-project-${idx}`}>
                  <ExternalLink size={20} />
                </a>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              
              <p className="text-xs font-mono text-secondary mb-4">
                {project.techStr}
              </p>
              
              <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-border/50">
                {project.tags.map((tag, tagIdx) => (
                  <span key={tagIdx} className="text-xs font-mono text-muted-foreground">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
