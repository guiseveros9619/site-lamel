import type { Metadata } from 'next'
import { InteractiveMap } from '@/components/revendedores/InteractiveMap'
import { CallToAction } from '@/components/layout/CallToAction'
import { BrandPromoSection } from '@/components/layout/BrandPromoSection'

export const metadata: Metadata = {
  title: 'Encontre um Revendedor',
  description:
    'Compre produtos oficiais Tshirteria com revendedores autorizados em todo o Brasil. Encontre a loja mais próxima de você no nosso mapa interativo.',
  alternates: { canonical: '/revendedores' },
  openGraph: {
    title: 'Encontre um Revendedor | Tshirteria',
    url: '/revendedores',
  },
}

export default function RevendedoresPage() {
  return (
    <>
      <InteractiveMap />
      
      <BrandPromoSection
        tag="Revenda Autorizada"
        title="Margens incríveis e alto giro."
        description="Adquira nossas coleções a pronta entrega com descontos de atacado imbatíveis. Nosso design streetwear autêntico garante que as peças tenham alto apelo comercial e saiam da prateleira no mesmo dia."
        buttonText="Seja um revendedor"
        buttonLink="https://wa.me/5562999895357?text=Olá,%20gostaria%20de%20me%20tornar%20um%20revendedor%20credenciado."
        imagePath="/4.jpg"
        imageAlt="Casal usando camisetas streetwear premium na cor verde militar"
        isImageLeft={false}
        stickers={{
          smiley: true,
          confidenceClub: true,
          greenFlower: true,
          sparkle: 'orange',
          globe: true
        }}
      />

      <CallToAction 
        title="Seja um Revendedor credenciado ."
        description="Não encontrou um revendedor na sua região? Essa é a sua oportunidade de levar a exclusividade da Tshirteria para a sua cidade com alta margem de lucro."
        buttonText="Seja um Revendedor"
        color="pink"
      />
    </>
  )
}
