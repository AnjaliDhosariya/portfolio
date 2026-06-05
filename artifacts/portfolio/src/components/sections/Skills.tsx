import { motion } from "framer-motion";
import { 
  SiPython, SiTensorflow, SiPytorch, SiLangchain, 
  SiFastapi, SiPostgresql, SiMongodb, SiGit, 
  SiGooglecloud
} from "react-icons/si";
import { Code2, BrainCircuit, Server, Database, Cloud, BarChart } from "lucide-react";

const SKILL_CATEGORIES = [
  {
    title: "Programming Languages",
    icon: <Code2 size={20} />,
    skills: [
      { name: "Python", icon: <SiPython /> },
      { name: "Java" },
      { name: "C" },
      { name: "C++" }
    ]
  },
  {
    title: "AI & Machine Learning",
    icon: <BrainCircuit size={20} />,
    skills: [
      { name: "Machine Learning" },
      { name: "Deep Learning" },
      { name: "NLP" },
      { name: "Transformers" },
      { name: "PyTorch", icon: <SiPytorch /> },
      { name: "TensorFlow", icon: <SiTensorflow /> },
      { name: "Scikit-Learn" }
    ]
  },
  {
    title: "Generative AI",
    icon: <BrainCircuit size={20} className="text-secondary" />,
    skills: [
      { name: "LLMs" },
      { name: "LangChain", icon: <SiLangchain /> },
      { name: "LangGraph" },
      { name: "RAG" },
      { name: "Multi-Agent Systems" },
      { name: "Prompt Engineering" },
      { name: "AI Agents" },
      { name: "Vector Databases" },
      { name: "Hugging Face" }
    ]
  },
  {
    title: "Backend Development",
    icon: <Server size={20} />,
    skills: [
      { name: "FastAPI", icon: <SiFastapi /> },
      { name: "REST APIs" },
      { name: "Express" }
    ]
  },
  {
    title: "Databases",
    icon: <Database size={20} />,
    skills: [
      { name: "PostgreSQL", icon: <SiPostgresql /> },
      { name: "MySQL" },
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "Supabase" },
      { name: "pgVector" }
    ]
  },
  {
    title: "Cloud & DevOps",
    icon: <Cloud size={20} />,
    skills: [
      { name: "GCP", icon: <SiGooglecloud /> },
      { name: "Azure", icon: <Cloud size={16} /> },
      { name: "Git/GitHub", icon: <SiGit /> },
      { name: "Google Apps Script" }
    ]
  },
  {
    title: "Data & Visualization",
    icon: <BarChart size={20} />,
    skills: [
      { name: "Pandas" },
      { name: "NumPy" },
      { name: "Power BI" },
      { name: "Tableau" },
      { name: "Looker Studio" },
      { name: "Matplotlib" },
      { name: "Seaborn" }
    ]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-mono font-bold mb-12 flex items-center gap-4">
            <span className="text-primary text-xl">02.</span> Technical Arsenal
            <div className="h-px bg-border flex-grow ml-4" />
          </h2>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {SKILL_CATEGORIES.map((category, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="bg-card/50 backdrop-blur-sm border border-card-border p-6 rounded-xl"
            >
              <div className="flex items-center gap-3 mb-4 text-white font-mono font-semibold">
                <span className="text-primary">{category.icon}</span>
                {category.title}
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, sIdx) => (
                  <div 
                    key={sIdx}
                    className="flex items-center gap-2 bg-background border border-border px-3 py-1.5 rounded-full text-sm text-muted-foreground hover:text-white hover:border-primary/50 transition-colors"
                  >
                    {skill.icon && <span className="text-primary">{skill.icon}</span>}
                    {skill.name}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
