import type { Metadata } from 'next'
import { HeroPersonalizacao } from '@/components/personalizacao/HeroPersonalizacao'
import { PriceCatalog } from '@/components/personalizacao/PriceCatalog'
import { SizeGuideSection } from '@/components/personalizacao/SizeGuideSection'
import { DesignerMockupSection } from '@/components/personalizacao/DesignerMockupSection'
import { PersonalizacaoSteps } from '@/components/personalizacao/PersonalizacaoSteps'
import { FAQPersonalizacao } from '@/components/personalizacao/FAQPersonalizacao'
import { CallToAction } from '@/components/layout/CallToAction'
import { BrandPromoSection } from '@/components/layout/BrandPromoSection'

export const metadata: Metadata = {
  title: 'Personalização & Private Label',
  description:
    'Sua marca, suas regras. Personalize qualquer produto da nossa linha de produção com a sua identidade, logo ou estampas exclusivas.',
  alternates: { canonical: '/personalizacao' },
  openGraph: {
    title: 'Personalização & Private Label | Lamell Store',
    url: '/personalizacao',
  },
}

export default function PersonalizacaoPage() {
  return (
    <>
      <HeroPersonalizacao />
      <PriceCatalog />
      <DesignerMockupSection />
      <SizeGuideSection />
      <PersonalizacaoSteps />

      <BrandPromoSection
        tag="Qualidade Premium"
        title="Personalização com a qualidade que sua marca merece."
        description="Na Lamell Store, cada detalhe é pensado para entregar peças à altura da sua marca. Utilizamos malhas Menegotti, 100% algodão premium, com estampa em DTF de alta definição, tecnologia que garante cores vivas e fiéis, sem desbotar, craquelar ou rachar com o tempo. O resultado são peças com caimento impecável, conforto no uso diário e durabilidade que acompanha sua marca em cada nova coleção."
        videoPath="/videos/qualidade.mp4"
        posterPath="/videos/qualidade-poster.jpg"
        imagePath="/8.jpg"
        imageAlt="Vídeo de peça personalizada Lamell Store, acabamento premium"
        isImageLeft={true}
        stickers={{
          greenFlower: true,
        }}
      />

      <FAQPersonalizacao />
      <CallToAction
        eyebrow="Vamos começar"
        title="Sua coleção premium começa agora."
        description="Fale com a nossa equipe e receba um orçamento sob medida para a sua marca, produção premium, do algodão à estampa, com envio para todo o Brasil."
        buttonText="Solicitar orçamento"
        note="Resposta rápida · Sem compromisso"
        color="pink"
      />
    </>
  )
}
