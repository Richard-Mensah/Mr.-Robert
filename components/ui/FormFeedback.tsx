import { CheckCircle2, AlertCircle } from "lucide-react"
import { cn } from "@/lib/utils"
import type { FormStatus } from "@/types"

type Props = {
  status: FormStatus
  message: string
}

export default function FormFeedback({ status, message }: Props) {
  const visible = status === "success" || status === "error"

  return (
    <div role="status" aria-live="polite" className={cn(!visible && "sr-only")}>
      {visible && (
        <p
          className={cn(
            "flex items-start gap-3 border-l-2 px-4 py-3 text-sm leading-relaxed",
            status === "success" ? "border-forest bg-forest/5 text-forest-deep" : "border-red-800 bg-red-50 text-red-900",
          )}
        >
          {status === "success" ? (
            <CheckCircle2 aria-hidden="true" className="mt-0.5 size-4 shrink-0" />
          ) : (
            <AlertCircle aria-hidden="true" className="mt-0.5 size-4 shrink-0" />
          )}
          {message}
        </p>
      )}
    </div>
  )
}
