import { parseArticleBody } from "@/lib/utils"

type Props = {
  body: string
}

export default function ArticleBody({ body }: Props) {
  const blocks = parseArticleBody(body)

  return (
    <div className="space-y-7 text-lg leading-[1.8] text-ink/85">
      {blocks.map((block, index) => {
        if (block.type === "heading") {
          return (
            <h2 key={index} className="pt-6 font-serif text-3xl leading-tight tracking-tight text-ink">
              {block.text}
            </h2>
          )
        }
        if (block.type === "quote") {
          return (
            <blockquote key={index} className="my-10 border-l-2 border-gold pl-6 font-serif text-2xl italic leading-snug text-ink">
              <p>{block.text}</p>
            </blockquote>
          )
        }
        return <p key={index}>{block.text}</p>
      })}
    </div>
  )
}
