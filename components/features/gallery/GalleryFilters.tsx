import Link from "next/link"
import { X } from "lucide-react"
import { STORY_CATEGORIES } from "@/data/gallery"
import { cn } from "@/lib/utils"
import type { Story, StoryCategory } from "@/types"

type Props = {
  activeCategory: StoryCategory | null
  activeStory: Story | null
}

function href(category: string | null) {
  return category ? `/gallery?category=${category}#moments` : "/gallery#moments"
}

/** Server-rendered category chips, so filtering works without JavaScript. */
export default function GalleryFilters({ activeCategory, activeStory }: Props) {
  const options = [{ slug: null, label: "All moments" }, ...STORY_CATEGORIES]

  return (
    <div className="flex flex-col gap-5 border-y border-ink/10 py-6 lg:flex-row lg:items-center lg:justify-between">
      <nav aria-label="Gallery categories" className="-mx-5 overflow-x-auto px-5 sm:mx-0 sm:px-0">
        <ul className="flex gap-2 whitespace-nowrap">
          {options.map((option) => {
            const active = !activeStory && option.slug === activeCategory
            return (
              <li key={option.label}>
                <Link
                  href={href(option.slug)}
                  scroll={false}
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

      {activeStory && (
        <p className="flex items-center gap-3 text-sm text-muted">
          Showing <span className="font-medium text-ink">{activeStory.title}</span>
          <Link
            href="/gallery#moments"
            scroll={false}
            className="inline-flex min-h-10 items-center gap-1.5 border border-ink/15 px-3 text-ink hover:border-ink"
          >
            <X aria-hidden="true" className="size-3.5" />
            Clear
          </Link>
        </p>
      )}
    </div>
  )
}
