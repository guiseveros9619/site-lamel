'use client'

import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Plus } from 'lucide-react'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP)
}

const FAQS = [
  {
    question: 'Como a IA verifica se a música foi tocada?',
    answer: 'Nossa Inteligência Artificial audita cada postagem em tempo real, realizando um "match" preciso do áudio oficial do seu lançamento e verificando a presença de hashtags e @marcações obrigatórias antes de qualquer liberação de pagamento.',
  },
  {
    question: 'O que é o pagamento em Escrow (garantia)?',
    answer: 'É a segurança do seu orçamento. Você define o valor total da campanha, que fica protegido. O dinheiro só é transferido para o criador quando ele atinge a meta exata que você definiu. Se as metas não forem atingidas, o saldo não gasto retorna integralmente para você.',
  },
  {
    question: 'Posso oferecer ingressos em vez de PIX?',
    answer: 'Sim! Produtores de eventos podem criar campanhas de recompensa não-financeira. Você oferece ingressos VIP, acessos a camarins ou combos, e os criadores locais fazem o trabalho de viralizar e lotar sua festa. O custo marginal é zero.',
  },
  {
    question: 'Existe um tamanho mínimo de seguidores para os criadores?',
    answer: 'A hitlovers abraça desde fãs apaixonados com 500 seguidores até macro-influenciadores. A mágica da viralização está em pulverizar a sua campanha ativando a "cauda longa" de micro-criadores, gerando um hype verdadeiro e local.',
  },
  {
    question: 'Como acompanho os resultados da campanha?',
    answer: 'Você tem acesso à "Sala de Comando", nosso Dashboard Web (SaaS) white-label. Lá você poderá monitorar o alcance, engajamento, aprovação automática dos vídeos e a distribuição do seu budget em tempo real.',
  },
]

export function FAQAnunciantes() {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      gsap.from('.faq-header-anim', {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
        },
      })

      gsap.from('.faq-item', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
        },
      })
    },
    { scope: containerRef }
  )

  return (
    <section ref={containerRef} className="bg-[#121212] py-32 border-t border-white/5">
      <div className="container mx-auto max-w-3xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="faq-header-anim text-4xl sm:text-5xl font-extrabold tracking-tight mb-4 text-white text-balance">
            Dúvidas Frequentes
          </h2>
          <p className="faq-header-anim text-lg text-zinc-400 font-medium">
            Tudo o que você precisa saber para lançar sua primeira campanha de sucesso.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {FAQS.map((faq, index) => (
            <details
              key={index}
              className="faq-item group bg-[#1c1c1c] border border-white/5 rounded-2xl overflow-hidden [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="flex items-center justify-between cursor-pointer p-6 lg:p-8 outline-none focus-visible:ring-2 focus-visible:ring-brand-purple">
                <h3 className="text-lg font-bold text-zinc-100 group-hover:text-white transition-colors pr-6 text-balance">
                  {faq.question}
                </h3>
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-zinc-800/50 flex items-center justify-center text-zinc-400 group-hover:text-white group-hover:bg-brand-purple/20 group-open:-rotate-45 transition-[transform,background-color,color] duration-300">
                  <Plus size={20} />
                </span>
              </summary>
              <div className="px-6 lg:px-8 pb-6 lg:pb-8 pt-0">
                <p className="text-zinc-400 leading-relaxed font-medium">
                  {faq.answer}
                </p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
