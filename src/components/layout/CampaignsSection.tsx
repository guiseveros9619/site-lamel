'use client'

import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight, Scissors, Trophy, MapPin } from 'lucide-react'
import Link from 'next/link'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP)
}

export function CampaignsSection() {
  const containerRef = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      if (!prefersReducedMotion) {
        // Header Animation
        gsap.fromTo('.anim-camp-header', 
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top 80%',
            }
          }
        )

        // Cards Animation
        gsap.fromTo('.anim-camp-card', 
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: '.anim-camp-card', // Trigger on the cards container area
              start: 'top 85%',
            }
          }
        )
      } else {
         gsap.set(['.anim-camp-header', '.anim-camp-card'], { opacity: 1, y: 0 })
      }
    },
    { scope: containerRef }
  )

  return (
    <section ref={containerRef} className="bg-brand-beige py-24 overflow-hidden border-t border-brand-black/5">
      <div className="container mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header Part */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16 relative z-10">
          <h2 className="anim-camp-header opacity-0 translate-y-10 text-5xl sm:text-6xl font-heading font-extrabold leading-[1.05] tracking-tight text-brand-black text-balance">
            Tudo o que você precisa para crescer.
          </h2>
          <div className="anim-camp-header opacity-0 translate-y-10 flex flex-col items-start lg:pt-4">
            <p className="text-xl text-brand-black/70 leading-relaxed font-medium mb-6">
              Nosso ecossistema foi pensado para apoiar o seu negócio em todas as frentes, desde a personalização dos produtos até o suporte e premiações.
            </p>
          </div>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6 relative z-20">
          
          {/* Card 1: Personalização */}
          <Link href="/personalizacao" className="anim-camp-card opacity-0 translate-y-10 flex flex-col group cursor-pointer bg-white p-8 rounded-[2rem] border-2 border-brand-black shadow-lg hover:-translate-y-2 transition-all duration-300 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green">
            <div className="w-14 h-14 rounded-2xl bg-brand-green text-brand-black flex items-center justify-center mb-8 shadow-sm">
               <Scissors size={28} aria-hidden="true" />
            </div>
            <h3 className="text-3xl font-heading font-extrabold mb-4 text-brand-black leading-tight">Personalização<br/>Exclusiva</h3>
            <p className="text-brand-black/70 leading-relaxed mb-8 flex-grow font-medium">
              Crie a sua própria marca (Private Label) personalizando os produtos com a sua logomarca ou escolhendo nossas peças.
            </p>
            <div className="w-12 h-12 rounded-full bg-brand-black text-brand-beige flex items-center justify-center transition-transform group-hover:translate-x-2">
              <ArrowRight size={24} aria-hidden="true" />
            </div>
          </Link>

          {/* Card 2: TSH Club */}
          <Link href="/tsh-club" className="anim-camp-card opacity-0 translate-y-10 flex flex-col group cursor-pointer bg-white p-8 rounded-[2rem] border-2 border-brand-black shadow-lg hover:-translate-y-2 transition-all duration-300 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple">
            <div className="w-14 h-14 rounded-2xl bg-brand-purple text-brand-black flex items-center justify-center mb-8 shadow-sm">
               <Trophy size={28} aria-hidden="true" />
            </div>
            <h3 className="text-3xl font-heading font-extrabold mb-4 text-brand-black leading-tight">TSH Club<br/>Fidelidade</h3>
            <p className="text-brand-black/70 leading-relaxed mb-8 flex-grow font-medium">
              O programa automático onde suas compras viram pontos. Acumule pontos, suba de nível e desbloqueie descontos e benefícios.
            </p>
            <div className="w-12 h-12 rounded-full bg-brand-black text-brand-beige flex items-center justify-center transition-transform group-hover:translate-x-2">
              <ArrowRight size={24} aria-hidden="true" />
            </div>
          </Link>

          {/* Card 3: Mapa */}
          <Link href="/revendedores" className="anim-camp-card opacity-0 translate-y-10 flex flex-col group cursor-pointer bg-white p-8 rounded-[2rem] border-2 border-brand-black shadow-lg hover:-translate-y-2 transition-all duration-300 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange">
            <div className="w-14 h-14 rounded-2xl bg-brand-orange text-brand-black flex items-center justify-center mb-8 shadow-sm">
               <MapPin size={28} aria-hidden="true" />
            </div>
            <h3 className="text-3xl font-heading font-extrabold mb-4 text-brand-black leading-tight">Presença<br/>Nacional</h3>
            <p className="text-brand-black/70 leading-relaxed mb-8 flex-grow font-medium">
              Apareça no nosso mapa interativo e seja encontrado por clientes finais da sua região que buscam produtos da Tshirteria.
            </p>
            <div className="w-12 h-12 rounded-full bg-brand-black text-brand-beige flex items-center justify-center transition-transform group-hover:translate-x-2">
              <ArrowRight size={24} aria-hidden="true" />
            </div>
          </Link>

        </div>
      </div>
    </section>
  )
}

