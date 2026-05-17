'use client'

import { useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { TextPlugin } from 'gsap/TextPlugin'
import { useGSAP } from '@gsap/react'
import { MousePointer2, Clock, ShieldCheck, DollarSign, ChevronLeft, Share2, Music, CheckCircle2, Copy, ArrowRight, Flame, TrendingUp } from 'lucide-react'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, TextPlugin, useGSAP)
}

const STEPS = [
  { id: 'marketplace', label: 'Escolha a Campanha' },
  { id: 'reserve', label: 'Reserve sua Vaga' },
  { id: 'link', label: 'Cole o Link' },
  { id: 'pix', label: 'Receba o PIX' },
  { id: 'bonus', label: 'Metas e Bônus' },
]

export function StepByStepCriadores() {
  const container = useRef<HTMLDivElement>(null)
  const [activeStep, setActiveTab] = useState(0)

  useGSAP(
    () => {
      const cards = gsap.utils.toArray<HTMLElement>('.step-card-cr')

      // Animação de entrada da navegação lateral
      gsap.from('.step-nav-anim', {
        scrollTrigger: {
          trigger: container.current,
          start: 'top 80%',
        },
        y: 20,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
      })

      // Sticky Navigation
      ScrollTrigger.create({
        trigger: '.sticky-nav-cr',
        start: 'top 80px',
        end: 'bottom top',
        endTrigger: container.current,
        pin: true,
        pinSpacing: false,
      })

      // Active Tab updates based on scroll
      cards.forEach((card, index) => {
        ScrollTrigger.create({
          trigger: card,
          start: 'top center',
          end: 'bottom center',
          onEnter: () => setActiveTab(index),
          onEnterBack: () => setActiveTab(index),
        })

        // Text animation for each card when scrolling into view
        gsap.from((card as HTMLElement).querySelectorAll('.step-text-anim'), {
          scrollTrigger: {
            trigger: card,
            start: 'top 80%',
          },
          y: 40,
          opacity: 0,
          duration: 1,
          stagger: 0.15,
          ease: 'power3.out',
        })
      })

      // ==========================================
      // ANIMATION LOOPS CELULAR
      // ==========================================

      // STEP 1: Marketplace e Participar
      const tlMarket = gsap.timeline({ repeat: -1, repeatDelay: 1.5 })
      tlMarket
        .set('.cr-cursor-1', { opacity: 0, x: 100, y: 150 })
        .set('.cr-btn-participar', { scale: 1, backgroundColor: '#d8b4fe' }) // brand-purple
        
        // Feed Scroll
        .to('.cr-feed-scroll', { y: -120, duration: 1.5, ease: 'power2.inOut' })
        
        // Cursor enter
        .to('.cr-cursor-1', { opacity: 1, x: 0, y: 50, duration: 0.8, ease: 'power2.out' })
        
        // Hover
        .to('.cr-cursor-1', { scale: 0.8, duration: 0.1 })
        .to('.cr-btn-participar', { scale: 0.95, duration: 0.1 }, "<")
        .to('.cr-cursor-1', { scale: 1, duration: 0.1 })
        .to('.cr-btn-participar', { scale: 1, duration: 0.1 }, "<")

        // Exit
        .to('.cr-cursor-1', { opacity: 0, y: 150, duration: 0.6, ease: 'power2.in' })
        .to('.cr-feed-scroll', { y: 0, duration: 1, ease: 'power2.inOut', delay: 1 })

      // STEP 2: Reserva de Vaga
      const tlReserve = gsap.timeline({ repeat: -1, repeatDelay: 1.5 })
      tlReserve
        .set('.cr-cursor-2', { opacity: 0, x: 50, y: 100 })
        .set('.cr-bottom-sheet-1', { y: '100%' })
        .set('.cr-btn-reserve', { scale: 1 })
        .set('.cr-timer', { opacity: 0, scale: 0.8 })
        
        // Open Bottom Sheet
        .to('.cr-bottom-sheet-1', { y: '0%', duration: 0.6, ease: 'power3.out' })
        
        // Cursor enter
        .to('.cr-cursor-2', { opacity: 1, x: -10, y: 10, duration: 0.6, ease: 'power2.out' })
        
        // Click
        .to('.cr-cursor-2', { scale: 0.8, duration: 0.1 })
        .to('.cr-btn-reserve', { scale: 0.95, duration: 0.1 }, "<")
        .to('.cr-cursor-2', { scale: 1, duration: 0.1 })
        .to('.cr-btn-reserve', { scale: 1, duration: 0.1 }, "<")

        // Show Timer
        .to('.cr-timer', { opacity: 1, scale: 1, duration: 0.4, ease: 'back.out(1.5)' })
        
        // Exit
        .to('.cr-cursor-2', { opacity: 0, y: 100, duration: 0.4 })
        .to({}, { duration: 1.5 }) // Pausa
        .to('.cr-bottom-sheet-1', { y: '100%', duration: 0.5, ease: 'power3.in' })

      // STEP 3: Cola o Link e IA
      const tlLink = gsap.timeline({ repeat: -1, repeatDelay: 2 })
      tlLink
        .set('.cr-cursor-3', { opacity: 0, x: 50, y: 150 })
        .set('.cr-input-link', { text: '' })
        .set(['.cr-check-1', '.cr-check-2', '.cr-check-3'], { opacity: 0, scale: 0 })
        .set('.cr-btn-enviar', { scale: 1, opacity: 0.5 })
        
        // Cursor vai pro input
        .to('.cr-cursor-3', { opacity: 1, x: -20, y: -70, duration: 0.8, ease: 'power2.out' })
        .to('.cr-cursor-3', { scale: 0.8, duration: 0.1 })
        .to('.cr-cursor-3', { scale: 1, duration: 0.1 })

        // Digita link
        .to('.cr-input-link', { text: 'tiktok.com/@criador/video/123...', duration: 1, ease: 'none' })
        
        // Validações IA (Checks verdes)
        .to('.cr-check-1', { opacity: 1, scale: 1, duration: 0.3, ease: 'back.out(2)' })
        .to('.cr-check-2', { opacity: 1, scale: 1, duration: 0.3, ease: 'back.out(2)' })
        .to('.cr-check-3', { opacity: 1, scale: 1, duration: 0.3, ease: 'back.out(2)' })
        
        // Botão ativa
        .to('.cr-btn-enviar', { opacity: 1, backgroundColor: '#d8b4fe', color: '#000', duration: 0.3 })

        // Cursor vai pro botão e clica
        .to('.cr-cursor-3', { x: 0, y: 40, duration: 0.5, ease: 'power2.inOut' })
        .to('.cr-cursor-3', { scale: 0.8, duration: 0.1 })
        .to('.cr-btn-enviar', { scale: 0.95, duration: 0.1 }, "<")
        .to('.cr-cursor-3', { scale: 1, duration: 0.1 })
        .to('.cr-btn-enviar', { scale: 1, duration: 0.1 }, "<")

        // Exit
        .to('.cr-cursor-3', { opacity: 0, y: 150, duration: 0.5 })

      // STEP 4: Carteira e PIX
      const tlPix = gsap.timeline({ repeat: -1, repeatDelay: 2 })
      const balanceObj = { val: 0 }
      const updateBalance = () => {
         const el = document.querySelector('.cr-balance-val')
         if(el) el.innerHTML = `R$ ${Math.floor(balanceObj.val)},00`
      }

      tlPix
        .set('.cr-cursor-4', { opacity: 0, x: 0, y: 100 })
        .set('.cr-btn-sacar', { scale: 1 })
        .set('.cr-pix-fly', { y: 0, opacity: 0, scale: 0.5 })
        .set(balanceObj, { val: 0, onUpdate: updateBalance })
        
        // Sobe o saldo animado
        .to(balanceObj, { val: 270, duration: 1.5, ease: 'power3.out', onUpdate: updateBalance })
        
        // Cursor clica sacar
        .to('.cr-cursor-4', { opacity: 1, x: 0, y: -20, duration: 0.8, ease: 'power2.out' })
        .to('.cr-cursor-4', { scale: 0.8, duration: 0.1 })
        .to('.cr-btn-sacar', { scale: 0.95, duration: 0.1 }, "<")
        .to('.cr-cursor-4', { scale: 1, duration: 0.1 })
        .to('.cr-btn-sacar', { scale: 1, duration: 0.1 }, "<")

        // Moedas voando
        .to('.cr-pix-fly', { y: -100, opacity: 1, scale: 1.2, duration: 0.5, stagger: 0.1, ease: 'power2.out' })
        .to('.cr-pix-fly', { opacity: 0, y: -150, duration: 0.5, stagger: 0.1, ease: 'power2.in' })

        // Exit
        .to('.cr-cursor-4', { opacity: 0, duration: 0.4 })

      // STEP 5: Bônus de Performance
      const tlBonus = gsap.timeline({ repeat: -1, repeatDelay: 1.5 })
      const bonusMoney = { val: 0 }

      const updateBonusMoney = () => {
         const el = document.querySelector('.bonus-money-val')
         if(el) el.innerHTML = `R$ ${Math.floor(bonusMoney.val)},00`
      }

      tlBonus
        .set('.bonus-bar-fill', { height: '0%', backgroundColor: '#52525b' })
        .set('.bonus-avatar', { bottom: '0%', borderColor: '#52525b', boxShadow: 'none' })
        .set('.bonus-avatar-flame', { scale: 0, opacity: 0 })
        .set(['.bonus-cp-1', '.bonus-cp-2', '.bonus-cp-3'], { borderColor: 'rgba(255,255,255,0.1)', color: '#a1a1aa', scale: 1, backgroundColor: '#1c1c1c' })
        .set('.bonus-badge-1', { opacity: 0.5, scale: 0.95, borderColor: 'rgba(255,255,255,0.05)', backgroundColor: '#111' })
        .set(['.bonus-badge-2', '.bonus-badge-3'], { scale: 0, opacity: 0, x: -20 })
        .set(bonusMoney, { val: 0, onUpdate: updateBonusMoney })

        // Fase 1: Meta base (10k views)
        .to('.bonus-bar-fill', { height: '25%', duration: 1, ease: 'power2.inOut' }, 'fase1')
        .to('.bonus-avatar', { bottom: '25%', duration: 1, ease: 'power2.inOut' }, 'fase1')
        .to('.bonus-cp-1', { borderColor: '#fff', color: '#fff', scale: 1.1, backgroundColor: '#2a2a2a', duration: 0.3, ease: 'back.out(2)' })
        .to('.bonus-badge-1', { opacity: 1, scale: 1, borderColor: 'rgba(255,255,255,0.2)', backgroundColor: '#222', duration: 0.4, ease: 'back.out(1.5)' }, "<")
        .to(bonusMoney, { val: 50, duration: 0.5, ease: 'power2.out', onUpdate: updateBonusMoney }, "<")
        .to({}, { duration: 0.5 })

        // Fase 2: Multiplicador (hit - 50k views)
        .to('.bonus-bar-fill', { height: '60%', backgroundColor: '#d8b4fe', duration: 1.2, ease: 'power2.in' }, 'fase2')
        .to('.bonus-avatar', { bottom: '60%', borderColor: '#d8b4fe', boxShadow: '0 0 20px rgba(216,180,254,0.4)', duration: 1.2, ease: 'power2.in' }, 'fase2')
        .to('.bonus-cp-2', { borderColor: '#d8b4fe', color: '#d8b4fe', scale: 1.1, backgroundColor: 'rgba(216,180,254,0.1)', boxShadow: '0 0 15px rgba(216,180,254,0.3)', duration: 0.3, ease: 'back.out(2)' })
        .to('.bonus-badge-2', { scale: 1, opacity: 1, x: 0, duration: 0.4, ease: 'back.out(1.5)' }, "<")
        .to(bonusMoney, { val: 100, duration: 0.8, ease: 'power2.out', onUpdate: updateBonusMoney }, "<")
        .to({}, { duration: 0.5 })

        // Fase 3: Mega Hit (viral - 100k views)
        .to('.bonus-bar-fill', { height: '100%', backgroundColor: '#22c55e', duration: 1, ease: 'power1.inOut' }, 'fase3')
        .to('.bonus-avatar', { bottom: '100%', borderColor: '#22c55e', boxShadow: '0 0 30px rgba(34,197,94,0.6)', duration: 1, ease: 'power1.inOut' }, 'fase3')
        .to('.bonus-avatar-flame', { scale: 1, opacity: 1, duration: 0.3 }, 'fase3+=0.5')
        .to('.bonus-cp-3', { borderColor: '#22c55e', color: '#22c55e', scale: 1.2, backgroundColor: 'rgba(34,197,94,0.1)', boxShadow: '0 0 30px rgba(34,197,94,0.4)', duration: 0.3, ease: 'back.out(2.5)' })
        .to('.bonus-badge-3', { scale: 1, opacity: 1, x: 0, duration: 0.4, ease: 'back.out(1.5)' }, "<")
        .to(bonusMoney, { val: 250, duration: 1, ease: 'power3.out', onUpdate: updateBonusMoney }, "<")

        .to({}, { duration: 2 })

    },
    { scope: container }
  )

  return (
    <section ref={container} className="bg-[#121212] relative pb-32">
      
      {/* Sticky Navigation Bar */}
      <div className="sticky-nav-cr z-40 w-full bg-[#121212]/90 backdrop-blur-md border-b border-white/5 hidden md:block">
        <div className="container mx-auto max-w-5xl px-6 h-16 flex items-center justify-between overflow-x-auto no-scrollbar">
           {STEPS.map((step, i) => (
              <div 
                key={step.id} 
                className={`step-nav-anim text-sm font-bold whitespace-nowrap transition-colors duration-300 relative py-4 px-2
                  ${activeStep >= i ? 'text-brand-purple' : 'text-zinc-500'}
                `}
              >
                 {step.label}
                 {activeStep === i && (
                   <div className="absolute bottom-0 left-0 w-full h-[2px] bg-brand-purple"></div>
                 )}
              </div>
           ))}
        </div>
      </div>

      <div className="container mx-auto max-w-6xl px-6 lg:px-8 mt-16 flex flex-col gap-24 lg:gap-0">
        
        {/* Step 1: Marketplace */}
        <div className="step-card-cr flex flex-col lg:flex-row items-center min-h-[70vh] border-b border-white/5 pb-24 lg:pb-0">
           <div className="flex-1 lg:pr-16 mb-12 lg:mb-0">
              <div className="step-text-anim w-12 h-12 rounded-full bg-brand-purple/20 text-brand-purple font-black flex items-center justify-center mb-6 border border-brand-purple/30">1</div>
              <h2 className="step-text-anim text-4xl sm:text-5xl font-extrabold mb-6 tracking-tight">Escolha a sua Campanha</h2>
              <p className="step-text-anim text-xl text-zinc-400 font-medium leading-relaxed">
                 Escolha entre promover aquele evento imperdível da sua cidade ou a nova música do seu artista favorito. Veja na hora quanto você vai ganhar em PIX ou ingressos VIP antes mesmo de gravar.
              </p>
           </div>
           
           <div className="flex-1 w-full flex justify-center items-center">
              {/* Celular Mockup */}
              <div className="w-[280px] h-[520px] bg-zinc-900 rounded-3xl border border-white/10 relative overflow-hidden shadow-2xl flex flex-col">
                 
                 <div className="flex-1 overflow-hidden relative bg-[#111]">
                    <div className="cr-feed-scroll flex flex-col gap-4 p-4 pt-10">
                       
                       {/* Campanha 1 */}
                       <div className="bg-[#1c1c1c] rounded-2xl overflow-hidden border border-white/5 pb-2">
                           <div className="h-44 relative">
                               <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1516280440503-a5fs2fs?q=80&w=600&auto=format&fit=crop')] bg-cover bg-center opacity-60"></div>
                               <div className="absolute inset-0 bg-gradient-to-t from-[#1c1c1c] to-transparent"></div>
                               
                               {/* Tags topo */}
                               <div className="absolute top-4 left-4 right-4 flex justify-between items-center">
                                  <div className="bg-black/50 backdrop-blur-md px-2 py-1 rounded-md flex items-center gap-1 text-[10px] text-white">
                                     <Clock size={10} /> 15 dias
                                  </div>
                               </div>

                               {/* Titulo sob a imagem */}
                               <div className="absolute bottom-4 left-4 right-4">
                                  <h3 className="font-bold text-lg leading-tight text-white shadow-black drop-shadow-md">Lançamento Noitada</h3>
                                  <p className="text-xs text-zinc-300 drop-shadow-md">Cafajestes</p>
                               </div>
                           </div>
                           
                           <div className="px-4">
                              <div className="bg-[#111] rounded-xl p-3 mb-4 border border-white/5 mt-2">
                                 <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Cachê Base</span>
                                 <h4 className="text-2xl font-black text-white">R$ 35,00</h4>
                                 <div className="w-full h-[1px] bg-white/5 my-2"></div>
                                 <div className="flex justify-between items-center text-[10px]">
                                     <span className="text-zinc-400">100k views</span>
                                     <span className="text-green-400 font-bold">+R$ 100,00</span>
                                 </div>
                              </div>

                              <button className="cr-btn-participar w-full py-2.5 rounded-xl bg-brand-purple text-black font-bold text-sm flex justify-center items-center relative">
                                  Participar <ArrowRight size={14} className="ml-1" />
                                  <MousePointer2 className="cr-cursor-1 absolute top-1/2 left-1/2 text-white fill-current w-6 h-6 rotate-[-15deg] z-30 pointer-events-none drop-shadow-lg" />
                              </button>
                           </div>
                       </div>

                       {/* Pra Você - Seção horizontal */}
                       <div className="pt-2">
                          <div className="flex items-center justify-between mb-2 px-1">
                             <h4 className="text-xs font-bold text-white">Pra Você</h4>
                             <span className="text-[9px] text-zinc-500 font-medium">Ver tudo</span>
                          </div>

                          <div className="flex gap-2 overflow-hidden">
                             {/* Mini Card 1 */}
                             <div className="shrink-0 w-[95px] h-[130px] rounded-xl overflow-hidden border border-white/5 relative bg-[#1c1c1c]">
                                <div className="absolute inset-x-0 top-0 h-[70px] bg-zinc-800"></div>
                                <div className="absolute inset-x-0 top-0 h-[70px] bg-gradient-to-t from-[#1c1c1c] to-transparent"></div>
                                <div className="absolute top-1.5 left-1.5 bg-black/50 backdrop-blur-md px-1.5 py-0.5 rounded text-[8px] text-white font-bold flex items-center gap-1">
                                   <Music size={8} /> Música
                                </div>
                                <div className="absolute bottom-1.5 left-1.5 right-1.5">
                                   <h5 className="text-[10px] font-bold text-white leading-tight mb-0.5 truncate">DJ Pedro — Vai</h5>
                                   <span className="text-[9px] text-green-400 font-bold">+R$ 20</span>
                                </div>
                             </div>

                             {/* Mini Card 2 */}
                             <div className="shrink-0 w-[95px] h-[130px] rounded-xl overflow-hidden border border-white/5 relative bg-[#1c1c1c]">
                                <div className="absolute inset-x-0 top-0 h-[70px] bg-zinc-800"></div>
                                <div className="absolute inset-x-0 top-0 h-[70px] bg-gradient-to-t from-[#1c1c1c] to-transparent"></div>
                                <div className="absolute top-1.5 left-1.5 bg-black/50 backdrop-blur-md px-1.5 py-0.5 rounded text-[8px] text-white font-bold flex items-center gap-1">
                                   <Clock size={8} /> Evento
                                </div>
                                <div className="absolute bottom-1.5 left-1.5 right-1.5">
                                   <h5 className="text-[10px] font-bold text-white leading-tight mb-0.5 truncate">Cafajestes Tour</h5>
                                   <span className="text-[9px] text-green-400 font-bold">+R$ 50</span>
                                </div>
                             </div>

                             {/* Mini Card 3 (peek) */}
                             <div className="shrink-0 w-[95px] h-[130px] rounded-xl overflow-hidden border border-white/5 relative bg-[#1c1c1c]">
                                <div className="absolute inset-x-0 top-0 h-[70px] bg-zinc-800"></div>
                                <div className="absolute inset-x-0 top-0 h-[70px] bg-gradient-to-t from-[#1c1c1c] to-transparent"></div>
                                <div className="absolute top-1.5 left-1.5 bg-black/50 backdrop-blur-md px-1.5 py-0.5 rounded text-[8px] text-white font-bold flex items-center gap-1">
                                   <Music size={8} /> Música
                                </div>
                                <div className="absolute bottom-1.5 left-1.5 right-1.5">
                                   <h5 className="text-[10px] font-bold text-white leading-tight mb-0.5 truncate">Festival ND</h5>
                                   <span className="text-[9px] text-green-400 font-bold">+R$ 35</span>
                                </div>
                             </div>
                          </div>
                       </div>

                    </div>
                 </div>
              </div>
           </div>
        </div>

        {/* Step 2: Reserva */}
        <div className="step-card-cr flex flex-col lg:flex-row-reverse items-center min-h-[70vh] border-b border-white/5 pb-24 lg:pb-0">
           <div className="flex-1 lg:pl-16 mb-12 lg:mb-0">
              <div className="step-text-anim w-12 h-12 rounded-full bg-brand-purple/20 text-brand-purple font-black flex items-center justify-center mb-6 border border-brand-purple/30">2</div>
              <h2 className="step-text-anim text-4xl sm:text-5xl font-extrabold mb-6 tracking-tight">Vaga Garantida</h2>
              <p className="step-text-anim text-xl text-zinc-400 font-medium leading-relaxed">
                 Achou a campanha ideal? Reserve sua vaga com 1 clique. Nós congelamos o seu cachê e seguramos o seu lugar na campanha. Você terá até 24 horas para criar, gravar e editar o seu conteúdo sem medo de perder a grana.
              </p>
           </div>
           
           <div className="flex-1 w-full flex justify-center items-center">
              {/* Celular Mockup */}
              <div className="w-[280px] h-[520px] bg-zinc-900 rounded-3xl border border-white/10 relative overflow-hidden shadow-2xl flex flex-col">
                 
                 {/* Fundo escurecido da tela do app */}
                 <div className="flex-1 bg-[#111] relative p-4 pt-12">
                    <div className="flex items-center justify-between mb-6">
                        <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center"><ChevronLeft size={16}/></div>
                        <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center"><Share2 size={16}/></div>
                    </div>
                    <div className="w-20 h-20 bg-zinc-800 rounded-2xl mb-4"></div>
                    <div className="w-3/4 h-4 bg-zinc-800 rounded mb-2"></div>
                    <div className="w-1/2 h-4 bg-zinc-800 rounded"></div>
                    
                    {/* Overlay Modal */}
                    <div className="absolute inset-0 bg-black/60 z-10 backdrop-blur-[2px]"></div>

                    {/* Bottom Sheet */}
                    <div className="cr-bottom-sheet-1 absolute bottom-0 left-0 right-0 bg-[#1c1c1c] rounded-t-3xl border-t border-white/10 p-5 z-20 flex flex-col">
                        <div className="w-10 h-1 bg-white/20 rounded-full self-center mb-4"></div>
                        <h3 className="font-bold text-lg text-white mb-1">Participar da campanha</h3>
                        <p className="text-xs text-zinc-400 mb-4">Reserve 24h pra produzir.</p>

                        <div className="bg-[#111] rounded-xl p-4 mb-4 border border-white/5 flex flex-col gap-3">
                            <div className="flex gap-3">
                                <div className="mt-0.5"><Clock size={16} className="text-brand-purple"/></div>
                                <div>
                                    <h4 className="text-sm font-bold text-white">1. Reserva 24h pra você</h4>
                                    <p className="text-[10px] text-zinc-500 leading-tight mt-1">Travamos o pagamento e te damos tempo pra gravar e postar.</p>
                                </div>
                            </div>
                        </div>

                        <div className="cr-timer bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 text-center py-2 rounded-lg text-xs font-bold mb-4 flex items-center justify-center gap-2">
                           Tempo restante: 23:59:59
                        </div>

                        <button className="cr-btn-reserve w-full py-3 rounded-xl bg-brand-purple text-black font-bold text-sm relative">
                            Reservar 24h e postar
                        </button>
                    </div>

                 </div>
              </div>
           </div>
        </div>

        {/* Step 3: Link */}
        <div className="step-card-cr flex flex-col lg:flex-row items-center min-h-[70vh] border-b border-white/5 pb-24 lg:pb-0">
           <div className="flex-1 lg:pr-16 mb-12 lg:mb-0">
              <div className="step-text-anim w-12 h-12 rounded-full bg-brand-purple/20 text-brand-purple font-black flex items-center justify-center mb-6 border border-brand-purple/30">3</div>
              <h2 className="step-text-anim text-4xl sm:text-5xl font-extrabold mb-6 tracking-tight">Cole o link, nós fazemos o resto.</h2>
              <p className="step-text-anim text-xl text-zinc-400 font-medium leading-relaxed">
                 Postou o vídeo? É só copiar o link do TikTok, Reels ou Shorts e colar no nosso app. Nossa inteligência artificial audita o vídeo instantaneamente para garantir que você usou o áudio correto e seguiu as regras. 
              </p>
           </div>
           
           <div className="flex-1 w-full flex justify-center items-center">
              <div className="w-[280px] h-[520px] bg-zinc-900 rounded-3xl border border-white/10 relative overflow-hidden shadow-2xl flex flex-col">
                 
                 <div className="flex-1 bg-[#111] relative p-4 pt-12 flex flex-col justify-end">
                    
                    <div className="bg-[#1c1c1c] rounded-3xl border border-white/10 p-5 z-20 flex flex-col mb-2 h-[80%]">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="font-bold text-xl text-white">Cole o link do post</h3>
                        </div>

                        {/* Input Field Animado */}
                        <div className="bg-[#111] border border-white/10 rounded-xl p-3 flex items-center mb-4">
                           <Copy size={16} className="text-zinc-500 mr-2 shrink-0"/>
                           <span className="cr-input-link text-xs text-zinc-300 w-full truncate border-r-2 border-brand-purple whitespace-nowrap overflow-hidden inline-block h-4 leading-4"></span>
                        </div>

                        <div className="bg-[#111] border border-white/5 rounded-xl p-4 flex flex-col gap-3">
                            <span className="text-[10px] font-bold text-zinc-500 tracking-wider">ANTES DE ENVIAR, CONFIRA</span>
                            
                            <div className="flex items-center gap-2">
                               <div className="w-4 h-4 rounded-full border border-zinc-700 flex items-center justify-center relative">
                                  <CheckCircle2 size={16} className="cr-check-1 absolute text-green-500 bg-black rounded-full" />
                               </div>
                               <span className="text-xs text-zinc-300">Música da campanha</span>
                            </div>
                            
                            <div className="flex items-center gap-2">
                               <div className="w-4 h-4 rounded-full border border-zinc-700 flex items-center justify-center relative">
                                  <CheckCircle2 size={16} className="cr-check-2 absolute text-green-500 bg-black rounded-full" />
                               </div>
                               <span className="text-xs text-zinc-300">Hashtags pedidas</span>
                            </div>
                            
                            <div className="flex items-center gap-2">
                               <div className="w-4 h-4 rounded-full border border-zinc-700 flex items-center justify-center relative">
                                  <CheckCircle2 size={16} className="cr-check-3 absolute text-green-500 bg-black rounded-full" />
                               </div>
                               <span className="text-xs text-zinc-300">Post está público</span>
                            </div>
                        </div>

                        <div className="mt-auto">
                            <button className="cr-btn-enviar w-full py-3 rounded-xl bg-zinc-800 text-zinc-500 font-bold text-sm relative transition-colors duration-300">
                                Enviar para análise
                            </button>
                        </div>
                    </div>

                 </div>
              </div>
           </div>
        </div>

        {/* Step 4: Pix */}
        <div className="step-card-cr flex flex-col lg:flex-row items-center min-h-[70vh] border-b border-white/5 pb-24 lg:pb-0 lg:flex-row-reverse">
           <div className="flex-1 lg:pl-16 mb-12 lg:mb-0">
              <div className="step-text-anim w-12 h-12 rounded-full bg-brand-purple/20 text-brand-purple font-black flex items-center justify-center mb-6 border border-brand-purple/30">4</div>
              <h2 className="step-text-anim text-4xl sm:text-5xl font-extrabold mb-6 tracking-tight">Conteúdo postado, recompensa liberada.</h2>
              <p className="step-text-anim text-xl text-zinc-400 font-medium leading-relaxed">
                 Assim que a nossa IA validar seu conteúdo (o que leva até 48h), a recompensa fica disponível na sua carteira. Solicite o PIX direto na sua conta bancária em segundos ou acesse benefícios VIP para o evento. Você no controle.
              </p>
           </div>
           
           <div className="flex-1 w-full flex justify-center items-center">
              <div className="w-[280px] h-[520px] bg-zinc-900 rounded-3xl border border-white/10 relative overflow-hidden shadow-2xl flex flex-col">
                 
                 <div className="flex-1 bg-[#111] relative p-5 pt-16 flex flex-col">
                    
                    <h2 className="text-3xl font-bold text-white mb-6">Carteira</h2>

                    <div className="bg-[#1c1c1c] border border-white/10 rounded-2xl p-5 mb-4 relative z-10">
                        <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Saldo Disponível</span>
                        <h3 className="cr-balance-val text-4xl font-black text-white mt-1 mb-4">R$ 0,00</h3>
                        
                        <div className="flex justify-between border-t border-white/5 pt-3">
                            <div>
                                <span className="text-[10px] text-zinc-500 block">Pendente</span>
                                <span className="text-sm font-bold text-white">R$ 123,00</span>
                            </div>
                            <div className="text-right">
                                <span className="text-[10px] text-zinc-500 block">Limite Mensal</span>
                                <span className="text-sm font-bold text-white">R$ 200,00</span>
                            </div>
                        </div>
                    </div>

                    <div className="bg-[#1c1c1c] border border-white/5 rounded-xl p-3 flex items-center justify-between mb-6 relative z-10">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-lg bg-green-500/20 text-green-500 flex items-center justify-center">
                               <ShieldCheck size={16} />
                            </div>
                            <div>
                               <span className="text-xs font-bold text-white block">Chave PIX cadastrada</span>
                               <span className="text-[10px] text-zinc-500">***.***.***-66</span>
                            </div>
                        </div>
                    </div>

                    <button className="cr-btn-sacar w-full py-4 rounded-xl bg-brand-purple shadow-[0_0_20px_rgba(216,180,254,0.3)] text-black font-bold text-base relative z-10 mb-6">
                        Sacar via PIX
                    </button>

                    {/* Fake Transaction History */}
                    <div className="flex flex-col gap-2">
                        <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-2">Histórico</span>
                        <div className="bg-[#1c1c1c] p-3 rounded-xl border border-white/5 flex justify-between items-center">
                            <div>
                                <span className="text-xs font-bold text-white block">Cafajestes — Noitada</span>
                                <span className="text-[10px] text-zinc-500 block">16/05/2026</span>
                            </div>
                            <span className="text-sm font-bold text-green-400">+R$ 20,00</span>
                        </div>
                    </div>

                    {/* Moedas voando do botão */}
                    <div className="absolute top-1/2 left-1/2 pointer-events-none z-0">
                       <DollarSign className="cr-pix-fly absolute text-green-400" size={24} />
                       <DollarSign className="cr-pix-fly absolute text-green-400 left-[-30px] top-[10px]" size={20} />
                       <DollarSign className="cr-pix-fly absolute text-green-400 left-[30px] top-[5px]" size={16} />
                    </div>

                 </div>
              </div>
           </div>
        </div>

        {/* Step 5: Bônus de Performance */}
        <div className="step-card-cr flex flex-col lg:flex-row items-center min-h-[70vh] pb-24 lg:pb-0">
           <div className="flex-1 lg:pr-16 mb-12 lg:mb-0">
              <div className="step-text-anim w-12 h-12 rounded-full bg-brand-purple/20 text-brand-purple font-black flex items-center justify-center mb-6 border border-brand-purple/30">5</div>
              <h2 className="step-text-anim text-4xl sm:text-5xl font-extrabold mb-6 tracking-tight">Viralizou? Você ganha mais.</h2>
              <p className="step-text-anim text-xl text-zinc-400 font-medium leading-relaxed">
                 Você recebe o cachê base ao bater a meta. Mas se o conteúdo explodir, destrava bônus. Quanto mais engajamento, mais recompensas.
              </p>
           </div>

           <div className="flex-1 w-full lg:h-[420px] min-h-[300px] sm:min-h-[350px] lg:min-h-0 bg-[#1a1a1a] rounded-3xl p-8 lg:p-12 flex items-center justify-center relative overflow-hidden border border-white/5 shadow-2xl">

              {/* Gamification Dashboard */}
              <div className="w-full max-w-[320px] h-[360px] bg-[#111] rounded-3xl border border-white/10 shadow-2xl relative flex p-6 gap-6">

                 {/* Termômetro Vertical */}
                 <div className="relative w-8 h-full bg-[#1c1c1c] border border-white/5 rounded-full flex flex-col justify-end items-center py-2 z-10">
                    <div className="bonus-bar-fill w-2 bg-zinc-500 rounded-full absolute bottom-2 left-1/2 -translate-x-1/2 transition-colors duration-300"></div>

                    <div className="bonus-cp-3 absolute bottom-[100%] w-6 h-6 rounded-full bg-[#1c1c1c] border-2 border-white/10 flex items-center justify-center translate-y-1/2 z-20 transition-colors duration-300">
                      <Flame size={12} strokeWidth={3} />
                    </div>
                    <div className="bonus-cp-2 absolute bottom-[60%] w-5 h-5 rounded-full bg-[#1c1c1c] border-2 border-white/10 flex items-center justify-center translate-y-1/2 z-20 transition-colors duration-300">
                      <TrendingUp size={10} strokeWidth={3} />
                    </div>
                    <div className="bonus-cp-1 absolute bottom-[25%] w-4 h-4 rounded-full bg-[#1c1c1c] border-2 border-white/10 flex items-center justify-center translate-y-1/2 z-20 transition-colors duration-300"></div>

                    {/* Avatar do Criador "Subindo" */}
                    <div className="bonus-avatar absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-10 h-10 rounded-full border-2 border-zinc-500 bg-[#222] flex items-center justify-center z-30 shadow-lg overflow-hidden transition-colors duration-300">
                       <div className="w-full h-full bg-zinc-800 relative">
                         <div className="w-4 h-4 rounded-full bg-zinc-600 absolute top-2 left-1/2 -translate-x-1/2"></div>
                         <div className="w-8 h-8 rounded-full bg-zinc-600 absolute -bottom-4 left-1/2 -translate-x-1/2"></div>
                       </div>
                       <Flame size={18} className="bonus-avatar-flame absolute text-green-400 fill-green-400/20 drop-shadow-md z-40" />
                    </div>
                 </div>

                 {/* Informações Laterais */}
                 <div className="flex-1 flex flex-col justify-between py-2 relative z-10">

                    <div className="flex flex-col justify-between h-full absolute inset-0 py-2">
                       <div className="flex items-center translate-y-[-10px] relative z-10">
                          <div className="bonus-badge-3 bg-green-500/10 border border-green-500/30 px-3 py-1 rounded-lg backdrop-blur-sm">
                             <span className="block text-[10px] font-bold text-green-400 uppercase tracking-wider">Mega Hit!</span>
                             <span className="block text-xs font-black text-white">+ R$ 150</span>
                          </div>
                       </div>

                       <div className="flex items-center translate-y-[-30px] relative z-10">
                          <div className="bonus-badge-2 bg-brand-purple/10 border border-brand-purple/30 px-3 py-1 rounded-lg backdrop-blur-sm">
                             <span className="block text-[10px] font-bold text-brand-purple uppercase tracking-wider">Meta 100k View</span>
                             <span className="block text-xs font-black text-white">2x Bônus</span>
                          </div>
                       </div>

                       <div className="flex items-center translate-y-[-30px] relative z-10">
                          <div className="bonus-badge-1 px-3 py-1 bg-[#111] border border-white/5 rounded-lg opacity-50 scale-95 origin-left">
                             <span className="block text-[10px] font-bold text-zinc-400 uppercase tracking-wider">Meta 10k Views</span>
                             <span className="block text-xs font-bold text-white">R$ 50 Base</span>
                          </div>
                       </div>
                    </div>

                    {/* Contador Central Dinâmico */}
                    <div className="absolute -right-15 bottom-[230px] text-right bg-[#1c1c1c] border border-white/10 rounded-2xl p-4 shadow-[0_10px_40px_rgba(0,0,0,0.8)] z-30 transform translate-x-4">
                       <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest block mb-1">Pagamento Liberado</span>
                       <h3 className="bonus-money-val text-3xl font-black text-white font-mono leading-none tracking-tight">R$ 0,00</h3>
                    </div>

                 </div>

              </div>

           </div>
        </div>

      </div>
    </section>
  )
}
