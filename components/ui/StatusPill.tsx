import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

type Props = {
  children: ReactNode
  tone?: "progress" | "complete" | "info"
  className?: string
}

/** Small status label with a live dot, e.g. "Briefing status: In review". */
export default function StatusPill({ children, tone = "progress", className }: Props) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border px-3 py-1 font-display text-[0.8rem] tracking-[0.16em]",
        tone === "progress" && "border-cerulean-light/30 bg-cerulean/10 text-cerulean-light",
        tone === "complete" && "border-gold-light/40 bg-gold-light/10 text-gold-light",
        tone === "info" && "border-ink/15 bg-ink/5 text-forest",
        className,
      )}
    >
      <span aria-hidden="true" className="relative flex size-1.5 shrink-0">
        <span className="absolute inset-0 animate-ping rounded-full bg-current opacity-60" />
        <span className="relative size-1.5 rounded-full bg-current" />
      </span>
      {children}
    </span>
  )
}
