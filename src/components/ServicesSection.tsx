import { motion } from 'framer-motion'

const SERVICES = [
  {
    title: 'Framer Templates',
    tags: 'Startup • Agency • SaaS',
  },
  {
    title: 'Frontend Development',
    tags: 'UI Dev • Responsive Layouts • Web Performance',
  },
  {
    title: 'Product Consulting',
    tags: 'Product Direction • Web Strategy • Technical Guidance',
  },
]

export default function ServicesSection() {
  return (
    <section
      id="services"
      aria-label="Services"
      className="relative w-full max-w-6xl mx-auto px-6 py-24 md:py-36"
    >
      <div className="flex flex-col border-t border-[#545454]/20">
        {SERVICES.map((service, idx) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.45,
              delay: idx * 0.1,
              ease: [0.4, 0, 0.2, 1],
            }}
            className="group flex flex-col md:flex-row md:items-center justify-between py-10 md:py-14 border-b border-[#545454]/20 hover:bg-black/[0.02] transition-colors duration-200 px-4 -mx-4 rounded-xl"
          >
            <h3
              className="font-heading font-bold text-3xl sm:text-4xl md:text-[42px] tracking-tight text-text-primary group-hover:translate-x-1 transition-transform duration-200 m-0"
              style={{ fontFamily: '"Archivo", system-ui, sans-serif' }}
            >
              {service.title}
            </h3>

            <p className="font-body text-xs sm:text-sm font-medium text-text-muted mt-3 md:mt-0 tracking-wider">
              {service.tags}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
