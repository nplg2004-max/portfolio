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
      className="relative w-full min-h-screen overflow-hidden px-4 pt-[15vh] pb-0 flex flex-col justify-between"
    >
      {/* ── Text block — left-aligned ── */}
      <div className="relative w-full text-center select-none">

        {/* ── Star icon — Framer sparkle PNG ── */}
        <span
          aria-hidden="true"
          className="absolute"
          style={{ top: '-20%', left: '-0.05em', zIndex: 2 }}
        >
          <img
            src="https://framerusercontent.com/images/OLDYsHB9RMavvQrkVRNy08ZXYE.png"
            alt=""
            width={20}
            height={20}
            style={{
              display: 'block',
              width: 'clamp(60px, 12vw, 150px)',
              height: 'clamp(60px, 12vw, 150px)',
              objectFit: 'cover',
              objectPosition: 'center',
            }}
          />
        </span>

        {/* SOFTWARE */}
        <p
          className="font-heading uppercase text-text-primary m-0"
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
          className="font-heading uppercase text-text-primary m-0"
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

        {/* ── Lightning bolt — Framer 3D PNG ── */}
        <span
          aria-hidden="true"
          className="absolute"
          style={{ top: '73%', bottom: '0em', right: '2%', zIndex: 2 }}
        >
          <img
            src="https://framerusercontent.com/images/lIIjRX5gxRdY7UWw5wqIXicPOA.png"
            alt=""
            width={150}
            height={150}
            style={{
              display: 'block',
              width: 'clamp(60px, 12vw, 150px)',
              height: 'clamp(60px, 12vw, 150px)',
              objectFit: 'contain',
              objectPosition: 'center',
              transform: 'rotate(15deg)',
            }}
          />
        </span>
      </div>

      {/* ── Portrait image — bottom-centre, partially cropped ── */}
      <img
        src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=500&q=80"
        alt="Portrait"
        width={250}
        height={280}
        className="absolute object-cover"
        style={{
          borderRadius: 20,
          zIndex: 8,
          top: '80%',
          left: '50%',
          transform: 'translate(-50%, -30%)',
          filter: 'grayscale(100%)',
          objectPosition: 'center top',
        }}
      />

      {/* ── Footer ── */}
      <footer
        className="absolute bottom-4 left-8 right-8 flex justify-between items-baseline pointer-events-none select-none"
        style={{ zIndex: 10 }}
      >
        <span className="font-heading font-semibold text-[70px] tracking-normal text-text-primary">
          ©2026
        </span>
        <span className="inline-block origin-bottom scale-y-[0.9] font-body font-normal text-[20px] tracking-tight text-text-primary uppercase">
          /CREATING SINCE 2020
        </span>
      </footer>
    </section>
  )
}
