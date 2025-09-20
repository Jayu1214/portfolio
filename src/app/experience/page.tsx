'use client'

import { useState, useRef } from 'react'
import { Navbar } from "@/components/Navbar"
import { ElegantBackground } from "@/components/ElegantBackground"
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { ArrowLeft, Calendar, MapPin, ExternalLink, Award, Code, Shield, Brain } from 'lucide-react'
import Link from 'next/link'

const experiences = [
  {
    id: 1,
    title: "Cybersecurity Intern",
    company: "ONGC (Oil and Natural Gas Corporation)",
    location: "On-site",
    period: "2024 - Present",
    type: "Internship",
    status: "Current",
    description: "Conducting internal security audits and documenting protocols. Supporting endpoint hardening and vulnerability assessments while gaining hands-on experience with enterprise security systems.",
    achievements: [
      "Conducted comprehensive security audits across 15+ enterprise systems",
      "Implemented endpoint hardening protocols improving security posture by 40%",
      "Documented security procedures for compliance with industry standards",
      "Collaborated with senior engineers on vulnerability assessment projects"
    ],
    skills: ["Network Security", "Vulnerability Assessment", "Security Auditing", "Enterprise Systems", "Compliance"],
    color: "from-red-500 to-pink-500",
    icon: Shield
  },
  {
    id: 2,
    title: "AI Intern",
    company: "Infosys Springboard",
    location: "Virtual",
    period: "2024",
    type: "Internship",
    status: "Completed",
    description: "Built ML classification models using Scikit-learn. Applied model tuning, accuracy metrics, and data preprocessing while developing expertise in machine learning pipelines.",
    achievements: [
      "Developed 5+ machine learning classification models with 85%+ accuracy",
      "Implemented advanced data preprocessing techniques reducing noise by 30%",
      "Applied hyperparameter tuning improving model performance by 25%",
      "Created comprehensive documentation for ML pipeline deployment"
    ],
    skills: ["Machine Learning", "Scikit-learn", "Data Preprocessing", "Model Tuning", "Python"],
    color: "from-blue-500 to-cyan-500",
    icon: Brain
  },
  {
    id: 3,
    title: "Network Security Intern",
    company: "Cisco Networking Academy",
    location: "Virtual",
    period: "2023",
    type: "Internship",
    status: "Completed",
    description: "Simulated network setups using Packet Tracer. Gained exposure to Wireshark analysis and secure routing techniques while learning network security best practices.",
    achievements: [
      "Designed and simulated 20+ complex network topologies",
      "Mastered Wireshark for advanced packet analysis and troubleshooting",
      "Implemented secure routing protocols in enterprise environments",
      "Earned Cisco Networking Essentials certification"
    ],
    skills: ["Packet Tracer", "Wireshark", "Network Design", "Routing Protocols", "Network Security"],
    color: "from-green-500 to-emerald-500",
    icon: Code
  }
]

export default function ExperiencePage() {
  const [selectedExperience, setSelectedExperience] = useState<number | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  return (
    <div className="min-h-screen bg-background relative" ref={containerRef}>
      <ElegantBackground variant="experience" />
      <Navbar />
      <main className="pt-20 relative z-10">
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
              <h1 className="text-5xl font-bold mb-6 text-gradient">Professional Journey</h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Explore my professional experience in cybersecurity and AI, from hands-on security audits 
                to machine learning innovations across leading organizations.
              </p>
            </motion.div>
          </div>
        </section>

        {/* 3D Timeline */}
        <section className="py-20 relative overflow-hidden z-10">
          <div className="container mx-auto px-6">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-primary/20 rounded-full"
                  initial={{
                    x: Math.random() * window.innerWidth,
                    y: Math.random() * window.innerHeight,
                  }}
                  animate={{
                    x: Math.random() * window.innerWidth,
                    y: Math.random() * window.innerHeight,
                  }}
                  transition={{
                    duration: Math.random() * 10 + 10,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                />
              ))}
            </div>

            {/* Central Timeline */}
            <div className="relative">
              {/* Main Timeline Line */}
              <motion.div 
                className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-primary/50 via-secondary/50 to-accent/50 origin-top"
                style={{
                  scaleY: useTransform(scrollYProgress, [0, 1], [0, 1]),
                  height: `${experiences.length * 400}px`
                }}
              />

              {/* Experience Cards */}
              <div className="space-y-32">
                {experiences.map((experience, index) => {
                  const isEven = index % 2 === 0
                  const IconComponent = experience.icon
                  
                  return (
                    <motion.div
                      key={experience.id}
                      initial={{ opacity: 0, x: isEven ? -100 : 100 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ delay: index * 0.2, duration: 0.8 }}
                      className={`relative flex items-center ${isEven ? 'justify-start' : 'justify-end'}`}
                    >
                      {/* Timeline Node */}
                      <motion.div 
                        className="absolute left-1/2 transform -translate-x-1/2 z-10"
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${experience.color} p-0.5`}>
                          <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                            <IconComponent className="w-8 h-8 text-primary" />
                          </div>
                        </div>
                      </motion.div>

                      {/* Experience Card */}
                      <motion.div
                        className={`w-[45%] ${isEven ? 'mr-auto pr-16' : 'ml-auto pl-16'}`}
                        whileHover={{ scale: 1.02, rotateY: isEven ? 5 : -5 }}
                        style={{ transformStyle: 'preserve-3d' }}
                        onClick={() => setSelectedExperience(experience.id)}
                      >
                        <div className="card card-hover cursor-pointer group overflow-hidden">
                          {/* Status Badge */}
                          <div className="absolute top-4 right-4 z-10">
                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                              experience.status === 'Current' 
                                ? 'bg-green-500/20 text-green-400 animate-pulse' 
                                : 'bg-blue-500/20 text-blue-400'
                            }`}>
                              {experience.status}
                            </span>
                          </div>

                          {/* Gradient Background */}
                          <div className={`absolute inset-0 bg-gradient-to-br ${experience.color} opacity-5 group-hover:opacity-10 transition-opacity`} />
                          
                          <div className="relative z-10 p-6">
                            <div className="flex items-start gap-4 mb-4">
                              <div className={`p-3 rounded-lg bg-gradient-to-r ${experience.color} bg-opacity-20`}>
                                <IconComponent className="w-6 h-6 text-primary" />
                              </div>
                              <div className="flex-1">
                                <h3 className="text-xl font-bold text-primary mb-1">{experience.title}</h3>
                                <p className="text-lg font-semibold text-foreground">{experience.company}</p>
                                <div className="flex items-center gap-4 mt-2 text-muted-foreground">
                                  <span className="flex items-center gap-1">
                                    <Calendar className="w-4 h-4" />
                                    {experience.period}
                                  </span>
                                  <span className="flex items-center gap-1">
                                    <MapPin className="w-4 h-4" />
                                    {experience.location}
                                  </span>
                                </div>
                              </div>
                            </div>

                            <p className="text-muted-foreground mb-4 line-clamp-3">
                              {experience.description}
                            </p>

                            <div className="flex flex-wrap gap-2">
                              {experience.skills.slice(0, 3).map((skill) => (
                                <span key={skill} className="px-2 py-1 bg-secondary/50 text-secondary-foreground rounded text-sm">
                                  {skill}
                                </span>
                              ))}
                              {experience.skills.length > 3 && (
                                <span className="px-2 py-1 bg-muted text-muted-foreground rounded text-sm">
                                  +{experience.skills.length - 3} more
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                      </motion.div>

                      {/* Floating Animation Elements */}
                      <div className={`absolute ${isEven ? 'right-1/2 mr-8' : 'left-1/2 ml-8'} top-1/2 transform -translate-y-1/2`}>
                        {[...Array(3)].map((_, i) => (
                          <motion.div
                            key={i}
                            className={`w-2 h-2 bg-gradient-to-r ${experience.color} rounded-full absolute`}
                            animate={{
                              y: [-10, 10, -10],
                              x: [-5, 5, -5],
                              opacity: [0.3, 0.8, 0.3],
                            }}
                            transition={{
                              duration: 2 + i * 0.5,
                              repeat: Infinity,
                              delay: i * 0.3,
                            }}
                            style={{
                              top: `${i * 20}px`,
                              [isEven ? 'right' : 'left']: `${i * 10}px`,
                            }}
                          />
                        ))}
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Experience Detail Modal */}
        <AnimatePresence>
          {selectedExperience && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
              onClick={() => setSelectedExperience(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0, rotateY: 90 }}
                animate={{ scale: 1, opacity: 1, rotateY: 0 }}
                exit={{ scale: 0.9, opacity: 0, rotateY: -90 }}
                className="bg-card rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                style={{ transformStyle: 'preserve-3d' }}
                onClick={(e) => e.stopPropagation()}
              >
                {(() => {
                  const experience = experiences.find(e => e.id === selectedExperience)
                  if (!experience) return null
                  
                  const IconComponent = experience.icon
                  
                  return (
                    <div className="p-8">
                      <div className="flex items-start justify-between mb-6">
                        <div className="flex items-start gap-4">
                          <div className={`p-4 rounded-xl bg-gradient-to-r ${experience.color} bg-opacity-20`}>
                            <IconComponent className="w-8 h-8 text-primary" />
                          </div>
                          <div>
                            <h2 className="text-3xl font-bold text-primary mb-2">{experience.title}</h2>
                            <p className="text-xl font-semibold text-foreground">{experience.company}</p>
                            <div className="flex items-center gap-4 mt-2 text-muted-foreground">
                              <span className="flex items-center gap-1">
                                <Calendar className="w-5 h-5" />
                                {experience.period}
                              </span>
                              <span className="flex items-center gap-1">
                                <MapPin className="w-5 h-5" />
                                {experience.location}
                              </span>
                              <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                                experience.status === 'Current' 
                                  ? 'bg-green-500/20 text-green-400' 
                                  : 'bg-blue-500/20 text-blue-400'
                              }`}>
                                {experience.status}
                              </span>
                            </div>
                          </div>
                        </div>
                        <button
                          onClick={() => setSelectedExperience(null)}
                          className="text-muted-foreground hover:text-foreground transition-colors"
                        >
                          ✕
                        </button>
                      </div>

                      <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                        {experience.description}
                      </p>

                      <div className="mb-6">
                        <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                          <Award className="w-5 h-5 text-primary" />
                          Key Achievements
                        </h4>
                        <ul className="space-y-3">
                          {experience.achievements.map((achievement, index) => (
                            <motion.li
                              key={index}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.1 }}
                              className="flex items-start gap-3"
                            >
                              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                              <span className="text-muted-foreground">{achievement}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>

                      <div className="mb-6">
                        <h4 className="text-lg font-semibold mb-3">Skills & Technologies</h4>
                        <div className="flex flex-wrap gap-2">
                          {experience.skills.map((skill, index) => (
                            <motion.span 
                              key={skill}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: index * 0.05 }}
                              className={`px-3 py-2 bg-gradient-to-r ${experience.color} bg-opacity-10 text-primary rounded-lg font-medium`}
                            >
                              {skill}
                            </motion.span>
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
