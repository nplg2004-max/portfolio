import { motion } from 'framer-motion'

const QUICK_LINKS = [
  { label: 'Home', href: '#hero-section' },
  { label: 'About Me', href: '#bio-section' },
  { label: 'Services', href: '#services' },
  { label: 'Works', href: '#work' },
  { label: 'Contact', href: '#contact' },
]

export default function MainFooter() {
  return (
    <footer
      aria-label="Main Site Footer"
      className="relative w-full bg-[#111111] text-[#faf7f3] pt-24 pb-8 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* ── Social Icons Row ── */}
        <div className="flex items-center gap-3 mb-20">
          {/* X / Twitter */}
          <a
            href="https://x.com"
            target="_blank"
            rel="noreferrer"
            aria-label="X Twitter"
            className="w-10 h-10 rounded-xl bg-neutral-800/80 hover:bg-neutral-700 flex items-center justify-center text-neutral-300 hover:text-white transition-colors"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>

          {/* Instagram */}
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="w-10 h-10 rounded-xl bg-neutral-800/80 hover:bg-neutral-700 flex items-center justify-center text-neutral-300 hover:text-white transition-colors"
          >
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="w-10 h-10 rounded-xl bg-neutral-800/80 hover:bg-neutral-700 flex items-center justify-center text-neutral-300 hover:text-white transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
            </svg>
          </a>

          {/* YouTube */}
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noreferrer"
            aria-label="YouTube"
            className="w-10 h-10 rounded-xl bg-neutral-800/80 hover:bg-neutral-700 flex items-center justify-center text-neutral-300 hover:text-white transition-colors"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
          </a>
        </div>

        {/* ── Main Footer Columns ── */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start pb-20">
          {/* Left: Scaling start-ups heading */}
          <div className="md:col-span-6">
            <h2
              className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl text-[#faf7f3] leading-tight m-0 max-w-sm tracking-tight"
              style={{ fontFamily: '"Archivo", system-ui, sans-serif' }}
            >
              Scaling Start-ups for Growth.
            </h2>
          </div>

          {/* Middle: /Quick links */}
          <div className="md:col-span-3 space-y-4">
            <span className="text-xs font-body uppercase tracking-wider text-neutral-400 block">
              /Quick links
            </span>
            <div className="flex flex-wrap gap-2">
              {QUICK_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="px-4 py-2 rounded-xl bg-neutral-800/90 hover:bg-neutral-700 text-neutral-200 hover:text-white text-xs font-medium font-body transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Right: /Contact */}
          <div className="md:col-span-3 space-y-4">
            <span className="text-xs font-body uppercase tracking-wider text-neutral-400 block">
              /Contact
            </span>
            <a
              href="mailto:Mejed@Templyo.io"
              className="block font-body text-sm font-medium text-neutral-300 hover:text-white transition-colors"
            >
              Mejed@Templyo.io
            </a>
          </div>
        </div>
      </div>

      {/* ── Giant MAJD Watermark Typography ── */}
      <div className="w-full select-none pointer-events-none overflow-hidden flex justify-center -mb-6 md:-mb-14">
        <motion.span
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-heading font-black text-[24vw] leading-none tracking-tighter text-neutral-800/40 uppercase block"
          style={{ fontFamily: '"Archivo", system-ui, sans-serif' }}
        >
          MAJD
        </motion.span>
      </div>
    </footer>
  )
}
