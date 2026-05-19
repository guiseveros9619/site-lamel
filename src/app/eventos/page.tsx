import type { Metadata } from 'next'
import { HeroEventos } from '@/components/anunciantes/eventos/HeroEventos'
import { ComparativoAdsEventos } from '@/components/anunciantes/eventos/ComparativoAdsEventos'
import { StepByStepEventos } from '@/components/anunciantes/eventos/StepByStepEventos'
import { MeasurementEventos } from '@/components/anunciantes/eventos/MeasurementEventos'
import { PricingSection } from '@/components/anunciantes/PricingSection'
import { TestimonialSingle } from '@/components/anunciantes/TestimonialSingle'
import { FAQEventos } from '@/components/anunciantes/eventos/FAQEventos'
import { PerformanceCTA } from '@/components/anunciantes/PerformanceCTA'

export const metadata: Metadata = {
  title: 'Eventos & Produtores — lote esgotado, hype real',
  description:
    'Troque cortesias por vídeos autênticos de fãs reais. Reduza o custo de aquisição e esgote os lotes do seu evento com campanhas auditadas por IA.',
  alternates: { canonical: '/eventos' },
  openGraph: {
    title: 'Eventos & Produtores | Hitlovers',
    url: '/eventos',
  },
}

export default function EventosPage() {
  return (
    <>
      <HeroEventos />
      <ComparativoAdsEventos />
      <StepByStepEventos />
      <MeasurementEventos />
      <PricingSection />

      <TestimonialSingle
        quote="Trocar cortesias por vídeos autênticos de quem já frequenta as nossas festas gerou um hype absurdo. Reduzimos nosso custo de aquisição pela metade e esgotamos os lotes em tempo recorde."
        authorName="Julia Novaes"
        authorTitle="Produtora Executiva, Vibe Festivais"
        imageSrc="/events.jpg"
      />

      <FAQEventos />
      <PerformanceCTA 
        title="O hype que a seu evento merece."
        description="Pare de gastar com anúncios que são ignorados. Use o poder da influência para criar um desejo incontrolável, vender mais ingressos e lotar a sua próxima edição."
      />
    </>
  )
}
