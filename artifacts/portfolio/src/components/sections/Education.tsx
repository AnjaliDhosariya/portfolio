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
            <span className="text-[#00F0FF] text-xl">05.</span> Education
            <div className="h-px bg-[#1F2937] flex-grow ml-4" />
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="bg-[#0A0A0A] border border-[#1F2937] p-8 rounded-xl relative overflow-hidden group hover:border-[#FF00A0]/50 transition-colors"
          >
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity text-[#00F0FF]">
              <GraduationCap size={80} />
            </div>
            <h3 className="text-xl font-bold text-[#F0F0F0] mb-2">M.Tech Dual Degree</h3>
            <p className="text-[#FF00A0] font-mono mb-4">Artificial Intelligence and Data Science</p>
            <p className="text-[#6B7280] mb-4">School of Data Science and Forecasting, DAVV, Indore</p>
            <div className="flex justify-between items-center border-t border-[#1F2937] pt-4 mt-auto">
              <span className="font-mono text-sm text-[#00F0FF]">2021 – 2026</span>
              <span className="font-mono font-bold text-[#F0F0F0] bg-[#F0F0F0]/10 px-3 py-1 rounded-full">CGPA: 9.3</span>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-[#0A0A0A] border border-[#1F2937] p-8 rounded-xl relative overflow-hidden group hover:border-[#00F0FF]/50 transition-colors"
          >
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity text-[#FF00A0]">
              <GraduationCap size={80} />
            </div>
            <h3 className="text-xl font-bold text-[#F0F0F0] mb-2">12th Grade</h3>
            <p className="text-[#FF00A0] font-mono mb-4">Higher Secondary Education</p>
            <p className="text-[#6B7280] mb-4">St. John Higher Secondary School, Rau</p>
            <div className="flex justify-between items-center border-t border-[#1F2937] pt-4 mt-auto">
              <span className="font-mono text-sm text-[#00F0FF]">2020 – 2021</span>
              <span className="font-mono font-bold text-[#F0F0F0] bg-[#F0F0F0]/10 px-3 py-1 rounded-full">96%</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
