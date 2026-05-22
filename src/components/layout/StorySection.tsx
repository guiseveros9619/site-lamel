'use client'

import { useState, useRef } from 'react'
import { CheckCircle2, ShoppingBag, Zap, Shirt, Star, Tag, Smartphone, Scissors } from 'lucide-react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { SectionBadge } from '@/components/ui/SectionBadge'

gsap.registerPlugin(useGSAP)

function PixVisuals() {
  const container = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 2 })

    tl.set('.pix-notificacao', { y: 30, opacity: 0, scale: 0.95 })
      .set('.transfer-badge', { opacity: 0, scale: 0.8 })
      .set('.pix-reputacao', { scale: 1 })
      
      // 1. Notificação aparece
      .to('.pix-notificacao', { y: 0, opacity: 1, scale: 1, duration: 0.6, ease: 'back.out(1.5)' })
      
      // 3. Status aparece
      .to('.transfer-badge', { opacity: 1, scale: 1, duration: 0.4, ease: 'back.out(2)' }, '+=0.2')
      
      // 4. Flash do Card e Efeito
      .to('.pix-notificacao', { duration: 0.3 }, '-=0.2')
      .to('.pix-reputacao', { scale: 1.03, borderColor: 'rgba(255,138,76,0.3)', duration: 0.3 }, '+=0.3')
      .to('.pix-reputacao', { scale: 1, duration: 0.3 }, '+=0.5')

  }, { scope: container })

  return (
    <div ref={container} className="relative w-full h-full flex justify-center lg:block">
       {/* Mockup 1: Private Label */}
      <div className="pix-reputacao absolute left-1/2 -translate-x-1/2 ml-[-40px] lg:ml-0 lg:left-auto lg:translate-x-0 lg:right-[35%] top-0 sm:top-4 sm:rotate-[-6deg] z-10 w-64 rounded-2xl bg-brand-black overflow-hidden border border-brand-beige/10">
         <div className="h-32 bg-brand-pink flex items-center justify-center border-b border-brand-black/10 relative overflow-hidden">
             {/* Textura de fundo */}
             <div className="absolute inset-0 opacity-20 mix-blend-overlay bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjZmZmIj48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDBMOCA4Wk04IDBMMCA4WiIgc3Ryb2tlPSIjMDAwIiBzdHJva2Utd2lkdGg9IjEiPjwvcGF0aD4KPC9zdmc+')]"></div>
             
             <div className="w-16 h-16 rounded-full bg-brand-black flex items-center justify-center border-4 border-brand-pink relative z-10">
               <Scissors size={24} className="text-brand-pink" />
             </div>
          </div>
          <div className="p-6">
             <div className="flex justify-between items-end mb-4">
               <p className="text-xs font-bold text-brand-beige/50 uppercase tracking-widest">Serviço Exclusivo</p>
               <div className="flex text-brand-green text-sm origin-right"><Star size={14} fill="currentColor" /></div>
             </div>
             <h4 className="text-2xl font-heading font-black mb-1 text-brand-beige leading-tight">Private Label Completo</h4>
             <p className="text-xs text-brand-pink bg-brand-pink/10 inline-block px-2 py-1 rounded-sm font-bold mt-2 uppercase tracking-wider">Sua Marca Aqui</p>
          </div>
       </div>

       {/* Mockup 2: Detalhes Customização */}
       <div className="pix-notificacao absolute left-1/2 -translate-x-1/2 ml-[40px] lg:ml-0 lg:left-auto lg:translate-x-0 lg:right-[5%] top-24 sm:top-24 sm:rotate-[4deg] z-20 w-72 rounded-2xl bg-brand-beige overflow-hidden border-2 border-brand-black shadow-2xl">
          <div className="p-4 border-b border-brand-black/10 flex items-center gap-3">
              <div className="w-10 h-10 bg-brand-black rounded-full flex items-center justify-center text-brand-beige">
                 <Shirt size={20} strokeWidth={2} />
              </div>
              <div>
                 <h4 className="font-heading font-bold text-sm text-brand-black">Sua Identidade</h4>
                 <p className="text-xs text-brand-black/60 font-medium">100% Personalizado</p>
              </div>
          </div>
          <div className="p-6 bg-white flex flex-col items-center text-center">
             <span className="text-xs font-bold text-brand-black/40 uppercase tracking-widest mb-3">Possibilidades</span>
             
             <div className="flex flex-col gap-2 w-full text-left">
               <div className="flex items-center gap-2 text-sm font-bold text-brand-black">
                 <CheckCircle2 size={16} className="text-brand-green" /> Estampas Exclusivas
               </div>
               <div className="flex items-center gap-2 text-sm font-bold text-brand-black">
                 <CheckCircle2 size={16} className="text-brand-green" /> Logo Aplicada
               </div>
               <div className="flex items-center gap-2 text-sm font-bold text-brand-black">
                 <CheckCircle2 size={16} className="text-brand-green" /> Sem Identificação Nossa
               </div>
             </div>
             
             <div className="transfer-badge inline-flex items-center gap-1.5 bg-brand-pink/20 text-brand-black text-xs font-bold px-3 py-1.5 rounded-full mt-4">
                Equipe Dedicada
             </div>
         </div>
      </div>
    </div>
  )
}

function IAVisuals() {
  const container = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 2.5 })
    
    tl.set('.ia-progress', { width: '0%' })
      .set('.ia-check-icon', { opacity: 0, scale: 0 })
      .set('.ia-approved', { opacity: 0, scale: 0.5, y: 10 })
      .set('.ia-video', { y: 20, opacity: 0, rotation: 6 })
      .set('.ia-checks', { x: 20, opacity: 0, rotation: -4 })

      // Entrada dos cards
      .to('.ia-video', { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out' })
      .to('.ia-checks', { x: 0, opacity: 1, duration: 0.6, ease: 'power2.out' }, '-=0.4')
      
      // Simulação
      .to('.ia-progress', { width: '33%', duration: 0.5, ease: 'power1.inOut' }, '+=0.2')
      .to('.check-audio', { opacity: 1, scale: 1, duration: 0.4, ease: 'back.out(2)' })
      
      .to('.ia-progress', { width: '66%', duration: 0.5, ease: 'power1.inOut' })
      .to('.check-hashtag', { opacity: 1, scale: 1, duration: 0.4, ease: 'back.out(2)' })
      
      .to('.ia-progress', { width: '100%', duration: 0.5, ease: 'power1.inOut' })
      .to('.check-mention', { opacity: 1, scale: 1, duration: 0.4, ease: 'back.out(2)' })
      
      // Aprovação final
      .to('.ia-approved', { opacity: 1, scale: 1, y: 0, duration: 0.5, ease: 'back.out(1.5)' }, '+=0.2')
      .to('.ia-checks', { borderColor: 'rgba(123,196,127,1)', duration: 0.4 }, '<')

  }, { scope: container })

  return (
    <div ref={container} className="relative w-full h-full flex justify-center lg:block">
      {/* Mockup 1: Qualidade */}
      <div className="ia-video absolute left-1/2 -translate-x-1/2 ml-[-40px] lg:ml-0 lg:left-auto lg:translate-x-0 lg:-right-4 top-0 sm:top-4 sm:rotate-[6deg] z-10 w-64 rounded-2xl bg-brand-black overflow-hidden border border-brand-beige/10">
         <div className="h-24 bg-brand-beige flex items-center justify-center relative border-b border-brand-black/10">
            <div className="flex flex-col gap-2 relative z-10 w-full px-6">
               <div className="flex items-center gap-2 text-xs font-bold text-brand-black uppercase tracking-wider">
                  <div className="w-2 h-2 bg-brand-pink rounded-full animate-pulse"></div> Controle Rigoroso
               </div>
               <div className="w-full bg-brand-black/10 rounded-full h-1.5 overflow-hidden">
                  <div className="ia-progress bg-brand-pink w-[0%] h-full rounded-full"></div>
               </div>
            </div>
         </div>
         <div className="p-5 flex flex-col gap-3">
            <div className="flex justify-between items-center">
              <span className="text-xs text-brand-beige/60 font-medium">Inspeção Visual</span>
              <span className="text-[10px] text-brand-pink bg-brand-pink/10 px-2 py-1 rounded font-bold uppercase tracking-wider">Aprovado</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs text-brand-beige/60 font-medium">Teste de Resistência</span>
              <span className="text-[10px] text-brand-pink bg-brand-pink/10 px-2 py-1 rounded font-bold uppercase tracking-wider">Aprovado</span>
            </div>
         </div>
      </div>

       {/* Mockup 2: Detalhes Técnicos */}
       <div className="ia-checks absolute left-1/2 -translate-x-1/2 ml-[40px] lg:ml-0 lg:left-auto lg:translate-x-0 lg:right-[20%] top-24 sm:top-20 sm:rotate-[-4deg] z-20 w-72 rounded-2xl bg-white overflow-hidden border-2 border-brand-black shadow-xl transition-colors duration-300">
         <div className="p-6 border-b border-brand-black/10 flex items-center justify-between bg-brand-beige">
            <div className="flex items-center gap-2">
               <Star size={20} className="text-brand-pink fill-brand-pink" />
               <span className="font-heading font-bold text-sm text-brand-black">Padrão Menegotti</span>
            </div>
            <div className="bg-brand-black text-brand-beige text-[10px] font-black uppercase px-2 py-1 rounded-sm">Premium</div>
         </div>
         <div className="p-6 flex flex-col gap-4">
            
            <div className="bg-brand-beige/50 rounded-xl border border-brand-black/5 overflow-hidden">
              <div className="flex items-center justify-between p-3 border-b border-brand-black/5">
                 <div className="flex items-center gap-2 text-xs font-bold text-brand-black">
                    <span>Fio 30.1 Penteado</span>
                 </div>
                 <CheckCircle2 size={16} className="ia-check-icon check-audio text-brand-green origin-center" />
              </div>
              <div className="flex items-center justify-between p-3 border-b border-brand-black/5">
                 <div className="flex items-center gap-2 text-xs font-bold text-brand-black">
                    <span>Costura Reforçada</span>
                 </div>
                 <CheckCircle2 size={16} className="ia-check-icon check-hashtag text-brand-green origin-center" />
              </div>
              <div className="flex items-center justify-between p-3">
                 <div className="flex items-center gap-2 text-xs font-bold text-brand-black">
                    <span>Ribana Canelada</span>
                 </div>
                 <CheckCircle2 size={16} className="ia-check-icon check-mention text-brand-green origin-center" />
              </div>
            </div>
 
            <div className="flex justify-center mt-1 min-h-[16px]">
               <span className="ia-approved text-[11px] font-black text-brand-pink uppercase tracking-widest text-center origin-bottom bg-brand-pink/10 px-3 py-1 rounded-full">
                  Qualidade Assegurada
               </span>
            </div>
         </div>
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
         <div className="h-20 bg-brand-black flex items-center px-4 border-b border-brand-black/20 gap-3 text-brand-beige">
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
              <span className="text-[10px] text-brand-beige bg-brand-black px-2 py-1 rounded-sm font-bold uppercase tracking-wider">Personalizado</span>
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
  'Personalização': {
    icon: <Scissors size={32} />,
    iconColor: 'bg-brand-pink text-brand-black',
    colorClass: 'bg-brand-pink text-brand-black focus-visible:ring-brand-pink',
    title: 'Personalize com a sua logomarca',
    description: 'Receba os produtos sem nenhuma identificação da nossa marca ou personalize os produtos com a sua logomarca. Uma experiência de private label completa para o seu negócio decolar.',
    visuals: <PixVisuals />
  },
  'Qualidade Premium': {
    icon: <Shirt size={32} />,
    iconColor: 'bg-brand-pink text-brand-black',
    colorClass: 'bg-brand-pink text-brand-black focus-visible:ring-brand-pink',
    title: 'O melhor algodão do Brasil',
    description: 'Nossas peças são confeccionadas com algodão 100% Fio 30.1 penteado Premium das Malharias Menegotti. Rigoroso controle de qualidade, da inspeção até os testes de resistência.',
    visuals: <IAVisuals />
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

export function StorySection() {
  const [activeTab, setActiveTab] = useState<TabName>('Personalização')
  const containerRef = useRef<HTMLElement>(null)

  const currentContent = TAB_CONTENT[activeTab]

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
    },
    { scope: containerRef }
  )

  return (
    <section ref={containerRef} className="bg-brand-beige py-24 overflow-hidden border-t border-brand-black/5">
      <div className="container mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header Part */}
        <div className="grid lg:grid-cols-2 gap-12 items-end mb-16 relative z-10">
          <div>
            <SectionBadge variant="dark-pink" className="anim-story-header opacity-0 translate-y-10 mb-4">
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
          <div className="bg-brand-black rounded-full p-1.5 flex overflow-x-auto max-w-full no-scrollbar shadow-xl border border-brand-beige/10">
            {(Object.keys(TAB_CONTENT) as TabName[]).map((tab) => {
              const tabInfo = TAB_CONTENT[tab];
              return (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-8 py-3.5 rounded-full text-sm font-bold transition-all whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 ${
                    activeTab === tab 
                      ? `${tabInfo.colorClass} shadow-md scale-105` 
                      : 'text-brand-beige/70 hover:text-brand-beige hover:bg-brand-beige/10 focus-visible:ring-brand-pink'
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
          
          {/* Estrela decorativa */}
          <div className="absolute -top-10 -right-10 text-brand-beige opacity-50 z-0">
            <Star size={200} className="fill-current" />
          </div>

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
