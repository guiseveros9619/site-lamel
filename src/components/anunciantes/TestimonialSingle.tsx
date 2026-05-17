'use client'

import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP)
}

interface TestimonialProps {
  quote: string
  authorName: string
  authorTitle: string
  imageSrc: string
}

export function TestimonialSingle({ quote, authorName, authorTitle, imageSrc }: TestimonialProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      // Animate text column
      gsap.from('.testi-text', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 75%',
        }
      })

      // Animate image column
      gsap.from('.testi-image', {
        x: 30,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 75%',
        }
      })
    },
    { scope: containerRef }
  )

  return (
    <section ref={containerRef} className="bg-[#181818] py-24 sm:py-32 overflow-hidden">
      <div className="container mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Text Column */}
          <div className="order-2 lg:order-1 flex flex-col justify-center max-w-2xl mx-auto lg:mx-0">
            <blockquote className="testi-text text-2xl sm:text-3xl font-medium leading-relaxed text-white mb-10 text-pretty">
              &ldquo;{quote}&rdquo;
            </blockquote>
            
            <div className="testi-text">
              <p className="text-sm font-bold tracking-widest text-white uppercase mb-1">
                {authorName}
              </p>
              <p className="text-sm text-zinc-400 font-medium">
                {authorTitle}
              </p>
            </div>
          </div>

          {/* Image Column */}
          <div className="order-1 lg:order-2 testi-image w-full h-[400px] sm:h-[500px] lg:h-[600px] relative rounded-3xl overflow-hidden shadow-2xl">
            <Image 
              src={imageSrc} 
              alt={`Foto de ${authorName}`} 
              fill 
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {/* Subtle gradient overlay to match dark theme aesthetics */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
          </div>

        </div>
      </div>
    </section>
  )
}
