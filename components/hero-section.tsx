"use client"

import { ChevronsDown } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { Pacifico } from "next/font/google"
import Btn03 from "@/components/ui/button-magnet"
import type { Language } from "@/hooks/use-language"
import type { LandingItem } from "@/lib/types"

const titleFont = Pacifico({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-pacifico",
})

interface HeroSectionProps {
  data: readonly LandingItem[]
  language: Language
  onContactOpen: () => void
}

function handleSmoothScroll(e: React.MouseEvent<HTMLAnchorElement>, id: string) {
  e.preventDefault()
  const element = document.getElementById(id)
  if (element) {
    const yOffset = -80
    const y = element.getBoundingClientRect().top + window.scrollY + yOffset
    window.scrollTo({ top: y, behavior: "smooth" })
    window.history.replaceState(null, "", `#${id}`)
  }
}

export function HeroSection({ data, language, onContactOpen }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden -mt-20">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-500 to-purple-600 opacity-20 dark:opacity-20" />
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-background to-transparent dark:from-slate-900" />
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={`landing-${language}`}
          className="z-10 text-center space-y-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "anticipate" }}
        >
          {data.map((item, index) => (
            <div key={index}>
              <h1
                className={cn(
                  "text-5xl md:text-7xl font-bold mb-4 text-gray-900 dark:text-gray-100",
                  titleFont.className,
                )}
              >
                {item.title}
              </h1>
              <p className="text-xl md:text-1xl pt-2 mb-8 tracking-wide text-gray-600 dark:text-gray-300 sottotitolo">
                {item.subtitle}
              </p>
              <Btn03
                className="font-semibold text-lg p-6 rounded-full"
                particleCount={32}
                attractRadius={60}
                onClick={onContactOpen}
              />
            </div>
          ))}

          <div className="flex justify-center space-x-4 pt-10">
            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
              className="inline-block cursor-pointer"
            >
              <a href="#start" onClick={(e) => handleSmoothScroll(e, "start")}>
                <ChevronsDown
                  size={48}
                  className="text-gray-900 dark:text-gray-100"
                />
              </a>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  )
}
