import { motion } from 'framer-motion'

const TESTIMONIAL_ICONS = [
  // Labyrinth / Arch icon
  (
    <svg width="44" height="44" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 40V24C12 17.3726 17.3726 12 24 12C30.6274 12 36 17.3726 36 24V40" stroke="white" strokeWidth="3" strokeLinecap="round" />
      <path d="M18 40V24C18 20.6863 20.6863 18 24 18C27.3137 18 30 20.6863 30 24V40" stroke="white" strokeWidth="3" strokeLinecap="round" />
      <path d="M24 40V28" stroke="white" strokeWidth="3" strokeLinecap="round" />
    </svg>
  ),
  // Sunburst / Aperture icon
  (
    <svg width="44" height="44" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="24" r="7" stroke="white" strokeWidth="3" />
      <path d="M24 4V10M24 38V44M4 24H10M38 24H44M9.85 9.85L14.1 14.1M33.9 33.9L38.15 38.15M9.85 38.15L14.1 33.9M33.9 14.1L38.15 9.85" stroke="white" strokeWidth="3" strokeLinecap="round" />
    </svg>
  ),
  // Segmented vortex / propeller icon
  (
    <svg width="44" height="44" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 10L24 18L32 10M38 16L30 24L38 32M32 38L24 30L16 38M10 32L18 24L10 16" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  // Monogram / Folded geometric ribbon icon
  (
    <svg width="44" height="44" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14 38V14L34 14C34 14 34 26 26 26H14" stroke="white" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M26 26L34 38" stroke="white" strokeWidth="3.5" strokeLinecap="round" />
    </svg>
  ),
]

export default function ProjectsSection() {
  return (
    <section
      id="work"
      aria-label="Featured Projects"
      className="relative w-full max-w-7xl mx-auto px-6 py-20 md:py-32"
    >
      {/* ── Section Header ── */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 md:mb-16 gap-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          className="font-heading font-bold text-5xl sm:text-6xl md:text-7xl tracking-tight text-text-primary m-0 max-w-md leading-[0.95]"
          style={{ fontFamily: '"Archivo", system-ui, sans-serif' }}
        >
          Featured
          <br />
          Projects
        </motion.h2>

        <motion.a
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
          href="#work"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-[#545454]/30 bg-white/50 hover:bg-white hover:border-[#131313] transition-all text-xs font-medium font-body text-text-primary self-start sm:self-auto shadow-xs"
        >
          <span>View All Work</span>
          <svg
            width="12"
            height="12"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.5 11.5L11.5 4.5M11.5 4.5H5.5M11.5 4.5V10.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.a>
      </div>

      {/* ── 2-Column Projects Bento ── */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
        {/* ── Card 1: Kavi ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          className="group cursor-pointer flex flex-col"
        >
          <div className="w-full aspect-[16/11] rounded-[28px] overflow-hidden p-6 md:p-10 relative flex items-center justify-center bg-gradient-to-tr from-[#f472b6] via-[#ec4899] to-[#db2777] shadow-lg group-hover:shadow-xl transition-shadow duration-300">
            {/* UI Mockup card */}
            <div className="w-full h-full bg-white/95 rounded-2xl shadow-xl p-6 flex flex-col justify-between overflow-hidden border border-white/60 transform group-hover:scale-[1.02] transition-transform duration-300">
              <div className="flex items-center justify-between text-xs text-neutral-500 font-medium">
                <span className="flex items-center gap-1.5 font-bold text-neutral-800">
                  <span className="w-2.5 h-2.5 rounded-full bg-pink-500 inline-block" />
                  Kavi
                </span>
                <span className="px-2.5 py-1 rounded-full bg-pink-50 text-pink-600 text-[10px]">
                  Get Started
                </span>
              </div>
              <div className="my-auto py-2">
                <h4 className="text-xl md:text-2xl font-bold font-heading text-neutral-900 leading-tight">
                  Design <span className="text-pink-600">Smarter.</span>
                  <br />
                  Build Faster.
                </h4>
                <p className="text-[11px] text-neutral-500 mt-1 max-w-[200px]">
                  AI-powered, high-converting site templates for fast-moving founders.
                </p>
              </div>
              <div className="pt-2 border-t border-neutral-100 flex items-center justify-between text-[10px] text-neutral-400">
                <span>Launch in Minutes</span>
                <span className="font-semibold text-neutral-700">★ 4.9 (120+ reviews)</span>
              </div>
            </div>
          </div>

          <div className="mt-5 space-y-1">
            <h3
              className="font-heading font-bold text-2xl md:text-3xl text-text-primary m-0"
              style={{ fontFamily: '"Archivo", system-ui, sans-serif' }}
            >
              Kavi
            </h3>
            <p className="font-body text-xs md:text-sm text-text-muted m-0">
              AI Framer Template
            </p>
          </div>
        </motion.div>

        {/* ── Card 2: PostWing ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
          className="group cursor-pointer flex flex-col"
        >
          <div className="w-full aspect-[16/11] rounded-[28px] overflow-hidden p-6 md:p-10 relative flex items-center justify-center bg-gradient-to-tr from-[#3b82f6] via-[#2563eb] to-[#1d4ed8] shadow-lg group-hover:shadow-xl transition-shadow duration-300">
            {/* UI Mockup card */}
            <div className="w-full h-full bg-white/95 rounded-2xl shadow-xl p-6 flex flex-col justify-between overflow-hidden border border-white/60 transform group-hover:scale-[1.02] transition-transform duration-300">
              <div className="flex items-center justify-between text-xs text-neutral-500 font-medium">
                <span className="flex items-center gap-1.5 font-bold text-neutral-800">
                  <span className="w-2.5 h-2.5 rounded-full bg-blue-600 inline-block" />
                  PostWing
                </span>
                <span className="px-2.5 py-1 rounded-full bg-blue-50 text-blue-600 text-[10px]">
                  Open dashboard
                </span>
              </div>
              <div className="my-auto py-2">
                <h4 className="text-xl md:text-2xl font-bold font-heading text-neutral-900 leading-tight">
                  Write it once.
                  <br />
                  <span className="text-blue-600">Publish everywhere.</span>
                </h4>
                <p className="text-[11px] text-neutral-500 mt-1 max-w-[220px]">
                  Stop publishing one post at a time. Write once, and schedule to all 8 platforms.
                </p>
              </div>
              <div className="pt-2 border-t border-neutral-100 flex items-center gap-3 text-[10px] text-neutral-500">
                <span className="bg-neutral-100 px-2 py-0.5 rounded">Facebook</span>
                <span className="bg-neutral-100 px-2 py-0.5 rounded">Instagram</span>
                <span className="bg-neutral-100 px-2 py-0.5 rounded">LinkedIn</span>
                <span className="bg-neutral-100 px-2 py-0.5 rounded">X / Twitter</span>
              </div>
            </div>
          </div>

          <div className="mt-5 space-y-1">
            <h3
              className="font-heading font-bold text-2xl md:text-3xl text-text-primary m-0"
              style={{ fontFamily: '"Archivo", system-ui, sans-serif' }}
            >
              PostWing
            </h3>
            <p className="font-body text-xs md:text-sm text-text-muted m-0">
              Social Media Scheduler
            </p>
          </div>
        </motion.div>
      </div>

      {/* ── Testimonials Row ── */}
      <div className="mt-28 md:mt-36">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          className="font-heading font-bold text-5xl sm:text-6xl md:text-7xl tracking-tight text-text-primary mb-12 m-0"
          style={{ fontFamily: '"Archivo", system-ui, sans-serif' }}
        >
          Testimonials
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {TESTIMONIAL_ICONS.map((iconSvg, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.45,
                delay: idx * 0.08,
                ease: [0.4, 0, 0.2, 1],
              }}
              className="aspect-square bg-[#111111] rounded-[24px] flex items-center justify-center p-8 hover:scale-[1.03] transition-transform duration-200 shadow-md"
            >
              {iconSvg}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
