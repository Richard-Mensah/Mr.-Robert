"use client"

import type { ReactNode } from "react"
import { useTilt } from "@/hooks/useTilt"
import { cn } from "@/lib/utils"

type Props = {
  children: ReactNode
  className?: string
}

/** Card wrapper with a pointer-following tilt and a soft gold glow. */
export default function TiltCard({ children, className }: Props) {
  const { ref, onPointerMove, onPointerLeave } = useTilt<HTMLDivElement>()

  return (
    <div
      ref={ref}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
      className={cn(
        "group relative h-full transition-transform duration-300 ease-out will-change-transform",
        "before:pointer-events-none before:absolute before:inset-0 before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-100",
        "before:bg-[radial-gradient(320px_circle_at_var(--glow-x,50%)_var(--glow-y,50%),rgb(230_199_126/0.14),transparent_60%)]",
        className,
      )}
    >
      {children}
    </div>
  )
}
