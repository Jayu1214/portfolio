'use client'

import { useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'

interface Particle {
  id: number
  x: number
  y: number
  z: number
  vx: number
  vy: number
  vz: number
  size: number
  opacity: number
  color: string
}

interface AnimatedBackgroundProps {
  variant?: 'projects' | 'experience' | 'education'
  className?: string
}

export const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({ 
  variant = 'projects', 
  className = '' 
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [particles, setParticles] = useState<Particle[]>([])
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const animationRef = useRef<number | null>(null)

  const colors = {
    projects: ['#8B5CF6', '#06B6D4', '#10B981', '#F59E0B'],
    experience: ['#EF4444', '#F97316', '#84CC16', '#06B6D4'],
    education: ['#6366F1', '#8B5CF6', '#EC4899', '#F59E0B']
  }

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const createParticles = () => {
      const particleCount = 150
      const newParticles: Particle[] = []

      for (let i = 0; i < particleCount; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          z: Math.random() * 1000,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2,
          vz: (Math.random() - 0.5) * 5,
          size: Math.random() * 3 + 1,
          opacity: Math.random() * 0.5 + 0.2,
          color: colors[variant][Math.floor(Math.random() * colors[variant].length)]
        })
      }
      setParticles(newParticles)
    }

    const updateParticles = () => {
      setParticles(prevParticles => 
        prevParticles.map(particle => {
          // 3D movement
          let newX = particle.x + particle.vx
          let newY = particle.y + particle.vy
          let newZ = particle.z + particle.vz

          // Boundary checks
          if (newX < 0 || newX > canvas.width) particle.vx *= -1
          if (newY < 0 || newY > canvas.height) particle.vy *= -1
          if (newZ < 0 || newZ > 1000) particle.vz *= -1

          // Mouse interaction
          const dx = mousePos.x - newX
          const dy = mousePos.y - newY
          const distance = Math.sqrt(dx * dx + dy * dy)
          
          if (distance < 100) {
            const force = (100 - distance) / 100
            newX -= dx * force * 0.02
            newY -= dy * force * 0.02
          }

          return {
            ...particle,
            x: newX,
            y: newY,
            z: newZ,
            opacity: 0.2 + (newZ / 1000) * 0.5
          }
        })
      )
    }

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      particles.forEach(particle => {
        const scale = (1000 - particle.z) / 1000
        const size = particle.size * scale
        
        ctx.save()
        ctx.globalAlpha = particle.opacity * scale
        ctx.fillStyle = particle.color
        
        // Draw particle with glow effect
        ctx.shadowBlur = 15
        ctx.shadowColor = particle.color
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, size, 0, Math.PI * 2)
        ctx.fill()
        
        ctx.restore()
      })

      // Draw connections
      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach(p2 => {
          const dx = p1.x - p2.x
          const dy = p1.y - p2.y
          const distance = Math.sqrt(dx * dx + dy * dy)
          
          if (distance < 150) {
            ctx.save()
            ctx.globalAlpha = (150 - distance) / 150 * 0.2
            ctx.strokeStyle = p1.color
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(p1.x, p1.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.stroke()
            ctx.restore()
          }
        })
      })
    }

    const animate = () => {
      updateParticles()
      drawParticles()
      animationRef.current = requestAnimationFrame(animate)
    }

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY })
    }

    const handleResize = () => {
      resizeCanvas()
      createParticles()
    }

    resizeCanvas()
    createParticles()
    animate()

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('resize', handleResize)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', handleResize)
    }
  }, [variant, mousePos.x, mousePos.y, particles])

  return (
    <>
      {/* Canvas Background */}
      <canvas
        ref={canvasRef}
        className={`fixed inset-0 pointer-events-none z-0 ${className}`}
        style={{ background: 'transparent' }}
      />

      {/* Geometric Shapes */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Floating Cubes */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`cube-${i}`}
            className="absolute border border-primary/20"
            style={{
              width: `${30 + i * 10}px`,
              height: `${30 + i * 10}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              rotateX: [0, 360],
              rotateY: [0, 360],
              x: [-20, 20, -20],
              y: [-20, 20, -20],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}

        {/* Floating Spheres */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`sphere-${i}`}
            className={`absolute rounded-full bg-gradient-to-r ${colors[variant][i % colors[variant].length]} opacity-10`}
            style={{
              width: `${40 + i * 15}px`,
              height: `${40 + i * 15}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              x: [-30, 30, -30],
              y: [-30, 30, -30],
              rotate: [0, 360],
            }}
            transition={{
              duration: 8 + i * 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Wireframe Pyramids */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={`pyramid-${i}`}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              rotateX: [0, 360],
              rotateZ: [0, 180],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 12 + i * 2,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <div className="relative">
              <div 
                className="absolute border-l border-r border-primary/30"
                style={{
                  width: `${60 + i * 20}px`,
                  height: `${80 + i * 20}px`,
                  clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
                }}
              />
            </div>
          </motion.div>
        ))}

        {/* Matrix Rain Effect */}
        {variant === 'experience' && (
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={`matrix-${i}`}
                className="absolute text-green-500/20 font-mono text-sm"
                style={{
                  left: `${i * 5}%`,
                  top: '-10%',
                }}
                animate={{
                  y: ['0vh', '110vh'],
                }}
                transition={{
                  duration: 3 + Math.random() * 4,
                  repeat: Infinity,
                  ease: "linear",
                  delay: Math.random() * 5,
                }}
              >
                {Array.from({ length: 20 }, () => 
                  String.fromCharCode(0x30A0 + Math.random() * 96)
                ).join('')}
              </motion.div>
            ))}
          </div>
        )}

        {/* DNA Helix for Education */}
        {variant === 'education' && (
          <div className="absolute inset-0">
            {[...Array(30)].map((_, i) => (
              <motion.div
                key={`dna-${i}`}
                className="absolute w-2 h-2 bg-blue-500/30 rounded-full"
                style={{
                  left: '50%',
                  top: `${i * 3}%`,
                }}
                animate={{
                  x: [
                    Math.cos((i * 0.3) + 0) * 50,
                    Math.cos((i * 0.3) + Math.PI) * 50,
                    Math.cos((i * 0.3) + Math.PI * 2) * 50,
                  ],
                  y: [-10, 10, -10],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.1,
                }}
              />
            ))}
          </div>
        )}

        {/* Circuit Board Pattern for Projects */}
        {variant === 'projects' && (
          <div className="absolute inset-0">
            {[...Array(15)].map((_, i) => (
              <motion.svg
                key={`circuit-${i}`}
                className="absolute text-cyan-500/20"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  width: `${100 + i * 20}px`,
                  height: `${100 + i * 20}px`,
                }}
                animate={{
                  rotate: [0, 360],
                  scale: [0.8, 1.2, 0.8],
                }}
                transition={{
                  duration: 15 + i * 2,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <path
                  d="M10,50 L90,50 M50,10 L50,90 M20,20 L80,80 M80,20 L20,80"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                />
                <circle cx="50" cy="50" r="5" fill="currentColor" />
                <circle cx="20" cy="20" r="3" fill="currentColor" />
                <circle cx="80" cy="80" r="3" fill="currentColor" />
                <circle cx="80" cy="20" r="3" fill="currentColor" />
                <circle cx="20" cy="80" r="3" fill="currentColor" />
              </motion.svg>
            ))}
          </div>
        )}
      </div>
    </>
  )
}
