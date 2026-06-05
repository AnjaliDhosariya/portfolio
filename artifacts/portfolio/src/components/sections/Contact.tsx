import { motion } from "framer-motion";
import { Mail, Github, Linkedin, MapPin, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-32 relative text-center">
      <div className="container mx-auto px-6 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-primary font-mono mb-4">07. What's Next?</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h2>
          
          <p className="text-muted-foreground text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
            I'm currently looking for full-time roles and freelancing opportunities in AI/ML, Generative AI, and Backend Development. Whether you have a question or just want to say hi, my inbox is always open.
          </p>

          <a
            href="mailto:anjalidhosariya1126@gmail.com"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-primary text-primary font-mono font-bold tracking-wide rounded hover:bg-primary/10 transition-colors mb-16"
            data-testid="button-contact-email"
          >
            <Mail size={20} />
            Say Hello
          </a>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-muted-foreground mb-16">
            <div className="flex items-center gap-2">
              <MapPin size={18} className="text-secondary" />
              <span>Hyderabad, India</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={18} className="text-secondary" />
              <span>+91 9111660332</span>
            </div>
          </div>

          <div className="flex justify-center gap-6 mb-12">
            <a href="https://github.com/AnjaliDhosariya" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-white transition-colors p-3 bg-card border border-card-border rounded-full hover:border-primary/50" data-testid="link-footer-github">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/anjalidhosariya" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors p-3 bg-card border border-card-border rounded-full hover:border-primary/50" data-testid="link-footer-linkedin">
              <Linkedin size={24} />
            </a>
            <a href="mailto:anjalidhosariya1126@gmail.com" className="text-muted-foreground hover:text-secondary transition-colors p-3 bg-card border border-card-border rounded-full hover:border-secondary/50" data-testid="link-footer-email">
              <Mail size={24} />
            </a>
          </div>

          <p className="font-mono text-sm text-muted-foreground/60">
            Designed & Built by Anjali Dhosariya
          </p>
        </motion.div>
      </div>
    </section>
  );
}
