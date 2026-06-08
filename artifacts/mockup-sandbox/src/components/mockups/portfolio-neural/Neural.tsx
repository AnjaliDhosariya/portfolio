import React, { useEffect, useRef, useState } from 'react';
import { Github, Linkedin, Mail, ArrowRight, FileText } from 'lucide-react';

export function Neural() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  // Typing Effect
  const [typedText, setTypedText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const roles = [
    "AI/ML Engineer",
    "Generative AI Builder",
    "Python Developer"
  ];

  useEffect(() => {
    const typingSpeed = isDeleting ? 50 : 100;
    const currentRole = roles[roleIndex];
    
    let timer = setTimeout(() => {
      if (!isDeleting && typedText === currentRole) {
        timer = setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && typedText === '') {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      } else {
        setTypedText(currentRole.substring(0, typedText.length + (isDeleting ? -1 : 1)));
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [typedText, isDeleting, roleIndex]);

  // Canvas Particle Network
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let particles: Particle[] = [];
    let animationFrameId: number;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      baseRadius: number;
      phase: number;
      
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.baseRadius = Math.random() * 1.5 + 0.5;
        this.radius = this.baseRadius;
        this.phase = Math.random() * Math.PI * 2;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;

        // Pulse effect
        this.phase += 0.02;
        this.radius = this.baseRadius + Math.sin(this.phase) * 0.5;
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(249, 115, 22, ${0.4 + Math.sin(this.phase) * 0.2})`; // Amber pulse
        ctx.fill();
        
        // Glow
        ctx.shadowBlur = 10;
        ctx.shadowColor = '#F97316';
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    }

    const initParticles = () => {
      const numParticles = Math.min(Math.floor((window.innerWidth * window.innerHeight) / 15000), 80);
      particles = [];
      for (let i = 0; i < numParticles; i++) {
        particles.push(new Particle());
      }
    };

    const drawLines = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            const opacity = 1 - distance / 150;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            // Mix of amber and teal for the network lines
            const gradient = ctx.createLinearGradient(particles[i].x, particles[i].y, particles[j].x, particles[j].y);
            gradient.addColorStop(0, `rgba(249, 115, 22, ${opacity * 0.2})`);
            gradient.addColorStop(1, `rgba(20, 184, 166, ${opacity * 0.2})`);
            ctx.strokeStyle = gradient;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(p => p.update());
      drawLines();
      particles.forEach(p => p.draw());
      
      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resize);
    resize();
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-[#0D1117] text-[#E6EDF3] font-sans overflow-hidden flex flex-col items-center justify-center">
      {/* Background Canvas */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 z-0 pointer-events-none opacity-80" 
      />

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-up {
          animation: fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }

        .shimmer-btn {
          background: linear-gradient(90deg, #F97316, #ea580c, #F97316);
          background-size: 200% 100%;
          transition: all 0.3s ease;
        }
        .shimmer-btn:hover {
          background-position: 100% 0;
          box-shadow: 0 0 20px rgba(249, 115, 22, 0.4);
        }
      `}</style>

      {/* Main Content */}
      <div className="z-10 w-full max-w-4xl px-6 py-20 flex flex-col items-center text-center">
        
        {/* Label */}
        <div className="animate-fade-up flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-[#161B22] border border-[#30363D]">
          <div className="w-2 h-2 rounded-full bg-[#F97316] animate-pulse"></div>
          <span className="font-mono text-sm text-[#F97316] tracking-wider uppercase">
            AI/ML Engineer
          </span>
        </div>

        {/* Heading */}
        <h1 
          className="animate-fade-up text-5xl md:text-7xl font-bold tracking-tight mb-6 text-transparent bg-clip-text bg-gradient-to-br from-[#E6EDF3] to-[#8B949E]"
          style={{ animationDelay: '0.1s' }}
        >
          Anjali Dhosariya
        </h1>

        {/* Subtitle with Typing Effect */}
        <div 
          className="animate-fade-up h-16 md:h-12 mb-8 text-lg md:text-xl text-[#8B949E] max-w-2xl font-light"
          style={{ animationDelay: '0.2s' }}
        >
          Building intelligent, multi-agent systems & real-world AI applications as a<br className="hidden md:block" />
          <span className="text-[#14B8A6] font-mono mt-2 inline-block">
            {typedText}<span className="animate-pulse border-r-2 border-[#14B8A6] ml-1 h-5 inline-block align-middle"></span>
          </span>
        </div>

        {/* Stats Row */}
        <div 
          className="animate-fade-up flex flex-wrap justify-center gap-4 md:gap-8 mb-12"
          style={{ animationDelay: '0.3s' }}
        >
          {[
            { label: 'Internships', value: '3' },
            { label: 'Projects', value: '5+' },
            { label: 'CGPA', value: '9.3' }
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-center px-6 py-4 bg-[#161B22]/50 backdrop-blur-sm rounded-xl border border-[#30363D]/50 transition-colors hover:border-[#14B8A6]/50">
              <span className="font-mono text-2xl font-bold text-[#E6EDF3]">{stat.value}</span>
              <span className="text-sm text-[#8B949E]">{stat.label}</span>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div 
          className="animate-fade-up flex flex-col sm:flex-row gap-4 mb-16 w-full sm:w-auto"
          style={{ animationDelay: '0.4s' }}
        >
          <button className="shimmer-btn flex items-center justify-center gap-2 px-8 py-4 rounded-lg text-white font-medium shadow-lg shadow-[#F97316]/20">
            View Projects
            <ArrowRight size={18} />
          </button>
          
          <button className="flex items-center justify-center gap-2 px-8 py-4 rounded-lg text-[#E6EDF3] font-medium border border-[#30363D] hover:bg-[#161B22] hover:border-[#8B949E] transition-all">
            <FileText size={18} />
            Resume
          </button>
        </div>

        {/* Social Icons */}
        <div 
          className="animate-fade-up flex gap-6"
          style={{ animationDelay: '0.5s' }}
        >
          {[
            { Icon: Github, href: '#', delay: '0s' },
            { Icon: Linkedin, href: '#', delay: '0.2s' },
            { Icon: Mail, href: '#', delay: '0.4s' }
          ].map((social, i) => (
            <a 
              key={i} 
              href={social.href}
              className="animate-float p-3 rounded-full bg-[#161B22] border border-[#30363D] text-[#8B949E] hover:text-[#14B8A6] hover:border-[#14B8A6]/50 hover:shadow-[0_0_15px_rgba(20,184,166,0.2)] transition-all"
              style={{ animationDelay: social.delay }}
            >
              <social.Icon size={22} />
            </a>
          ))}
        </div>

      </div>
    </div>
  );
}
