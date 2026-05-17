'use client'

import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { DemoForm } from './DemoForm'

gsap.registerPlugin(useGSAP)

export function DemoHero() {
  const container = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const reduce =
        typeof window !== 'undefined' &&
        window.matchMedia('(prefers-reduced-motion: reduce)').matches
      if (reduce) return

      gsap.from('[data-animate="card"]', {
        y: 30,
        opacity: 0,
        duration: 0.65,
        ease: 'power3.out',
      })
      gsap.from('[data-animate="form"]', {
        y: 20,
        opacity: 0,
        duration: 0.65,
        ease: 'power3.out',
        delay: 0.15,
      })
    },
    { scope: container },
  )

  return (
    <section
      ref={container}
      className="flex min-h-[calc(100vh-80px)] flex-col lg:flex-row"
    >
      {/* Painel esquerdo — visual */}
      <div
        className="relative flex w-full items-center justify-center overflow-hidden bg-cover bg-center px-6 py-16 lg:w-1/2 lg:px-12 lg:py-24"
        style={{ backgroundImage: "url('/events.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/60" aria-hidden="true" />

        <div
          data-animate="card"
          className="relative z-10 w-full max-w-lg rounded-2xl bg-[#1a1a1a]/80 p-8 backdrop-blur-md border border-white/5 lg:p-10"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-3 py-1.5 text-xs font-medium text-white">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
            </span>
            Vagas limitadas esta semana
          </div>

          <h1 className="mt-6 text-4xl font-semibold leading-[1.1] tracking-tight text-white lg:text-5xl">
            Descubra como{' '}
            <span className="italic font-light text-brand-purple">lotar</span>{' '}
            seu evento e{' '}
            <span className="italic font-light text-brand-purple">estourar</span>{' '}
            sua música
          </h1>
          
          <p className="mt-6 text-base leading-relaxed text-zinc-300 lg:text-lg">
            Agende uma conversa com nossa equipe e entenda como a Hitlovers transforma seus fãs em promotores reais. Pague apenas por métricas orgânicas validadas por Inteligência Artificial.
          </p>

          <div className="mt-8 rounded-xl bg-brand-purple/10 border border-brand-purple/20 p-5">
            <p className="text-sm leading-relaxed text-zinc-200">
              &ldquo;Trocar cortesias por vídeos reais dos nossos clientes gerou um hype absurdo. A Hitlovers nos ajudou a vender mais lotes do que qualquer campanha de Meta Ads anterior.&rdquo;
            </p>
            <div className="mt-4 flex items-center gap-3 border-t border-white/10 pt-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-brand-purple to-brand-purple-pressed text-sm font-bold text-black">
                LM
              </div>
              <div>
                <p className="text-sm font-semibold text-white">Lucas M.</p>
                <p className="text-xs text-zinc-400">Selo Independente</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Painel direito — formulário */}
      <div
        data-animate="form"
        className="flex w-full items-center justify-center bg-[#0e0e0e] px-6 py-16 lg:w-1/2 lg:px-16 lg:py-24"
      >
        <DemoForm />
      </div>
    </section>
  )
}
