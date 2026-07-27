import "./globals.css"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import type { ReactNode } from "react"
import { LanguageProvider } from "@/hooks/use-language"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://gianlucadipaola.com"),
  title: "Gianluca Di Paola — Computer Engineer | Politecnico di Milano",
  description:
    "Portfolio professionale: progetti, competenze ed esperienze nel campo dell'ingegneria e dell'informatica.",
  keywords: [
    "portfolio",
    "software engineering",
    "computer engineering",
    "politecnico milano",
    "gianluca di paola",
    "sviluppatore",
    "ingegnere informatico",
  ],
  authors: [{ name: "Gianluca Di Paola", url: "https://gianlucadipaola.com" }],
  openGraph: {
    title: "Gianluca Di Paola — Computer Engineer | Politecnico di Milano",
    description:
      "Portfolio professionale: progetti, competenze ed esperienze nel campo dell'ingegneria informatica.",
    url: "https://gianlucadipaola.com",
    siteName: "Gianluca Di Paola",
    images: [
      {
        url: "/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Gianluca Di Paola — Portfolio Preview",
      },
    ],
    locale: "it_IT",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}
