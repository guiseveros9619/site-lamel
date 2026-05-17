import Link from 'next/link'
import { APP_STORE_URL, PLAY_STORE_URL } from '@/lib/appDownload'

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

const AppleIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6 text-white fill-current" aria-hidden="true">
    <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701" />
  </svg>
)

const GooglePlayIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6 text-white fill-current" aria-hidden="true">
    <path d="M3 21.68V2.32c0-.52.56-.84 1.01-.58l16.78 9.68c.45.26.45.9 0 1.16L4.01 22.26c-.45.26-1.01-.06-1.01-.58z"/>
  </svg>
)

const LINK_COLUMNS = [
  {
    title: 'Anunciantes',
    links: [
      { label: 'Artistas & Escritórios', href: '/artistas' },
      { label: 'Eventos & Produtores', href: '/eventos' },
    ],
  },
  {
    title: 'Comunidade',
    links: [
      { label: 'Criadores', href: '/criadores' },
      { label: 'Desenvolvedores', href: '/desenvolvedores' },
    ],
  },
  {
    title: 'hitlovers',
    links: [
      { label: 'Campanhas', href: '/anunciantes' },
      { label: 'Agende uma demo', href: '/demonstracao' },
    ],
  },
]

const SOCIAL_LINKS = [
  { label: 'TikTok', handle: '@hitlovers.app', href: 'https://tiktok.com/@hitlovers.app', Icon: TikTokLogo },
  { label: 'Instagram', handle: '@hitlovers.app', href: 'https://instagram.com/hitlovers.app', Icon: InstagramLogo },
  { label: 'YouTube', handle: '@hitlovers.app', href: 'https://youtube.com/@hitlovers.app', Icon: YouTubeLogo },
]

const LEGAL_LINKS = [
  { label: 'Legal', href: '/legal' },
  { label: 'Centro de Privacidade', href: '/centro-de-privacidade' },
  { label: 'Política de privacidade', href: '/politica-de-privacidade' },
  { label: 'Cookies', href: '/cookies' },
  { label: 'Acessibilidade', href: '/acessibilidade' },
]

export function Footer() {
  return (
    <footer className="bg-black pt-20 pb-10 border-t border-white/10">
      <div className="container mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 lg:gap-8 mb-16">

          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-1">
              <span className="text-2xl font-bold tracking-tighter text-white">
                hit<span className="text-brand-purple">lovers</span>
              </span>
            </Link>
          </div>

          {LINK_COLUMNS.map((col) => (
            <div key={col.title} className="lg:col-span-1">
              <h4 className="font-bold text-white mb-6">{col.title}</h4>
              <ul className="flex flex-col gap-4">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-zinc-300 hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Socials */}
          <div className="lg:col-span-1">
            <h4 className="font-bold text-white mb-6">Siga a gente</h4>
            <ul className="flex flex-row gap-3">
              {SOCIAL_LINKS.map(({ label, handle, href, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${label} ${handle}`}
                    className="w-10 h-10 rounded-full border border-zinc-600 flex items-center justify-center text-zinc-300 hover:text-white hover:bg-white/5 transition-colors"
                  >
                    <Icon />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* App Download */}
          <div className="lg:col-span-1 flex flex-col gap-4">
            <h4 className="font-bold text-white mb-2">Baixe o app</h4>
            <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer" aria-label="Baixar na App Store" className="flex items-center gap-3 border border-zinc-600 rounded-lg py-1.5 px-3 bg-black hover:bg-zinc-900 transition-colors min-w-[150px] w-fit">
              <AppleIcon />
              <div className="flex flex-col text-left">
                <span className="text-[10px] leading-tight text-white/90">Baixar na</span>
                <span className="text-sm font-bold leading-tight text-white">App Store</span>
              </div>
            </a>
            <a href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer" aria-label="Disponível no Google Play" className="flex items-center gap-3 border border-zinc-600 rounded-lg py-1.5 px-3 bg-black hover:bg-zinc-900 transition-colors min-w-[150px] w-fit">
              <GooglePlayIcon />
              <div className="flex flex-col text-left">
                <span className="text-[10px] leading-tight text-white/90 uppercase tracking-tight">Disponível no</span>
                <span className="text-sm font-bold leading-tight text-white">Google Play</span>
              </div>
            </a>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between border-t border-white/5">
          <ul className="flex flex-wrap gap-x-6 gap-y-2 mb-4 md:mb-0 mt-8 md:mt-8">
            {LEGAL_LINKS.map((item) => (
              <li key={item.label}>
                <Link href={item.href} className="text-zinc-400 hover:text-white text-xs transition-colors">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <p className="text-zinc-400 text-xs shrink-0 mt-8 md:mt-8">
            © 2026 Hitlovers - Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
