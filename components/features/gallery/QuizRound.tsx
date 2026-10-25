import Image from "next/image"
import { Check, X } from "lucide-react"
import { cn } from "@/lib/utils"
import type { Photo, Story } from "@/types"

export type Round = { photo: Photo; options: Story[] }

type Props = {
  round: Round
  position: number
  total: number
  picked: string | null
  onChoose: (slug: string) => void
  onNext: () => void
}

/** One Field Recall round: a photograph and the stories it might belong to. */
export default function QuizRound({ round, position, total, picked, onChoose, onNext }: Props) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 sm:items-center">
      <div className="relative aspect-[4/3] overflow-hidden border border-gold-light/25">
        <Image
          key={round.photo.id}
          src={round.photo.src}
          alt={`Round ${position} photograph`}
          fill
          sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
          className="animate-rise object-cover"
        />
      </div>
      <div>
        <p className="text-sm text-ivory/70">Which story is this?</p>
        <ul className="mt-4 grid gap-3">
          {round.options.map((option) => {
            const correct = option.slug === round.photo.story
            const chosen = picked === option.slug
            return (
              <li key={option.slug}>
                <button
                  type="button"
                  onClick={() => onChoose(option.slug)}
                  disabled={picked !== null}
                  className={cn(
                    "flex min-h-12 w-full items-center justify-between gap-3 border px-4 py-3 text-left text-sm transition-colors",
                    !picked && "border-ivory/20 hover:border-cerulean-light hover:text-cerulean-light",
                    picked && correct && "border-cerulean-light bg-cerulean-light text-ink",
                    picked && chosen && !correct && "border-red-300/60 bg-red-900/40 text-ivory",
                    picked && !chosen && !correct && "border-ivory/10 text-ivory/40",
                  )}
                >
                  {option.title}
                  {picked && correct && <Check aria-hidden="true" className="size-4 shrink-0" />}
                  {picked && chosen && !correct && <X aria-hidden="true" className="size-4 shrink-0" />}
                </button>
              </li>
            )
          })}
        </ul>
        {picked && (
          <div className="mt-5" aria-live="polite">
            <p className="text-sm text-ivory/80">
              {picked === round.photo.story ? "Correct. " : "Not quite. "}
              {round.photo.alt}.
            </p>
            <button
              type="button"
              onClick={onNext}
              className="mt-4 inline-flex min-h-11 items-center border border-gold-light/60 px-5 text-sm text-gold-light hover:bg-gold-light hover:text-ink"
            >
              {position >= total ? "See my score" : "Next photo"}
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
