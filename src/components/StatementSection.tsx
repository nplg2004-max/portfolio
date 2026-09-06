import { motion } from 'framer-motion'

export default function StatementSection() {
  const statement =
    'From idea to launch. Clean, scalable digital products built to move fast, stay simple, and perform in real-world use, driven by clarity, structured systems, and intentional design.'

  return (
    <section
      id="statement-section"
      aria-label="Manifesto"
      className="relative w-full max-w-5xl mx-auto px-6 py-32 md:py-52 flex items-center justify-center text-center"
    >
      <motion.h3
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[46px] leading-[1.25] md:leading-[1.2] tracking-tight text-text-primary m-0"
        style={{ fontFamily: '"Archivo", system-ui, sans-serif' }}
      >
        {statement}
      </motion.h3>
    </section>
  )
}
