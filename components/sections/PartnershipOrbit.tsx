import { Building2, Globe2, Handshake, Users } from "lucide-react"
import Container from "@/components/ui/Container"
import SectionHeader from "@/components/ui/SectionHeader"
import { cn, revealDelay } from "@/lib/utils"

/** The three partner groups named in Robert's profile, framed by the areas they connect to. */
const PARTNERS = [
  { name: "Public institutions", focus: "Youth participation in governance and responsible citizenship", Icon: Building2, position: "lg:left-1/2 lg:top-0 lg:-translate-x-1/2" },
  { name: "Development organisations", focus: "Empowerment, peacebuilding and sustainable livelihoods", Icon: Globe2, position: "lg:bottom-0 lg:left-0" },
  { name: "Private sector", focus: "Entrepreneurship, digital inclusion and pathways to work", Icon: Handshake, position: "lg:bottom-0 lg:right-0" },
]

export default function PartnershipOrbit() {
  return (
    <section id="partners" aria-labelledby="partners-title" data-checkpoint="Partners" className="grid-chancery aurora relative scroll-mt-20 overflow-hidden bg-night py-24 text-ivory lg:py-36">
      <Container size="wide" className="relative">
        <SectionHeader
          id="partners-title"
          eyebrow="The partnership model"
          title="Opportunity is built together."
          tone="light"
          align="split"
          intro={
            <p>
              Robert builds partnerships among public institutions, development organisations and private sector
              stakeholders, with young people at the centre.
            </p>
          }
        />

        <div className="relative mx-auto mt-20 max-w-4xl lg:h-[34rem]">
          <svg aria-hidden="true" viewBox="0 0 800 540" className="absolute inset-0 hidden h-full w-full lg:block">
            <circle cx="400" cy="290" r="210" fill="none" stroke="#e6c77e" strokeOpacity="0.18" strokeDasharray="3 9" />
            <circle cx="400" cy="290" r="130" fill="none" stroke="#e6c77e" strokeOpacity="0.12" />
            <g data-reveal>
              {[
                "M400 290 L400 70",
                "M400 290 L120 470",
                "M400 290 L680 470",
              ].map((d) => (
                <path key={d} className="draw-path" style={{ ["--path-length" as string]: 340 }} d={d} stroke="#e6c77e" strokeWidth="1.5" strokeOpacity="0.6" />
              ))}
            </g>
          </svg>

          <div data-reveal className="relative z-10 mx-auto flex size-44 flex-col items-center justify-center rounded-full bg-gold-light text-center text-ink shadow-[0_0_80px_rgba(230,199,126,0.5)] lg:absolute lg:left-1/2 lg:top-[290px] lg:-translate-x-1/2 lg:-translate-y-1/2">
            <Users aria-hidden="true" className="size-8" strokeWidth={1.5} />
            <p className="mt-2 font-serif text-xl leading-tight">Young people</p>
            <p className="font-display text-[0.68rem] tracking-[0.2em] text-ink/60">At the centre</p>
          </div>

          <ul className="mt-10 grid gap-4 lg:mt-0">
            {PARTNERS.map(({ name, focus, Icon, position }, index) => (
              <li
                key={name}
                data-reveal
                style={revealDelay(index + 1, 180)}
                className={cn(
                  "group border border-ivory/15 bg-ink/70 p-6 backdrop-blur-sm transition-colors duration-500 hover:border-gold-light/60 lg:absolute lg:w-64",
                  position,
                )}
              >
                <Icon aria-hidden="true" className="size-6 text-gold-light" strokeWidth={1.5} />
                <h3 className="mt-4 font-serif text-2xl">{name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ivory/65">{focus}</p>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  )
}
