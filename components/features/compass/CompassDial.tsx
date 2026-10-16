import { COMPASS_LEVELS } from "@/lib/compassScore"
import type { CompassLevel } from "@/types"

type Props = {
  level: CompassLevel | null
}

/** Compass rose whose needle swings to the visitor's level (or idles while unanswered). */
export default function CompassDial({ level }: Props) {
  const index = level ? COMPASS_LEVELS.indexOf(level) : -1
  // Spread the five levels across the upper arc, from -72° (Discover) to +72° (Transform).
  const angle = index >= 0 ? -72 + index * 36 : 0

  return (
    <svg viewBox="0 0 240 240" className="h-full w-full" aria-hidden="true">
      <circle cx="120" cy="120" r="112" fill="none" stroke="#e6c77e" strokeOpacity="0.35" />
      <circle cx="120" cy="120" r="92" fill="none" stroke="#e6c77e" strokeOpacity="0.15" strokeDasharray="2 6" />
      {COMPASS_LEVELS.map((name, tick) => {
        const theta = ((-72 + tick * 36 - 90) * Math.PI) / 180
        const active = tick === index
        return (
          <g key={name}>
            <circle
              cx={120 + Math.cos(theta) * 102}
              cy={120 + Math.sin(theta) * 102}
              r={active ? 7 : 4}
              fill={active ? "#f6e2a8" : "#e6c77e"}
              opacity={active ? 1 : 0.5}
            />
          </g>
        )
      })}
      <g
        style={{ transform: `rotate(${angle}deg)`, transformOrigin: "120px 120px" }}
        className={level ? "transition-transform duration-[1600ms] ease-[cubic-bezier(0.34,1.56,0.64,1)]" : "animate-[needle-idle_4s_ease-in-out_infinite]"}
      >
        <path d="M120 30 L131 120 L120 132 L109 120 Z" fill="#e6c77e" />
        <path d="M120 210 L129 120 L120 112 L111 120 Z" fill="#f5f1e8" opacity="0.35" />
      </g>
      <circle cx="120" cy="120" r="9" fill="#0b2a20" stroke="#e6c77e" strokeWidth="2" />
    </svg>
  )
}
