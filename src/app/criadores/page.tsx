import type { Metadata } from 'next'
import { HeroCriadores } from '@/components/criadores/HeroCriadores'
import { StepByStepCriadores } from '@/components/criadores/StepByStepCriadores'
import { AudienceCriadores } from '@/components/criadores/AudienceCriadores'
import { TestimonialSingle } from '@/components/anunciantes/TestimonialSingle'
import { FAQCriadores } from '@/components/criadores/FAQCriadores'
import { AppCTA } from '@/components/criadores/AppCTA'

export const metadata: Metadata = {
  title: 'Criadores — transforme conteúdo em renda extra',
  description:
    'Faça vídeos de shows que você já iria, ganhe via PIX e desbloqueie ingressos VIP. A IA da Hitlovers valida cada conteúdo e libera o pagamento automaticamente.',
  alternates: { canonical: '/criadores' },
  openGraph: {
    title: 'Criadores | Hitlovers',
    url: '/criadores',
  },
}

export default function CriadoresPage() {
  return (
    <>
      <HeroCriadores />
      <StepByStepCriadores />
      <AudienceCriadores />

      <TestimonialSingle
        quote="A hitlovers virou minha principal fonte de renda extra e a melhor forma de curtir os finais de semana. Faço vídeos com meus amigos nos shows que eu já iria."
        authorName="Marina Costa"
        authorTitle="Criadora de Conteúdo & Fã de Festivais"
        imageSrc="/creator.jpg"
      />

      <FAQCriadores />
      <AppCTA />
    </>
  )
}
