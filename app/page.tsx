"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import { AnimatePresence } from "framer-motion"
import { useLanguage } from "@/hooks/use-language"
import * as enData from "@/lib/siteData"
import * as itData from "@/lib/siteData-ITA"
import { LanguagePicker, type LanguageCode } from "@/components/language-picker"
import { GhostMeshGradient } from "@/components/ui/ghost-mesh-gradient"
import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { EducationSection } from "@/components/education-section"
import { ProjectsSection } from "@/components/projects-section"
import { ExperienceSection } from "@/components/experience-section"
import { CertificationsSection } from "@/components/certifications-section"
import { ContactDialog } from "@/components/contact-dialog"
import { Footer } from "@/components/footer"

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false)
  const [isLandingPage, setIsLandingPage] = useState(true)
  const [contactOpen, setContactOpen] = useState(false)
  const [showGhost, setShowGhost] = useState(false)
  const { language, setLanguage } = useLanguage()
  const isLandingRef = useRef(true)

  const data = language === "it" ? itData : enData

  // Dark mode: sync with system preference
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
    setDarkMode(mediaQuery.matches)

    const handleChange = (e: MediaQueryListEvent) => setDarkMode(e.matches)
    mediaQuery.addEventListener("change", handleChange)
    return () => mediaQuery.removeEventListener("change", handleChange)
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode)
  }, [darkMode])

  // Scroll tracking: navbar visibility + ghost easter egg
  // Uses a ref to avoid re-subscribing the listener on every scroll
  useEffect(() => {
    // Initial check on mount to prevent flickering if loaded halfway down
    const initialLanding = window.scrollY < 100
    if (!initialLanding) {
      setIsLandingPage(false)
      isLandingRef.current = false
      setShowGhost(true)
    }

    let ticking = false

    const handleScroll = () => {
      if (ticking) return
      ticking = true

      requestAnimationFrame(() => {
        const scrollY = window.scrollY
        const wasLanding = isLandingRef.current
        const nowLanding = scrollY < 100

        if (wasLanding !== nowLanding) {
          isLandingRef.current = nowLanding
          setIsLandingPage(nowLanding)
          setShowGhost(!nowLanding)
        }

        ticking = false
      })
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleDarkMode = useCallback(() => setDarkMode((prev) => !prev), [])
  const openContact = useCallback(() => setContactOpen(true), [])
  const handleLanguageChange = useCallback(
    (code: LanguageCode) => setLanguage(code),
    [setLanguage],
  )

  return (
    <div
      className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-colors duration-300 pt-20"
      id="zenit-point"
    >
      {/* Navbar */}
      <Navbar
        navItems={data.navItems}
        language={language}
        darkMode={darkMode}
        isLandingPage={isLandingPage}
        onToggleDarkMode={toggleDarkMode}
        onContactOpen={openContact}
      />

      {/* Language Picker */}
      <div className="fixed bottom-6 right-6 z-40 pointer-events-auto">
        <LanguagePicker value={language} onLanguageChange={handleLanguageChange} />
      </div>

      {/* Ghost Easter Egg */}
      <AnimatePresence>
        {showGhost && <GhostMeshGradient isDarkMode={darkMode} />}
      </AnimatePresence>

      {/* Contact Dialog */}
      <ContactDialog
        open={contactOpen}
        onOpenChange={setContactOpen}
        language={language}
      />

      {/* Hero */}
      <HeroSection data={data.landing} language={language} onContactOpen={openContact} />

      {/* Scroll anchor */}
      <div className="start" id="start" />
      <div className="start" />

      {/* Main content */}
      <main className="container mx-auto px-4 py-16 space-y-32">
        <AboutSection data={data.about} language={language} />
        <EducationSection data={data.education} language={language} />
        <ProjectsSection data={data.projects} language={language} />
        <ExperienceSection data={data.experiences} language={language} />
        <CertificationsSection data={data.certifications} language={language} />
      </main>

      <Footer />
    </div>
  )
}
