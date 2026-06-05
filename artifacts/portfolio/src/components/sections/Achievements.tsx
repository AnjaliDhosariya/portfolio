import { motion } from "framer-motion";
import { Award, Medal } from "lucide-react";

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 relative bg-card/20">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-mono font-bold mb-12 flex items-center gap-4">
            <span className="text-primary text-xl">06.</span> Awards & Certifications
            <div className="h-px bg-border flex-grow ml-4" />
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Award className="text-secondary" /> Achievements
            </h3>
            <ul className="space-y-4">
              {[
                "Qualified GATE 2025 (Data Science and Artificial Intelligence) with AIR 3219",
                "Awarded Mukhyamantri Medhavi Vidyarthi Yojana Scholarship by the Government of MP for outstanding performance in Class XII",
                "Google Cloud Career Practitioner Program Participant",
                "Google Cloud Study Jams 2023 Participant"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 bg-card border border-card-border p-4 rounded-lg">
                  <span className="text-primary mt-1">▹</span>
                  <span className="text-muted-foreground leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Medal className="text-primary" /> Certifications
            </h3>
            <ul className="space-y-4">
              {[
                { title: "SQL for Data Science" },
                { title: "Python for Data Science" },
                { title: "Foundations: Data, Data, Everywhere", issuer: "Google" }
              ].map((cert, idx) => (
                <li key={idx} className="flex items-center gap-4 bg-card border border-card-border p-4 rounded-lg hover:border-primary/50 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Medal size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold">{cert.title}</h4>
                    {cert.issuer && <p className="text-sm font-mono text-muted-foreground">{cert.issuer}</p>}
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
