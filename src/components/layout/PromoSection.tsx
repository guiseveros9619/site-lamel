'use client'

import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { RoundedCross } from '@/components/ui/BrandElements'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP)
}

export function PromoSection() {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      // Verifica prefers-reduced-motion para acessibilidade
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

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

      if (!prefersReducedMotion) {
        // Entrance animation for stickers
        gsap.from('.promo-sticker', {
          scale: 0,
          rotation: () => gsap.utils.random(-60, 60),
          opacity: 0,
          duration: 1,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 65%',
          }
        })

        // Infinite floating loop (Flower)
        gsap.to('.promo-sticker-float-3', {
          y: '-=8',
          x: '+=6',
          duration: 3.5,
          yoyo: true,
          repeat: -1,
          ease: 'sine.inOut'
        })
      }
    },
    { scope: containerRef }
  )

  return (
    <section ref={containerRef} className="bg-brand-pink py-32 overflow-hidden relative">
      <div className="container mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-8 items-center">
           
             {/* Left Column: Text */}
             <div className="flex flex-col items-start max-w-xl mx-auto lg:mx-0 relative">
              <p className="measure-text text-sm font-bold tracking-wide text-brand-orange mb-6 uppercase">
                Alta Lucratividade
              </p>
              <h2 className="measure-text text-5xl sm:text-6xl font-extrabold tracking-tight text-brand-black mb-8 leading-[1.1] relative">
                A moda premium que vende sozinha.
              </h2>
              <p className="measure-text text-lg text-brand-black/75 font-medium mb-10 leading-relaxed">
                Abasteça seu estoque com peças de caimento impecável e algodão premium Fio 30.1 Menegotti. Garanta margens de até 200% de lucro e conte com material de divulgação profissional gratuito.
              </p>
              <div className="measure-text">
                <a
                  href="https://api.whatsapp.com/send/?phone=5562999895357&text=Ol%C3%A1+quero+me+tornar+um+revendedor+credenciado+da+Lamell+Store&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="rounded-full bg-white text-black font-bold px-8 h-12 hover:bg-zinc-200 transition-colors cursor-pointer">
                    Seja um revendedor
                  </Button>
                </a>
              </div>
            </div>

           {/* Right Column: Visual Mockup */}
           <div className="measure-visual relative w-full h-[600px] flex justify-center items-center lg:justify-end">

               {/* Main Image Content */}
               <div className="w-full lg:w-[85%] h-full relative rounded-[2rem] overflow-hidden shadow-2xl border-2 border-zinc-800">
                  <Image src="/1.jpg" alt="Casal vestindo peças Lamell Store" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
                  {/* Darkening gradient over image so stats pop */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-transparent"></div>
               </div>

               {/* Flower (Top-Left overlap) */}
               <div className="promo-sticker promo-sticker-float-3 absolute -top-8 -left-4 lg:left-0 z-20 w-20 h-20 sm:w-24 sm:h-24">
                 <RoundedCross className="w-full h-full fill-brand-green" shadow={true} />
               </div>

           </div>

        </div>
      </div>
    </section>
  )
}
