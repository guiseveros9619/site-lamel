'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { useAppDownloadLink } from '@/lib/appDownload'

const NAV_LINKS = [
  { label: 'Criadores', href: '/criadores' },
  { label: 'Artistas', href: '/artistas' },
  { label: 'Eventos', href: '/eventos' },
  { label: 'Campanhas', href: '/anunciantes' },
]

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const appDownloadUrl = useAppDownloadLink()
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
      <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#121212]/80 backdrop-blur-md">
        <div className="container mx-auto max-w-7xl flex h-20 items-center justify-between px-6 lg:px-8">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-1 z-50" onClick={() => setIsMobileMenuOpen(false)}>
            <span className="text-3xl font-bold tracking-tighter text-white">
              hit<span className="text-brand-purple">lovers</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-1 md:flex">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  aria-current={isActive ? 'page' : undefined}
                  className={`inline-flex items-center justify-center h-10 rounded-full px-4 text-sm font-semibold transition-colors ${
                    isActive
                      ? 'bg-white/10 text-white'
                      : 'text-zinc-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </Link>
              )
            })}
          </nav>

          {/* CTA Button & Mobile Toggle */}
          <div className="flex items-center gap-2 z-50">
            <Link
              href="/entrar"
              className="hidden md:inline-flex items-center justify-center h-10 rounded-full px-5 text-sm font-semibold text-zinc-300 transition-colors hover:text-white hover:bg-white/5"
            >
              Entrar no Portal
            </Link>
            <a
              href={appDownloadUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center justify-center h-10 rounded-full bg-white px-6 text-sm font-semibold text-black hover:bg-zinc-200 transition-colors"
            >
              Baixe o App
            </a>

            {/* Mobile Menu Toggle */}
            <button
              type="button"
              className="md:hidden text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple rounded-sm p-1"
              aria-label={isMobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-nav"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Overlay */}
      {isMobileMenuOpen && (
        <nav
          id="mobile-nav"
          aria-label="Menu principal mobile"
          className="fixed inset-0 z-40 bg-[#121212] pt-24 px-6 pb-6 overflow-y-auto md:hidden animate-in fade-in duration-200"
        >
          <div className="flex flex-col gap-6">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  aria-current={isActive ? 'page' : undefined}
                  className={`text-xl font-bold border-b border-white/10 pb-4 transition-colors ${
                    isActive ? 'text-brand-purple' : 'text-white'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              )
            })}

            <div className="mt-8 flex flex-col gap-3">
              <a
                href={appDownloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="inline-flex items-center justify-center w-full h-14 rounded-full bg-white font-bold text-lg text-black hover:bg-zinc-200 transition-colors"
              >
                Baixe o App
              </a>
              <Link
                href="/entrar"
                onClick={() => setIsMobileMenuOpen(false)}
                className="inline-flex items-center justify-center w-full h-14 rounded-full border border-white/20 font-bold text-lg text-white hover:bg-white/5 transition-colors"
              >
                Entrar no Portal
              </Link>
            </div>
          </div>
        </nav>
      )}
    </>
  )
}
