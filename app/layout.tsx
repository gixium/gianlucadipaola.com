import "./globals.css"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import type { ReactNode } from "react"
import { LanguageProvider } from "@/hooks/use-language"
import { StructuredData } from "@/components/structured-data"

const inter = Inter({ subsets: ["latin"], display: "optional" })

export const metadata: Metadata = {
  metadataBase: new URL("https://gianlucadipaola.com"),
  title: {
    default: "Gianluca Di Paola — Computer Engineer | Politecnico di Milano",
    template: "%s | Gianluca Di Paola",
  },
  description:
    "Portfolio professionale di Gianluca Di Paola, Computer Engineer laureato al Politecnico di Milano. Progetti, competenze ed esperienze nel campo dell'ingegneria informatica.",
  keywords: [
    "Gianluca Di Paola",
    "Computer Engineer",
    "Ingegnere Informatico",
    "Politecnico di Milano",
    "Software Engineer",
    "Portfolio",
    "iOS Developer",
    "Swift",
    "Java",
    "Distributed Systems",
    "AI Agents",
    "Full Stack",
    "Bending Spoons",
    "Skené",
    "Next.js",
    "TypeScript",
    "Web Development",
  ],
  authors: [{ name: "Gianluca Di Paola", url: "https://gianlucadipaola.com" }],
  creator: "Gianluca Di Paola",
  publisher: "Gianluca Di Paola",
  alternates: {
    canonical: "/",
    languages: {
      "it-IT": "/",
      "en-US": "/",
    },
  },
  openGraph: {
    title: "Gianluca Di Paola — Computer Engineer | Politecnico di Milano",
    description:
      "Portfolio professionale di Gianluca Di Paola: progetti software, competenze ed esperienze nel campo dell'ingegneria informatica.",
    url: "https://gianlucadipaola.com",
    siteName: "Gianluca Di Paola",
    locale: "it_IT",
    alternateLocale: ["en_US"],
    type: "website",
    images: [
      {
        url: "/preview.jpg",
        secureUrl: "https://gianlucadipaola.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Gianluca Di Paola — Computer Engineer Portfolio Preview",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gianluca Di Paola — Computer Engineer | Politecnico di Milano",
    description:
      "Portfolio professionale di Gianluca Di Paola: progetti software, competenze ed esperienze nel campo dell'ingegneria informatica.",
    images: [
      {
        url: "/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Gianluca Di Paola — Portfolio Preview",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
    ],
  },
  category: "technology",
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f9fafb" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <StructuredData />
      </head>
      <body className={inter.className}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}
