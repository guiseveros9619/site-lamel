'use client'

import { useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { TextPlugin } from 'gsap/TextPlugin'
import { MotionPathPlugin } from 'gsap/MotionPathPlugin'
import { useGSAP } from '@gsap/react'
import { MousePointer2, Music, ShieldCheck, MapPin, ArrowRight, Target, Heart, MessageCircle, Send, Flame, TrendingUp } from 'lucide-react'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, TextPlugin, MotionPathPlugin, useGSAP)
}

const STEPS = [
  { id: 'rewards', label: 'Recompensas' },
  { id: 'rules', label: 'Regras' },
  { id: 'geo', label: 'Alcance' },
  { id: 'ai', label: 'Auditoria' },
  { id: 'bonus', label: 'Bônus e metas' },
  { id: 'pix', label: 'Pagamentos' },
]


const CustomTicketIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M21 15.5C19.6193 15.5 18.5 14.3807 18.5 13C18.5 11.6193 19.6193 10.5 21 10.5V6.8C21 5.69543 20.1046 4.8 19 4.8H5C3.89543 4.8 3 5.69543 3 6.8V10.5C4.38071 10.5 5.5 11.6193 5.5 13C5.5 14.3807 4.38071 15.5 3 15.5V19.2C3 20.3046 3.89543 21.2 5 21.2H19C20.1046 21.2 21 20.3046 21 19.2V15.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9 13H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="2 2"/>
    <path d="M9 9H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="2 2"/>
    <path d="M9 17H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="2 2"/>
  </svg>
);

const CustomVipIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M10 2L11.5 6.5L16 8L11.5 9.5L10 14L8.5 9.5L4 8L8.5 6.5L10 2Z" fill="currentColor" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M18 13L18.75 15.25L21 16L18.75 16.75L18 19L17.25 16.75L15 16L17.25 15.25L18 13Z" fill="currentColor" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const CustomPixIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M8.2 12L12 8.2L15.8 12L12 15.8L8.2 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 2L4 10V14L12 22L20 14V10L12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export function StepByStepEventos() {
  const container = useRef<HTMLDivElement>(null)
  const [activeStep, setActiveTab] = useState(0)

  useGSAP(
    () => {
      const cards = gsap.utils.toArray<HTMLElement>('.step-card-art') // Note: keeping original classname for selector compatibility

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
        trigger: '.sticky-nav-art',
        start: 'top 80px',
        end: 'bottom top',
        endTrigger: container.current,
        pin: true,
        pinSpacing: false,
      })

      // Active Tab updates based on scroll and text animations
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
      // ANIMATION LOOPS MÚSICA
      // ==========================================

      // STEP 1: Link do Audio Multipolatform
      const tlAudio = gsap.timeline({ repeat: -1, repeatDelay: 1.5 })
      tlAudio
        .set('.audio-player', { opacity: 0, scale: 0.95, y: 0 })
        .set('.audio-cursor', { x: 100, y: 150, opacity: 0 })
        .set(['.audio-btn-tk', '.audio-btn-ig', '.audio-btn-yt'], { backgroundColor: '#1c1c1c', scale: 1 })
        
        // 1. O card da música aparece (já processado)
        .to('.audio-player', { opacity: 1, scale: 1, duration: 0.8, ease: 'back.out(1.2)' })
        
        // 2. Cursor entra na tela em direção aos botões
        .to('.audio-cursor', { opacity: 1, x: 50, y: 40, duration: 0.8, ease: 'power2.out' }, "-=0.2")
        
        // 3. Hover e clique no Ingresso
        .to('.audio-cursor', { x: 0, y: -30, duration: 0.5, ease: 'power1.inOut' }) // Move pro ingresso
        .to('.audio-btn-tk', { backgroundColor: '#2a2a2a', duration: 0.2 }, "<0.2") // Efeito Hover
        .to('.audio-cursor', { scale: 0.8, duration: 0.1 }) // Aperta o mouse
        .to('.audio-btn-tk', { scale: 0.96, duration: 0.1 }, "<") // Botao afunda
        .to('.audio-cursor', { scale: 1, duration: 0.1 }) // Solta o mouse
        .to('.audio-btn-tk', { scale: 1, duration: 0.1 }, "<") // Botao volta
        
        // 4. Cursor move pro VIP e Clique
        .to('.audio-btn-tk', { backgroundColor: '#1c1c1c', duration: 0.2 }) // Remove hover
        .to('.audio-cursor', { x: 15, y: 25, duration: 0.5, ease: 'power1.inOut' }, "<") // Move pro VIP
        .to('.audio-btn-ig', { backgroundColor: '#2a2a2a', duration: 0.2 }, "<0.2") // Hover VIP
        .to('.audio-cursor', { scale: 0.8, duration: 0.1 })
        .to('.audio-btn-ig', { scale: 0.96, duration: 0.1 }, "<")
        .to('.audio-cursor', { scale: 1, duration: 0.1 })
        .to('.audio-btn-ig', { scale: 1, duration: 0.1 }, "<")
        
        // 5. Cursor Sai e Reset
        .to('.audio-btn-ig', { backgroundColor: '#1c1c1c', duration: 0.2 })
        .to('.audio-cursor', { opacity: 0, y: 150, duration: 0.6, ease: 'power2.in' }, "<")
        
        .to('.audio-player', { opacity: 0, scale: 0.95, duration: 0.4, delay: 1 })



      // STEP 2: Regras da Campanha
      const tlRules = gsap.timeline({ repeat: -1, repeatDelay: 1 })
      tlRules
        .set('.rule-input-name', { width: '0%' })
        .set(['.rule-tag-1', '.rule-tag-2'], { scale: 0, opacity: 0 })
        .set('.rule-slider-fill', { width: '0%' })
        .set('.rule-cursor', { x: 100, y: 150, opacity: 0 })

        // Preenche Nome
        .to('.rule-cursor', { x: -80, y: -40, opacity: 1, duration: 0.8, ease: 'power2.out' })
        .to('.rule-input-name', { width: '100%', duration: 0.8, ease: 'none' })
        
        // Clica e preenche Hashtags
        .to('.rule-cursor', { x: -30, y: 30, duration: 0.5, ease: 'power2.inOut' })
        .to('.rule-tag-1', { scale: 1, opacity: 1, duration: 0.4, ease: 'back.out(2)' })
        .to('.rule-tag-2', { scale: 1, opacity: 1, duration: 0.4, ease: 'back.out(2)' }, "-=0.2")

        // Arrasta Slider
        .to('.rule-cursor', { x: 0, y: 110, duration: 0.5, ease: 'power2.inOut' })
        .to('.rule-cursor', { x: 80, duration: 0.8, ease: 'power2.inOut' })
        .to('.rule-slider-fill', { width: '100%', duration: 0.8, ease: 'power2.inOut' }, "<")
        
        .to('.rule-cursor', { opacity: 0, duration: 0.4 })
        .to({}, { duration: 1.5 }) // Pausa


      // STEP 3: Radar de Domínio (Trocando cidades)
      const tlRadar = gsap.timeline({ repeat: -1 })
      tlRadar
        .set('.radar-ring', { scale: 0, opacity: 1 })
        .set(['.radar-pin-gyn', '.radar-pin-sp'], { scale: 0, opacity: 0 })
        
        // --- CICLO GOIÂNIA ---
        .set('.radar-label', { text: "Goiânia, GO" })
        .to('.radar-ring', { scale: 3, opacity: 0, duration: 2, stagger: 0.5, ease: 'power2.out' })
        .to('.radar-pin-gyn', { scale: 1, opacity: 1, duration: 0.4, stagger: 0.05, ease: 'back.out(2)' }, "-=1.5")
        .to({}, { duration: 1.5 })
        .to('.radar-pin-gyn', { scale: 0, opacity: 0, duration: 0.3, stagger: 0.02, ease: 'power2.in' })
        
        // Reset rings
        .set('.radar-ring', { scale: 0, opacity: 1 })

        // --- CICLO SÃO PAULO ---
        .set('.radar-label', { text: "São Paulo, SP" })
        .to('.radar-ring', { scale: 3, opacity: 0, duration: 2, stagger: 0.5, ease: 'power2.out' })
        .to('.radar-pin-sp', { scale: 1, opacity: 1, duration: 0.4, stagger: 0.05, ease: 'back.out(2)' }, "-=1.5")
        .to({}, { duration: 1.5 })
        .to('.radar-pin-sp', { scale: 0, opacity: 0, duration: 0.3, stagger: 0.02, ease: 'power2.in' })

      // STEP 4: IA Match
      const tlIA = gsap.timeline({ repeat: -1, repeatDelay: 1.5 })
      tlIA
        .set('.ia-scan', { top: '0%' })
        .set('.ia-result', { opacity: 0, scale: 0.8 })
        
        // Scan descendo e subindo (Laser lendo o vídeo)
        .to('.ia-scan', { top: '100%', duration: 1.5, ease: 'power1.inOut', yoyo: true, repeat: 1 })
        
        // Match Pop-up estilo Modal Central
        .to('.ia-result', { 
           opacity: 1, 
           scale: 1, 
           duration: 0.5, 
           ease: 'back.out(1.5)' 
        })
        
        .to({}, { duration: 2 }) // Pausa lendo a mensagem de sucesso
        
        // Some pra reiniciar
        .to('.ia-result', { opacity: 0, scale: 0.8, duration: 0.3 })


      // STEP 5: Metas e Bônus (Termômetro de Viralização)
      const tlBonus = gsap.timeline({ repeat: -1, repeatDelay: 1.5 })
      const bonusMoney = { val: 0 }
      
      const updateBonusMoney = () => {
         const el = document.querySelector('.bonus-money-val')
         if(el) el.innerHTML = `R$ ${Math.floor(bonusMoney.val)},00`
      }

      tlBonus
        // Setup Inicial
        .set('.bonus-bar-fill', { height: '0%', backgroundColor: '#52525b' }) // zinc-500
        .set('.bonus-avatar', { bottom: '0%', borderColor: '#52525b', boxShadow: 'none' })
        .set('.bonus-avatar-flame', { scale: 0, opacity: 0 })
        .set(['.bonus-cp-1', '.bonus-cp-2', '.bonus-cp-3'], { borderColor: 'rgba(255,255,255,0.1)', color: '#a1a1aa', scale: 1, backgroundColor: '#1c1c1c' })
        .set('.bonus-badge-1', { opacity: 0.5, scale: 0.95, borderColor: 'rgba(255,255,255,0.05)', backgroundColor: '#111' })
        .set(['.bonus-badge-2', '.bonus-badge-3'], { scale: 0, opacity: 0, x: -20 })
        .set(bonusMoney, { val: 0, onUpdate: updateBonusMoney })

        // Fase 1: Sobe até o Checkpoint 1 (Base - 10k views)
        .to('.bonus-bar-fill', { height: '25%', duration: 1, ease: 'power2.inOut' }, 'fase1')
        .to('.bonus-avatar', { bottom: '25%', duration: 1, ease: 'power2.inOut' }, 'fase1')
        
        // Bate no CP1
        .to('.bonus-cp-1', { borderColor: '#fff', color: '#fff', scale: 1.1, backgroundColor: '#2a2a2a', duration: 0.3, ease: 'back.out(2)' })
        .to('.bonus-badge-1', { opacity: 1, scale: 1, borderColor: 'rgba(255,255,255,0.2)', backgroundColor: '#222', duration: 0.4, ease: 'back.out(1.5)' }, "<")
        .to(bonusMoney, { val: 50, duration: 0.5, ease: 'power2.out', onUpdate: updateBonusMoney }, "<")
        .to({}, { duration: 0.5 }) // Pausa dramática

        // Fase 2: Viralizando até o Checkpoint 2 (Hit - 50k views)
        .to('.bonus-bar-fill', { height: '60%', backgroundColor: '#d8b4fe', duration: 1.2, ease: 'power2.in' }, 'fase2')
        .to('.bonus-avatar', { bottom: '60%', borderColor: '#d8b4fe', boxShadow: '0 0 20px rgba(216,180,254,0.4)', duration: 1.2, ease: 'power2.in' }, 'fase2')
        
        // Bate no CP2 (Multiplier)
        .to('.bonus-cp-2', { borderColor: '#d8b4fe', color: '#d8b4fe', scale: 1.1, backgroundColor: 'rgba(216,180,254,0.1)', boxShadow: '0 0 15px rgba(216,180,254,0.3)', duration: 0.3, ease: 'back.out(2)' })
        .to('.bonus-badge-2', { scale: 1, opacity: 1, x: 0, duration: 0.4, ease: 'back.out(1.5)' }, "<")
        .to(bonusMoney, { val: 100, duration: 0.8, ease: 'power2.out', onUpdate: updateBonusMoney }, "<")
        .to({}, { duration: 0.5 }) // Pausa 

        // Fase 3: Mega Hit até o Checkpoint 3 (Viral - 100k views)
        .to('.bonus-bar-fill', { height: '100%', backgroundColor: '#22c55e', duration: 1, ease: 'power1.inOut' }, 'fase3')
        .to('.bonus-avatar', { bottom: '100%', borderColor: '#22c55e', boxShadow: '0 0 30px rgba(34,197,94,0.6)', duration: 1, ease: 'power1.inOut' }, 'fase3')
        .to('.bonus-avatar-flame', { scale: 1, opacity: 1, duration: 0.3 }, 'fase3+=0.5') // Chama surge no meio do caminho
        
        // Bate no CP3 (Viral)
        .to('.bonus-cp-3', { borderColor: '#22c55e', color: '#22c55e', scale: 1.2, backgroundColor: 'rgba(34,197,94,0.1)', boxShadow: '0 0 30px rgba(34,197,94,0.4)', duration: 0.3, ease: 'back.out(2.5)' })
        .to('.bonus-badge-3', { scale: 1, opacity: 1, x: 0, duration: 0.4, ease: 'back.out(1.5)' }, "<")
        .to(bonusMoney, { val: 250, duration: 1, ease: 'power3.out', onUpdate: updateBonusMoney }, "<")

        // Final do loop (espera e reseta)
        .to({}, { duration: 2 })

      // STEP 6: Cascata de PIX (com redução de budget real em duas ondas contínuas)
      const tlPix = gsap.timeline({ repeat: -1, repeatDelay: 1.5 })
      const budgetObj = { val: 15000 }
      
      const updateBudgetDisplay = () => {
         const displayEl = document.querySelector('.budget-val')
         if(displayEl) displayEl.innerHTML = `R$ ${Math.floor(budgetObj.val).toLocaleString('pt-BR')},00`
      }

      tlPix
        .set('.pix-item', { y: -20, opacity: 0, scale: 0.9 })
        .set('.escrow-box', { borderColor: 'rgba(255,255,255,0.1)', boxShadow: 'none' })
        .set(budgetObj, { val: 15000 })
        
        // --- PREPARA ONDA 1 (Tudo PIX) ---
        .set(['.pix-card-1', '.pix-card-2', '.pix-card-3'], { backgroundColor: 'rgba(34,197,94,0.1)', borderColor: 'rgba(34,197,94,0.3)', color: '#4ade80' })
        .set(['.pix-title-1', '.pix-title-2', '.pix-title-3'], { text: "PIX Pago" })
        .set('.pix-val-1', { text: "R$ 50,00" })
        .set('.pix-val-2', { text: "R$ 150,00" })
        .set('.pix-val-3', { text: "R$ 75,00" })
        
        // Ativa o cofre
        .to('.escrow-box', { borderColor: '#d8b4fe', boxShadow: '0 0 40px rgba(216,180,254,0.2)', duration: 0.5 })
        
        // --- ONDA 1 ---
        // A cascata desce e o budget reduz 275 reais (15000 -> 14725)
        .to('.pix-item', { y: 0, opacity: 1, scale: 1, duration: 0.5, stagger: 0.2, ease: 'back.out(1.5)' }, 'onda1')
        .to(budgetObj, { val: 14725, duration: 0.9, ease: 'power2.out', onUpdate: updateBudgetDisplay }, 'onda1')
        
        // Espera e recolhe a primeira onda
        .to('.pix-item', { y: 20, opacity: 0, duration: 0.3, stagger: 0.1, ease: 'power2.in', delay: 1 })
        
        // --- PREPARA ONDA 2 (Ingresso, Consumação, Ingresso) ---
        .set('.pix-item', { y: -20, scale: 0.9 })
        .set('.pix-card-1', { backgroundColor: 'rgba(245,158,11,0.1)', borderColor: 'rgba(245,158,11,0.3)', color: '#fcd34d' })
        .set('.pix-title-1', { text: "Ingresso" })
        .set('.pix-val-1', { text: "Área VIP" })
        
        .set('.pix-card-2', { backgroundColor: 'rgba(59,130,246,0.1)', borderColor: 'rgba(59,130,246,0.3)', color: '#60a5fa' })
        .set('.pix-title-2', { text: "Consumação" })
        .set('.pix-val-2', { text: "R$ 100,00" })
        
        .set('.pix-card-3', { backgroundColor: 'rgba(245,158,11,0.1)', borderColor: 'rgba(245,158,11,0.3)', color: '#fcd34d' })
        .set('.pix-title-3', { text: "Ingresso" })
        .set('.pix-val-3', { text: "Pista" })

        // --- ONDA 2 ---
        // A segunda cascata desce e o budget reduz mais 100 reais (só consumação abate do orçamento financeiro, 14725 -> 14625)
        .to('.pix-item', { y: 0, opacity: 1, scale: 1, duration: 0.5, stagger: 0.2, ease: 'back.out(1.5)' }, 'onda2')
        .to(budgetObj, { val: 14625, duration: 0.9, ease: 'power2.out', onUpdate: updateBudgetDisplay }, 'onda2')

        // Espera e recolhe a segunda onda
        .to('.pix-item', { y: 20, opacity: 0, duration: 0.3, stagger: 0.1, ease: 'power2.in', delay: 1 })

        // Finaliza ciclo
        .to('.escrow-box', { borderColor: 'rgba(255,255,255,0.1)', boxShadow: 'none', duration: 0.5 }, 'reset')
        .to(budgetObj, { val: 15000, duration: 1, ease: 'power2.inOut', onUpdate: updateBudgetDisplay }, 'reset')

    },
    { scope: container }
  )

  return (
    <section ref={container} className="bg-[#121212] relative pb-32">
      
      {/* Sticky Navigation Bar */}
      <div className="sticky-nav-art z-40 w-full bg-[#121212]/90 backdrop-blur-md border-b border-white/5 hidden md:block">
        <div className="container mx-auto max-w-5xl px-6 h-16 flex items-center justify-between overflow-x-auto no-scrollbar">
           {STEPS.map((step, i) => (
              <div 
                key={step.id} 
                className={`step-nav-anim text-sm font-bold whitespace-nowrap transition-colors duration-300 relative py-4 px-2 cursor-pointer hover:text-brand-purple/80
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
        
        {/* Step 1: Áudio -> Evento */}
        <div className="step-card-art flex flex-col lg:flex-row items-center min-h-[70vh] border-b border-white/5 pb-24 lg:pb-0">
            <div className="flex-1 lg:pr-16 mb-12 lg:mb-0">
              <div className="step-text-anim w-12 h-12 rounded-full bg-brand-purple/20 text-brand-purple font-black flex items-center justify-center mb-6 border border-brand-purple/30">1</div>
              <h2 className="step-text-anim text-4xl sm:text-5xl font-extrabold mb-6 tracking-tight">Recompensas Estratégicas</h2>
              <p className="step-text-anim text-lg sm:text-xl text-zinc-400 font-medium leading-relaxed">
                 Otimize o seu orçamento oferecendo experiências. Determine se os criadores serão recompensados com acessos VIP, ingressos pista ou pagamento em PIX, mantendo o controle total do seu caixa.
              </p>
           </div>
           
           <div className="flex-1 w-full lg:h-[420px] min-h-[300px] sm:min-h-[350px] lg:min-h-0 bg-[#1a1a1a] rounded-3xl p-8 lg:p-12 flex flex-col items-center justify-center relative overflow-hidden border border-white/5 shadow-2xl">
              
              <div className="audio-player relative w-full max-w-sm bg-[#111] rounded-3xl p-5 border border-white/5 shadow-2xl flex flex-col gap-5">
                 
                 {/* Top: Info */}
                 <div className="flex gap-4 items-center">
                   <div className="relative w-20 h-20 bg-brand-purple/20 rounded-xl overflow-hidden flex items-center justify-center shrink-0 shadow-lg border border-brand-purple/30">
                      <div className="absolute inset-0 opacity-20 bg-[url('/noise.png')] mix-blend-overlay"></div>
                      <div className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center border border-white/20">
                        <CustomTicketIcon className="w-5 h-5 text-brand-purple" />
                      </div>
                   </div>
                   <div>
                      <h4 className="text-white font-bold text-lg leading-tight">Tardezinha SP</h4>
                      <p className="text-zinc-400 text-sm mb-1">Sábado, 22h</p>
                      <p className="text-zinc-600 text-xs">Ingresso R$ 120,00</p>
                   </div>
                 </div>

                 {/* Bottom: Buttons */}
                 <div className="flex flex-col gap-2 border-t border-white/5 pt-5 relative">
                   <div className="audio-btn-tk w-full bg-[#1c1c1c] border border-white/5 rounded-2xl py-3 px-4 flex items-center gap-3">
                     <CustomTicketIcon className="w-5 h-5 text-yellow-400" />
                     <span className="text-sm font-bold text-white/90">Oferecer Ingresso Pista</span>
                     <ArrowRight size={14} className="ml-auto text-zinc-600 -rotate-45" />
                   </div>
                   
                   <div className="audio-btn-ig w-full bg-[#1c1c1c] border border-white/5 rounded-2xl py-3 px-4 flex items-center gap-3">
                     <CustomVipIcon className="w-5 h-5 text-amber-300" />
                     <span className="text-sm font-bold text-white/90">Oferecer Acesso VIP</span>
                     <ArrowRight size={14} className="ml-auto text-zinc-600 -rotate-45" />
                   </div>

                   <div className="audio-btn-yt w-full bg-[#1c1c1c] border border-white/5 rounded-2xl py-3 px-4 flex items-center gap-3">
                     <CustomPixIcon className="w-5 h-5 text-emerald-400" />
                     <span className="text-sm font-bold text-white/90">Pagar em PIX</span>
                     <ArrowRight size={14} className="ml-auto text-zinc-600 -rotate-45" />
                   </div>

                   {/* Mouse Cursor animado no final da div */}
                   <MousePointer2 className="audio-cursor absolute right-8 top-1/2 text-white fill-current w-6 h-6 rotate-[-15deg] z-20 pointer-events-none drop-shadow-lg" />
                 </div>

              </div>

           </div>
        </div>

        {/* Step 2: Regras da Campanha */}
        <div className="step-card-art flex flex-col lg:flex-row items-center min-h-[70vh] border-b border-white/5 pb-24 lg:pb-0 pt-24 lg:pt-0 lg:flex-row-reverse">
            <div className="flex-1 lg:pl-16 mb-12 lg:mb-0">
              <div className="step-text-anim w-12 h-12 rounded-full bg-brand-purple/20 text-brand-purple font-black flex items-center justify-center mb-6 border border-brand-purple/30">2</div>
              <h2 className="step-text-anim text-4xl sm:text-5xl font-extrabold mb-6 tracking-tight">Regras de Engajamento</h2>
              <p className="step-text-anim text-xl text-zinc-400 font-medium leading-relaxed">
                 Assegure a conversão definindo as regras do jogo. Exija marcações da sua produtora, hashtags estratégicas da edição e a inserção do seu link de vendas.
              </p>
           </div>
           
           <div className="flex-1 w-full lg:h-[420px] min-h-[300px] sm:min-h-[350px] lg:min-h-0 bg-[#1a1a1a] rounded-3xl p-8 lg:p-12 flex flex-col items-center justify-center relative overflow-hidden border border-white/5 shadow-2xl">
              
              <div className="w-full max-w-sm bg-[#111] rounded-3xl p-6 border border-white/5 shadow-2xl flex flex-col gap-6 relative">
                 
                 {/* Nome */}
                 <div>
                   <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-2 block">Nome da Campanha</label>
                   <div className="h-12 bg-[#1c1c1c] border border-white/5 rounded-xl px-4 flex items-center overflow-hidden">
                      <div className="rule-input-name h-full flex items-center whitespace-nowrap overflow-hidden">
                        <span className="text-white font-medium">Tardezinha SP Oficial</span>
                      </div>
                   </div>
                 </div>

                 {/* Hashtags */}
                 <div>
                   <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-2 block">Hashtags Obrigatórias</label>
                   <div className="flex gap-2">
                      <div className="rule-tag-1 bg-brand-purple/20 border border-brand-purple/30 text-brand-purple px-3 py-1.5 rounded-lg text-sm font-bold">#TardezinhaSP</div>
                      <div className="rule-tag-2 bg-brand-purple/20 border border-brand-purple/30 text-brand-purple px-3 py-1.5 rounded-lg text-sm font-bold">#VemProSamba</div>
                   </div>
                 </div>

                 {/* Views Goal */}
                 <div>
                   <div className="flex justify-between items-center mb-2">
                     <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest flex items-center gap-1"><Target size={12}/> Meta de Views</label>
                     <span className="text-sm font-bold text-spotify-green">5.000</span>
                   </div>
                   <div className="h-4 bg-[#1c1c1c] border border-white/5 rounded-full overflow-hidden p-0.5 relative">
                      <div className="rule-slider-fill h-full bg-gradient-to-r from-spotify-green to-green-400 rounded-full w-0"></div>
                   </div>
                 </div>

                 <MousePointer2 className="rule-cursor absolute left-1/2 top-1/2 text-white fill-current w-6 h-6 rotate-[-15deg] z-20 pointer-events-none drop-shadow-lg" />
              </div>

           </div>
        </div>

        {/* Step 3: Geolocation */}
        <div className="step-card-art flex flex-col lg:flex-row items-center min-h-[70vh] border-b border-white/5 pb-24 lg:pb-0 pt-24 lg:pt-0">
            <div className="flex-1 lg:pr-16 mb-12 lg:mb-0">
              <div className="step-text-anim w-12 h-12 rounded-full bg-brand-purple/20 text-brand-purple font-black flex items-center justify-center mb-6 border border-brand-purple/30">3</div>
              <h2 className="step-text-anim text-4xl sm:text-5xl font-extrabold mb-6 tracking-tight">Alcance 100% Local</h2>
              <p className="step-text-anim text-lg sm:text-xl text-zinc-400 font-medium leading-relaxed">
                 Foque o impacto onde ele realmente importa. A plataforma garante através de geolocalização que apenas influenciadores dentro do raio de alcance físico do seu evento participem da campanha.
              </p>
           </div>
           
           <div className="flex-1 w-full lg:h-[420px] min-h-[300px] sm:min-h-[350px] lg:min-h-0 bg-[#1a1a1a] rounded-3xl relative overflow-hidden border border-white/5 shadow-2xl flex items-center justify-center">
              
              {/* Fake Map Grid */}
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at center, #ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
              
              {/* Radar Center */}
              <div className="relative w-full h-full flex items-center justify-center">
                 <div className="absolute w-2 h-2 bg-brand-purple rounded-full z-20 shadow-[0_0_10px_rgba(216,180,254,1)]"></div>
                 <div className="radar-label absolute bg-[#1c1c1c] text-white text-xs font-bold px-3 py-1 rounded-full border border-brand-purple/30 z-30 -translate-y-8">São Paulo, SP</div>
                 
                 {/* Radar Rings */}
                 <div className="radar-ring absolute w-24 h-24 border border-brand-purple/50 rounded-full"></div>
                 <div className="radar-ring absolute w-24 h-24 border border-brand-purple/30 rounded-full"></div>
                 <div className="radar-ring absolute w-24 h-24 border border-brand-purple/10 rounded-full"></div>

                 {/* Random Pins - SP */}
                 <MapPin className="radar-pin-gyn absolute top-[30%] sm:left-[40%] left-[20%] text-white fill-brand-purple w-7 h-7 drop-shadow-md z-20" />
                 <MapPin className="radar-pin-gyn absolute top-[40%] sm:right-[35%] right-[15%] text-white fill-brand-purple w-6 h-6 drop-shadow-md z-20" />
                 <MapPin className="radar-pin-gyn absolute bottom-[35%] sm:left-[45%] left-[30%] text-white fill-brand-purple w-8 h-8 drop-shadow-md z-20" />
                 <MapPin className="radar-pin-gyn absolute bottom-[45%] sm:right-[40%] right-[25%] text-white fill-brand-purple w-5 h-5 drop-shadow-md z-20" />
                 <MapPin className="radar-pin-gyn absolute top-[50%] sm:left-[30%] left-[10%] text-white fill-brand-purple w-6 h-6 drop-shadow-md z-20" />
                 <MapPin className="radar-pin-gyn absolute bottom-[30%] sm:right-[25%] right-[5%] text-white fill-brand-purple w-7 h-7 drop-shadow-md z-20" />
                 
                 {/* Random Pins - RJ */}
                 <MapPin className="radar-pin-sp absolute top-[25%] sm:right-[45%] right-[30%] text-white fill-brand-purple w-8 h-8 drop-shadow-md z-20" />
                 <MapPin className="radar-pin-sp absolute top-[45%] sm:left-[35%] left-[15%] text-white fill-brand-purple w-6 h-6 drop-shadow-md z-20" />
                 <MapPin className="radar-pin-sp absolute bottom-[40%] sm:left-[25%] left-[5%] text-white fill-brand-purple w-7 h-7 drop-shadow-md z-20" />
                 <MapPin className="radar-pin-sp absolute bottom-[30%] sm:right-[35%] right-[15%] text-white fill-brand-purple w-8 h-8 drop-shadow-md z-20" />
                 <MapPin className="radar-pin-sp absolute top-[35%] sm:left-[45%] left-[25%] text-white fill-brand-purple w-5 h-5 drop-shadow-md z-20" />
                 <MapPin className="radar-pin-sp absolute bottom-[45%] sm:right-[20%] right-[5%] text-white fill-brand-purple w-6 h-6 drop-shadow-md z-20" />
              </div>

           </div>
        </div>

        {/* Step 4: IA */}
        <div className="step-card-art flex flex-col lg:flex-row items-center min-h-[70vh] border-b border-white/5 pb-24 lg:pb-0 pt-24 lg:pt-0 lg:flex-row-reverse">
            <div className="flex-1 lg:pl-16 mb-12 lg:mb-0">
              <div className="step-text-anim w-12 h-12 rounded-full bg-brand-purple/20 text-brand-purple font-black flex items-center justify-center mb-6 border border-brand-purple/30">4</div>
              <h2 className="step-text-anim text-4xl sm:text-5xl font-extrabold mb-6 tracking-tight">Auditoria Inteligente (IA)</h2>
              <p className="step-text-anim text-xl text-zinc-400 font-medium leading-relaxed">
                 Pague apenas por resultados reais. Nossa IA monitora e valida os vídeos automaticamente, assegurando que o áudio oficial, as diretrizes e as metas de alcance foram atingidas sem fraudes.
              </p>
           </div>
           
           <div className="flex-1 w-full lg:h-[600px] min-h-[440px] sm:min-h-[480px] lg:min-h-0 bg-[#1a1a1a] rounded-3xl p-8 lg:p-12 flex items-center justify-center relative overflow-hidden border border-white/5 shadow-2xl">

              <div className="w-full max-w-[280px] h-[520px] bg-gradient-to-b from-[#1a1a2e] to-[#0f0f1a] rounded-3xl border border-white/10 relative overflow-hidden shadow-2xl flex flex-col">
                 
                 {/* Fake Video UI (TikTok/Reels format) */}
                 <div className="flex-1 relative w-full h-full bg-[#111]">
                    {/* Subtle Overlay to make UI elements pop less and focus on scan */}
                    <div className="absolute inset-0 bg-black/20 z-10 pointer-events-none"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f1a] via-transparent to-transparent z-10 pointer-events-none"></div>
                    
                    {/* UI Lateral Direita (Ações) - Simplified */}
                    <div className="absolute right-4 bottom-24 flex flex-col gap-6 items-center z-20 opacity-70 w-8">
                       <div className="flex flex-col items-center justify-center gap-1">
                          <Heart size={22} className="text-white drop-shadow-md" strokeWidth={2} />
                          <span className="text-[10px] font-bold text-white drop-shadow-md text-center">90k</span>
                       </div>
                       <div className="flex flex-col items-center justify-center gap-1">
                          <MessageCircle size={22} className="text-white drop-shadow-md" strokeWidth={2} />
                          <span className="text-[10px] font-bold text-white drop-shadow-md text-center">702</span>
                       </div>
                       <div className="flex flex-col items-center justify-center gap-1">
                          <Send size={22} className="text-white drop-shadow-md" strokeWidth={2} />
                          <span className="text-[10px] font-bold text-white drop-shadow-md text-center">1.2k</span>
                       </div>
                    </div>

                    {/* UI Inferior (Legenda e Música) - Simplified */}
                    <div className="absolute bottom-6 left-4 right-16 z-20 flex flex-col gap-2 opacity-70">
                       <h5 className="font-bold text-white text-[15px] drop-shadow-md">@creator</h5>
                       <p className="text-white/80 text-[13px] drop-shadow-md leading-snug">Essa festa vai ser incrível!<br/>#TardezinhaSP #VemProSamba</p>
                       <div className="flex items-center gap-2 mt-2">
                          <Music size={14} className="text-white drop-shadow-md" />
                          <div className="w-36 overflow-hidden">
                             <p className="text-white text-xs font-bold whitespace-nowrap animate-[marquee_4s_linear_infinite]">Tardezinha SP Oficial</p>
                          </div>
                       </div>
                    </div>

                    {/* Disco Girando Canto */}
                    <div className="absolute right-4 bottom-6 w-[38px] h-[38px] rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center animate-spin z-20 opacity-70" style={{ animationDuration: '3s' }}>
                       <div className="w-[14px] h-[14px] rounded-full bg-black flex items-center justify-center">
                         <div className="w-1.5 h-1.5 rounded-full bg-zinc-800"></div>
                       </div>
                       {/* Notes flying out from the disk */}
                       <Music size={12} className="absolute -top-4 -left-4 text-white/50 animate-[ping_2s_ease-in-out_infinite]" style={{ animationDelay: '0.5s' }} />
                       <Music size={10} className="absolute -top-6 left-0 text-white/30 animate-[ping_2s_ease-in-out_infinite]" style={{ animationDelay: '1.5s' }} />
                    </div>

                    {/* Scanner Line GSAP - Now above everything (z-40/50) */}
                    <div className="ia-scan absolute left-0 right-0 h-[2px] bg-[#22c55e] shadow-[0_0_20px_rgba(34,197,94,1)] z-30"></div>
                    <div className="ia-scan absolute left-0 right-0 h-24 bg-gradient-to-b from-[#22c55e]/30 to-transparent z-20 -translate-y-full pointer-events-none"></div>
                 </div>

                 {/* Match Result Flutuante (Over the video) - Z-index high */}
                 <div className="ia-result absolute top-[5%] left-1/2 -translate-x-1/2 bg-[#1c1c1c]/95 backdrop-blur-md border border-green-500/30 rounded-xl p-3 shadow-2xl flex flex-row items-center justify-between gap-3 z-[30] w-[90%] max-w-[240px]">
                    <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center shrink-0">
                       <ShieldCheck className="ia-icon text-green-500" size={20} />
                    </div>
                    <div className="flex flex-col items-start w-full">
                       <span className="font-bold text-white text-sm">Vídeo Auditado</span>
                       <div className="flex justify-start gap-2 w-full mt-0.5">
                          <span className="text-green-400 text-[9px] font-bold">✓ Áudio OK</span>
                          <span className="text-green-400 text-[9px] font-bold">✓ 100k Views</span>
                       </div>
                    </div>
                 </div>

              </div>

           </div>
        </div>

        {/* Step 5: Bônus de Performance */}
        <div className="step-card-art flex flex-col lg:flex-row items-center min-h-[70vh] border-b border-white/5 pb-24 lg:pb-0 pt-24 lg:pt-0">
            <div className="flex-1 lg:pr-16 mb-12 lg:mb-0">
              <div className="step-text-anim w-12 h-12 rounded-full bg-brand-purple/20 text-brand-purple font-black flex items-center justify-center mb-6 border border-brand-purple/30">5</div>
              <h2 className="step-text-anim text-4xl sm:text-5xl font-extrabold mb-6 tracking-tight">Bônus por Viralização</h2>
              <p className="step-text-anim text-xl text-zinc-400 font-medium leading-relaxed">
                 Incentive o engajamento escalável. O criador garante a recompensa base ao bater a meta, mas destrava bônus se o vídeo estourar. Um estímulo contínuo para manter a tração da campanha.
              </p>
           </div>
           
           <div className="flex-1 w-full lg:h-[420px] min-h-[300px] sm:min-h-[350px] lg:min-h-0 bg-[#1a1a1a] rounded-3xl p-8 lg:p-12 flex items-center justify-center relative overflow-hidden border border-white/5 shadow-2xl">
              
              {/* Gamification Dashboard */}
              <div className="w-full max-w-[320px] h-[360px] bg-[#111] rounded-3xl border border-white/10 shadow-2xl relative flex p-6 gap-6">
                 
                 {/* Termômetro Vertical */}
                 <div className="relative w-8 h-full bg-[#1c1c1c] border border-white/5 rounded-full flex flex-col justify-end items-center py-2 z-10">
                    {/* Linha de preenchimento */}
                    <div className="bonus-bar-fill w-2 bg-zinc-500 rounded-full absolute bottom-2 left-1/2 -translate-x-1/2 transition-colors duration-300"></div>
                    
                    {/* Checkpoints no eixo vertical (posicionados via bottom) */}
                    <div className="bonus-cp-3 absolute bottom-[100%] w-6 h-6 rounded-full bg-[#1c1c1c] border-2 border-white/10 flex items-center justify-center translate-y-1/2 z-20 transition-colors duration-300">
                      <Flame size={12} strokeWidth={3} />
                    </div>
                    <div className="bonus-cp-2 absolute bottom-[60%] w-5 h-5 rounded-full bg-[#1c1c1c] border-2 border-white/10 flex items-center justify-center translate-y-1/2 z-20 transition-colors duration-300">
                      <TrendingUp size={10} strokeWidth={3} />
                    </div>
                    <div className="bonus-cp-1 absolute bottom-[25%] w-4 h-4 rounded-full bg-[#1c1c1c] border-2 border-white/10 flex items-center justify-center translate-y-1/2 z-20 transition-colors duration-300"></div>

                    {/* Avatar do Criador "Subindo" */}
                    <div className="bonus-avatar absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-10 h-10 rounded-full border-2 border-zinc-500 bg-[#222] flex items-center justify-center z-30 shadow-lg overflow-hidden transition-colors duration-300">
                       {/* Esqueleto de foto */}
                       <div className="w-full h-full bg-zinc-800 relative">
                         <div className="w-4 h-4 rounded-full bg-zinc-600 absolute top-2 left-1/2 -translate-x-1/2"></div>
                         <div className="w-8 h-8 rounded-full bg-zinc-600 absolute -bottom-4 left-1/2 -translate-x-1/2"></div>
                       </div>
                       <Flame size={18} className="bonus-avatar-flame absolute text-brand-purple fill-green-400/20 drop-shadow-md z-40" />
                    </div>
                 </div>

                 {/* Informações Laterais */}
                 <div className="flex-1 flex flex-col justify-between py-2 relative z-10">
                    
                    {/* Badges Flutuantes alinhados com os checkpoints (usando Flex box space-between para bater c a altura) */}
                    <div className="flex flex-col justify-between h-full absolute inset-0 py-2">
                       {/* Linha Top (Viral) */}
                       <div className="flex items-center translate-y-[-10px] relative z-10">
                          <div className="bonus-badge-3 bg-green-500/10 border border-brand-purple/30 px-3 py-1 rounded-lg backdrop-blur-sm">
                             <span className="block text-[10px] font-bold text-brand-purple uppercase tracking-wider">Mega Hit!</span>
                             <span className="block text-xs font-black text-white">+ R$ 150</span>
                          </div>
                       </div>
                       
                       {/* Linha Meio (Hit) */}
                       <div className="flex items-center translate-y-[-30px] relative z-10">
                          <div className="bonus-badge-2 bg-brand-purple/10 border border-brand-purple/30 px-3 py-1 rounded-lg backdrop-blur-sm">
                             <span className="block text-[10px] font-bold text-brand-purple uppercase tracking-wider">Meta 100k View</span>
                             <span className="block text-xs font-black text-white">2x Bônus</span>
                          </div>
                       </div>

                       {/* Linha Base */}
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

        {/* Step 6: Budget / Pix */}
        <div className="step-card-art flex flex-col lg:flex-row items-center min-h-[70vh] pb-24 lg:pb-0 pt-24 lg:pt-0 lg:flex-row-reverse">
            <div className="flex-1 lg:pl-16 mb-12 lg:mb-0">
              <div className="step-text-anim w-12 h-12 rounded-full bg-brand-purple/20 text-brand-purple font-black flex items-center justify-center mb-6 border border-brand-purple/30">6</div>
              <h2 className="step-text-anim text-4xl sm:text-5xl font-extrabold mb-6 tracking-tight">Pagamento Automatizado e Seguro</h2>
              <p className="step-text-anim text-xl text-zinc-400 font-medium leading-relaxed">
                 Seu orçamento sob controle absoluto. Através do nosso sistema de Escrow, a distribuição de cortesias ou PIX ocorre em tempo real, somente após a validação da IA. Sem burocracia, sem perdas.
              </p>
           </div>
           
           <div className="flex-1 w-full lg:h-[420px] min-h-[300px] sm:min-h-[350px] lg:min-h-0 bg-[#1a1a1a] rounded-3xl p-8 lg:p-12 flex flex-col items-center justify-center relative overflow-hidden border border-white/5 shadow-2xl">
              
              <div className="escrow-box w-full max-w-xs bg-[#222] border-2 border-white/10 rounded-2xl p-6 text-center mb-8 relative z-20 transition-all duration-300">
                 <p className="text-zinc-500 font-bold text-xs uppercase tracking-widest mb-2">Orçamento Garantido</p>
                 <h3 className="budget-val text-3xl font-black text-white font-mono">R$ 15.000,00</h3>
              </div>

              {/* Cascade elements */}
              <div className="w-full max-w-sm flex justify-center gap-4 relative z-10">
                 {/* Item 1 */}
                 <div className="pix-item pix-card-1 bg-green-500/10 border border-green-500/30 text-green-400 px-4 py-3 rounded-xl flex flex-col items-center shadow-lg text-center break-keep whitespace-nowrap min-w-[100px]">
                    <span className="text-xs font-bold text-zinc-400 pix-title-1">PIX Pago</span>
                    <span className="font-bold pix-val-1 block">R$ 50,00</span>
                 </div>
                 {/* Item 2 */}
                 <div className="pix-item pix-card-2 bg-green-500/10 border border-green-500/30 text-green-400 px-4 py-3 rounded-xl flex flex-col items-center shadow-lg translate-y-4 text-center break-keep whitespace-nowrap min-w-[100px]">
                    <span className="text-xs font-bold text-zinc-400 pix-title-2">PIX Pago</span>
                    <span className="font-bold pix-val-2 block">R$ 150,00</span>
                 </div>
                 {/* Item 3 */}
                 <div className="pix-item pix-card-3 bg-green-500/10 border border-green-500/30 text-green-400 px-4 py-3 rounded-xl flex flex-col items-center shadow-lg text-center break-keep whitespace-nowrap min-w-[100px]">
                    <span className="text-xs font-bold text-zinc-400 pix-title-3">PIX Pago</span>
                    <span className="font-bold pix-val-3 block">R$ 75,00</span>
                 </div>
              </div>

           </div>
        </div>

      
      </div>
    </section>
  )
}