/**
 * Shared Framer Motion variants — Apple-style animation system.
 * Centralised here to ensure visual coherence across all sections.
 *
 * Performance notes:
 * - No `filter: blur()` on scroll-driven variants: blur forces GPU compositing
 *   layers on every child element, which is expensive on mobile and low-end
 *   devices. Opacity + y translation is GPU-composited for free via `will-change`.
 * - `langFadeVariants` retains a subtle blur only on language-switch (rare,
 *   user-triggered), where the visual payoff justifies the cost.
 */
import type { Variants } from "framer-motion"

/** Standard cubic-bezier for an Apple-like overshoot-free spring */
export const APPLE_EASE = [0.16, 1, 0.3, 1] as [number, number, number, number]

// ─── Section-level ────────────────────────────────────────────────────────────

/**
 * Fade-in-up for the section wrapper.
 * Use with `whileInView` + `viewport={{ once: true, margin: "-80px" }}`.
 */
export const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: APPLE_EASE },
  },
}

// ─── Container (stagger parent) ────────────────────────────────────────────────

/** Stagger container — use on the grid/list wrapper */
export const listVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
}

/** Single child inside a stagger list */
export const listItemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: APPLE_EASE },
  },
}

// ─── Heading ───────────────────────────────────────────────────────────────────

/** Section heading — slides gently up from below */
export const headingVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: APPLE_EASE },
  },
}

// ─── Language-change swap ──────────────────────────────────────────────────────

/**
 * Soft cross-fade for content that changes when language switches.
 * Blur is intentional here: it's user-triggered (rare) and brief,
 * giving a tactile "swap" feel that pure opacity can't match.
 */
export const langFadeVariants: Variants = {
  hidden: { opacity: 0, filter: "blur(3px)" },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    transition: { duration: 0.35, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    filter: "blur(3px)",
    transition: { duration: 0.2, ease: "easeIn" },
  },
}

// ─── Card hover ────────────────────────────────────────────────────────────────

/** Subtle lift — more Apple-like than a hard scale(1.03) */
export const cardHoverProps = {
  whileHover: {
    scale: 1.015,
    y: -4,
    boxShadow: "0 12px 32px rgba(0,0,0,0.10)",
    transition: { duration: 0.35, ease: APPLE_EASE },
  },
  whileTap: { scale: 0.99 },
}
