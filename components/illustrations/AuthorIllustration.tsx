import SuitedFigure from "@/components/illustrations/parts/SuitedFigure"

const SPINE_COLORS = ["#c9a24c", "#f5f1e8", "#8fb8a2", "#1f4d3a", "#e6c77e", "#b8913f"]
const SHELVES = [110, 210]

/** Robert reading, with a bookshelf and his two books stacked beside him. */
export default function AuthorIllustration() {
  return (
    <svg viewBox="0 0 400 500" preserveAspectRatio="xMidYMid slice" className="h-full w-full" aria-hidden="true">
      <defs>
        <radialGradient id="author-lamp" cx="0.5" cy="0.15" r="0.7">
          <stop offset="0" stopColor="#e6c77e" stopOpacity="0.35" />
          <stop offset="1" stopColor="#0b2a20" stopOpacity="0" />
        </radialGradient>
      </defs>

      <rect width="400" height="500" fill="#0b2a20" />
      <rect width="400" height="500" fill="url(#author-lamp)" />

      {SHELVES.map((shelfY) => (
        <g key={shelfY}>
          {Array.from({ length: 14 }, (_, index) => (
            <rect
              key={index}
              x={22 + index * 26}
              y={shelfY - 70 + (index % 3) * 8}
              width="20"
              height={70 - (index % 3) * 8}
              fill={SPINE_COLORS[(index + shelfY) % SPINE_COLORS.length]}
              opacity="0.55"
            />
          ))}
          <rect x="10" y={shelfY} width="380" height="8" fill="#06140f" />
        </g>
      ))}

      <rect y="470" width="400" height="30" fill="#06140f" />
      <SuitedFigure x={175} y={474} scale={0.72} />
      <path
        d="M134 380 Q175 366 175 384 Q175 366 216 380 L216 410 Q175 398 175 414 Q175 398 134 410 Z"
        fill="#f5f1e8"
        stroke="#b8913f"
        strokeWidth="1.5"
      />
      <line x1="175" y1="384" x2="175" y2="414" stroke="#b8913f" strokeWidth="1.2" />

      <g fontFamily="Georgia, serif" fontSize="9" letterSpacing="1" textAnchor="middle">
        <rect x="258" y="410" width="128" height="28" fill="#1f4d3a" />
        <text x="322" y="428" fill="#f5f1e8">IF I KNEW THEN</text>
        <rect x="252" y="438" width="140" height="32" fill="#c9a24c" />
        <text x="322" y="458" fill="#0b2a20">BEYOND HANDSHAKES</text>
      </g>
    </svg>
  )
}
