import type { Metadata } from 'next'
import { HeroClub } from '@/components/tsh-club/HeroClub'
import { ExplanationClub } from '@/components/tsh-club/ExplanationClub'
import { TshClubSteps } from '@/components/tsh-club/TshClubSteps'
import { CalculatorClub } from '@/components/tsh-club/CalculatorClub'
import { RulesClub } from '@/components/tsh-club/RulesClub'
import { TableClub } from '@/components/tsh-club/TableClub'
import { FAQClub } from '@/components/tsh-club/FAQClub'
import { CallToAction } from '@/components/layout/CallToAction'
import { BrandPromoSection } from '@/components/layout/BrandPromoSection'

export const metadata: Metadata = {
  title: 'TSH Club — Benefícios',
  description:
    'O programa de benefícios exclusivo para revendedores Tshirteria. Quanto mais você compra, mais você ganha descontos e vantagens.',
  alternates: { canonical: '/tsh-club' },
  openGraph: {
    title: 'TSH Club | Tshirteria',
    url: '/tsh-club',
  },
}

export default function TSHClubPage() {
  return (
    <>
      <HeroClub />
      <ExplanationClub />
      <TshClubSteps />
      
      <CalculatorClub />

      <BrandPromoSection
        tag="Clube de Benefícios"
        title="Compre, acumule e suba de nível."
        description="Faça parte do ecossistema exclusivo para lojistas credenciados. Cada pedido acumula pontos que destravam descontos automáticos em suas próximas faturas, além de dar acesso prioritário a lançamentos limitados."
        buttonText="Fazer parte do club"
        buttonLink="https://wa.me/5562999895357?text=Olá,%20gostaria%20de%20fazer%20parte%20do%20TSH%20Club."
        imagePath="/3.jpg"
        imageAlt="Garota de fone e óculos escuros checando smartphone no café com camiseta streetwear azul clara"
        isImageLeft={true}
        stickers={{
          confidenceClub: true,
          noBadVibes: true,
          sparkle: 'purple',
          globe: true
        }}
      />
      <TableClub />
      <RulesClub />
      <FAQClub />
      <CallToAction 
        title="Faça parte do TSH Club."
        description="Comece a comprar agora, acumule pontos e garanta descontos e vantagens exclusivas para alavancar os lucros da sua loja."
        buttonText="Quero participar"
        color="green"
      />
    </>
  )
}
