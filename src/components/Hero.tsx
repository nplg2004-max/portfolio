// Hero section — final version
// Matches design-system/screens/sections/home-section-1.png
//
// · Archivo Black (900) for both words, solid #000000
// · line-height 0.88, letter-spacing -0.02em — tight stacked layout
// · Absolute portrait <img /> with grayscale filter, z-overlay (8)
// · 4-pointed star SVG (top-left) and lightning bolt SVG (bottom-right)
//   Both have a subtle purple chromatic-aberration drop-shadow to match
//   the 3D icon treatment in the original.

export default function Hero() {
  return (
    <section
      id="hero-section"
      aria-label="Hero"
      className="relative flex flex-row justify-center items-center w-full flex-1 overflow-visible px-4 py-10"
    >
      {/* ── Text block (relative anchor for absolute children) ── */}
      <div className="relative w-full text-center select-none">

        {/* ── Star icon — top-left of text block ── */}
        <span
          aria-hidden="true"
          className="absolute"
          style={{ top: '-0.15em', left: '2%', zIndex: 2 }}
        >
          <svg
            width="80"
            height="80"
            viewBox="0 0 80 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              filter:
                'drop-shadow(-3px -2px 0px rgba(120,80,200,0.55)) drop-shadow(2px 3px 0px rgba(80,120,240,0.35))',
            }}
          >
            {/* 4-pointed sparkle/star */}
            <path
              d="M40 2 C40 2 43 30 68 40 C43 50 40 78 40 78 C40 78 37 50 12 40 C37 30 40 2 40 2Z"
              fill="#111111"
            />
          </svg>
        </span>

        {/* SOFTWARE */}
        <p
          className="font-heading uppercase text-text-primary m-0"
          style={{
            fontWeight: 800,          /* --framer-font-weight: 800 */
            fontSize: 'clamp(2.875rem, 15vw, 14rem)', /* 46px floor (mobile ≤809px spec) */
            letterSpacing: '-0.02em', /* --framer-letter-spacing: -.02em */
            lineHeight: '0.9em',      /* --framer-line-height: .9em */
          }}
        >
          SOFTWARE
        </p>

        {/* ENGINEER */}
        <p
          className="font-heading uppercase text-text-primary m-0"
          style={{
            fontWeight: 800,          /* --framer-font-weight: 800 */
            fontSize: 'clamp(2.875rem, 15vw, 14rem)', /* 46px floor (mobile ≤809px spec) */
            letterSpacing: '-0.02em', /* --framer-letter-spacing: -.02em */
            lineHeight: '0.9em',      /* --framer-line-height: .9em */
          }}
        >
          ENGINEER
        </p>

        {/* ── Lightning bolt — bottom-right of text block ── */}
        <span
          aria-hidden="true"
          className="absolute"
          style={{ bottom: '-0.1em', right: '1%', zIndex: 2 }}
        >
          <svg
            width="70"
            height="90"
            viewBox="0 0 70 90"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              filter:
                'drop-shadow(-3px -2px 0px rgba(120,80,200,0.55)) drop-shadow(2px 3px 0px rgba(80,120,240,0.35))',
            }}
          >
            {/* Lightning bolt shape */}
            <path
              d="M48 4 L18 46 L32 46 L22 86 L56 38 L40 38 Z"
              fill="#111111"
            />
          </svg>
        </span>
      </div>

      {/* ── Portrait image — absolute centre, z-overlay ── */}
      <img
        src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=500&q=80"
        alt="Portrait"
        width={250}
        height={220}
        className="absolute object-cover"
        style={{
          borderRadius: 20,           /* --radius-xl */
          zIndex: 8,                  /* --z-overlay */
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          filter: 'grayscale(100%)',
          objectPosition: 'center top',
        }}
      />
    </section>
  )
}
