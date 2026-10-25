import type { ReactNode } from "react"
import DossierLetterhead from "@/components/features/dossier/DossierLetterhead"
import { PROFILE } from "@/data/profile"
import { SITE_URL } from "@/constants"
import { cn } from "@/lib/utils"

type Props = {
  page: number
  pages: number
  title: string
  children: ReactNode
  className?: string
}

const siteHost = SITE_URL.replace(/^https?:\/\//, "")

/** One A4 sheet of the dossier: letterhead, body and a running footer. Exactly one page in print. */
export default function DossierSheet({ page, pages, title, children, className }: Props) {
  return (
    <section
      aria-label={`Sheet ${page} of ${pages}: ${title}`}
      className={cn(
        "relative mx-auto flex w-full max-w-[210mm] flex-col overflow-hidden bg-paper text-ink shadow-[0_50px_120px_-40px_rgba(0,0,0,0.85)]",
        "print:h-[297mm] print:max-w-none print:shadow-none print:break-after-page print:last:break-after-auto",
        className,
      )}
    >
      <DossierLetterhead page={page} pages={pages} title={title} />
      <div className="min-h-0 flex-1 px-6 py-7 sm:px-[13mm] sm:py-[7mm] print:px-[13mm] print:py-[6.5mm]">{children}</div>
      <footer className="flex shrink-0 items-center justify-between gap-4 border-t border-stone px-6 py-2.5 text-[0.66rem] text-muted sm:px-[13mm] print:px-[13mm]">
        <span className="font-display tracking-[0.18em] text-forest">{PROFILE.name} · Briefing Dossier</span>
        <span className="hidden sm:inline print:inline">{siteHost}/dossier</span>
        <span className="tabular-nums">
          {page} / {pages}
        </span>
      </footer>
    </section>
  )
}
