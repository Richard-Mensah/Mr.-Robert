import Image from "next/image"
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react"
import { cn } from "@/lib/utils"
import type { RecordSlide } from "@/data/record"

type Props = {
  slides: RecordSlide[]
  index: number
  playing: boolean
  running: boolean
  intervalMs: number
  onGo: (index: number) => void
  onPrev: () => void
  onNext: () => void
  onToggle: () => void
}

/** Filmstrip index with per-slide progress, plus previous, next and play/pause. */
export default function RecordControls({ slides, index, playing, running, intervalMs, onGo, onPrev, onNext, onToggle }: Props) {
  const button =
    "inline-flex size-11 items-center justify-center rounded-full border border-ivory/20 text-ivory transition-colors hover:border-gold-light hover:text-gold-light"

  return (
    <div className="absolute inset-x-0 bottom-0 z-20 px-5 pb-6 sm:px-8 lg:px-12 lg:pb-10">
      <div className="mx-auto flex w-full max-w-[96rem] items-end gap-6">
        <ol className="grid flex-1 grid-cols-4 gap-2 sm:gap-3 lg:grid-cols-8">
          {slides.map((slide, position) => {
            const active = position === index
            const done = position < index
            return (
              <li key={slide.id} className={cn(position > 3 && "hidden lg:block")}>
                <button
                  type="button"
                  onClick={() => onGo(position)}
                  aria-current={active ? "true" : undefined}
                  aria-label={`Show ${position + 1}: ${slide.title}`}
                  className="group block w-full text-left"
                >
                  <span className="relative block h-0.5 overflow-hidden bg-ivory/15">
                    <span
                      key={active ? `run-${index}` : position}
                      className={cn(
                        "absolute inset-0 origin-left bg-gold-light",
                        done || (active && !playing) ? "scale-x-100" : "scale-x-0",
                      )}
                      style={
                        active && playing
                          ? {
                              animation: `record-fill ${intervalMs}ms linear forwards`,
                              animationPlayState: running ? "running" : "paused",
                            }
                          : undefined
                      }
                    />
                  </span>
                  <span className="mt-3 hidden items-center gap-3 sm:flex">
                    <span className={cn("relative size-10 shrink-0 overflow-hidden rounded-sm ring-1 transition", active ? "ring-gold-light" : "opacity-60 ring-ivory/15 group-hover:opacity-100")}>
                      <Image src={slide.photo.src} alt="" fill sizes="40px" className="object-cover" />
                    </span>
                    <span className={cn("line-clamp-2 text-xs leading-snug transition-colors", active ? "text-ivory" : "text-ivory/50 group-hover:text-ivory/80")}>
                      {slide.title}
                    </span>
                  </span>
                </button>
              </li>
            )
          })}
        </ol>

        <div className="flex shrink-0 items-center gap-2">
          <p className="mr-2 hidden font-display text-lg tabular-nums tracking-[0.12em] text-ivory/70 md:block" aria-hidden="true">
            <span key={index} className="inline-block animate-rise text-gold-light">{String(index + 1).padStart(2, "0")}</span>
            <span className="mx-1 text-ivory/30">/</span>
            {String(slides.length).padStart(2, "0")}
          </p>
          <button type="button" onClick={onPrev} className={button}>
            <ChevronLeft aria-hidden="true" className="size-5" strokeWidth={1.5} />
            <span className="sr-only">Previous</span>
          </button>
          <button type="button" onClick={onToggle} className={button}>
            {playing ? <Pause aria-hidden="true" className="size-4" strokeWidth={1.5} /> : <Play aria-hidden="true" className="size-4" strokeWidth={1.5} />}
            <span className="sr-only">{playing ? "Pause slideshow" : "Play slideshow"}</span>
          </button>
          <button type="button" onClick={onNext} className={button}>
            <ChevronRight aria-hidden="true" className="size-5" strokeWidth={1.5} />
            <span className="sr-only">Next</span>
          </button>
        </div>
      </div>
    </div>
  )
}
