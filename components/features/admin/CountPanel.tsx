import type { CountRow } from "@/lib/admin"

type Props = {
  title: string
  labels: string[]
  rows: CountRow[]
}

/** A small bar chart of counts per category, rendered on the server. */
export default function CountPanel({ title, labels, rows }: Props) {
  const total = rows.reduce((sum, row) => sum + row.count, 0)
  const max = Math.max(1, ...rows.map((row) => row.count))

  return (
    <section className="border border-ink/10 bg-paper p-6">
      <div className="flex items-baseline justify-between">
        <h2 className="font-display text-xs tracking-eyebrow text-gold-deep">{title}</h2>
        <p className="font-serif text-3xl text-ink">{total}</p>
      </div>
      <dl className="mt-6 space-y-3">
        {labels.map((label) => {
          const count = rows.find((row) => row.label === label)?.count ?? 0
          return (
            <div key={label} className="grid grid-cols-[7rem_1fr_2.5rem] items-center gap-3 text-sm">
              <dt className="capitalize text-muted">{label}</dt>
              <dd className="h-2 bg-ink/5" aria-hidden="true">
                <div className="h-full bg-gold" style={{ width: `${(count / max) * 100}%` }} />
              </dd>
              <dd className="text-right tabular-nums text-ink">{count}</dd>
            </div>
          )
        })}
      </dl>
    </section>
  )
}
