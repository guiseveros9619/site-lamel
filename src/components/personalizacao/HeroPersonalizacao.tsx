'use client'

import { useRef } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ArrowRight, Shirt, Sparkles } from 'lucide-react'
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
        gsap.fromTo('.anim-hero-visual',
          { x: 40, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 1.2,
            ease: 'power3.out',
            delay: 0.2,
          }
        )
        gsap.to('.anim-hero-float', {
          y: '-=12',
          rotation: '+=3',
          duration: 3,
          yoyo: true,
          repeat: -1,
          ease: 'sine.inOut',
        })
      } else {
        gsap.set('.anim-hero-text, .anim-hero-visual', { opacity: 1, y: 0, x: 0 })
      }
    },
    { scope: containerRef }
  )

  return (
    <section
      ref={containerRef}
      className="relative lg:min-h-[85vh] overflow-hidden bg-brand-beige text-brand-black border-t border-brand-black/5 flex flex-col lg:justify-center pt-32 lg:pt-24 pb-12 lg:pb-16"
    >
      {/* Background blur — magenta soft */}
      <div className="absolute top-0 right-0 w-[600px] h-[500px] bg-brand-orange/10 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-purple/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto max-w-7xl px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Coluna esquerda — texto */}
          <div className="text-center lg:text-left max-w-2xl mx-auto lg:mx-0">
            <div className="anim-hero-text mb-8 inline-flex">
              <HeroEyebrow icon={Shirt} variant="light-green">
                Personalização de Camisetas
              </HeroEyebrow>
            </div>

            <h1 className="anim-hero-text text-5xl sm:text-6xl lg:text-[4.5rem] font-heading font-extrabold leading-[1.05] tracking-tight mb-8 text-brand-black text-balance">
              Personalização<br/>de Camisetas
            </h1>

            <p className="anim-hero-text text-lg sm:text-xl text-brand-black/80 leading-relaxed font-medium mb-10 max-w-xl mx-auto lg:mx-0">
              Crie camisetas personalizadas para sua marca, evento, grupo ou loja. Pedido mínimo: apenas 8 peças. Produção profissional, qualidade premium e envio para todo Brasil.
            </p>

            <div className="anim-hero-text flex flex-col sm:flex-row items-center lg:justify-start justify-center gap-4">
              <a
                href="https://api.whatsapp.com/send/?phone=5562999895357&text=Ol%C3%A1+quero+iniciar+um+projeto+personalizado&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-brand-green px-8 text-base font-bold text-brand-black hover:bg-brand-green/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-black shadow-lg w-full sm:w-auto"
              >
                Solicitar orçamento
                <ArrowRight size={18} />
              </a>
            </div>
          </div>

          {/* Coluna direita — visual com imagem em frame premium */}
          <div className="anim-hero-visual relative aspect-[4/5] max-w-md lg:max-w-none w-full mx-auto">
            {/* Halo magenta atrás */}
            <div className="absolute inset-8 -z-10 bg-brand-orange/20 blur-3xl rounded-full" />

            {/* Frame principal */}
            <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white">
              <Image
                src="/15.jpg"
                alt="Camiseta Lamell Store personalizada com estampa premium"
                fill
                sizes="(max-width: 1024px) 100vw, 600px"
                className="object-cover"
                priority
              />
              {/* Gradient sutil pra dar profundidade */}
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-orange/20 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Adesivo flutuante "8 peças" */}
            <div className="anim-hero-float absolute -top-6 -right-6 lg:-top-8 lg:-right-8 w-28 h-28 lg:w-32 lg:h-32 rounded-full bg-brand-orange text-brand-beige flex flex-col items-center justify-center shadow-xl border-4 border-brand-beige rotate-12">
              <Sparkles size={20} className="mb-1" />
              <span className="text-xs font-bold uppercase tracking-widest leading-none">a partir de</span>
              <span className="font-heading font-extrabold text-2xl lg:text-3xl leading-none mt-0.5">8 peças</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


