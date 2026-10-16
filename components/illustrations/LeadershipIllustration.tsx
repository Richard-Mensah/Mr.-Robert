import SuitedFigure from "@/components/illustrations/parts/SuitedFigure"
import YouthFigure from "@/components/illustrations/parts/YouthFigure"

const BARS = [46, 64, 58, 82, 72, 96]

/** Robert presenting six areas of work to young people. */
export default function LeadershipIllustration() {
  return (
    <svg viewBox="0 0 400 500" preserveAspectRatio="xMidYMid slice" className="h-full w-full" aria-hidden="true">
      <defs>
        <linearGradient id="lead-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#06140f" />
          <stop offset="1" stopColor="#0b2a20" />
        </linearGradient>
      </defs>

      <rect width="400" height="500" fill="url(#lead-bg)" />
      <rect x="40" y="60" width="320" height="190" fill="#113528" stroke="#b8913f" strokeWidth="1.5" />
      <text x="200" y="92" textAnchor="middle" fill="#e6c77e" fontFamily="Georgia, serif" fontSize="12" letterSpacing="4">
        OPPORTUNITY
      </text>
      {BARS.map((height, index) => {
        const x = 70 + index * 46
        return (
          <g key={x}>
            <rect x={x} y={225 - height} width="28" height={height} fill="#e6c77e" opacity={0.55 + index * 0.08} />
            <circle cx={x + 14} cy={213 - height} r="5" fill="#f5f1e8" />
          </g>
        )
      })}
      <line x1="60" y1="226" x2="340" y2="226" stroke="#d9d3c5" strokeOpacity="0.5" />

      <rect y="470" width="400" height="30" fill="#06140f" />
      <SuitedFigure x={120} y={474} scale={0.66} pose="gesture" />
      <YouthFigure x={260} y={474} scale={0.72} shirt="#8fb8a2" hair="wrap" wrapColor="#e6c77e" />
      <YouthFigure x={340} y={474} scale={0.7} shirt="#f5f1e8" hair="short" />
    </svg>
  )
}
