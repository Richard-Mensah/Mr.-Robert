import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import Container from "@/components/ui/Container"
import SectionHeader from "@/components/ui/SectionHeader"
import StoryProgress from "@/components/features/gallery/StoryProgress"
import { IMPACT_STORIES, STORY_CATEGORIES, getPhoto, photosForStory } from "@/data/gallery"
import { cn, revealDelay } from "@/lib/utils"

const CATEGORY_LABEL = Object.fromEntries(STORY_CATEGORIES.map((item) => [item.slug, item.label]))

/** Field stories from Robert's work, each told through its photographs. */
export default function ImpactStories() {
  return (
    <section aria-labelledby="impact-title" data-checkpoint="Field Record" className="bg-ivory py-24 lg:py-32">
      <Container size="wide">
        <SectionHeader
          id="impact-title"
          eyebrow="Impact stories"
          title="Where the work happens."
          align="split"
          intro={
            <p>
              Summits, classrooms, clean-ups and ceremonies across Ghana&apos;s North. Open a story to see its moments,
              and collect them all to earn the Full Archive credential.
            </p>
          }
        />

        <ul className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {IMPACT_STORIES.map((story, index) => {
            const cover = getPhoto(story.cover)
            const photos = photosForStory(story.slug)
            const featured = index === 0
            return (
              <li
                key={story.slug}
                data-reveal
                style={revealDelay(index % 3, 90)}
                className={cn(featured && "sm:col-span-2 lg:row-span-2")}
              >
                <Link
                  href={`/gallery?story=${story.slug}#moments`}
                  scroll={false}
                  className="group relative flex h-full min-h-[30rem] flex-col justify-end overflow-hidden bg-night text-ivory sm:min-h-[24rem]"
                >
                  <Image
                    src={cover.src}
                    alt=""
                    fill
                    sizes={featured ? "(min-width: 1024px) 66vw, 100vw" : "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"}
                    className="object-cover transition duration-1000 ease-out group-hover:scale-105"
                  />
                  <span aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-ink from-30% via-ink/80 via-55% to-ink/0" />
                  <div className="relative p-6 sm:p-8">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <span className="font-display text-[0.72rem] tracking-[0.2em] text-gold-light">
                        {CATEGORY_LABEL[story.category]}
                      </span>
                      <StoryProgress photoIds={photos.map((photo) => photo.id)} />
                    </div>
                    <h3 className={cn("mt-3 font-serif leading-tight tracking-tight", featured ? "text-3xl sm:text-5xl" : "text-2xl")}>
                      {story.title}
                    </h3>
                    <p className="mt-1 text-xs text-ivory/60">{story.context}</p>
                    <p className={cn("mt-4 leading-relaxed text-ivory/80", featured ? "max-w-xl text-base" : "text-sm")}>
                      {story.summary}
                    </p>
                    {story.figures && (
                      <dl className="mt-5 flex flex-wrap gap-6">
                        {story.figures.map((figure) => (
                          <div key={figure.label}>
                            <dt className="text-xs text-ivory/60">{figure.label}</dt>
                            <dd className="font-serif text-2xl text-gold-light">{figure.value}</dd>
                          </div>
                        ))}
                      </dl>
                    )}
                    <span className="mt-5 inline-flex items-center gap-2 border-b border-gold-light/60 pb-1 text-sm text-gold-light">
                      View {photos.length} {photos.length === 1 ? "moment" : "moments"}
                      <ArrowRight aria-hidden="true" className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </li>
            )
          })}
        </ul>
      </Container>
    </section>
  )
}
