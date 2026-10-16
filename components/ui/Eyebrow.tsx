import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

type Props = {
  children: ReactNode
  tone?: "dark" | "light"
  className?: string
}

export default function Eyebrow({ children, tone = "dark", className }: Props) {
  return (
    <p
      className={cn(
        "flex items-center gap-3 font-display text-xs tracking-eyebrow",
        tone === "dark" ? "text-gold-deep" : "text-gold-light",
        className,
      )}
    >
      <span
        aria-hidden="true"
        className={cn("size-1.5 rotate-45", tone === "dark" ? "bg-gold-deep" : "bg-gold-light")}
      />
      {children}
    </p>
  )
}
