import type { Metadata } from 'next'
import { HeroPersonalizacao } from '@/components/personalizacao/HeroPersonalizacao'
import { PillarsPersonalizacao } from '@/components/personalizacao/PillarsPersonalizacao'
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
    title: 'Personalização & Private Label | Tshirteria',
    url: '/personalizacao',
  },
}

export default function PersonalizacaoPage() {
  return (
    <>
      <HeroPersonalizacao />
      <PillarsPersonalizacao />
      <PersonalizacaoSteps />
      
      <BrandPromoSection
        tag="Private Label & Customização"
        title="Sua marca, com a nossa qualidade."
        description="Oferecemos um serviço completo de Private Label. Nós cuidamos de toda a modelagem, costura e estamparia premium para você focar exclusivamente em gerir e crescer a sua marca própria."
        imagePath="/2.jpg"
        imageAlt="Modelo vestindo camiseta personalizada cherry streetwear"
        isImageLeft={true}
        stickers={{
          goodDays: true,
          greenFlower: true,
          sparkle: 'green',
          globe: true
        }}
      />

      <FAQPersonalizacao />
      <CallToAction 
        title="Vamos criar sua própria marca?"
        description="Dê vida às suas ideias com a qualidade Premium da Tshirteria. Produzimos e estampamos com a sua identidade para você focar no que importa: vender."
        buttonText="Fazer orçamento"
        color="pink"
      />
    </>
  )
}
