"use client"

import { motion, AnimatePresence } from "framer-motion"
import type { Language } from "@/hooks/use-language"
import type { AboutItem } from "@/lib/types"
import {
  sectionVariants,
  headingVariants,
  listVariants,
  listItemVariants,
  langFadeVariants,
} from "@/lib/motion"

interface AboutSectionProps {
  data: readonly AboutItem[]
  language: Language
}

export function AboutSection({ data, language }: AboutSectionProps) {
  return (
    <motion.section
      id="about"
      className="scroll-mt-16"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
    >
      <AnimatePresence mode="wait">
        <motion.h2
          key={`about-title-${language}`}
          variants={headingVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="text-3xl font-bold mb-8 flex items-center text-gray-800 dark:text-gray-200"
        >
          {language === "it" ? "Chi sono" : "About me"}
        </motion.h2>
      </AnimatePresence>

      <AnimatePresence mode="wait">
        <motion.div
          key={`about-content-${language}`}
          variants={langFadeVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <motion.div
            className="grid grid-rows-1 md:grid-rows-2 gap-6"
            variants={listVariants}
            initial="hidden"
            animate="visible"
          >
            {data.map((item, index) => (
              <motion.div
                key={index}
                variants={listItemVariants}
                className="flex items-center justify-normal pl-4 pr-4"
              >
                <item.icon className="mr-4 !min-w-6 !min-h-6 shrink-0" />
                <span>{item.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </motion.section>
  )
}
