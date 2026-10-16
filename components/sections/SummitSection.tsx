import type { ReactNode } from "react"
import Container from "@/components/ui/Container"
import Eyebrow from "@/components/ui/Eyebrow"
import ImagePanel from "@/components/ui/ImagePanel"
import ButtonLink from "@/components/ui/ButtonLink"
import { IMAGES } from "@/data/images"
import { SUMMIT_FOCUS } from "@/data/pillars"
import { revealDelay } from "@/lib/utils"

type Props = {
  title?: ReactNode
  showLink?: boolean
}

const DEFAULT_TITLE = (
  <>
    Tamale <br />
    Youth <span className="italic text-forest">Summit</span>
  </>
)

export default function SummitSection({ title = DEFAULT_TITLE, showLink = true }: Props) {
  return (
    <section aria-labelledby="summit-title" data-checkpoint="Summit" className="relative bg-ivory py-24 lg:py-36">
      <Container size="wide" className="grid gap-16 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-6">
          <Eyebrow>An initiative founded by Robert</Eyebrow>
          <h2
            id="summit-title"
            data-reveal
            className="mt-8 font-serif text-5xl leading-[0.98] tracking-tight text-ink sm:text-7xl lg:text-8xl"
          >
            {title}
          </h2>
          <p data-reveal className="mt-10 text-sm font-semibold uppercase tracking-eyebrow text-gold-deep">
            Inspiring &middot; Equipping &middot; Connecting
          </p>
          <p data-reveal className="mt-8 max-w-xl text-lg leading-relaxed text-muted">
            Robert founded and convenes the Tamale Youth Summit to inspire, equip and connect young people with the
            knowledge, networks and opportunities they need to become effective leaders and change-makers.
          </p>
          {showLink && (
            <div data-reveal className="mt-12">
              <ButtonLink href="/tamale-youth-summit" label="Explore the Summit" />
            </div>
          )}
        </div>

        <div className="lg:col-span-6">
          <div data-reveal className="relative aspect-[5/4] border border-gold/30 shadow-[0_30px_70px_-30px_rgba(6,20,15,0.6)]">
            <ImagePanel image={IMAGES.summit} className="h-full w-full" />
          </div>
          <ul className="mt-10 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3">
            {SUMMIT_FOCUS.map((item, index) => (
              <li key={item.title} data-reveal style={revealDelay(index, 60)} className="border-t border-ink/15 pt-4">
                <h3 className="font-serif text-xl text-ink">{item.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted">{item.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  )
}
