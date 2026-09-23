import { motion } from 'framer-motion'

export default function BioSection() {
  return (
    <section
      id="bio-section"
      aria-label="About"
      className="relative w-full max-w-[1180px] mx-auto px-6 py-24 md:py-32 flex flex-col justify-center min-h-screen"
    >
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-12 lg:gap-8 w-full min-h-[456px]">
        {/* ── Left Column: Hey! at top, Short Bio at bottom ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          className="w-full lg:w-[300px] flex flex-col justify-between self-stretch flex-shrink-0 min-h-[280px] lg:min-h-[456px]"
        >
          <h2
            className="font-heading font-semibold text-[44px] md:text-[62px] lg:text-[76px] tracking-[-0.02em] leading-none text-[#000000] m-0"
            style={{ fontFamily: '"Archivo", system-ui, sans-serif' }}
          >
            Hey!
          </h2>

          <p
            className="font-heading font-semibold text-[19px] md:text-[21px] lg:text-[22px] tracking-[-0.04em] leading-[1.4em] text-[#111111] max-w-[300px] m-0"
            style={{ fontFamily: '"Archivo", system-ui, sans-serif' }}
          >
            I’m Majd, a builder based in Syria, currently working on Templyo, a
            platform for high-quality Framer templates.
          </p>
        </motion.div>

        {/* ── Center Column: Layout Spacer matching the sticky 3D card ── */}
        <div className="hidden lg:flex justify-center items-center pointer-events-none flex-shrink-0 w-[400px] h-[456px]">
          <div className="w-[400px] h-[456px] opacity-0" />
        </div>

        {/* ── Right Column: Description + CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
          className="w-full lg:w-[360px] flex flex-col justify-end gap-5 flex-shrink-0 relative z-[30] pointer-events-auto"
        >
          <p
            className="font-heading font-normal text-[16px] md:text-[17px] lg:text-[18px] tracking-[-0.04em] leading-[1.4em] text-[#111111] max-w-[360px] m-0"
            style={{ fontFamily: '"Archivo", system-ui, sans-serif' }}
          >
            I’m a software engineer and Framer creator with a strong focus on
            building modern, scalable, and conversion-driven web experiences.
          </p>

          <p
            className="font-heading font-normal text-[16px] md:text-[17px] lg:text-[18px] tracking-[-0.04em] leading-[1.4em] text-[#111111] max-w-[360px] m-0"
            style={{ fontFamily: '"Archivo", system-ui, sans-serif' }}
          >
            Over the years, I’ve created and shipped multiple SaaS products and
            Framer templates used by global customers, helping them launch
            faster.
          </p>

          <div className="pt-2">
            <a
              href="#contact"
              className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-xl border border-[#545454]/30 bg-white/40 hover:bg-white hover:border-[#131313] transition-all duration-200 text-[14px] font-medium text-[#111111] shadow-xs group"
              style={{ fontFamily: '"Archivo", system-ui, sans-serif' }}
            >
              <span>Get Started</span>
              <svg
                width="12"
                height="12"
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
