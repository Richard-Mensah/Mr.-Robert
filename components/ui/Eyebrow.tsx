import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

type Props = {
  children: ReactNode
  tone?: "dark" | "light"
  className?: string
}

/** Small-caps section label led by a gold rule with a cerulean tip. */
export default function Eyebrow({ children, tone = "dark", className }: Props) {
  return (
    <p
      className={cn(
        "flex items-center gap-3 font-display text-sm tracking-eyebrow",
        tone === "dark" ? "text-gold-deep" : "text-gold-light",
        className,
      )}
    >
      <span aria-hidden="true" className="flex items-center">
        <span className={cn("h-px w-7", tone === "dark" ? "bg-gold-deep" : "bg-gold-light")} />
        <span className={cn("size-1 rounded-full", tone === "dark" ? "bg-cerulean" : "bg-cerulean-light")} />
      </span>
      {children}
    </p>
  )
}
