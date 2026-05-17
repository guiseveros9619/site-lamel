import type { Metadata } from 'next'
import { HeroArtistas } from '@/components/anunciantes/artistas/HeroArtistas'
import { ComparativoAds } from '@/components/anunciantes/artistas/ComparativoAds'
import { StepByStepArtistas } from '@/components/anunciantes/artistas/StepByStepArtistas'
import { MeasurementArtistas } from '@/components/anunciantes/artistas/MeasurementArtistas'
import { PricingSection } from '@/components/anunciantes/PricingSection'
import { TestimonialSingle } from '@/components/anunciantes/TestimonialSingle'
import { FAQArtistas } from '@/components/anunciantes/artistas/FAQArtistas'
import { PerformanceCTA } from '@/components/anunciantes/PerformanceCTA'

export const metadata: Metadata = {
  title: 'Artistas & Escritórios — amplifique seus lançamentos',
  description:
    'Transforme fãs em promotores. Campanhas auditadas por IA que pagam apenas por visualizações reais — perfeito para lançamentos, EPs e turnês.',
  alternates: { canonical: '/artistas' },
  openGraph: {
    title: 'Artistas & Escritórios | Hitlovers',
    url: '/artistas',
  },
}

export default function ArtistasPage() {
  return (
    <>
      <HeroArtistas />
      <ComparativoAds />
      <StepByStepArtistas />
      <MeasurementArtistas />
      <PricingSection />

      <TestimonialSingle
        quote="Lançar música hoje é sobre comunidade. A hitlovers nos permitiu transformar nossos fãs em nossos maiores promotores. Vimos os plays saltarem na primeira semana pagando apenas pelo engajamento real."
        authorName="Marcos Almeida"
        authorTitle="Empresário Artístico, MA Music"
        imageSrc="/image4.webp"
      />

      <FAQArtistas />
      <PerformanceCTA />
    </>
  )
}
