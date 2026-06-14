'use client'

import { useState, useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Play } from 'lucide-react'
import Image from 'next/image'
import { SectionBadge } from '@/components/ui/SectionBadge'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP)
}

export function VideoInstitucional() {
  const containerRef = useRef<HTMLElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const videoId = "HwD85Ym7nL4"

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      if (!prefersReducedMotion) {
        gsap.fromTo('.anim-video-text', 
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top 80%',
            }
          }
        )

        gsap.fromTo('.anim-video-player',
          { scale: 0.9, opacity: 0, y: 40 },
          {
            scale: 1,
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: '.anim-video-player',
              start: 'top 85%',
            }
          }
        )
      } else {
        gsap.set(['.anim-video-text', '.anim-video-player'], { opacity: 1, y: 0, scale: 1 })
      }
    },
    { scope: containerRef }
  )

  return (
    <section ref={containerRef} className="bg-brand-pink py-24 lg:py-32 overflow-hidden border-t border-brand-black/5 relative">
      {/* Background glow para dar uma profundidade cinematográfica */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[400px] bg-brand-purple/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <SectionBadge variant="dark-pink" className="anim-video-text opacity-0 translate-y-10 mb-4">
            Por dentro da marca
          </SectionBadge>
          <h2 className="anim-video-text opacity-0 translate-y-10 text-5xl sm:text-6xl font-heading font-extrabold mb-6 text-brand-black leading-tight">
            Somos Lamell Store.
          </h2>
          <p className="anim-video-text opacity-0 translate-y-10 text-xl text-brand-black/70 font-medium leading-relaxed">
            Conheça a nossa operação e veja como produzimos as peças premium que chegam até você. Rigor e qualidade em cada etapa.
          </p>
        </div>

        {/* Video Player Wrapper */}
        <div className="anim-video-player opacity-0 translate-y-10 scale-95 max-w-5xl mx-auto w-full aspect-video bg-[#111] rounded-[2rem] sm:rounded-[3rem] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.8)] border border-brand-black/10 relative group">
          
          {!isPlaying ? (
            <button 
              onClick={() => setIsPlaying(true)}
              className="absolute inset-0 w-full h-full cursor-pointer focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-purple"
              aria-label="Tocar vídeo institucional"
            >
              {/* Thumbnail Customizada (YouTube MaxRes Default) */}
              <div className="absolute inset-0 w-full h-full">
                <Image 
                  src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                  alt="Lamell Store Operação"
                  fill
                  className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1200px) 100vw, 1200px"
                />
              </div>
              
              {/* Overlay Escuro para o texto/botão saltar */}
              <div className="absolute inset-0 bg-brand-black/15 group-hover:bg-brand-black/10 transition-colors duration-500" />
              
              {/* Botão de Play */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-brand-orange text-white flex items-center justify-center shadow-2xl border-4 border-white transition-all group-hover:scale-110 active:scale-90 group-hover:bg-brand-orange/90">
                 <Play size={36} fill="currentColor" className="ml-1 text-white" />
              </div>
            </button>
          ) : (
            <iframe
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
              title="Lamell Store Institucional"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full border-none"
            ></iframe>
          )}
          
        </div>
      </div>
    </section>
  )
}
