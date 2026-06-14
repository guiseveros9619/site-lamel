'use client'

import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  ChevronLeft,
  ChevronRight,
  Package,
  Palette,
  Eye,
  Truck,
} from 'lucide-react'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP)
}

const PILLARS = [
  {
    icon: <Package size={28} />,
    title: 'A partir de 8 peças',
    description: 'Pedido mínimo flexível para viabilizar pequenos eventos, grupos e lojas que estão começando.',
    color: 'bg-brand-orange text-brand-black',
  },
  {
    icon: <Palette size={28} />,
    title: 'Arte que rende sempre',
    description: 'Valor da arte de R$ 40,00 cobrado uma única vez. Reutilize a mesma arte quantas vezes quiser, sem custo adicional.',
    color: 'bg-brand-blue text-brand-black',
  },
  {
    icon: <Eye size={28} />,
    title: 'Mockup em 24h',
    description: 'Você recebe a estampa aplicada na peça para aprovação em até 1 dia útil após o envio do material.',
    color: 'bg-brand-green text-brand-black',
  },
  {
    icon: <Truck size={28} />,
    title: 'Pronto em 5 dias',
    description: 'Envio em até 5 dias úteis após aprovação do mockup e confirmação do pagamento. Produção profissional para todo o Brasil.',
    color: 'bg-brand-purple text-brand-black',
  },
]

export function PillarsPersonalizacao() {
  const containerRef = useRef<HTMLElement>(null)
  const scrollerRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(false)

  const updateScrollState = () => {
    const el = scrollerRef.current
    if (!el) return
    setCanScrollLeft(el.scrollLeft > 4)
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4)
  }

  useEffect(() => {
    updateScrollState()
    const el = scrollerRef.current
    if (!el) return
    el.addEventListener('scroll', updateScrollState, { passive: true })
    window.addEventListener('resize', updateScrollState)
    return () => {
      el.removeEventListener('scroll', updateScrollState)
      window.removeEventListener('resize', updateScrollState)
    }
  }, [])

  const scrollByCards = (dir: 1 | -1) => {
    const el = scrollerRef.current
    if (!el) return
    const card = el.querySelector('[data-pillar-card]') as HTMLElement | null
    const cardWidth = card?.offsetWidth ?? 300
    const gap = 24
    el.scrollBy({ left: dir * (cardWidth + gap), behavior: 'smooth' })
  }

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      if (!prefersReducedMotion) {
        gsap.fromTo(
          '.anim-pillar-card',
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top 85%',
            },
          },
        )
      } else {
        gsap.set('.anim-pillar-card', { opacity: 1, y: 0 })
      }
    },
    { scope: containerRef },
  )

  return (
    <section
      ref={containerRef}
      className="py-24 bg-brand-beige overflow-hidden border-t border-brand-black/5"
    >
      <div className="container mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="text-4xl sm:text-5xl font-heading font-extrabold text-brand-black leading-tight max-w-2xl">
            O que podemos personalizar?
          </h2>

          <div className="flex gap-3 lg:hidden">
            <button
              type="button"
              aria-label="Anterior"
              onClick={() => scrollByCards(-1)}
              disabled={!canScrollLeft}
              className="h-12 w-12 rounded-full border-2 border-brand-black bg-white flex items-center justify-center hover:bg-brand-orange transition-colors disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-white shadow-sm"
            >
              <ChevronLeft size={20} strokeWidth={2.5} />
            </button>
            <button
              type="button"
              aria-label="Próximo"
              onClick={() => scrollByCards(1)}
              disabled={!canScrollRight}
              className="h-12 w-12 rounded-full border-2 border-brand-black bg-white flex items-center justify-center hover:bg-brand-orange transition-colors disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-white shadow-sm"
            >
              <ChevronRight size={20} strokeWidth={2.5} />
            </button>
          </div>
        </div>

        <div
          ref={scrollerRef}
          className="flex gap-6 overflow-x-auto pb-6 -mx-6 px-6 scroll-pl-6 scroll-pr-6 snap-x snap-mandatory lg:grid lg:grid-cols-4 lg:gap-6 lg:mx-0 lg:px-0 lg:pb-0 lg:scroll-pl-0 lg:scroll-pr-0 lg:overflow-visible lg:snap-none [&::-webkit-scrollbar]:hidden [scrollbar-width:none]"
        >
          {PILLARS.map((pillar, i) => (
            <div
              key={i}
              data-pillar-card
              className="snap-start shrink-0 basis-[78%] sm:basis-[55%] md:basis-[calc((100%-48px)/3)] lg:basis-auto lg:shrink"
            >
              <div className="anim-pillar-card group relative h-full bg-white rounded-3xl p-7 border-2 border-brand-black shadow-lg hover:-translate-y-2 hover:shadow-[8px_8px_0px_0px_rgba(17,17,17,1)] transition-all duration-300">
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-brand-black/10 ${pillar.color}`}
                >
                  {pillar.icon}
                </div>
                <h3 className="text-xl font-heading font-extrabold mb-3 text-brand-black leading-snug">
                  {pillar.title}
                </h3>
                <p className="text-brand-black/70 font-medium text-[15px] leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
          <div
            aria-hidden
            className="shrink-0 basis-[22%] sm:basis-[45%] md:basis-6 lg:hidden"
          />
        </div>
      </div>
    </section>
  )
}
