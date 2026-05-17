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
    question: 'Quanto tempo demora para eu receber o PIX?',
    answer: 'Assim que você colar o link no app, nossa IA vai auditar seu vídeo. O PIX (ou o ingresso) é liberado em até 48 horas da postagem do vídeo. E o melhor: a recompensa não está condicionada apenas a altas visualizações. Você também pode receber ingressos VIP e PIX simplesmente por criar e postar o conteúdo, dependendo das regras da campanha.',
  },
  {
    question: 'Preciso ter muitos seguidores para participar?',
    answer: 'Não! Nós valorizamos o alcance e engajamento real, não importa se você é um fã engajado com poucos seguidores ou um macro-influenciador. Qualquer pessoa que goste de fazer conteúdo e participar de trends pode se inscrever nas campanhas.',
  },
  {
    question: 'O que é o tempo de "Reserva de Vaga"?',
    answer: 'A maioria das campanhas tem um limite de orçamento e vagas limitadas. Quando você reserva uma vaga, nós garantimos e "travamos" o seu cachê por 24 horas. Assim você tem tempo de sobra para gravar, editar e postar sem medo de outra pessoa pegar o seu lugar.',
  },
  {
    question: 'E se meu vídeo viralizar e passar muito da meta?',
    answer: 'Muitas campanhas possuem um sistema de "Bônus por Engajamento". Isso significa que se o seu vídeo explodir em visualizações, você destrava recompensas extras e multiplicadores definidos pelo anunciante, ganhando muito mais do que o cachê base em PIX, além da possibilidade de destravar acessos exclusivos.',
  },
  {
    question: 'Posso apagar o vídeo depois de receber o PIX?',
    answer: 'Não. Os vídeos devem permanecer públicos no seu perfil. Remover o conteúdo após o recebimento pode impactar o seu Score de Reputação na plataforma, o que impedirá você de participar e ser selecionado para novas campanhas no futuro.',
  },
]

export function FAQCriadores() {
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

      gsap.from('.faq-item-cr', {
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
            Tudo o que você precisa saber antes de ganhar dinheiro com seu primeiro vídeo.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {FAQS.map((faq, index) => (
            <details
              key={index}
              className="faq-item-cr group bg-[#1c1c1c] border border-white/5 rounded-2xl overflow-hidden [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="flex items-center justify-between cursor-pointer p-6 lg:p-8 outline-none focus-visible:ring-2 focus-visible:ring-green-400">
                <h3 className="text-lg font-bold text-zinc-100 group-hover:text-white transition-colors pr-6 text-balance">
                  {faq.question}
                </h3>
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-zinc-800/50 flex items-center justify-center text-zinc-400 group-hover:text-white group-hover:bg-green-500/20 group-open:-rotate-45 transition-[transform,background-color,color] duration-300">
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
