import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

type Props = {
  children: ReactNode
  className?: string
  size?: "default" | "narrow" | "wide"
}

export default function Container({ children, className, size = "default" }: Props) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-5 sm:px-8 lg:px-12",
        size === "default" && "max-w-7xl",
        size === "narrow" && "max-w-3xl",
        size === "wide" && "max-w-[96rem]",
        className,
      )}
    >
      {children}
    </div>
  )
}
