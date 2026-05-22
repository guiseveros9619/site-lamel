'use client'

import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { RefreshCcw, TrendingUp, Zap } from 'lucide-react'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP)
}

export function ExplanationClub() {
  const containerRef = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      if (!prefersReducedMotion) {
        gsap.fromTo('.anim-expl-card', 
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top 80%',
            }
          }
        )
      } else {
        gsap.set('.anim-expl-card', { opacity: 1, y: 0 })
      }
    },
    { scope: containerRef }
  )

  return (
    <section ref={containerRef} className="py-24 bg-brand-black text-brand-beige border-t border-brand-beige/10">
      <div className="container mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="order-2 lg:order-1">
            <h2 className="text-4xl sm:text-5xl font-heading font-extrabold mb-6 leading-tight">
              O que é o TSH Club?
            </h2>
            <p className="text-xl text-brand-beige/70 leading-relaxed font-medium mb-10">
              Um programa automático de benefícios para quem compra na Tshirteria. Cada real gera pontos, cada volume de pontos desbloqueia um novo nível — e cada nível entrega mais vantagens. Quanto mais constante a sua parceria, mais alto você chega.
            </p>
            <div className="flex flex-col gap-6">
              <div className="anim-expl-card opacity-0 translate-y-10 flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-orange text-brand-black flex items-center justify-center shrink-0">
                  <Zap size={24} />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-xl mb-1 text-brand-orange">Automático</h4>
                  <p className="text-brand-beige/60 font-medium">Sem cadastro ou burocracia. Comprou, já está participando.</p>
                </div>
              </div>
              <div className="anim-expl-card opacity-0 translate-y-10 flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-blue text-brand-black flex items-center justify-center shrink-0">
                  <TrendingUp size={24} />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-xl mb-1 text-brand-blue">Progressivo</h4>
                  <p className="text-brand-beige/60 font-medium">5 níveis para alcançar. Quanto maior o nível, maior o desconto.</p>
                </div>
              </div>
              <div className="anim-expl-card opacity-0 translate-y-10 flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-green text-brand-black flex items-center justify-center shrink-0">
                  <RefreshCcw size={24} />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-xl mb-1 text-brand-green">Recorrente</h4>
                  <p className="text-brand-beige/60 font-medium">O programa recompensa quem mantêm a constância de compras.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2 bg-brand-beige text-brand-black rounded-[2.5rem] p-10 sm:p-16 flex flex-col items-center justify-center text-center shadow-2xl border-4 border-brand-pink transform rotate-2 hover:rotate-0 transition-transform duration-500">
             <div className="inline-block px-4 py-1 bg-brand-black text-brand-pink font-bold text-xs uppercase tracking-widest rounded-full mb-6">A Regra é Simples</div>
             <div className="text-[5rem] sm:text-[6rem] font-heading font-black leading-none mb-2 text-brand-pink drop-shadow-md">
               R$ 1
             </div>
             <div className="text-3xl font-heading font-bold text-brand-black/40 mb-2">=</div>
             <div className="text-5xl sm:text-6xl font-heading font-black leading-none mb-6">
               1 Ponto
             </div>
             <p className="text-lg font-bold text-brand-black/70 max-w-sm mt-4">
               Cada real que você investe em produtos Tshirteria vira 1 ponto no seu saldo.
             </p>
          </div>
        </div>
      </div>
    </section>
  )
}

