import { Landmark } from "lucide-react"
import Container from "@/components/ui/Container"
import ButtonLink from "@/components/ui/ButtonLink"
import CountUp from "@/components/ui/CountUp"
import ImagePanel from "@/components/ui/ImagePanel"
import Seal from "@/components/ui/Seal"
import StatusPill from "@/components/ui/StatusPill"
import { IMAGES } from "@/data/images"
import { BOOKS } from "@/data/books"
import { IMPACT_STORIES } from "@/data/gallery"
import { SPEAKING_REACH } from "@/data/impact"
import { PROFILE } from "@/data/profile"
import { cn } from "@/lib/utils"

const HEADLINE = ["Empowering young", "people to lead,", "build and transform."]

/** Every figure here is counted from the site's own data. */
const FIGURES = [
  ...(SPEAKING_REACH ? [{ value: SPEAKING_REACH.value, suffix: SPEAKING_REACH.suffix, label: "People reached through speaking" }] : []),
  { value: IMPACT_STORIES.length, label: "Field stories on record" },
  { value: BOOKS.length, label: "Published books" },
]

export default function Hero() {
  const { currentRole } = PROFILE

  return (
    <section aria-labelledby="hero-title" data-checkpoint="Overview" className="grid-chancery relative overflow-hidden bg-night text-ivory">
      <div aria-hidden="true" className="pointer-events-none absolute -right-40 top-1/4 size-[46rem] rounded-full bg-[radial-gradient(circle,rgb(47_179_122/0.28),transparent_65%)]" />
      <div aria-hidden="true" className="pointer-events-none absolute -left-32 bottom-0 size-[30rem] rounded-full bg-[radial-gradient(circle,rgb(184_145_63/0.14),transparent_65%)]" />

      <Container size="wide" className="relative grid min-h-[100svh] items-center gap-14 pb-20 pt-32 lg:grid-cols-12 lg:gap-10 lg:py-32">
        <div className="relative z-10 min-w-0 lg:col-span-7">
          <div className="flex animate-rise flex-wrap items-center gap-x-4 gap-y-3">
            <StatusPill className="max-w-full">
              <span className="truncate">{currentRole.title} · {currentRole.organisation}</span>
            </StatusPill>
            <span className="font-display text-sm tracking-[0.18em] text-ivory/55">{currentRole.region}</span>
          </div>

          <h1 id="hero-title" data-reveal className="reveal-lines mt-8 font-serif text-[2.75rem] leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl xl:text-[5.2rem]">
            {HEADLINE.map((line, index) => (
              <span key={line}>
                <span style={{ ["--line" as string]: index }} className={index === HEADLINE.length - 1 ? "italic text-gold-shimmer" : undefined}>
                  {line}
                </span>
              </span>
            ))}
          </h1>

          <p className="mt-8 max-w-xl animate-rise text-lg leading-relaxed text-ivory/75 [animation-delay:240ms] sm:text-xl">
            {PROFILE.name} is a Ghanaian public sector leader, youth development advocate and author, working so that
            young people can discover their potential and take part in shaping the solutions to their future.
          </p>

          <div className="mt-10 flex animate-rise flex-col gap-4 [animation-delay:360ms] sm:flex-row">
            <ButtonLink href="/dossier" label="Open the Briefing Dossier" />
            <ButtonLink href="/speaker#invite" label="Invite to Speak" variant="light" />
          </div>

          <dl
            className={cn(
              "mt-14 grid max-w-2xl animate-rise gap-y-6 border-t border-ivory/10 pt-6 [animation-delay:480ms]",
              SPEAKING_REACH ? "grid-cols-2 sm:grid-cols-[1.6fr_1fr_1fr]" : "grid-cols-2",
            )}
          >
            {FIGURES.map((figure, index) => (
              <div
                key={figure.label}
                className={cn(
                  "flex flex-col border-ivory/10",
                  SPEAKING_REACH && index === 0 ? "col-span-2 sm:col-span-1" : "",
                  SPEAKING_REACH
                    ? index > 1 && "border-l pl-4 sm:pl-5"
                    : index > 0 && "border-l pl-4",
                  SPEAKING_REACH && index === 1 && "sm:border-l sm:pl-5",
                )}
              >
                <dt className="order-2 mt-1 text-xs leading-snug text-ivory/55">{figure.label}</dt>
                <dd className="font-serif text-4xl tabular-nums text-gold-light sm:text-5xl">
                  <CountUp value={figure.value} suffix={"suffix" in figure ? figure.suffix : ""} />
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:col-span-5 lg:max-w-none">
          <div className="relative animate-unveil rounded-sm border border-gold-light/25 bg-night-soft p-3 shadow-[0_50px_100px_-30px_rgba(0,0,0,0.85)] [animation-delay:200ms]">
            <div className="relative aspect-[4/5] overflow-hidden">
              <ImagePanel image={IMAGES.hero} priority className="h-full w-full" sizes="(min-width: 1024px) 40vw, 90vw" />
              <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ink/80 to-transparent" />
            </div>
            <div className="flex items-center justify-between gap-4 px-2 pb-1 pt-4">
              <div>
                <p className="font-display text-xs tracking-[0.2em] text-cerulean-light">Public mandate</p>
                <p className="mt-1 font-serif text-lg leading-snug">
                  {currentRole.organisation}, {currentRole.region.replace(", Ghana", "")}
                </p>
              </div>
              <span aria-hidden="true" className="flex h-8 w-1.5 flex-col overflow-hidden rounded-full">
                <span className="flex-1 bg-[#ce1126]" />
                <span className="flex-1 bg-[#fcd116]" />
                <span className="flex-1 bg-heritage" />
              </span>
            </div>
          </div>
          <div className="absolute -left-2 top-10 z-20 animate-float sm:-left-10">
            <Seal size="lg" ring="Regional Director · National Youth Authority ·">
              <Landmark aria-hidden="true" className="size-7" strokeWidth={1.4} />
            </Seal>
          </div>
        </div>
      </Container>

      <a
        href="#record"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 font-display text-sm tracking-[0.2em] text-gold-light/80 hover:text-gold-light lg:flex"
      >
        Review the record
        <span aria-hidden="true" className="block h-12 w-px animate-scroll-cue bg-gold-light/70" />
      </a>
    </section>
  )
}
