"use client"

import { useState, useEffect, useCallback, useRef, useMemo } from "react"
import { Code, Github, ChevronLeft, ChevronRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { getBadgeColorClasses } from "@/lib/badge-colors"
import type { Language } from "@/hooks/use-language"
import type { ProjectItem } from "@/lib/types"
import {
  sectionVariants,
  headingVariants,
  listVariants,
  listItemVariants,
  langFadeVariants,
  cardHoverProps,
} from "@/lib/motion"

interface ProjectsSectionProps {
  data: readonly ProjectItem[]
  language: Language
}

// Defined at module level so React does not remount cards on every parent re-render.
const ProjectCard = ({ project }: { project: ProjectItem }) => (
  <Card className="bg-white dark:bg-gray-800 shadow-md transition-colors h-full flex flex-col">
    <CardHeader className="flex-shrink-0">
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-800 dark:text-gray-200 hover:text-teal-500 dark:hover:text-teal-400 transition-colors titolo-2"
      >
        <CardTitle className="flex items-center gap-2">
          <Github className="h-6 w-6" />
          {project.title}
        </CardTitle>
        <CardDescription className="uppercase text-gray-600 dark:text-gray-400 font-semibold titolo-3 mt-1.5">
          {project.description}
        </CardDescription>
      </a>
    </CardHeader>
    <CardContent className="text-gray-700 dark:text-gray-300 flex-grow flex flex-col justify-between">
      <p className="mb-4">{project.content}</p>
      <div className="flex flex-wrap gap-2 mt-auto pt-4">
        {project.badges.map((badge, badgeIndex) => (
          <Badge
            key={badgeIndex}
            variant="secondary"
            className={getBadgeColorClasses(project.badgeColor)}
          >
            {badge}
          </Badge>
        ))}
      </div>
    </CardContent>
  </Card>
)

export function ProjectsSection({ data, language }: ProjectsSectionProps) {
  const [isGridView, setIsGridView] = useState<boolean | null>(null)
  const [isMobile, setIsMobile] = useState(false)
  const [isSelectingText, setIsSelectingText] = useState(false)
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false)
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false)

  // Detect mobile and narrow screens
  useEffect(() => {
    const checkScreenSize = () => {
      const isNarrow = window.innerWidth < 768
      setIsMobile(
        window.innerWidth < 1024 ||
          "ontouchstart" in window ||
          navigator.maxTouchPoints > 0
      )
      
      // Force grid view on narrow screens
      if (isNarrow) {
        setIsGridView(true)
      } else if (isGridView === null) {
        // Initial set for desktop
        setIsGridView(false)
      }
    }
    
    checkScreenSize()
    window.addEventListener("resize", checkScreenSize)
    return () => window.removeEventListener("resize", checkScreenSize)
  }, [isGridView])

  // Embla options
  const emblaOptions = useMemo(
    () => ({
      loop: true,
      dragFree: false,
      slidesToScroll: 1,
      duration: 20,
      watchDrag: isMobile,
    }),
    [isMobile],
  )

  const emblaPlugins = useMemo(
    () => [
      Autoplay({ delay: 5000, stopOnMouseEnter: true, stopOnInteraction: false }),
      ...(isMobile ? [] : [WheelGesturesPlugin({ forceWheelAxis: "x" })]),
    ],
    [isMobile],
  )

  const [emblaRef, emblaApi] = useEmblaCarousel(emblaOptions, emblaPlugins)

  // Viewport ref for text selection detection
  const emblaViewportRef = useRef<HTMLDivElement | null>(null)
  const setEmblaViewportRef = useCallback(
    (node: HTMLDivElement | null) => {
      emblaViewportRef.current = node
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      emblaRef(node as any)
    },
    [emblaRef],
  )

  const scrollPrev = useCallback(() => {
    if (!emblaApi) return
    emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (!emblaApi) return
    emblaApi.scrollNext()
  }, [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setPrevBtnEnabled(emblaApi.canScrollPrev())
    setNextBtnEnabled(emblaApi.canScrollNext())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on("select", onSelect)
  }, [emblaApi, onSelect])

  // Update watchDrag based on text selection (desktop only)
  useEffect(() => {
    if (emblaApi && !isMobile) {
      emblaApi.reInit({ watchDrag: !isSelectingText })
    }
  }, [emblaApi, isSelectingText, isMobile])

  // Handle text selection to pause carousel (desktop only)
  useEffect(() => {
    if (isMobile) return

    const handleSelectionStart = (e: MouseEvent) => {
      const target = e.target as Node | null
      if (
        !emblaViewportRef.current ||
        !target ||
        !emblaViewportRef.current.contains(target)
      )
        return
      setIsSelectingText(true)
      emblaApi?.plugins().autoplay?.stop()
    }

    const handleSelectionEnd = () => {
      setTimeout(() => {
        const selection = window.getSelection()
        if (!selection || selection.toString().length === 0) {
          setIsSelectingText(false)
          emblaApi?.plugins().autoplay?.play()
        }
      }, 100)
    }

    document.addEventListener("mousedown", handleSelectionStart as EventListener)
    document.addEventListener("mouseup", handleSelectionEnd)

    return () => {
      document.removeEventListener("mousedown", handleSelectionStart as EventListener)
      document.removeEventListener("mouseup", handleSelectionEnd)
    }
  }, [emblaApi, isMobile])

  const toggleView = () => setIsGridView((prev) => !prev)

  return (
    <motion.section
      id="projects"
      className="scroll-mt-16"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
    >
      <div className="flex justify-between items-center mb-8">
        <AnimatePresence mode="wait">
          <motion.h2
            key={`projects-title-${language}`}
            variants={headingVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="text-3xl font-bold flex items-center text-gray-800 dark:text-gray-200"
          >
            <Code className="mr-2" />
            {language === "it" ? "Progetti" : "Projects"}
          </motion.h2>
        </AnimatePresence>

        <div className="hidden md:flex items-center text-sm text-gray-500 dark:text-gray-400">
          <motion.button
            onClick={toggleView}
            className="flex items-center space-x-1 hover:text-gray-700 dark:hover:text-gray-200 transition-colors"
            whileTap={{ scale: 0.9 }}
          >
            <span className="font-semibold ml-4">
              {isGridView
                ? language === "it"
                  ? "vedi carosello"
                  : "view carousel"
                : language === "it"
                  ? "vedi griglia"
                  : "view grid"}
            </span>
          </motion.button>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {isGridView ? (
          <motion.div
            key={`projects-grid-${language}-${isGridView}`}
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
              {data.map((project, index) => (
                <motion.div
                  key={index}
                  variants={listItemVariants}
                  {...cardHoverProps}
                >
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            key={`projects-carousel-${language}-${isGridView}`}
            variants={langFadeVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="relative px-12">
              <div
                className={`overflow-hidden p-6 -m-6 ${
                  isMobile ? "cursor-grab active:cursor-grabbing" : ""
                }`}
                ref={setEmblaViewportRef}
              >
                <div className="flex py-2">
                  {data.map((project, index) => (
                    <div
                      key={`${project.title}-${index}`}
                      className="flex-[0_0_50%] min-w-0 pl-4"
                    >
                      <motion.div {...cardHoverProps}>
                        <ProjectCard project={project} />
                      </motion.div>
                    </div>
                  ))}
                </div>
              </div>
              <Button
                onClick={scrollPrev}
                disabled={!prevBtnEnabled}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white/70 hover:bg-white/90 dark:bg-gray-800/70 dark:hover:bg-gray-800/90 backdrop-blur-md border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-200 z-10 rounded-full"
                size="icon"
                aria-label="Previous project"
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
              <Button
                onClick={scrollNext}
                disabled={!nextBtnEnabled}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white/70 hover:bg-white/90 dark:bg-gray-800/70 dark:hover:bg-gray-800/90 backdrop-blur-md border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-200 z-10 rounded-full"
                size="icon"
                aria-label="Next project"
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  )
}
