"use client"

import { useEffect, useRef, useState } from "react"

type Props = {
  value: number
  /** Appended after the number, e.g. "+". */
  suffix?: string
  durationMs?: number
  className?: string
}

/**
 * Counts up to a real figure once it scrolls into view. Only use it for counts taken from the site's
 * own data or from a sourced figure in data/impact.ts, never for invented statistics.
 */
export default function CountUp({ value, suffix = "", durationMs = 1400, className }: Props) {
  const ref = useRef<HTMLSpanElement>(null)
  const [shown, setShown] = useState(value)

  useEffect(() => {
    const node = ref.current
    if (!node || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    let frame = 0
    // The real figure stays on screen until the count starts, so it is never stuck at zero.
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return
      observer.disconnect()
      setShown(0)
      const start = performance.now()
      const tick = (now: number) => {
        const t = Math.min(1, (now - start) / durationMs)
        setShown(Math.round(value * (1 - Math.pow(1 - t, 3))))
        if (t < 1) frame = requestAnimationFrame(tick)
      }
      frame = requestAnimationFrame(tick)
    })
    observer.observe(node)
    return () => {
      observer.disconnect()
      cancelAnimationFrame(frame)
    }
  }, [value, durationMs])

  return (
    <span ref={ref} className={className}>
      <span aria-hidden="true">
        {shown.toLocaleString("en-GB")}
        {suffix}
      </span>
      <span className="sr-only">
        {value.toLocaleString("en-GB")}
        {suffix}
      </span>
    </span>
  )
}
