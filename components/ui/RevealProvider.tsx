"use client"

import { usePathname } from "next/navigation"
import { useEffect } from "react"

/**
 * Adds a "visible" flag to [data-reveal] elements as they enter the viewport.
 * One observer for the whole page keeps scroll motion cheap. Content is visible
 * by default; the hidden starting state only applies once the "js" class is set.
 */
export default function RevealProvider() {
  const pathname = usePathname()

  useEffect(() => {
    document.documentElement.classList.add("js")
    const elements = document.querySelectorAll<HTMLElement>("[data-reveal]:not([data-visible='true'])")

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          entry.target.setAttribute("data-visible", "true")
          observer.unobserve(entry.target)
        })
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 },
    )

    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [pathname])

  return null
}
