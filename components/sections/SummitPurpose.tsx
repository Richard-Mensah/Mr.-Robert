import Container from "@/components/ui/Container"
import Eyebrow from "@/components/ui/Eyebrow"
import { revealDelay } from "@/lib/utils"

const VERBS = [
  { word: "Inspire", line: "Helping young people see what is possible for their lives and communities." },
  { word: "Equip", line: "Building the knowledge and capacity needed to lead and to act." },
  { word: "Connect", line: "Opening doors to networks and opportunities that sustain progress." },
]

export default function SummitPurpose() {
  return (
    <section aria-labelledby="summit-purpose" data-checkpoint="Purpose" className="bg-paper py-24 lg:py-36">
      <Container size="wide" className="grid gap-16 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-5">
          <Eyebrow>Why the Summit exists</Eyebrow>
          <h2 id="summit-purpose" data-reveal className="mt-6 font-serif text-4xl leading-[1.08] tracking-tight text-ink sm:text-5xl">
            A gathering for the next generation of leaders and change-makers.
          </h2>
          <p data-reveal className="mt-8 text-lg leading-[1.8] text-muted">
            The Tamale Youth Summit was established to inspire, equip and connect young people with the knowledge,
            networks and opportunities needed to become effective leaders and change-makers. Through it, Robert
            advocates for a generation that is innovative, purpose-driven and committed to community
            transformation.
          </p>
        </div>
        <ol className="lg:col-span-6 lg:col-start-7">
          {VERBS.map((item, index) => (
            <li key={item.word} data-reveal style={revealDelay(index, 120)} className="border-t border-ink/15 py-10 first:pt-0 first:border-t-0 lg:first:pt-10 lg:first:border-t">
              <p className="font-serif text-6xl tracking-tight text-ink sm:text-7xl">
                {item.word}
                <span className="text-gold-deep">.</span>
              </p>
              <p className="mt-4 max-w-md text-lg leading-relaxed text-muted">{item.line}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  )
}
