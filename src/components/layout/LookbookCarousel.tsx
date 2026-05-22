'use client'

import React from 'react'
import Image from 'next/image'
import { SectionBadge } from '@/components/ui/SectionBadge'

// Row 1: Leftward moving looks with technical specs for resellers and brand owners
const ROW1_IMAGES = [
  { src: '/4.jpg', label: 'Modelagem Streetwear' },
  { src: '/5.jpg', label: 'Fio 30.1 Penteado' },
  { src: '/1.jpg', label: 'Algodão Premium Menegotti' },
  { src: '/2.jpg', label: 'Costura Reforçada' },
  { src: '/3.jpg', label: 'Toque Super Macio' },
  { src: '/6.jpg', label: 'Alta Gramatura (Heavyweight)' },
  { src: '/7.jpg', label: 'Pronto para Estampar' },
  { src: '/8.jpg', label: 'Encolhimento Zero' },
]

// Row 2: Rightward moving looks with business and structural specifications
const ROW2_IMAGES = [
  { src: '/9.jpg', label: 'Ribana Canelada 2x1' },
  { src: '/14.jpg', label: 'Sem Etiqueta de Marca' },
  { src: '/15.jpg', label: 'Gola de 3cm Robusta' },
  { src: '/18.jpg', label: 'Alta Margem de Lucro' },
  { src: '/19.jpg', label: 'Private Label Prático' },
  { src: '/20.jpg', label: 'Cores de Alta Solidez' },
  { src: '/21.jpg', label: 'Fotos Livres para Divulgar' },
  { src: '/22.jpg', label: 'Caimento Impecável' },
]

export function LookbookCarousel() {
  // Tripling arrays to cover ultra-wide desktop monitors seamlessly
  const row1Doubled = [...ROW1_IMAGES, ...ROW1_IMAGES, ...ROW1_IMAGES]
  const row2Doubled = [...ROW2_IMAGES, ...ROW2_IMAGES, ...ROW2_IMAGES]

  return (
    <section className="bg-brand-black py-24 sm:py-32 overflow-hidden relative border-t border-brand-black/5">
      {/* Self-contained marquee keyframe styling */}
      <style>{`
        @keyframes marquee-left {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-33.333%, 0, 0);
          }
        }
        @keyframes marquee-right {
          0% {
            transform: translate3d(-33.333%, 0, 0);
          }
          100% {
            transform: translate3d(0, 0, 0);
          }
        }
        .animate-marquee-left {
          display: flex;
          width: max-content;
          animation: marquee-left 50s linear infinite;
        }
        .animate-marquee-right {
          display: flex;
          width: max-content;
          animation: marquee-right 50s linear infinite;
        }
        /* Pause scroll on hover */
        .animate-marquee-left:hover,
        .animate-marquee-right:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Decorative background grid pattern */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.05]"
        style={{
          backgroundSize: '30px 30px',
          backgroundImage: `
            linear-gradient(to right, #ffe6f1 1px, transparent 1px),
            linear-gradient(to bottom, #ffe6f1 1px, transparent 1px)
          `
        }}
      />

      {/* Radial glow circles in the background */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-96 h-96 bg-brand-pink/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-brand-yellow/5 blur-[180px] rounded-full pointer-events-none" />

      <div className="container mx-auto max-w-7xl px-6 lg:px-8 relative z-10 mb-16">
        <div className="text-center max-w-3xl mx-auto relative">
          {/* Standard Section Badge matching all other homepage sections (no icon) */}
          <SectionBadge variant="dark-pink" className="mb-4">
            Qualidade Real
          </SectionBadge>
          
          <h2 className="text-5xl sm:text-6xl font-heading font-extrabold mb-6 text-brand-beige leading-tight">
            O Caimento que Vende
          </h2>
          <p className="text-xl text-brand-beige/70 font-medium max-w-2xl mx-auto">
            Veja a modelagem streetwear impecável e a alta costura direto no corpo. Fotos profissionais gratuitas para você divulgar na sua marca ou revenda.
          </p>
        </div>
      </div>

      {/* Image Marquees */}
      <div className="relative flex flex-col gap-6 md:gap-8 z-10">
        
        {/* ROW 1: Moves Left */}
        <div className="w-full overflow-hidden py-2 relative">
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-brand-black to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-brand-black to-transparent z-20 pointer-events-none" />

          <div className="animate-marquee-left gap-6 md:gap-8 px-3">
            {row1Doubled.map((item, index) => (
              <div
                key={`row1-${index}`}
                className="w-[180px] sm:w-[240px] md:w-[280px] aspect-[2/3] shrink-0 border border-brand-beige/15 rounded-2xl sm:rounded-3xl overflow-hidden bg-[#151515] shadow-2xl relative group transition-all duration-500 hover:scale-[1.02] hover:border-brand-pink/40 hover:shadow-[0_10px_30px_rgba(255,158,198,0.15)] cursor-default"
              >
                <Image
                  src={item.src}
                  alt={item.label}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 640px) 180px, (max-width: 768px) 240px, 280px"
                  priority={index < 8}
                />
                
                {/* Minimal label overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 sm:p-6">
                  <div className="bg-brand-black/60 backdrop-blur-md border border-brand-beige/10 px-3 py-1.5 rounded-full">
                    <p className="text-[10px] font-bold text-brand-beige uppercase tracking-widest leading-none">
                      {item.label}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ROW 2: Moves Right */}
        <div className="w-full overflow-hidden py-2 relative">
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-brand-black to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-brand-black to-transparent z-20 pointer-events-none" />

          <div className="animate-marquee-right gap-6 md:gap-8 px-3">
            {row2Doubled.map((item, index) => (
              <div
                key={`row2-${index}`}
                className="w-[180px] sm:w-[240px] md:w-[280px] aspect-[2/3] shrink-0 border border-brand-beige/15 rounded-2xl sm:rounded-3xl overflow-hidden bg-[#151515] shadow-2xl relative group transition-all duration-500 hover:scale-[1.02] hover:border-brand-pink/40 hover:shadow-[0_10px_30px_rgba(255,158,198,0.15)] cursor-default"
              >
                <Image
                  src={item.src}
                  alt={item.label}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 640px) 180px, (max-width: 768px) 240px, 280px"
                />
                
                {/* Minimal label overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 sm:p-6">
                  <div className="bg-brand-black/60 backdrop-blur-md border border-brand-beige/10 px-3 py-1.5 rounded-full">
                    <p className="text-[10px] font-bold text-brand-beige uppercase tracking-widest leading-none">
                      {item.label}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
