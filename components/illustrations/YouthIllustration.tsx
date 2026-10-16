import YouthFigure from "@/components/illustrations/parts/YouthFigure"

const STEPS = ["Discover", "Develop", "Connect", "Lead", "Transform"]
const CLIMBERS = [
  { shirt: "#8fb8a2", hair: "short" as const },
  { shirt: "#f5f1e8", hair: "wrap" as const },
  { shirt: "#e6c77e", hair: "puff" as const },
  { shirt: "#1f4d3a", hair: "short" as const },
  { shirt: "#c9a24c", hair: "wrap" as const, armsUp: true },
]

/** Young people climbing five steps, one per stage of the youth development framework. */
export default function YouthIllustration() {
  return (
    <svg viewBox="0 0 800 450" preserveAspectRatio="xMidYMid slice" className="h-full w-full" aria-hidden="true">
      <defs>
        <linearGradient id="youth-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#06140f" />
          <stop offset="1" stopColor="#1f4d3a" />
        </linearGradient>
        <radialGradient id="youth-sun" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#f6e2a8" stopOpacity="0.9" />
          <stop offset="1" stopColor="#e6c77e" stopOpacity="0" />
        </radialGradient>
      </defs>

      <rect width="800" height="450" fill="url(#youth-bg)" />
      <circle cx="690" cy="90" r="140" fill="url(#youth-sun)" />
      <circle cx="690" cy="90" r="40" fill="#e6c77e" />

      {STEPS.map((label, index) => {
        const x = 70 + index * 130
        const top = 410 - index * 62
        return (
          <g key={label}>
            <rect x={x} y={top} width="134" height={450 - top} fill={index % 2 ? "#143326" : "#113528"} />
            <rect x={x} y={top} width="134" height="3" fill="#e6c77e" />
            <text
              x={x + 67}
              y={top + 28}
              textAnchor="middle"
              fill="#e6c77e"
              fontFamily="Georgia, serif"
              fontSize="13"
              letterSpacing="3"
            >
              {label.toUpperCase()}
            </text>
          </g>
        )
      })}

      {CLIMBERS.map((climber, index) => (
        <YouthFigure
          key={climber.shirt}
          x={137 + index * 130}
          y={410 - index * 62}
          scale={0.55}
          shirt={climber.shirt}
          hair={climber.hair}
          armsUp={climber.armsUp}
        />
      ))}

      <line x1="760" y1="110" x2="760" y2="166" stroke="#d9d3c5" strokeWidth="3" />
      <path d="M760 112 Q780 110 795 120 Q780 128 760 132 Z" fill="#e6c77e" />
    </svg>
  )
}
