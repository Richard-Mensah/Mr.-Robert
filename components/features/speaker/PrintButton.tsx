"use client"

import { Printer } from "lucide-react"

/** Opens the browser print dialog, where the one-sheet can also be saved as a PDF. */
export default function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="btn-sweep inline-flex min-h-12 items-center gap-3 bg-gold-light px-6 text-sm font-medium text-ink hover:bg-ivory print:hidden"
    >
      <Printer aria-hidden="true" className="size-4" strokeWidth={1.5} />
      Print or save as PDF
    </button>
  )
}
