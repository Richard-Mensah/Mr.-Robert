import ImagePanel from "@/components/ui/ImagePanel"
import { BOOKS } from "@/data/books"
import { IMPACT_STORIES } from "@/data/gallery"
import { IMAGES } from "@/data/images"
import { SPEAKING_REACH } from "@/data/impact"
import { PROFILE } from "@/data/profile"

/** Every figure is counted from the site's own records; the youth figure appears only once verified. */
const FIGURES = [
  ...(SPEAKING_REACH
    ? [{ value: `${SPEAKING_REACH.value.toLocaleString("en-GB")}${SPEAKING_REACH.suffix}`, label: `${SPEAKING_REACH.label}, ${SPEAKING_REACH.scope.charAt(0).toLowerCase()}${SPEAKING_REACH.scope.slice(1)}` }]
    : []),
  { value: String(IMPACT_STORIES.length), label: "Field engagements on record" },
  { value: String(BOOKS.length), label: "Published books" },
]

/** Opening of sheet one: portrait, office, a plain-English introduction and the record in figures. */
export default function DossierProfile() {
  const { currentRole } = PROFILE

  return (
    <div>
      <div className="grid gap-5 sm:grid-cols-[1fr_36mm] print:grid-cols-[1fr_36mm]">
        <div>
          <p className="font-display text-[0.7rem] tracking-[0.24em] text-gold-deep">Candidate summary</p>
          <h1 id="dossier-title" className="mt-1.5 font-serif text-[1.65rem] leading-[1.05] tracking-tight">
            {currentRole.title}, {currentRole.organisation}
          </h1>
          <p className="mt-1.5 font-display text-[0.75rem] tracking-[0.18em] text-forest">{currentRole.region}</p>
          <ul className="mt-2.5 flex flex-wrap gap-1">
            {PROFILE.roles.map((role) => (
              <li key={role} className="rounded-full border border-forest/20 bg-forest/[0.04] px-2 py-px text-[0.62rem] text-forest">
                {role}
              </li>
            ))}
          </ul>
          <p className="mt-3 font-serif text-[0.9rem] leading-snug text-ink">
            Robert leads the National Youth Authority&apos;s work in Ghana&apos;s North East Region, convenes the Tamale
            Youth Summit he founded, and writes about growth and the relationships that move careers forward. This
            briefing sets out his mandate and his record, with photographs from the field.
          </p>
        </div>
        <figure className="relative hidden aspect-[4/5] border border-stone bg-ivory p-1.5 sm:block print:block">
          <ImagePanel image={IMAGES.oneSheet} className="h-full w-full" sizes="36mm" />
          <span aria-hidden="true" className="absolute -bottom-px left-1.5 right-1.5 h-0.5 bg-gold" />
        </figure>
      </div>

      <dl className="mt-4 grid overflow-hidden rounded-sm bg-night text-ivory [grid-template-columns:repeat(auto-fit,minmax(0,1fr))]">
        {FIGURES.map((figure) => (
          <div key={figure.label} className="border-ivory/10 px-4 py-2.5 [&:not(:first-child)]:border-l">
            <dd className="font-serif text-[1.6rem] leading-none tabular-nums text-gold-light">{figure.value}</dd>
            <dt className="mt-1 text-[0.62rem] leading-snug text-ivory/65">{figure.label}</dt>
          </div>
        ))}
      </dl>
    </div>
  )
}
