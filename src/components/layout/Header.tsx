'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'

const NAV_LINKS = [
  { label: 'Apresentação', href: '/' },
  { label: 'Personalização', href: '/personalizacao' },
  { label: 'Revendedores', href: '/revendedores' },
]

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => { document.body.style.overflow = 'unset' }
  }, [isMobileMenuOpen])

  // Fechar o menu mobile ao pressionar Esc
  useEffect(() => {
    if (!isMobileMenuOpen) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMobileMenuOpen(false)
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [isMobileMenuOpen])

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-brand-black/10 bg-brand-beige/90 backdrop-blur-md">
        <div className="container mx-auto max-w-7xl flex h-20 items-center justify-between px-6 lg:px-8">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-1 z-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange rounded-md" onClick={() => setIsMobileMenuOpen(false)}>
            <span className="font-cursive text-xl sm:text-7xl tracking-wide text-brand-orange select-none">
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

          {/* CTA Button & Mobile Toggle */}
          <div className="flex items-center gap-2 z-50">
            <a
              href="https://wa.me/5562999895357?text=Olá%20quero%20me%20tornar%20um%20revendedor%20credenciado%20da%20Lamell%20Store"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center justify-center h-11 rounded-full bg-brand-green px-6 text-sm font-bold text-brand-black hover:bg-brand-green/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-black"
            >
              Seja um revendedor
            </a>

            {/* Mobile Menu Toggle */}
            <button
              type="button"
              className="lg:hidden text-brand-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange rounded-sm p-1"
              aria-label={isMobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-nav"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={28} aria-hidden="true" /> : <Menu size={28} aria-hidden="true" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Overlay */}
      {isMobileMenuOpen && (
        <nav
          id="mobile-nav"
          aria-label="Menu principal mobile"
          className="fixed inset-0 z-40 bg-brand-beige pt-24 px-6 pb-6 overflow-y-auto lg:hidden animate-in fade-in duration-200"
        >
          <div className="flex flex-col gap-6">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  aria-current={isActive ? 'page' : undefined}
                  className={`text-2xl font-heading font-bold border-b border-brand-black/10 pb-4 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange ${
                    isActive ? 'text-brand-orange' : 'text-brand-black'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              )
            })}

            <div className="mt-8 flex flex-col gap-3">
              <a
                href="https://wa.me/5562999895357?text=Olá%20quero%20me%20tornar%20um%20revendedor%20credenciado%20da%20Lamell%20Store"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="inline-flex items-center justify-center w-full h-14 rounded-full bg-brand-green font-bold text-lg text-brand-black hover:bg-brand-green/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-black"
              >
                Seja um revendedor
              </a>
            </div>
          </div>
        </nav>
      )}
    </>
  )
}
