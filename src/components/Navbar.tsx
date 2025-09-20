'use client';

import React from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';
import { 
  Home, 
  User, 
  FolderOpen, 
  GraduationCap, 
  Briefcase, 
  Brain, 
  Mail,
  Sun,
  Moon,
  Zap,
  Terminal
} from 'lucide-react';

const NavLink = ({ href, icon: Icon, children, external = false }: {
  href: string;
  icon: React.ElementType;
  children: React.ReactNode;
  external?: boolean;
}) => {
  const { cyberMode } = useTheme();
  
  const handleClick = (e: React.MouseEvent) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  };
  
  if (external) {
    return (
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="nav-link"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Icon size={18} />
        <span className="hidden md:block">{children}</span>
      </motion.a>
    );
  }

  if (href.startsWith('#')) {
    return (
      <motion.a
        href={href}
        onClick={handleClick}
        className="nav-link cursor-pointer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Icon size={18} />
        <span className="hidden md:block">{children}</span>
      </motion.a>
    );
  }

  return (
    <Link href={href}>
      <motion.div
        className="nav-link"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Icon size={18} />
        <span className="hidden md:block">{children}</span>
      </motion.div>
    </Link>
  );
};

const ThemeToggle = () => {
  const { theme, cyberMode, toggleTheme, toggleCyberMode, isTransitioning } = useTheme();

  return (
    <div className="flex items-center space-x-2">
      {/* Light/Dark Toggle */}
      {!cyberMode && (
        <motion.button
          onClick={toggleTheme}
          className={`
            p-2 rounded-md transition-all
            ${cyberMode 
              ? 'text-cyber-primary hover:text-cyber-accent' 
              : 'text-foreground hover:text-primary hover:bg-accent'
            }
          `}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Toggle light/dark theme"
        >
          <AnimatePresence mode="wait">
            {theme === 'light' ? (
              <motion.div
                key="moon"
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={{ duration: 0.2 }}
              >
                <Moon size={20} />
              </motion.div>
            ) : (
              <motion.div
                key="sun"
                initial={{ opacity: 0, rotate: 90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: -90 }}
                transition={{ duration: 0.2 }}
              >
                <Sun size={20} />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      )}

      {/* Cyber Mode Toggle */}
      <motion.button
        onClick={toggleCyberMode}
        className={`
          p-2 rounded-md transition-all relative
          ${cyberMode 
            ? 'text-cyber-accent hover:text-cyber-secondary shadow-cyber-glow' 
            : 'text-foreground hover:text-primary hover:bg-accent'
          }
        `}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        disabled={isTransitioning}
        aria-label="Toggle cyber mode"
      >
        <motion.div
          animate={cyberMode ? { rotate: 360 } : { rotate: 0 }}
          transition={{ duration: 0.5 }}
        >
          {cyberMode ? <Terminal size={20} /> : <Zap size={20} />}
        </motion.div>
        
        {cyberMode && (
          <motion.div
            className="absolute inset-0 rounded-md border border-cyber-primary"
            animate={{ 
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        )}
      </motion.button>
    </div>
  );
};

export const Navbar = () => {
  const { cyberMode, isTransitioning } = useTheme();

  const navVariants = {
    professional: {
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      backdropFilter: 'blur(10px)',
      borderColor: 'rgba(255, 255, 255, 0.2)',
    },
    cyber: {
      backgroundColor: 'rgba(0, 255, 65, 0.05)',
      backdropFilter: 'blur(10px)',
      borderColor: 'rgba(0, 255, 65, 0.2)',
      boxShadow: '0 4px 20px rgba(0, 255, 65, 0.2)',
    }
  };

  return (
    <motion.nav
      initial="professional"
      animate={cyberMode ? "cyber" : "professional"}
      variants={navVariants}
      transition={{ duration: 0.5 }}
      className={`
        fixed top-0 left-0 right-0 z-50 glass border-b
        ${cyberMode ? 'nav-cyber' : 'nav-professional'}
      `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
          >
            <Link href="/">
              <motion.h1 
                className={`
                  text-xl font-bold tracking-tight
                  ${cyberMode 
                    ? 'text-cyber-primary font-cyber glitch' 
                    : 'text-foreground'
                  }
                `}
                data-text="JAY.dev"
              >
                {cyberMode ? 'JAY.dev' : 'Jay'}
              </motion.h1>
            </Link>
          </motion.div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-1">
            <NavLink href="/" icon={Home}>Home</NavLink>
            <NavLink href="#about" icon={User}>About</NavLink>
            <NavLink href="#projects" icon={FolderOpen}>Projects</NavLink>
            <NavLink href="#experience" icon={Briefcase}>Experience</NavLink>
            <NavLink href="#education" icon={GraduationCap}>Education</NavLink>
            <NavLink href="#contact" icon={Mail}>Contact</NavLink>
          </div>

          {/* Theme Toggle */}
          <ThemeToggle />

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <motion.button
              className={`
                p-2 rounded-md
                ${cyberMode 
                  ? 'text-cyber-primary hover:text-cyber-accent' 
                  : 'text-foreground hover:text-primary'
                }
              `}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Screen flicker effect during mode transition */}
      <AnimatePresence>
        {isTransitioning && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0, 1, 0] }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, times: [0, 0.2, 0.4, 0.8, 1] }}
            className="fixed inset-0 bg-white dark:bg-black cyber:bg-cyber-primary pointer-events-none z-[60]"
          />
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
