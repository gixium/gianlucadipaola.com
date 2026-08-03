"use client"

import { Award } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import type { Language } from "@/hooks/use-language"
import type { CertificationItem } from "@/lib/types"
import {
  sectionVariants,
  headingVariants,
  listVariants,
  listItemVariants,
  langFadeVariants,
  cardHoverProps,
} from "@/lib/motion"

interface CertificationsSectionProps {
  data: readonly CertificationItem[]
  language: Language
}

export function CertificationsSection({ data, language }: CertificationsSectionProps) {
  return (
    <motion.section
      id="certifications"
      className="scroll-mt-16"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
    >
      <AnimatePresence mode="wait">
        <motion.h2
          key={`certifications-title-${language}`}
          variants={headingVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="text-3xl font-bold mb-8 flex items-center text-gray-800 dark:text-gray-200"
        >
          <Award className="mr-2" />
          {language === "it" ? "Certificazioni" : "Certifications"}
        </motion.h2>
      </AnimatePresence>

      <AnimatePresence mode="wait">
        <motion.div
          key={`certifications-content-${language}`}
          variants={langFadeVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            variants={listVariants}
            initial="hidden"
            animate="visible"
          >
            {data.map((certification, index) => (
              <motion.div
                key={index}
                variants={listItemVariants}
                {...cardHoverProps}
              >
                <Card className="bg-white dark:bg-gray-800 shadow-md transition-colors">
                  <CardHeader>
                    <CardTitle className="text-gray-800 dark:text-gray-200 titolo-2">
                      {certification.title}
                    </CardTitle>
                    <CardDescription className="uppercase text-gray-600 dark:text-gray-400 font-semibold titolo-3">
                      {certification.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-gray-700 dark:text-gray-300">
                    <p>{certification.content}</p>
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
