// Footer — matches design-system/screens/sections/home-section-1.png
//
// Layout (LAYOUT.md § footer):
//   position: fixed to viewport bottom
//   Two children pinned to bottom-left and bottom-right
//
// Typography (DESIGN.md § 3):
//   ©2026  → Archivo Black (900), ~40–48px, text-primary (#000000)
//   /CREATING SINCE 2020 → Inter (400), text-muted (#767676), small
//
// Padding: 30px (--spacing-7-5) from edges to match the screenshot margins

export default function Footer() {
  return (
    <footer
      aria-label="Site footer"
      className="fixed bottom-0 left-0 right-0 pointer-events-none"
      style={{ zIndex: 1 /* --z-raised */ }}
    >
      <div className="flex items-end justify-between w-full px-8 pb-8">
        {/* ── Copyright — bottom-left ── */}
        <p
          className="font-heading text-text-primary m-0 pointer-events-auto"
          style={{
            fontWeight: 900,
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            lineHeight: 1,
            letterSpacing: '-0.02em',
          }}
        >
          ©2026
        </p>

        {/* ── Creating since — bottom-right ── */}
        <p
          className="font-body text-text-muted m-0 pointer-events-auto"
          style={{
            fontWeight: 400,
            fontSize: '0.75rem',   /* --text-xs / 12px */
            letterSpacing: '0.05em',
            lineHeight: 1,
          }}
        >
          /CREATING SINCE 2020
        </p>
      </div>
    </footer>
  )
}
