"use client"

import { useApiForm } from "@/hooks/useApiForm"

/** Submits an inquiry form to /api/inquiries. */
export function useInquiryForm() {
  return useApiForm("/api/inquiries")
}
