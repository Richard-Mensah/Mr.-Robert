import type { MetadataRoute } from "next"
import { SITE_URL } from "@/constants"
import { getInsightSlugs } from "@/lib/insights"

export const revalidate = 3600

const STATIC_ROUTES = [
  "",
  "/about",
  "/leadership",
  "/youth-development",
  "/author",
  "/speaker",
  "/speaker/one-sheet",
  "/tamale-youth-summit",
  "/insights",
  "/contact",
]

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date()
  const pages = STATIC_ROUTES.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.7,
  }))

  const insights = (await getInsightSlugs()).map((insight) => ({
    url: `${SITE_URL}/insights/${insight.slug}`,
    lastModified: insight.publishedAt,
    changeFrequency: "yearly" as const,
    priority: 0.5,
  }))

  return [...pages, ...insights]
}
