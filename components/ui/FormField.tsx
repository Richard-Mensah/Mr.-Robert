import { cn } from "@/lib/utils"

type Props = {
  name: string
  label: string
  type?: "text" | "email" | "date" | "textarea"
  required?: boolean
  autoComplete?: string
  placeholder?: string
  defaultValue?: string
  error?: string
  className?: string
}

export default function FormField({
  name,
  label,
  type = "text",
  required = false,
  autoComplete,
  placeholder,
  defaultValue,
  error,
  className,
}: Props) {
  const id = `field-${name}`
  const errorId = `${id}-error`
  const inputClass = cn(
    "mt-2 w-full border-0 border-b bg-transparent px-0 py-3 text-base text-ink placeholder:text-muted-light",
    "transition-colors focus:border-forest focus:outline-none focus:ring-0 focus-visible:outline-none",
    error ? "border-red-700" : "border-ink/25",
  )

  return (
    <div className={className}>
      <label htmlFor={id} className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
        {label}
        {required ? <span className="text-gold-deep"> *</span> : <span className="sr-only"> (optional)</span>}
      </label>
      {type === "textarea" ? (
        <textarea
          id={id}
          name={name}
          required={required}
          rows={5}
          placeholder={placeholder}
          defaultValue={defaultValue}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? errorId : undefined}
          className={cn(inputClass, "resize-y")}
        />
      ) : (
        <input
          id={id}
          name={name}
          type={type}
          required={required}
          autoComplete={autoComplete}
          placeholder={placeholder}
          defaultValue={defaultValue}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? errorId : undefined}
          className={inputClass}
        />
      )}
      {error && (
        <p id={errorId} className="mt-2 text-sm text-red-800">
          {error}
        </p>
      )}
    </div>
  )
}
