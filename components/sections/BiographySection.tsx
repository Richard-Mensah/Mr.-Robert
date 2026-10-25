import Container from "@/components/ui/Container"
import ImagePanel from "@/components/ui/ImagePanel"
import QuoteBlock from "@/components/ui/QuoteBlock"
import { IMAGES } from "@/data/images"
import { BIOGRAPHY, PROFILE } from "@/data/profile"

const FACTS = [
  { label: "Current role", value: `${PROFILE.currentRole.title}, ${PROFILE.currentRole.organisation}` },
  { label: "Region", value: PROFILE.currentRole.region },
  { label: "Initiative", value: "Founder and Convener, Tamale Youth Summit" },
  { label: "Education", value: `${PROFILE.education.field}, ${PROFILE.education.institution}` },
  { label: "Books", value: "If I Knew Then · Beyond Handshakes" },
]

export default function BiographySection() {
  return (
    <section aria-labelledby="biography-title" data-checkpoint="Biography" className="border-t border-ink/10 bg-ivory py-24 lg:py-36">
      <Container size="wide" className="grid gap-16 lg:grid-cols-12 lg:gap-12">
        <aside className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <div data-reveal className="relative aspect-[4/5]">
              <ImagePanel image={IMAGES.biography} className="h-full w-full" sizes="(min-width: 1024px) 30vw, 100vw" />
            </div>
            <dl data-reveal className="mt-10 divide-y divide-ink/10 border-y border-ink/10">
              {FACTS.map((fact) => (
                <div key={fact.label} className="grid gap-1 py-4">
                  <dt className="font-display text-sm tracking-eyebrow text-muted">{fact.label}</dt>
                  <dd className="font-serif text-lg leading-snug text-ink">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </aside>

        <div className="lg:col-span-7 lg:col-start-6">
          <h2 id="biography-title" className="sr-only">
            Biography
          </h2>
          <div data-reveal className="space-y-7 text-lg leading-[1.8] text-muted">
            <p className="font-serif text-2xl leading-snug text-ink sm:text-3xl">{BIOGRAPHY[0]}</p>
            <p>{BIOGRAPHY[1]}</p>
            <p>{BIOGRAPHY[2]}</p>
          </div>

          <QuoteBlock quote={PROFILE.belief} attribution={PROFILE.name} size="large" className="my-20 lg:-ml-24" />

          <div data-reveal className="space-y-7 text-lg leading-[1.8] text-muted">
            <p>{BIOGRAPHY[3]}</p>
            <p>{BIOGRAPHY[4]}</p>
            <p>{BIOGRAPHY[5]}</p>
          </div>

          <div data-reveal className="mt-20 border-t-2 border-forest pt-10">
            <p className="font-display text-sm tracking-eyebrow text-forest">His broader vision</p>
            <p className="mt-6 font-serif text-3xl leading-snug tracking-tight text-ink text-balance sm:text-4xl">
              {PROFILE.vision}
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}
