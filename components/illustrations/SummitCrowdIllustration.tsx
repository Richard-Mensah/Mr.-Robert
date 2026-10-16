import YouthFigure from "@/components/illustrations/parts/YouthFigure"

const FLAGS = Array.from({ length: 12 }, (_, index) => index)
const FLAG_COLORS = ["#e6c77e", "#f5f1e8", "#8fb8a2"]

const PEOPLE = [
  { x: 85, shirt: "#8fb8a2", hair: "wrap" as const, wrap: "#e6c77e" },
  { x: 165, shirt: "#f5f1e8", hair: "short" as const },
  { x: 250, shirt: "#c9a24c", hair: "puff" as const, armsUp: true },
  { x: 335, shirt: "#1f4d3a", hair: "short" as const },
  { x: 415, shirt: "#e6c77e", hair: "wrap" as const, wrap: "#1f4d3a" },
]

/** Young people gathered under a Tamale Youth Summit banner. */
export default function SummitCrowdIllustration() {
  return (
    <svg viewBox="0 0 500 400" preserveAspectRatio="xMidYMid slice" className="h-full w-full" aria-hidden="true">
      <defs>
        <linearGradient id="crowd-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#0b2a20" />
          <stop offset="1" stopColor="#1f4d3a" />
        </linearGradient>
        <radialGradient id="crowd-glow" cx="0.5" cy="0.4" r="0.6">
          <stop offset="0" stopColor="#e6c77e" stopOpacity="0.35" />
          <stop offset="1" stopColor="#e6c77e" stopOpacity="0" />
        </radialGradient>
      </defs>

      <rect width="500" height="400" fill="url(#crowd-bg)" />
      <rect width="500" height="400" fill="url(#crowd-glow)" />

      <path d="M0 30 Q250 80 500 30" stroke="#d9d3c5" strokeWidth="1.5" fill="none" />
      {FLAGS.map((index) => {
        const x = 20 + index * 40
        const t = x / 500
        const y = 30 + 4 * 50 * t * (1 - t)
        return (
          <path
            key={index}
            d={`M${x - 10} ${y} L${x + 10} ${y} L${x} ${y + 22} Z`}
            fill={FLAG_COLORS[index % FLAG_COLORS.length]}
          />
        )
      })}

      <rect x="105" y="92" width="290" height="62" rx="3" fill="#c9a24c" />
      <rect x="113" y="100" width="274" height="46" fill="none" stroke="#0b2a20" strokeOpacity="0.4" />
      <text
        x="250"
        y="131"
        textAnchor="middle"
        fill="#0b2a20"
        fontFamily="Georgia, serif"
        fontSize="16"
        fontWeight="700"
        letterSpacing="2"
      >
        TAMALE YOUTH SUMMIT
      </text>

      <ellipse cx="250" cy="392" rx="280" ry="34" fill="#143326" />
      {PEOPLE.map((person) => (
        <YouthFigure
          key={person.x}
          x={person.x}
          y={384}
          scale={0.92}
          shirt={person.shirt}
          hair={person.hair}
          wrapColor={person.wrap}
          armsUp={person.armsUp}
        />
      ))}

      <path d="M38 168 l4 10 l10 4 l-10 4 l-4 10 l-4 -10 l-10 -4 l10 -4 Z" fill="#f6e2a8" opacity="0.8" />
      <path d="M462 158 l3 8 l8 3 l-8 3 l-3 8 l-3 -8 l-8 -3 l8 -3 Z" fill="#f6e2a8" opacity="0.7" />
    </svg>
  )
}
