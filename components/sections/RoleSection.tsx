import Container from "@/components/ui/Container"
import SectionHeader from "@/components/ui/SectionHeader"
import ImagePanel from "@/components/ui/ImagePanel"
import { IMAGES } from "@/data/images"
import { GOVERNANCE_COMMITMENTS } from "@/data/profile"
import { revealDelay } from "@/lib/utils"

/** How Robert approaches the Regional Director role, from his profile. */
export default function RoleSection() {
  return (
    <section aria-labelledby="role-title" data-checkpoint="The Role" className="bg-paper py-24 lg:py-36">
      <Container size="wide" className="grid gap-16 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-6">
          <SectionHeader
            id="role-title"
            eyebrow="The role"
            title="Connecting young people to opportunity."
            intro={
              <p>
                As Regional Director, Robert champions initiatives that bring public institutions, development
                organisations and the private sector together around the needs and ambitions of young people.
              </p>
            }
          />
          <ol className="mt-14 border-t border-ink/10">
            {GOVERNANCE_COMMITMENTS.map((item, index) => (
              <li
                key={item}
                data-reveal
                style={revealDelay(index)}
                className="flex gap-6 border-b border-ink/10 py-6"
              >
                <span className="font-serif text-sm italic text-gold-deep">{String(index + 1).padStart(2, "0")}</span>
                <p className="font-serif text-xl leading-snug text-ink sm:text-2xl">{item}</p>
              </li>
            ))}
          </ol>
        </div>
        <div className="lg:col-span-5 lg:col-start-8">
          <div data-reveal className="relative aspect-[4/5] lg:sticky lg:top-28">
            <ImagePanel image={IMAGES.leadership} className="h-full w-full" sizes="(min-width: 1024px) 40vw, 100vw" />
          </div>
        </div>
      </Container>
    </section>
  )
}
