"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"
import { ArrowRight, Check } from "lucide-react"
import Container from "@/components/ui/Container"
import SectionHeader from "@/components/ui/SectionHeader"
import PlannerOption from "@/components/features/speaker/PlannerOption"
import InvitationBrief from "@/components/features/speaker/InvitationBrief"
import { CORE_THEMES, ENGAGEMENT_FORMATS } from "@/data/speaking"

const AUDIENCES = ["Students and young people", "Young professionals", "Institutions and partners", "Mixed audience"]
const MAX_THEMES = 3

/** Lets an organiser shape a session and carries their choices into the invitation form. */
export default function EventPlanner() {
  const router = useRouter()
  const [audience, setAudience] = useState(AUDIENCES[0])
  const [format, setFormat] = useState(ENGAGEMENT_FORMATS[0])
  const [themes, setThemes] = useState<string[]>([CORE_THEMES[0].title])

  const toggleTheme = (title: string) =>
    setThemes((current) =>
      current.includes(title)
        ? current.filter((item) => item !== title)
        : current.length < MAX_THEMES
          ? [...current, title]
          : current,
    )

  const proceed = () => {
    const params = new URLSearchParams({ audience, format, topic: themes.join(", ") })
    router.push(`/speaker?${params.toString()}#invite`)
  }

  return (
    <section id="planner" aria-labelledby="planner-title" data-checkpoint="Planner" className="scroll-mt-20 border-t border-ink/10 bg-ivory py-24 lg:py-36">
      <Container size="wide">
        <SectionHeader
          id="planner-title"
          eyebrow="Event planner · for organisers"
          title="Shape your session in under a minute."
          align="split"
          intro={<p>Choose your audience, format and themes. We&apos;ll carry your brief straight into the invitation.</p>}
        />

        <div className="mt-16 grid gap-10 lg:grid-cols-12">
          <div className="space-y-10 lg:col-span-7">
            <fieldset>
              <legend className="font-display text-xs tracking-eyebrow text-gold-deep">1 · Audience</legend>
              <div className="mt-4 grid gap-2 sm:grid-cols-2">
                {AUDIENCES.map((item) => (
                  <PlannerOption key={item} name="audience" label={item} checked={audience === item} onChange={() => setAudience(item)} />
                ))}
              </div>
            </fieldset>
            <fieldset>
              <legend className="font-display text-xs tracking-eyebrow text-gold-deep">2 · Format</legend>
              <div className="mt-4 grid gap-2 sm:grid-cols-2">
                {ENGAGEMENT_FORMATS.map((item) => (
                  <PlannerOption key={item} name="format" label={item} checked={format === item} onChange={() => setFormat(item)} />
                ))}
              </div>
            </fieldset>
            <fieldset>
              <legend className="font-display text-xs tracking-eyebrow text-gold-deep">
                3 · Themes <span className="text-muted">(up to {MAX_THEMES})</span>
              </legend>
              <div className="mt-4 flex flex-wrap gap-2">
                {CORE_THEMES.map((theme) => {
                  const on = themes.includes(theme.title)
                  return (
                    <button
                      key={theme.title}
                      type="button"
                      aria-pressed={on}
                      onClick={() => toggleTheme(theme.title)}
                      disabled={!on && themes.length >= MAX_THEMES}
                      className={`inline-flex min-h-11 items-center gap-2 border px-4 text-sm transition-colors disabled:cursor-not-allowed disabled:opacity-40 ${
                        on ? "border-night bg-night text-gold-light" : "border-ink/15 bg-paper text-ink hover:border-gold"
                      }`}
                    >
                      {on && <Check aria-hidden="true" className="size-3.5" />}
                      {theme.title}
                    </button>
                  )
                })}
              </div>
            </fieldset>
          </div>

          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <InvitationBrief audience={audience} format={format} themes={themes} />
              <button
                type="button"
                onClick={proceed}
                disabled={themes.length === 0}
                className="btn-sweep mt-5 inline-flex min-h-14 w-full items-center justify-center gap-3 bg-gold-light text-sm font-medium text-ink transition-colors hover:bg-night hover:text-gold-light disabled:opacity-50"
              >
                Continue to invitation
                <ArrowRight aria-hidden="true" className="size-4" strokeWidth={1.5} />
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
