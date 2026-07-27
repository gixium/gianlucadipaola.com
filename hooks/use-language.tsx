"use client"

import { useState, useEffect, createContext, useContext } from "react"
import type { ReactNode } from "react"

export type Language = "en" | "it"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  toggleLanguage: () => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  useEffect(() => {
    const browserLang = navigator.language.split("-")[0]
    const initialLang: Language = browserLang === "it" ? "it" : "en"
    const savedLang = localStorage.getItem("language") as Language | null

    setLanguage(savedLang ?? initialLang)
  }, [])

  useEffect(() => {
    localStorage.setItem("language", language)
    document.documentElement.lang = language
  }, [language])

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "it" ? "en" : "it"))
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
