import Image from "next/image"
import { GraduationCap, Mail } from "lucide-react"
import DossierHeading from "@/components/features/dossier/DossierHeading"
import { BOOKS } from "@/data/books"
import { YOUTH_FRAMEWORK } from "@/data/pillars"
import { PROFILE } from "@/data/profile"
import { CORE_THEMES, ENGAGEMENT_FORMATS } from "@/data/speaking"
import { SITE_URL } from "@/constants"

const siteHost = SITE_URL.replace(/^https?:\/\//, "")

/** Sheet two, second half: method, publications, education, speaking and correspondence. */
export default function DossierPortfolio() {
  return (
    <div className="mt-4 space-y-4">
      <section>
        <DossierHeading index="07" kicker="How the work is organised">
          Youth development framework
        </DossierHeading>
        <ol className="mt-2 grid gap-1.5 sm:grid-cols-5 print:grid-cols-5">
          {YOUTH_FRAMEWORK.map((stage) => (
            <li key={stage.step} className="relative rounded-sm border-t-2 border-cerulean bg-ivory px-2 py-1.5">
              <span className="font-display text-[0.62rem] tracking-[0.16em] text-cerulean">Level {stage.step}</span>
              <p className="font-serif text-[0.84rem] leading-tight">{stage.title}</p>
              <p className="mt-0.5 line-clamp-3 text-[0.56rem] leading-snug text-muted">{stage.description}</p>
            </li>
          ))}
        </ol>
      </section>

      <div className="grid gap-5 sm:grid-cols-[1.35fr_1fr] print:grid-cols-[1.35fr_1fr]">
        <section>
          <DossierHeading index="08">Publications</DossierHeading>
          <ul className="mt-2 grid grid-cols-2 gap-3">
            {BOOKS.map((book) => (
              <li key={book.slug} className="flex gap-2.5">
                {book.cover && (
                  <span className="relative h-[19mm] w-[13.5mm] shrink-0 overflow-hidden rounded-[2px] shadow-[0_6px_14px_-6px_rgba(6,20,15,0.55)]">
                    <Image
                      src={book.cover.src}
                      alt=""
                      fill
                      sizes="14mm"
                      className="object-cover"
                      style={book.cover.position ? { objectPosition: book.cover.position } : undefined}
                    />
                  </span>
                )}
                <span>
                  <cite className="block font-serif text-[0.88rem] not-italic leading-tight">{book.title}</cite>
                  {book.subtitle && <span className="mt-0.5 block text-[0.62rem] leading-snug text-muted">{book.subtitle}</span>}
                </span>
              </li>
            ))}
          </ul>
        </section>
        <section>
          <DossierHeading index="09">Education</DossierHeading>
          <div className="mt-2 flex gap-2.5">
            <GraduationCap aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-gold-deep" strokeWidth={1.5} />
            <div>
              <p className="font-serif text-[0.9rem] leading-tight">{PROFILE.education.institution}</p>
              <p className="text-[0.72rem] text-muted">{PROFILE.education.field}</p>
            </div>
          </div>
        </section>
      </div>

      <section>
        <DossierHeading index="10" kicker="Speaking">
          Addresses and themes
        </DossierHeading>
        <p className="mt-2 text-[0.66rem] text-muted">Formats: {ENGAGEMENT_FORMATS.join(" · ")}</p>
        <ul className="mt-1.5 grid grid-cols-2 gap-x-6 gap-y-1 sm:grid-cols-3 print:grid-cols-3">
          {CORE_THEMES.map((theme) => (
            <li key={theme.title} className="flex items-center gap-2 font-serif text-[0.78rem]">
              <span aria-hidden="true" className="size-1 rotate-45 bg-gold" />
              {theme.title}
            </li>
          ))}
        </ul>
      </section>

      <section className="flex flex-wrap items-end justify-between gap-4 rounded-sm bg-night px-5 py-3 text-ivory">
        <div className="flex items-center gap-3">
          <Mail aria-hidden="true" className="size-4 text-gold-light" strokeWidth={1.5} />
          <div>
            <p className="font-display text-[0.66rem] tracking-[0.22em] text-cerulean-light">Correspondence</p>
            <p className="text-[0.8rem]">{siteHost}/contact</p>
          </div>
        </div>
        <p className="font-script text-[1.6rem] leading-none text-gold-light">{PROFILE.motto}</p>
      </section>
    </div>
  )
}
