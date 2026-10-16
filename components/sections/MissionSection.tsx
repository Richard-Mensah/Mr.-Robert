import Container from "@/components/ui/Container"
import Eyebrow from "@/components/ui/Eyebrow"
import ImagePanel from "@/components/ui/ImagePanel"
import { IMAGES } from "@/data/images"
import { PROFILE } from "@/data/profile"

const PRINCIPLES = [
  {
    title: "Participants, not beneficiaries",
    body: "Young people take part in designing and delivering solutions, rather than simply receiving them.",
  },
  {
    title: "Opportunity made accessible",
    body: "Talent is nurtured and opportunities are within reach, so potential can become progress.",
  },
  {
    title: "Purposeful leadership",
    body: "A generation that is innovative, purpose-driven and committed to community transformation.",
  },
]

export default function MissionSection() {
  return (
    <section aria-labelledby="mission-title" data-checkpoint="Mission" className="bg-paper py-24 lg:py-36">
      <Container size="wide">
        <div data-reveal className="relative aspect-[16/9] lg:aspect-[21/9]">
          <ImagePanel image={IMAGES.youth} className="h-full w-full" sizes="100vw" />
        </div>

        <div className="mt-20 grid gap-16 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <Eyebrow>The mission</Eyebrow>
            <h2 id="mission-title" data-reveal className="mt-6 font-serif text-4xl leading-[1.08] tracking-tight text-ink sm:text-5xl">
              A society where young people are equipped to transform their communities.
            </h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <p data-reveal className="text-lg leading-[1.8] text-muted">
              Robert advocates for a generation of young people who are innovative, purpose-driven and committed to
              community transformation. His broader vision is of {PROFILE.vision.charAt(0).toLowerCase()}
              {PROFILE.vision.slice(1)}
            </p>
            <ul className="mt-12 space-y-8">
              {PRINCIPLES.map((principle) => (
                <li key={principle.title} data-reveal className="border-l-2 border-gold pl-6">
                  <h3 className="font-serif text-2xl text-ink">{principle.title}</h3>
                  <p className="mt-2 leading-relaxed text-muted">{principle.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  )
}
