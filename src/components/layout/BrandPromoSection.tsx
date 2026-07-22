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
  ConfidenceClubSticker,
  GoodDaysSticker,
  NoBadVibesSticker,
  SparkleElement,
  GridGlobe,
  RoundedCross
} from '@/components/ui/BrandElements'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP)
}

interface BrandPromoSectionProps {
  tag: string
  title: string
  description: string
  buttonText?: string
  buttonLink?: string
  imagePath: string
  imageAlt: string
  videoPath?: string
  posterPath?: string
  isImageLeft?: boolean
  stickers?: {
    smiley?: boolean
    stayBold?: boolean
    goodDays?: boolean
    noBadVibes?: boolean
    confidenceClub?: boolean
    globe?: boolean
    greenFlower?: boolean
    sparkle?: 'orange' | 'green' | 'blue' | 'purple' | 'pink'
  }
}

export function BrandPromoSection({
  tag,
  title,
  description,
  buttonText,
  buttonLink = '#',
  imagePath,
  imageAlt,
  videoPath,
  posterPath,
  isImageLeft = false,
  stickers = {}
}: BrandPromoSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      // Verifica prefers-reduced-motion para acessibilidade
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

      // Text Animation
      gsap.from('.section-text', {
        x: isImageLeft ? 30 : -30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 70%',
        }
      })

      // Image/Mockup Block Animation
      gsap.from('.section-visual', {
        x: isImageLeft ? -30 : 30,
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

        // Infinite floating loops
        gsap.to('.float-1', {
          y: '-=12',
          rotation: '+=4',
          duration: 3,
          yoyo: true,
          repeat: -1,
          ease: 'sine.inOut'
        })

        gsap.to('.float-2', {
          y: '+=10',
          rotation: '-=6',
          duration: 2.6,
          yoyo: true,
          repeat: -1,
          ease: 'sine.inOut'
        })

        gsap.to('.float-3', {
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

  // Sparkle color selector
  const getSparkleClass = () => {
    switch (stickers.sparkle) {
      case 'orange':
        return 'fill-brand-orange'
      case 'green':
        return 'fill-brand-green'
      case 'blue':
        return 'fill-brand-blue'
      case 'purple':
        return 'fill-brand-purple'
      case 'pink':
        return 'fill-brand-pink'
      default:
        return 'fill-brand-orange'
    }
  }

  return (
    <section ref={containerRef} className="bg-brand-pink py-32 overflow-hidden relative">
      <div className="container mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-8 items-center">
           
           {/* Column: Text */}
           <div className={`flex flex-col items-start max-w-xl mx-auto lg:mx-0 relative ${isImageLeft ? 'order-1 lg:order-2 lg:pl-12' : 'order-1'}`}>
             <p className="section-text text-sm font-bold tracking-wide text-brand-orange mb-6 uppercase">
               {tag}
             </p>
             <h2 className="section-text text-5xl sm:text-6xl font-heading font-extrabold tracking-tight text-brand-black mb-8 leading-[1.1] relative">
               {title}
               {stickers.sparkle && (
                 <SparkleElement className={`absolute -top-10 -right-4 w-8 h-8 hidden sm:block opacity-70 ${getSparkleClass()}`} />
               )}
             </h2>
             <p className="section-text text-lg text-brand-black/75 font-medium mb-10 leading-relaxed">
               {description}
             </p>
             {buttonText && (
               <div className="section-text">
                 <a href={buttonLink}>
                   <Button className="rounded-full bg-white text-black font-bold px-8 h-12 hover:bg-zinc-200 transition-colors cursor-pointer">
                     {buttonText}
                   </Button>
                 </a>
               </div>
             )}
           </div>

           {/* Column: Visual Mockup */}
           <div className={`section-visual relative w-full h-[600px] flex justify-center items-center ${isImageLeft ? 'order-2 lg:order-1 lg:justify-start' : 'order-2 lg:justify-end'}`}>
              
              {/* Supporting globe in background */}
              {stickers.globe && (
                <div className="promo-sticker float-3 absolute -top-12 left-0 lg:left-12 opacity-30 select-none z-0">
                  <GridGlobe className="w-36 h-28 text-brand-green" />
                </div>
              )}

              {/* Main Image Content */}
              <div className="w-full lg:w-[85%] h-full relative rounded-[2rem] overflow-hidden shadow-2xl border-2 border-zinc-800">
                 {videoPath ? (
                   <video
                     src={videoPath}
                     poster={posterPath ?? imagePath}
                     autoPlay
                     muted
                     loop
                     playsInline
                     aria-label={imageAlt}
                     className="w-full h-full object-cover"
                   />
                 ) : (
                   <Image src={imagePath} alt={imageAlt} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
                 )}
                 {/* Darkening gradient over image */}
                 <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-transparent"></div>
              </div>

              {/* Optional Stickers overlaid on top of the image */}
              
              {/* Smiley sticker (Top-Right overlap) */}
              {stickers.smiley && (
                <div className="promo-sticker float-1 absolute -top-6 -right-4 lg:right-[-12px] z-20 w-24 h-24 sm:w-28 sm:h-28">
                  <SmileySticker className="w-full h-full" />
                </div>
              )}

              {/* Stay Bold sticker (Bottom-Left overlap) */}
              {stickers.stayBold && (
                <div className="promo-sticker float-2 absolute -bottom-8 left-[-10px] lg:left-[8%] z-20 w-24 h-18 sm:w-28 sm:h-24">
                  <StayBoldSticker className="w-full h-full" />
                </div>
              )}

              {/* Good Days sticker */}
              {stickers.goodDays && (
                <div className="promo-sticker float-1 absolute -top-8 -left-4 lg:left-[-12px] z-20 w-24 h-24 sm:w-28 sm:h-28">
                  <GoodDaysSticker className="w-full h-full" />
                </div>
              )}

              {/* No Bad Vibes sticker */}
              {stickers.noBadVibes && (
                <div className="promo-sticker float-2 absolute -bottom-8 right-[-10px] lg:right-[8%] z-20 w-28 h-16 sm:w-36 sm:h-20">
                  <NoBadVibesSticker className="w-full h-full" />
                </div>
              )}

              {/* Confidence Club sticker */}
              {stickers.confidenceClub && (
                <div className="promo-sticker float-1 absolute -top-10 left-[-12px] lg:left-[6%] z-20 w-28 h-20 sm:w-36 sm:h-28">
                  <ConfidenceClubSticker className="w-full h-full" />
                </div>
              )}

              {/* Green Flower sticker */}
              {stickers.greenFlower && (
                <div className="promo-sticker float-2 absolute -bottom-8 left-[-10px] lg:left-[8%] z-20 w-20 h-20 sm:w-24 sm:h-24">
                  <RoundedCross className="w-full h-full fill-brand-green" shadow={true} />
                </div>
              )}

              {/* Subtle sparkle ornament */}
              {stickers.sparkle && (
                <div className="promo-sticker float-3 absolute bottom-12 right-[-20px] lg:right-[-30px] z-20">
                  <SparkleElement className={`w-10 h-10 ${getSparkleClass()}`} />
                </div>
              )}

           </div>

        </div>
      </div>
    </section>
  )
}
