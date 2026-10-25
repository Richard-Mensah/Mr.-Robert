"use client"

import { useJourney } from "@/hooks/useJourney"
import { MOTTO } from "@/constants"

/** The end of the climb: a ridge, a rising flag and the motto signed in script. */
export default function SummitMoment() {
  const { unlocked, total } = useJourney()
  const complete = unlocked.length === total

  return (
    <div data-reveal className="relative mx-auto max-w-3xl text-center">
      <svg viewBox="0 0 600 170" className="mx-auto w-full max-w-xl" aria-hidden="true">
        <path d="M0 170 L140 95 L210 130 L300 52 L390 128 L460 98 L600 170 Z" fill="#113528" />
        <path d="M262 84 L300 52 L338 84" stroke="#e6c77e" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <path
          className="draw-path"
          style={{ ["--path-length" as string]: 420 }}
          d="M40 170 Q120 140 170 128 T300 54"
          stroke="#e6c77e"
          strokeWidth="2"
          strokeDasharray="3 8"
          fill="none"
        />
        <g className="flag-rise">
          <line x1="300" y1="6" x2="300" y2="54" stroke="#d9d3c5" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M300 8 Q324 4 342 16 Q324 26 300 30 Z" fill="#e6c77e" />
        </g>
      </svg>
      <p className="mt-6 font-script text-5xl text-gold-light sm:text-6xl">{MOTTO}</p>
      <p className="mt-4 text-sm text-ivory/55" aria-live="polite">
        {complete
          ? "Every section reviewed. Your briefing is complete."
          : `${unlocked.length} of ${total} credentials verified. Review every section to complete the briefing.`}
      </p>
    </div>
  )
}
