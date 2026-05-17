'use client'

import { useRef, useState } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { Button } from '@/components/ui/button'
import { Ticket, ArrowRight, Play } from 'lucide-react'
import { VideoModal } from '@/components/ui/VideoModal'

export function HeroEventos() {
  const container = useRef<HTMLDivElement>(null)
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false)

  useGSAP(
    () => {
      const tl = gsap.timeline()
      
      tl.from('.hero-badge', { y: 20, opacity: 0, duration: 0.6, ease: 'power3.out' })
        .from('.hero-title-1', { y: 30, opacity: 0, duration: 0.8, ease: 'power3.out' }, '-=0.4')
        .from('.hero-title-2', { y: 30, opacity: 0, duration: 0.8, ease: 'power3.out' }, '-=0.6')
        .from('.hero-desc', { y: 20, opacity: 0, duration: 0.8, ease: 'power3.out' }, '-=0.4')
        .from('.hero-btns', { y: 20, opacity: 0, duration: 0.6, ease: 'power3.out' }, '-=0.4')

      // Efeito de ondas sonoras no background (reaproveitado de artistas para consistência)
      gsap.to('.sound-wave', {
        scaleY: "random(0.2, 1.5)",
        duration: 0.3,
        stagger: { each: 0.05, repeat: -1, yoyo: true },
        ease: 'none'
      })
    },
    { scope: container }
  )

  return (
    <section ref={container} className="relative min-h-[90vh] flex items-center pt-32 pb-20 overflow-hidden bg-[#121212]">
      
      {/* Background abstrato focado no brand-purple musical */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-purple/20 via-[#121212] to-[#121212] pointer-events-none" />
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay pointer-events-none" />
      
      {/* Abstract Sound Waves Graphic in BG */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 lg:w-1/3 h-64 flex items-center gap-2 opacity-[0.05] sm:opacity-10 pointer-events-none blur-[2px]">
         {[...Array(15)].map((_, i) => (
            <div key={i} className="sound-wave w-4 h-full bg-brand-purple rounded-full origin-center"></div>
         ))}
      </div>

      <div className="container mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl">
          <div className="hero-badge inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-bold text-blue-400 mb-8 backdrop-blur-sm">
            <Ticket size={16} aria-hidden="true" />
            Eventos & Produtores
          </div>
          
          <h1 className="text-5xl font-extrabold leading-[1.1] tracking-tight sm:text-6xl lg:text-[4.5rem] mb-8 text-balance">
            <span className="hero-title-1 block text-white">Um exército de criadores locais</span>
            <span className="hero-title-2 block text-brand-purple">
              pronto para esgotar sua bilheteria.
            </span>
          </h1>
          
          <p className="hero-desc text-lg leading-relaxed text-zinc-300 sm:text-xl font-medium max-w-3xl mb-12">
            Crie um hype real e esgote a sua bilheteria sem depender exclusivamente de tráfego pago. Transforme cortesias e acessos VIP em milhares de vídeos autênticos nas redes sociais, remunerando exclusivamente por alcance validado.
          </p>
          
          <div className="hero-btns flex flex-col gap-3 relative z-10 sm:flex-row sm:flex-wrap sm:gap-4">
            <Button className="h-14 w-full sm:w-auto rounded-full bg-brand-purple px-8 text-base font-bold text-black hover:bg-brand-purple-light transition-[transform,shadow] hover:scale-105 shadow-[0_0_40px_rgba(216,180,254,0.3)] hover:shadow-[0_0_60px_rgba(216,180,254,0.5)]">
              Criar Campanha<ArrowRight className="ml-2" size={20} aria-hidden="true" />
            </Button>
            <Button
              variant="outline"
              onClick={() => setIsVideoModalOpen(true)}
              className="h-14 w-full sm:w-auto rounded-full border-white/20 bg-black/50 backdrop-blur-md px-8 text-base font-bold text-white hover:bg-white/10 transition-colors flex items-center gap-2"
            >
               <Play size={20} className="text-brand-purple fill-brand-purple" aria-hidden="true" /> Veja na prática
            </Button>
          </div>
        </div>
      </div>

      <VideoModal isOpen={isVideoModalOpen} setIsOpen={setIsVideoModalOpen} />
    </section>
  )
}
