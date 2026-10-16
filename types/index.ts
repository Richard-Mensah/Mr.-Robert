export type NavItem = {
  label: string
  href: string
}

export type Pillar = {
  title: string
  description: string
}

export type FrameworkStage = {
  step: string
  title: string
  description: string
}

export type Book = {
  slug: string
  title: string
  subtitle?: string
  description: string
  coverTone: "ink" | "forest" | "gold"
}

export type SpeakingTheme = {
  title: string
  description: string
}

export type IllustrationName = "ascent" | "author" | "leadership" | "speaking" | "summit" | "youth"

export type ImageAsset = {
  src: string
  alt: string
  ready: boolean
  illustration: IllustrationName
}

export type Milestone = {
  id: string
  path: string
  title: string
  description: string
}

export type SocialLink = {
  label: string
  href: string | null
}

export type ContactPathway = {
  kind: InquiryKind
  title: string
  description: string
}

export type InquiryKind = "speaking" | "partnership" | "media" | "general"

export type SubscribeInterest = "insights" | "books" | "summit"

export type CompassLevel = "discover" | "develop" | "connect" | "lead" | "transform"

export type CompassQuestion = {
  prompt: string
  options: { label: string; level: CompassLevel }[]
}

export type PathAction = {
  title: string
  description: string
  href: string
}

export type VisitorPath = {
  id: string
  label: string
  headline: string
  actions: PathAction[]
}

export type Command = {
  label: string
  href: string
  group: "Pages" | "Actions"
  keywords?: string
}

export type Chapter = {
  id: string
  label: string
  title: string
  body: string
}

export type InsightCategory = {
  slug: string
  label: string
}

export type Insight = {
  slug: string
  title: string
  excerpt: string
  body: string
  category: string
  coverImage: string | null
  featured: boolean
  publishedAt: string
  readingMinutes: number
}

export type ArticleBlock = {
  type: "heading" | "paragraph" | "quote"
  text: string
}

export type FormStatus = "idle" | "submitting" | "success" | "error"

export * from "./api"
