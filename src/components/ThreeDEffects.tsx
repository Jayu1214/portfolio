'use client'

import { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'

interface ThreeDEffectsProps {
  variant?: 'floating-cubes' | 'particle-storm' | 'geometric-waves'
  className?: string
}

export const ThreeDEffects: React.FC<ThreeDEffectsProps> = ({ 
  variant = 'floating-cubes', 
  className = '' 
}) => {
  return (
    <div className={`fixed inset-0 pointer-events-none z-0 overflow-hidden ${className}`}>
      {variant === 'floating-cubes' && (
        <>
          {/* Floating 3D Cubes */}
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={`floating-cube-${i}`}
              className="absolute"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                transformStyle: 'preserve-3d',
              }}
              animate={{
                rotateX: [0, 360],
                rotateY: [0, 360],
                rotateZ: [0, 180],
                x: [-100, 100, -100],
                y: [-50, 50, -50],
                z: [0, 100, 0],
              }}
              transition={{
                duration: 15 + i * 2,
                repeat: Infinity,
                ease: "linear",
                delay: i * 0.5,
              }}
            >
              <div className="relative">
                {/* Cube faces */}
                <div 
                  className="absolute bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-purple-300/30"
                  style={{
                    width: `${40 + i * 5}px`,
                    height: `${40 + i * 5}px`,
                    transform: `translateZ(${20 + i * 2.5}px)`,
                  }}
                />
                <div 
                  className="absolute bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-300/30"
                  style={{
                    width: `${40 + i * 5}px`,
                    height: `${40 + i * 5}px`,
                    transform: `rotateY(90deg) translateZ(${20 + i * 2.5}px)`,
                  }}
                />
                <div 
                  className="absolute bg-gradient-to-br from-cyan-500/20 to-green-500/20 border border-cyan-300/30"
                  style={{
                    width: `${40 + i * 5}px`,
                    height: `${40 + i * 5}px`,
                    transform: `rotateX(90deg) translateZ(${20 + i * 2.5}px)`,
                  }}
                />
              </div>
            </motion.div>
          ))}
        </>
      )}

      {variant === 'particle-storm' && (
        <>
          {/* Particle Storm */}
          {[...Array(100)].map((_, i) => (
            <motion.div
              key={`particle-${i}`}
              className="absolute w-1 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                x: [
                  0,
                  (Math.random() - 0.5) * 400,
                  (Math.random() - 0.5) * 800,
                  0
                ],
                y: [
                  0,
                  (Math.random() - 0.5) * 400,
                  (Math.random() - 0.5) * 800,
                  0
                ],
                scale: [0, 1, 2, 0],
                opacity: [0, 1, 0.5, 0],
              }}
              transition={{
                duration: 8 + Math.random() * 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 5,
              }}
            />
          ))}

          {/* Energy Rings */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={`ring-${i}`}
              className="absolute border-2 border-purple-400/30 rounded-full"
              style={{
                left: '50%',
                top: '50%',
                width: `${100 + i * 100}px`,
                height: `${100 + i * 100}px`,
                marginLeft: `${-50 - i * 50}px`,
                marginTop: `${-50 - i * 50}px`,
              }}
              animate={{
                scale: [1, 2, 1],
                opacity: [0.5, 0, 0.5],
                rotate: [0, 360],
              }}
              transition={{
                duration: 4 + i,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.5,
              }}
            />
          ))}
        </>
      )}

      {variant === 'geometric-waves' && (
        <>
          {/* Geometric Waves */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={`wave-${i}`}
              className="absolute"
              style={{
                left: `${i * 5}%`,
                top: '50%',
                width: '2px',
                height: '100px',
                background: `linear-gradient(to bottom, 
                  rgba(139, 92, 246, ${0.1 + i * 0.02}), 
                  rgba(59, 130, 246, ${0.1 + i * 0.02}), 
                  rgba(16, 185, 129, ${0.1 + i * 0.02})
                )`,
                transformOrigin: 'bottom',
              }}
              animate={{
                scaleY: [
                  1 + Math.sin(i * 0.5) * 0.5,
                  1 + Math.sin(i * 0.5 + Math.PI) * 0.5,
                  1 + Math.sin(i * 0.5 + Math.PI * 2) * 0.5,
                ],
                rotateZ: [
                  Math.sin(i * 0.3) * 10,
                  Math.sin(i * 0.3 + Math.PI) * 10,
                  Math.sin(i * 0.3 + Math.PI * 2) * 10,
                ],
              }}
              transition={{
                duration: 3 + i * 0.1,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.1,
              }}
            />
          ))}

          {/* Floating Pyramids */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={`pyramid-${i}`}
              className="absolute"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                transformStyle: 'preserve-3d',
              }}
              animate={{
                rotateX: [0, 360],
                rotateY: [0, 360],
                y: [-20, 20, -20],
                x: [-20, 20, -20],
              }}
              transition={{
                duration: 12 + i * 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.5,
              }}
            >
              <div 
                className="border-l border-r border-b border-gradient-to-t from-purple-400/30 to-transparent"
                style={{
                  width: 0,
                  height: 0,
                  borderLeftWidth: `${15 + i * 3}px`,
                  borderRightWidth: `${15 + i * 3}px`,
                  borderBottomWidth: `${20 + i * 4}px`,
                  borderLeftColor: 'transparent',
                  borderRightColor: 'transparent',
                  borderBottomColor: `rgba(139, 92, 246, ${0.3 + i * 0.05})`,
                }}
              />
            </motion.div>
          ))}
        </>
      )}

      {/* Pulsing Energy Orbs */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={`orb-${i}`}
          className="absolute rounded-full"
          style={{
            left: `${20 + i * 15}%`,
            top: `${30 + i * 10}%`,
            width: `${60 + i * 20}px`,
            height: `${60 + i * 20}px`,
            background: `radial-gradient(circle, 
              rgba(139, 92, 246, 0.1) 0%, 
              rgba(59, 130, 246, 0.05) 50%, 
              transparent 100%
            )`,
            filter: 'blur(1px)',
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.7, 0.3],
            x: [-10, 10, -10],
            y: [-15, 15, -15],
          }}
          transition={{
            duration: 6 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.8,
          }}
        />
      ))}

      {/* Flowing Lines */}
      <svg className="absolute inset-0 w-full h-full opacity-20">
        {[...Array(10)].map((_, i) => (
          <motion.path
            key={`line-${i}`}
            d={`M ${i * 100} 0 Q ${i * 100 + 50} 200 ${i * 100} 400 Q ${i * 100 + 50} 600 ${i * 100} 800`}
            stroke={`url(#gradient-${i})`}
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.5 }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3,
            }}
          />
        ))}
        <defs>
          {[...Array(10)].map((_, i) => (
            <linearGradient key={`gradient-${i}`} id={`gradient-${i}`} x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="rgba(139, 92, 246, 0.8)" />
              <stop offset="50%" stopColor="rgba(59, 130, 246, 0.6)" />
              <stop offset="100%" stopColor="rgba(16, 185, 129, 0.4)" />
            </linearGradient>
          ))}
        </defs>
      </svg>
    </div>
  )
}
