"use client"

import { Archive, BookOpen, FileText, Github } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { getBadgeColorClasses } from "@/lib/badge-colors"
import type { Language } from "@/hooks/use-language"
import type { PublicationItem, PublicationLinkKind } from "@/lib/types"
import {
  sectionVariants,
  headingVariants,
  listVariants,
  listItemVariants,
  langFadeVariants,
  cardHoverProps,
} from "@/lib/motion"

interface PublicationsSectionProps {
  data: readonly PublicationItem[]
  language: Language
}

const LINK_ICONS = {
  paper: FileText,
  code: Github,
  data: Archive,
} as const satisfies Record<PublicationLinkKind, typeof FileText>

export function PublicationsSection({ data, language }: PublicationsSectionProps) {
  // No publications yet (entries are commented out in the data files): render nothing, so no empty section is shown.
  if (data.length === 0) return null

  return (
    <motion.section
      id="publications"
      className="scroll-mt-16"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
    >
      <AnimatePresence mode="wait">
        <motion.h2
          key={`publications-title-${language}`}
          variants={headingVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="text-3xl font-bold mb-8 flex items-center text-gray-800 dark:text-gray-200"
        >
          <BookOpen className="mr-2" />
          {language === "it" ? "Pubblicazioni" : "Publications"}
        </motion.h2>
      </AnimatePresence>

      <AnimatePresence mode="wait">
        <motion.div
          key={`publications-content-${language}`}
          variants={langFadeVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <motion.div
            className="grid grid-rows-1 gap-6"
            variants={listVariants}
            initial="hidden"
            animate="visible"
          >
            {data.map((publication, index) => (
              <motion.div key={index} variants={listItemVariants} {...cardHoverProps}>
                <Card className="bg-white dark:bg-gray-800 shadow-md transition-colors">
                  <CardHeader>
                    <CardTitle className="text-gray-800 dark:text-gray-200 titolo-2">
                      {publication.title}
                    </CardTitle>
                    <CardDescription className="uppercase text-gray-600 dark:text-gray-400 font-semibold titolo-3">
                      {publication.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-gray-700 dark:text-gray-300 space-y-4">
                    <p>
                      {publication.authors.map((author, authorIndex) => (
                        <span key={author.name}>
                          {author.isMe ? (
                            <strong className="font-semibold text-gray-900 dark:text-gray-100">
                              {author.name}
                            </strong>
                          ) : (
                            author.name
                          )}
                          {authorIndex < publication.authors.length - 1 ? ", " : ""}
                        </span>
                      ))}
                    </p>

                    <p>{publication.content}</p>

                    <div className="flex flex-wrap gap-2">
                      <Badge
                        variant="outline"
                        className="border-teal-500 text-teal-700 dark:border-teal-400 dark:text-teal-300"
                      >
                        {publication.status}
                      </Badge>
                      {publication.badges.map((badge) => (
                        <Badge
                          key={badge}
                          variant="secondary"
                          className={getBadgeColorClasses(publication.badgeColor)}
                        >
                          {badge}
                        </Badge>
                      ))}
                    </div>

                    {publication.links.length > 0 && (
                      <div className="flex flex-wrap gap-3 pt-1">
                        {publication.links.map((link) => {
                          const Icon = LINK_ICONS[link.kind]
                          return (
                            <Button
                              key={link.url}
                              asChild
                              variant="outline"
                              size="sm"
                              className="border-gray-300 bg-transparent text-gray-700 hover:border-teal-500 hover:text-teal-500 dark:border-gray-600 dark:text-gray-300 dark:hover:border-teal-400 dark:hover:text-teal-400"
                            >
                              <a href={link.url} target="_blank" rel="noopener noreferrer">
                                <Icon />
                                {link.label}
                              </a>
                            </Button>
                          )
                        })}
                      </div>
                    )}
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
