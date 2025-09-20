'use client'

import { useState } from 'react'
import { Navbar } from "@/components/Navbar"
import { ElegantBackground } from "@/components/ElegantBackground"
import { motion, AnimatePresence } from 'framer-motion'
import { Github, ExternalLink, Code, Database, Shield, Brain, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

const projects = [
  {
    id: 1,
    title: "LLM Privacy Shield",
    shortDesc: "Implementing a framework to detect sensitive data leakage in large language model outputs",
    fullDesc: "A comprehensive security framework designed to protect sensitive information in Large Language Model (LLM) outputs. This project implements advanced prompt injection detection algorithms and real-time redaction filters to prevent data leakage. The system uses machine learning techniques to identify potential security threats and automatically sanitize outputs before they reach end users. Features include pattern recognition for personal identifiable information (PII), custom rule-based filtering, and adaptive learning capabilities that improve detection accuracy over time.",
    tech: ["Python", "LLM", "Security", "NLP", "TensorFlow"],
    category: "Security",
    status: "In Progress",
    github: "#",
    demo: "#",
    image: "/api/placeholder/400/250"
  },
  {
    id: 2,
    title: "Asteroid RL Navigation",
    shortDesc: "Simulated spacecraft motion in GMAT with Q-learning agents to navigate asteroid fields",
    fullDesc: "An advanced reinforcement learning project that simulates spacecraft navigation through complex asteroid fields using Q-learning algorithms. Built using NASA's General Mission Analysis Tool (GMAT) for realistic orbital mechanics simulation. The project features a Flask-based web interface with real-time visualization using Matplotlib and D3.js. Data persistence is handled through MongoDB, allowing for analysis of learning patterns and navigation strategies. The system demonstrates autonomous decision-making in space exploration scenarios with applications for future Mars missions and asteroid mining operations.",
    tech: ["Python", "Reinforcement Learning", "Flask", "MongoDB", "GMAT", "Matplotlib"],
    category: "AI/ML",
    status: "Completed",
    github: "#",
    demo: "#",
    image: "/api/placeholder/400/250"
  },
  {
    id: 3,
    title: "Diabetes Prediction Bot",
    shortDesc: "Flask-based chatbot integrated with ML model to predict diabetes probability",
    fullDesc: "An intelligent healthcare chatbot that predicts diabetes probability using machine learning algorithms. The system employs Logistic Regression models trained on comprehensive medical datasets to provide accurate risk assessments. Built with Flask backend and deployed using Streamlit for an intuitive user interface. The chatbot engages users in natural conversations to collect health metrics and provides personalized recommendations. Features include data preprocessing with Pandas, model training with Scikit-learn, and integration with medical APIs for enhanced accuracy. The system maintains HIPAA compliance and includes data encryption for patient privacy.",
    tech: ["Flask", "Machine Learning", "Streamlit", "Scikit-learn", "Pandas", "Healthcare"],
    category: "Healthcare",
    status: "Completed",
    github: "#",
    demo: "#",
    image: "/api/placeholder/400/250"
  },
  {
    id: 4,
    title: "Network Security Monitor",
    shortDesc: "Real-time network traffic analysis and intrusion detection system",
    fullDesc: "A comprehensive network security monitoring solution that provides real-time analysis of network traffic patterns and automated intrusion detection. The system uses deep packet inspection techniques to identify potential security threats and anomalous behavior. Built with Python and Scapy for packet analysis, the solution includes machine learning algorithms for behavioral analysis and pattern recognition. Features include automated alert systems, detailed logging and reporting, integration with SIEM platforms, and custom rule creation for specific network environments.",
    tech: ["Python", "Scapy", "Network Security", "ML", "SIEM", "PostgreSQL"],
    category: "Security",
    status: "In Progress",
    github: "#",
    demo: "#",
    image: "/api/placeholder/400/250"
  },
  {
    id: 5,
    title: "Blockchain Voting System",
    shortDesc: "Secure and transparent voting platform using blockchain technology",
    fullDesc: "A revolutionary voting system that leverages blockchain technology to ensure election integrity and transparency. The platform uses smart contracts deployed on Ethereum to create immutable voting records while maintaining voter anonymity. Features include biometric authentication, real-time vote counting, and cryptographic verification of results. The system addresses common election security concerns including vote tampering, double voting, and result manipulation. Built with Solidity for smart contracts, React for the frontend, and Web3.js for blockchain interaction.",
    tech: ["Blockchain", "Solidity", "Ethereum", "React", "Web3.js", "Security"],
    category: "Blockchain",
    status: "Completed",
    github: "#",
    demo: "#",
    image: "/api/placeholder/400/250"
  },
  {
    id: 6,
    title: "AI-Powered Threat Detection",
    shortDesc: "Advanced threat detection using computer vision and machine learning",
    fullDesc: "An intelligent security system that combines computer vision and machine learning to detect and classify security threats in real-time. The system processes video feeds from multiple sources to identify suspicious activities, unauthorized access attempts, and potential security breaches. Uses YOLO object detection models for real-time analysis and custom-trained neural networks for threat classification. Features include facial recognition, behavior analysis, automated alert systems, and integration with existing security infrastructure.",
    tech: ["Computer Vision", "YOLO", "TensorFlow", "OpenCV", "Python", "Security"],
    category: "AI/Security",
    status: "In Progress",
    github: "#",
    demo: "#",
    image: "/api/placeholder/400/250"
  }
]

const categories = ["All", "Security", "AI/ML", "Healthcare", "Blockchain", "AI/Security"]

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null)
  const [filter, setFilter] = useState("All")

  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(project => project.category === filter)

  return (
    <div className="min-h-screen bg-background relative">
      <ElegantBackground variant="projects" />
      <Navbar />
      <main className="pt-20">
        {/* Header */}
        <section className="py-16 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 relative z-10">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-12"
            >
              <Link 
                href="/"
                className="inline-flex items-center text-primary hover:text-primary/80 mb-6 transition-colors"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back to Home
              </Link>
              <h1 className="text-5xl font-bold mb-6 text-gradient">Featured Projects</h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Explore my portfolio of cybersecurity solutions, machine learning innovations, 
                and cutting-edge technology projects that demonstrate expertise in securing digital environments.
              </p>
            </motion.div>

            {/* Filter Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap justify-center gap-4 mb-12"
            >
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setFilter(category)}
                  className={`px-6 py-3 rounded-full transition-all duration-300 ${
                    filter === category
                      ? 'bg-primary text-primary-foreground shadow-lg'
                      : 'bg-card hover:bg-card/80 text-foreground border border-border'
                  }`}
                >
                  {category}
                </button>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-16 relative z-10">
          <div className="container mx-auto px-6">
            <motion.div 
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              <AnimatePresence>
                {filteredProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ delay: index * 0.1 }}
                    className="card card-hover cursor-pointer group"
                    onClick={() => setSelectedProject(project.id)}
                  >
                    <div className="relative overflow-hidden rounded-lg mb-4">
                      <div className="w-full h-48 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                        <Code className="w-16 h-16 text-primary/60" />
                      </div>
                      <div className="absolute top-4 right-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          project.status === 'Completed' 
                            ? 'bg-green-500/20 text-green-400' 
                            : 'bg-yellow-500/20 text-yellow-400'
                        }`}>
                          {project.status}
                        </span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3 text-primary group-hover:text-primary/80 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 line-clamp-3">
                      {project.shortDesc}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.slice(0, 3).map((tech) => (
                        <span key={tech} className="px-2 py-1 bg-secondary/50 text-secondary-foreground rounded text-sm">
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 3 && (
                        <span className="px-2 py-1 bg-muted text-muted-foreground rounded text-sm">
                          +{project.tech.length - 3} more
                        </span>
                      )}
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </section>

        {/* Project Detail Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-card rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                {(() => {
                  const project = projects.find(p => p.id === selectedProject)
                  if (!project) return null
                  
                  return (
                    <div className="p-8">
                      <div className="flex items-start justify-between mb-6">
                        <div>
                          <h2 className="text-3xl font-bold text-primary mb-2">{project.title}</h2>
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                            project.status === 'Completed' 
                              ? 'bg-green-500/20 text-green-400' 
                              : 'bg-yellow-500/20 text-yellow-400'
                          }`}>
                            {project.status}
                          </span>
                        </div>
                        <button
                          onClick={() => setSelectedProject(null)}
                          className="text-muted-foreground hover:text-foreground transition-colors"
                        >
                          ✕
                        </button>
                      </div>

                      <div className="w-full h-64 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg mb-6 flex items-center justify-center">
                        <Code className="w-24 h-24 text-primary/60" />
                      </div>

                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {project.fullDesc}
                      </p>

                      <div className="mb-6">
                        <h4 className="text-lg font-semibold mb-3">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech) => (
                            <span key={tech} className="px-3 py-2 bg-secondary text-secondary-foreground rounded-lg">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )
                })()}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  )
}
