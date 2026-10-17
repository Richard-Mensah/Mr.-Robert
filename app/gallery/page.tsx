import PageHero from "@/components/sections/PageHero"
import ImpactStories from "@/components/sections/ImpactStories"
import CTASection from "@/components/sections/CTASection"
import Container from "@/components/ui/Container"
import SectionHeader from "@/components/ui/SectionHeader"
import GalleryFilters from "@/components/features/gallery/GalleryFilters"
import GalleryGrid from "@/components/features/gallery/GalleryGrid"
import MomentQuiz from "@/components/features/gallery/MomentQuiz"
import { PHOTOS, STORIES, STORY_CATEGORIES, getStory } from "@/data/gallery"
import { pageMetadata } from "@/lib/seo"
import type { StoryCategory } from "@/types"

export const metadata = pageMetadata({
  title: "Gallery and Impact Stories",
  description:
    "Photographs from Robert Kampi Laari's work: the Tamale Youth Summit, the North East Youth Summit, National Youth Month, campus tours, apprenticeship ceremonies and more.",
  path: "/gallery",
})

type Props = {
  searchParams: Promise<{ category?: string; story?: string }>
}

function isCategory(value: string | undefined): value is StoryCategory {
  return STORY_CATEGORIES.some((item) => item.slug === value)
}

export default async function GalleryPage({ searchParams }: Props) {
  const { category, story } = await searchParams
  const activeStory = story ? (getStory(story) ?? null) : null
  const activeCategory = isCategory(category) ? category : null

  const storyCategory = new Map(STORIES.map((item) => [item.slug, item.category]))
  const photos = activeStory
    ? PHOTOS.filter((photo) => photo.story === activeStory.slug)
    : activeCategory
      ? PHOTOS.filter((photo) => storyCategory.get(photo.story) === activeCategory)
      : PHOTOS

  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title={
          <>
            The work, <em className="text-gold-shimmer">in the field.</em>
          </>
        }
        intro={
          <p>
            Real moments from summits, classrooms, communities and ceremonies. Every photo you open is collected on your
            journey.
          </p>
        }
      />

      <ImpactStories />

      <section id="moments" aria-labelledby="moments-title" data-checkpoint="Moments" className="scroll-mt-20 bg-paper py-24 lg:py-32">
        <Container size="wide">
          <SectionHeader id="moments-title" eyebrow={`${PHOTOS.length} photographs`} title="Moments." className="mb-12" />
          <GalleryFilters activeCategory={activeCategory} activeStory={activeStory} />
          <GalleryGrid key={activeStory?.slug ?? activeCategory ?? "all"} photos={photos} />
        </Container>
      </section>

      <section id="quiz" aria-labelledby="quiz-title" data-checkpoint="Game" className="scroll-mt-20 bg-paper pb-24 lg:pb-32">
        <Container size="wide">
          <MomentQuiz />
        </Container>
      </section>

      <CTASection
        eyebrow="Bring Robert to your event"
        title="Your event could be the next story."
        body="Invite Robert to speak, mentor or partner with your institution or programme."
      />
    </>
  )
}
