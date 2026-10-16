"use client"

import { useEffect, useRef } from "react"
import { cn } from "@/lib/utils"
import type { CompassLevel, CompassQuestion as Question } from "@/types"

type Props = {
  question: Question
  index: number
  total: number
  selected?: CompassLevel
  onAnswer: (level: CompassLevel) => void
}

export default function CompassQuestion({ question, index, total, selected, onAnswer }: Props) {
  const headingRef = useRef<HTMLHeadingElement>(null)

  // Move focus to each new question so keyboard and screen reader users follow the flow.
  useEffect(() => {
    if (index > 0) headingRef.current?.focus()
  }, [index])

  return (
    <fieldset className="animate-toast">
      <legend className="sr-only">
        Question {index + 1} of {total}
      </legend>
      <h3 ref={headingRef} tabIndex={-1} className="font-serif text-3xl leading-tight tracking-tight focus:outline-none sm:text-4xl">
        {question.prompt}
      </h3>
      <div className="mt-8 grid gap-3">
        {question.options.map((option, optionIndex) => (
          <button
            key={option.label}
            type="button"
            aria-pressed={selected === option.level}
            onClick={() => onAnswer(option.level)}
            className={cn(
              "group flex min-h-14 items-center gap-4 border px-5 py-3 text-left transition-all duration-300",
              selected === option.level
                ? "border-gold-light bg-gold-light text-ink"
                : "border-ivory/15 bg-ivory/[0.03] text-ivory hover:border-gold-light/60 hover:bg-ivory/[0.06]",
            )}
          >
            <span
              className={cn(
                "flex size-7 shrink-0 items-center justify-center border font-display text-xs",
                selected === option.level ? "border-ink/30" : "border-ivory/25 text-gold-light group-hover:border-gold-light",
              )}
            >
              {String.fromCharCode(65 + optionIndex)}
            </span>
            <span className="leading-snug">{option.label}</span>
          </button>
        ))}
      </div>
    </fieldset>
  )
}
