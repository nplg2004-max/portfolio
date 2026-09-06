import { motion } from 'framer-motion'

export default function ThoughtsSection() {
  return (
    <section
      id="thoughts"
      aria-label="Thoughts and Articles"
      className="relative w-full max-w-7xl mx-auto px-6 py-20 md:py-32"
    >
      {/* ── Section Title ── */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
        className="font-heading font-bold text-5xl sm:text-6xl md:text-7xl tracking-tight text-text-primary mb-12 m-0"
        style={{ fontFamily: '"Archivo", system-ui, sans-serif' }}
      >
        Thoughts
      </motion.h2>

      {/* ── 3 Editorial Cards Grid ── */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1 */}
        <motion.article
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          className="group relative rounded-[28px] overflow-hidden min-h-[420px] p-8 flex flex-col justify-end text-white cursor-pointer shadow-md hover:shadow-xl transition-shadow duration-300"
        >
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80"
            alt="Modern skyscraper architecture"
            className="absolute inset-0 w-full h-full object-cover grayscale brightness-75 group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

          <div className="relative z-10 space-y-2">
            <span className="text-[11px] uppercase tracking-widest text-neutral-300 font-medium font-body block">
              May 5, 2025
            </span>
            <h3 className="font-heading font-bold text-2xl leading-snug m-0">
              Building Trust Through Clear Design
            </h3>
            <p className="font-body text-xs text-neutral-300 leading-relaxed m-0 pt-1">
              How thoughtful visual choices create a stronger sense of reliability for modern brands.
            </p>
          </div>
        </motion.article>

        {/* Card 2 */}
        <motion.article
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
          className="group relative rounded-[28px] overflow-hidden min-h-[420px] p-8 flex flex-col justify-end text-white cursor-pointer shadow-md hover:shadow-xl transition-shadow duration-300"
        >
          <img
            src="https://images.unsplash.com/photo-1476820865390-c52aeebb9891?w=800&q=80"
            alt="Subway train motion blur"
            className="absolute inset-0 w-full h-full object-cover grayscale brightness-75 group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

          <div className="relative z-10 space-y-2">
            <span className="text-[11px] uppercase tracking-widest text-neutral-300 font-medium font-body block">
              Jun 16, 2025
            </span>
            <h3 className="font-heading font-bold text-2xl leading-snug m-0">
              The Role of Art Direction in Branding
            </h3>
            <p className="font-body text-xs text-neutral-300 leading-relaxed m-0 pt-1">
              Why visual direction helps brands create emotion and a distinct point of view.
            </p>
          </div>
        </motion.article>

        {/* Card 3: Dark Editorial Card */}
        <motion.article
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
          className="rounded-[28px] bg-[#111111] p-8 md:p-10 flex flex-col justify-between text-white min-h-[420px] shadow-md"
        >
          <div>
            <h3 className="font-heading font-bold text-2xl md:text-3xl leading-snug m-0 text-neutral-100">
              See how we shape brands with clarity and craft—explore our blog
            </h3>
          </div>

          <div className="pt-8">
            <a
              href="#thoughts"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-white/25 hover:border-white hover:bg-white/10 transition-all text-xs font-medium font-body text-neutral-200"
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
            </a>
          </div>
        </motion.article>
      </div>

      {/* ── Let's talk section ── */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
        className="mt-28 md:mt-36"
        id="contact"
      >
        <h2
          className="font-heading font-bold text-5xl sm:text-6xl md:text-7xl tracking-tight text-text-primary mb-6 m-0"
          style={{ fontFamily: '"Archivo", system-ui, sans-serif' }}
        >
          Let’s talk.
        </h2>
        <a
          href="mailto:Mejed@Templyo.io"
          className="font-body text-lg md:text-xl text-text-muted hover:text-text-primary transition-colors underline underline-offset-4"
        >
          Mejed@Templyo.io
        </a>
      </motion.div>
    </section>
  )
}
