'use client'

import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP)
}

export function MeasurementSection() {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      // Text Animation
      gsap.from('.measure-text', {
        x: -30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 70%',
        }
      })

      // Image/Mockup Block Animation
      gsap.from('.measure-visual', {
        x: 30,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 70%',
        }
      })
      
      // Animate the Recharts dot (since recharts handles the line drawing natively via isAnimationActive)
      gsap.set('.recharts-active-dot', { scale: 0, opacity: 0, transformOrigin: 'center center' })
      gsap.to('.recharts-active-dot', {
        scale: 1,
        opacity: 1,
        duration: 0.6,
        ease: 'back.out(2.5)',
        delay: 1.5, // waits for recharts initial animation
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 50%',
        }
      })
    },
    { scope: containerRef }
  )

  return (
    <section ref={containerRef} className="bg-[#121212] py-32 border-t border-white/5 overflow-hidden">
      <div className="container mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-8 items-center">
           
           {/* Left Column: Text */}
           <div className="flex flex-col items-start max-w-xl mx-auto lg:mx-0">
             <p className="measure-text text-sm font-bold tracking-wide text-zinc-400 mb-6 uppercase">
               Ferramentas de Medição
             </p>
             <h2 className="measure-text text-5xl sm:text-6xl font-extrabold tracking-tight text-white mb-8 leading-[1.1]">
               Mensure o que realmente importa.
             </h2>
             <p className="measure-text text-lg text-zinc-300 font-medium mb-10 leading-relaxed">
               Esqueça as métricas de vaidade. Nossa plataforma te dá uma visão clara do impacto da campanha em todo o funil — desde o alcance dos vídeos até a conversão de ingressos resgatados —, para que você comprove o sucesso do seu investimento.
             </p>
             <div className="measure-text">
               <Button className="rounded-full bg-white text-black font-bold px-8 h-12 hover:bg-zinc-200 transition-colors">
                 Comece agora
               </Button>
             </div>
           </div>

           {/* Right Column: Visual Mockup */}
           <div className="measure-visual relative w-full h-[500px] flex justify-center items-center lg:justify-end">
              
              {/* Main Image Content */}
              <div className="w-[85%] h-[90%] relative rounded-3xl overflow-hidden shadow-2xl">
                 <Image src="/image5.webp" alt="" fill sizes="(max-width: 1024px) 85vw, 50vw" className="object-cover" />
                 {/* Darkening gradient over image so stats pop */}
                 <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-black/20"></div>
              </div>

           </div>

        </div>
      </div>
    </section>
  )
}
