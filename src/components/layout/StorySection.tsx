'use client'

import { useState, useRef } from 'react'
import { CheckCircle2, ShoppingBag, Zap, Shirt, Star, Tag, Smartphone, Scissors } from 'lucide-react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SectionBadge } from '@/components/ui/SectionBadge'

gsap.registerPlugin(useGSAP, ScrollTrigger)

function PixVisuals() {
  const container = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    gsap.set(".img-left", { y: 30, opacity: 0, rotation: -6 })
    gsap.set(".img-right", { y: 30, opacity: 0, rotation: 6 })

    const tl = gsap.timeline()
    tl.to(".img-left", { y: 0, opacity: 1, rotation: -3, duration: 0.8, ease: "power2.out" })
      .to(".img-right", { y: 0, opacity: 1, rotation: 3, duration: 0.8, ease: "power2.out" }, "-=0.5")

  }, { scope: container })

  return (
    <div ref={container} className="relative w-full h-full flex justify-center items-center">
      {/* Imagem 1: Embalagem */}
      <div className="img-left absolute left-[5%] top-[5%] w-[52%] aspect-square rounded-3xl overflow-hidden border-2 border-brand-black shadow-2xl z-10">
        <img src="/embalagem.jpeg" alt="Embalagem Personalizada" className="w-full h-full object-cover" />
      </div>

      {/* Imagem 2: Gola */}
      <div className="img-right absolute right-[5%] bottom-[5%] w-[52%] aspect-square rounded-3xl overflow-hidden border-2 border-brand-black shadow-2xl z-20">
        <img src="/gola.jpeg" alt="Gola de Algodão Personalizada" className="w-full h-full object-cover" />
      </div>
    </div>
  )
}

function IAVisuals() {
  const container = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    gsap.set(".img-left", { y: 30, opacity: 0, rotation: -6 })
    gsap.set(".img-right", { y: 30, opacity: 0, rotation: 6 })

    const tl = gsap.timeline()
    tl.to(".img-left", { y: 0, opacity: 1, rotation: -3, duration: 0.8, ease: "power2.out" })
      .to(".img-right", { y: 0, opacity: 1, rotation: 3, duration: 0.8, ease: "power2.out" }, "-=0.5")

  }, { scope: container })

  return (
    <div ref={container} className="relative w-full h-full flex justify-center items-center">
      {/* Imagem 1: Algodão (Gola/Tag) */}
      <div className="img-left absolute left-[5%] top-[5%] w-[52%] aspect-square rounded-3xl overflow-hidden border-2 border-brand-black shadow-2xl z-10">
        <img src="/algodao.jpeg" alt="Gola de Algodão" className="w-full h-full object-cover" />
      </div>

      {/* Imagem 2: Tecido (Textura) */}
      <div className="img-right absolute right-[5%] bottom-[5%] w-[52%] aspect-square rounded-3xl overflow-hidden border-2 border-brand-black shadow-2xl z-20">
        <img src="/tecido.jpeg" alt="Textura do Algodão" className="w-full h-full object-cover" />
      </div>
    </div>
  )
}

function EscrowVisuals() {
  const container = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 2.5 })

    tl.set('.escrow-contract', { rotationY: -15, opacity: 0, x: -20 })
      .set('.escrow-fund', { y: 30, opacity: 0 })
      .set('.escrow-bar', { width: '0%' })
      .set('.escrow-lock', { rotation: 0, scale: 1 })
      
      // Entram
      .to('.escrow-fund', { y: 0, opacity: 1, duration: 0.6, ease: 'back.out(1.2)' })
      .to('.escrow-contract', { rotationY: 0, opacity: 1, x: 0, duration: 0.7, ease: 'power2.out' }, '-=0.4')
      
      .to('.escrow-lock', { rotation: -15, duration: 0.1, yoyo: true, repeat: 3 }, '+=0.2')
      .to('.escrow-lock', { scale: 1.2, color: '#FF8A4C', duration: 0.2, yoyo: true, repeat: 1 }, '<')
      .to('.escrow-fund', { borderColor: '#111111', duration: 0.4 }, '-=0.1')
      
      .to('.escrow-bar', { width: '100%', duration: 1.5, ease: 'power2.inOut' }, '+=0.4')
      
      // Glow final
      .to('.escrow-value', { scale: 1.05, color: '#7BC47F', duration: 0.3, yoyo: true, repeat: 1 }, '+=0.2')

  }, { scope: container })

  return (
    <div ref={container} className="relative w-full h-full flex justify-center lg:block perspective-[1000px]">
      {/* Mockup 1: Telegram (Esquerda) */}
      <div className="escrow-contract absolute left-1/2 -translate-x-1/2 ml-[-40px] lg:ml-0 lg:left-auto lg:translate-x-0 lg:right-[35%] top-0 sm:top-8 sm:rotate-[-5deg] z-10 w-64 rounded-2xl bg-brand-blue overflow-hidden border-2 border-brand-black origin-left shadow-lg">
         <div className="h-20 bg-brand-orange flex items-center px-4 border-b border-brand-black/20 gap-3 text-brand-beige">
             <Smartphone size={20} className="text-brand-blue" />
             <div>
                <h4 className="text-sm font-heading font-bold">Comunidade VIP</h4>
                <p className="text-[10px] text-brand-beige/60 uppercase tracking-widest">Acesso Exclusivo</p>
             </div>
         </div>
         <div className="p-5 flex flex-col gap-3">
            <div className="flex justify-between items-center border-b border-brand-black/10 pb-2">
              <span className="text-xs font-bold text-brand-black">Membros Ativos</span>
              <span className="text-xs font-black text-brand-black">+13.000</span>
            </div>
            <div className="flex justify-between items-center border-b border-brand-black/10 pb-2">
              <span className="text-xs font-bold text-brand-black">Dicas &amp; Materiais</span>
              <span className="text-xs font-black text-brand-black">Diário</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs font-bold text-brand-black">Suporte</span>
              <span className="text-[10px] text-brand-beige bg-brand-orange px-2 py-1 rounded-sm font-bold uppercase tracking-wider">Personalizado</span>
            </div>
         </div>
      </div>

      {/* Mockup 2: Material (Direita) */}
      <div className="escrow-fund absolute left-1/2 -translate-x-1/2 ml-[40px] lg:ml-0 lg:left-auto lg:translate-x-0 lg:right-[5%] top-24 sm:top-24 sm:rotate-[5deg] z-20 w-72 rounded-2xl bg-brand-beige overflow-hidden border-2 border-brand-black shadow-xl transition-colors duration-300">
         <div className="p-6 border-b border-brand-black/10">
              <div className="flex items-center gap-2 mb-1">
                 <Star size={16} className="escrow-lock text-brand-blue origin-bottom fill-brand-blue" />
                 <span className="text-xs font-bold text-brand-black/50 uppercase tracking-widest">Suporte de Vendas</span>
              </div>
              <h4 className="escrow-value font-heading font-black text-2xl mt-2 text-brand-black leading-tight">Material de Ensaio</h4>
          </div>
          <div className="p-6 bg-white">
             <div className="flex justify-between text-xs font-bold mb-2">
                <span className="text-brand-black">Conteúdo Disponível</span>
                <span className="text-brand-green">100% Gratuito</span>
             </div>
             <div className="w-full bg-brand-beige rounded-full h-3 mb-4 overflow-hidden border border-brand-black/5">
                <div className="escrow-bar bg-brand-green w-[0%] h-full rounded-full"></div>
             </div>
             
             <div className="bg-brand-blue/10 border border-brand-blue/20 rounded-xl p-3 text-center">
                <span className="text-xs font-bold text-brand-black">
                  Fotos e vídeos em alta qualidade para você utilizar na divulgação.
                </span>
             </div>
          </div>
      </div>
    </div>
  )
}

const TAB_CONTENT = {
  'Qualidade Premium': {
    icon: <Shirt size={32} />,
    iconColor: 'bg-brand-pink text-brand-black',
    colorClass: 'bg-brand-pink text-brand-black focus-visible:ring-brand-pink',
    title: 'O melhor algodão do Brasil',
    description: 'Nossas peças são confeccionadas com algodão 100% Fio 30.1 penteado Premium das Malharias Menegotti. Rigoroso controle de qualidade, da inspeção até os testes de resistência.',
    visuals: <IAVisuals />
  },
  'Personalização': {
    icon: <Scissors size={32} />,
    iconColor: 'bg-brand-pink text-brand-black',
    colorClass: 'bg-brand-pink text-brand-black focus-visible:ring-brand-pink',
    title: 'Personalize com a sua logomarca',
    description: 'Receba os produtos sem nenhuma identificação da nossa marca ou personalize os produtos com a sua logomarca. Uma experiência de private label completa para o seu negócio decolar.',
    visuals: <PixVisuals />
  },
  'Comunidade & Apoio': {
    icon: <Smartphone size={32} />,
    iconColor: 'bg-brand-pink text-brand-black',
    colorClass: 'bg-brand-pink text-brand-black focus-visible:ring-brand-pink',
    title: 'A comunidade que mais cresce',
    description: 'Junte-se à nossa comunidade VIP no Telegram com mais de 13 mil membros e aproveite vantagens exclusivas. Disponibilizamos todo o conteúdo de fotos e vídeo em alta qualidade para a sua divulgação.',
    visuals: <EscrowVisuals />
  }
}

type TabName = keyof typeof TAB_CONTENT;

const TAB_KEYS = Object.keys(TAB_CONTENT) as TabName[]
const NUM_TABS = TAB_KEYS.length

export function StorySection() {
  const [activeTab, setActiveTab] = useState<TabName>('Qualidade Premium')
  const containerRef = useRef<HTMLElement>(null)
  // Instância do ScrollTrigger de pin (só existe no desktop, sem reduced-motion)
  const pinTriggerRef = useRef<ScrollTrigger | null>(null)
  // Evita re-renders desnecessários no onUpdate
  const activeIndexRef = useRef(0)

  const currentContent = TAB_CONTENT[activeTab]

  // Clique numa aba: se o pin estiver ativo, rola até o segmento correspondente
  // (o onUpdate troca a aba); caso contrário, troca direto.
  const handleTabClick = (tab: TabName) => {
    const trigger = pinTriggerRef.current
    const idx = TAB_KEYS.indexOf(tab)
    if (trigger) {
      const target = trigger.start + (trigger.end - trigger.start) * ((idx + 0.5) / NUM_TABS)
      window.scrollTo({ top: target, behavior: 'smooth' })
    } else {
      setActiveTab(tab)
    }
  }

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      
      if (!prefersReducedMotion) {
        gsap.fromTo('.anim-story-header', 
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top 80%',
            }
          }
        )

        gsap.fromTo('.anim-story-tabs', 
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top 60%',
            }
          }
        )

        gsap.fromTo('.anim-story-card', 
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: '.anim-story-tabs',
              start: 'top 80%',
            }
          }
        )
      } else {
        gsap.set(['.anim-story-header', '.anim-story-tabs', '.anim-story-card'], { opacity: 1, y: 0 })
      }

      // Troca de abas guiada pelo scroll: trava (pin) a seção centralizada e
      // distribui a rolagem entre as abas. Só no desktop e sem reduced-motion.
      const mm = gsap.matchMedia()
      mm.add('(min-width: 1024px) and (prefers-reduced-motion: no-preference)', () => {
        const trigger = ScrollTrigger.create({
          trigger: containerRef.current,
          start: 'center center',
          end: () => `+=${window.innerHeight * NUM_TABS}`,
          pin: true,
          pinSpacing: true,
          anticipatePin: 1,
          onUpdate: (self) => {
            const idx = Math.min(NUM_TABS - 1, Math.floor(self.progress * NUM_TABS))
            if (idx !== activeIndexRef.current) {
              activeIndexRef.current = idx
              setActiveTab(TAB_KEYS[idx])
            }
          },
        })
        pinTriggerRef.current = trigger

        return () => {
          pinTriggerRef.current = null
          trigger.kill()
        }
      })

      return () => mm.revert()
    },
    { scope: containerRef }
  )

  return (
    <section ref={containerRef} className="bg-brand-beige py-24 overflow-hidden border-t border-brand-black/5">
      <div className="container mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header Part */}
        <div className="grid lg:grid-cols-2 gap-12 items-end mb-16 relative z-10">
          <div>
            <SectionBadge variant="light-pink" className="anim-story-header opacity-0 translate-y-10 mb-4">
              Vantagens exclusivas
            </SectionBadge>
            <h2 className="anim-story-header opacity-0 translate-y-10 text-5xl sm:text-6xl font-heading font-extrabold leading-[1.05] tracking-tight text-brand-black text-balance">
              Para quem constrói<br />o próprio caminho.
            </h2>
          </div>
          <div className="anim-story-header opacity-0 translate-y-10 lg:pb-4 flex flex-col items-start lg:items-start">
            <p className="text-xl text-brand-black/70 leading-relaxed mb-6 font-medium">
              Seja para criar sua marca do zero ou liderar as vendas na sua região, entregamos a estrutura de produção de alto padrão e o suporte de marketing que o seu negócio merece.
            </p>
          </div>
        </div>

        {/* Tabs */}
        <div className="anim-story-tabs opacity-0 translate-y-10 flex justify-center mb-8 relative z-20">
          <div className="bg-white rounded-full p-1.5 flex overflow-x-auto max-w-full no-scrollbar shadow-md border border-brand-black/10">
            {(Object.keys(TAB_CONTENT) as TabName[]).map((tab) => {
              const tabInfo = TAB_CONTENT[tab];
              return (
                <button
                  key={tab}
                  onClick={() => handleTabClick(tab)}
                  className={`px-8 py-3.5 rounded-full text-sm font-bold transition-all whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 ${
                    activeTab === tab
                      ? `${tabInfo.colorClass} shadow-md scale-105`
                      : 'text-brand-black/60 hover:text-brand-black hover:bg-brand-black/5 focus-visible:ring-brand-pink'
                  }`}
                >
                  {tab}
                </button>
              )
            })}
          </div>
        </div>

        {/* Main Content Card (Dynamic) */}
        <div className="anim-story-card opacity-0 translate-y-10 bg-white rounded-[2.5rem] p-8 lg:p-16 flex flex-col lg:flex-row items-center gap-12 overflow-hidden border-2 border-brand-black shadow-2xl relative">
          


          {/* Left Text */}
          <div className="w-full lg:flex-1 text-left z-10 min-h-[320px] flex flex-col justify-center items-start">
            <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-8 transition-colors duration-500 border border-brand-black/10 shadow-sm ${currentContent.iconColor}`}>
              {currentContent.icon}
            </div>
            <h3 className="text-4xl sm:text-5xl font-heading font-extrabold mb-6 animate-in fade-in slide-in-from-bottom-4 duration-500 text-brand-black text-balance leading-tight" key={currentContent.title}>
              {currentContent.title}
            </h3>
            <p className="text-xl text-brand-black/70 mb-8 max-w-md leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-700 font-medium" key={currentContent.description}>
              {currentContent.description}
            </p>
          </div>

          {/* Right Graphics (Dynamic Mockups) */}
          <div className="w-full lg:flex-1 relative h-[380px] lg:h-[400px] flex justify-center items-center perspective-[1000px] mt-8 lg:mt-0 z-10">
             <div key={activeTab} className="w-full h-full relative animate-in fade-in zoom-in-95 duration-500 scale-[0.8] sm:scale-100 origin-top flex justify-center items-center">
                {currentContent.visuals}
             </div>
          </div>
        </div>
      </div>
    </section>
  )
}
