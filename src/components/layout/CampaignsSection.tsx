'use client'

import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight, Music, Ticket, Sparkles } from 'lucide-react'
import Link from 'next/link'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP)
}

export function CampaignsSection() {
  const containerRef = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      // Header Animation
      gsap.from('.anim-camp-header', {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
        }
      })

      // Cards Animation
      gsap.from('.anim-camp-card', {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.anim-camp-card', // Trigger on the cards container area
          start: 'top 85%',
        }
      })
    },
    { scope: containerRef }
  )

  return (
    <section ref={containerRef} className="bg-[#121212] py-24 overflow-hidden">
      <div className="container mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header Part */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          <h2 className="anim-camp-header text-5xl sm:text-6xl font-extrabold leading-tight tracking-tight text-balance">
            Todo mundo ganha com o Hype.
          </h2>
          <div className="anim-camp-header flex flex-col items-start lg:pt-4">
            <p className="text-xl text-zinc-300 leading-relaxed font-medium mb-6">
              Nossa plataforma atende desde a gravadora que precisa emplacar um Top 50, até o fã de carteirinha que só quer acessar o camarim do seu artista favorito.
            </p>
          </div>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          
          {/* Card 1: Gravadoras */}
          <Link href="/artistas" className="anim-camp-card flex flex-col group cursor-pointer bg-[#1c1c1c] p-8 rounded-[2rem] border border-white/5 hover:border-white/10 transition-colors text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple">
            <div className="w-14 h-14 rounded-2xl bg-brand-purple/10 text-brand-purple flex items-center justify-center mb-8">
               <Music size={28} aria-hidden="true" />
            </div>
            <h3 className="text-3xl font-extrabold mb-4">Artistas & Escritórios</h3>
            <p className="text-zinc-400 leading-relaxed mb-8 flex-grow font-medium">
              Faça sua música subir pros charts regionais engajando milhares de criadores que falam a língua do público local, simultaneamente.
            </p>
            <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center transition-transform group-hover:translate-x-2">
              <ArrowRight size={24} aria-hidden="true" />
            </div>
          </Link>

          {/* Card 2: Produtores */}
          <Link href="/eventos" className="anim-camp-card flex flex-col group cursor-pointer bg-[#1c1c1c] p-8 rounded-[2rem] border border-white/5 hover:border-white/10 transition-colors text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple">
            <div className="w-14 h-14 rounded-2xl bg-blue-500/10 text-blue-400 flex items-center justify-center mb-8">
               <Ticket size={28} aria-hidden="true" />
            </div>
            <h3 className="text-3xl font-extrabold mb-4">Eventos & Produtores</h3>
            <p className="text-zinc-400 leading-relaxed mb-8 flex-grow font-medium">
              Transforme cada festa numa experiência viral. Crie promotores locais em massa distribuindo cortesias e acessos VIP de forma controlada.
            </p>
            <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center transition-transform group-hover:translate-x-2">
              <ArrowRight size={24} aria-hidden="true" />
            </div>
          </Link>

          {/* Card 3: Creators */}
          <Link href="/" className="anim-camp-card flex flex-col group cursor-pointer bg-[#1c1c1c] p-8 rounded-[2rem] border border-white/5 hover:border-white/10 transition-colors text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple">
            <div className="w-14 h-14 rounded-2xl bg-[#fcd34d]/20 text-[#fcd34d] flex items-center justify-center mb-8">
               <Sparkles size={28} aria-hidden="true" />
            </div>
            <h3 className="text-3xl font-extrabold mb-4">Creators e Fãs</h3>
            <p className="text-zinc-400 leading-relaxed mb-8 flex-grow font-medium">
              Não importa se você tem 500 ou 50k seguidores. Seu engajamento autêntico vale PIX na hora ou experiências inesquecíveis na sua cidade.
            </p>
            <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center transition-transform group-hover:translate-x-2">
              <ArrowRight size={24} aria-hidden="true" />
            </div>
          </Link>

        </div>
      </div>
    </section>
  )
}

