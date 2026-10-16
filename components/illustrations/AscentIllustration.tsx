import SuitedFigure from "@/components/illustrations/parts/SuitedFigure"
import YouthFigure from "@/components/illustrations/parts/YouthFigure"

const STARS = [
  [40, 50, 1.6], [110, 90, 1.1], [180, 40, 1.4], [320, 70, 1.8], [360, 140, 1.1], [70, 170, 1.2], [290, 30, 1],
]

/** Hero scene: Robert on the summit with a flag, young people climbing the trail behind him. */
export default function AscentIllustration() {
  return (
    <svg viewBox="0 0 400 500" preserveAspectRatio="xMidYMid slice" className="h-full w-full" aria-hidden="true">
      <defs>
        <linearGradient id="ascent-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#06140f" />
          <stop offset="0.6" stopColor="#0b2a20" />
          <stop offset="1" stopColor="#1f4d3a" />
        </linearGradient>
        <radialGradient id="ascent-sun" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#f6e2a8" stopOpacity="0.95" />
          <stop offset="0.45" stopColor="#e6c77e" stopOpacity="0.45" />
          <stop offset="1" stopColor="#e6c77e" stopOpacity="0" />
        </radialGradient>
      </defs>

      <rect width="400" height="500" fill="url(#ascent-sky)" />
      {STARS.map(([cx, cy, r]) => (
        <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r={r} fill="#f6e2a8" opacity="0.8" />
      ))}

      <circle cx="235" cy="300" r="150" fill="url(#ascent-sun)" />
      <circle cx="235" cy="300" r="58" fill="#e6c77e" opacity="0.9" />

      <path d="M10 360 Q200 230 395 300" stroke="#e6c77e" strokeWidth="3.5" fill="none" strokeLinecap="round" opacity="0.85" />
      <path d="M30 372 Q205 262 385 318" stroke="#b8913f" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.7" />

      <path d="M0 400 L90 310 L150 355 L245 255 L330 335 L400 300 L400 500 L0 500 Z" fill="#113528" />
      <path d="M0 500 L0 450 L120 395 L232 332 L335 400 L400 425 L400 500 Z" fill="#143326" />
      <path d="M198 351 L232 332 L268 352" stroke="#e6c77e" strokeWidth="3" fill="none" strokeLinecap="round" />
      <path
        d="M55 500 Q120 470 150 440 T232 334"
        stroke="#e6c77e"
        strokeWidth="2.5"
        strokeDasharray="2 9"
        strokeLinecap="round"
        fill="none"
        opacity="0.8"
      />

      <line x1="266" y1="170" x2="266" y2="333" stroke="#d9d3c5" strokeWidth="3" strokeLinecap="round" />
      <path d="M266 172 Q290 168 310 182 Q290 192 266 198 Z" fill="#e6c77e" />
      <SuitedFigure x={232} y={334} scale={0.42} pose="raise" />

      <YouthFigure x={150} y={448} scale={0.3} shirt="#c9a24c" hair="puff" armsUp />
      <YouthFigure x={98} y={476} scale={0.28} shirt="#f5f1e8" hair="wrap" wrapColor="#8fb8a2" />
      <YouthFigure x={48} y={500} scale={0.27} shirt="#8fb8a2" />
    </svg>
  )
}
