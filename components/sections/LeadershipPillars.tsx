import Container from "@/components/ui/Container"
import SectionHeader from "@/components/ui/SectionHeader"
import LeadershipPillar from "@/components/ui/LeadershipPillar"
import ButtonLink from "@/components/ui/ButtonLink"
import { LEADERSHIP_AREAS } from "@/data/pillars"
import { revealDelay } from "@/lib/utils"

type Props = {
  title?: string
  showLink?: boolean
}

export default function LeadershipPillars({ title = "Leadership that creates opportunity.", showLink = true }: Props) {
  return (
    <section
      aria-labelledby="leadership-areas"
      data-checkpoint="Leadership"
      className="starfield aurora relative overflow-hidden bg-night py-24 text-ivory lg:py-36"
    >
      <Container size="wide" className="relative">
        <SectionHeader
          id="leadership-areas"
          eyebrow="Leadership"
          title={title}
          tone="light"
          align="split"
          intro={
            <p>
              As Regional Director of the National Youth Authority in Ghana&apos;s North East Region, Robert works
              across six connected areas that shape the opportunities available to young people.
            </p>
          }
        />
        <ul className="mt-20 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {LEADERSHIP_AREAS.map((area, index) => (
            <li key={area.title} data-reveal style={revealDelay(index % 3)}>
              <LeadershipPillar index={index} title={area.title} description={area.description} />
            </li>
          ))}
        </ul>
        {showLink && (
          <div data-reveal className="mt-20">
          <ButtonLink href="/leadership" label="About his leadership role" variant="light" />
          </div>
        )}
      </Container>
    </section>
  )
}
