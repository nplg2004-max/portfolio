import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Hero from './Hero'
import BioSection from './BioSection'

export default function HeroBioSection() {
  const containerRef = useRef<HTMLDivElement>(null)

  // Track scroll progress through the combined 200vh Hero & Bio sequence
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  // 1. 3D vertical rotation around Y-axis (0° front view in Hero → 180° back view in Bio)
  const rotateY = useTransform(scrollYProgress, [0, 1], [0, 180])

  // 2. Dynamic scale expansion: starts smaller (0.60) in Hero, expands to 1.0 in Bio center
  const scale = useTransform(scrollYProgress, [0, 1], [0.6, 1])

  // 3. Vertical position: starts at 26vh (resting above bottom edge, overlapping ENGINEER, aligned with footer),
  // then smoothly glides up to center alignment (0vh) in the Bio section
  const y = useTransform(scrollYProgress, [0, 1], ['26vh', '0vh'])

  return (
    <div
      ref={containerRef}
      id="hero-bio-container"
      className="relative w-full"
      style={{ minHeight: '200vh' }}
    >
      {/* ── Sticky 3D Avatar Track (z-10, behind SOFTWARE ENGINEER text) ── */}
      <div
        className="absolute top-0 left-0 w-full h-full pointer-events-none z-10 overflow-visible"
        aria-hidden="true"
      >
        <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
          {/* 3D Perspective container */}
          <div
            style={{
              perspective: 1200,
              transformStyle: 'preserve-3d',
            }}
            className="flex items-center justify-center"
          >
            {/* The rotating and expanding card */}
            <motion.div
              style={{
                rotateY,
                scale,
                y,
                transformStyle: 'preserve-3d',
              }}
              className="relative w-[280px] sm:w-[320px] md:w-[360px] lg:w-[400px] h-[320px] sm:h-[365px] md:h-[410px] lg:h-[456px] rounded-[20px] shadow-[0_12px_36px_rgba(0,0,0,0.06)]"
            >
              {/* ── FRONT FACE: Grayscale Portrait (visible in Hero at 0°) ── */}
              <motion.div
                style={{
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden',
                  borderRadius: 20,
                }}
                className="absolute inset-0 w-full h-full overflow-hidden bg-[#e5e5e5] rounded-[20px] border border-black/5"
              >
                <img
                  src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&q=80"
                  alt="Portrait Front"
                  className="w-full h-full object-cover object-top filter grayscale contrast-110"
                />
              </motion.div>

              {/* ── BACK FACE: Crimson Bio Portrait (visible in Bio at 180°) ── */}
              <motion.div
                style={{
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden',
                  transform: 'rotateY(180deg)',
                  borderRadius: 20,
                }}
                className="absolute inset-0 w-full h-full overflow-hidden bg-[#991b1b] rounded-[20px] border border-black/5"
              >
                {/* Crimson color grading layer */}
                <div className="absolute inset-0 bg-[#dc2626] mix-blend-multiply opacity-85 z-10 pointer-events-none" />
                <img
                  src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&q=80"
                  alt="Portrait Back"
                  className="w-full h-full object-cover object-top filter contrast-110 brightness-105"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ── Normal Flow Content: Hero (100vh) & Bio (100vh) ── */}
      <div className="relative z-20 w-full">
        <Hero />
        <BioSection />
      </div>
    </div>
  )
}
