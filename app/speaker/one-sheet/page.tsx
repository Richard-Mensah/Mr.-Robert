import Image from "next/image"
import Container from "@/components/ui/Container"
import ImagePanel from "@/components/ui/ImagePanel"
import PrintButton from "@/components/features/speaker/PrintButton"
import { BIOGRAPHY, PROFILE } from "@/data/profile"
import { CORE_THEMES, ENGAGEMENT_FORMATS } from "@/data/speaking"
import { BOOKS } from "@/data/books"
import { IMAGES } from "@/data/images"
import { pageMetadata } from "@/lib/seo"
import { ROLE_LINE, SITE_URL } from "@/constants"

export const metadata = pageMetadata({
  title: "Speaker One-Sheet",
  description: "A printable one-page summary of Robert Kampi Laari's speaking themes, background and booking details.",
  path: "/speaker/one-sheet",
})

const bookingUrl = `${SITE_URL.replace(/^https?:\/\//, "")}/speaker`

export default function OneSheetPage() {
  return (
    <div className="bg-night pb-24 pt-32 print:bg-white print:p-0 lg:pt-40">
      <Container size="narrow" className="max-w-4xl print:max-w-none print:px-0">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4 text-ivory print:hidden">
          <p className="font-display text-xs tracking-eyebrow text-gold-light">For organisers and media</p>
          <PrintButton />
        </div>

        <article className="bg-paper p-8 text-ink shadow-[0_50px_120px_-40px_rgba(0,0,0,0.8)] sm:p-12 print:shadow-none">
          <header className="flex items-start justify-between gap-6 border-b-2 border-gold pb-6">
            <div>
              <h1 className="font-display text-3xl tracking-[0.08em] sm:text-4xl">{PROFILE.name}</h1>
              <p className="mt-2 text-sm text-muted">{ROLE_LINE}</p>
            </div>
            <Image src="/brand/monogram.png" alt="" width={64} height={64} className="shrink-0" />
          </header>

          <div className="mt-8 grid gap-8 sm:grid-cols-[1fr_14rem] print:grid-cols-[1fr_12rem]">
            <div>
              <p className="font-serif text-2xl leading-snug">
                Empowering young people to lead, build and transform.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted">{BIOGRAPHY[0]}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted">{BIOGRAPHY[1]}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted">{BIOGRAPHY[3]}</p>
            </div>
            <div className="relative aspect-[4/5]">
              <ImagePanel image={IMAGES.oneSheet} className="h-full w-full" sizes="14rem" />
            </div>
          </div>

          <section className="mt-10">
            <h2 className="font-display text-xs tracking-eyebrow text-gold-deep">Speaking themes</h2>
            <ul className="mt-4 grid gap-x-8 gap-y-4 sm:grid-cols-2">
              {CORE_THEMES.map((theme) => (
                <li key={theme.title} className="border-l-2 border-gold pl-4">
                  <p className="font-serif text-lg">{theme.title}</p>
                  <p className="text-sm text-muted">{theme.description}</p>
                </li>
              ))}
            </ul>
          </section>

          <div className="mt-10 grid gap-8 sm:grid-cols-3">
            <section>
              <h2 className="font-display text-xs tracking-eyebrow text-gold-deep">Formats</h2>
              <ul className="mt-3 space-y-1 text-sm">
                {ENGAGEMENT_FORMATS.map((format) => (
                  <li key={format}>{format}</li>
                ))}
              </ul>
            </section>
            <section>
              <h2 className="font-display text-xs tracking-eyebrow text-gold-deep">Books</h2>
              <ul className="mt-3 space-y-1 text-sm">
                {BOOKS.map((book) => (
                  <li key={book.slug}>
                    <cite>{book.title}</cite>
                  </li>
                ))}
              </ul>
            </section>
            <section>
              <h2 className="font-display text-xs tracking-eyebrow text-gold-deep">Initiative</h2>
              <p className="mt-3 text-sm">Founder and Convener, Tamale Youth Summit</p>
            </section>
          </div>

          <footer className="mt-10 flex flex-wrap items-end justify-between gap-4 border-t border-ink/10 pt-6">
            <div>
              <p className="font-display text-xs tracking-eyebrow text-gold-deep">Booking</p>
              <p className="mt-2 text-sm">{bookingUrl}</p>
            </div>
            <p className="font-script text-3xl text-gold-deep">{PROFILE.motto}</p>
          </footer>
        </article>
      </Container>
    </div>
  )
}
