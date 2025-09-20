'use client'

import { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'

interface ElegantBackgroundProps {
  variant?: 'projects' | 'experience' | 'education'
  className?: string
}

export const ElegantBackground: React.FC<ElegantBackgroundProps> = ({ 
  variant = 'projects', 
  className = '' 
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      size: number
      opacity: number
      hue?: number
    }> = []

    // Create fewer, slower particles for elegance
    const particleCount = variant === 'projects' ? 40 : variant === 'experience' ? 35 : 30
    
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.8, // Increased speed for visible movement
        vy: (Math.random() - 0.5) * 0.8,
        size: Math.random() * 2 + 0.8, // Slightly larger particles
        opacity: Math.random() * 0.4 + 0.2, // More visible
        hue: Math.random() * 60 + (variant === 'projects' ? 240 : variant === 'experience' ? 200 : 280),
      })
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle) => {
        // Slow, gentle movement
        particle.x += particle.vx
        particle.y += particle.vy

        // Gentle bounce off edges instead of wrapping
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1

        // Keep within bounds
        particle.x = Math.max(0, Math.min(canvas.width, particle.x))
        particle.y = Math.max(0, Math.min(canvas.height, particle.y))

        // Draw particle with subtle glow
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        
        if (variant === 'projects') {
          ctx.fillStyle = `hsla(${particle.hue || 240}, 70%, 60%, ${particle.opacity})`
        } else if (variant === 'experience') {
          ctx.fillStyle = `hsla(${particle.hue || 200}, 60%, 55%, ${particle.opacity})`
        } else {
          ctx.fillStyle = `hsla(${particle.hue || 280}, 65%, 58%, ${particle.opacity})`
        }
        
        ctx.fill()

        // Subtle glow effect
        ctx.shadowColor = ctx.fillStyle
        ctx.shadowBlur = particle.size * 2
        ctx.fill()
        ctx.shadowBlur = 0
      })

      // Draw connections between nearby particles (very subtle)
      particles.forEach((particle, i) => {
        particles.slice(i + 1).forEach((otherParticle) => {
          const dx = particle.x - otherParticle.x
          const dy = particle.y - otherParticle.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 150) { // Increased connection distance
            ctx.beginPath()
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(otherParticle.x, otherParticle.y)
            ctx.strokeStyle = `hsla(${particle.hue || 240}, 50%, 50%, ${0.15 * (1 - distance / 150)})`
            ctx.lineWidth = 0.8 // Slightly thicker lines
            ctx.stroke()
          }
        })
      })

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [variant])

  return (
    <div className={`fixed inset-0 pointer-events-none z-0 ${className}`}>
      {/* Subtle Canvas Particles */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-60"
      />

      {/* Additional Floating Particles */}
      {[...Array(25)].map((_, i) => (
        <motion.div
          key={`extra-particle-${i}`}
          className="absolute w-1 h-1 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: variant === 'projects' 
              ? 'radial-gradient(circle, rgba(59, 130, 246, 0.6) 0%, transparent 70%)'
              : variant === 'experience'
              ? 'radial-gradient(circle, rgba(6, 182, 212, 0.6) 0%, transparent 70%)'
              : 'radial-gradient(circle, rgba(139, 92, 246, 0.6) 0%, transparent 70%)'
          }}
          animate={{
            y: [-20, 20, -20],
            x: [-10, 10, -10],
            scale: [0.5, 1.5, 0.5],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: 5 + i * 0.3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.2,
          }}
        />
      ))}

      {/* Gentle Floating Elements */}
      {variant === 'projects' && (
        <>
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={`project-float-${i}`}
              className="absolute"
              style={{
                left: `${10 + i * 8}%`,
                top: `${20 + (i % 4) * 20}%`,
              }}
              animate={{
                y: [-15, 15, -15],
                x: [-8, 8, -8],
                rotate: [-3, 3, -3],
              }}
              transition={{
                duration: 4 + i * 0.5, // Faster movement
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.3,
              }}
            >
              <div 
                className="w-16 h-16 rounded-lg bg-gradient-to-br from-blue-500/15 to-purple-500/15 border border-blue-300/30"
                style={{
                  backdropFilter: 'blur(1px)',
                }}
              />
            </motion.div>
          ))}
          
          {/* Code-like particles */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={`code-particle-${i}`}
              className="absolute text-xs font-mono text-blue-400/40"
              style={{
                left: `${15 + i * 10}%`,
                top: `${30 + (i % 3) * 20}%`,
              }}
              animate={{
                opacity: [0.2, 0.6, 0.2],
                y: [-5, 5, -5],
              }}
              transition={{
                duration: 3 + i * 0.4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.5,
              }}
            >
              {['{}', '<>', '/>', '[]', '()', '&&', '||', '++'][i]}
            </motion.div>
          ))}
        </>
      )}

      {variant === 'experience' && (
        <>
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={`exp-float-${i}`}
              className="absolute"
              style={{
                left: `${12 + i * 10}%`,
                top: `${25 + (i % 3) * 25}%`,
              }}
              animate={{
                y: [-12, 18, -12],
                scale: [1, 1.1, 1],
                opacity: [0.4, 0.8, 0.4],
              }}
              transition={{
                duration: 5 + i * 0.8, // Faster movement
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.4,
              }}
            >
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-300/40" />
            </motion.div>
          ))}
          
          {/* Experience badges floating */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={`badge-${i}`}
              className="absolute text-xs font-semibold text-cyan-400/50 bg-cyan-500/10 px-2 py-1 rounded border border-cyan-300/30"
              style={{
                left: `${20 + i * 12}%`,
                top: `${40 + (i % 2) * 20}%`,
              }}
              animate={{
                y: [-8, 8, -8],
                rotate: [-1, 1, -1],
              }}
              transition={{
                duration: 4 + i * 0.6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.7,
              }}
            >
              {['ONGC', 'Infosys', 'Cisco', 'AI/ML', 'Cyber', 'Tech'][i]}
            </motion.div>
          ))}
        </>
      )}

      {variant === 'education' && (
        <>
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={`edu-float-${i}`}
              className="absolute"
              style={{
                left: `${8 + i * 10}%`,
                top: `${15 + (i % 4) * 18}%`,
              }}
              animate={{
                y: [-10, 12, -10],
                x: [-5, 5, -5],
                rotate: [-2, 2, -2],
              }}
              transition={{
                duration: 6 + i * 0.8, // Faster movement
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.4,
              }}
            >
              <div className="w-14 h-14 rotate-45 bg-gradient-to-br from-purple-500/18 to-pink-500/18 border border-purple-300/35" />
            </motion.div>
          ))}
          
          {/* Academic symbols */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={`academic-${i}`}
              className="absolute text-purple-400/40 text-lg"
              style={{
                left: `${25 + i * 8}%`,
                top: `${35 + (i % 3) * 15}%`,
              }}
              animate={{
                rotate: [0, 360],
                scale: [0.8, 1.2, 0.8],
                opacity: [0.3, 0.7, 0.3],
              }}
              transition={{
                duration: 8 + i * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.6,
              }}
            >
              {['🎓', '📚', '🔬', '💡', '🏆', '⚡', '🚀', '💻'][i]}
            </motion.div>
          ))}
        </>
      )}

      {/* Subtle Gradient Overlay */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: variant === 'projects' 
            ? 'radial-gradient(circle at 30% 20%, rgba(59, 130, 246, 0.1) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)'
            : variant === 'experience'
            ? 'radial-gradient(circle at 20% 30%, rgba(6, 182, 212, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)'
            : 'radial-gradient(circle at 40% 20%, rgba(139, 92, 246, 0.1) 0%, transparent 50%), radial-gradient(circle at 60% 80%, rgba(236, 72, 153, 0.1) 0%, transparent 50%)'
        }}
      />

      {/* Very Subtle Moving Lines */}
      <svg className="absolute inset-0 w-full h-full opacity-20">
        {[...Array(6)].map((_, i) => (
          <motion.path
            key={`elegant-line-${i}`}
            d={`M 0 ${200 + i * 120} Q 400 ${150 + i * 120} 800 ${200 + i * 120} Q 1200 ${250 + i * 120} 1600 ${200 + i * 120}`}
            stroke={variant === 'projects' ? "url(#blue-gradient)" : variant === 'experience' ? "url(#cyan-gradient)" : "url(#purple-gradient)"}
            strokeWidth="1.5"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.5 }}
            transition={{
              duration: 12 + i * 2, // Faster line animation
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 1,
            }}
          />
        ))}
        
        {/* Animated dots along the lines */}
        {[...Array(8)].map((_, i) => (
          <motion.circle
            key={`line-dot-${i}`}
            r="2"
            fill={variant === 'projects' ? "rgba(59, 130, 246, 0.6)" : variant === 'experience' ? "rgba(6, 182, 212, 0.6)" : "rgba(139, 92, 246, 0.6)"}
            initial={{ 
              cx: 0, 
              cy: 200 + (i % 3) * 120 
            }}
            animate={{ 
              cx: [0, 400, 800, 1200, 1600],
              cy: [
                200 + (i % 3) * 120,
                150 + (i % 3) * 120,
                200 + (i % 3) * 120,
                250 + (i % 3) * 120,
                200 + (i % 3) * 120
              ]
            }}
            transition={{
              duration: 8 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.8,
            }}
          />
        ))}
        
        <defs>
          <linearGradient id="blue-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(59, 130, 246, 0.6)" />
            <stop offset="50%" stopColor="rgba(139, 92, 246, 0.4)" />
            <stop offset="100%" stopColor="rgba(59, 130, 246, 0.6)" />
          </linearGradient>
          <linearGradient id="cyan-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(6, 182, 212, 0.6)" />
            <stop offset="50%" stopColor="rgba(59, 130, 246, 0.4)" />
            <stop offset="100%" stopColor="rgba(6, 182, 212, 0.6)" />
          </linearGradient>
          <linearGradient id="purple-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(139, 92, 246, 0.6)" />
            <stop offset="50%" stopColor="rgba(236, 72, 153, 0.4)" />
            <stop offset="100%" stopColor="rgba(139, 92, 246, 0.6)" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}
