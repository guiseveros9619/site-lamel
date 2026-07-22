import '@/app/globals.css'
import type { Metadata, Viewport } from 'next'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { SmoothScrollProvider } from '@/components/providers/SmoothScrollProvider'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://tshirteria.com'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Tshirteria | Vista sua essência, sem filtro.',
    template: '%s | Tshirteria',
  },
  description:
    'Seja um revendedor credenciado Tshirteria. Produtos premium, até 70% de desconto e suporte completo para o seu negócio.',
  applicationName: 'Tshirteria',
  authors: [{ name: 'Tshirteria' }],
  keywords: ['camisetas', 'atacado', 'revenda', 'personalização', 'private label', 'tsh club'],
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    siteName: 'Tshirteria',
    url: siteUrl,
    title: 'Tshirteria | Vista sua essência, sem filtro.',
    description:
      'Seja um revendedor credenciado Tshirteria. Produtos premium, até 70% de desconto e suporte completo.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tshirteria',
    description: 'Seja um revendedor credenciado Tshirteria.',
  },
  icons: {
    icon: '/favicon.png',
  },
  robots: { index: true, follow: true },
}

export const viewport: Viewport = {
  themeColor: '#F2EDE2', // brand-beige
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
      {/* We will load fonts via external stylesheet for now to avoid the build error */}
      <head>
        <link href="https://api.fontshare.com/v2/css?f[]=satoshi@500,700,900&display=swap" rel="stylesheet" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap" rel="stylesheet" />
        <style dangerouslySetInnerHTML={{ __html: `
          :root {
            --font-satoshi: 'Satoshi', system-ui, sans-serif;
            /* Heading principal da Lamell, Playfair Display (serifada display,
               Google Fonts). Look editorial/elegante aplicado em TODOS os
               headers/titulos via .font-heading e h1 a h6. */
            --font-made-tommy: 'Playfair Display', Georgia, 'Times New Roman', serif;
            /* Fonte secundária do anexo: a mesma família em itálico, usada como
               acento (.font-heading-italic). */
          }
          /* Cor: magenta da marca (#d50084) em todos os headings. */
          .font-heading {
            font-weight: 800;
            letter-spacing: -0.01em;
            line-height: 1.1;
            color: var(--color-brand-orange) !important;
          }
          /* Acento itálico (fonte secundária do anexo) */
          .font-heading-italic {
            font-family: var(--font-heading);
            font-style: italic;
            line-height: 1.1;
            color: var(--color-brand-orange) !important;
          }
        ` }} />
      </head>
      <body
        suppressHydrationWarning
        className="min-h-screen bg-brand-beige text-brand-black antialiased selection:bg-brand-orange selection:text-white flex flex-col font-sans"
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[10000] focus:rounded-md focus:bg-brand-black focus:px-4 focus:py-2 focus:text-white focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-brand-orange"
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
