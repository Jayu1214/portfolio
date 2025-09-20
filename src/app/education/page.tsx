'use client'

import { useState, useRef } from 'react'
import { Navbar } from "@/components/Navbar"
import { ElegantBackground } from "@/components/ElegantBackground"
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { ArrowLeft, GraduationCap, BookOpen, Trophy, Star, Calendar, MapPin, Award } from 'lucide-react'
import Link from 'next/link'

const education = [
  {
    id: 1,
    degree: "B. Tech in Computer Science",
    institution: "Symbiosis Institute of Technology, Pune",
    location: "Pune, Maharashtra",
    period: "2022 - 2026",
    status: "Current",
    cgpa: "7.16/10",
    description: "Pursuing comprehensive education in computer science with specialization in cybersecurity and machine learning. Actively engaged in research projects and practical applications of emerging technologies.",
    coursework: [
      "Data Structures & Algorithms",
      "Computer Networks & Security",
      "Machine Learning & AI",
      "Database Management Systems",
      "Software Engineering",
      "Cryptography & Network Security",
      "Operating Systems",
      "Web Technologies"
    ],
    achievements: [
      "Completed cybersecurity internship at ONGC",
      "Led cybersecurity research project on LLM Privacy Shield",
      "Completed multiple industry-relevant certification programs",
      "Active participant in coding competitions and hackathons"
    ],
    projects: [
      "LLM Privacy Shield - Advanced Security Framework",
      "Asteroid RL Navigation - Space Exploration AI",
      "Diabetes Prediction Bot - Healthcare ML Solution"
    ],
    color: "from-purple-500 via-pink-500 to-red-500",
    icon: GraduationCap,
    year: "2022-2026"
  },
  {
    id: 2,
    degree: "Class XII (CBSE)",
    institution: "Kendriya Vidyalaya ONGC Mehsana",
    location: "Mehsana, Gujarat",
    period: "2022",
    status: "Completed",
    percentage: "74%",
    description: "Completed higher secondary education with good performance in Physics, Chemistry, Mathematics, and Computer Science. Built strong foundation for engineering studies.",
    coursework: [
      "Physics - Advanced Mechanics & Electromagnetism",
      "Chemistry - Organic & Inorganic Chemistry",
      "Mathematics - Calculus & Coordinate Geometry",
      "Computer Science - Programming Fundamentals",
      "English - Communication Skills"
    ],
    achievements: [
      "Achieved 74% overall percentage",
      "Strong performance in Mathematics and Computer Science",
      "Built solid foundation for engineering studies",
      "Participated in school-level science activities"
    ],
    projects: [
      "Physics Lab Experiments",
      "Chemistry Practical Work",
      "Mathematical Problem Solving"
    ],
    color: "from-blue-500 via-cyan-500 to-teal-500",
    icon: BookOpen,
    year: "2022"
  },
  {
    id: 3,
    degree: "Class X (CBSE)",
    institution: "Kendriya Vidyalaya ONGC Mehsana",
    location: "Mehsana, Gujarat",
    period: "2020",
    status: "Completed",
    percentage: "75%",
    description: "Completed secondary education with good academic performance. Developed strong analytical and problem-solving skills across multiple subjects.",
    coursework: [
      "Mathematics - Advanced Problem Solving",
      "Science - Physics, Chemistry, Biology",
      "Social Science - History & Geography",
      "Computer Applications - Basic Programming",
      "Languages - English, Hindi"
    ],
    achievements: [
      "Achieved 75% overall percentage",
      "Good performance in Mathematics and Science",
      "Developed analytical and problem-solving skills",
      "Active participation in school activities"
    ],
    projects: [
      "Science Fair Project - Basic Experiments",
      "Math Problem Solutions",
      "Computer Project - Basic Programming"
    ],
    color: "from-green-500 via-emerald-500 to-cyan-500",
    icon: Trophy,
    year: "2020"
  }
]

const certifications = [
  { name: "Google Cybersecurity Professional", issuer: "Google", year: "2024", color: "from-red-500 to-orange-500" },
  { name: "Cisco Networking Essentials", issuer: "Cisco", year: "2023", color: "from-blue-500 to-cyan-500" },
  { name: "OPSWAT Cybersecurity Associate", issuer: "OPSWAT", year: "2024", color: "from-purple-500 to-pink-500" },
  { name: "Infosys AI Virtual Internship", issuer: "Infosys", year: "2024", color: "from-green-500 to-blue-500" }
]

export default function EducationPage() {
  const [selectedEducation, setSelectedEducation] = useState<number | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.3])

  return (
    <div className="min-h-screen bg-background overflow-hidden relative" ref={containerRef}>
      <ElegantBackground variant="education" />
      <Navbar />
      
      <main className="pt-20 relative z-10">
        {/* Header */}
        <section className="py-16">
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
              <h1 className="text-5xl font-bold mb-6 text-gradient">Educational Journey</h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Discover my academic path from foundational learning to specialized expertise in 
                computer engineering, cybersecurity, and artificial intelligence.
              </p>
            </motion.div>
          </div>
        </section>

        {/* 3D Spiral Timeline */}
        <section className="py-20 relative z-10">
          <div className="container mx-auto px-6">
            {/* Central Spiral */}
            <div className="relative" style={{ minHeight: '200vh' }}>
              {/* Spiral Path */}
              <motion.div
                className="absolute left-1/2 top-0 w-2 origin-top transform -translate-x-1/2"
                style={{
                  background: 'linear-gradient(180deg, rgba(168, 85, 247, 0.8) 0%, rgba(59, 130, 246, 0.8) 50%, rgba(16, 185, 129, 0.8) 100%)',
                  height: '150vh',
                  scaleY: useTransform(scrollYProgress, [0, 1], [0, 1]),
                }}
              />

              {/* Education Cards */}
              {education.map((edu, index) => {
                const isEven = index % 2 === 0
                const IconComponent = edu.icon

                return (
                  <motion.div
                    key={edu.id}
                    initial={{ opacity: 0, scale: 0, rotateY: 180 }}
                    whileInView={{ 
                      opacity: 1, 
                      scale: 1, 
                      rotateY: 0,
                    }}
                    viewport={{ once: true, margin: "-200px" }}
                    transition={{ 
                      delay: index * 0.3, 
                      duration: 1,
                      type: "spring",
                      stiffness: 100
                    }}
                    className={`absolute top-0 ${isEven ? 'left-0' : 'right-0'} w-[45%]`}
                    style={{
                      top: `${20 + index * 40}vh`,
                      transformStyle: 'preserve-3d',
                    }}
                    whileHover={{
                      scale: 1.05,
                      rotateY: isEven ? 15 : -15,
                      z: 50,
                    }}
                  >
                    {/* Floating Ring Around Card */}
                    <motion.div
                      className="absolute inset-0 rounded-full border-2 border-primary/30"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      style={{
                        width: '120%',
                        height: '120%',
                        left: '-10%',
                        top: '-10%',
                      }}
                    />

                    {/* Timeline Node */}
                    <motion.div 
                      className={`absolute top-1/2 ${isEven ? '-right-8' : '-left-8'} transform -translate-y-1/2 z-20`}
                      whileHover={{ scale: 1.3, rotate: 180 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${edu.color} p-1 shadow-2xl`}>
                        <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                          <IconComponent className="w-8 h-8 text-primary" />
                        </div>
                      </div>
                    </motion.div>

                    {/* Education Card */}
                    <motion.div
                      onClick={() => setSelectedEducation(edu.id)}
                      whileHover={{ rotateY: isEven ? 10 : -10 }}
                      style={{ transformStyle: 'preserve-3d' }}
                      className="w-full"
                    >
                      <div className="card card-hover cursor-pointer group relative overflow-hidden">
                        {/* Animated Background Gradient */}
                        <motion.div 
                          className={`absolute inset-0 bg-gradient-to-br ${edu.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                          animate={{
                            backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
                          }}
                          transition={{ duration: 8, repeat: Infinity }}
                        />

                        {/* Floating Particles */}
                        <div className="absolute inset-0 overflow-hidden">
                          {[...Array(6)].map((_, i) => (
                            <motion.div
                              key={i}
                              className={`absolute w-2 h-2 bg-gradient-to-r ${edu.color} rounded-full opacity-30`}
                              animate={{
                                x: [0, 50, 0],
                                y: [0, -30, 0],
                                scale: [0.5, 1, 0.5],
                              }}
                              transition={{
                                duration: 3 + i,
                                repeat: Infinity,
                                delay: i * 0.5,
                              }}
                              style={{
                                left: `${10 + i * 15}%`,
                                top: `${20 + i * 10}%`,
                              }}
                            />
                          ))}
                        </div>

                        <div className="relative z-10 p-6">
                          {/* Status Badge */}
                          <div className="absolute top-4 right-4">
                            <motion.span 
                              className={`px-3 py-1 rounded-full text-xs font-medium ${
                                edu.status === 'Current' 
                                  ? 'bg-green-500/20 text-green-400' 
                                  : 'bg-blue-500/20 text-blue-400'
                              }`}
                              animate={{ scale: edu.status === 'Current' ? [1, 1.1, 1] : 1 }}
                              transition={{ duration: 2, repeat: Infinity }}
                            >
                              {edu.status}
                            </motion.span>
                          </div>

                          {/* Year Badge */}
                          <motion.div 
                            className={`inline-block px-4 py-2 rounded-lg bg-gradient-to-r ${edu.color} bg-opacity-20 mb-4`}
                            whileHover={{ scale: 1.05 }}
                          >
                            <span className="text-primary font-bold">{edu.year}</span>
                          </motion.div>

                          <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-primary/80 transition-colors">
                            {edu.degree}
                          </h3>
                          <p className="text-lg font-semibold text-foreground mb-1">{edu.institution}</p>
                          
                          <div className="flex items-center gap-4 mb-3 text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {edu.period}
                            </span>
                            <span className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              {edu.location}
                            </span>
                          </div>

                          {/* Academic Score */}
                          <div className="mb-4">
                            <div className="flex items-center gap-2">
                              <Star className="w-5 h-5 text-yellow-500" />
                              <span className="font-semibold text-primary">
                                {edu.cgpa || edu.percentage}
                              </span>
                            </div>
                          </div>

                          <p className="text-muted-foreground mb-4 line-clamp-3">
                            {edu.description}
                          </p>

                          {/* Key Subjects/Skills */}
                          <div className="flex flex-wrap gap-2">
                            {edu.coursework.slice(0, 3).map((course) => (
                              <span key={course} className="px-2 py-1 bg-secondary/50 text-secondary-foreground rounded text-sm">
                                {course}
                              </span>
                            ))}
                            {edu.coursework.length > 3 && (
                              <span className="px-2 py-1 bg-muted text-muted-foreground rounded text-sm">
                                +{edu.coursework.length - 3} more
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </motion.div>

                    {/* Connecting Lines */}
                    <motion.div
                      className={`absolute top-1/2 ${isEven ? 'right-0 translate-x-8' : 'left-0 -translate-x-8'} w-8 h-0.5 bg-gradient-to-r ${edu.color}`}
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      transition={{ delay: index * 0.3 + 0.5, duration: 0.8 }}
                    />
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section className="py-20 bg-card/20">
          <div className="container mx-auto px-6">
            <motion.h2 
              className="text-3xl font-bold text-center mb-12 text-gradient"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Professional Certifications
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, y: 50, rotateY: 90 }}
                  whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ 
                    scale: 1.05, 
                    rotateY: 15,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
                  }}
                  className="card card-hover text-center relative overflow-hidden"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <motion.div 
                    className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-5`}
                    whileHover={{ opacity: 10 }}
                  />
                  
                  <div className="relative z-10 p-6">
                    <motion.div 
                      className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${cert.color} p-0.5`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.8 }}
                    >
                      <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                        <Award className="w-8 h-8 text-primary" />
                      </div>
                    </motion.div>
                    
                    <h3 className="font-bold text-primary mb-2">{cert.name}</h3>
                    <p className="text-muted-foreground text-sm mb-1">{cert.issuer}</p>
                    <p className="text-primary font-semibold">{cert.year}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Education Detail Modal */}
        <AnimatePresence>
          {selectedEducation && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
              onClick={() => setSelectedEducation(null)}
            >
              <motion.div
                initial={{ scale: 0.5, opacity: 0, rotateY: 180 }}
                animate={{ scale: 1, opacity: 1, rotateY: 0 }}
                exit={{ scale: 0.5, opacity: 0, rotateY: 180 }}
                className="bg-card rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto"
                style={{ transformStyle: 'preserve-3d' }}
                onClick={(e) => e.stopPropagation()}
              >
                {(() => {
                  const edu = education.find(e => e.id === selectedEducation)
                  if (!edu) return null
                  
                  const IconComponent = edu.icon
                  
                  return (
                    <div className="p-8">
                      <motion.div 
                        className="flex items-start justify-between mb-8"
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                      >
                        <div className="flex items-start gap-6">
                          <motion.div 
                            className={`p-4 rounded-xl bg-gradient-to-r ${edu.color} bg-opacity-20`}
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.8 }}
                          >
                            <IconComponent className="w-12 h-12 text-primary" />
                          </motion.div>
                          <div>
                            <h2 className="text-3xl font-bold text-primary mb-2">{edu.degree}</h2>
                            <p className="text-xl font-semibold text-foreground">{edu.institution}</p>
                            <div className="flex items-center gap-6 mt-3 text-muted-foreground">
                              <span className="flex items-center gap-2">
                                <Calendar className="w-5 h-5" />
                                {edu.period}
                              </span>
                              <span className="flex items-center gap-2">
                                <MapPin className="w-5 h-5" />
                                {edu.location}
                              </span>
                              <span className="flex items-center gap-2">
                                <Star className="w-5 h-5 text-yellow-500" />
                                {edu.cgpa || edu.percentage}
                              </span>
                            </div>
                          </div>
                        </div>
                        <button
                          onClick={() => setSelectedEducation(null)}
                          className="text-muted-foreground hover:text-foreground transition-colors text-2xl"
                        >
                          ✕
                        </button>
                      </motion.div>

                      <motion.p 
                        className="text-muted-foreground mb-8 leading-relaxed text-lg"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                      >
                        {edu.description}
                      </motion.p>

                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Coursework */}
                        <motion.div
                          initial={{ x: -50, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: 0.4 }}
                        >
                          <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                            <BookOpen className="w-5 h-5 text-primary" />
                            Key Coursework
                          </h4>
                          <div className="space-y-2">
                            {edu.coursework.map((course, index) => (
                              <motion.div
                                key={course}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.5 + index * 0.05 }}
                                className="flex items-center gap-3 p-3 rounded-lg bg-secondary/20 hover:bg-secondary/30 transition-colors"
                              >
                                <div className="w-2 h-2 bg-primary rounded-full" />
                                <span className="text-foreground">{course}</span>
                              </motion.div>
                            ))}
                          </div>
                        </motion.div>

                        {/* Achievements */}
                        <motion.div
                          initial={{ x: 50, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: 0.4 }}
                        >
                          <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                            <Trophy className="w-5 h-5 text-primary" />
                            Key Achievements
                          </h4>
                          <div className="space-y-2">
                            {edu.achievements.map((achievement, index) => (
                              <motion.div
                                key={achievement}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.5 + index * 0.05 }}
                                className="flex items-start gap-3 p-3 rounded-lg bg-secondary/20 hover:bg-secondary/30 transition-colors"
                              >
                                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                                <span className="text-foreground">{achievement}</span>
                              </motion.div>
                            ))}
                          </div>
                        </motion.div>
                      </div>

                      {/* Projects */}
                      <motion.div 
                        className="mt-8"
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.6 }}
                      >
                        <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                          <GraduationCap className="w-5 h-5 text-primary" />
                          Notable Projects
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          {edu.projects.map((project, index) => (
                            <motion.div
                              key={project}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: 0.7 + index * 0.1 }}
                              whileHover={{ scale: 1.05 }}
                              className={`p-4 rounded-lg bg-gradient-to-r ${edu.color} bg-opacity-10 border border-primary/20`}
                            >
                              <span className="text-primary font-medium">{project}</span>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
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
