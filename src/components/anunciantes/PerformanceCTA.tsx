'use client'

import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { Button } from '@/components/ui/button'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP)
}

export function PerformanceCTA({
  title = "Transforme seu lançamento em um movimento.",
  description = "Use a força de fãs reais espalhando sua música pela região. Chega de investir no escuro e torcer por resultados: acompanhe cada vídeo aprovado e o impacto autêntico do seu projeto direto do seu dashboard.",
  buttonText = "Começar Agora"
}: {
  title?: string
  description?: string
  buttonText?: string
}) {
  const container = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {

      


      gsap.from('.anim-cta-text', {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: container.current,
          start: 'top 70%',
        },
      })
    },
    { scope: container },
  )

  return (
    <section ref={container} className="bg-[#121212] py-24 border-t border-white/5">
      <div className="container mx-auto max-w-5xl px-6 lg:px-8 text-center">
        
        <h2 className="anim-cta-text text-5xl sm:text-6xl font-extrabold leading-tight tracking-tight mb-8">
          {title}
        </h2>
        <p className="anim-cta-text text-xl text-zinc-300 mb-12 max-w-3xl mx-auto leading-relaxed font-medium">
         {description}
        </p>

        <div className="anim-cta-text">
          <Button className="h-16 rounded-full bg-brand-purple px-10 text-lg font-bold text-black hover:bg-brand-purple-light transition-colors">
            {buttonText}
          </Button>
        </div>
      </div>
    </section>
  )
}
