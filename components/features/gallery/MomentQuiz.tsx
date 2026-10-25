"use client"

import { useState } from "react"
import { Flame, RotateCcw } from "lucide-react"
import QuizRound, { type Round } from "@/components/features/gallery/QuizRound"
import { IMPACT_STORIES, PHOTOS } from "@/data/gallery"
import { useJourney } from "@/hooks/useJourney"

const ROUNDS = 5
const OPTIONS = 3
const PASS_MARK = 4

function shuffle<T>(items: T[]): T[] {
  const copy = [...items]
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[copy[i], copy[j]] = [copy[j], copy[i]]
  }
  return copy
}

/** Five photos from five different stories, each with two other stories as decoys. */
function buildRounds(): Round[] {
  const stories = shuffle(IMPACT_STORIES).slice(0, ROUNDS)
  return stories.map((story) => {
    const photo = shuffle(PHOTOS.filter((item) => item.story === story.slug))[0]
    const decoys = shuffle(IMPACT_STORIES.filter((item) => item.slug !== story.slug)).slice(0, OPTIONS - 1)
    return { photo, options: shuffle([story, ...decoys]) }
  })
}

/** "Which moment?": name the story behind each photo. Scoring 4 of 5 unlocks the Field Recall credential. */
export default function MomentQuiz() {
  const { unlockMilestone } = useJourney()
  const [rounds, setRounds] = useState<Round[] | null>(null)
  const [current, setCurrent] = useState(0)
  const [picked, setPicked] = useState<string | null>(null)
  const [score, setScore] = useState(0)
  const [streak, setStreak] = useState(0)
  const [best, setBest] = useState(0)

  const start = () => {
    setRounds(buildRounds())
    setCurrent(0)
    setPicked(null)
    setScore(0)
    setStreak(0)
    setBest(0)
  }

  const finished = rounds !== null && current >= rounds.length
  const round = rounds && !finished ? rounds[current] : null

  const choose = (slug: string) => {
    if (!round || picked) return
    setPicked(slug)
    if (slug === round.photo.story) {
      const nextStreak = streak + 1
      setScore((value) => value + 1)
      setStreak(nextStreak)
      setBest((value) => Math.max(value, nextStreak))
    } else {
      setStreak(0)
    }
  }

  const next = () => {
    if (!rounds) return
    const isLast = current + 1 >= rounds.length
    if (isLast && score >= PASS_MARK) unlockMilestone("storykeeper")
    setPicked(null)
    setCurrent((value) => value + 1)
  }

  return (
    <div className="grid-chancery aurora relative overflow-hidden bg-night p-6 text-ivory sm:p-10 lg:p-14">
      <div className="relative grid gap-10 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-4">
          <p className="font-display text-xs tracking-eyebrow text-gold-light">Field Recall · a short exercise</p>
          <h2 id="quiz-title" className="mt-4 font-serif text-4xl leading-tight sm:text-5xl">
            Which moment?
          </h2>
          <p className="mt-5 leading-relaxed text-ivory/75">
            Five real photographs. Name the story behind each one. Score {PASS_MARK} or more to earn the
            Field Recall credential.
          </p>
          {rounds && !finished && (
            <dl className="mt-8 flex gap-8" aria-live="polite">
              <div>
                <dt className="font-display text-[0.72rem] tracking-[0.2em] text-ivory/60">Round</dt>
                <dd className="mt-1 font-serif text-3xl">
                  {current + 1}<span className="text-ivory/40">/{rounds.length}</span>
                </dd>
              </div>
              <div>
                <dt className="font-display text-[0.72rem] tracking-[0.2em] text-ivory/60">Score</dt>
                <dd className="mt-1 font-serif text-3xl text-gold-light">{score}</dd>
              </div>
              <div>
                <dt className="font-display text-[0.72rem] tracking-[0.2em] text-ivory/60">Streak</dt>
                <dd className="mt-1 flex items-center gap-1 font-serif text-3xl">
                  {streak}
                  {streak >= 2 && <Flame aria-hidden="true" className="size-6 text-gold-light" />}
                </dd>
              </div>
            </dl>
          )}
        </div>

        <div className="lg:col-span-8">
          {!rounds && (
            <div className="flex min-h-72 flex-col items-start justify-center gap-6 border border-ivory/15 p-8">
              <p className="font-serif text-2xl leading-snug">Ready to test how well you know Robert&apos;s work?</p>
              <button
                type="button"
                onClick={start}
                className="btn-sweep inline-flex min-h-12 items-center bg-gold-light px-7 text-sm font-medium text-ink hover:bg-ivory"
              >
                Begin Field Recall
              </button>
            </div>
          )}

          {round && rounds && (
            <QuizRound
              round={round}
              position={current + 1}
              total={rounds.length}
              picked={picked}
              onChoose={choose}
              onNext={next}
            />
          )}

          {finished && (
            <div className="flex min-h-72 flex-col items-start justify-center gap-5 border border-gold-light/30 p-8" aria-live="polite">
              <p className="font-display text-xs tracking-eyebrow text-gold-light">Your score</p>
              <p className="font-serif text-6xl">
                {score}
                <span className="text-ivory/40">/{rounds.length}</span>
              </p>
              <p className="text-ivory/75">
                {score >= PASS_MARK
                  ? "Field Recall credential verified. You know the record."
                  : `Best streak ${best}. Explore the stories above, then try again.`}
              </p>
              <button
                type="button"
                onClick={start}
                className="inline-flex min-h-11 items-center gap-2 border border-ivory/25 px-5 text-sm hover:border-gold-light hover:text-gold-light"
              >
                <RotateCcw aria-hidden="true" className="size-4" />
                Play again
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
