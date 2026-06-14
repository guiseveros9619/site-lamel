import type { Metadata } from 'next'
import { Hero } from '@/components/animations/Hero'
import { VideoInstitucional } from '@/components/layout/VideoInstitucional'
import { LookbookCarousel } from '@/components/layout/LookbookCarousel'
import { NumbersSection } from '@/components/layout/NumbersSection'
import { CampaignsSection } from '@/components/layout/CampaignsSection'
import { StorySection } from '@/components/layout/StorySection'
import { PromoSection } from '@/components/layout/PromoSection'
import { FeedbackSection } from '@/components/layout/FeedbackSection'

export const metadata: Metadata = {
  title: {
    absolute: 'Tshirteria | Personalize, crie e revenda!',
  },
  description:
    'Seja um revendedor credenciado Tshirteria. Produtos premium, até 70% de desconto e suporte completo para o seu negócio.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Tshirteria | Personalize, crie e revenda!',
    url: '/',
  },
}

export default function Home() {
  return (
    <>
      <Hero />
      <VideoInstitucional />
      <LookbookCarousel />
      <StorySection />
      <PromoSection />
      <CampaignsSection />
      <FeedbackSection />
      <NumbersSection />
    </>
  )
}
