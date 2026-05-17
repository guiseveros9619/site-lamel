import type { Metadata } from 'next'
import { DemoHero } from '@/components/demonstracao/DemoHero'

export const metadata: Metadata = {
  title: 'Agende sua demonstração',
  description:
    'Agende uma conversa com a equipe Hitlovers e descubra como criar um hype real e esgotar bilheterias sem depender apenas de tráfego pago.',
  alternates: { canonical: '/demonstracao' },
  openGraph: {
    title: 'Agende sua demonstração | Hitlovers',
    description:
      'Performance auditada por IA — pague apenas por views reais. Agende uma conversa com nosso time.',
    url: '/demonstracao',
  },
  robots: { index: true, follow: true },
}

export default function DemonstracaoPage() {
  return <DemoHero />
}
