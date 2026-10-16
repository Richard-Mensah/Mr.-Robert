import Container from "@/components/ui/Container"
import SectionHeader from "@/components/ui/SectionHeader"
import ImagePanel from "@/components/ui/ImagePanel"
import ButtonLink from "@/components/ui/ButtonLink"
import { IMAGES } from "@/data/images"
import { BIOGRAPHY, PROFILE } from "@/data/profile"

export default function AboutPreview() {
  return (
    <section aria-labelledby="about-preview" data-checkpoint="About" className="bg-paper py-24 lg:py-36">
      <Container size="wide" className="grid gap-16 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-5">
          <div data-reveal className="relative aspect-[4/5] lg:sticky lg:top-28">
            <ImagePanel image={IMAGES.about} className="h-full w-full" />
          </div>
        </div>
        <div className="lg:col-span-6 lg:col-start-7">
          <SectionHeader id="about-preview" eyebrow="About Robert" title="A life built around purpose and possibility." />
          <div data-reveal className="mt-10 space-y-6 text-lg leading-relaxed text-muted">
            <p className="font-serif text-2xl leading-snug text-ink">{BIOGRAPHY[0]}</p>
            <p>{BIOGRAPHY[1]}</p>
            <p>{BIOGRAPHY[4]}</p>
          </div>
          <dl data-reveal className="mt-12 grid gap-8 border-t border-ink/10 pt-8 sm:grid-cols-2">
            <div>
              <dt className="text-xs font-semibold uppercase tracking-eyebrow text-muted">Current role</dt>
              <dd className="mt-2 font-serif text-lg text-ink">
                {PROFILE.currentRole.title}, {PROFILE.currentRole.organisation}
              </dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-eyebrow text-muted">Studied</dt>
              <dd className="mt-2 font-serif text-lg text-ink">
                {PROFILE.education.field}, {PROFILE.education.institution}
              </dd>
            </div>
          </dl>
          <ButtonLink href="/about" label="Read the full biography" variant="text" className="mt-12" />
        </div>
      </Container>
    </section>
  )
}
