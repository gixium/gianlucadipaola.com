import type { MetadataRoute } from "next"

export const dynamic = "force-static"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Gianluca Di Paola — Computer Engineer",
    short_name: "Gianluca Di Paola",
    description:
      "Portfolio professionale di Gianluca Di Paola: progetti, competenze ed esperienze nel campo dell'ingegneria informatica.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0f172a",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  }
}
