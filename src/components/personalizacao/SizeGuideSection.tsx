'use client'

import { useRef, useState } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Ruler, FileText, Ban } from 'lucide-react'
import { SectionBadge } from '@/components/ui/SectionBadge'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP)
}

interface Layout {
  src: string
  alt: string
  caption: string
}

type Modelo =
  | { key: string; nome: string; tipo: 'mockups'; resumo: string; layouts: Layout[] }
  | { key: string; nome: string; tipo: 'nota'; resumo: string; nota: string }

const IMG_W = 1682
const IMG_H = 1190

const MODELOS: Modelo[] = [
  {
    key: 'tradicional',
    nome: 'Tshirt Tradicional',
    tipo: 'mockups',
    resumo: 'Frente até 23 cm · Costas até 25 cm',
    layouts: [
      {
        src: '/guia-tamanhos/tradicional-1.png',
        alt: 'Tshirt Tradicional — frente com estampa de 23 cm e costas com estampa de 23 cm mais 10 cm na nuca',
        caption: 'Frente 23 cm · Costas 23 cm + nuca 10 cm',
      },
      {
        src: '/guia-tamanhos/tradicional-2.png',
        alt: 'Tshirt Tradicional — frente com estampa de 18 cm e 7 cm na nuca das costas',
        caption: 'Frente 18 cm · Nuca 7 cm',
      },
      {
        src: '/guia-tamanhos/tradicional-3.png',
        alt: 'Tshirt Tradicional — peito com estampa de 15 e 12 cm e faixa de 18 cm nas costas',
        caption: 'Peito 15 / 12 cm · Costas faixa 18 cm',
      },
      {
        src: '/guia-tamanhos/tradicional-4.png',
        alt: 'Tshirt Tradicional — peito 10 cm, manga 7 cm, peito direito 7 cm e costas 25 cm',
        caption: 'Peito 10 cm · Manga 7 cm · Costas 25 cm',
      },
    ],
  },
  {
    key: 'max',
    nome: 'Tshirt MAX',
    tipo: 'mockups',
    resumo: 'Frente e costas até 27 cm',
    layouts: [
      {
        src: '/guia-tamanhos/max-1.png',
        alt: 'Tshirt MAX — frente com estampa de 27 cm e costas com 27 cm mais 10 cm na nuca',
        caption: 'Frente 27 cm · Costas 27 cm + nuca 10 cm',
      },
      {
        src: '/guia-tamanhos/max-2.png',
        alt: 'Tshirt MAX — peito com 10 e 7 cm e costas com 27 cm mais 10 cm na nuca',
        caption: 'Peito 10 / 7 cm · Costas 27 cm + nuca 10 cm',
      },
      {
        src: '/guia-tamanhos/max-3.png',
        alt: 'Tshirt MAX — frente com estampa de 25 cm e 12 cm na nuca das costas',
        caption: 'Frente 25 cm · Nuca 12 cm',
      },
      {
        src: '/guia-tamanhos/max-4.png',
        alt: 'Tshirt MAX — faixa de 12 cm no peito e 15 cm na nuca das costas',
        caption: 'Peito faixa 12 cm · Nuca 15 cm',
      },
    ],
  },
  {
    key: 'masculina',
    nome: 'Camiseta Masculina',
    tipo: 'mockups',
    resumo: 'Frente e costas até 27 cm',
    layouts: [
      {
        src: '/guia-tamanhos/max-1.png',
        alt: 'Camiseta Masculina — frente com estampa de 27 cm e costas com 27 cm mais 10 cm na nuca',
        caption: 'Frente 27 cm · Costas 27 cm + nuca 10 cm',
      },
      {
        src: '/guia-tamanhos/max-2.png',
        alt: 'Camiseta Masculina — peito com 10 e 7 cm e costas com 27 cm mais 10 cm na nuca',
        caption: 'Peito 10 / 7 cm · Costas 27 cm + nuca 10 cm',
      },
      {
        src: '/guia-tamanhos/max-3.png',
        alt: 'Camiseta Masculina — frente com estampa de 25 cm e 12 cm na nuca das costas',
        caption: 'Frente 25 cm · Nuca 12 cm',
      },
      {
        src: '/guia-tamanhos/max-4.png',
        alt: 'Camiseta Masculina — faixa de 12 cm no peito e 15 cm na nuca das costas',
        caption: 'Peito faixa 12 cm · Nuca 15 cm',
      },
    ],
  },
  {
    key: 'infantil',
    nome: 'Tshirt Infantil',
    tipo: 'mockups',
    resumo: 'Frente e costas até 20 cm',
    layouts: [
      {
        src: '/guia-tamanhos/infantil-1.png',
        alt: 'Tshirt Infantil — frente com estampa de 20 cm e costas com 20 cm mais 7 cm na nuca',
        caption: 'Frente 20 cm · Costas 20 cm + nuca 7 cm',
      },
      {
        src: '/guia-tamanhos/infantil-2.png',
        alt: 'Tshirt Infantil — frente com estampa de 15 cm e 5 cm na nuca das costas',
        caption: 'Frente 15 cm · Nuca 5 cm',
      },
      {
        src: '/guia-tamanhos/infantil-3.png',
        alt: 'Tshirt Infantil — peito com 12 e 10 cm e faixa de 15 cm nas costas',
        caption: 'Peito 12 / 10 cm · Costas faixa 15 cm',
      },
      {
        src: '/guia-tamanhos/infantil-4.png',
        alt: 'Tshirt Infantil — peito 7 cm, manga 5 cm, peito direito 5 cm e costas 18 cm',
        caption: 'Peito 7 cm · Manga 5 cm · Costas 18 cm',
      },
    ],
  },
  {
    key: 'cropped',
    nome: 'Tshirt Cropped',
    tipo: 'nota',
    resumo: 'Mesma largura · altura máx. 24 cm',
    nota: 'Segue o mesmo tamanho de largura das estampas, mas a altura não pode passar de 24 cm.',
  },
  {
    key: 'silk',
    nome: 'Tshirt Silk Total',
    tipo: 'nota',
    resumo: 'Sob arquivo personalizado',
    nota: 'Solicita um arquivo como forma do Silk Total.',
  },
]

export function SizeGuideSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [ativo, setAtivo] = useState(MODELOS[0].key)
  const modelo = MODELOS.find((m) => m.key === ativo) ?? MODELOS[0]

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      if (prefersReducedMotion) {
        gsap.set('.anim-sg', { opacity: 1, y: 0 })
        return
      }
      gsap.fromTo(
        '.anim-sg',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 78%' },
        },
      )
    },
    { scope: sectionRef },
  )

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-white py-24 lg:py-32 border-t border-brand-black/5"
    >
      <div className="absolute top-10 right-0 w-[360px] h-[360px] bg-brand-pink/30 blur-[130px] rounded-full pointer-events-none" />

      <div className="container mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-5 mb-12 lg:mb-14">
          <div className="anim-sg opacity-0 inline-flex">
            <SectionBadge variant="pink">
              <Ruler size={14} className="mr-1.5" />
              Guia de Tamanhos
            </SectionBadge>
          </div>
          <h2 className="anim-sg opacity-0 text-5xl sm:text-6xl font-heading font-extrabold text-brand-black text-balance leading-tight">
            Tamanhos e posições de estampa
          </h2>
          <p className="anim-sg opacity-0 text-lg text-brand-black/70 max-w-2xl mx-auto font-medium">
            Cada modelo tem um tamanho máximo de estampa por posição. As medidas indicam a{' '}
            <strong className="text-brand-black">largura máxima</strong> da arte na frente, nas costas,
            na nuca e nas mangas. Selecione o modelo para ver os limites.
          </p>
        </div>

        {/* Seletor de modelos */}
        <div className="anim-sg opacity-0 flex flex-wrap justify-center gap-3 mb-12">
          {MODELOS.map((m) => {
            const isActive = m.key === ativo
            return (
              <button
                key={m.key}
                type="button"
                onClick={() => setAtivo(m.key)}
                aria-pressed={isActive}
                className={`rounded-full px-5 py-2.5 text-sm font-bold transition-all duration-300 border ${
                  isActive
                    ? 'bg-brand-orange text-brand-beige border-brand-orange shadow-lg'
                    : 'bg-white text-brand-black/70 border-brand-black/15 hover:border-brand-orange/50 hover:text-brand-black'
                }`}
              >
                {m.nome}
              </button>
            )
          })}
        </div>

        {/* Conteúdo do modelo selecionado — animação CSS (re-roda a cada troca de aba) */}
        <div key={modelo.key} className="animate-in fade-in slide-in-from-bottom-3 duration-500">
          <div className="flex items-center justify-center gap-3 mb-8">
            <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-brand-black">
              {modelo.nome}
            </h3>
            <span className="hidden sm:inline-flex items-center text-xs font-bold uppercase tracking-wider text-brand-orange bg-brand-orange/10 border border-brand-orange/20 px-3 py-1.5 rounded-full">
              {modelo.resumo}
            </span>
          </div>

          {modelo.tipo === 'mockups' ? (
            <div className="grid sm:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
              {modelo.layouts.map((layout) => (
                <figure
                  key={layout.src}
                  className="group rounded-3xl bg-white border border-brand-black/10 shadow-lg overflow-hidden hover:shadow-2xl hover:border-brand-orange/30 transition-all duration-300"
                >
                  <div className="bg-brand-beige/30 p-4">
                    <Image
                      src={layout.src}
                      alt={layout.alt}
                      width={IMG_W}
                      height={IMG_H}
                      sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 520px"
                      className="w-full h-auto rounded-xl"
                    />
                  </div>
                  <figcaption className="flex items-center gap-2 px-5 py-4 text-sm font-bold text-brand-black/80 border-t border-brand-black/5">
                    <Ruler size={15} className="text-brand-orange shrink-0" />
                    {layout.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          ) : (
            <div className="max-w-2xl mx-auto">
              <div className="rounded-3xl bg-brand-beige/50 border border-brand-black/10 shadow-lg p-8 sm:p-10 text-center">
                <div className="inline-flex w-14 h-14 rounded-2xl bg-brand-orange items-center justify-center text-brand-beige shadow-lg mb-5">
                  {modelo.key === 'cropped' ? <Ban size={26} strokeWidth={2.2} /> : <FileText size={26} strokeWidth={2.2} />}
                </div>
                {modelo.key === 'cropped' ? (
                  <p className="text-xl sm:text-2xl font-heading font-extrabold text-brand-black leading-snug">
                    Segue o mesmo tamanho de largura das estampas, mas a{' '}
                    <span className="bg-[#F46A6A] text-white px-2 py-0.5 rounded-md whitespace-nowrap">
                      altura não pode passar de 24 cm
                    </span>
                    .
                  </p>
                ) : (
                  <p className="text-xl sm:text-2xl font-heading font-extrabold text-brand-black leading-snug">
                    {modelo.nota}
                  </p>
                )}
              </div>
            </div>
          )}
        </div>

        <p className="anim-sg opacity-0 text-center text-sm text-brand-black/50 italic mt-10">
          As medidas representam a largura máxima da estampa em cada posição. Posições podem ser
          combinadas conforme os exemplos acima.
        </p>
      </div>
    </section>
  )
}
