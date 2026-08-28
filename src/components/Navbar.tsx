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
        className={[
          "flex items-center justify-between", // Layout behavior (keep this as-is)
          "bg-[#111111]",                      // Change navbar background color here
          "rounded-xl",                       // Change curvature here (e.g. rounded-full, rounded-[89px])
          "px-5 py-3",                         // Change inner padding (horizontal px, vertical py)
          "w-full max-w-[325px]",              // Change the maximum width of the navbar here
          "gap-8"                              // Change the gap between the logo and button here
        ].join(" ")}
      >
        {/* Brand name */}
        <a
          href="/"
          className={[
            "font-heading font-bold",          // Change font family and weight here
            "text-[22px]",                     // Change font size here (e.g., text-xl, text-[24px])
            "text-[#FAF7F3]",                  // Change text color here
            "tracking-tight",                 // Change letter spacing here (e.g., tracking-tight, tracking-widest, tracking-[2px])
            "leading-none",                    // Line height
            "transition-all",                  // Enables smooth animation on hover
            "hover:opacity-80",                // Change hover effect here (e.g., hover:text-blue-500)
            "focus-visible:outline focus-visible:outline-[1px] focus-visible:outline-[#101010]" // Accessibility focus styles
          ].join(" ")}
        >
          Pansilu
        </a>

        {/* Menu button — small solid pill */}
        <button
          type="button"
          aria-label="Open menu"
          className={[
            "flex items-center justify-center", // Layout behavior to center the dots
            "w-[44px] h-[36px]",                         // Change button width (w-11) and height (h-7) here
            "rounded-[10px]",                   // Change button curvature here (e.g., rounded-full)
            "bg-[#FAF7F3]",                     // Change button background color here
            "text-[#111111]",                   // Change color of the three dots here
            "transition-all",                   // Enables smooth animation
            "hover:opacity-80",                 // Change hover effect here
            "focus-visible:outline focus-visible:outline-[1px] focus-visible:outline-[#101010]" // Accessibility focus styles
          ].join(" ")}
        >
          {/* Three-dot ellipsis icon (···) */}
          <svg
            width="16" // Change the overall width of the SVG container here
            height="4" // Change the overall height of the SVG container here
            viewBox="0 0 16 4"
            fill="none"
            aria-hidden="true"
          >
            {/* cx = horizontal position, cy = vertical position, r = size of the dot */}
            <circle cx="2" cy="2" r="1.5" fill="currentColor" />  {/* Left dot */}
            <circle cx="8" cy="2" r="1.5" fill="currentColor" />  {/* Middle dot */}
            <circle cx="14" cy="2" r="1.5" fill="currentColor" /> {/* Right dot */}
          </svg>
        </button>
      </nav>
    </div>
  )
}
