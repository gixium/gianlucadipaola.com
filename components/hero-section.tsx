"use client"

import { ChevronsDown } from "lucide-react"
import { motion, AnimatePresence, type Variants } from "framer-motion"
import { cn } from "@/lib/utils"

import Btn03 from "@/components/ui/button-magnet"
import type { Language } from "@/hooks/use-language"
import type { LandingItem } from "@/lib/types"
import { titleFont } from "@/lib/fonts"

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
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    window.scrollTo({ top: y, behavior: reducedMotion ? "instant" : "smooth" })
    window.history.replaceState(null, "", `#${id}`)
  }
}

export function HeroSection({ data, language, onContactOpen }: HeroSectionProps) {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 1.5, // Start revealing other elements slightly after the name starts drawing
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }, // Apple-like spring ease
    },
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden -mt-20">
      {/* Background with delicate fade and subtle scale */}
      <motion.div
        className="absolute inset-0 z-0 origin-center pointer-events-none"
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 3.5, ease: "easeOut" }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-teal-500/80 to-purple-600/80 opacity-10 dark:opacity-20" />
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-background to-transparent dark:from-slate-900" />
      </motion.div>

      <AnimatePresence mode="wait">
        <motion.div
          key={`landing-${language}`}
          className="z-10 text-center flex flex-col items-center justify-center w-full"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {data.map((item, index) => (
            <div key={index} className="flex flex-col items-center justify-center w-full">
              
              {/* Name SVG Drawing Animation with accessible h1 */}
              <div className="relative w-full h-[80px] md:h-[120px] mb-4 flex items-center justify-center">
                <h1 className="sr-only">
                  {item.title} — {item.subtitle}
                </h1>
                <svg className="w-full h-full overflow-visible" aria-hidden="true">
                  <motion.text
                    x="50%"
                    y="50%"
                    textAnchor="middle"
                    dominantBaseline="central"
                    className={cn(
                      "text-5xl md:text-7xl font-bold text-gray-900 dark:text-gray-100",
                      titleFont.className,
                    )}
                    style={{
                      fill: "currentColor",
                      stroke: "currentColor",
                      strokeWidth: 1.5,
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                    }}
                    initial={{ strokeDasharray: 2000, strokeDashoffset: 2000, fillOpacity: 0 }}
                    animate={{ strokeDashoffset: 0, fillOpacity: 1 }}
                    transition={{
                      strokeDashoffset: { duration: 2.8, ease: [0.4, 0, 0.2, 1] as [number, number, number, number] },
                      fillOpacity: { duration: 1.2, delay: 1.6, ease: "linear" },
                    }}
                  >
                    {item.title}
                  </motion.text>
                </svg>
              </div>

              <motion.p
                variants={itemVariants}
                className="text-xl md:text-[22px] pt-2 mb-10 tracking-wide text-gray-600 dark:text-gray-300 font-light sottotitolo"
              >
                {item.subtitle}
              </motion.p>
              
              <motion.div variants={itemVariants}>
                <Btn03
                  className="font-semibold text-lg p-6 rounded-full"
                  particleCount={32}
                  attractRadius={60}
                  onClick={onContactOpen}
                />
              </motion.div>
            </div>
          ))}

          <motion.div variants={itemVariants} className="flex justify-center space-x-4 pt-12">
            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2.5, ease: "easeInOut" }}
              className="inline-block cursor-pointer opacity-70 hover:opacity-100 transition-opacity"
            >
              <a href="#start" onClick={(e) => handleSmoothScroll(e, "start")}>
                <ChevronsDown
                  size={42}
                  className="text-gray-900 dark:text-gray-100"
                  strokeWidth={1.5}
                />
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </section>
  )
}
