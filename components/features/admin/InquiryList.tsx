import type { InquiryRow } from "@/lib/admin"
import { formatDate } from "@/lib/utils"

type Props = {
  inquiries: InquiryRow[]
}

export default function InquiryList({ inquiries }: Props) {
  if (inquiries.length === 0) {
    return <p className="border border-dashed border-ink/15 p-8 text-center text-muted">No inquiries yet.</p>
  }

  return (
    <ul className="divide-y divide-ink/10 border border-ink/10 bg-paper">
      {inquiries.map((inquiry) => (
        <li key={inquiry.id}>
          <details className="group p-5 open:bg-ivory">
            <summary className="flex cursor-pointer list-none flex-wrap items-center gap-x-4 gap-y-1">
              <span className="bg-night px-2 py-0.5 font-display text-[0.72rem] tracking-[0.18em] text-gold-light">
                {inquiry.kind}
              </span>
              <span className="font-serif text-lg text-ink">{inquiry.name}</span>
              <span className="text-sm text-muted">{inquiry.organisation}</span>
              <time className="ml-auto text-xs text-muted" dateTime={new Date(inquiry.created_at).toISOString()}>
                {formatDate(new Date(inquiry.created_at).toISOString())}
              </time>
            </summary>
            <div className="mt-4 grid gap-4 text-sm sm:grid-cols-[1fr_2fr]">
              <dl className="space-y-2 text-muted">
                <div>
                  <dt className="text-xs uppercase tracking-wider">Email</dt>
                  <dd>
                    <a className="text-forest underline" href={`mailto:${inquiry.email}`}>
                      {inquiry.email}
                    </a>
                  </dd>
                </div>
                {inquiry.event_name && (
                  <div>
                    <dt className="text-xs uppercase tracking-wider">Event</dt>
                    <dd className="text-ink">{inquiry.event_name}</dd>
                  </div>
                )}
                {inquiry.proposed_date && (
                  <div>
                    <dt className="text-xs uppercase tracking-wider">Proposed date</dt>
                    <dd className="text-ink">{inquiry.proposed_date}</dd>
                  </div>
                )}
                {inquiry.location && (
                  <div>
                    <dt className="text-xs uppercase tracking-wider">Location</dt>
                    <dd className="text-ink">{inquiry.location}</dd>
                  </div>
                )}
                {inquiry.topic && (
                  <div>
                    <dt className="text-xs uppercase tracking-wider">Topic</dt>
                    <dd className="text-ink">{inquiry.topic}</dd>
                  </div>
                )}
              </dl>
              <p className="whitespace-pre-line leading-relaxed text-ink">{inquiry.message}</p>
            </div>
          </details>
        </li>
      ))}
    </ul>
  )
}
