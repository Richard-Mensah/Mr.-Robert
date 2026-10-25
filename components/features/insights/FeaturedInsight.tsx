import Link from "next/link"
import Image from "next/image"
import InsightMeta from "@/components/features/insights/InsightMeta"
import type { Insight } from "@/types"

type Props = {
  insight: Insight
}

export default function FeaturedInsight({ insight }: Props) {
  return (
    <article className="group relative grid gap-10 bg-ink p-8 text-ivory sm:p-12 lg:grid-cols-12 lg:items-center lg:p-16">
      <div className="lg:col-span-7">
        <p className="font-display text-sm tracking-eyebrow text-gold-light">Featured</p>
        <h2 className="mt-6 font-serif text-3xl leading-[1.1] tracking-tight text-balance sm:text-5xl">
          <Link href={`/insights/${insight.slug}`} className="after:absolute after:inset-0 group-hover:text-gold-light">
            {insight.title}
          </Link>
        </h2>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-ivory/70">{insight.excerpt}</p>
        <div className="mt-8">
          <InsightMeta insight={insight} tone="light" />
        </div>
      </div>
      {insight.coverImage && (
        <div className="relative aspect-[4/3] overflow-hidden lg:col-span-5">
          <Image
            src={insight.coverImage}
            alt=""
            fill
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          />
        </div>
      )}
    </article>
  )
}
