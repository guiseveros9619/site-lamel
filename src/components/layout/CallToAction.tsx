'use client'

import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP)
}

interface CallToActionProps {
  title: string
  description: string
  buttonText: string
  buttonLink?: string
  eyebrow?: string
  note?: string
  color?: 'orange' | 'yellow' | 'green' | 'blue' | 'purple' | 'pink'
}

export function CallToAction({
  title,
  description,
  buttonText,
  buttonLink = '#',
  eyebrow,
  note,
}: CallToActionProps) {
  const container = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      gsap.from('.anim-cta-text', {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: container.current,
          start: 'top 75%',
        },
      })
    },
    { scope: container },
  )

  return (
    <section
      ref={container}
      className="relative overflow-hidden bg-brand-pink py-32 border-t border-brand-black/5"
    >
      {/* Halo premium de fundo */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[720px] max-w-[90vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-orange/10 blur-[130px]" />

      <div className="container relative z-10 mx-auto max-w-4xl px-6 text-center lg:px-8">
        {eyebrow && (
          <span className="anim-cta-text mb-7 inline-flex items-center rounded-full border border-brand-orange/25 bg-white/60 px-4 py-1.5 text-xs font-black uppercase tracking-[0.2em] text-brand-orange backdrop-blur-sm">
            {eyebrow}
          </span>
        )}

        <h2 className="anim-cta-text mx-auto max-w-3xl text-balance font-heading text-5xl font-extrabold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
          {title}
        </h2>

        <p className="anim-cta-text mx-auto mt-8 mb-12 max-w-2xl text-lg font-medium leading-relaxed text-brand-black/70 sm:text-xl">
          {description}
        </p>

        <div className="anim-cta-text flex flex-col items-center gap-4">
          <Link href={buttonLink}>
            <Button className="group h-16 gap-2 rounded-full bg-brand-blue px-10 text-lg font-black text-white shadow-[0_10px_30px_-8px_rgba(213,0,132,0.5)] transition-all hover:bg-brand-orange hover:shadow-[0_16px_44px_-8px_rgba(213,0,132,0.6)] focus-visible:ring-brand-orange">
              {buttonText}
              <ArrowRight
                strokeWidth={2.5}
                className="size-5 transition-transform group-hover:translate-x-1"
              />
            </Button>
          </Link>
          {note && <span className="text-sm font-semibold text-brand-black/50">{note}</span>}
        </div>
      </div>
    </section>
  )
}
