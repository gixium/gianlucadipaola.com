import type { MetadataRoute } from "next"

export const dynamic = "force-static"

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://gianlucadipaola.com"

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/*.pdf", "/gianluca_di_paola_cv.pdf"],
      },
      {
        userAgent: [
          "GPTBot",
          "ChatGPT-User",
          "CCBot",
          "Bytespider",
          "ClaudeBot",
          "anthropic-ai",
          "Google-Extended",
          "FacebookBot",
          "Diffbot",
          "cohere-ai",
          "Omgilibot",
          "PerplexityBot",
        ],
        disallow: "/",
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  }
}
