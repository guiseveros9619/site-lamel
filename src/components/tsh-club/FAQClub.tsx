'use client'

import * as Accordion from '@radix-ui/react-accordion'
import { Plus } from 'lucide-react'

const FAQS = [
  {
    q: 'Preciso me cadastrar no TSH Club?',
    a: 'Não. Todos os clientes atacadistas da Tshirteria participam automaticamente do programa.'
  },
  {
    q: 'Como meus pontos são contados?',
    a: 'Cada R$ 1,00 em compras na Tshirteria equivale a 1 ponto no seu saldo.'
  },
  {
    q: 'Como sei em qual nível estou?',
    a: 'Você pode consultar seu nível atual e saldo de pontos entrando em contato com a sua consultora de vendas via WhatsApp ou no seu painel do lojista no site.'
  },
  {
    q: 'Os pontos têm prazo de validade?',
    a: 'Sim. Pontos têm validade e, a cada virada de mês, pontos vencidos são descontados do saldo. Isso faz com que a constância nas compras seja recompensada.'
  },
  {
    q: 'Posso cair de nível?',
    a: 'Sim. Como os pontos têm validade, se o volume de compras diminuir, o saldo de pontos cai e pode levar à perda de nível.'
  },
  {
    q: 'Os benefícios são automáticos?',
    a: 'Sim. Ao atingir o piso de pontos de um nível, os benefícios passam a valer automaticamente nas próximas compras.'
  },
  {
    q: 'Posso combinar o desconto do TSH Club com outras promoções?',
    a: 'Os descontos do TSH Club são aplicados sobre o valor de atacado. Regras sobre acúmulo com outras ações promocionais são comunicadas em cada campanha específica.'
  }
]

export function FAQClub() {
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
                <Accordion.Trigger className="flex flex-1 items-center justify-between py-6 px-6 font-heading font-bold text-lg text-left transition-all [&[data-state=open]>div>svg]:rotate-45 hover:bg-brand-beige/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange">
                  {faq.q}
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-orange/20 ml-4 transition-transform duration-300">
                    <Plus size={18} className="text-brand-orange transition-transform duration-300" aria-hidden="true" />
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
