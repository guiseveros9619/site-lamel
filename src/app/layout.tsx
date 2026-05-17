import '@/app/globals.css'
import type { Metadata, Viewport } from 'next'
import { Urbanist } from 'next/font/google'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { SmoothScrollProvider } from '@/components/providers/SmoothScrollProvider'

const urbanist = Urbanist({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-urbanist',
  display: 'swap',
})

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://hitlovers.app'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Onde a música vira hit e o seu evento lota | Hitlovers',
    template: '%s | Hitlovers',
  },
  description:
    'Seus anúncios rendem mais no Spotify. Performance auditada por IA — pague apenas por views reais.',
  applicationName: 'Hitlovers',
  authors: [{ name: 'Hitlovers' }],
  keywords: ['música', 'anúncios', 'spotify', 'artistas', 'eventos', 'criadores', 'campanhas'],
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    siteName: 'Hitlovers',
    url: siteUrl,
    title: 'Hitlovers | Onde a música vira hit e o seu evento lota',
    description:
      'Seus anúncios rendem mais no Spotify. Performance auditada por IA — pague apenas por views reais.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hitlovers',
    description: 'Seus anúncios rendem mais no Spotify.',
  },
  robots: { index: true, follow: true },
}

export const viewport: Viewport = {
  themeColor: '#121212',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={`${urbanist.className} ${urbanist.variable} min-h-screen bg-[#121212] text-white antialiased selection:bg-[#d8b4fe] selection:text-black flex flex-col`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[10000] focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:text-black focus:shadow-lg"
        >
          Pular para o conteúdo
        </a>
        <div className="page-loader" aria-hidden="true" />
        <SmoothScrollProvider>
          <Header />
          <main id="main-content" className="flex-grow">
            {children}
          </main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  )
}
