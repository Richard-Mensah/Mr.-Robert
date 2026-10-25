import Link from "next/link"
import Container from "@/components/ui/Container"
import Wordmark from "@/components/layout/Wordmark"
import SummitMoment from "@/components/layout/SummitMoment"
import { CONTACT_NAV, PRIMARY_NAV, SOCIAL_LINKS } from "@/data/navigation"
import { ROLE_LINE, SITE_NAME } from "@/constants"

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="grid-chancery aurora relative overflow-hidden bg-ink text-ivory print:hidden">
      <Container size="wide" className="relative pb-10 pt-20 lg:pt-28">
        <SummitMoment />
        <div className="gold-line mt-20" />

        <div className="mt-16 grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Wordmark tone="light" />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-ivory/60">{ROLE_LINE}</p>
          </div>

          <nav aria-label="Footer" className="lg:col-span-4">
            <p className="font-display text-xs tracking-eyebrow text-gold-light">Explore</p>
            <ul className="mt-6 grid grid-cols-2 gap-x-6 gap-y-3 text-sm">
              {[...PRIMARY_NAV, CONTACT_NAV, { label: "Briefing Dossier", href: "/dossier" }].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-ivory/75 transition-colors hover:text-gold-light">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-3">
            <p className="font-display text-xs tracking-eyebrow text-gold-light">Follow</p>
            <ul className="mt-6 space-y-3 text-sm">
              {SOCIAL_LINKS.map((link) => (
                <li key={link.label}>
                  {link.href ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-ivory/75 transition-colors hover:text-gold-light"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <span className="text-ivory/40">
                      {link.label} <span className="text-xs">(coming soon)</span>
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-20 flex flex-col gap-3 border-t border-ivory/10 pt-8 text-xs text-ivory/45 sm:flex-row sm:justify-between">
          <p>
            &copy; {year} {SITE_NAME}. All rights reserved.
          </p>
          <p>Youth &middot; Leadership &middot; Public Service</p>
        </div>
      </Container>
    </footer>
  )
}
