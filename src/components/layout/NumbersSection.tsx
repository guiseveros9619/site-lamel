'use client'

import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Button } from '@/components/ui/button'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP)
}

export function NumbersSection() {
  const containerRef = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      gsap.from('.anim-up-numbers', {
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
    },
    { scope: containerRef }
  )

  return (
    <section ref={containerRef} className="bg-[#121212] py-24 overflow-hidden">
      <div className="container mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8">
          
          {/* Left Column */}
          <div>
            <p className="anim-up-numbers mb-4 text-sm font-bold tracking-wide text-brand-purple uppercase">
              O poder do local
            </p>
            <h2 className="anim-up-numbers text-5xl font-extrabold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
              Nascemos no coração da cultura local.
            </h2>
          </div>

          {/* Right Column */}
          <div className="flex flex-col justify-end lg:pb-4">
            <p className="anim-up-numbers mb-8 text-xl leading-relaxed text-zinc-300 font-medium">
              O segredo da música viral e dos shows lotados começa nas ruas. Transformamos audiências regionais em um exército de <span className="text-white font-bold">criadores engajados</span>, prontos para fazer barulho no seu próximo lançamento ou esgotar a bilheteria da sua festa.
            </p>
            <div className="anim-up-numbers">
              <Button className="h-14 rounded-full bg-white px-8 text-base font-bold text-black hover:bg-zinc-200 transition-colors">
                Conheça nossos cases
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

