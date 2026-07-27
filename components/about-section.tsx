"use client"

import { motion, AnimatePresence } from "framer-motion"
import type { Language } from "@/hooks/use-language"
import type { AboutItem } from "@/lib/types"

interface AboutSectionProps {
  data: readonly AboutItem[]
  language: Language
}

export function AboutSection({ data, language }: AboutSectionProps) {
  return (
    <motion.section
      id="about"
      className="scroll-mt-16"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <AnimatePresence mode="wait">
        <motion.h2
          key={`about-title-${language}`}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          transition={{ duration: 0.3 }}
          className="text-3xl font-bold mb-8 flex items-center text-gray-800 dark:text-gray-200"
        >
          {language === "it" ? "Chi sono" : "About me"}
        </motion.h2>
      </AnimatePresence>

      <AnimatePresence mode="wait">
        <motion.div
          key={`about-content-${language}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="grid grid-rows-1 md:grid-rows-2 gap-6"
        >
          {data.map((item, index) => (
            <div key={index} className="flex items-center justify-normal pl-4 pr-4">
              <item.icon className="mr-4 !min-w-6 !min-h-6" />
              <span>{item.text}</span>
            </div>
          ))}
        </motion.div>
      </AnimatePresence>
    </motion.section>
  )
}
