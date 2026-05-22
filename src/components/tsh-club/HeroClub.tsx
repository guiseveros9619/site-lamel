'use client'

import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { Gem, Sparkles } from 'lucide-react'
import { HeroEyebrow } from '@/components/ui/HeroEyebrow'

gsap.registerPlugin(useGSAP)

export function HeroClub() {
  const containerRef = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      if (!prefersReducedMotion) {
        gsap.fromTo('.anim-hero-text', 
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.15,
            ease: 'power3.out',
          }
        )

        gsap.to('.hero-gem', {
          y: '-=15',
          duration: 2,
          yoyo: true,
          repeat: -1,
          ease: 'sine.inOut',
          stagger: { amount: 1, from: 'edges' }
        })
      } else {
        gsap.set('.anim-hero-text', { opacity: 1, y: 0 })
      }
    },
    { scope: containerRef }
  )

  return (
    <section ref={containerRef} className="relative pt-32 pb-20 lg:pt-40 lg:pb-24 overflow-hidden bg-brand-beige">
      <div className="container mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <div className="anim-hero-text opacity-0 translate-y-10 mb-8">
            <HeroEyebrow icon={Sparkles} variant="light-purple">
              Programa de benefícios
            </HeroEyebrow>
          </div>
          <h1 className="anim-hero-text opacity-0 translate-y-10 text-5xl font-heading font-extrabold leading-[1.05] tracking-tight sm:text-6xl lg:text-[5rem] text-brand-black text-balance mb-8">
            TSH Club
          </h1>
          <p className="anim-hero-text opacity-0 translate-y-10 text-lg leading-relaxed text-brand-black/80 sm:text-xl font-medium max-w-2xl mx-auto">
            Quanto mais você compra, mais você ganha.
          </p>
        </div>

        <div className="anim-hero-text opacity-0 translate-y-10 flex flex-wrap justify-center items-end gap-6 sm:gap-10 mt-12">
          {/* Bronze */}
          <div className="hero-gem flex flex-col items-center gap-3 opacity-60 scale-90">
             <div className="w-16 h-16 rounded-2xl bg-[#CD7F32] flex items-center justify-center border-2 border-white">
               <Gem size={32} className="text-white" />
             </div>
             <span className="font-heading font-bold text-sm uppercase tracking-wider text-brand-black">Bronze</span>
          </div>
          {/* Prata */}
          <div className="hero-gem flex flex-col items-center gap-3 opacity-80 scale-95">
             <div className="w-20 h-20 rounded-2xl bg-[#C0C0C0] flex items-center justify-center border-2 border-white">
               <Gem size={36} className="text-black/80" />
             </div>
             <span className="font-heading font-bold text-sm uppercase tracking-wider text-brand-black">Prata</span>
          </div>
          {/* Ouro */}
          <div className="hero-gem flex flex-col items-center gap-3 z-10">
             <div className="w-24 h-24 rounded-2xl bg-[#FFD700] flex items-center justify-center border-2 border-white">
               <Gem size={44} className="text-orange-900" />
             </div>
             <span className="font-heading font-bold text-base uppercase tracking-wider text-brand-black">Ouro</span>
          </div>
          {/* Diamante */}
          <div className="hero-gem flex flex-col items-center gap-3 opacity-90 scale-105">
             <div className="w-20 h-20 rounded-2xl bg-[#b9f2ff] flex items-center justify-center border-2 border-white">
               <Gem size={36} className="text-blue-900" />
             </div>
             <span className="font-heading font-bold text-sm uppercase tracking-wider text-brand-black">Diamante</span>
          </div>
          {/* Platina */}
          <div className="hero-gem flex flex-col items-center gap-3 opacity-80 scale-95">
             <div className="w-16 h-16 rounded-2xl bg-[#E5E4E2] flex items-center justify-center border-2 border-white">
               <Gem size={32} className="text-zinc-800" />
             </div>
             <span className="font-heading font-bold text-sm uppercase tracking-wider text-brand-black">Platina</span>
          </div>
        </div>
      </div>
    </section>
  )
}
