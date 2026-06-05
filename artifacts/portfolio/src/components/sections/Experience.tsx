import { motion } from "framer-motion";

const EXPERIENCES = [
  {
    role: "Software Development Engineer Intern",
    company: "Zaggle Prepain Ocean Services Ltd",
    location: "Hyderabad",
    period: "May 2026 – Present",
    points: [
      "Developing and maintaining enterprise integrations between internal and external systems, enabling automated data exchange and business workflows.",
      "Building backend services and APIs for integration solutions, including authentication, data transformation, validation, and error handling.",
      "Contributing to AI-powered automation initiatives by integrating LLM-based capabilities into existing business workflows and internal tools.",
      "Collaborating with product, engineering, and business teams to design, test, and deploy scalable software solutions in production environments."
    ]
  },
  {
    role: "AI Engineer Intern",
    company: "DICE Enterprises Pvt Ltd",
    location: "Pune",
    period: "December 2025 – April 2026",
    points: [
      "Developed AI-powered applications including ReviveDesk (multi-agent sales recovery platform) and a repository intelligence system for codebase analysis and PRD generation.",
      "Built RAG pipelines, AI agents, semantic search workflows, and backend APIs using Gemini 2.5 Flash, LangGraph, FastAPI, and Supabase pgVector.",
      "Implemented sentiment analysis, objection detection, root-cause analysis, and code intelligence capabilities to support business and engineering teams.",
      "Automated CRM documentation and meeting intelligence workflows, reducing manual effort by 90% and improving CRM data completeness from 62% to 97%."
    ]
  },
  {
    role: "Data Analyst Intern",
    company: "Sparsh Magic LLP",
    location: "Indore",
    period: "July 2023 – August 2023",
    points: [
      "Automated data workflows and reporting using Google Apps Script, reducing manual effort.",
      "Designed and developed interactive dashboards in Power BI & Looker Studio to track KPIs.",
      "Conducted data cleaning and transformation using Pandas.",
      "Delivered data-driven insights to leadership, supporting business decisions that improved operational efficiency."
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-mono font-bold mb-16 flex items-center gap-4">
            <span className="text-primary text-xl">03.</span> Where I've Built
            <div className="h-px bg-border flex-grow ml-4" />
          </h2>
        </motion.div>

        <div className="relative border-l border-border ml-4 md:ml-0 space-y-12">
          {EXPERIENCES.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-8 md:pl-12"
            >
              <div className="absolute left-[-5px] top-1 w-2.5 h-2.5 rounded-full bg-primary ring-4 ring-background" />
              
              <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-2 gap-2">
                <h3 className="text-xl font-bold text-white">
                  {exp.role} <span className="text-primary">@ {exp.company}</span>
                </h3>
                <span className="text-sm font-mono text-muted-foreground whitespace-nowrap">
                  {exp.period}
                </span>
              </div>
              
              <div className="text-sm text-secondary mb-4 font-mono">{exp.location}</div>
              
              <ul className="space-y-3">
                {exp.points.map((point, pIdx) => (
                  <li key={pIdx} className="text-muted-foreground flex items-start gap-3">
                    <span className="text-primary mt-1.5 text-xs">▹</span>
                    <span className="leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
