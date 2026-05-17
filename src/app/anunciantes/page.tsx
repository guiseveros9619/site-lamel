import type { Metadata } from 'next'
import { HeroAnunciantes } from '@/components/anunciantes/HeroAnunciantes'
import { StepByStepGuide } from '@/components/anunciantes/StepByStepGuide'
import { TargetingSection } from '@/components/anunciantes/TargetingSection'
import { MeasurementSection } from '@/components/anunciantes/MeasurementSection'
import { PricingSection } from '@/components/anunciantes/PricingSection'
import { FAQAnunciantes } from '@/components/anunciantes/FAQAnunciantes'
import { PerformanceCTA } from '@/components/anunciantes/PerformanceCTA'

export const metadata: Metadata = {
  title: 'Anunciantes — campanhas com performance auditada',
  description:
    'Crie campanhas para artistas e eventos no Spotify. Targeting preciso, mensuração em tempo real e pagamento apenas por resultados validados por IA.',
  alternates: { canonical: '/anunciantes' },
  openGraph: {
    title: 'Anunciantes | Hitlovers',
    url: '/anunciantes',
  },
}

export default function AnunciantesPage() {
  return (
    <>
      <HeroAnunciantes />
      <StepByStepGuide />
      <TargetingSection />
      <MeasurementSection />
      <PricingSection />
      <FAQAnunciantes />
      <PerformanceCTA />
    </>
  )
}
