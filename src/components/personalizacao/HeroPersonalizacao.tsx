'use client'

import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ArrowRight, Shirt } from 'lucide-react'
import { HeroEyebrow } from '@/components/ui/HeroEyebrow'

gsap.registerPlugin(useGSAP)

export function HeroPersonalizacao() {
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
      } else {
         gsap.set('.anim-hero-text', { opacity: 1, y: 0 })
      }
    },
    { scope: containerRef }
  )

  return (
    <section ref={containerRef} className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-brand-beige text-brand-black border-t border-brand-black/5">
      {/* Background Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120%] h-[500px] bg-brand-green/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="anim-hero-text mb-8">
            <HeroEyebrow icon={Shirt} variant="light-green">
              Private Label
            </HeroEyebrow>
          </div>
          
          <h1 className="anim-hero-text text-5xl sm:text-6xl lg:text-[5rem] font-heading font-extrabold leading-[1.05] tracking-tight mb-8 text-brand-black text-balance">
            Sua marca.<br/>Suas peças.<br/>Suas regras.
          </h1>
          
          <p className="anim-hero-text text-lg sm:text-xl text-brand-black/80 leading-relaxed font-medium mb-12 max-w-3xl mx-auto">
            Personalizamos qualquer produto da nossa linha de produção com a sua identidade. Da estampa exclusiva à embalagem.
          </p>
          
          <div className="anim-hero-text flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/5562999895357?text=Olá%20quero%20iniciar%20um%20projeto%20personalizado"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-brand-green px-8 text-base font-bold text-brand-black hover:bg-brand-green/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-black shadow-lg w-full sm:w-auto"
            >
              Iniciar personalização
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}


