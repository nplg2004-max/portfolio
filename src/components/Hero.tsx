// Hero section — final version
// Matches Framer reference: left-aligned text, portrait at bottom-centre
//
// · Archivo ExtraBold (800) for both words, solid #000000
// · line-height 0.9em, letter-spacing -0.02em — tight stacked layout
// · Portrait <img /> bottom-anchored, grayscale filter, z-overlay (8)
// · 4-pointed star SVG (top-left, 100px) and lightning bolt SVG (right of ENGINEER, 80×100px)
//   Both have a subtle purple chromatic-aberration drop-shadow.

export default function Hero() {
  return (
    <section
      id="hero-section"
      aria-label="Hero"
      className="relative w-full h-screen overflow-hidden px-4 flex flex-col justify-center items-center select-none"
    >
      {/* ── Central Text block — tightly wrapping SOFTWARE ENGINEER ── */}
      <div className="relative inline-flex flex-col items-center justify-center mx-auto text-center z-20">

        {/* ── Star icon — Framer sparkle PNG (anchored to top-left of 'S') ── */}
        <span
          aria-hidden="true"
          className="absolute -top-10 -left-10 sm:-top-14 sm:-left-14 md:-top-18 md:-left-16 lg:-top-20 lg:-left-20 pointer-events-none select-none z-30"
        >
          <img
            src="https://framerusercontent.com/images/OLDYsHB9RMavvQrkVRNy08ZXYE.png"
            alt=""
            width={140}
            height={140}
            style={{
              display: 'block',
              width: 'clamp(65px, 9.5vw, 140px)',
              height: 'clamp(65px, 9.5vw, 140px)',
              objectFit: 'contain',
              objectPosition: 'center',
            }}
          />
        </span>

        {/* SOFTWARE */}
        <p
          className="font-heading uppercase text-text-primary m-0 tracking-tight"
          style={{
            fontFamily: '"Archivo", system-ui, sans-serif',
            fontWeight: 800,
            fontSize: 'clamp(46px, 12vw, 175px)',
            letterSpacing: '-0.02em',
            lineHeight: '0.9em',
          }}
        >
          SOFTWARE
        </p>

        {/* ENGINEER */}
        <p
          className="font-heading uppercase text-text-primary m-0 tracking-tight"
          style={{
            fontFamily: '"Archivo", system-ui, sans-serif',
            fontWeight: 800,
            fontSize: 'clamp(46px, 12vw, 175px)',
            letterSpacing: '-0.02em',
            lineHeight: '0.9em',
          }}
        >
          ENGINEER
        </p>

        {/* ── Lightning bolt — Framer 3D PNG (anchored to bottom-right of 'R') ── */}
        <span
          aria-hidden="true"
          className="absolute -bottom-8 -right-8 sm:-bottom-12 sm:-right-12 md:-bottom-14 md:-right-16 lg:-bottom-16 lg:-right-18 pointer-events-none select-none z-30"
        >
          <img
            src="https://framerusercontent.com/images/lIIjRX5gxRdY7UWw5wqIXicPOA.png"
            alt=""
            width={160}
            height={160}
            style={{
              display: 'block',
              width: 'clamp(70px, 10.5vw, 155px)',
              height: 'clamp(70px, 10.5vw, 155px)',
              objectFit: 'contain',
              objectPosition: 'center',
              transform: 'rotate(16deg)',
            }}
          />
        </span>
      </div>

      {/* ── Footer ── */}
      <footer
        className="absolute bottom-6 left-6 right-6 md:left-10 md:right-10 flex justify-between items-end pointer-events-none select-none z-20"
      >
        <span className="font-heading font-semibold text-[42px] sm:text-[54px] md:text-[64px] lg:text-[72px] leading-none text-text-primary tracking-tight">
          ©2026
        </span>
        <span className="font-body font-normal text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] tracking-tight text-text-primary uppercase leading-none pb-1 sm:pb-2">
          /CREATING SINCE 2020
        </span>
      </footer>
    </section>
  )
}
