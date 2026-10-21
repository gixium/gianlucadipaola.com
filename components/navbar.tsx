"use client"

import { useState, useEffect, useRef } from "react"
import { Sun, Moon, ChevronRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import Btn03 from "@/components/ui/button-magnet"
import type { Language } from "@/hooks/use-language"
import type { NavItem } from "@/lib/types"
import { titleFont } from "@/lib/fonts"
import { APPLE_EASE } from "@/lib/motion"

interface NavbarProps {
  navItems: readonly NavItem[]
  language: Language
  darkMode: boolean
  isLandingPage: boolean
  onToggleDarkMode: () => void
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

export function Navbar({
  navItems,
  language,
  darkMode,
  isLandingPage,
  onToggleDarkMode,
  onContactOpen,
}: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const mobileMenuRef = useRef<HTMLDivElement>(null)

  // With more than 5 items the desktop bar no longer fits between 768px and 1279px:
  // switch to the hamburger menu below `lg` and show the icons only from `xl`.
  // (Full class strings on purpose: Tailwind can only see complete literals.)
  const manyItems = navItems.length > 5

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (
        mobileMenuOpen &&
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node)
      ) {
        setMobileMenuOpen(false)
      }
    }

    if (mobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside)
      document.addEventListener("touchstart", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
      document.removeEventListener("touchstart", handleClickOutside)
    }
  }, [mobileMenuOpen])

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-50 pointer-events-none"
      initial={false}
      animate={{ 
        opacity: isLandingPage ? 0 : 1, 
        y: isLandingPage ? -16 : 0 
      }}
      transition={{ duration: 0.6, ease: APPLE_EASE }}
    >
      <div className="container mx-auto px-2 sm:px-4 py-4">
        <div className="pointer-events-auto">
          <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-full shadow-lg p-3 border border-gray-200/50 dark:border-gray-600/50 transition-colors duration-300">
            <div className="flex items-center justify-between">
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-teal-500 to-purple-600 opacity-5 dark:opacity-10 rounded-full" />

              {/* Logo */}
              <a
                href="#zenit-point"
                onClick={(e) => handleSmoothScroll(e, "zenit-point")}
                className="group"
              >
                <div
                  className={cn(
                    titleFont.className,
                    "text-lg sm:text-xl text-gray-900 dark:text-gray-100 pl-2 transition-colors duration-100 group-hover:text-purple-700 dark:group-hover:text-purple-500",
                  )}
                >
                  Gianluca
                </div>
              </a>

              {/* Desktop Navigation */}
              <AnimatePresence mode="wait">
                <motion.nav
                  key={`nav-${language}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className={manyItems ? "hidden lg:block w-auto" : "hidden md:block w-auto"}
                >
                  <motion.ul
                    className="flex space-x-4 lg:space-x-8"
                    initial="hidden"
                    animate="visible"
                    variants={{
                      hidden: { opacity: 0 },
                      visible: { opacity: 1, transition: { staggerChildren: 0.07, delayChildren: 0.15 } },
                    }}
                  >
                    {navItems.map((item) => (
                      <motion.li
                        key={item.name}
                        variants={{
                          hidden: { opacity: 0, y: -8 },
                          visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: APPLE_EASE } },
                        }}
                      >
                        <a
                          href={`#${item.name.toLowerCase()}`}
                          onClick={(e) =>
                            handleSmoothScroll(e, item.id.toLowerCase())
                          }
                          className="text-gray-700 dark:text-gray-300 hover:text-teal-500 dark:hover:text-teal-400 transition-colors flex items-center gap-2"
                        >
                          <item.icon className={manyItems ? "h-5 w-5 hidden xl:inline" : "h-5 w-5 hidden lg:inline"} />
                          <span>{item.name}</span>
                        </a>
                      </motion.li>
                    ))}
                  </motion.ul>
                </motion.nav>
              </AnimatePresence>

              {/* Right side controls */}
              <div className="flex items-center gap-3">
                <Button
                  onClick={onToggleDarkMode}
                  variant="ghost"
                  size="icon"
                  className="text-gray-700 dark:text-gray-300 hover:text-teal-500 dark:hover:text-teal-400"
                  aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
                >
                  {darkMode ? (
                    <Sun className="h-5 w-5" />
                  ) : (
                    <Moon className="h-5 w-5" />
                  )}
                </Button>

                {/* Mobile menu */}
                <div className={manyItems ? "relative lg:hidden" : "relative md:hidden"} ref={mobileMenuRef}>
                  <Button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    variant="outline"
                    size="sm"
                    className="flex items-center gap-1 overflow-hidden transition-colors duration-300 dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full h-8 w-8"
                    aria-label="Toggle navigation menu"
                    aria-expanded={mobileMenuOpen}
                  >
                    <ChevronRight
                      className={cn(
                        "h-4 w-4 transition-transform duration-300",
                        mobileMenuOpen && "rotate-90",
                      )}
                    />
                  </Button>

                  <AnimatePresence>
                    {mobileMenuOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="absolute left-0 top-full w-48 bg-white dark:bg-gray-800 backdrop-blur-md rounded-lg p-3 shadow-lg z-50 transition-colors mt-4"
                      >
                        <AnimatePresence mode="wait">
                          <motion.ul
                            key={`mobile-nav-${language}`}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="grid grid-cols-1 gap-2"
                          >
                            {navItems.map((item) => (
                              <li key={item.name}>
                                <a
                                  href={`#${item.id.toLowerCase()}`}
                                  onClick={(e) => {
                                    handleSmoothScroll(e, item.id.toLowerCase())
                                    setMobileMenuOpen(false)
                                  }}
                                  className="text-gray-700 dark:text-gray-300 hover:text-teal-500 dark:hover:text-teal-400 transition-colors flex items-center gap-2 p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
                                >
                                  <item.icon className="h-5 w-5" />
                                  <span>{item.name}</span>
                                </a>
                              </li>
                            ))}
                          </motion.ul>
                        </AnimatePresence>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <Btn03
                  className="font-semibold py-4 mr-2 rounded-full"
                  particleCount={24}
                  attractRadius={60}
                  onClick={onContactOpen}
                >
                  {language === "it" ? "Contattami" : "Contact me"}
                </Btn03>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
