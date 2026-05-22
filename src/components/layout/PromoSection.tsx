'use client'

import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import {
  SmileySticker,
  StayBoldSticker,
  SparkleElement,
  GridGlobe,
  RoundedCross
} from '@/components/ui/BrandElements'

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
          stagger: 0.15,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 65%',
          }
        })

        // Infinite floating loop 1 (Smiley)
        gsap.to('.promo-sticker-float-1', {
          y: '-=14',
          rotation: '+=4',
          duration: 3,
          yoyo: true,
          repeat: -1,
          ease: 'sine.inOut'
        })

        // Infinite floating loop 2 (Stay Bold)
        gsap.to('.promo-sticker-float-2', {
          y: '+=10',
          rotation: '-=6',
          duration: 2.6,
          yoyo: true,
          repeat: -1,
          ease: 'sine.inOut'
        })

        // Infinite floating loop 3 (Sparkle / Globe)
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
    <section ref={containerRef} className="bg-black py-32 overflow-hidden relative">
      <div className="container mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-8 items-center">
           
             {/* Left Column: Text */}
             <div className="flex flex-col items-start max-w-xl mx-auto lg:mx-0 relative">
              <p className="measure-text text-sm font-bold tracking-wide text-zinc-400 mb-6 uppercase">
                Alta Lucratividade
              </p>
              <h2 className="measure-text text-5xl sm:text-6xl font-extrabold tracking-tight text-white mb-8 leading-[1.1] relative">
                A moda premium que vende sozinha.
                {/* Sparkle decorative element on title */}
                <SparkleElement className="absolute -top-10 -right-4 w-8 h-8 fill-brand-green hidden sm:block opacity-70" />
              </h2>
              <p className="measure-text text-lg text-zinc-300 font-medium mb-10 leading-relaxed">
                Abasteça seu estoque com peças de caimento impecável e algodão premium Fio 30.1 Menegotti. Garanta margens de até 200% de lucro e conte com material de divulgação profissional gratuito.
              </p>
              <div className="measure-text">
                <a
                  href="https://wa.me/5562999895357?text=Olá%20quero%20me%20tornar%20um%20revendedor%20credenciado%20da%20Tshirteria"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="rounded-full bg-white text-black font-bold px-8 h-12 hover:bg-zinc-200 transition-colors">
                    Seja um revendedor
                  </Button>
                </a>
              </div>
            </div>

           {/* Right Column: Visual Mockup */}
           <div className="measure-visual relative w-full h-[600px] flex justify-center items-center lg:justify-end">
              
              {/* Supporting grid globe in background */}
              <div className="promo-sticker promo-sticker-float-3 absolute -top-12 left-0 lg:left-12 opacity-30 select-none z-0">
                <GridGlobe className="w-36 h-28 text-brand-green" />
              </div>

               {/* Main Image Content */}
               <div className="w-full lg:w-[85%] h-full relative rounded-[2rem] overflow-hidden shadow-2xl border-2 border-zinc-800">
                  <Image src="/1.jpg" alt="Casal vestindo peças Tshirteria" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
                  {/* Darkening gradient over image so stats pop */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-transparent"></div>
               </div>

               {/* STICKER 1: Yellow Smiley (Top-Right overlap) */}
               <div className="promo-sticker promo-sticker-float-1 absolute -top-6 -right-4 lg:right-[-12px] z-20 w-24 h-24 sm:w-28 sm:h-28">
                 <SmileySticker className="w-full h-full" />
               </div>

               {/* STICKER 2: Stay Bold Sticker (Bottom-Left overlap) */}
               <div className="promo-sticker promo-sticker-float-2 absolute -bottom-8 left-[-10px] lg:left-[8%] z-20 w-24 h-20 sm:w-28 sm:h-24">
                 <StayBoldSticker className="w-full h-full" />
               </div>

               {/* STICKER 3: Green Flower (Top-Left overlap) */}
               <div className="promo-sticker promo-sticker-float-3 absolute -top-8 -left-4 lg:left-0 z-20 w-20 h-20 sm:w-24 sm:h-24">
                 <RoundedCross className="w-full h-full fill-brand-green" shadow={true} />
               </div>

              {/* Sparkle Element floating next to the image */}
              <div className="promo-sticker promo-sticker-float-3 absolute bottom-12 right-[-20px] lg:right-[-30px] z-20">
                <SparkleElement className="w-10 h-10 fill-brand-purple" />
              </div>

           </div>

        </div>
      </div>
    </section>
  )
}
