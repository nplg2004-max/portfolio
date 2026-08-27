// Navbar — pill-shaped centered navigation
// Matches design-system/screens/sections/home-section-1.png exactly:
// · Dark (#111111) pill container, horizontally centered
// · "Majd" label (Archivo bold, white) on the left
// · ··· menu button (small rounded square, white border) on the right
// Interactions from INTERACTIONS.md:
// · transition: all on every interactive element
// · focus: outline rgb(16,16,16) auto 1px

export default function Navbar() {
  return (
    <div className="w-full flex justify-center pt-6 px-4">
      <nav
        aria-label="Main navigation"
        className="
          flex items-center justify-between
          bg-[#111111]
          rounded-[89px]
          px-5 py-3
          w-full max-w-[300px]
          gap-8
        "
      >
        {/* Brand name */}
        <a
          href="/"
          className="
            font-heading font-bold text-base text-white
            leading-none
            transition-all
            hover:opacity-80
            focus-visible:outline focus-visible:outline-[1px] focus-visible:outline-[#101010]
          "
        >
          Majd
        </a>

        {/* Menu button — small rounded-square pill with border */}
        <button
          type="button"
          aria-label="Open menu"
          className="
            flex items-center justify-center
            w-8 h-8
            rounded-[8px]
            border border-white/20
            text-white
            transition-all
            hover:border-white/50 hover:bg-white/10
            focus-visible:outline focus-visible:outline-[1px] focus-visible:outline-[#101010]
          "
        >
          {/* Three-dot ellipsis icon (···) */}
          <svg
            width="16"
            height="4"
            viewBox="0 0 16 4"
            fill="none"
            aria-hidden="true"
          >
            <circle cx="2" cy="2" r="1.5" fill="white" />
            <circle cx="8" cy="2" r="1.5" fill="white" />
            <circle cx="14" cy="2" r="1.5" fill="white" />
          </svg>
        </button>
      </nav>
    </div>
  )
}
