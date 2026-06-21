'use client'

import { useRef } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { SectionBadge } from '@/components/ui/SectionBadge'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP)
}

interface ProductModel {
  modelo: string
  preco: string
  tamanhos: string
  image: string
  alt: string
}

const MODELS: ProductModel[] = [
  {
    modelo: 'Tshirt Tradicional',
    preco: 'R$ 25,98',
    tamanhos: 'P ao G3',
    image: '/produtos/tshirt-tradicional.png',
    alt: 'Tshirt Tradicional personalizada Lamell Store',
  },
  {
    modelo: 'Cropped Max',
    preco: 'R$ 26,98',
    tamanhos: 'P ao G2',
    image: '/produtos/cropitch-max.png',
    alt: 'Cropped Max personalizada Lamell Store',
  },
  {
    modelo: 'Tshirt Max',
    preco: 'R$ 35,98',
    tamanhos: 'P ao G1',
    image: '/produtos/tshirt-max.png',
    alt: 'Tshirt Max personalizada Lamell Store',
  },
  {
    modelo: 'Camiseta Masculina',
    preco: 'R$ 37,00',
    tamanhos: 'P ao G1',
    image: '/produtos/camiseta-masculina.png',
    alt: 'Camiseta Masculina personalizada Lamell Store',
  },
  {
    modelo: 'Camiseta Over',
    preco: 'R$ 47,98',
    tamanhos: 'P ao G1',
    image: '/produtos/camiseta-over.png',
    alt: 'Camiseta Over personalizada Lamell Store',
  },
  {
    modelo: 'Infantil Unissex',
    preco: 'R$ 24,98',
    tamanhos: '2 a 16 anos',
    image: '/produtos/infantil-unissex.png',
    alt: 'Camiseta Infantil Unissex personalizada Lamell Store',
  },
]

export function PriceCatalog() {
  const sectionRef = useRef<HTMLElement>(null)
  const scrollerRef = useRef<HTMLDivElement>(null)

  const scrollByCards = (dir: 1 | -1) => {
    const el = scrollerRef.current
    if (!el) return
    const card = el.querySelector('[data-catalog-card]') as HTMLElement | null
    const cardWidth = card?.offsetWidth ?? 340
    const gap = 32
    el.scrollBy({ left: dir * (cardWidth + gap), behavior: 'smooth' })
  }

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      if (!prefersReducedMotion) {
        gsap.fromTo(
          '.anim-catalog-card',
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.12,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 80%',
            },
          },
        )
      } else {
        gsap.set('.anim-catalog-card', { opacity: 1, y: 0 })
      }
    },
    { scope: sectionRef },
  )

  return (
    <section
      ref={sectionRef}
      className="bg-brand-beige py-24 lg:py-32 overflow-hidden relative border-t border-brand-black/5"
    >
      <div className="container mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-5 mb-12 lg:mb-16">
          <SectionBadge variant="pink">Catálogo de Personalização</SectionBadge>
          <h2 className="text-5xl sm:text-6xl font-heading font-extrabold text-brand-black text-balance leading-tight">
            Valores das Peças
          </h2>
          <p className="text-lg text-brand-black/70 max-w-2xl mx-auto font-medium">
            Veja a tabela completa de modelos prontos para personalizar. Todas as peças são produzidas
            com algodão premium e finalizadas em casa — costura, estamparia e acabamento sob o nosso
            controle de qualidade.
          </p>
        </div>
      </div>

      {/* Carousel */}
      <div className="relative">
        {/* Arrows (desktop only) */}
        <button
          type="button"
          aria-label="Modelo anterior"
          onClick={() => scrollByCards(-1)}
          className="hidden lg:flex absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white border border-brand-black/10 shadow-lg items-center justify-center hover:bg-brand-orange hover:text-brand-beige hover:border-brand-orange transition-colors"
        >
          <ChevronLeft size={22} strokeWidth={2.5} />
        </button>
        <button
          type="button"
          aria-label="Próximo modelo"
          onClick={() => scrollByCards(1)}
          className="hidden lg:flex absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white border border-brand-black/10 shadow-lg items-center justify-center hover:bg-brand-orange hover:text-brand-beige hover:border-brand-orange transition-colors"
        >
          <ChevronRight size={22} strokeWidth={2.5} />
        </button>

        <div
          ref={scrollerRef}
          className="flex gap-6 lg:gap-8 overflow-x-auto snap-x snap-mandatory px-6 lg:px-12 pb-6 [&::-webkit-scrollbar]:hidden [scrollbar-width:none]"
        >
          {MODELS.map((item) => (
            <article
              key={item.modelo}
              data-catalog-card
              className="anim-catalog-card flex flex-col shrink-0 snap-center w-[260px] sm:w-[300px] md:w-[340px] rounded-3xl bg-white border border-brand-black/10 shadow-lg overflow-hidden hover:shadow-2xl hover:border-brand-orange/40 transition-all duration-300"
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-[1.05]"
                  sizes="(max-width:640px) 260px, (max-width:768px) 300px, 340px"
                />
                <span className="absolute top-4 left-4 z-10 inline-flex items-center rounded-full bg-white/95 px-3.5 py-1.5 text-xs font-bold tracking-wide text-brand-orange shadow-sm backdrop-blur">
                  Algodão premium
                </span>
              </div>
              <div className="p-5 flex flex-col gap-1">
                <h3 className="font-bold text-lg text-brand-black leading-snug">
                  {item.modelo}
                </h3>
                <p className="flex items-baseline gap-1.5">
                  <span className="text-sm font-medium text-brand-black/50">A partir de</span>
                  <span className="text-brand-orange font-bold text-lg">
                    {item.preco}
                  </span>
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>

    </section>
  )
}
