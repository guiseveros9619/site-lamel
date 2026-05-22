import Link from 'next/link'

const TikTokLogo = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 2.26-1.17 4.54-3.03 5.93-1.87 1.4-4.47 1.9-6.72 1.3-2.28-.62-4.21-2.43-4.9-4.71-.69-2.29-.26-4.88 1.18-6.84 1.44-1.95 3.82-3.1 6.18-3.09V13.5c-1.35-.01-2.73.53-3.64 1.5-1.04 1.1-1.41 2.71-1 4.14.41 1.41 1.62 2.6 3.07 3.03 1.46.43 3.1.25 4.39-.51 1.28-.75 2.14-2.12 2.24-3.61l.01-18.03z" />
  </svg>
)

const InstagramLogo = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
  </svg>
)

const YouTubeLogo = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
)

const TelegramLogo = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394a.734.734 0 0 1-.58.28l.21-3.05 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z"/>
  </svg>
)

const LINK_COLUMNS = [
  {
    title: 'Links úteis',
    links: [
      { label: 'E-commerce', href: '#' },
      { label: 'Produtos', href: '#' },
      { label: 'Privacidade', href: '#' },
    ],
  },
  {
    title: 'Serviços',
    links: [
      { label: 'Personalização', href: '/personalizacao' },
      { label: 'Revendedores', href: '/revendedores' },
    ],
  },
]

const SOCIAL_LINKS = [
  { label: 'Instagram', handle: '@lamellstore', href: 'https://instagram.com/lamellstore', Icon: InstagramLogo },
  { label: 'Telegram', handle: '@lamellstore', href: '#', Icon: TelegramLogo },
  { label: 'TikTok', handle: '@lamellstore', href: '#', Icon: TikTokLogo },
  { label: 'YouTube', handle: '@lamellstore', href: '#', Icon: YouTubeLogo },
]

export function Footer() {
  return (
    <footer className="bg-brand-pink pt-20 pb-10 border-t border-brand-black/10 text-brand-black">
      <div className="container mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-16">

          {/* Brand & Slogan */}
          <div className="lg:col-span-1 flex flex-col items-start gap-4">
            <Link href="/" className="flex items-center gap-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange rounded-md">
              <span className="font-cursive text-4xl sm:text-5xl tracking-wide text-brand-orange select-none">
                LaMell
              </span>
            </Link>
            <p className="text-sm font-medium text-brand-black/70">
            Moda que acompanha sua rotina!
            </p>
          </div>

          {LINK_COLUMNS.map((col) => (
            <div key={col.title} className="lg:col-span-1">
              <h4 className="font-heading font-bold mb-6 text-xl">{col.title}</h4>
              <ul className="flex flex-col gap-4">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-brand-black/70 hover:text-brand-orange font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange rounded-sm">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact / Atendimento */}
          <div className="lg:col-span-1">
            <h4 className="font-heading font-bold mb-6 text-xl">Atendimento</h4>
            <div className="flex flex-col gap-4 text-brand-black/70 font-medium">
              <p>Seg. à Sex. 8h às 18h</p>
              <p>(62) 9 9989-5357</p>
              <p>sac.lamell@gmail.com</p>
            </div>
            
            <ul className="flex flex-row gap-3 mt-8">
              {SOCIAL_LINKS.map(({ label, handle, href, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${label} ${handle}`}
                    className="w-10 h-10 rounded-full border border-brand-black/20 flex items-center justify-center text-brand-black/70 hover:text-brand-black hover:bg-brand-orange hover:border-brand-orange transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange"
                  >
                    <Icon />
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between border-t border-brand-black/10">
          <p className="text-brand-black/50 text-sm mt-8 md:mt-0 font-medium">
            © 2026 Lamell Store - CNPJ: 48.963.137/0001-78
          </p>
        </div>
      </div>
    </footer>
  )
}

