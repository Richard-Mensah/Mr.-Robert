import { categoryLabel } from "@/data/insights"
import { cn, formatDate } from "@/lib/utils"
import type { Insight } from "@/types"

type Props = {
  insight: Insight
  tone?: "dark" | "light"
}

export default function InsightMeta({ insight, tone = "dark" }: Props) {
  return (
    <p
      className={cn(
        "flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-medium uppercase tracking-[0.14em]",
        tone === "dark" ? "text-muted" : "text-ivory/60",
      )}
    >
      <span className={tone === "dark" ? "text-forest" : "text-forest-light"}>{categoryLabel(insight.category)}</span>
      <span aria-hidden="true">&middot;</span>
      <time dateTime={insight.publishedAt}>{formatDate(insight.publishedAt)}</time>
      <span aria-hidden="true">&middot;</span>
      <span>{insight.readingMinutes} min read</span>
    </p>
  )
}
