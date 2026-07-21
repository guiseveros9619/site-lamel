'use client'

import { useRef } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Palette, CheckCircle2, Sparkles } from 'lucide-react'
import { SectionBadge } from '@/components/ui/SectionBadge'

// Placeholder gallery — substituir por fotos reais de personalizações Lamell.
const EXAMPLE_IMAGES = [
  { src: '/3.jpg', alt: 'Exemplo de camiseta personalizada Lamell — estampa frontal' },
  { src: '/10.jpg', alt: 'Exemplo de camiseta personalizada Lamell — peça oversized' },
  { src: '/16.jpg', alt: 'Exemplo de camiseta personalizada Lamell — gola alta' },
  { src: '/22.jpg', alt: 'Exemplo de camiseta personalizada Lamell — coleção infantil' },
  { src: '/19.jpg', alt: 'Exemplo de camiseta personalizada Lamell — estampa premium' },
  { src: '/12.jpg', alt: 'Exemplo de camiseta personalizada Lamell — caimento' },
] as const

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP)
}

/**
 * Seção exclusiva focada em DUAS coisas:
 *  1. Designer parceiro que desenvolve a arte do cliente do zero.
 *  2. Mockup digital pronto para aprovação em até 24 horas.
 *
 * O ponto é tirar a barreira de "preciso contratar um designer" e mostrar
 * que a Lamell entrega a operação completa: arte + mockup + aprovação rápida.
 */
export function DesignerMockupSection() {
  const containerRef = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      if (prefersReducedMotion) {
        gsap.set('.anim-dms-header, .anim-dms-card', { opacity: 1, y: 0 })
        return
      }

      gsap.fromTo(
        '.anim-dms-header',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%',
          },
        },
      )

      gsap.fromTo(
        '.anim-dms-card',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 70%',
          },
        },
      )
    },
    { scope: containerRef },
  )

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden bg-brand-pink py-24 lg:py-32 border-t border-brand-black/5"
    >
      {/* Decorações soft de fundo */}
      <div className="absolute top-0 right-0 w-[420px] h-[420px] bg-brand-orange/15 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[320px] h-[320px] bg-brand-purple/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        {/* Cabeçalho */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <div className="anim-dms-header opacity-0 inline-flex">
            <SectionBadge variant="orange">
              <Sparkles size={14} className="mr-1.5" />
              Atendimento Exclusivo
            </SectionBadge>
          </div>
          <h2 className="anim-dms-header opacity-0 text-5xl sm:text-6xl font-heading font-extrabold mt-6 mb-6 text-brand-black text-balance leading-tight">
            Sua marca merece uma identidade exclusiva.
          </h2>
          <p className="anim-dms-header opacity-0 text-lg sm:text-xl text-brand-black/75 font-medium leading-relaxed max-w-2xl mx-auto">
            Envie sua inspiração e nós transformamos em uma arte profissional. Além disso, armazenamos todos os arquivos para que você possa reproduzir seus modelos sempre que desejar, sem pagar novamente pela criação.
          </p>
        </div>

        {/* Dois cards em grid, cada um com capa de imagem */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
          {/* Card 1 — Designer parceiro */}
          <article className="anim-dms-card opacity-0 group bg-white rounded-3xl overflow-hidden border border-brand-black/5 shadow-xl hover:shadow-2xl hover:border-brand-orange/30 transition-all duration-500 flex flex-col">
            <div className="relative aspect-[4/3] overflow-hidden bg-white">
              <Image
                src="/equipe-grafica.png"
                alt="Exemplos de estampas e artes criadas pela equipe gráfica parceira Lamell"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 400px"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black/25 via-transparent to-transparent" />
              <div className="absolute top-4 left-4 w-11 h-11 rounded-xl bg-brand-orange flex items-center justify-center text-brand-beige shadow-lg">
                <Palette size={20} strokeWidth={2.2} />
              </div>
            </div>

            <div className="p-6 lg:p-7 flex flex-col gap-4">
              <span className="text-[11px] font-bold tracking-widest uppercase text-brand-orange">
                Equipe gráfica parceira
              </span>
              <h3 className="text-2xl font-heading font-extrabold text-brand-black leading-tight">
                Design cuida<br/>da sua arte.
              </h3>
              <p className="text-sm text-brand-black/70 font-medium leading-relaxed">
                Você envia a ideia e a referência visual, e nossa equipe gráfica parceira desenvolve a arte exclusiva do zero, alinhada à identidade da sua marca.
              </p>
              <ul className="flex flex-col gap-2 mt-1">
                <li className="flex items-center gap-2 text-xs font-bold text-brand-black/80">
                  <CheckCircle2 size={15} className="text-brand-orange shrink-0" />
                  Você envia apenas a ideia e a referência
                </li>
                <li className="flex items-center gap-2 text-xs font-bold text-brand-black/80">
                  <CheckCircle2 size={15} className="text-brand-orange shrink-0" />
                  Até 2 ajustes incluídos por estampa
                </li>
              </ul>
            </div>
          </article>

          {/* Card 2 — Valor da Arte (gêmeo do card esquerdo; valor no lugar da imagem) */}
          <article className="anim-dms-card opacity-0 group bg-white rounded-3xl overflow-hidden border border-brand-black/5 shadow-xl hover:shadow-2xl hover:border-brand-orange/30 transition-all duration-500 flex flex-col">
            {/* Valor em destaque — ocupa a mesma área (4/3) da imagem do card esquerdo */}
            <div className="relative aspect-[4/3] overflow-hidden bg-brand-pink/60 flex flex-col items-center justify-center text-center px-6">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-orange">
                Valor único
              </span>
              <span className="font-heading font-extrabold text-5xl sm:text-6xl leading-none mt-2">
                R$ 50,00
              </span>
            </div>

            <div className="p-6 lg:p-7 flex flex-col gap-4">
              <span className="text-[11px] font-bold tracking-widest uppercase text-brand-orange">
                Valor da arte
              </span>
              <h3 className="text-2xl font-heading font-extrabold text-brand-black leading-tight">
                R$ 50, cobrado<br/>uma única vez
              </h3>
              <p className="text-sm text-brand-black/70 font-medium leading-relaxed">
                Esse valor cobre o desenvolvimento técnico da sua estampa. Após a criação, a arte fica armazenada em nosso banco de dados, disponível para uso em todos os seus próximos pedidos, sem nenhum custo adicional.
              </p>
              <ul className="flex flex-col gap-2 mt-1">
                <li className="flex items-center gap-2 text-xs font-bold text-brand-black/80">
                  <CheckCircle2 size={15} className="text-brand-orange shrink-0" />
                  Cobrança única, sem mensalidades
                </li>
                <li className="flex items-center gap-2 text-xs font-bold text-brand-black/80">
                  <CheckCircle2 size={15} className="text-brand-orange shrink-0" />
                  Arte salva em nosso banco de dados para futuros pedidos, sem custo
                </li>
              </ul>
            </div>
          </article>
        </div>

        {/* Galeria de exemplos — mais imagens reforçando o serviço */}
        <div className="anim-dms-card opacity-0 mt-16 lg:mt-20">
          <p className="text-center text-xs sm:text-sm font-bold uppercase tracking-widest text-brand-black/50 mb-6">
            Exemplos de personalizações reais
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 max-w-6xl mx-auto">
            {EXAMPLE_IMAGES.map((img, i) => (
              <div
                key={i}
                className="group/thumb aspect-square overflow-hidden rounded-2xl border border-brand-black/10 shadow-md hover:shadow-xl hover:border-brand-orange/30 transition-all duration-300"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={400}
                  height={400}
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 200px"
                  className="w-full h-full object-cover group-hover/thumb:scale-110 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
