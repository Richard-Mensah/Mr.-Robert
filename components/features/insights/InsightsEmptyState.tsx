import Link from "next/link"
import SubscribeForm from "@/components/features/subscribe/SubscribeForm"
import { INSIGHT_CATEGORIES } from "@/data/insights"

type Props = {
  filtered: boolean
}

export default function InsightsEmptyState({ filtered }: Props) {
  if (filtered) {
    return (
      <div className="py-24 text-center">
        <p className="font-serif text-3xl text-ink">No insights match your search.</p>
        <Link href="/insights" className="mt-6 inline-block border-b border-current pb-1 text-forest hover:text-forest-deep">
          View all insights
        </Link>
      </div>
    )
  }

  return (
    <div className="grid gap-12 py-20 lg:grid-cols-12 lg:py-28">
      <div className="lg:col-span-7">
        <p className="text-xs font-semibold uppercase tracking-eyebrow text-gold-deep">Coming soon</p>
        <p className="mt-6 font-serif text-4xl leading-tight tracking-tight text-ink sm:text-5xl">
          Insights are being prepared.
        </p>
        <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted">
          Robert&apos;s reflections on leadership, youth development, careers and community will be published here.
        </p>
        <div className="mt-10">
          <SubscribeForm interest="insights" label="Get new insights by email" buttonLabel="Subscribe" />
        </div>
      </div>
      <div className="lg:col-span-5">
        <p className="text-xs font-semibold uppercase tracking-eyebrow text-muted">Topics to expect</p>
        <ul className="mt-6 divide-y divide-ink/10 border-y border-ink/10">
          {INSIGHT_CATEGORIES.map((category) => (
            <li key={category.slug} className="py-3 font-serif text-xl text-ink">
              {category.label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
