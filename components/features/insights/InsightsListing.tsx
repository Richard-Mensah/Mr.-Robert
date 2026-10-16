import Container from "@/components/ui/Container"
import InsightFilters from "@/components/features/insights/InsightFilters"
import FeaturedInsight from "@/components/features/insights/FeaturedInsight"
import InsightCard from "@/components/features/insights/InsightCard"
import InsightsEmptyState from "@/components/features/insights/InsightsEmptyState"
import SubscribeForm from "@/components/features/subscribe/SubscribeForm"
import { INSIGHT_CATEGORIES } from "@/data/insights"
import { getInsights } from "@/lib/insights"

type Props = {
  category: string | null
  search: string | null
}

export default async function InsightsListing({ category, search }: Props) {
  const validCategory = INSIGHT_CATEGORIES.some((item) => item.slug === category) ? category : null
  const query = search?.trim().slice(0, 100) || null
  const filtered = Boolean(validCategory || query)
  const insights = await getInsights({ category: validCategory, search: query })

  const featured = !filtered ? insights.find((insight) => insight.featured) : undefined
  const rest = featured ? insights.filter((insight) => insight.slug !== featured.slug) : insights

  return (
    <section aria-label="Articles" className="bg-paper py-20 lg:py-28">
      <Container size="wide">
        {featured && (
          <div className="mb-16">
            <FeaturedInsight insight={featured} />
          </div>
        )}
        <InsightFilters activeCategory={validCategory} search={query} />
        {insights.length === 0 ? (
          <InsightsEmptyState filtered={filtered} />
        ) : (
          <>
            <p className="sr-only" role="status">
              {insights.length} {insights.length === 1 ? "article" : "articles"} found
            </p>
            <ul className="mt-14 grid gap-x-10 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
              {rest.map((insight) => (
                <li key={insight.slug}>
                  <InsightCard insight={insight} />
                </li>
              ))}
            </ul>
            <div className="mt-24 flex flex-col gap-8 border-t border-ink/10 pt-12 lg:flex-row lg:items-end lg:justify-between">
              <p className="max-w-md font-serif text-3xl leading-tight text-ink">Never miss a new insight.</p>
              <SubscribeForm interest="insights" label="Your email" buttonLabel="Subscribe" />
            </div>
          </>
        )}
      </Container>
    </section>
  )
}
