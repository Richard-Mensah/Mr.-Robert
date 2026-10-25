import Image from "next/image"
import DossierHeading from "@/components/features/dossier/DossierHeading"
import { IMPACT_STORIES, getPhoto } from "@/data/gallery"
import { SUMMIT_FOCUS } from "@/data/pillars"
import { BIOGRAPHY } from "@/data/profile"

const FIELD_ENTRIES = IMPACT_STORIES.slice(0, 8)

/** Sheet two, first half: the Summit he convenes and the field record in photographs. */
export default function DossierRecord() {
  return (
    <div className="space-y-4">
      <section>
        <DossierHeading index="05" kicker="Founder and convener">
          Convenings
        </DossierHeading>
        <div className="mt-2 grid gap-4 sm:grid-cols-[1fr_auto] print:grid-cols-[1fr_auto] sm:items-center">
          <div>
            <p className="font-serif text-[1.05rem] leading-tight">Tamale Youth Summit</p>
            <p className="mt-1 text-[0.72rem] leading-relaxed text-muted">{BIOGRAPHY[3]}</p>
          </div>
          <ul className="flex flex-wrap gap-1.5 sm:max-w-[60mm] print:max-w-[60mm]">
            {SUMMIT_FOCUS.map((item) => (
              <li key={item.title} className="rounded-full border border-gold/40 bg-gold-light/15 px-2 py-px text-[0.62rem] text-gold-deep">
                {item.title}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section>
        <DossierHeading index="06" kicker={`${FIELD_ENTRIES.length} of ${IMPACT_STORIES.length} on record`}>
          Field record
        </DossierHeading>
        <ol className="mt-2 grid grid-cols-2 gap-2 sm:grid-cols-4 print:grid-cols-4">
          {FIELD_ENTRIES.map((story, index) => {
            const photo = getPhoto(story.cover)
            return (
              <li key={story.slug} className="overflow-hidden rounded-sm border border-stone bg-ivory">
                <div className="relative aspect-[16/9] bg-night">
                  <Image src={photo.src} alt={photo.alt} fill sizes="(min-width: 640px) 45mm, 45vw" className="object-cover" />
                  <span className="absolute left-1.5 top-1.5 rounded-sm bg-night/85 px-1.5 py-0.5 font-display text-[0.6rem] tabular-nums tracking-[0.12em] text-gold-light">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="px-2 py-1.5">
                  <p className="font-serif text-[0.74rem] leading-tight">{story.title}</p>
                  <p className="mt-0.5 line-clamp-2 text-[0.58rem] leading-snug text-muted">{story.context}</p>
                </div>
              </li>
            )
          })}
        </ol>
      </section>
    </div>
  )
}
