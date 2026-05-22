'use client'

import * as Accordion from '@radix-ui/react-accordion'
import { Plus } from 'lucide-react'

const FAQS = [
  {
    q: 'Qual é o pedido mínimo para personalização?',
    a: 'Para iniciar um projeto de personalização (Private Label), consulte a nossa equipe comercial no WhatsApp. Temos condições flexíveis para apoiar o seu negócio desde o começo.'
  },
  {
    q: 'Posso personalizar qualquer produto da linha?',
    a: 'Sim, qualquer produto da nossa linha de produção pode ser personalizado com a sua estampa, logo ou especificações, incluindo camisetas, moletons e acessórios disponíveis.'
  },
  {
    q: 'E se eu já tiver a arte pronta?',
    a: 'Nossa equipe adapta a sua arte para entrar na nossa linha de produção, garantindo que o resultado na peça final fique exatamente com o padrão de qualidade esperado.'
  },
  {
    q: 'Posso receber uma peça piloto antes de fechar o pedido?',
    a: 'Sim, produzimos uma peça piloto e podemos enviá-la via transportadora expressa antes da aprovação final do projeto completo.'
  },
  {
    q: 'Quanto custa o desenvolvimento da arte?',
    a: 'Cobramos o valor simbólico de R$ 40,00 pelo desenvolvimento das artes do projeto, executado por nossos designers especializados.'
  },
  {
    q: 'Qual o prazo de entrega para pedidos personalizados?',
    a: 'Pedidos personalizados necessitam de 6 dias úteis para postagem, contados após a aprovação da arte e pagamento do pedido.'
  }
]

export function FAQPersonalizacao() {
  return (
    <section className="py-24 bg-brand-black text-brand-beige">
      <div className="container mx-auto max-w-3xl px-6 lg:px-8">
        <h2 className="text-4xl font-heading font-extrabold mb-12 text-center text-brand-beige">
          Dúvidas Frequentes
        </h2>

        <Accordion.Root type="single" collapsible className="flex flex-col gap-4">
          {FAQS.map((faq, i) => (
            <Accordion.Item 
              key={i} 
              value={`item-${i}`}
              className="bg-brand-beige/5 rounded-2xl border border-brand-beige/10 overflow-hidden"
            >
              <Accordion.Header className="flex">
                <Accordion.Trigger className="flex flex-1 items-center justify-between py-6 px-6 font-heading font-bold text-lg text-left transition-all [&[data-state=open]>div>svg]:rotate-45 hover:bg-brand-beige/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple">
                  {faq.q}
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-purple/20 ml-4 transition-transform duration-300">
                    <Plus size={18} className="text-brand-purple transition-transform duration-300" aria-hidden="true" />
                  </div>
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="overflow-hidden text-brand-beige/70 font-medium text-base data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
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
