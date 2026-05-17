'use client'

import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { Button } from '@/components/ui/button'

gsap.registerPlugin(useGSAP)

export function HeroAnunciantes() {
  const container = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      gsap.from('.anim-up', {
        y: 30,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: 'power3.out',
      })
    },
    { scope: container },
  )

  return (
    <section ref={container} className="bg-[#121212] pt-32 pb-16 text-center flex flex-col items-center">
      <div className="container mx-auto max-w-4xl px-6 lg:px-8 flex flex-col items-center">
        
        <h1 className="anim-up text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight mb-8">
          Introdução às Campanhas <br className="hidden sm:block" />na <span className="text-brand-purple">hitlovers</span>
        </h1>
        
        <p className="anim-up text-xl text-zinc-300 mb-12 max-w-2xl leading-relaxed font-medium">
          Confira o nosso guia passo a passo e aprenda a criar, gerenciar o budget 
          em Escrow e escalar a sua música ou evento através do nosso Dashboard inteligente.
        </p>

        <div className="anim-up flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-4">
          <Button className="h-14 w-full sm:w-auto rounded-full bg-white px-8 text-base font-bold text-black hover:bg-zinc-200">
            Crie uma campanha
          </Button>
          <Button variant="outline" className="h-14 w-full sm:w-auto rounded-full border-zinc-600 bg-transparent px-8 text-base font-bold text-white hover:bg-white/10">
            Vamos conversar
          </Button>
        </div>
      </div>
    </section>
  )
}

