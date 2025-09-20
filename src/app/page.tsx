import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ScrollingBackground } from "@/components/ScrollingBackground";
import { Github, Linkedin, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden relative">
      {/* Beautiful Scrolling Background */}
      <ScrollingBackground />
      
      <Navbar />
      <main className="relative z-10">
        <Hero />
        
        {/* Additional Sections for Scrolling */}
        <section id="about" className="min-h-screen bg-gradient-to-br from-card/30 via-background/80 to-muted/20 flex items-center justify-center relative">
          <div className="container mx-auto px-6 text-center relative z-10">
            <h2 className="text-4xl font-bold mb-8 text-gradient">About Me</h2>
            <div className="max-w-4xl mx-auto space-y-6">
              <p className="text-xl text-muted-foreground leading-relaxed">
                I'm <strong>Jay Trivedi</strong>, a motivated B.Tech Computer Science student at 
                <strong> Symbiosis Institute of Technology, Pune</strong> with hands-on experience in 
                cybersecurity, machine learning, and backend development.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                With internships at <strong>ONGC (Cybersecurity)</strong>, <strong>Infosys Springboard (AI)</strong>, 
                and <strong>Cisco Networking Academy</strong>, I specialize in building secure, data-driven 
                systems and contributing to innovative technology teams.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                <div className="card p-4">
                  <h3 className="font-bold text-primary mb-2">Location</h3>
                  <p className="text-sm">Pune, India</p>
                </div>
                <div className="card p-4">
                  <h3 className="font-bold text-primary mb-2">Year</h3>
                  <p className="text-sm">Final Year</p>
                </div>
                <div className="card p-4">
                  <h3 className="font-bold text-primary mb-2">Focus</h3>
                  <p className="text-sm">Cybersecurity & ML</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section - Animated Scrolling Cards */}
        <section id="projects" className="min-h-screen bg-gradient-to-br from-primary/5 via-background/70 to-secondary/10 flex items-center justify-center relative">
          <div className="container mx-auto px-6 text-center relative z-10">
            <h2 className="text-4xl font-bold mb-8 text-gradient">Featured Projects</h2>
            
            {/* Continuously Scrolling Project Cards */}
            <div className="relative w-full overflow-hidden mb-12">
              <div className="flex animate-scroll-right space-x-8" style={{ width: 'calc(200% + 2rem)' }}>
                {/* First Set of Cards */}
                <div className="card card-hover w-80 h-80 flex-shrink-0">
                  <h3 className="text-xl font-bold mb-4 text-primary">LLM Privacy Shield</h3>
                  <p className="text-muted-foreground mb-4">
                    Implementing a framework to detect sensitive data leakage in large language model outputs 
                    with prompt injection detection and real-time redaction filters.
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Python</span>
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">LLM</span>
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Security</span>
                  </div>
                </div>
                
                <div className="card card-hover w-80 h-80 flex-shrink-0">
                  <h3 className="text-xl font-bold mb-4 text-primary">Asteroid RL Navigation</h3>
                  <p className="text-muted-foreground mb-4">
                    Simulated spacecraft motion in GMAT with Q-learning agents to navigate asteroid fields. 
                    Built Flask web interface with MongoDB backend and Matplotlib visualization.
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Python</span>
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">RL</span>
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Flask</span>
                  </div>
                </div>

                <div className="card card-hover w-80 h-80 flex-shrink-0">
                  <h3 className="text-xl font-bold mb-4 text-primary">Diabetes Prediction Bot</h3>
                  <p className="text-muted-foreground mb-4">
                    Flask-based chatbot integrated with ML model (Logistic Regression) to predict diabetes 
                    probability. Deployed using Streamlit with Pandas and Scikit-learn.
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Flask</span>
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">ML</span>
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Streamlit</span>
                  </div>
                </div>

                <div className="card card-hover w-80 h-80 flex-shrink-0">
                  <h3 className="text-xl font-bold mb-4 text-primary">Network Traffic Analyzer</h3>
                  <p className="text-muted-foreground mb-4">
                    Real-time network traffic analysis and intrusion detection system using deep packet 
                    inspection and machine learning for behavioral analysis.
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Python</span>
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Scapy</span>
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">ML</span>
                  </div>
                </div>

                <div className="card card-hover w-80 h-80 flex-shrink-0">
                  <h3 className="text-xl font-bold mb-4 text-primary">Blockchain Voting System</h3>
                  <p className="text-muted-foreground mb-4">
                    Secure and transparent voting platform using blockchain technology with smart contracts 
                    for immutable voting records and cryptographic verification.
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Blockchain</span>
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Solidity</span>
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">React</span>
                  </div>
                </div>

                <div className="card card-hover w-80 h-80 flex-shrink-0">
                  <h3 className="text-xl font-bold mb-4 text-primary">AI Threat Detection</h3>
                  <p className="text-muted-foreground mb-4">
                    Advanced threat detection using computer vision and machine learning to identify 
                    security threats and suspicious activities in real-time video feeds.
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Computer Vision</span>
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">YOLO</span>
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">TensorFlow</span>
                  </div>
                </div>

                {/* Duplicate Set for Seamless Loop */}
                <div className="card card-hover w-80 h-80 flex-shrink-0">
                  <h3 className="text-xl font-bold mb-4 text-primary">LLM Privacy Shield</h3>
                  <p className="text-muted-foreground mb-4">
                    Implementing a framework to detect sensitive data leakage in large language model outputs 
                    with prompt injection detection and real-time redaction filters.
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Python</span>
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">LLM</span>
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Security</span>
                  </div>
                </div>
                
                <div className="card card-hover w-80 h-80 flex-shrink-0">
                  <h3 className="text-xl font-bold mb-4 text-primary">Asteroid RL Navigation</h3>
                  <p className="text-muted-foreground mb-4">
                    Simulated spacecraft motion in GMAT with Q-learning agents to navigate asteroid fields. 
                    Built Flask web interface with MongoDB backend and Matplotlib visualization.
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Python</span>
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">RL</span>
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Flask</span>
                  </div>
                </div>

                <div className="card card-hover w-80 h-80 flex-shrink-0">
                  <h3 className="text-xl font-bold mb-4 text-primary">Diabetes Prediction Bot</h3>
                  <p className="text-muted-foreground mb-4">
                    Flask-based chatbot integrated with ML model (Logistic Regression) to predict diabetes 
                    probability. Deployed using Streamlit with Pandas and Scikit-learn.
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Flask</span>
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">ML</span>
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Streamlit</span>
                  </div>
                </div>
              </div>
            </div>
            
            <Link href="/projects" className="btn-primary inline-flex items-center gap-2 hover:scale-105 transition-transform">
              <span>View All Projects</span>
              <ExternalLink className="w-5 h-5" />
            </Link>
          </div>
        </section>

        {/* Experience Section - Show only 3 with Staggered Animations and Floating Elements */}
        <section id="experience" className="min-h-screen bg-gradient-to-br from-secondary/5 via-background/70 to-primary/10 flex items-center justify-center relative overflow-hidden">
          {/* Floating Background Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 left-10 w-4 h-4 bg-primary/20 rounded-full animate-float" style={{ animationDelay: '0s', animationDuration: '8s' }}></div>
            <div className="absolute top-40 right-20 w-6 h-6 bg-secondary/30 rounded-full animate-float" style={{ animationDelay: '2s', animationDuration: '10s' }}></div>
            <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-accent/25 rounded-full animate-float" style={{ animationDelay: '4s', animationDuration: '12s' }}></div>
            <div className="absolute top-1/3 right-1/3 w-5 h-5 bg-primary/15 rounded-full animate-float" style={{ animationDelay: '1s', animationDuration: '9s' }}></div>
            <div className="absolute bottom-20 right-10 w-4 h-4 bg-secondary/20 rounded-full animate-float" style={{ animationDelay: '3s', animationDuration: '11s' }}></div>
          </div>
          
          <div className="container mx-auto px-6 text-center relative z-10">
            <h2 className="text-4xl font-bold mb-8 text-gradient animate-fade-in relative">
              Professional Experience
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg blur opacity-25 animate-pulse-slow"></div>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
              <div className="card card-hover text-left transform hover:scale-105 hover:rotate-1 transition-all duration-500 animate-slide-up group relative overflow-hidden" style={{ animationDelay: '0.1s' }}>
                {/* Card Shine Effect */}
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:translate-x-full transition-transform duration-1000"></div>
                
                <div className="flex items-start justify-between mb-4 relative z-10">
                  <div>
                    <h3 className="text-xl font-bold text-primary group-hover:text-blue-400 transition-colors">Cybersecurity Intern</h3>
                    <p className="text-lg font-semibold">ONGC On-site</p>
                    <p className="text-muted-foreground">Mehsana, Gujarat • 2024</p>
                  </div>
                  <span className="px-3 py-1 bg-green-500/10 text-green-400 rounded-full text-sm animate-pulse-slow relative">
                    Current
                    <div className="absolute -inset-1 bg-green-400/20 rounded-full animate-ping"></div>
                  </span>
                </div>
                <p className="text-muted-foreground mb-3 relative z-10">
                  Conducted internal security audits and documented protocols while supporting endpoint hardening and vulnerability assessments.
                </p>
                <div className="flex gap-2 flex-wrap relative z-10">
                  <span className="px-2 py-1 bg-secondary/50 text-secondary-foreground rounded text-sm hover:bg-primary/20 hover:scale-110 transition-all cursor-pointer">Security Auditing</span>
                  <span className="px-2 py-1 bg-secondary/50 text-secondary-foreground rounded text-sm hover:bg-primary/20 hover:scale-110 transition-all cursor-pointer">Vulnerability Assessment</span>
                  <span className="px-2 py-1 bg-secondary/50 text-secondary-foreground rounded text-sm hover:bg-primary/20 hover:scale-110 transition-all cursor-pointer">Enterprise Systems</span>
                </div>
              </div>

              <div className="card card-hover text-left transform hover:scale-105 hover:-rotate-1 transition-all duration-500 animate-slide-up group relative overflow-hidden" style={{ animationDelay: '0.3s' }}>
                {/* Card Shine Effect */}
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:translate-x-full transition-transform duration-1000"></div>
                
                <div className="flex items-start justify-between mb-4 relative z-10">
                  <div>
                    <h3 className="text-xl font-bold text-primary group-hover:text-blue-400 transition-colors">AI Intern</h3>
                    <p className="text-lg font-semibold">Infosys Springboard</p>
                    <p className="text-muted-foreground">Virtual • 2024</p>
                  </div>
                  <span className="px-3 py-1 bg-secondary/50 text-secondary-foreground rounded-full text-sm hover:bg-blue-500/20 transition-colors">Completed</span>
                </div>
                <p className="text-muted-foreground mb-3 relative z-10">
                  Built ML classification models using Scikit-learn with advanced data preprocessing and model tuning.
                </p>
                <div className="flex gap-2 flex-wrap relative z-10">
                  <span className="px-2 py-1 bg-secondary/50 text-secondary-foreground rounded text-sm hover:bg-primary/20 hover:scale-110 transition-all cursor-pointer">Machine Learning</span>
                  <span className="px-2 py-1 bg-secondary/50 text-secondary-foreground rounded text-sm hover:bg-primary/20 hover:scale-110 transition-all cursor-pointer">Scikit-learn</span>
                  <span className="px-2 py-1 bg-secondary/50 text-secondary-foreground rounded text-sm hover:bg-primary/20 hover:scale-110 transition-all cursor-pointer">Python</span>
                </div>
              </div>

              <div className="card card-hover text-left transform hover:scale-105 hover:rotate-1 transition-all duration-500 animate-slide-up group relative overflow-hidden" style={{ animationDelay: '0.5s' }}>
                {/* Card Shine Effect */}
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:translate-x-full transition-transform duration-1000"></div>
                
                <div className="flex items-start justify-between mb-4 relative z-10">
                  <div>
                    <h3 className="text-xl font-bold text-primary group-hover:text-blue-400 transition-colors">Network Security Intern</h3>
                    <p className="text-lg font-semibold">Cisco Networking Academy</p>
                    <p className="text-muted-foreground">Virtual • 2023</p>
                  </div>
                  <span className="px-3 py-1 bg-secondary/50 text-secondary-foreground rounded-full text-sm hover:bg-blue-500/20 transition-colors">Completed</span>
                </div>
                <p className="text-muted-foreground mb-3 relative z-10">
                  Simulated network setups using Packet Tracer and gained expertise in Wireshark analysis.
                </p>
                <div className="flex gap-2 flex-wrap relative z-10">
                  <span className="px-2 py-1 bg-secondary/50 text-secondary-foreground rounded text-sm hover:bg-primary/20 hover:scale-110 transition-all cursor-pointer">Packet Tracer</span>
                  <span className="px-2 py-1 bg-secondary/50 text-secondary-foreground rounded text-sm hover:bg-primary/20 hover:scale-110 transition-all cursor-pointer">Wireshark</span>
                  <span className="px-2 py-1 bg-secondary/50 text-secondary-foreground rounded text-sm hover:bg-primary/20 hover:scale-110 transition-all cursor-pointer">Network Security</span>
                </div>
              </div>
            </div>
            
            <Link href="/experience" className="btn-primary inline-flex items-center gap-2 hover:scale-105 transition-transform">
              <span>View Full Journey</span>
              <ExternalLink className="w-5 h-5" />
            </Link>
          </div>
        </section>

        {/* Education Section - Show only 3 levels with Enhanced Timeline Animation */}
        <section id="education" className="min-h-screen bg-gradient-to-br from-secondary/10 via-background/70 to-accent/5 flex items-center justify-center relative overflow-hidden">
          {/* Animated Background Pattern */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="absolute top-20 left-20 w-32 h-32 border border-primary/20 rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
              <div className="absolute bottom-20 right-20 w-40 h-40 border border-secondary/20 rounded-full animate-spin" style={{ animationDuration: '25s', animationDirection: 'reverse' }}></div>
              <div className="absolute top-1/2 left-1/2 w-24 h-24 border border-accent/20 rounded-full animate-spin" style={{ animationDuration: '15s' }}></div>
            </div>
          </div>

          <div className="container mx-auto px-6 text-center relative z-10">
            <h2 className="text-4xl font-bold mb-12 text-gradient animate-fade-in relative">
              Educational Background
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-primary to-secondary rounded-full animate-pulse"></div>
            </h2>
            <div className="relative max-w-4xl mx-auto mb-12">
              {/* Enhanced Timeline Line with Gradient */}
              <div className="absolute left-1/2 transform -translate-x-0.5 h-full w-1 bg-gradient-to-b from-primary/30 via-secondary/60 to-accent/30 rounded-full animate-pulse-slow shadow-glow"></div>
              
              {/* Floating Timeline Particles */}
              <div className="absolute left-1/2 top-10 w-2 h-2 bg-primary/40 rounded-full animate-float" style={{ transform: 'translateX(-50%)', animationDelay: '0s', animationDuration: '6s' }}></div>
              <div className="absolute left-1/2 top-1/3 w-1.5 h-1.5 bg-secondary/40 rounded-full animate-float" style={{ transform: 'translateX(-50%)', animationDelay: '2s', animationDuration: '8s' }}></div>
              <div className="absolute left-1/2 bottom-20 w-2 h-2 bg-accent/40 rounded-full animate-float" style={{ transform: 'translateX(-50%)', animationDelay: '4s', animationDuration: '7s' }}></div>
              
              {/* Education Cards with Enhanced Timeline */}
              <div className="space-y-16">
                <div className="relative flex items-center justify-between animate-slide-left group" style={{ animationDelay: '0.2s' }}>
                  <div className="w-5/12 pr-8">
                    <div className="card card-hover text-left transform hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 relative overflow-hidden">
                      {/* Card Glow Effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      <div className="flex items-start justify-between mb-4 relative z-10">
                        <div>
                          <h3 className="text-xl font-bold text-primary group-hover:text-blue-400 transition-colors">B. Tech in Computer Science</h3>
                          <p className="text-lg font-semibold">Symbiosis Institute of Technology, Pune</p>
                          <p className="text-muted-foreground">Pune, Maharashtra • 2022-2026</p>
                        </div>
                        <div className="text-right">
                          <span className="px-3 py-1 bg-green-500/10 text-green-400 rounded-full text-sm animate-bounce-slow relative">
                            Current
                            <div className="absolute -inset-1 bg-green-400/20 rounded-full animate-ping"></div>
                          </span>
                          <p className="text-primary font-bold mt-2 hover:scale-110 transition-transform cursor-pointer">CGPA: 7.16/10</p>
                        </div>
                      </div>
                      <p className="text-muted-foreground mb-3 relative z-10">
                        Pursuing comprehensive education in computer science with specialization in cybersecurity and machine learning.
                      </p>
                      <div className="flex gap-2 flex-wrap relative z-10">
                        <span className="px-2 py-1 bg-secondary/50 text-secondary-foreground rounded text-sm hover:bg-primary/20 hover:scale-110 hover:rotate-2 transition-all cursor-pointer">Computer Networks</span>
                        <span className="px-2 py-1 bg-secondary/50 text-secondary-foreground rounded text-sm hover:bg-primary/20 hover:scale-110 hover:-rotate-1 transition-all cursor-pointer">Machine Learning</span>
                        <span className="px-2 py-1 bg-secondary/50 text-secondary-foreground rounded text-sm hover:bg-primary/20 hover:scale-110 hover:rotate-1 transition-all cursor-pointer">Cybersecurity</span>
                      </div>
                    </div>
                  </div>
                  {/* Enhanced Timeline Node */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                    <div className="w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-full border-4 border-background shadow-xl relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full animate-ping opacity-75"></div>
                      <div className="absolute inset-2 bg-white rounded-full animate-pulse"></div>
                    </div>
                  </div>
                  <div className="w-5/12"></div>
                </div>

                <div className="relative flex items-center justify-between animate-slide-right group" style={{ animationDelay: '0.4s' }}>
                  <div className="w-5/12"></div>
                  {/* Enhanced Timeline Node */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                    <div className="w-8 h-8 bg-gradient-to-r from-secondary to-accent rounded-full border-4 border-background shadow-xl relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-secondary to-accent rounded-full animate-ping opacity-75"></div>
                      <div className="absolute inset-2 bg-white rounded-full animate-pulse"></div>
                    </div>
                  </div>
                  <div className="w-5/12 pl-8">
                    <div className="card card-hover text-left transform hover:scale-105 hover:shadow-2xl hover:shadow-secondary/20 transition-all duration-500 relative overflow-hidden">
                      {/* Card Glow Effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-secondary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      <div className="flex items-start justify-between mb-4 relative z-10">
                        <div>
                          <h3 className="text-xl font-bold text-primary group-hover:text-blue-400 transition-colors">Class XII (CBSE)</h3>
                          <p className="text-lg font-semibold">Kendriya Vidyalaya ONGC Mehsana</p>
                          <p className="text-muted-foreground">Mehsana, Gujarat • 2022</p>
                        </div>
                        <div className="text-right">
                          <span className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm hover:bg-blue-500/20 transition-colors">Completed</span>
                          <p className="text-primary font-bold mt-2 hover:scale-110 transition-transform cursor-pointer">74%</p>
                        </div>
                      </div>
                      <p className="text-muted-foreground mb-3 relative z-10">
                        Completed with good performance in Physics, Chemistry, Mathematics, and Computer Science.
                      </p>
                      <div className="flex gap-2 flex-wrap relative z-10">
                        <span className="px-2 py-1 bg-secondary/50 text-secondary-foreground rounded text-sm hover:bg-primary/20 hover:scale-110 hover:rotate-2 transition-all cursor-pointer">Mathematics</span>
                        <span className="px-2 py-1 bg-secondary/50 text-secondary-foreground rounded text-sm hover:bg-primary/20 hover:scale-110 hover:-rotate-1 transition-all cursor-pointer">Computer Science</span>
                        <span className="px-2 py-1 bg-secondary/50 text-secondary-foreground rounded text-sm hover:bg-primary/20 hover:scale-110 hover:rotate-1 transition-all cursor-pointer">Physics</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative flex items-center justify-between animate-slide-left group" style={{ animationDelay: '0.6s' }}>
                  <div className="w-5/12 pr-8">
                    <div className="card card-hover text-left transform hover:scale-105 hover:shadow-2xl hover:shadow-accent/20 transition-all duration-500 relative overflow-hidden">
                      {/* Card Glow Effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-accent/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      <div className="flex items-start justify-between mb-4 relative z-10">
                        <div>
                          <h3 className="text-xl font-bold text-primary group-hover:text-blue-400 transition-colors">Class X (CBSE)</h3>
                          <p className="text-lg font-semibold">Kendriya Vidyalaya ONGC Mehsana</p>
                          <p className="text-muted-foreground">Mehsana, Gujarat • 2020</p>
                        </div>
                        <div className="text-right">
                          <span className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm hover:bg-blue-500/20 transition-colors">Completed</span>
                          <p className="text-primary font-bold mt-2 hover:scale-110 transition-transform cursor-pointer">75%</p>
                        </div>
                      </div>
                      <p className="text-muted-foreground mb-3 relative z-10">
                        Completed with excellent academic performance and developed strong analytical skills.
                      </p>
                      <div className="flex gap-2 flex-wrap relative z-10">
                        <span className="px-2 py-1 bg-secondary/50 text-secondary-foreground rounded text-sm hover:bg-primary/20 hover:scale-110 hover:rotate-2 transition-all cursor-pointer">Mathematics</span>
                        <span className="px-2 py-1 bg-secondary/50 text-secondary-foreground rounded text-sm hover:bg-primary/20 hover:scale-110 hover:-rotate-1 transition-all cursor-pointer">Science</span>
                        <span className="px-2 py-1 bg-secondary/50 text-secondary-foreground rounded text-sm hover:bg-primary/20 hover:scale-110 hover:rotate-1 transition-all cursor-pointer">English</span>
                      </div>
                    </div>
                  </div>
                  {/* Enhanced Timeline Node */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                    <div className="w-8 h-8 bg-gradient-to-r from-accent to-primary rounded-full border-4 border-background shadow-xl relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary rounded-full animate-ping opacity-75"></div>
                      <div className="absolute inset-2 bg-white rounded-full animate-pulse"></div>
                    </div>
                  </div>
                  <div className="w-5/12"></div>
                </div>
              </div>
            </div>
            
            <Link href="/education" className="btn-primary inline-flex items-center gap-2 hover:scale-105 transition-transform">
              <span>Explore Educational Journey</span>
              <ExternalLink className="w-5 h-5" />
            </Link>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="min-h-screen bg-gradient-to-br from-primary/8 via-background/80 to-secondary/12 flex items-center justify-center relative">
          <div className="container mx-auto px-6 text-center relative z-10">
            <h2 className="text-4xl font-bold mb-8 text-gradient">Get In Touch</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Ready to collaborate on cybersecurity projects or discuss ML innovations? 
              Let's connect and build secure, data-driven solutions together!
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
              <div className="card card-hover p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-bold text-primary mb-2 text-lg">Email</h3>
                <p className="text-muted-foreground">jayustrivedi1214@gmail.com</p>
              </div>
              <div className="card card-hover p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-bold text-primary mb-2 text-lg">Phone</h3>
                <p className="text-muted-foreground">+91 9427680299</p>
              </div>
              <div className="card card-hover p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-bold text-primary mb-2 text-lg">Location</h3>
                <p className="text-muted-foreground">Pune, Maharashtra, India</p>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              <h3 className="text-xl font-bold text-gradient">Certifications</h3>
              <div className="flex flex-wrap justify-center gap-4">
                {[
                  'Google Cybersecurity Professional',
                  'Cisco Networking Essentials', 
                  'OPSWAT Cybersecurity Associate',
                  'Infosys AI Virtual Internship'
                ].map(cert => (
                  <span key={cert} className="px-4 py-2 bg-primary/10 text-primary rounded-lg text-sm">
                    {cert}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="flex justify-center space-x-6 mb-8">
              <a 
                href="https://www.linkedin.com/in/jay-trivedi-work/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-primary/10 hover:bg-primary text-primary hover:text-primary-foreground rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a 
                href="https://github.com/Jayu1214" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-primary/10 hover:bg-primary text-primary hover:text-primary-foreground rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
              >
                <Github className="w-6 h-6" />
              </a>
              <a 
                href="mailto:jayustrivedi1214@gmail.com"
                className="w-12 h-12 bg-primary/10 hover:bg-primary text-primary hover:text-primary-foreground rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
            
            <a 
              href="mailto:jayustrivedi1214@gmail.com" 
              className="btn-primary animate-pulse-glow"
            >
              Start a Conversation
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
