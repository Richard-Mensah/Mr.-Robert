"use client"

import { useRef, type PointerEvent } from "react"

const MAX_DEGREES = 4

/** Gentle 3D tilt that follows the pointer. Ignored for touch and reduced-motion users. */
export function useTilt<T extends HTMLElement>() {
  const ref = useRef<T>(null)

  function onPointerMove(event: PointerEvent<T>) {
    const node = ref.current
    if (!node || event.pointerType !== "mouse") return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    const rect = node.getBoundingClientRect()
    const x = (event.clientX - rect.left) / rect.width - 0.5
    const y = (event.clientY - rect.top) / rect.height - 0.5
    node.style.transform = `perspective(900px) rotateX(${-y * MAX_DEGREES}deg) rotateY(${x * MAX_DEGREES}deg)`
    node.style.setProperty("--glow-x", `${(x + 0.5) * 100}%`)
    node.style.setProperty("--glow-y", `${(y + 0.5) * 100}%`)
  }

  function onPointerLeave() {
    if (ref.current) ref.current.style.transform = ""
  }

  return { ref, onPointerMove, onPointerLeave }
}
