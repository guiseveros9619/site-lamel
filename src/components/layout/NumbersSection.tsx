'use client'

import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP)
}

export function NumbersSection() {
  const containerRef = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      if (!prefersReducedMotion) {
        gsap.to('.anim-up-numbers', {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%',
          }
        })
      } else {
        gsap.set('.anim-up-numbers', { opacity: 1, y: 0 })
      }
    },
    { scope: containerRef }
  )

  return (
    <section ref={containerRef} className="bg-brand-black py-24 overflow-hidden border-t border-brand-beige/10">
      <div className="container mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8">
          
          {/* Left Column */}
          <div>
            <p className="anim-up-numbers opacity-0 translate-y-10 mb-4 text-sm font-bold tracking-widest text-brand-yellow uppercase">
              Oportunidade nacional
            </p>
            <h2 className="anim-up-numbers opacity-0 translate-y-10 text-5xl font-heading font-extrabold leading-[1.1] tracking-tight sm:text-6xl lg:text-7xl text-brand-beige text-balance">
              Presença e alcance em todo o Brasil.
            </h2>
          </div>

          {/* Right Column */}
          <div className="flex flex-col justify-end lg:pb-4">
            <p className="anim-up-numbers opacity-0 translate-y-10 mb-10 text-xl leading-relaxed text-brand-beige/70 font-medium">
              A Lamell Store envia os pedidos para todo o território brasileiro e atualmente conta com revendedores em <span className="text-brand-yellow font-bold">todos os 27 estados do Brasil</span>. Um mercado gigante à sua espera.
            </p>
            <div className="anim-up-numbers opacity-0 translate-y-10">
              <a
                href="/revendedores"
                className="inline-flex h-14 items-center justify-center rounded-full bg-brand-yellow px-8 text-base font-bold text-brand-black hover:bg-brand-yellow/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow shadow-md cursor-pointer"
              >
                Conheça a rede de revendedores
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
