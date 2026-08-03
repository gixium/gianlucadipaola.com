import { Pacifico } from "next/font/google"

/**
 * Shared Pacifico font instance.
 * Centralised here to avoid duplicating the Google Fonts request
 * and to ensure a single CSS variable is emitted by Next.js.
 */
export const titleFont = Pacifico({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-pacifico",
  display: "swap",
})
