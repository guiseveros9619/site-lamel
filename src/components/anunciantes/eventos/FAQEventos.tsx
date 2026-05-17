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
    question: 'Como os criadores ajudam a vender ingressos para o meu evento?',
    answer: 'Os criadores geram uma narrativa de antecipação autêntica. Ao compartilharem expectativas e experiências, eles geram urgência e direcionam um tráfego altamente qualificado direto para a sua bilheteria.',
  },
  {
    question: 'Posso focar a campanha apenas na cidade do evento?',
    answer: 'Sim. A hiper-segmentação é um dos nossos pilares. Você delimita o raio de atuação geográfico para que somente influenciadores relevantes para a sua praça promovam o seu evento.',
  },
  {
    question: 'Posso oferecer ingressos em vez de pagamento em PIX?',
    answer: 'Exatamente. Essa é uma estratégia inteligente para otimizar o fluxo de caixa. Você pode trocar a capacidade ociosa (ingressos ou acessos VIP) por marketing de influência de alto impacto, reduzindo radicalmente o seu Custo de Aquisição (CAC).',
  },
  {
    question: 'Quando devo começar a campanha do meu evento?',
    answer: 'Recomendamos campanhas estratégicas para tracionar viradas de lote, culminando em uma ação massiva (blitz) nas 2 a 4 semanas que antecedem o evento, acelerando o esgotamento dos ingressos.',
  },
  {
    question: 'E se o criador não gerar engajamento no vídeo dele?',
    answer: 'Seu investimento opera em um ambiente de risco zero. A recompensa só é desbloqueada quando a meta orgânica é atingida e auditada pela nossa IA. Orçamento não performado retorna integralmente para a sua produtora.',
  },
]

export function FAQEventos() {
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

      gsap.from('.faq-item-ev', {
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
    <section ref={containerRef} className="bg-[#121212] py-32 px-6 lg:px-8 border-t border-white/5">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="faq-header-anim text-4xl sm:text-5xl font-extrabold tracking-tight mb-4 text-white text-balance">
            Dúvidas Frequentes
          </h2>
          <p className="faq-header-anim text-lg text-zinc-400 font-medium">
            Tudo o que você precisa saber para lotar a sua próxima edição.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {FAQS.map((faq, index) => (
            <details
              key={index}
              className="faq-item-ev group bg-[#1c1c1c] border border-white/5 rounded-2xl overflow-hidden [&_summary::-webkit-details-marker]:hidden"
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
