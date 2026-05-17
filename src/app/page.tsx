import type { Metadata } from 'next'
import { Hero } from '@/components/animations/Hero'
import { NumbersSection } from '@/components/layout/NumbersSection'
import { SpotifyCarousel } from '@/components/animations/SpotifyCarousel'
import { StorySection } from '@/components/layout/StorySection'
import { CampaignsSection } from '@/components/layout/CampaignsSection'
import { NewsTrendsSection } from '@/components/layout/NewsTrendsSection'

export const metadata: Metadata = {
  title: {
    absolute: 'Onde a música vira hit e o seu evento lota | Hitlovers',
  },
  description:
    'Conectamos artistas, eventos e criadores de conteúdo no Spotify. Performance auditada por IA — pague apenas por views reais.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Onde a música vira hit e o seu evento lota | Hitlovers',
    url: '/',
  },
}

export default function Home() {
  return (
    <>
      <Hero />
      <NumbersSection />
      <SpotifyCarousel />
      <StorySection />
      <CampaignsSection />
      <NewsTrendsSection />
    </>
  )
}
