'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NAV_LINKS = [
  { label: 'Personalização', href: '/personalizacao' },
]

export function Header() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b border-brand-black/10 bg-brand-beige/90 backdrop-blur-md">
      <div className="container mx-auto max-w-7xl flex h-24 lg:h-20 items-center justify-center lg:justify-between px-6 lg:px-8">
        {/* Logo */}
        <Link href="/personalizacao" className="flex items-center gap-1 z-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange rounded-md">
          <span className="font-cursive text-6xl sm:text-7xl leading-none tracking-wide text-brand-orange select-none">
            LaMell
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href
            return (
              <Link
                key={link.label}
                href={link.href}
                aria-current={isActive ? 'page' : undefined}
                className={`inline-flex items-center justify-center h-10 rounded-full px-5 text-sm font-bold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange ${
                  isActive
                    ? 'bg-brand-black/5 text-brand-black'
                    : 'text-brand-black hover:bg-brand-black/5'
                }`}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>

      </div>
    </header>
  )
}
