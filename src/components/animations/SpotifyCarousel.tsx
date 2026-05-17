'use client'

import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ArrowLeft, ArrowRight, Music2, Ticket, CheckCircle2, Zap } from 'lucide-react'

gsap.registerPlugin(useGSAP)

const CARDS = [
  {
    id: 1,
    color: 'bg-[#FF8B7B]',
    textColor: 'text-black',
    icon: <Zap size={24} className="text-white" />,
    title: 'A Explosão do Hit',
    subtitle: 'Hackeie o algoritmo',
    description: 'Para artistas: Convoque milhares de micro-criadores para usarem seu áudio simultaneamente e gere um tsunami no algoritmo em dias.',
  },
  {
    id: 2,
    color: 'bg-[#5B9CFF]',
    textColor: 'text-black',
    icon: <Ticket size={24} className="text-white" />,
    title: 'Ingressos por Alcance',
    subtitle: 'Lote o seu evento',
    description: 'Para produtoras: Sua festa não dá sold-out? Troque ingressos VIP ou combos por alcance massivo. O custo marginal é zero e o FOMO da cidade é garantido.',
  },
  {
    id: 3,
    color: 'bg-[#9DE019]',
    textColor: 'text-black',
    icon: <Music2 size={24} className="text-white" />,
    title: 'Ganhe com sua Autenticidade',
    subtitle: 'Fãs como sócios',
    description: 'Para criadores: Não importa se você tem 500 ou 50k seguidores. Engaje nas campanhas e receba PIX ou acesse o benefícios VIP.',
  },
  {
    id: 4,
    color: 'bg-[#A484FF]',
    textColor: 'text-black',
    icon: <CheckCircle2 size={24} className="text-white" />,
    title: 'Zero Burocracia',
    subtitle: 'Automação Total',
    description: 'Sem planilhas ou cobranças no WhatsApp. A IA audita tudo e o sistema libera o pagamento para quem cumpre as regras.',
  },
]

export function SpotifyCarousel() {
  const containerRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const currentIndex = useRef(1) // Center card index for desktop

  const updateCarousel = (animate = true) => {
    const cards = gsap.utils.toArray<HTMLElement>('.spotify-card')
    const track = trackRef.current
    if (!track || cards.length === 0) return

    // Desktop logic exclusively
    const cardWidth = 360 // Base width on desktop
    const gap = 32 // 2rem
    const offset = -(currentIndex.current * (cardWidth + gap))

    gsap.to(track, {
      x: offset,
      duration: animate ? 0.8 : 0,
      ease: 'power3.inOut',
    })

    cards.forEach((card, i) => {
      const distance = i - currentIndex.current
      
      let rotationZ = 0
      let yOffset = 0
      let scale = 1
      const zIndex = 10 - Math.abs(distance)

      if (distance === 0) {
        rotationZ = 0
        yOffset = -20
        scale = 1.05
      } else if (distance < 0) {
        rotationZ = -8
        yOffset = 20
        scale = 0.95
      } else if (distance > 0) {
        rotationZ = 8
        yOffset = 20
        scale = 0.95
      }

      gsap.to(card, {
        rotationZ,
        y: yOffset,
        scale,
        zIndex,
        duration: animate ? 0.8 : 0,
        ease: 'power3.inOut',
      })
    })
  }

  useGSAP(
    () => {
      const mm = gsap.matchMedia()

      // Desktop Only
      mm.add("(min-width: 1024px)", () => {
        currentIndex.current = 1;
        updateCarousel(false)
      })

      // Mobile/Tablet Only: Clean up GSAP transforms to allow native scrolling
      mm.add("(max-width: 1023px)", () => {
        gsap.set('.spotify-card', { clearProps: "all" })
        gsap.set(trackRef.current, { clearProps: "all" })
        if (trackRef.current) {
          trackRef.current.scrollLeft = 0;
        }
      })

      return () => mm.revert()
    },
    { scope: containerRef },
  )

  const nextSlide = () => {
    if (typeof window !== 'undefined' && window.innerWidth >= 1024) {
      if (currentIndex.current < CARDS.length - 1) {
        currentIndex.current += 1
        updateCarousel()
      }
    } else {
      if (trackRef.current) {
        const cardWidth = trackRef.current.children[0]?.clientWidth || 280;
        trackRef.current.scrollBy({ left: cardWidth + 24, behavior: 'smooth' })
      }
    }
  }

  const prevSlide = () => {
    if (typeof window !== 'undefined' && window.innerWidth >= 1024) {
      if (currentIndex.current > 0) {
        currentIndex.current -= 1
        updateCarousel()
      }
    } else {
      if (trackRef.current) {
        const cardWidth = trackRef.current.children[0]?.clientWidth || 280;
        trackRef.current.scrollBy({ left: -(cardWidth + 24), behavior: 'smooth' })
      }
    }
  }

  return (
    <section ref={containerRef} className="bg-[#121212] py-20 pb-40 overflow-hidden relative">
      
      {/* Wrapper do Carrossel */}
      <div className="relative mx-auto max-w-[1400px]">
        
        {/* Viewport para esconder o que vaza no Desktop, e rolagem nativa no Mobile */}
        <div className="relative w-full overflow-hidden lg:overflow-visible py-10">
          
          {/* Trilho que se move (Native scroll on mobile, transform on desktop) */}
          <div 
            ref={trackRef}
            className="flex gap-6 lg:gap-8 items-center justify-start overflow-x-auto lg:overflow-visible snap-x snap-mandatory lg:snap-none no-scrollbar px-[calc(50%-140px)] sm:px-[calc(50%-160px)] lg:px-0 lg:pl-[calc(50%-18rem)] will-change-transform lg:w-max"
          >
            {CARDS.map((card) => (
              <div
                key={card.id}
                className={`spotify-card w-[280px] sm:w-[320px] lg:w-[360px] h-[450px] lg:h-[480px] shrink-0 origin-bottom rounded-[2rem] p-8 lg:p-10 flex flex-col justify-between shadow-2xl snap-center lg:snap-align-none ${card.color} ${card.textColor}`}
              >
                <div>
                  <div className="mb-6 h-12 w-12 rounded-full bg-black flex items-center justify-center shadow-lg">
                     {card.icon}
                  </div>
                  
                  <h3 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4 text-balance">
                    {card.title}
                  </h3>
                  
                  <p className="text-xl lg:text-2xl font-bold leading-tight opacity-90 text-balance">
                    {card.subtitle}
                  </p>
                </div>
                
                <p className="text-base lg:text-lg font-medium opacity-90 leading-snug">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Controles de Navegação */}
        <div className="absolute -bottom-16 left-0 right-0 flex justify-center gap-4">
          <button 
            onClick={prevSlide}
            className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-black transition-transform hover:scale-105 hover:bg-zinc-200 active:scale-95 shadow-xl"
            aria-label="Anterior"
          >
            <ArrowLeft size={24} />
          </button>
          <button 
            onClick={nextSlide}
            className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-black transition-transform hover:scale-105 hover:bg-zinc-200 active:scale-95 shadow-xl"
            aria-label="Próximo"
          >
            <ArrowRight size={24} />
          </button>
        </div>
        
      </div>
    </section>
  )
}
