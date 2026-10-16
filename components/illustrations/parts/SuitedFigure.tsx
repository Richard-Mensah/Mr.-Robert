type Props = {
  x: number
  y: number
  scale?: number
  pose?: "stand" | "raise" | "gesture"
}

const SKIN = "#6b4226"
const SKIN_SHADE = "#573519"
const SUIT = "#0e2f24"
const SUIT_SHADE = "#08221a"

/**
 * Stylised cartoon of Robert in a suit with a gold tie. A placeholder for photography.
 * Local coordinates: feet at y = 0, top of head at about y = -285.
 */
export default function SuitedFigure({ x, y, scale = 1, pose = "stand" }: Props) {
  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`}>
      {/* Legs and shoes */}
      <path d="M-42 -102 L-38 -8 L-7 -8 L0 -78 L7 -8 L38 -8 L42 -102 Z" fill="#071811" />
      <ellipse cx="-24" cy="-4" rx="19" ry="6" fill="#020a07" />
      <ellipse cx="24" cy="-4" rx="19" ry="6" fill="#020a07" />

      {/* Left arm (always at side) */}
      <path d="M-46 -196 L-60 -112 L-46 -108 L-36 -182 Z" fill={SUIT_SHADE} />
      <circle cx="-54" cy="-104" r="8" fill={SKIN} />

      {/* Jacket */}
      <path
        d="M-48 -206 Q-56 -200 -56 -180 L-48 -100 L48 -100 L56 -180 Q56 -200 48 -206 L14 -213 L0 -182 L-14 -213 Z"
        fill={SUIT}
      />
      <path d="M-14 -213 L0 -182 L-10 -160 L-24 -205 Z" fill={SUIT_SHADE} />
      <path d="M14 -213 L0 -182 L10 -160 L24 -205 Z" fill={SUIT_SHADE} />
      <path d="M-14 -212 L14 -212 L0 -182 Z" fill="#f5f1e8" />
      <path d="M-5 -208 L5 -208 L7 -152 L0 -142 L-7 -152 Z" fill="#c9a24c" />
      <circle cx="0" cy="-124" r="2.5" fill="#c9a24c" />
      <path d="M30 -186 l10 0" stroke="#c9a24c" strokeWidth="2.5" strokeLinecap="round" />

      {/* Right arm by pose */}
      {pose === "stand" && (
        <>
          <path d="M46 -196 L60 -112 L46 -108 L36 -182 Z" fill={SUIT_SHADE} />
          <circle cx="54" cy="-104" r="8" fill={SKIN} />
        </>
      )}
      {pose === "raise" && (
        <>
          <path d="M40 -200 L72 -262 L84 -254 L50 -186 Z" fill={SUIT_SHADE} />
          <circle cx="80" cy="-264" r="8.5" fill={SKIN} />
        </>
      )}
      {pose === "gesture" && (
        <>
          <path d="M42 -198 L84 -160 L76 -148 L36 -180 Z" fill={SUIT_SHADE} />
          <circle cx="86" cy="-154" r="8.5" fill={SKIN} />
        </>
      )}

      {/* Neck and head */}
      <rect x="-8" y="-226" width="16" height="16" fill={SKIN_SHADE} />
      <circle cx="-29" cy="-252" r="6" fill={SKIN} />
      <circle cx="29" cy="-252" r="6" fill={SKIN} />
      <ellipse cx="0" cy="-252" rx="29" ry="33" fill={SKIN} />
      <path d="M-29 -258 Q-30 -290 0 -289 Q30 -290 29 -258 Q22 -276 0 -276 Q-22 -276 -29 -258 Z" fill="#141414" />
      <path d="M-15 -262 l9 -1.5 M6 -263.5 l9 1.5" stroke="#141414" strokeWidth="2.6" strokeLinecap="round" />
      <circle cx="-10" cy="-253" r="2.8" fill="#141414" />
      <circle cx="10" cy="-253" r="2.8" fill="#141414" />
      <path d="M-2 -250 Q0 -242 3 -244" stroke={SKIN_SHADE} strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M-10 -235 Q0 -227 10 -235" stroke="#2a1608" strokeWidth="2.6" fill="none" strokeLinecap="round" />
      <path d="M-16 -232 Q0 -222 16 -232" stroke="#141414" strokeWidth="1.5" fill="none" opacity="0.5" />
    </g>
  )
}
