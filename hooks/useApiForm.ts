"use client"

import { useState, type FormEvent } from "react"
import type { FormStatus, InquiryResponse } from "@/types"

type FieldErrors = Record<string, string | undefined>

/** Submits a form's fields as JSON to an API route and tracks status and field errors. */
export function useApiForm(endpoint: string, successFallback = "Thank you. Your message has been received.") {
  const [status, setStatus] = useState<FormStatus>("idle")
  const [feedback, setFeedback] = useState("")
  const [errors, setErrors] = useState<FieldErrors>({})

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    setStatus("submitting")
    setErrors({})

    try {
      const payload = Object.fromEntries(new FormData(form).entries())
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })
      const data = (await response.json()) as InquiryResponse

      if (!response.ok) {
        const fieldErrors: FieldErrors = {}
        Object.entries(data.fieldErrors ?? {}).forEach(([key, value]) => {
          fieldErrors[key] = value?.[0]
        })
        setErrors(fieldErrors)
        setFeedback(data.error ?? "Something went wrong. Please try again.")
        setStatus("error")
        return
      }

      form.reset()
      setFeedback(data.message ?? successFallback)
      setStatus("success")
    } catch {
      setFeedback("We could not send this. Please check your connection and try again.")
      setStatus("error")
    }
  }

  return { status, feedback, errors, handleSubmit }
}
