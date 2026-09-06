import { motion } from 'framer-motion'

export default function BioSection() {
  return (
    <section
      id="bio-section"
      aria-label="About Majd"
      className="relative w-full max-w-7xl mx-auto px-6 py-28 md:py-40 flex flex-col justify-center"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
        {/* ── Left Column: Hey! + Short Bio ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          className="lg:col-span-4 flex flex-col justify-between h-full space-y-12 lg:space-y-36"
        >
          <h2
            className="font-heading font-bold text-6xl md:text-7xl lg:text-8xl tracking-tight text-text-primary m-0"
            style={{ fontFamily: '"Archivo", system-ui, sans-serif' }}
          >
            Hey!
          </h2>

          <p className="font-body font-bold text-lg md:text-xl leading-snug text-text-primary max-w-xs">
            I’m Majd, a builder based in Syria, currently working on Templyo, a
            platform for high-quality Framer templates.
          </p>
        </motion.div>

        {/* ── Center Column: Red Portrait ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="lg:col-span-4 flex justify-center items-center"
        >
          <div className="relative w-full max-w-[360px] aspect-[4/5] rounded-[32px] overflow-hidden shadow-2xl bg-[#991b1b]">
            {/* Cinematic crimson backdrop glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#7f1d1d] via-[#dc2626] to-[#ef4444] opacity-80 mix-blend-multiply" />
            <img
              src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&q=80"
              alt="Majd Portrait"
              className="w-full h-full object-cover object-center relative z-10 filter contrast-125"
              style={{
                mixBlendMode: 'luminosity',
              }}
            />
            {/* Ambient vignette */}
            <div className="absolute inset-0 z-20 bg-radial from-transparent via-black/20 to-black/60 pointer-events-none" />
          </div>
        </motion.div>

        {/* ── Right Column: Description + CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
          className="lg:col-span-4 flex flex-col justify-end space-y-6 lg:pl-6"
        >
          <p className="font-body text-base md:text-lg leading-relaxed text-text-primary">
            I’m a software engineer and Framer creator with a strong focus on
            building modern, scalable, and conversion-driven web experiences.
          </p>

          <p className="font-body text-base md:text-lg leading-relaxed text-text-primary">
            Over the years, I’ve created and shipped multiple SaaS products and
            Framer templates used by global customers, helping them launch
            faster.
          </p>

          <div className="pt-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-[#545454]/30 bg-white/40 hover:bg-white hover:border-[#131313] transition-all duration-200 text-sm font-medium font-body text-text-primary shadow-xs"
            >
              <span>Get Started</span>
              <svg
                width="14"
                height="14"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="transform transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
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
        </motion.div>
      </div>
    </section>
  )
}
