type Props = {
  x: number
  y: number
  scale?: number
  shirt: string
  skin?: string
  hair?: "short" | "puff" | "wrap"
  wrapColor?: string
  armsUp?: boolean
}

/**
 * Simple cartoon of a young person. Local coordinates: feet at y = 0, head top near y = -200.
 */
export default function YouthFigure({
  x,
  y,
  scale = 1,
  shirt,
  skin = "#7a4a2a",
  hair = "short",
  wrapColor = "#c9a24c",
  armsUp = false,
}: Props) {
  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`}>
      <path d="M-28 -72 L-25 -6 L-5 -6 L0 -50 L5 -6 L25 -6 L28 -72 Z" fill="#132a3a" />
      <ellipse cx="-15" cy="-3" rx="13" ry="5" fill="#f5f1e8" />
      <ellipse cx="15" cy="-3" rx="13" ry="5" fill="#f5f1e8" />

      {armsUp ? (
        <>
          <path d="M-30 -140 L-52 -192 L-42 -198 L-22 -146 Z" fill={shirt} />
          <path d="M30 -140 L52 -192 L42 -198 L22 -146 Z" fill={shirt} />
          <circle cx="-48" cy="-198" r="6.5" fill={skin} />
          <circle cx="48" cy="-198" r="6.5" fill={skin} />
        </>
      ) : (
        <>
          <path d="M-30 -140 L-40 -80 L-30 -78 L-22 -132 Z" fill={shirt} />
          <path d="M30 -140 L40 -80 L30 -78 L22 -132 Z" fill={shirt} />
          <circle cx="-36" cy="-75" r="6.5" fill={skin} />
          <circle cx="36" cy="-75" r="6.5" fill={skin} />
        </>
      )}

      <path d="M-32 -146 Q-36 -110 -30 -70 L30 -70 Q36 -110 32 -146 Q16 -154 0 -152 Q-16 -154 -32 -146 Z" fill={shirt} />
      <path d="M-9 -152 Q0 -140 9 -152" fill={skin} />
      <rect x="-6" y="-160" width="12" height="10" fill={skin} />

      <ellipse cx="0" cy="-178" rx="22" ry="24" fill={skin} />
      {hair === "short" && <path d="M-22 -182 Q-22 -206 0 -205 Q22 -206 22 -182 Q16 -196 0 -195 Q-16 -196 -22 -182 Z" fill="#141414" />}
      {hair === "puff" && <circle cx="0" cy="-200" r="20" fill="#141414" />}
      {hair === "wrap" && (
        <path d="M-25 -180 Q-28 -214 0 -214 Q28 -214 25 -180 Q14 -196 0 -195 Q-14 -196 -25 -180 Z" fill={wrapColor} />
      )}
      <circle cx="-8" cy="-179" r="2.3" fill="#141414" />
      <circle cx="8" cy="-179" r="2.3" fill="#141414" />
      <path d="M-7 -167 Q0 -161 7 -167" stroke="#2a1608" strokeWidth="2.2" fill="none" strokeLinecap="round" />
    </g>
  )
}
