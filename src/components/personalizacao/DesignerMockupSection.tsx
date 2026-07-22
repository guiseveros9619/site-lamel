'use client'

import { useRef } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Palette, CheckCircle2, Sparkles } from 'lucide-react'
import { SectionBadge } from '@/components/ui/SectionBadge'

// Galeria de personalizações reais, modelos e peças dobradas intercalados.
const EXAMPLE_IMAGES = [
  { src: '/galeria/g-4465.jpg', alt: 'Camiseta personalizada Lamell, modelo com estampa Hello Kitty Baseball' },
  { src: '/galeria/g-9844.jpg', alt: 'Peças personalizadas Lamell dobradas, estampas cristãs' },
  { src: '/galeria/g-8461.jpg', alt: 'Camiseta personalizada Lamell, modelo com estampa Há Poder no Nome de Jesus' },
  { src: '/galeria/g-8374.jpg', alt: 'Camisetas personalizadas Lamell, casal com estampa de leão' },
  { src: '/galeria/g-8297.jpg', alt: 'Peças personalizadas Lamell dobradas, coleção em tons terrosos' },
  { src: '/galeria/g-9875.jpg', alt: 'Camisetas personalizadas Lamell, casal com estampas de leão e cruz' },
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

        {/* Painel único, arte + valor, estilo elegante do site */}
        <article className="anim-dms-card opacity-0 group bg-white rounded-[2rem] overflow-hidden border border-brand-black/5 shadow-xl hover:shadow-2xl transition-all duration-500 max-w-5xl mx-auto grid lg:grid-cols-2 items-stretch">
          {/* Coluna visual, showcase da arte */}
          <div className="relative min-h-[300px] lg:min-h-full overflow-hidden bg-white border-b lg:border-b-0 lg:border-r border-brand-black/5">
            <Image
              src="/equipe-grafica.png"
              alt="Exemplos de estampas e artes criadas pela equipe gráfica parceira Lamell"
              fill
              sizes="(max-width: 1024px) 100vw, 520px"
              className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-black/25 via-transparent to-transparent" />
            <div className="absolute top-5 left-5 w-12 h-12 rounded-2xl bg-brand-orange flex items-center justify-center text-brand-beige shadow-lg">
              <Palette size={22} strokeWidth={2.2} />
            </div>
          </div>

          {/* Coluna de conteúdo, serviço + valor */}
          <div className="p-8 lg:p-10 flex flex-col justify-center gap-5">
            <h3 className="text-3xl sm:text-4xl font-heading font-extrabold leading-tight tracking-tight">
              Sua arte exclusiva,<br /><span className="font-heading-italic">criada do zero.</span>
            </h3>

            <p className="text-sm sm:text-base text-brand-black/70 font-medium leading-relaxed">
              Você envia a referência, nossa equipe cria o resto.
            </p>

            <ul className="flex flex-col gap-3">
              <li className="flex items-start gap-2.5 text-sm font-semibold text-brand-black/80">
                <CheckCircle2 size={18} className="text-brand-orange shrink-0 mt-0.5" />
                Até 2 ajustes inclusos por estampa
              </li>
              <li className="flex items-start gap-2.5 text-sm font-semibold text-brand-black/80">
                <CheckCircle2 size={18} className="text-brand-orange shrink-0 mt-0.5" />
                100% alinhada à identidade da sua marca
              </li>
              <li className="flex items-start gap-2.5 text-sm font-semibold text-brand-black/80">
                <CheckCircle2 size={18} className="text-brand-orange shrink-0 mt-0.5" />
                Fica salva para os próximos pedidos, sem custo
              </li>
            </ul>

            {/* Bloco de preço, única ocorrência do valor */}
            <div className="mt-1 rounded-2xl bg-brand-pink/50 p-5">
              <span className="block text-[11px] font-bold uppercase tracking-widest text-brand-orange">
                Valor da arte
              </span>
              <span className="mt-1 flex items-start font-heading font-extrabold leading-[0.9] tracking-tight">
                <span className="text-xl sm:text-2xl mt-1 mr-0.5">R$</span>
                <span className="text-5xl sm:text-6xl">50</span>
              </span>
              <span className="mt-1 block text-xs font-semibold text-brand-black/60">
                Pague uma vez · use para sempre
              </span>
            </div>
          </div>
        </article>

        {/* Galeria de exemplos, mais imagens reforçando o serviço */}
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
