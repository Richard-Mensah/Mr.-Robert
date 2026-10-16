export type InquiryResponse = {
  message?: string
  error?: string
  fieldErrors?: Record<string, string[] | undefined>
}

export type InsightRow = {
  slug: string
  title: string
  excerpt: string
  body: string
  category: string
  cover_image: string | null
  featured: boolean
  published_at: string | Date
}
