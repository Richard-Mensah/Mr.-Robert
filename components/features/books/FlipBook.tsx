"use client"

import { useState } from "react"
import { RotateCw } from "lucide-react"
import BookCover from "@/components/ui/BookCover"
import { PROFILE } from "@/data/profile"
import { cn } from "@/lib/utils"
import type { Book } from "@/types"

type Props = {
  book: Book
}

/** A 3D book mockup that flips to its back cover on click, tap or keyboard. */
export default function FlipBook({ book }: Props) {
  const [flipped, setFlipped] = useState(false)

  return (
    <div className="mx-auto w-full max-w-xs">
      <button
        type="button"
        onClick={() => setFlipped((value) => !value)}
        aria-pressed={flipped}
        aria-label={`${book.title}: ${flipped ? "show front cover" : "show back cover"}`}
        className="group block w-full perspective-distant"
      >
        <div
          className={cn(
            "relative transform-3d transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)]",
            flipped ? "rotate-y-180" : "group-hover:-rotate-y-12 group-hover:rotate-x-3",
          )}
        >
          <div className="backface-hidden">
            <BookCover book={book} author={PROFILE.name} />
          </div>
          <div className="absolute inset-0 flex rotate-y-180 flex-col justify-between bg-night p-7 text-left text-ivory shadow-[0_30px_60px_-20px_rgba(6,20,15,0.6)] backface-hidden sm:p-9">
            <span aria-hidden="true" className="absolute inset-4 border border-gold-light/20" />
            <p className="relative font-display text-[0.6rem] tracking-[0.2em] text-gold-light">Back cover</p>
            <div className="relative">
              <p className="font-serif text-2xl leading-tight">{book.title}</p>
              {book.subtitle && <p className="mt-3 text-sm leading-relaxed text-ivory/70">{book.subtitle}</p>}
              <p className="mt-6 text-xs leading-relaxed text-ivory/55">Synopsis, publisher and ordering details coming soon.</p>
            </div>
            <p className="relative font-script text-2xl text-gold-light">See you at the top.</p>
          </div>
        </div>
      </button>
      <p className="mt-5 flex items-center justify-center gap-2 text-xs text-muted">
        <RotateCw aria-hidden="true" className="size-3.5" strokeWidth={1.5} />
        Tap the book to turn it over
      </p>
    </div>
  )
}
