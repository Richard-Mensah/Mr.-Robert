import { useId, type ReactNode } from "react"
import { Lock } from "lucide-react"
import { cn } from "@/lib/utils"

type Props = {
  /** Text set around the ring, in small caps. */
  ring?: string
  children?: ReactNode
  state?: "earned" | "locked" | "new"
  size?: "sm" | "md" | "lg"
  className?: string
}

const SIZES = { sm: "size-12", md: "size-16", lg: "size-24" }

/** Embossed credential seal: ring lettering, gold face, icon at the centre. */
export default function Seal({ ring = "Verified · Briefing · Verified · Briefing ·", children, state = "earned", size = "md", className }: Props) {
  const id = useId()
  const earned = state !== "locked"

  return (
    <span
      className={cn(
        "relative inline-flex shrink-0 items-center justify-center rounded-full",
        SIZES[size],
        earned
          ? "seal-emboss bg-[radial-gradient(circle_at_35%_30%,var(--color-gold-light),var(--color-gold)_55%,var(--color-gold-deep))] text-ink"
          : "border border-dashed border-ivory/20 bg-ivory/[0.03] text-ivory/35",
        state === "new" && "animate-stamp",
        className,
      )}
    >
      {earned && (
        <svg aria-hidden="true" viewBox="0 0 100 100" className="absolute inset-0 size-full motion-safe:animate-[spin_40s_linear_infinite]">
          <defs>
            <path id={id} d="M50 50 m-38 0 a38 38 0 1 1 76 0 a38 38 0 1 1 -76 0" />
          </defs>
          <circle cx="50" cy="50" r="46" fill="none" stroke="currentColor" strokeOpacity="0.35" strokeWidth="0.8" />
          <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeOpacity="0.35" strokeWidth="0.8" />
          {size !== "sm" && (
            <text fontSize="8.5" letterSpacing="2.2" fill="currentColor" fillOpacity="0.7" className="font-display">
              <textPath href={`#${id}`}>{ring.toUpperCase()}</textPath>
            </text>
          )}
        </svg>
      )}
      <span className="relative flex items-center justify-center">
        {earned ? children : <Lock aria-hidden="true" className="size-4" strokeWidth={1.5} />}
      </span>
    </span>
  )
}
