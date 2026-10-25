import { cn } from "@/lib/utils"

type Props = {
  label?: string
  index?: string
  tone?: "dark" | "light"
  className?: string
}

/** Gold and cerulean hairline pair with an optional section index, like a ruled briefing sheet. */
export default function DataRule({ label, index, tone = "dark", className }: Props) {
  return (
    <div className={cn("flex items-center gap-4", className)}>
      {index && (
        <span className={cn("font-display text-xs tracking-[0.2em]", tone === "dark" ? "text-gold-deep" : "text-gold-light")}>
          {index}
        </span>
      )}
      <span aria-hidden="true" className="data-rule flex-1" />
      {label && (
        <span className={cn("font-display text-xs tracking-[0.2em]", tone === "dark" ? "text-forest" : "text-cerulean-light")}>
          {label}
        </span>
      )}
    </div>
  )
}
