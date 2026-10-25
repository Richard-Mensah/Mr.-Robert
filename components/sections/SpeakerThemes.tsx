import Container from "@/components/ui/Container"
import SectionHeader from "@/components/ui/SectionHeader"
import ButtonLink from "@/components/ui/ButtonLink"
import SpeakerCard from "@/components/sections/SpeakerCard"
import TiltCard from "@/components/ui/TiltCard"
import { CORE_THEMES, ENGAGEMENT_FORMATS } from "@/data/speaking"
import { revealDelay } from "@/lib/utils"

type Props = {
  title?: string
  showFormats?: boolean
  ctaHref?: string
}

export default function SpeakerThemes({
  title = "Conversations that move people forward.",
  showFormats = false,
  ctaHref = "/speaker#invite",
}: Props) {
  return (
    <section aria-labelledby="speaker-themes" data-checkpoint="Speaker" className="bg-paper py-24 lg:py-36">
      <Container size="wide">
        <SectionHeader
          id="speaker-themes"
          eyebrow="Speaker"
          title={title}
          align="split"
          intro={
            <p>
              Through speaking engagements, mentorship and public engagement, Robert encourages audiences to embrace
              personal growth, cultivate meaningful relationships and pursue purposeful lives.
            </p>
          }
        />

        <div className="mt-20 grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <h3 className="font-display text-sm tracking-eyebrow text-muted">
              Core themes, drawn from his work and writing
            </h3>
            <ul className="mt-6 grid gap-x-10 sm:grid-cols-2">
              {CORE_THEMES.map((theme, index) => (
                <li key={theme.title} data-reveal style={revealDelay(index % 2)}>
                  <TiltCard>
                    <SpeakerCard index={index} title={theme.title} description={theme.description} />
                  </TiltCard>
                </li>
              ))}
            </ul>
          </div>

          <aside data-reveal className="lg:col-span-4">
            <div className="grid-chancery aurora relative overflow-hidden border border-gold-light/20 bg-night p-8 text-ivory sm:p-10 lg:sticky lg:top-28">
              {showFormats && (
                <>
                  <h3 className="font-display text-sm tracking-eyebrow text-ivory/50">
                    Possible formats
                  </h3>
                  <ul className="mt-6 space-y-3 font-serif text-xl">
                    {ENGAGEMENT_FORMATS.map((format) => (
                      <li key={format}>{format}</li>
                    ))}
                  </ul>
                  <p className="mt-6 text-sm leading-relaxed text-ivory/60">
                    Format, length and focus are agreed with each organiser.
                  </p>
                  <hr className="my-8 border-ivory/10" />
                </>
              )}
              <p className="font-serif text-2xl leading-snug">
                Planning a conference, leadership event or youth programme?
              </p>
              <ButtonLink href={ctaHref} label="Invite Robert to Speak" variant="light" className="mt-8 w-full" />
            </div>
          </aside>
        </div>
      </Container>
    </section>
  )
}
