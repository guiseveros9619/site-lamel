'use client'

import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP)
}

interface CallToActionProps {
  title: string
  description: string
  buttonText: string
  buttonLink?: string
  color?: 'orange' | 'yellow' | 'green' | 'blue' | 'purple' | 'pink'
}

export function CallToAction({ title, description, buttonText, buttonLink = "#" }: CallToActionProps) {
  const container = useRef<HTMLDivElement>(null)

  const activeColorClass = 'bg-brand-blue hover:bg-brand-orange focus-visible:ring-brand-orange'

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
    <section ref={container} className="bg-brand-pink py-32 border-t border-brand-black/5">
      <div className="container mx-auto max-w-5xl px-6 lg:px-8 text-center">

        <h2 className="anim-cta-text text-5xl sm:text-6xl font-heading font-extrabold leading-tight tracking-tight mb-8 text-brand-black">
          {title}
        </h2>
        <p className="anim-cta-text text-xl text-brand-black/70 mb-12 max-w-3xl mx-auto leading-relaxed font-medium">
         {description}
        </p>

        <div className="anim-cta-text">
          <Link href={buttonLink}>
            <Button className={`h-16 rounded-full px-10 text-lg font-black text-white transition-colors ${activeColorClass}`}>
              {buttonText}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
