import { ArrowRight, Loader2 } from "lucide-react"

type Props = {
  label: string
  submitting: boolean
}

export default function SubmitButton({ label, submitting }: Props) {
  return (
    <button
      type="submit"
      disabled={submitting}
      className="btn-sweep group inline-flex min-h-12 items-center justify-center gap-3 bg-gold-light px-8 py-3.5 text-sm font-medium tracking-wide text-ink shadow-[0_10px_30px_-12px_rgba(230,199,126,0.7)] transition-colors hover:bg-night hover:text-gold-light hover:ring-1 hover:ring-gold-light disabled:cursor-not-allowed disabled:opacity-60"
    >
      {submitting ? "Sending…" : label}
      {submitting ? (
        <Loader2 aria-hidden="true" className="size-4 animate-spin" />
      ) : (
        <ArrowRight aria-hidden="true" className="size-4 transition-transform group-hover:translate-x-1" strokeWidth={1.5} />
      )}
    </button>
  )
}
