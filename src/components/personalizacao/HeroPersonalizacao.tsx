'use client'

import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ArrowRight } from 'lucide-react'

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
            <h1 className="anim-hero-text text-5xl sm:text-6xl lg:text-[4.5rem] font-heading font-extrabold leading-[1.05] tracking-tight mb-8 text-brand-black text-balance">
              Transforme sua ideia<br/>
              <span className="font-heading-italic font-medium">em camiseta!</span>
            </h1>

            <p className="anim-hero-text text-lg sm:text-xl text-brand-black/80 leading-relaxed font-medium mb-10 max-w-xl mx-auto lg:mx-0">
              Camisetas personalizadas para marcas, eventos, grupos e lojas. Pedido mínimo de <strong className="font-bold text-brand-black">apenas 8 peças</strong>, qualidade premium e envio para todo o Brasil.
            </p>

            <div className="anim-hero-text flex flex-col sm:flex-row items-center lg:justify-start justify-center gap-4">
              <a
                href="https://api.whatsapp.com/send/?phone=5562999895357&text=Ol%C3%A1+quero+iniciar+um+projeto+personalizado&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-brand-blue px-8 text-base font-black text-white hover:bg-brand-orange transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange shadow-lg w-full sm:w-auto"
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

            {/* Frame principal — vídeo */}
            <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white">
              <video
                className="absolute inset-0 w-full h-full object-cover"
                src="/hero/personalizacao.mp4"
                poster="/hero/personalizacao-poster.jpg"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                aria-label="Camiseta Lamell Store personalizada — vídeo"
              />
              {/* Gradient sutil pra dar profundidade */}
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-orange/20 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


