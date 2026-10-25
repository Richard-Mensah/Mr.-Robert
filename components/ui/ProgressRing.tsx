import { useId, type ReactNode } from "react"
import { cn } from "@/lib/utils"

type Props = {
  value: number
  total: number
  size?: number
  stroke?: number
  className?: string
  children?: ReactNode
}

/** Circular completion gauge: an emerald-to-gold arc on a faint emerald track. */
export default function ProgressRing({ value, total, size = 40, stroke = 3, className, children }: Props) {
  const gradientId = useId()
  const radius = (size - stroke) / 2
  const circumference = 2 * Math.PI * radius
  const ratio = total > 0 ? Math.min(1, value / total) : 0

  return (
    <span className={cn("relative inline-flex items-center justify-center", className)} style={{ width: size, height: size }}>
      <svg aria-hidden="true" width={size} height={size} className="-rotate-90 overflow-visible">
        <defs>
          <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#5fe3a6" />
            <stop offset="100%" stopColor="#e6c77e" />
          </linearGradient>
        </defs>
        <circle cx={size / 2} cy={size / 2} r={radius} fill="none" stroke="#5fe3a6" strokeOpacity="0.15" strokeWidth={stroke} />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={`url(#${gradientId})`}
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={circumference * (1 - ratio)}
          className="drop-shadow-[0_0_6px_rgba(95,227,166,0.55)] transition-[stroke-dashoffset] duration-1000 ease-out"
        />
      </svg>
      {children && <span className="absolute inset-0 flex items-center justify-center">{children}</span>}
    </span>
  )
}
