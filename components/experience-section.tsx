"use client"

import { Briefcase } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import type { Language } from "@/hooks/use-language"
import type { ExperienceItem } from "@/lib/types"
import {
  sectionVariants,
  headingVariants,
  listVariants,
  listItemVariants,
  langFadeVariants,
  cardHoverProps,
} from "@/lib/motion"

interface ExperienceSectionProps {
  data: readonly ExperienceItem[]
  language: Language
}

export function ExperienceSection({ data, language }: ExperienceSectionProps) {
  return (
    <motion.section
      id="experience"
      className="scroll-mt-16"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
    >
      <AnimatePresence mode="wait">
        <motion.h2
          key={`experience-title-${language}`}
          variants={headingVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="text-3xl font-bold mb-8 flex items-center text-gray-800 dark:text-gray-200"
        >
          <Briefcase className="mr-2" />
          {language === "it" ? "Esperienze" : "Experience"}
        </motion.h2>
      </AnimatePresence>

      <AnimatePresence mode="wait">
        <motion.div
          key={`experience-content-${language}`}
          variants={langFadeVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <motion.div
            className="grid grid-rows-1 md:grid-rows-1 gap-6"
            variants={listVariants}
            initial="hidden"
            animate="visible"
          >
            {data.map((experience, index) => (
              <motion.div
                key={index}
                variants={listItemVariants}
                {...cardHoverProps}
              >
                <Card className="bg-white dark:bg-gray-800 shadow-md transition-colors">
                  <CardHeader>
                    <CardTitle className="text-gray-800 dark:text-gray-200 titolo-2">
                      {experience.title}
                    </CardTitle>
                    <CardDescription className="uppercase text-gray-600 dark:text-gray-400 font-semibold titolo-3">
                      {experience.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-gray-700 dark:text-gray-300">
                    <ul className="list-disc list-inside space-y-2">
                      {experience.contents.map((content, idx) => (
                        <li key={idx}>{content}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </motion.section>
  )
}
