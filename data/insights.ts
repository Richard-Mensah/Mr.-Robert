import type { InsightCategory } from "@/types"

/** Keep in sync with the category check constraint in db/schema.sql. */
export const INSIGHT_CATEGORIES: InsightCategory[] = [
  { slug: "leadership", label: "Leadership" },
  { slug: "youth-development", label: "Youth Development" },
  { slug: "career", label: "Career" },
  { slug: "personal-growth", label: "Personal Growth" },
  { slug: "entrepreneurship", label: "Entrepreneurship" },
  { slug: "public-service", label: "Public Service" },
  { slug: "community-development", label: "Community Development" },
]

export function categoryLabel(slug: string) {
  return INSIGHT_CATEGORIES.find((category) => category.slug === slug)?.label ?? slug
}
