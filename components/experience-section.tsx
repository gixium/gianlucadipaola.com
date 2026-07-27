"use client"

import { Briefcase } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import type { Language } from "@/hooks/use-language"
import type { ExperienceItem } from "@/lib/types"

interface ExperienceSectionProps {
  data: readonly ExperienceItem[]
  language: Language
}

export function ExperienceSection({ data, language }: ExperienceSectionProps) {
  return (
    <motion.section
      id="experience"
      className="scroll-mt-16"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <AnimatePresence mode="wait">
        <motion.h2
          key={`experience-title-${language}`}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          transition={{ duration: 0.3 }}
          className="text-3xl font-bold mb-8 flex items-center text-gray-800 dark:text-gray-200"
        >
          <Briefcase className="mr-2" />
          {language === "it" ? "Esperienze" : "Experience"}
        </motion.h2>
      </AnimatePresence>

      <AnimatePresence mode="wait">
        <motion.div
          key={`experience-content-${language}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="grid grid-rows-1 md:grid-rows-1 gap-6"
        >
          {data.map((experience, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
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
      </AnimatePresence>
    </motion.section>
  )
}
