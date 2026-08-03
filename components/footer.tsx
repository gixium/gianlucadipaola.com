"use client"

import { motion } from "framer-motion"
import { sectionVariants } from "@/lib/motion"

export function Footer() {
  return (
    <motion.footer
      className="bg-zinc-0 dark:bg-slate-950 py-4 text-center text-sm text-gray-400 dark:text-gray-600 transition-none"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
    >
      <p>Engineered with ❤ by Gianluca</p>
      <p className="px-4 py-2">
        Technology stack:
        <br />
        React, Next.js, Tailwind CSS, Shadcn/UI, Lucide-React, Framer-Motion
      </p>
    </motion.footer>
  )
}
