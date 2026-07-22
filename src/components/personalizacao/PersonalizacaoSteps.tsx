'use client'

import { useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { TextPlugin } from 'gsap/TextPlugin'
import { useGSAP } from '@gsap/react'
import {
  CheckCircle2,
  PackageCheck,
  Truck,
} from 'lucide-react'
import { ModelsCarousel } from './ModelsCarousel'
import { ColorPicker } from './ColorPicker'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, TextPlugin, useGSAP)
}

const STEPS = [
  { id: "briefing", label: "Passo 1: Envio da Arte" },
  { id: "design", label: "Passo 2: Modelo e cor" },
  { id: "approval", label: "Passo 3: Aprovação" },
  { id: "delivery", label: "Passo 4: Produção" },
]

export function PersonalizacaoSteps() {
  const container = useRef<HTMLDivElement>(null)
  const [activeStep, setActiveTab] = useState(0)

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      
      if (!prefersReducedMotion) {
        const cards = gsap.utils.toArray<HTMLElement>('.step-card')

        // A barra de passos usa `position: sticky` nativo (ver JSX abaixo) —
        // gruda logo abaixo do cabeçalho sem remover o elemento do fluxo,
        // evitando o corte de conteúdo que o pin do GSAP (pinSpacing:false) causava.

        // Active Tab updates based on scroll
        cards.forEach((card, index) => {
          ScrollTrigger.create({
            trigger: card,
            start: 'top center',
            end: 'bottom center',
            onEnter: () => setActiveTab(index),
            onEnterBack: () => setActiveTab(index),
          })
        })

        // ==========================================
        // ANIMATION LOOPS (MOCKUPS VIVOS)
        // ==========================================

        // STEP 3: Approval / Quality Check
        const tlStep3 = gsap.timeline({ repeat: -1, repeatDelay: 1 })
        tlStep3
          .set('.step3-check1', { opacity: 0, scale: 0 })
          .set('.step3-check2', { opacity: 0, scale: 0 })
          .set('.step3-check3', { opacity: 0, scale: 0 })
          .set('.step3-approved', { opacity: 0, y: 10, scale: 0.8 })

          .to('.step3-check1', { opacity: 1, scale: 1, duration: 0.4, ease: 'back.out(2)' })
          .to('.step3-check2', { opacity: 1, scale: 1, duration: 0.4, ease: 'back.out(2)', delay: 0.2 })
          .to('.step3-check3', { opacity: 1, scale: 1, duration: 0.4, ease: 'back.out(2)', delay: 0.2 })

          .to('.step3-approved', { opacity: 1, y: 0, scale: 1, duration: 0.5, ease: 'back.out(1.5)', delay: 0.4 })
          .to({}, { duration: 2 })


        // STEP 4: Delivery Fast (6 Days)
        const tlStep4 = gsap.timeline({ repeat: -1, repeatDelay: 0.5 })
        tlStep4
          .set('.step4-box', { x: -30, opacity: 0 })
          .set('.step4-truck', { x: -50, opacity: 0 })
          .set('.step4-days', { innerHTML: '0', color: '#111111' })
          
          .to('.step4-box', { x: 0, opacity: 1, duration: 0.6, ease: 'power2.out' })
          .to('.step4-truck', { x: 0, opacity: 1, duration: 0.6, ease: 'power2.out' }, '-=0.4')
          
          .to('.step4-days', { innerHTML: '5', duration: 1, ease: 'power1.inOut', snap: 'innerHTML' })
          .to('.step4-days', { color: '#FF8A4C', scale: 1.1, duration: 0.3, yoyo: true, repeat: 1 })
          
          .to({}, { duration: 1.5 })
          .to('.step4-box, .step4-truck', { x: 50, opacity: 0, duration: 0.5, ease: 'power2.in' })
      }
    },
    { scope: container },
  )

  return (
    <section ref={container} className="bg-brand-beige relative pb-32 border-t border-brand-black/5">
      
      {/* Sticky Navigation Bar */}
      <div className="sticky-nav sticky top-12 lg:top-14 z-40 w-full bg-brand-beige border-b border-brand-black/10 shadow-sm hidden md:block">
        <div className="container mx-auto max-w-5xl px-6 h-11 flex items-center justify-between overflow-x-auto no-scrollbar">
           {STEPS.map((step, i) => (
              <div
                key={step.id}
                className={`text-sm font-heading font-bold whitespace-nowrap transition-colors duration-300 relative py-2 px-2
                  ${activeStep >= i ? 'text-brand-black' : 'text-brand-black/40'}
                `}
              >
                 {step.label}
                  {activeStep === i && (
                    <div className="absolute bottom-0 left-0 w-full h-[3px] bg-brand-green"></div>
                  )}
              </div>
           ))}
        </div>
      </div>

      <div className="container mx-auto max-w-6xl px-6 lg:px-8 mt-16 flex flex-col gap-24 lg:gap-0">
        
        {/* Step 1: Briefing */}
        <div className="step-card flex flex-col lg:flex-row items-center min-h-[70vh] border-b border-brand-black/10 pb-24 lg:pb-0">
           <div className="flex-1 lg:pr-16 mb-12 lg:mb-0">
               <div className="w-12 h-12 rounded-2xl bg-brand-green text-brand-black font-heading font-black text-2xl flex items-center justify-center mb-6 border-2 border-brand-black shadow-[4px_4px_0px_0px_rgba(17,17,17,1)]">1</div>
               <h2 className="text-4xl sm:text-5xl font-heading font-extrabold mb-6 tracking-tight text-brand-black text-balance">Passo 1: Envio da Arte</h2>
               <p className="text-xl text-brand-black/70 font-medium leading-relaxed mb-6">
                  Envie sua arte em <strong className="text-brand-black">PDF</strong> com a posição, o tamanho e o <strong className="text-brand-black">código da cor em CMYK</strong>, o padrão da gráfica (ex.: <span className="font-mono">0%, 100%, 38%, 16%</span>). É ele que garante que a cor que você aprova na tela saia igual na impressão. Inclui até 2 ajustes por peça.
               </p>
               <div className="inline-flex items-center gap-2 bg-brand-orange text-brand-beige px-4 py-2 rounded-full text-sm font-bold">
                  R$ 50,00, valor único da arte (reutilizável)
               </div>
           </div>
           
           <div className="step1-container flex-1 w-full lg:h-[420px] min-h-[350px] bg-white rounded-[2rem] p-5 sm:p-6 flex flex-col step-mockup relative overflow-hidden border-2 border-brand-black shadow-2xl">
              <ColorPicker />
           </div>
        </div>

         {/* Step 2: Design */}
         <div className="step-card flex flex-col lg:flex-row items-center min-h-[70vh] border-b border-brand-black/10 pb-24 lg:pb-0 lg:flex-row-reverse">
            <div className="flex-1 lg:pl-16 mb-12 lg:mb-0">
               <div className="w-12 h-12 rounded-2xl bg-brand-green text-brand-black font-heading font-black text-2xl flex items-center justify-center mb-6 border-2 border-brand-black shadow-[4px_4px_0px_0px_rgba(17,17,17,1)]">2</div>
              <h2 className="text-4xl sm:text-5xl font-heading font-extrabold mb-6 tracking-tight text-brand-black text-balance">Passo 2: Escolha do modelo e da cor da camiseta</h2>
              <p className="text-xl text-brand-black/70 font-medium leading-relaxed">
                 Após escolher a estampa, informe à nossa equipe qual será o modelo da personalização, seguindo a tabela de modelos e mockups disponíveis.
              </p>
              <p className="mt-5 text-xl text-brand-black/70 font-medium leading-relaxed">
                 Envie também a cor desejada para a camiseta. Você pode mandar uma foto de inspiração para que nossa equipe verifique a disponibilidade dos tamanhos e indique a opção de cor mais próxima disponível.
              </p>
           </div>
           
             <div className="step2-container flex-1 w-full lg:h-[420px] min-h-[360px] bg-white rounded-[2rem] p-5 sm:p-6 flex flex-col step-mockup relative overflow-hidden border-2 border-brand-black shadow-2xl">
               <ModelsCarousel />
            </div>
         </div>

         {/* Step 3: Approval */}
         <div className="step-card flex flex-col lg:flex-row items-center min-h-[70vh] border-b border-brand-black/10 pb-24 lg:pb-0">
            <div className="flex-1 lg:pr-16 mb-12 lg:mb-0">
                <div className="w-12 h-12 rounded-2xl bg-brand-green text-brand-black font-heading font-black text-2xl flex items-center justify-center mb-6 border-2 border-brand-black shadow-[4px_4px_0px_0px_rgba(17,17,17,1)]">3</div>
               <h2 className="text-4xl sm:text-5xl font-heading font-extrabold mb-6 tracking-tight text-brand-black text-balance">Passo 3: Aprovação & Análise</h2>
               <p className="text-xl text-brand-black/70 font-medium leading-relaxed">
                  Antes de produzir, nossa equipe confere tudo e envia o mockup final para você aprovar. Nada é produzido até o seu sim.
               </p>
            </div>
            
            <div className="flex-1 w-full lg:h-[420px] min-h-[300px] sm:min-h-[350px] lg:min-h-0 bg-brand-pink rounded-[2rem] p-8 lg:p-12 flex items-center justify-center step-mockup relative overflow-hidden shadow-2xl">
               <div className="step3-box bg-white w-full max-w-sm rounded-2xl border border-brand-black/10 p-6 flex flex-col gap-4 relative z-10 transition-colors">
                  <div className="flex items-center gap-3 border-b border-brand-black/10 pb-4">
                     <PackageCheck size={24} className="text-brand-black" />
                     <span className="font-heading font-bold text-lg text-brand-black">Análise da solicitação</span>
                  </div>
                  
                  <div className="flex flex-col gap-3">
                     <div className="flex items-center justify-between">
                        <span className="text-sm font-bold text-brand-black/70">Arte final em CMYK</span>
                        <CheckCircle2 size={18} className="step3-check1 text-brand-green" />
                     </div>
                     <div className="flex items-center justify-between">
                        <span className="text-sm font-bold text-brand-black/70">Modelos, cores e tamanhos</span>
                        <CheckCircle2 size={18} className="step3-check2 text-brand-green" />
                     </div>
                     <div className="flex items-center justify-between">
                        <span className="text-sm font-bold text-brand-black/70">Estoque e viabilidade</span>
                        <CheckCircle2 size={18} className="step3-check3 text-brand-green" />
                     </div>
                  </div>
 
                  <div className="flex justify-center mt-1">
                     <span className="step3-approved text-[11px] font-black text-brand-green uppercase tracking-widest text-center bg-brand-green/10 px-3 py-1 rounded-full origin-bottom">
                        Aprovado pelo cliente
                     </span>
                  </div>
               </div>
            </div>
         </div>
 
         {/* Step 4: Delivery */}
         <div className="step-card flex flex-col lg:flex-row items-center min-h-[70vh] border-b border-brand-black/10 pb-24 lg:pb-0 lg:flex-row-reverse">
            <div className="flex-1 lg:pl-16 mb-12 lg:mb-0">
               <div className="w-12 h-12 rounded-2xl bg-brand-green text-brand-black font-heading font-black text-2xl flex items-center justify-center mb-6 border-2 border-brand-black shadow-[4px_4px_0px_0px_rgba(17,17,17,1)]">4</div>
               <h2 className="text-4xl sm:text-5xl font-heading font-extrabold mb-6 tracking-tight text-brand-black text-balance">Passo 4: Produção & Envio em 5 Dias</h2>
               <p className="text-xl text-brand-black/70 font-medium leading-relaxed">
                  Com o mockup já aprovado, sua coleção entra em produção: impressão, acabamento premium e controle de qualidade. Embalamos com cuidado e postamos em até 5 dias úteis após o pagamento confirmado, para todo o Brasil.
               </p>
           </div>
           
           <div className="flex-1 w-full lg:h-[420px] min-h-[300px] sm:min-h-[350px] lg:min-h-0 bg-white rounded-[2rem] p-8 lg:p-12 flex items-center justify-center step-mockup relative overflow-hidden border-2 border-brand-black shadow-2xl">
              <div className="flex flex-col items-center gap-6 w-full max-w-sm relative z-10">
                 
                 <div className="flex items-center gap-6">
                    <div className="step4-box w-20 h-20 bg-brand-green rounded-2xl border-2 border-brand-black shadow-[4px_4px_0px_0px_rgba(17,17,17,1)] flex items-center justify-center">
                       <PackageCheck size={32} className="text-brand-black" />
                    </div>
                    <div className="step4-truck w-20 h-20 bg-brand-orange rounded-2xl border-2 border-brand-orange shadow-[4px_4px_0px_0px_rgba(17,17,17,1)] flex items-center justify-center text-brand-beige">
                       <Truck size={32} />
                    </div>
                 </div>

                 <div className="bg-brand-beige w-full py-6 rounded-2xl border border-brand-black/10 text-center">
                    <p className="text-xs font-bold text-brand-black/50 uppercase tracking-widest mb-1">Prazo de postagem</p>
                    <div className="text-6xl font-heading font-black text-brand-black flex items-center justify-center gap-2">
                       <span className="step4-days">0</span>
                       <span className="text-2xl font-bold text-brand-black/50 mt-4">Dias Úteis</span>
                    </div>
                 </div>

              </div>
           </div>
        </div>

      </div>
    </section>
  )
}
