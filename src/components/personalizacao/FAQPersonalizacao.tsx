'use client'

import * as Accordion from '@radix-ui/react-accordion'
import { Plus } from 'lucide-react'

const FAQS = [
  {
    q: 'Qual é a quantidade mínima de peças por pedido?',
    a: 'O pedido mínimo é de apenas 8 peças. Ideal para marcas em início, eventos, equipes ou lojas que querem testar uma coleção.'
  },
  {
    q: 'Como funciona o valor da arte? Pago em todo pedido?',
    a: 'O valor da arte é único: R$ 50,00 cobrado apenas uma vez, mesmo que você já tenha o arquivo pronto. Esse custo cobre o preparo técnico feito por parceiro gráfico especializado. Depois disso, você pode reutilizar a mesma arte em quantas personalizações futuras quiser, sem custo adicional.'
  },
  {
    q: 'Quais modelos de camisetas posso personalizar?',
    a: 'Trabalhamos com 6 modelos: Tshirt Tradicional (a partir de R$ 25,98, P ao G3), Cropped Max (a partir de R$ 26,98, P ao G2), Tshirt Max (a partir de R$ 35,98, P ao G1), Camiseta Masculina (a partir de R$ 37,00, P ao G1), Camiseta Over (a partir de R$ 47,98, P ao G1) e Infantil Unissex (a partir de R$ 24,98, de 2 a 16 anos). Sempre verifique disponibilidade de estoque.'
  },
  {
    q: 'Em que formato preciso enviar minha arte?',
    a: 'Em PDF, junto com 3 informações: posição da estampa (frente, costas ou lateral), cores e tamanho da estampa conforme nosso guia técnico. O processo inicia após o pagamento da arte.'
  },
  {
    q: 'Posso pedir alterações na estampa depois de enviar?',
    a: 'Sim — incluímos até 2 alterações por estampa para garantir qualidade e agilidade no resultado final.'
  },
  {
    q: 'Como sei como vai ficar antes de produzir?',
    a: 'Em até 1 dia útil você recebe um mockup digital com a estampa aplicada na peça para aprovação. A produção só começa depois do seu OK.'
  }
]

export function FAQPersonalizacao() {
  return (
    <section className="py-24 bg-brand-beige text-brand-black">
      <div className="container mx-auto max-w-3xl px-6 lg:px-8">
        <h2 className="text-4xl font-heading font-extrabold mb-12 text-center text-brand-black">
          Dúvidas Frequentes
        </h2>

        <Accordion.Root type="single" collapsible className="flex flex-col gap-4">
          {FAQS.map((faq, i) => (
            <Accordion.Item
              key={i}
              value={`item-${i}`}
              className="bg-brand-black/5 rounded-2xl border border-brand-black/10 overflow-hidden"
            >
              <Accordion.Header className="flex">
                <Accordion.Trigger className="flex flex-1 items-center justify-between py-6 px-6 font-heading font-bold text-lg text-left transition-all [&[data-state=open]>div>svg]:rotate-45 hover:bg-brand-black/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple">
                  {faq.q}
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-purple/20 ml-4 transition-transform duration-300">
                    <Plus size={18} className="text-brand-purple transition-transform duration-300" aria-hidden="true" />
                  </div>
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="overflow-hidden text-brand-black/70 font-medium text-base data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                <div className="px-6 pb-6 pt-0">
                  {faq.a}
                </div>
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </div>
    </section>
  )
}
