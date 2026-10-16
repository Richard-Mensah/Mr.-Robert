type Props = {
  index: number
  title: string
  description: string
}

export default function SpeakerCard({ index, title, description }: Props) {
  return (
    <article className="group flex h-full gap-6 border-t border-ink/15 py-7 transition-colors duration-500 hover:border-forest">
      <span className="font-serif text-sm italic text-gold-deep">{String(index + 1).padStart(2, "0")}</span>
      <div>
        <h3 className="font-serif text-2xl leading-tight tracking-tight text-ink transition-colors group-hover:text-forest">
          {title}
        </h3>
        <p className="mt-2 leading-relaxed text-muted">{description}</p>
      </div>
    </article>
  )
}
