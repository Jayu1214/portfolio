'use client'

import { useRef, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export const ScrollingBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll()

  // Transform scroll into different animations
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -300])
  const particleOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.3, 0.6, 0.6, 0.3])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight * 3 // Make it taller for scrolling

    const particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      size: number
      opacity: number
      hue: number
      pulse: number
    }> = []

    // Create ambient particles
    for (let i = 0; i < 80; i++) { // Increased particle count
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.8, // Increased speed
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 0.8, // Larger particles
        opacity: Math.random() * 0.6 + 0.2, // More visible
        hue: Math.random() * 360,
        pulse: Math.random() * Math.PI * 2,
      })
    }

    let animationId: number

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle) => {
        // Gentle movement
        particle.x += particle.vx
        particle.y += particle.vy
        particle.pulse += 0.02

        // Wrap around
        if (particle.x < 0) particle.x = canvas.width
        if (particle.x > canvas.width) particle.x = 0
        if (particle.y < 0) particle.y = canvas.height
        if (particle.y > canvas.height) particle.y = 0

        // Pulsing effect
        const pulsedSize = particle.size + Math.sin(particle.pulse) * 0.3
        const pulsedOpacity = particle.opacity + Math.sin(particle.pulse) * 0.1

        // Draw particle with gradient
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, pulsedSize * 3
        )
        gradient.addColorStop(0, `hsla(${particle.hue}, 70%, 60%, ${pulsedOpacity})`)
        gradient.addColorStop(1, `hsla(${particle.hue}, 70%, 60%, 0)`)

        ctx.beginPath()
        ctx.arc(particle.x, particle.y, pulsedSize * 3, 0, Math.PI * 2)
        ctx.fillStyle = gradient
        ctx.fill()
      })

      animationId = requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight * 3
    }

    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0"
    >
      {/* Animated Canvas Background - Only for scrolled sections */}
      <motion.canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ 
          y: backgroundY,
          opacity: useTransform(scrollYProgress, [0, 0.1, 1], [0, 0.8, 0.6]), // Much more visible
        }}
      />

      {/* Very Subtle Moving Lines - Only visible when scrolled */}
      <motion.div
        style={{
          opacity: useTransform(scrollYProgress, [0, 0.1, 1], [0, 0.4, 0.3]) // More visible
        }}
      >
        <svg className="absolute inset-0 w-full h-full" style={{ height: '300vh' }}>
          {[...Array(6)].map((_, i) => {
            const yOffset = i * 150 + 400 // Start after hero section
            return (
              <motion.path
                key={`wave-${i}`}
                d={`M 0 ${yOffset} Q 200 ${yOffset - 30} 400 ${yOffset} Q 600 ${yOffset + 30} 800 ${yOffset} Q 1000 ${yOffset - 30} 1200 ${yOffset} Q 1400 ${yOffset + 30} 1600 ${yOffset}`}
                stroke={`hsl(${220 + i * 20}, 60%, 50%)`}
                strokeWidth="1.5"
                fill="none"
                opacity="0.4"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{
                  duration: 15 + i * 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 1,
                }}
              />
            )
          })}
        </svg>
      </motion.div>

      {/* Section-Specific Overlays with Scroll Triggers */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          opacity: useTransform(scrollYProgress, [0, 0.1, 1], [0, 1, 0.8]), // Much more visible
          background: useTransform(
            scrollYProgress,
            [0, 0.2, 0.4, 0.6, 0.8, 1],
            [
              'transparent',
              'radial-gradient(circle at 70% 20%, rgba(139, 92, 246, 0.15) 0%, transparent 60%)',
              'radial-gradient(circle at 30% 70%, rgba(6, 182, 212, 0.15) 0%, transparent 60%)',
              'radial-gradient(circle at 80% 60%, rgba(16, 185, 129, 0.15) 0%, transparent 60%)',
              'radial-gradient(circle at 40% 30%, rgba(236, 72, 153, 0.15) 0%, transparent 60%)',
              'radial-gradient(circle at 60% 80%, rgba(139, 92, 246, 0.15) 0%, transparent 60%)',
            ]
          ),
        }}
      />

      {/* Additional floating elements for better visibility */}
      <motion.div
        style={{
          opacity: useTransform(scrollYProgress, [0, 0.1, 1], [0, 0.6, 0.4])
        }}
      >
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`scroll-particle-${i}`}
            className="absolute w-2 h-2 rounded-full"
            style={{
              left: `${15 + i * 10}%`,
              top: `${30 + (i % 3) * 25}%`,
              background: `radial-gradient(circle, 
                hsla(${240 + i * 30}, 70%, 60%, 0.6) 0%, 
                transparent 70%
              )`,
            }}
            animate={{
              y: [-20, 20, -20],
              x: [-10, 10, -10],
              scale: [0.5, 1.5, 0.5],
            }}
            transition={{
              duration: 8 + i * 1,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        ))}
      </motion.div>
    </div>
  )
}
