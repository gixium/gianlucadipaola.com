"use client"

import { GraduationCap } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import type { Language } from "@/hooks/use-language"
import type { EducationItem } from "@/lib/types"
import {
  sectionVariants,
  headingVariants,
  listVariants,
  listItemVariants,
  langFadeVariants,
  cardHoverProps,
} from "@/lib/motion"

interface EducationSectionProps {
  data: readonly EducationItem[]
  language: Language
}

export function EducationSection({ data, language }: EducationSectionProps) {
  return (
    <motion.section
      id="education"
      className="scroll-mt-16"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
    >
      <AnimatePresence mode="wait">
        <motion.h2
          key={`education-title-${language}`}
          variants={headingVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="text-3xl font-bold mb-8 flex items-center text-gray-800 dark:text-gray-200"
        >
          <GraduationCap className="mr-2" />
          {language === "it" ? "Formazione" : "Education"}
        </motion.h2>
      </AnimatePresence>

      <AnimatePresence mode="wait">
        <motion.div
          key={`education-${language}`}
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
            {data.map((education, index) => (
              <motion.div
                key={index}
                variants={listItemVariants}
                {...cardHoverProps}
              >
                <Card className="bg-white dark:bg-gray-800 shadow-md transition-colors">
                  <CardHeader>
                    <CardTitle className="text-gray-800 dark:text-gray-200 titolo-2">
                      {education.title}
                    </CardTitle>
                    <CardDescription className="uppercase text-gray-600 dark:text-gray-400 font-semibold titolo-3">
                      {education.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-gray-700 dark:text-gray-300">
                    <ul className="list-disc list-inside space-y-2">
                      {education.contents.map((value, i) => (
                        <li key={i}>{value}</li>
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
