"use client"

import { useState, useEffect } from "react"
import { Github, Linkedin, Mail, FileDown as Download } from "lucide-react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import type { Language } from "@/hooks/use-language"

interface ContactDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  language: Language
}

export function ContactDialog({ open, onOpenChange, language }: ContactDialogProps) {
  const [email, setEmail] = useState<string | null>(null)

  useEffect(() => {
    const b64 = "aW5nQGdpYW5sdWNhZGlwYW9sYS5jb20="
    setEmail(atob(b64))
  }, [])

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-white dark:bg-gray-800 border-0 rounded-xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-gray-800 dark:text-gray-200">
            {language === "it" ? "Contattami" : "Contact me"}
          </DialogTitle>
          <DialogDescription className="text-gray-600 dark:text-gray-400">
            {language === "it"
              ? "Contattami attraverso la piattaforma che preferisci"
              : "Connect with me through any of these platforms"}
          </DialogDescription>
        </DialogHeader>
        <div className="grid grid-cols-1 gap-2 py-2">
          <a
            href="https://github.com/gixium"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-gray-800 dark:text-gray-200"
          >
            <div className="p-2 rounded-full">
              <Github className="h-6 w-6" />
            </div>
            <div>
              <div className="font-medium">GitHub</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                {language === "it" ? "Guarda i miei progetti" : "View my projects"}
              </div>
            </div>
          </a>
          <a
            href="/gianluca_di_paola_cv.pdf"
            download
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-gray-800 dark:text-gray-200"
          >
            <div className="p-2 rounded-full">
              <Download className="h-6 w-6" />
            </div>
            <div>
              <div className="font-medium">Curriculum Vitae</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                {language === "it" ? "Scarica il mio curriculum" : "Get my resume"}
              </div>
            </div>
          </a>
          <a
            href={email ? `mailto:${email}` : "#"}
            onClick={(e) => {
              if (!email) e.preventDefault()
            }}
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-gray-800 dark:text-gray-200"
            aria-label="Send email"
          >
            <div className="p-2 rounded-full">
              <Mail className="h-6 w-6" />
            </div>
            <div>
              <div className="font-medium">Email</div>
              <div className="text-sm text-gray-500 dark:text-gray-400" aria-live="polite">
                {email ?? <span className="opacity-0">loading…</span>}
              </div>
            </div>
          </a>
          <a
            href="https://linkedin.com/in/gianlucadipaola"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-gray-800 dark:text-gray-200"
          >
            <div className="p-2 rounded-full">
              <Linkedin className="h-6 w-6" />
            </div>
            <div>
              <div className="font-medium">LinkedIn</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                {language === "it" ? "Connettiamoci su LinkedIn" : "Connect with me"}
              </div>
            </div>
          </a>
        </div>
      </DialogContent>
    </Dialog>
  )
}
