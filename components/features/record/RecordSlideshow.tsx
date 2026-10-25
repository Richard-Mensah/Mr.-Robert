"use client"

import { useRef, type KeyboardEvent, type TouchEvent } from "react"
import RecordControls from "@/components/features/record/RecordControls"
import RecordSlide from "@/components/features/record/RecordSlide"
import { RECORD_INTERVAL_MS, RECORD_SLIDES } from "@/data/record"
import { useSlideshow } from "@/hooks/useSlideshow"

const SWIPE_PX = 48

/** "The Record": an auto-advancing carousel of Robert's mandate, convenings and publications. */
export default function RecordSlideshow() {
  const show = useSlideshow(RECORD_SLIDES.length, RECORD_INTERVAL_MS)
  const touchX = useRef<number | null>(null)
  const current = RECORD_SLIDES[show.index]

  const onKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (event.key === "ArrowRight") show.next()
    if (event.key === "ArrowLeft") show.prev()
  }
  const onTouchStart = (event: TouchEvent) => {
    touchX.current = event.touches[0].clientX
  }
  const onTouchEnd = (event: TouchEvent) => {
    if (touchX.current === null) return
    const delta = event.changedTouches[0].clientX - touchX.current
    if (Math.abs(delta) > SWIPE_PX) (delta < 0 ? show.next : show.prev)()
    touchX.current = null
  }

  return (
    <section
      id="record"
      aria-roledescription="carousel"
      aria-labelledby="record-title"
      data-checkpoint="The Record"
      onKeyDown={onKeyDown}
      onMouseEnter={() => show.setHeld(true)}
      onMouseLeave={() => show.setHeld(false)}
      onFocus={() => show.setHeld(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) show.setHeld(false)
      }}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      className="relative scroll-mt-16 overflow-hidden bg-ink text-ivory"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 z-20 px-5 pt-10 sm:px-8 lg:px-12 lg:pt-14">
        <div className="mx-auto flex w-full max-w-[96rem] items-center gap-4">
          <h2 id="record-title" className="font-display text-sm tracking-[0.24em] text-gold-light">
            The Record
          </h2>
          <span aria-hidden="true" className="data-rule max-w-xs flex-1" />
          <span className="hidden font-display text-sm tracking-[0.2em] text-ivory/50 sm:inline">Mandate · Convenings · Publications</span>
        </div>
      </div>

      <div className="relative h-[88svh] min-h-[38rem] lg:h-[92svh]">
        {RECORD_SLIDES.map((slide, position) => (
          <RecordSlide
            key={slide.id}
            slide={slide}
            active={position === show.index}
            position={position + 1}
            total={RECORD_SLIDES.length}
            priority={position === 0}
          />
        ))}
      </div>

      <RecordControls
        slides={RECORD_SLIDES}
        index={show.index}
        playing={show.playing}
        running={show.running}
        intervalMs={RECORD_INTERVAL_MS}
        onGo={show.go}
        onPrev={show.prev}
        onNext={show.next}
        onToggle={show.toggle}
      />

      <p className="sr-only" aria-live="polite">
        {show.manual ? `Showing ${show.index + 1} of ${RECORD_SLIDES.length}: ${current.title}` : ""}
      </p>
    </section>
  )
}
