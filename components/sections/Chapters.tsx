"use client"

import Container from "@/components/ui/Container"
import Eyebrow from "@/components/ui/Eyebrow"
import { CHAPTERS } from "@/data/chapters"
import { useActiveSection } from "@/hooks/useActiveSection"
import { cn } from "@/lib/utils"

const IDS = CHAPTERS.map((chapter) => `chapter-${chapter.id}`)

/** Robert's story as scroll-driven chapters with a sticky progress rail. */
export default function Chapters() {
  const active = useActiveSection(IDS)
  const activeIndex = Math.max(0, IDS.indexOf(active))

  return (
    <section aria-labelledby="chapters-title" data-checkpoint="Chapters" className="bg-paper py-24 lg:py-36">
      <Container size="wide" className="grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-32">
            <Eyebrow>The story in five chapters</Eyebrow>
            <h2 id="chapters-title" className="mt-6 font-serif text-4xl leading-tight tracking-tight text-ink">
              From planning places to developing people.
            </h2>
            <nav aria-label="Chapters" className="mt-10 hidden lg:block">
              <ol className="relative border-l border-ink/10">
                <span
                  aria-hidden="true"
                  className="absolute -left-px top-0 w-px bg-gold transition-all duration-700"
                  style={{ height: `${((activeIndex + 1) / CHAPTERS.length) * 100}%` }}
                />
                {CHAPTERS.map((chapter, index) => (
                  <li key={chapter.id}>
                    <a
                      href={`#${IDS[index]}`}
                      aria-current={index === activeIndex ? "step" : undefined}
                      className={cn(
                        "block py-3 pl-6 text-sm transition-colors",
                        index === activeIndex ? "font-medium text-ink" : "text-muted hover:text-ink",
                      )}
                    >
                      <span className="mr-3 font-display text-[0.6rem] tracking-[0.18em] text-gold-deep">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      {chapter.label}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          </div>
        </div>

        <ol className="space-y-6 lg:col-span-7 lg:col-start-6 lg:space-y-10">
          {CHAPTERS.map((chapter, index) => (
            <li
              key={chapter.id}
              id={IDS[index]}
              data-reveal
              className={cn(
                "scroll-mt-32 border p-8 transition-all duration-700 sm:p-12",
                index === activeIndex
                  ? "border-gold/50 bg-ivory shadow-[0_30px_60px_-30px_rgba(6,20,15,0.35)]"
                  : "border-ink/10 bg-paper",
              )}
            >
              <p className="font-display text-xs tracking-eyebrow text-gold-deep">
                Chapter {index + 1} · {chapter.label}
              </p>
              <h3 className="mt-5 font-serif text-3xl leading-tight tracking-tight text-ink sm:text-4xl">{chapter.title}</h3>
              <p className="mt-5 text-lg leading-relaxed text-muted">{chapter.body}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  )
}
