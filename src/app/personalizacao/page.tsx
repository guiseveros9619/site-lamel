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
      <SizeGuideSection />
      <DesignerMockupSection />
      <PersonalizacaoSteps />

      <BrandPromoSection
        tag="Qualidade Premium"
        title="Personalização com a qualidade que sua marca merece."
        description="Cada peça da Lamell Store passa pelo nosso rigoroso controle de qualidade — do tecido à estampa. Algodão premium, costura reforçada e estamparia profissional garantem peças que vestem bem, duram muito e representam a sua marca com o acabamento que ela merece."
        imagePath="/8.jpg"
        imageAlt="Detalhe de camiseta personalizada Lamell Store — acabamento premium"
        isImageLeft={true}
        stickers={{
          greenFlower: true,
        }}
      />

      <FAQPersonalizacao />
      <CallToAction
        title="Produção profissional. Qualidade premium."
        description="Envio para todo Brasil. Crie agora a sua coleção personalizada com a Lamell Store."
        buttonText="Solicitar orçamento"
        color="pink"
      />
    </>
  )
}
