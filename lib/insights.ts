import { getDb } from "@/lib/db"
import { readingMinutes } from "@/lib/utils"
import { INSIGHTS_PAGE_SIZE } from "@/constants"
import type { Insight, InsightRow } from "@/types"

type InsightQuery = {
  category?: string | null
  search?: string | null
}

function toInsight(row: InsightRow): Insight {
  return {
    slug: row.slug,
    title: row.title,
    excerpt: row.excerpt,
    body: row.body,
    category: row.category,
    coverImage: row.cover_image,
    featured: row.featured,
    publishedAt: new Date(row.published_at).toISOString(),
    readingMinutes: readingMinutes(row.body),
  }
}

/** Published insights, newest first. Returns [] when the database is unavailable. */
export async function getInsights({ category = null, search = null }: InsightQuery = {}) {
  const sql = getDb()
  if (!sql) return []
  try {
    const rows = (await sql`
      select slug, title, excerpt, body, category, cover_image, featured, published_at
      from insights
      where status = 'published'
        and published_at <= now()
        and (${category}::text is null or category = ${category})
        and (${search}::text is null
             or title ilike '%' || ${search} || '%'
             or excerpt ilike '%' || ${search} || '%')
      order by featured desc, published_at desc
      limit ${INSIGHTS_PAGE_SIZE}
    `) as InsightRow[]
    return rows.map(toInsight)
  } catch (error) {
    console.error("Failed to load insights", error)
    return []
  }
}

export async function getInsightBySlug(slug: string) {
  const sql = getDb()
  if (!sql) return null
  try {
    const rows = (await sql`
      select slug, title, excerpt, body, category, cover_image, featured, published_at
      from insights
      where slug = ${slug} and status = 'published' and published_at <= now()
      limit 1
    `) as InsightRow[]
    return rows[0] ? toInsight(rows[0]) : null
  } catch (error) {
    console.error("Failed to load insight", error)
    return null
  }
}

export async function getInsightSlugs() {
  const sql = getDb()
  if (!sql) return []
  try {
    const rows = (await sql`
      select slug, published_at from insights
      where status = 'published' and published_at <= now()
    `) as Pick<InsightRow, "slug" | "published_at">[]
    return rows.map((row) => ({ slug: row.slug, publishedAt: new Date(row.published_at) }))
  } catch {
    return []
  }
}
