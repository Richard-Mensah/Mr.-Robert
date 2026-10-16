import Link from "next/link"
import { Search } from "lucide-react"
import { INSIGHT_CATEGORIES } from "@/data/insights"
import { cn } from "@/lib/utils"

type Props = {
  activeCategory: string | null
  search: string | null
}

function categoryHref(slug: string | null, search: string | null) {
  const params = new URLSearchParams()
  if (slug) params.set("category", slug)
  if (search) params.set("q", search)
  const query = params.toString()
  return query ? `/insights?${query}` : "/insights"
}

/** Server-rendered filters: plain links and a GET form, so they work without JavaScript. */
export default function InsightFilters({ activeCategory, search }: Props) {
  const options = [{ slug: null, label: "All" }, ...INSIGHT_CATEGORIES]

  return (
    <div className="flex flex-col gap-8 border-y border-ink/10 py-6 lg:flex-row lg:items-center lg:justify-between">
      <nav aria-label="Insight categories" className="-mx-5 overflow-x-auto px-5 sm:mx-0 sm:px-0">
        <ul className="flex gap-2 whitespace-nowrap">
          {options.map((option) => {
            const active = option.slug === activeCategory
            return (
              <li key={option.label}>
                <Link
                  href={categoryHref(option.slug, search)}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "inline-flex min-h-10 items-center border px-4 text-sm transition-colors",
                    active ? "border-ink bg-ink text-ivory" : "border-ink/15 text-ink hover:border-ink",
                  )}
                >
                  {option.label}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>

      <form role="search" action="/insights" method="get" className="flex w-full items-center border-b border-ink/30 lg:max-w-xs">
        {activeCategory && <input type="hidden" name="category" value={activeCategory} />}
        <label htmlFor="insight-search" className="sr-only">
          Search insights
        </label>
        <input
          id="insight-search"
          name="q"
          type="search"
          defaultValue={search ?? ""}
          placeholder="Search insights"
          className="min-h-11 w-full bg-transparent py-2 text-base placeholder:text-muted-light focus:outline-none"
        />
        <button type="submit" className="inline-flex min-h-11 min-w-11 items-center justify-center text-ink hover:text-forest">
          <Search aria-hidden="true" className="size-4" />
          <span className="sr-only">Search</span>
        </button>
      </form>
    </div>
  )
}
