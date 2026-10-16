import type { CSSProperties } from "react"
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { WORDS_PER_MINUTE } from "@/constants"
import type { ArticleBlock } from "@/types"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/** Inline custom property used to stagger scroll reveals. */
export function revealDelay(index: number, stepMs = 80): CSSProperties {
  return { ["--reveal-delay" as string]: `${index * stepMs}ms` }
}

export function formatDate(value: string) {
  return new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "long", year: "numeric" }).format(
    new Date(value),
  )
}

export function readingMinutes(body: string) {
  const words = body.trim().split(/\s+/).filter(Boolean).length
  return Math.max(1, Math.round(words / WORDS_PER_MINUTE))
}

/**
 * Turns a plain-text article body into blocks.
 * Paragraphs are separated by blank lines; "## " starts a heading, "> " a pull quote.
 */
export function parseArticleBody(body: string): ArticleBlock[] {
  return body
    .split(/\n\s*\n/)
    .map((chunk) => chunk.trim())
    .filter(Boolean)
    .map((chunk) => {
      if (chunk.startsWith("## ")) return { type: "heading", text: chunk.slice(3).trim() }
      if (chunk.startsWith("> ")) return { type: "quote", text: chunk.slice(2).trim() }
      return { type: "paragraph", text: chunk }
    })
}
