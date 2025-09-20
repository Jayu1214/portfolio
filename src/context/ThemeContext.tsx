'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type ThemeMode = 'light' | 'dark' | 'cyber';

interface ThemeContextType {
  theme: ThemeMode;
  cyberMode: boolean;
  toggleTheme: () => void;
  toggleCyberMode: () => void;
  isTransitioning: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<ThemeMode>('dark');
  const [cyberMode, setCyberMode] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as ThemeMode;
    const savedCyberMode = localStorage.getItem('cyberMode') === 'true';
    
    if (savedTheme) setTheme(savedTheme);
    if (savedCyberMode) setCyberMode(savedCyberMode);
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', theme);
    localStorage.setItem('cyberMode', cyberMode.toString());

    // Update document classes
    const root = document.documentElement;
    root.classList.remove('light', 'dark', 'cyber');
    
    if (cyberMode) {
      root.classList.add('cyber');
    } else {
      root.classList.add(theme);
    }
  }, [theme, cyberMode]);

  const toggleTheme = () => {
    if (!cyberMode) {
      setTheme(prev => prev === 'light' ? 'dark' : 'light');
    }
  };

  const toggleCyberMode = () => {
    setIsTransitioning(true);
    
    setTimeout(() => {
      setCyberMode(prev => !prev);
      setIsTransitioning(false);
    }, 300);
  };

  return (
    <ThemeContext.Provider value={{
      theme,
      cyberMode,
      toggleTheme,
      toggleCyberMode,
      isTransitioning,
    }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
