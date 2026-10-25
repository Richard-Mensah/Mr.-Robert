"use client"

import { useState } from "react"
import { ArrowLeft } from "lucide-react"
import Container from "@/components/ui/Container"
import Eyebrow from "@/components/ui/Eyebrow"
import CompassDial from "@/components/features/compass/CompassDial"
import CompassQuestion from "@/components/features/compass/CompassQuestion"
import CompassResult from "@/components/features/compass/CompassResult"
import { COMPASS_QUESTIONS } from "@/data/compass"
import { useJourney } from "@/hooks/useJourney"
import { scoreCompass } from "@/lib/compassScore"
import type { CompassLevel } from "@/types"

const ADVANCE_DELAY_MS = 260

/** Five reflective questions that point a young person to their current level of the framework. */
export default function LeadershipCompass() {
  const { unlockMilestone } = useJourney()
  const [answers, setAnswers] = useState<CompassLevel[]>([])
  const [step, setStep] = useState(0)
  const [result, setResult] = useState<CompassLevel | null>(null)
  const total = COMPASS_QUESTIONS.length

  const finish = (final: CompassLevel[]) => {
    setResult(scoreCompass(final))
    unlockMilestone("navigator")
    // Anonymous, best-effort: the experience never depends on the database.
    fetch("/api/compass", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ answers: final }),
    }).catch(() => undefined)
  }

  const answer = (level: CompassLevel) => {
    const next = [...answers.slice(0, step), level]
    setAnswers(next)
    window.setTimeout(() => {
      if (step + 1 < total) setStep(step + 1)
      else finish(next)
    }, ADVANCE_DELAY_MS)
  }

  const restart = () => {
    setAnswers([])
    setStep(0)
    setResult(null)
  }

  const progress = result ? 100 : (step / total) * 100

  return (
    <section id="compass" aria-labelledby="compass-title" data-checkpoint="Compass" className="grid-chancery aurora relative scroll-mt-20 overflow-hidden bg-night py-24 text-ivory lg:py-36">
      <Container size="wide" className="relative grid gap-14 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-5">
          <Eyebrow tone="light">Interactive · 1 minute</Eyebrow>
          <h2 id="compass-title" className="mt-6 font-serif text-4xl leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            The Leadership Compass
          </h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-ivory/70">
            Five honest reflections. Your answers point to where you are on the climb, from Discover to Transform,
            and to a practical next step.
          </p>
          <div className="mx-auto mt-10 aspect-square w-56 sm:w-64 lg:mx-0">
            <CompassDial level={result} />
          </div>
          <p className="mt-6 text-xs text-ivory/45">Anonymous. Only the resulting level is recorded, never your answers or identity.</p>
        </div>

        <div className="border border-ivory/10 bg-ink/50 p-6 backdrop-blur-sm sm:p-10 lg:col-span-7">
          <div className="flex items-center justify-between text-xs text-ivory/55">
            <span className="font-display tracking-[0.2em]">
              {result ? "Complete" : `Reflection ${step + 1} of ${total}`}
            </span>
            {!result && step > 0 && (
              <button type="button" onClick={() => setStep(step - 1)} className="inline-flex min-h-10 items-center gap-1.5 hover:text-gold-light">
                <ArrowLeft aria-hidden="true" className="size-3.5" />
                Back
              </button>
            )}
          </div>
          <div
            role="progressbar"
            aria-label="Compass progress"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={Math.round(progress)}
            className="mt-4 h-1 w-full bg-ivory/10"
          >
            <div className="h-full bg-gold-light transition-all duration-500" style={{ width: `${progress}%` }} />
          </div>

          <div className="mt-10">
            {result ? (
              <CompassResult level={result} onRestart={restart} />
            ) : (
              <CompassQuestion
                key={step}
                question={COMPASS_QUESTIONS[step]}
                index={step}
                total={total}
                selected={answers[step]}
                onAnswer={answer}
              />
            )}
          </div>
        </div>
      </Container>
    </section>
  )
}
