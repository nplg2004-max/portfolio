// Navbar — pill-shaped centered navigation with interactive menu
//
// Design system sources:
//   · Colors:    design-system/tokens/colors.json
//   · Motion:    design-system/references/ANIMATIONS.md
//   · Component: design-system/DESIGN.md §4 Navigation, §7 Animation
//
// Color tokens in use:
//   · Navbar bg:      #111111  (extended.color-111111)
//   · Surface:        #faf7f3  (core.surface) — menu dropdown bg
//   · Text primary:   #000000  (core.text-primary) — menu links
//   · Text on dark:   #faf7f3  (core.surface used as inverted text)
//   · Border:         #545454  (core.border) — menu dividers
//   · Text muted:     #767676  (core.text-muted) — secondary menu items
//
// Entrance animation (ANIMATIONS.md):
//   · opacity 0→1, translateY(40px)→0
//   · duration 0.15s, cubic-bezier(0.4, 0, 0.2, 1)
//
// Menu dropdown animation (DESIGN.md §7):
//   · enter: ease-out, 200ms, opacity 0→1, y -8→0
//   · exit:  ease-in,  150ms, opacity 1→0, y 0→-8
//   · No blur, no gradients (DESIGN.md Don'ts)

"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

// ─── Design-system animation constants ────────────────────────────────────────
// From ANIMATIONS.md: "use these values, never invent new durations"
const ENTRANCE_DURATION = 0.15;
const ENTRANCE_EASE: [number, number, number, number] = [0.4, 0, 0.2, 1];
const ENTRANCE_Y = 40;

// From DESIGN.md §7: "150-300ms for micro-interactions, ease-out enters, ease-in exits"
const MENU_ENTER_DURATION = 0.2;   // 200ms — within the 150-300ms window
const MENU_EXIT_DURATION = 0.15;  // 150ms — faster exit feels snappier
const MENU_Y_OFFSET = 8;           // subtle 8px slide (aligns with 4px grid ×2)

// ─── Placeholder nav links ─────────────────────────────────────────────────────
// Replace with your real routes; muted items use core.text-muted (#767676)
const NAV_LINKS: { label: string; href: string; muted?: boolean }[] = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
  { label: "Resume", href: "/resume.pdf", muted: true },
];

// ─── Button icon spring constant ─────────────────────────────────────────────
// Shared across all three dots — stiffness/damping from the design brief.
const SPRING = { type: "spring", stiffness: 400, damping: 25 } as const;

// ─── Main component ────────────────────────────────────────────────────────────
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const prefersReduced = useReducedMotion();

  // Navbar entrance — from ANIMATIONS.md
  const navbarVariants = {
    hidden: {
      opacity: 0,
      y: prefersReduced ? 0 : ENTRANCE_Y,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: prefersReduced ? 0.01 : ENTRANCE_DURATION,
        ease: ENTRANCE_EASE,
      },
    },
  };

  // Menu dropdown — from DESIGN.md §7
  const menuVariants = {
    hidden: {
      opacity: 0,
      y: prefersReduced ? 0 : -MENU_Y_OFFSET,
      // No scale, no blur — DESIGN.md Don'ts
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: prefersReduced ? 0.01 : MENU_ENTER_DURATION,
        ease: "easeOut" as const,        // DESIGN.md §7: "ease-out for enters"
      },
    },
    exit: {
      opacity: 0,
      y: prefersReduced ? 0 : -MENU_Y_OFFSET,
      transition: {
        duration: prefersReduced ? 0.01 : MENU_EXIT_DURATION,
        ease: "easeIn" as const,         // DESIGN.md §7: "ease-in for exits"
      },
    },
  };

  return (
    // Outer wrapper — position relative so the dropdown can anchor to it
    <div className="w-full flex justify-center pt-6 px-4 relative">

      {/* ── Pill navbar (entrance-animated) ── */}
      <motion.nav
        aria-label="Main navigation"
        variants={navbarVariants}
        initial="hidden"
        animate="visible"
        className={[
          "flex items-center justify-between",
          "bg-[#111111]",                // extended.color-111111
          "rounded-xl",                  // 12px from border-radius scale
          "px-5 py-3",                   // 20px / 12px — on the 4px grid
          "w-full max-w-[325px]",
          "gap-8",
          "relative z-10",              // sit above the dropdown
        ].join(" ")}
      >
        {/* Brand name */}
        <a
          href="/"
          className={[
            "font-heading font-bold",
            "text-[22px]",
            "text-[#FAF7F3]",            // core.surface used as inverted text on dark bg
            "tracking-tight",
            "leading-none",
            "transition-all",            // global.transition: color 0.15s
            "hover:opacity-80",
            "focus-visible:outline focus-visible:outline-[1px] focus-visible:outline-[#101010]",
          ].join(" ")}
        >
          Pansilu
        </a>

        {/* ── Menu toggle: motion.button with teardrop-drop + × morph ── */}
        <motion.button
          type="button"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          aria-controls="nav-menu"
          onClick={() => setIsOpen((prev) => !prev)}
          // Physical press depression (brief scale-down)
          whileTap={prefersReduced ? undefined : { scale: 0.9 }}
          // Subtle hover surface lift — stays within the dark palette
          whileHover={prefersReduced ? undefined : { backgroundColor: "rgba(250,247,243,0.85)" }}
          className={[
            "flex items-center justify-center",
            "w-[44px] h-[36px]",
            "rounded-[10px]",             // kept from original
            "bg-[#FAF7F3]",               // core.surface
            "text-[#111111]",             // extended.color-111111
            "focus-visible:outline focus-visible:outline-[1px] focus-visible:outline-[#101010]",
          ].join(" ")}
          style={{ touchAction: "manipulation" }} // prevent 300ms tap delay on mobile
        >
          {/*
           * Icon container: 20×20, overflow-hidden clips the middle dot
           * as it falls below the bottom edge.
           *
           * We use static CSS for horizontal positioning (left: 0, right: 0, left: 8)
           * and NEVER animate 'x'. Animating 'x' concurrently with 'width'/'height'
           * causes Framer Motion v13 to optimize one arm using scale transforms,
           * which distorts the border-radius into a pointy oval.
           * 
           * By keeping 'x' static, both arms grow inward from their respective edges
           * identically, maintaining perfectly rounded tips.
           */}
          <span
            aria-hidden="true"
            className="relative"
            style={{ width: 20, height: 20, overflow: "hidden" }}
          >
            {/* ── Middle dot — falls straight down, clipped at bottom ── */}
            <motion.span
              className="absolute bg-current rounded-full"
              style={{ top: 0, left: 8 }}
              initial={{ y: 8, width: 4, height: 4, opacity: 1, scale: 1 }}
              animate={prefersReduced
                ? { y: 8, width: 4, height: 4, opacity: 1, scale: 1 }
                : {
                  y: isOpen ? 20 : 8,
                  width: 4,
                  height: 4,
                  opacity: isOpen ? 0 : 1,
                  scale: isOpen ? 0.2 : 1,
                }
              }
              transition={SPRING}
            />

            {/* ── Left dot → top-left ╲ arm ── */}
            <motion.span
              className="absolute bg-current rounded-full"
              style={{ top: 0, left: 0 }}
              initial={{ y: 8, width: 4, height: 4, rotate: 0 }}
              animate={prefersReduced
                ? { y: 8, width: 4, height: 4, rotate: 0 }
                : {
                  y: isOpen ? 9 : 8,
                  width: isOpen ? 20 : 4,
                  height: isOpen ? 2 : 4,
                  rotate: isOpen ? 45 : 0,
                }
              }
              transition={SPRING}
            />

            {/* ── Right dot → top-right ╱ arm ── */}
            <motion.span
              className="absolute bg-current rounded-full"
              style={{ top: 0, right: 0 }}
              initial={{ y: 8, width: 4, height: 4, rotate: 0 }}
              animate={prefersReduced
                ? { y: 8, width: 4, height: 4, rotate: 0 }
                : {
                  y: isOpen ? 9 : 8,
                  width: isOpen ? 20 : 4,
                  height: isOpen ? 2 : 4,
                  rotate: isOpen ? -45 : 0,
                }
              }
              transition={SPRING}
            />
          </span>
        </motion.button>
      </motion.nav>

      {/* ── Dropdown menu ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="nav-menu"
            role="dialog"
            aria-label="Navigation menu"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className={[
              // Position: anchored below the navbar pill
              "absolute top-full mt-2",
              "w-full max-w-[325px]",
              // Surface token — card / panel background (DESIGN.md §2)
              "bg-[#faf7f3]",            // core.surface
              // Border radius from scale (DESIGN.md §5): 16px
              "rounded-2xl",
              // No shadow tokens defined for menus — use subtle border instead
              "border border-[#545454]", // core.border
              // Padding on 4px grid: 20px vertical, 20px horizontal
              "px-5 py-5",
              // Stack above page content
              "z-20",
            ].join(" ")}
          >
            {/* Nav links */}
            <ul className="flex flex-col" role="list">
              {NAV_LINKS.map((link, i) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={[
                      "block py-3",                  // 12px top+bottom — medium spacing
                      "font-heading font-bold",       // Archivo bold — matches navbar brand
                      "text-[18px]",                 // one step below brand name size
                      link.muted
                        ? "text-[#767676]"           // core.text-muted
                        : "text-[#000000]",          // core.text-primary
                      "leading-none",
                      "transition-all",              // global: transition: color 0.15s
                      "hover:opacity-60",
                      "focus-visible:outline focus-visible:outline-[1px] focus-visible:outline-[#0099ff]", // accent focus ring
                    ].join(" ")}
                  >
                    {link.label}
                  </a>
                  {/* Divider — only between items, not after last */}
                  {i < NAV_LINKS.length - 1 && (
                    <div className="h-px bg-[#545454] opacity-20" /> // core.border, softened
                  )}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
