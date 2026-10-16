import SuitedFigure from "@/components/illustrations/parts/SuitedFigure"

const FRONT_ROW = Array.from({ length: 11 }, (_, index) => 20 + index * 76)
const BACK_ROW = Array.from({ length: 10 }, (_, index) => 58 + index * 76)

/** Robert at a lectern addressing an audience. */
export default function SpeakingIllustration() {
  return (
    <svg viewBox="0 0 800 450" preserveAspectRatio="xMidYMid slice" className="h-full w-full" aria-hidden="true">
      <defs>
        <linearGradient id="speak-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#06140f" />
          <stop offset="1" stopColor="#0b2a20" />
        </linearGradient>
        <linearGradient id="speak-beam" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#f6e2a8" stopOpacity="0.35" />
          <stop offset="1" stopColor="#f6e2a8" stopOpacity="0" />
        </linearGradient>
      </defs>

      <rect width="800" height="450" fill="url(#speak-bg)" />
      <rect x="210" y="50" width="380" height="190" fill="#113528" stroke="#b8913f" strokeWidth="1.5" />
      <rect x="222" y="62" width="356" height="166" fill="none" stroke="#b8913f" strokeOpacity="0.35" />
      <text
        x="400"
        y="104"
        textAnchor="middle"
        fill="#e6c77e"
        fontFamily="Georgia, serif"
        fontSize="13"
        letterSpacing="4"
      >
        YOUTH · LEADERSHIP · OPPORTUNITY
      </text>

      <polygon points="400,0 290,330 510,330" fill="url(#speak-beam)" />
      <rect y="330" width="800" height="120" fill="#06140f" />
      <rect y="328" width="800" height="3" fill="#b8913f" opacity="0.6" />

      <SuitedFigure x={400} y={330} scale={0.6} pose="gesture" />
      <line x1="392" y1="252" x2="382" y2="222" stroke="#a9aca2" strokeWidth="2.5" />
      <circle cx="381" cy="219" r="4" fill="#a9aca2" />
      <path d="M346 246 L454 246 L444 336 L356 336 Z" fill="#08221a" />
      <rect x="340" y="240" width="120" height="10" fill="#113528" />
      <circle cx="400" cy="288" r="15" fill="none" stroke="#e6c77e" strokeWidth="2" />
      <text x="400" y="294" textAnchor="middle" fill="#e6c77e" fontFamily="Georgia, serif" fontSize="15">
        RK
      </text>

      {BACK_ROW.map((x) => (
        <g key={`b-${x}`} fill="#0e231b">
          <circle cx={x} cy="392" r="18" />
          <ellipse cx={x} cy="430" rx="32" ry="24" />
        </g>
      ))}
      {FRONT_ROW.map((x) => (
        <g key={`f-${x}`} fill="#030c09">
          <circle cx={x} cy="414" r="21" />
          <ellipse cx={x} cy="456" rx="36" ry="26" />
        </g>
      ))}
    </svg>
  )
}
