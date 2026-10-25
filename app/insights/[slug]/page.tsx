import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import Container from "@/components/ui/Container"
import JsonLd from "@/components/ui/JsonLd"
import InsightMeta from "@/components/features/insights/InsightMeta"
import ArticleBody from "@/components/features/insights/ArticleBody"
import AuthorBio from "@/components/features/insights/AuthorBio"
import { getInsightBySlug } from "@/lib/insights"
import { pageMetadata } from "@/lib/seo"
import { SITE_URL } from "@/constants"

export const revalidate = 300

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const insight = await getInsightBySlug(slug)
  if (!insight) return { title: "Insight not found" }
  return pageMetadata({ title: insight.title, description: insight.excerpt, path: `/insights/${slug}` })
}

export default async function InsightPage({ params }: Props) {
  const { slug } = await params
  const insight = await getInsightBySlug(slug)
  if (!insight) notFound()

  return (
    <article className="bg-paper pb-24 lg:pb-36">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: insight.title,
          description: insight.excerpt,
          datePublished: insight.publishedAt,
          author: { "@id": `${SITE_URL}/#person` },
          mainEntityOfPage: `${SITE_URL}/insights/${insight.slug}`,
        }}
      />
      <div data-checkpoint="Overview" className="grid-chancery aurora relative overflow-hidden bg-night pb-16 pt-32 text-ivory lg:pt-44">
        <Container size="narrow" className="relative">
          <Link href="/insights" className="inline-flex min-h-11 items-center gap-2 text-sm text-ivory/70 hover:text-gold-light">
            <ArrowLeft aria-hidden="true" className="size-4" strokeWidth={1.5} />
            All insights
          </Link>
          <header className="mt-10 animate-rise">
            <InsightMeta insight={insight} tone="light" />
            <h1 className="mt-6 font-serif text-4xl leading-[1.08] tracking-tight text-balance sm:text-6xl">
              {insight.title}
            </h1>
            <p className="mt-6 text-xl leading-relaxed text-ivory/70">{insight.excerpt}</p>
          </header>
        </Container>
      </div>
      {insight.coverImage && (
        <Container className="mt-14">
          <div className="relative aspect-[16/9] overflow-hidden bg-stone">
            <Image src={insight.coverImage} alt="" fill priority sizes="(min-width: 1280px) 1280px, 100vw" className="object-cover" />
          </div>
        </Container>
      )}
      <Container size="narrow" className="mt-14">
        <ArticleBody body={insight.body} />
        <div className="mt-20">
          <AuthorBio />
        </div>
      </Container>
    </article>
  )
}
