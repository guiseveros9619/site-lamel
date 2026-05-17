'use client'

import { useRef, useState, useEffect } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Video, DollarSign, Clock, ArrowRight, UserCheck } from 'lucide-react'
import Image from 'next/image'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP)
}

const CARDS = [
  {
    id: 1,
    title: 'Fãs Engajados',
    description: 'Não se preocupe com o número de seguidores. Se você curte música e eventos, sabe fazer trends, dancinhas ou vlogs, as campanhas estão de portas abertas para você faturar com seu engajamento.',
    imageBg: '/image1.webp',
    icon: <UserCheck size={24} />,
    tag: 'Qualquer Perfil',
    tagColor: 'bg-[#1c1c1c] text-white border border-white/10',
  },
  {
    id: 2,
    title: 'Criadores de Conteúdo',
    description: 'Use a sua audiência a seu favor. Escolha campanhas que tenham fit com o seu público (Sertanejo, Trap, Funk) e rentabilize o seu alcance.',
    imageBg: '/image2.webp',
    icon: <Video size={24} />,
    tag: 'Influenciadores',
    tagColor: 'bg-[#1c1c1c] text-white border border-white/10',
  },
  {
    id: 3,
    title: 'Recebimento Ágil',
    description: 'Assim que o conteúdo for validado pela nossa IA, a recompensa é liberada na sua carteira virtual. Solicite seu PIX ou garanta o seu benefício VIP na hora.',
    imageBg: '/image3.webp',
    icon: <DollarSign size={24} />,
    tag: 'PIX Imediato',
    tagColor: 'bg-[#1c1c1c] text-white border border-white/10',
  },
  {
    id: 4,
    title: 'Tempo de Análise',
    description: 'Nossa IA é rápida e precisa. Após o conteúdo ser postado, ele pode levar até 48 horas para ser analisado e auditado completamente.',
    imageBg: '/image4.webp',
    icon: <Clock size={24} />,
    tag: 'Análise em 48h',
    tagColor: 'bg-[#1c1c1c] text-white border border-white/10',
  }
]

export function AudienceCriadores() {
  const containerRef = useRef<HTMLDivElement>(null)
  const carouselRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)

  const handleScroll = () => {
    if (carouselRef.current) {
      setCanScrollLeft(carouselRef.current.scrollLeft > 20)
    }
  }

  useEffect(() => {
    handleScroll()
    window.addEventListener('resize', handleScroll)
    return () => window.removeEventListener('resize', handleScroll)
  }, [])

  useGSAP(
    () => {
      // Header Animation
      gsap.from('.target-header', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
        }
      })

      // Cards Animation
      gsap.from('.target-card', {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.cards-container',
          start: 'top 85%',
        }
      })
    },
    { scope: containerRef }
  )

  return (
    <section ref={containerRef} className="bg-[#121212] py-32 border-t border-white/5 overflow-hidden">
      <div className="container mx-auto max-w-7xl px-6 lg:px-8 relative">
        
        {/* Top Header Row */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-8 relative z-20">
           <h2 className="target-header text-5xl sm:text-6xl font-extrabold tracking-tight text-white max-w-xl text-balance">
             Para quem é o App.
           </h2>
           <div className="target-header max-w-xl flex flex-col items-start lg:items-end text-left lg:text-right">
             <p className="text-lg text-zinc-300 mb-6 font-medium leading-relaxed">
               Nós valorizamos todo o tipo de criador, desde quem gosta de compartilhar com os amigos até influenciadores consolidados.
             </p>
           </div>
        </div>

        {/* Horizontal Cards Layout relative container for arrows */}
        <div className="relative group/carousel">
          <div
             ref={carouselRef}
             onScroll={handleScroll}
             className="cards-container flex overflow-x-auto gap-6 pb-12 snap-x snap-mandatory no-scrollbar"
          >
             {CARDS.map((card) => (
             <div key={card.id} className="target-card flex flex-col group min-w-[260px] sm:min-w-[340px] md:min-w-[400px] w-[78vw] md:w-[400px] snap-start shrink-0 relative">
                
                {/* Visual Header of Card */}
                <div className="h-[240px] rounded-[20px] mb-6 relative overflow-hidden flex items-center justify-center">
                   <Image src={card.imageBg} alt="" fill sizes="(max-width: 768px) 85vw, 400px" className="object-cover" />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                   
                {/* Floating Tags */}
                <div className="absolute top-4 left-4 flex flex-col items-start">
                   <div className="w-12 h-12 bg-[#1c1c1c] rounded-full flex items-center justify-center text-white shadow-lg mb-2 z-10 border border-white/10" aria-hidden="true">
                     {card.icon}
                   </div>
                   <div className={`text-xs font-bold px-3 py-1.5 rounded-md shadow-lg z-10 whitespace-nowrap ${card.tagColor}`}>
                     {card.tag}
                   </div>
                </div>
                </div>

                {/* Text Content */}
                <h3 className="text-2xl font-bold text-white mb-4 tracking-tight text-balance">
                  {card.title}
                </h3>
                <p className="text-zinc-400 font-medium leading-relaxed flex-grow">
                  {card.description}
                </p>
             </div>
           ))}
           
          </div>
          
          {/* Navigation Arrows for Carousel */}
          <div className="absolute top-[120px] left-0 right-0 pointer-events-none flex justify-between z-30 px-2 lg:px-0">
             <button 
                className={`pointer-events-auto w-12 h-12 bg-white text-black rounded-full shadow-xl flex items-center justify-center transition-[transform,opacity] hover:scale-105 ${canScrollLeft ? 'opacity-100' : 'opacity-0 scale-90 pointer-events-none'}`}
                aria-label="Voltar cards"
                onClick={() => {
                   if(carouselRef.current) carouselRef.current.scrollBy({ left: -400, behavior: 'smooth' })
                }}
             >
               <ArrowRight size={20} className="rotate-180" aria-hidden="true" />
            </button>
             <button 
                className="pointer-events-auto w-12 h-12 bg-white text-black rounded-full shadow-xl flex items-center justify-center opacity-0 group-hover/carousel:opacity-100 transition-[transform,opacity] hover:scale-105 mr-4 lg:mr-0"
                aria-label="Avançar cards"
               onClick={() => {
                  if(carouselRef.current) carouselRef.current.scrollBy({ left: 400, behavior: 'smooth' })
               }}
            >
               <ArrowRight size={20} aria-hidden="true" />
            </button>
          </div>
          
          {/* Gradiente Lateral Fade out */}
          <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#121212] to-transparent pointer-events-none z-10"></div>
        </div>

      </div>
    </section>
  )
}