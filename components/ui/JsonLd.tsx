type Props = {
  data: Record<string, unknown> | Record<string, unknown>[]
}

/** Structured data for search engines. Content is static and escaped for safe embedding. */
export default function JsonLd({ data }: Props) {
  const json = JSON.stringify(data).replace(/</g, "\\u003c")
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />
}
