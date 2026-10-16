import Link from "next/link"
import Image from "next/image"
import InsightMeta from "@/components/features/insights/InsightMeta"
import type { Insight } from "@/types"

type Props = {
  insight: Insight
}

export default function InsightCard({ insight }: Props) {
  return (
    <article className="group relative flex h-full flex-col border-t border-ink/15 pt-6 transition-colors hover:border-forest">
      {insight.coverImage && (
        <div className="relative mb-6 aspect-[3/2] overflow-hidden bg-stone">
          <Image
            src={insight.coverImage}
            alt=""
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          />
        </div>
      )}
      <InsightMeta insight={insight} />
      <h3 className="mt-4 font-serif text-2xl leading-tight tracking-tight text-ink transition-colors group-hover:text-forest">
        <Link href={`/insights/${insight.slug}`} className="after:absolute after:inset-0">
          {insight.title}
        </Link>
      </h3>
      <p className="mt-3 line-clamp-3 leading-relaxed text-muted">{insight.excerpt}</p>
    </article>
  )
}
