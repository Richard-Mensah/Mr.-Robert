import Container from "@/components/ui/Container"
import Eyebrow from "@/components/ui/Eyebrow"
import { PROFILE } from "@/data/profile"

type Props = {
  eyebrow?: string
}

/** The central belief from Robert's profile, presented as a major visual statement. */
export default function PhilosophyStatement({ eyebrow = "What he believes" }: Props) {
  return (
    <section aria-label="Philosophy" data-checkpoint="Belief" className="starfield aurora relative overflow-hidden bg-forest-deep py-28 text-ivory lg:py-44">
      <div
        aria-hidden="true"
        className="absolute -right-24 top-1/2 hidden -translate-y-1/2 select-none font-serif text-[28rem] leading-none text-ivory/[0.03] lg:block"
      >
        &ldquo;
      </div>
      <Container className="relative">
        <Eyebrow tone="light">{eyebrow}</Eyebrow>
        <figure data-reveal className="mt-10">
          <blockquote className="max-w-5xl font-serif text-3xl leading-[1.15] tracking-tight text-balance sm:text-5xl lg:text-6xl">
            <p>
              Young people should not merely be <span className="italic text-gold-light">beneficiaries</span> of
              development, but active participants in designing and delivering the solutions that shape their
              future.
            </p>
          </blockquote>
          <figcaption className="mt-12 flex items-center gap-4 text-xs font-semibold uppercase tracking-eyebrow text-ivory/60">
            <span aria-hidden="true" className="h-px w-12 bg-gold-light" />
            {PROFILE.name}
          </figcaption>
        </figure>
      </Container>
    </section>
  )
}
