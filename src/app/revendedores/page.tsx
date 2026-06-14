import type { Metadata } from 'next'
import { InteractiveMap } from '@/components/revendedores/InteractiveMap'
import { CallToAction } from '@/components/layout/CallToAction'
import { BrandPromoSection } from '@/components/layout/BrandPromoSection'

export const metadata: Metadata = {
  title: 'Encontre um Revendedor',
  description:
    'Compre produtos oficiais Lamell Store com revendedores autorizados em todo o Brasil. Encontre a loja mais próxima de você no nosso mapa interativo.',
  alternates: { canonical: '/revendedores' },
  openGraph: {
    title: 'Encontre um Revendedor | Lamell Store',
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
        buttonLink="https://api.whatsapp.com/send/?phone=5562999895357&text=Ol%C3%A1%2C+gostaria+de+me+tornar+um+revendedor+credenciado.&type=phone_number&app_absent=0"
        imagePath="/4.jpg"
        imageAlt="Casal usando camisetas streetwear premium na cor verde militar"
        isImageLeft={false}
        stickers={{
          greenFlower: true,
        }}
      />

      <CallToAction 
        title="Seja um Revendedor credenciado."
        description="Não encontrou um revendedor na sua região? Essa é a sua oportunidade de levar a exclusividade da Lamell Store para a sua cidade com alta margem de lucro."
        buttonText="Seja um Revendedor"
        color="pink"
      />
    </>
  )
}
