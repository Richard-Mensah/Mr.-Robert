"use client"

import { useCallback, useEffect, useState } from "react"

/**
 * Index and timing for an auto-advancing slideshow.
 * Auto-advance starts off when the visitor prefers reduced motion, and pauses while `held` is true
 * (hover or keyboard focus inside the carousel).
 */
export function useSlideshow(count: number, intervalMs: number) {
  const [index, setIndex] = useState(0)
  const [playing, setPlaying] = useState(true)
  const [held, setHeld] = useState(false)
  const [manual, setManual] = useState(false)

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) setPlaying(false)
  }, [])

  useEffect(() => {
    if (!playing || held || count < 2) return
    const timer = window.setTimeout(() => {
      setManual(false)
      setIndex((current) => (current + 1) % count)
    }, intervalMs)
    return () => window.clearTimeout(timer)
  }, [index, playing, held, count, intervalMs])

  const go = useCallback(
    (next: number) => {
      setManual(true)
      setIndex(((next % count) + count) % count)
    },
    [count],
  )

  return {
    index,
    playing,
    running: playing && !held,
    /** True when the visitor chose the current slide, so it can be announced. */
    manual,
    go,
    next: () => go(index + 1),
    prev: () => go(index - 1),
    toggle: () => setPlaying((value) => !value),
    setHeld,
  }
}
