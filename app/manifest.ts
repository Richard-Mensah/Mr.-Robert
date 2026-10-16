import type { MetadataRoute } from "next"
import { SITE_DESCRIPTION, SITE_NAME } from "@/constants"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE_NAME,
    short_name: "R. K. Laari",
    description: SITE_DESCRIPTION,
    start_url: "/",
    display: "standalone",
    background_color: "#0b2a20",
    theme_color: "#0b2a20",
    icons: [
      { src: "/icon.png", sizes: "192x192", type: "image/png" },
      { src: "/brand/monogram.png", sizes: "256x256", type: "image/png" },
    ],
  }
}
