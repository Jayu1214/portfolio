'use client';

import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';
import { 
  Download, 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink,
  Code,
  Zap,
  Terminal,
  Play,
  Cpu,
  Database,
  Globe
} from 'lucide-react';

const TypewriterText = ({ 
  texts, 
  speed = 100, 
  deleteSpeed = 50, 
  delayBetween = 2000 
}: {
  texts: string[];
  speed?: number;
  deleteSpeed?: number;
  delayBetween?: number;
}) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[currentIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentText.length) {
          setDisplayText(currentText.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), delayBetween);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }
      }
    }, isDeleting ? deleteSpeed : speed);

    return () => clearTimeout(timeout);
  }, [displayText, currentIndex, isDeleting, texts, speed, deleteSpeed, delayBetween]);

  return (
    <span className="inline-block">
      {displayText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
        className="inline-block w-1 h-8 bg-current ml-1"
      />
    </span>
  );
};

const InteractiveTerminal = () => {
  const [lines, setLines] = useState([
    { type: 'command', content: '$ whoami' },
    { type: 'output', content: 'jay-trivedi@cybersec:~$ B.Tech CS Student | Cybersecurity Specialist' },
    { type: 'command', content: '$ ls -la skills/' },
    { type: 'output', content: 'Python  Flask  ML  Cybersecurity  Wireshark  MongoDB' },
    { type: 'command', content: '$ cat current_projects.txt' },
    { type: 'output', content: 'LLM Privacy Shield | Asteroid RL Navigation | Security Audits' },
    { type: 'command', content: '$ cat location.txt' },
    { type: 'output', content: 'Pune, India | Symbiosis Institute of Technology' },
    { type: 'command', content: '$ git status' },
    { type: 'output', content: 'On branch cybersec-expert - Ready to contribute!' },
  ]);
  
  const [currentLine, setCurrentLine] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    if (currentLine < lines.length && isTyping) {
      const timer = setTimeout(() => {
        setCurrentLine(prev => prev + 1);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [currentLine, lines.length, isTyping]);

  const restartAnimation = () => {
    setCurrentLine(0);
    setIsTyping(true);
  };

  return (
    <motion.div
      className="terminal glass"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1 }}
    >
      <div className="terminal-header">
        <div className="terminal-dot red"></div>
        <div className="terminal-dot yellow"></div>
        <div className="terminal-dot green"></div>
        <span className="text-sm font-mono text-gray-400 ml-4">jay-trivedi@cybersec: ~</span>
        <motion.button
          onClick={restartAnimation}
          className="ml-auto p-1 rounded text-gray-400 hover:text-white transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Play size={14} />
        </motion.button>
      </div>
      <div className="terminal-content">
        {lines.slice(0, currentLine).map((line, index) => (
          <motion.div
            key={index}
            className="terminal-line"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.3 }}
          >
            <span className={line.type === 'command' ? 'terminal-prompt' : 'text-green-400'}>
              {line.content}
            </span>
          </motion.div>
        ))}
        {currentLine < lines.length && (
          <span className="terminal-cursor"></span>
        )}
      </div>
    </motion.div>
  );
};

const FloatingElements = () => {
  const elements = [
    { icon: Code, delay: 0, position: { top: '10%', left: '10%' } },
    { icon: Database, delay: 0.5, position: { top: '20%', right: '15%' } },
    { icon: Cpu, delay: 1, position: { bottom: '30%', left: '15%' } },
    { icon: Globe, delay: 1.5, position: { bottom: '20%', right: '10%' } },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {elements.map((Element, index) => (
        <motion.div
          key={index}
          className="absolute text-primary/20"
          style={Element.position}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, -10, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 6,
            delay: Element.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Element.icon size={48} />
        </motion.div>
      ))}
    </div>
  );
};

const SocialLink = ({ 
  href, 
  icon: Icon, 
  label,
  external = true 
}: {
  href: string;
  icon: React.ElementType;
  label: string;
  external?: boolean;
}) => {
  return (
    <motion.a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="p-4 rounded-full glass transition-all duration-300 hover:scale-110 group"
      whileHover={{ scale: 1.15, rotate: 5 }}
      whileTap={{ scale: 0.95 }}
      aria-label={label}
    >
      <Icon size={24} className="text-foreground group-hover:text-primary transition-colors" />
    </motion.a>
  );
};

const ParticleField = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
    }> = [];

    // Create particles
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.1,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, i) => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Draw particle
        ctx.fillStyle = `rgba(99, 102, 241, ${particle.opacity})`;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();

        // Draw connections
        particles.slice(i + 1).forEach(otherParticle => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.strokeStyle = `rgba(99, 102, 241, ${0.1 * (1 - distance / 100)})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ zIndex: -1 }}
    />
  );
};

export const Hero = () => {
  const { theme, cyberMode } = useTheme();

  const professionalRoles = [
    "Cybersecurity Specialist",
    "B.Tech CS Student", 
    "ML Engineer",
    "Security Researcher",
    "Backend Developer"
  ];

  const cyberRoles = [
    "Security_Analyst.exe",
    "ML_Guardian.py", 
    "Penetration_Tester.sh",
    "Privacy_Shield.ai",
    "Network_Defender.dll"
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 10
      }
    },
  };

  return (
    <section className={`
      min-h-screen flex items-center justify-center relative overflow-hidden
      ${cyberMode ? 'hero-bg' : 'hero-bg'}
    `}>
      {/* Particle Field Background */}
      {!cyberMode && <ParticleField />}
      
      {/* Floating Elements */}
      <FloatingElements />

      <div className="container mx-auto px-6 py-20 relative z-10">
        <motion.div
          className="max-w-6xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Main Heading */}
          <motion.div variants={itemVariants} className="mb-8">
            <motion.h1 
              className={`
                text-6xl md:text-8xl font-bold mb-6 leading-tight
                ${cyberMode ? 'font-orbitron glitch' : 'font-inter'}
              `}
              data-text={cyberMode ? "JAY_TRIVEDI.EXE" : "Jay Trivedi"}
            >
              <span className="text-gradient">
                {cyberMode ? "JAY_TRIVEDI.EXE" : "Jay Trivedi"}
              </span>
            </motion.h1>
            
            <motion.div 
              className={`
                text-2xl md:text-4xl mb-8 h-16 flex items-center justify-center
                ${cyberMode ? 'font-mono text-accent' : 'text-muted-foreground'}
              `}
            >
              <TypewriterText 
                texts={cyberMode ? cyberRoles : professionalRoles}
                speed={100}
                deleteSpeed={50}
                delayBetween={2000}
              />
            </motion.div>
          </motion.div>

          {/* Description */}
          <motion.p 
            variants={itemVariants}
            className={`
              text-xl md:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed
              ${cyberMode ? 'text-muted-foreground font-mono' : 'text-muted-foreground'}
            `}
          >
            {cyberMode 
              ? ">>> Initializing security protocols... Deploying ML defense systems... Ready to secure the digital frontier <<<"
              : "Motivated B.Tech CS student specializing in cybersecurity and machine learning. Passionate about building secure, data-driven systems and contributing to innovative technology teams."
            }
          </motion.p>

          {/* Action Buttons */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          >
            <motion.a
              href="#projects"
              className="btn-primary animate-pulse-glow"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Zap size={20} />
              {cyberMode ? "EXECUTE PORTFOLIO" : "View My Work"}
            </motion.a>
            
            <motion.a
              href="/Resume (1).pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              download="Jay_Trivedi_Resume.pdf"
            >
              <Download size={20} />
              {cyberMode ? "DOWNLOAD.CV" : "Download Resume"}
            </motion.a>
          </motion.div>

          {/* Interactive Terminal */}
          <motion.div 
            variants={itemVariants}
            className="mb-16 max-w-2xl mx-auto"
          >
            <InteractiveTerminal />
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className={`
          w-6 h-10 border-2 rounded-full flex justify-center
          ${cyberMode ? 'border-primary' : 'border-muted-foreground'}
        `}>
          <motion.div
            className={`
              w-1 h-3 rounded-full mt-2
              ${cyberMode ? 'bg-primary' : 'bg-muted-foreground'}
            `}
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};
