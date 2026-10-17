"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import Container from "@/components/ui/Container"
import Wordmark from "@/components/layout/Wordmark"
import MobileMenu from "@/components/layout/MobileMenu"
import JourneyPanel from "@/components/features/journey/JourneyPanel"
import { CONTACT_NAV, PRIMARY_NAV } from "@/data/navigation"
import { cn } from "@/lib/utils"

export default function Header() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`)

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 text-ivory transition-all duration-500 print:hidden",
        scrolled
          ? "border-b border-gold-light/15 bg-night/85 shadow-[0_10px_40px_-20px_rgba(0,0,0,0.6)] backdrop-blur-md"
          : "bg-gradient-to-b from-ink/60 to-transparent",
      )}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-gold-light focus:px-4 focus:py-2 focus:text-ink"
      >
        Skip to content
      </a>
      <Container
        size="wide"
        className={cn("flex items-center justify-between gap-6 transition-all duration-500", scrolled ? "h-16" : "h-20 lg:h-24")}
      >
        <Wordmark tone="light" />
        <nav aria-label="Primary" className="hidden xl:block">
          <ul className="flex items-center gap-4">
            {PRIMARY_NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={cn(
                    "relative py-2 font-display text-[0.7rem] tracking-[0.14em] transition-colors",
                    "after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-gold-light after:transition-transform after:duration-500",
                    "hover:text-gold-light hover:after:scale-x-100",
                    isActive(item.href) ? "text-gold-light after:scale-x-100" : "text-ivory/85",
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-3">
          <div className="hidden sm:block xl:hidden 2xl:block">
            <JourneyPanel />
          </div>
          <Link
            href={CONTACT_NAV.href}
            aria-current={isActive(CONTACT_NAV.href) ? "page" : undefined}
            className="btn-sweep hidden min-h-10 items-center bg-gold-light px-5 font-display text-[0.7rem] tracking-[0.14em] text-ink transition-colors hover:bg-ivory xl:inline-flex"
          >
            {CONTACT_NAV.label}
          </Link>
          <MobileMenu pathname={pathname} />
        </div>
      </Container>
    </header>
  )
}
