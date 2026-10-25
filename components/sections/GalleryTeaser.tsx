import Image from "next/image"
import Link from "next/link"
import Container from "@/components/ui/Container"
import ButtonLink from "@/components/ui/ButtonLink"
import Eyebrow from "@/components/ui/Eyebrow"
import { getPhoto } from "@/data/gallery"
import { HOME_TEASER } from "@/data/images"
import { cn, revealDelay } from "@/lib/utils"

const SPANS = ["col-span-2 row-span-2", "", "", "", "", "col-span-2"]

/** Homepage strip of real photographs leading into the gallery and impact stories. */
export default function GalleryTeaser() {
  return (
    <section aria-labelledby="teaser-title" data-checkpoint="Field Record" className="bg-night py-24 text-ivory lg:py-32">
      <Container size="wide">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <Eyebrow tone="light">Impact stories</Eyebrow>
            <h2 id="teaser-title" data-reveal className="mt-6 font-serif text-4xl leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              Not a brochure. <em className="text-gold-shimmer">The real work.</em>
            </h2>
          </div>
          <div data-reveal className="lg:col-span-5">
            <p className="text-lg leading-relaxed text-ivory/75">
              Summits, clean-ups, classrooms and ceremonies. Explore the stories, log the moments, and test yourself
              in Field Recall.
            </p>
            <div className="mt-8">
              <ButtonLink href="/gallery" label="Explore the gallery" />
            </div>
          </div>
        </div>

        <ul className="mt-14 grid auto-rows-[9rem] grid-cols-2 gap-3 sm:auto-rows-[12rem] lg:grid-cols-4">
          {HOME_TEASER.map((id, index) => {
            const photo = getPhoto(id)
            return (
              <li key={id} data-reveal style={revealDelay(index, 70)} className={cn("relative overflow-hidden", SPANS[index])}>
                <Link href={`/gallery?story=${photo.story}#moments`} className="group block h-full">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(min-width: 1024px) 25vw, 50vw"
                    className="object-cover transition duration-1000 ease-out group-hover:scale-105"
                  />
                  <span aria-hidden="true" className="absolute inset-0 ring-1 ring-inset ring-gold-light/0 transition duration-500 group-hover:ring-gold-light/60" />
                </Link>
              </li>
            )
          })}
        </ul>
      </Container>
    </section>
  )
}
