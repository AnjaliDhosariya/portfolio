import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-mono font-bold mb-12 flex items-center gap-4">
            <span className="text-secondary text-xl">05.</span> Education
            <div className="h-px bg-border flex-grow ml-4" />
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="bg-card border border-border p-8 rounded-xl relative overflow-hidden group hover:border-primary/50 transition-colors"
          >
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity text-secondary">
              <GraduationCap size={80} />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">M.Tech Dual Degree</h3>
            <p className="text-primary font-mono mb-4">Artificial Intelligence and Data Science</p>
            <p className="text-muted-foreground mb-4">School of Data Science and Forecasting, DAVV, Indore</p>
            <div className="flex justify-between items-center border-t border-border pt-4 mt-auto">
              <span className="font-mono text-sm text-secondary">2021 – 2026</span>
              <span className="font-mono font-bold text-foreground bg-foreground/10 px-3 py-1 rounded-full">CGPA: 9.3</span>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-card border border-border p-8 rounded-xl relative overflow-hidden group hover:border-secondary/50 transition-colors"
          >
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity text-primary">
              <GraduationCap size={80} />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">12th Grade</h3>
            <p className="text-primary font-mono mb-4">Higher Secondary Education</p>
            <p className="text-muted-foreground mb-4">St. John Higher Secondary School, Rau</p>
            <div className="flex justify-between items-center border-t border-border pt-4 mt-auto">
              <span className="font-mono text-sm text-secondary">2020 – 2021</span>
              <span className="font-mono font-bold text-foreground bg-foreground/10 px-3 py-1 rounded-full">96%</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
