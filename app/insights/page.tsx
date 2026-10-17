import PageHero from "@/components/sections/PageHero"
import InsightsListing from "@/components/features/insights/InsightsListing"
import PageMoments from "@/components/features/gallery/PageMoments"
import { pageMetadata } from "@/lib/seo"

export const metadata = pageMetadata({
  title: "Insights",
  description:
    "Reflections from Robert Kampi Laari on leadership, youth development, careers, personal growth, entrepreneurship, public service and community development.",
  path: "/insights",
})

type Props = {
  searchParams: Promise<{ category?: string; q?: string }>
}

export default async function InsightsPage({ searchParams }: Props) {
  const { category, q } = await searchParams

  return (
    <>
      <PageHero
        eyebrow="Insights"
        title={
          <>
            Thinking on leadership, youth and <em className="text-gold-shimmer">opportunity.</em>
          </>
        }
      />
      <InsightsListing category={category ?? null} search={q ?? null} />
      <PageMoments page="insights" tone="ivory" />
    </>
  )
}
