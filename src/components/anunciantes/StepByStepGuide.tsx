'use client'

import { useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { TextPlugin } from 'gsap/TextPlugin'
import { MotionPathPlugin } from 'gsap/MotionPathPlugin'
import { useGSAP } from '@gsap/react'
import { MousePointer2, Check } from 'lucide-react'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, TextPlugin, MotionPathPlugin, useGSAP)
}

const STEPS = [
  { id: 'objective', label: 'Selecione um objetivo' },
  { id: 'audience', label: 'Defina o público' },
  { id: 'delivery', label: 'Escolha a meta' },
  { id: 'budget', label: 'Orçamento' },
]

export function StepByStepGuide() {
  const container = useRef<HTMLDivElement>(null)
  const [activeStep, setActiveTab] = useState(0)

  useGSAP(
    () => {
      const cards = gsap.utils.toArray<HTMLElement>('.step-card')

      // Sticky Navigation
      ScrollTrigger.create({
        trigger: '.sticky-nav',
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
      })

      // ==========================================
      // ANIMATION LOOPS (MOCKUPS VIVOS)
      // ==========================================

      // STEP 1: Loop de Botões Alternando com Movimento Orgânico e Glow
      const tlStep1 = gsap.timeline({ repeat: -1, repeatDelay: 1.5 })
      tlStep1
        // Reset inicial
        .set(['.step1-btn1', '.step1-btn2', '.step1-btn3'], { scale: 1, backgroundColor: '#2a2a2a', color: '#a1a1aa', borderColor: 'rgba(255,255,255,0.05)', boxShadow: 'none', opacity: 0.5 })
        .set('.step1-btn1', { opacity: 1 }) // Começa com o 1 mais vivo
        
        // --- CLIQUE NO BOTÃO 1 ---
        .to('.step1-cursor', { 
           x: 0, y: 55, // Atingindo o meio do Botão 1
           duration: 1, 
           ease: 'power3.inOut' 
        })
        .to('.step1-cursor', { scale: 0.8, duration: 0.1 })
        .to('.step1-btn1', { scale: 0.95, duration: 0.1 }, "<")
        .to('.step1-cursor', { scale: 1, duration: 0.1 })
        .to('.step1-btn1', { 
           scale: 1.05, 
           backgroundColor: '#d8b4fe', 
           color: '#000', 
           borderColor: '#d8b4fe', 
           boxShadow: 'none',
           duration: 0.3, 
           ease: 'back.out(1.7, 0.3)' 
        }, "<")
        .to('.step1-btn1', { scale: 1, duration: 0.2 })
        .to({}, { duration: 1 }) // Pausa
        .to('.step1-btn1', { 
           backgroundColor: '#2a2a2a', color: '#a1a1aa', borderColor: 'rgba(255,255,255,0.05)', boxShadow: 'none', opacity: 0.5, duration: 0.4 
        }, 'switch1')

        // --- CLIQUE NO BOTÃO 2 ---
        .to('.step1-btn2', { opacity: 1, duration: 0.4 }, 'switch1') // Prepara o btn2
        .to('.step1-cursor', { 
           x: 0, y: 130, // Move para o meio do botão 2
           duration: 0.8, 
           ease: 'power2.inOut' 
        }, 'switch1')
        .to('.step1-cursor', { scale: 0.8, duration: 0.1 })
        .to('.step1-btn2', { scale: 0.95, duration: 0.1 }, "<")
        .to('.step1-cursor', { scale: 1, duration: 0.1 })
        .to('.step1-btn2', { 
           scale: 1.05, 
           backgroundColor: '#d8b4fe', 
           color: '#000', 
           borderColor: '#d8b4fe', 
           boxShadow: 'none',
           duration: 0.3, 
           ease: 'back.out(1.7, 0.3)' 
        }, "<")
        .to('.step1-btn2', { scale: 1, duration: 0.2 })
        .to({}, { duration: 1 }) // Pausa
        .to('.step1-btn2', { 
           backgroundColor: '#2a2a2a', color: '#a1a1aa', borderColor: 'rgba(255,255,255,0.05)', boxShadow: 'none', opacity: 0.5, duration: 0.4 
        }, 'switch2')

        // --- CLIQUE NO BOTÃO 3 ---
        .to('.step1-btn3', { opacity: 1, duration: 0.4 }, 'switch2') // Prepara o btn3
        .to('.step1-cursor', { 
           x: 0, y: 205, // Move para o meio do botão 3
           duration: 0.8, 
           ease: 'power2.inOut' 
        }, 'switch2')
        .to('.step1-cursor', { scale: 0.8, duration: 0.1 })
        .to('.step1-btn3', { scale: 0.95, duration: 0.1 }, "<")
        .to('.step1-cursor', { scale: 1, duration: 0.1 })
        .to('.step1-btn3', { 
           scale: 1.05, 
           backgroundColor: '#d8b4fe', 
           color: '#000', 
           borderColor: '#d8b4fe', 
           boxShadow: 'none',
           duration: 0.3, 
           ease: 'back.out(1.7, 0.3)' 
        }, "<")
        .to('.step1-btn3', { scale: 1, duration: 0.2 })
        .to({}, { duration: 1.5 }) // Pausa mais longa no final

        // --- RESET ---
        .to('.step1-btn3', { 
           backgroundColor: '#2a2a2a', color: '#a1a1aa', opacity: 0.5, borderColor: 'rgba(255,255,255,0.05)', boxShadow: 'none', duration: 0.4 
        }, 'end')
        .to('.step1-cursor', { 
           x: 0, y: 0, // Volta para a posição CSS exata (zero transform)
           duration: 0.8, 
           ease: 'power2.inOut' 
        }, 'end')


      // STEP 2: Loop da Barra de Pesquisa com Stagger Dinâmico e "Backspace" Real
      const tlStep2 = gsap.timeline({ repeat: -1, repeatDelay: 1 })
      
      // Função simuladora de Backspace para GSAP
      const typeText = (selector: string, text: string) => {
        return gsap.to(selector, { text: { value: text, delimiter: "" }, duration: text.length * 0.08, ease: "none" })
      }
      const backspaceText = (selector: string, text: string) => {
        const targets = gsap.utils.toArray(selector) as HTMLElement[]
        const obj = { length: text.length }
        return gsap.to(obj, {
          length: 0,
          duration: text.length * 0.05,
          ease: "none",
          onUpdate: () => {
            targets.forEach(target => {
              target.textContent = text.substring(0, Math.floor(obj.length))
            })
          }
        })
      }

      tlStep2
        // Cursor pisca (Simulando o cursor de texto CSS que vamos injetar depois)
        .to('.step2-caret', { opacity: 0, duration: 0.1, repeat: 3, yoyo: true })
        // Apaga "Goiânia" (letra por letra simulado)
        .add(backspaceText('.step2-search-text', "Goiânia, Goiás"))
        
        // As tags atuais caem e somem
        .to('.step2-tags-group-1', { y: 20, opacity: 0, duration: 0.4, stagger: 0.1, ease: 'power2.in' }, "-=0.2")
        .set('.step2-tags-group-1', { display: 'none' })
        
        // Digita "São Paulo"
        .add(typeText('.step2-search-text', "São Paulo, SP"), "+=0.2")
        
        // Novas tags sobem
        .set('.step2-tags-group-2', { display: 'flex' })
        .fromTo('.step2-tags-group-2', 
           { y: 20, opacity: 0 }, 
           { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: 'back.out(1.5)' }
        )
        
        // Pausa
        .to({}, { duration: 2 })

        // Apaga "São Paulo"
        .to('.step2-caret', { opacity: 0, duration: 0.1, repeat: 3, yoyo: true })
        .add(backspaceText('.step2-search-text', "São Paulo, SP"))
        
        // As tags atuais caem e somem
        .to('.step2-tags-group-2', { y: 20, opacity: 0, duration: 0.4, stagger: 0.1, ease: 'power2.in' }, "-=0.2")
        .set('.step2-tags-group-2', { display: 'none' })
        
        // Digita "Goiânia"
        .add(typeText('.step2-search-text', "Goiânia, Goiás"), "+=0.2")
        
        // Voltam as tags iniciais
        .set('.step2-tags-group-1', { display: 'flex' })
        .fromTo('.step2-tags-group-1', 
           { y: 20, opacity: 0 }, 
           { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: 'back.out(1.5)' }
        )


      // STEP 3: Loop do "Algoritmo Pipeline" (Saindo da Rede -> Áudio -> views -> hashtags)
      const tlStep3 = gsap.timeline({ repeat: -1, repeatDelay: 1 })
      tlStep3
        // Reset de todo o pipeline
        .set('.step3-network-box', { borderColor: 'rgba(255,255,255,0.05)', backgroundColor: '#2a2a2a', boxShadow: 'none' })
        .set('.step3-network-icon', { color: '#a1a1aa' })
        .set('.step3-network-text', { color: '#a1a1aa' })

        .set('.step3-audio-box', { opacity: 0.3, scale: 0.95, borderColor: 'rgba(255,255,255,0.05)', backgroundColor: '#2a2a2a', boxShadow: 'none' })
        .set('.step3-audio-icon', { color: '#a1a1aa' })
        .set('.step3-audio-text', { text: "Usar Áudio Oficial", color: '#a1a1aa' })
        
        .set('.step3-wire-0', { height: 0, opacity: 0 })
        .set('.step3-wire-1', { height: 0, opacity: 0 })
        .set('.step3-wire-2', { height: 0, opacity: 0 })
        
        .set('.step3-views-box', { opacity: 0.3, scale: 0.95, borderColor: 'rgba(255,255,255,0.05)', backgroundColor: '#2a2a2a', boxShadow: 'none' })
        .set('.step3-views-val', { text: "0", color: '#a1a1aa' })
        
        .set('.step3-hash-box', { opacity: 0.3, scale: 0.95, borderColor: 'rgba(255,255,255,0.05)', backgroundColor: '#2a2a2a', boxShadow: 'none' })
        .set('.step3-hash-val', { text: "…", color: '#a1a1aa' })
        
        .set('.step3-cursor', { y: 80, x: 80, opacity: 0 })

        // O Cursor Entra e Ativa a Caixa "Pai" (Rede Social)
        .to('.step3-cursor', { 
           y: -15, x: 0, 
           duration: 0.8, 
           ease: 'power3.out' 
        })
        .to('.step3-cursor', { scale: 0.8, duration: 0.1 })
        .to('.step3-network-box', { scale: 0.95, duration: 0.1 }, "<")
        .to('.step3-cursor', { scale: 1, duration: 0.1 })
        
        // Caixa Rede Social "Liga"
        .to('.step3-network-box', { 
           scale: 1.05,
           borderColor: '#d8b4fe', 
           backgroundColor: 'rgba(216,180,254,0.1)', 
           boxShadow: 'none', 
           duration: 0.3,
           ease: 'back.out(1.7, 0.3)'
        }, 'activate_network')
        .to('.step3-network-box', { scale: 1, duration: 0.2 })
        .to('.step3-network-icon', { color: '#d8b4fe', duration: 0.4 }, 'activate_network')
        .to('.step3-network-text', { color: '#fff', duration: 0.4 }, 'activate_network')

        // A Energia (Fio SVG 0) Corre para o Áudio
        .to('.step3-wire-0', { height: '16px', opacity: 1, duration: 0.4, ease: 'power2.inOut' })
        
        // Caixa Áudio "Liga"
        .to('.step3-audio-box', { 
           opacity: 1, scale: 1,
           borderColor: '#d8b4fe', 
           backgroundColor: 'rgba(216,180,254,0.1)', 
           boxShadow: 'none', 
           duration: 0.4 
        }, 'activate_audio')
        .to('.step3-audio-icon', { color: '#d8b4fe', duration: 0.4 }, 'activate_audio')
        .to('.step3-audio-text', { color: '#fff', duration: 0.4 }, 'activate_audio')
        
        // A Energia (Fio SVG 1) Corre para baixo
        .to('.step3-wire-1', { height: '16px', opacity: 1, duration: 0.4, ease: 'power2.inOut' })
        
        // Caixa Views Liga & Conta
        .to('.step3-views-box', { 
           opacity: 1, scale: 1,
           duration: 0.4, 
           ease: 'back.out(1.5)' 
        }, 'views_on')
        .to('.step3-views-val', { color: '#fff', duration: 0.2 }, 'views_on')
        // Contador sobe suave
        .to('.step3-views-val', { 
           text: "10.000", 
           duration: 1.5, 
           ease: 'power3.inOut' 
        })
        // Depois que preencher, brilha
        .to('.step3-views-box', { 
           borderColor: '#d8b4fe', 
           backgroundColor: 'rgba(216,180,254,0.1)', 
           boxShadow: 'none', 
           duration: 0.4 
        }, 'views_done')

        // A Energia (Fio SVG 2) Corre para a Hashtag
        .to('.step3-wire-2', { height: '16px', opacity: 1, duration: 0.4, ease: 'power2.inOut' })
        
        // Caixa Hash Liga & Digita
        .to('.step3-hash-box', { 
           opacity: 1, scale: 1,
           duration: 0.4, 
           ease: 'back.out(1.5)' 
        }, 'hash_on')
        .to('.step3-hash-val', { color: '#fff', duration: 0.2 }, 'hash_on')
        // Efeito Digitação mágica
        .to('.step3-hash-val', { text: "#VilaMix", duration: 0.6, ease: 'none' })
        // Depois que preencher, brilha
        .to('.step3-hash-box', { 
           borderColor: '#d8b4fe', 
           backgroundColor: 'rgba(216,180,254,0.1)', 
           boxShadow: 'none', 
           duration: 0.4 
        }, 'hash_done')

        // Pausa no final do processamento
        .to({}, { duration: 2 })
        
        // Cursor Sai
        .to('.step3-cursor', { y: 150, opacity: 0, duration: 0.6 })


      // STEP 4: Loop de Recompensas Crescendo (Escrow)
      const tlStep4 = gsap.timeline({ repeat: -1, repeatDelay: 0.5 })
      tlStep4
        // Reset inicial
        .set('.step4-vip', { scale: 0.9, backgroundColor: '#2a2a2a', color: '#a1a1aa', opacity: 0.5, zIndex: 1 })
        .set('.step4-pix50', { scale: 0.95, backgroundColor: '#2a2a2a', color: '#a1a1aa', opacity: 0.7, zIndex: 2 })
        .set('.step4-pix150', { scale: 1, backgroundColor: '#22c55e', color: '#000', opacity: 1, zIndex: 3, boxShadow: 'none' })
        .set('.step4-cursor', { y: 0 })
        // Focus VIP
        .to('.step4-cursor', { y: -130, duration: 0.8, ease: 'power2.inOut', delay: 1 })
        .to('.step4-pix150', { scale: 0.95, backgroundColor: '#2a2a2a', color: '#a1a1aa', opacity: 0.7, boxShadow: 'none', zIndex: 1, duration: 0.4 }, "<")
        .to('.step4-vip', { scale: 1.1, backgroundColor: '#22c55e', color: '#000', opacity: 1, zIndex: 3, boxShadow: 'none', duration: 0.4 }, "<")
        // Focus PIX 50
        .to('.step4-cursor', { y: -65, duration: 0.6, ease: 'power2.inOut', delay: 1.5 })
        .to('.step4-vip', { scale: 0.9, backgroundColor: '#2a2a2a', color: '#a1a1aa', opacity: 0.5, boxShadow: 'none', zIndex: 1, duration: 0.4 }, "<")
        .to('.step4-pix50', { scale: 1.1, backgroundColor: '#22c55e', color: '#000', opacity: 1, zIndex: 3, boxShadow: 'none', duration: 0.4 }, "<")
        // Focus PIX 150
        .to('.step4-cursor', { y: 0, duration: 0.6, ease: 'power2.inOut', delay: 1.5 })
        .to('.step4-pix50', { scale: 0.95, backgroundColor: '#2a2a2a', color: '#a1a1aa', opacity: 0.7, boxShadow: 'none', zIndex: 2, duration: 0.4 }, "<")
        .to('.step4-pix150', { scale: 1, backgroundColor: '#22c55e', color: '#000', opacity: 1, zIndex: 3, boxShadow: 'none', duration: 0.4 }, "<")

    },
    { scope: container },
  )

  return (
    <section ref={container} className="bg-[#121212] relative pb-32">
      
      {/* Sticky Navigation Bar */}
      <div className="sticky-nav z-40 w-full bg-[#121212]/90 backdrop-blur-md border-b border-white/5 hidden md:block">
        <div className="container mx-auto max-w-5xl px-6 h-16 flex items-center justify-between overflow-x-auto no-scrollbar">
           {STEPS.map((step, i) => (
              <div 
                key={step.id} 
                className={`text-sm font-bold whitespace-nowrap transition-colors duration-300 relative py-4 px-2
                  ${activeStep >= i ? 'text-white' : 'text-zinc-500'}
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
        
        {/* Step 1: Objective */}
        <div className="step-card flex flex-col lg:flex-row items-center min-h-[70vh] border-b border-white/5 pb-24 lg:pb-0">
           <div className="flex-1 lg:pr-16 mb-12 lg:mb-0">
              <div className="w-12 h-12 rounded-full bg-white text-black font-black flex items-center justify-center mb-6">1</div>
              <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 tracking-tight text-balance">Escolha seu objetivo</h2>
              <p className="text-xl text-zinc-400 font-medium leading-relaxed">
                 Selecione o objetivo de campanha certo para alcançar os resultados do seu negócio (Hit Musical, Sold-out ou Awareness).
              </p>
           </div>
           
           <div className="flex-1 w-full lg:h-[420px] min-h-[300px] sm:min-h-[350px] lg:min-h-0 bg-[#1c1c1c] rounded-3xl p-8 lg:p-12 flex items-center justify-center step-mockup relative overflow-hidden border border-white/5 shadow-2xl">
              <div className="w-full max-w-sm flex flex-col gap-4 relative z-10">
                 <div className="step1-btn1 bg-[#2a2a2a] text-zinc-400 font-bold p-5 rounded-xl border border-white/5 transition-colors flex justify-between items-center relative z-10">
                    <span>Lançamento Musical (Top 50)</span>
                 </div>
                 <div className="step1-btn2 bg-[#2a2a2a] text-zinc-400 font-bold p-5 rounded-xl border border-white/5 opacity-50 relative z-10">
                    <span>Lotação de Evento (Sold-out)</span>
                 </div>
                 <div className="step1-btn3 bg-[#2a2a2a] text-zinc-400 font-bold p-5 rounded-xl border border-white/5 opacity-50 relative z-10">
                    <span>Brand Awareness Local</span>
                 </div>
                 {/* Cursor Flutuante (Posição ajustada para não cobrir texto na entrada) */}
                 <MousePointer2 className="step1-cursor absolute right-8 top-[-30px] text-white fill-current w-6 h-6 rotate-[-15deg] z-20 pointer-events-none drop-shadow-lg" />
              </div>
           </div>
        </div>

        {/* Step 2: Audience */}
        <div className="step-card flex flex-col lg:flex-row items-center min-h-[70vh] border-b border-white/5 pb-24 lg:pb-0 lg:flex-row-reverse">
           <div className="flex-1 lg:pl-16 mb-12 lg:mb-0">
              <div className="w-12 h-12 rounded-full bg-white text-black font-black flex items-center justify-center mb-6">2</div>
              <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 tracking-tight text-balance">Defina o seu público local</h2>
              <p className="text-xl text-zinc-400 font-medium leading-relaxed">
                 O sucesso nasce nas ruas. Alcance criadores hiper-segmentados na sua cidade ou em regiões estratégicas do Brasil.
              </p>
           </div>
           
           <div className="flex-1 w-full lg:h-[420px] min-h-[300px] sm:min-h-[350px] lg:min-h-0 bg-[#1c1c1c] rounded-3xl p-8 lg:p-12 flex flex-col items-center justify-center step-mockup relative overflow-hidden border border-white/5 shadow-2xl">
              <div className="w-full max-w-sm h-[68px] bg-[#facc15] text-black font-bold px-5 rounded-xl flex items-center gap-3 shadow-lg mb-6">
                 <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="opacity-70 shrink-0"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
                 <span className="text-lg flex items-center h-7 flex-1">
                    <span className="step2-search-text">Goiânia, Goiás</span>
                    <span className="step2-caret w-0.5 h-5 bg-black ml-[2px] shrink-0"></span>
                 </span>
              </div>
              
              <div className="relative w-full max-w-sm h-12">
                {/* Grupo de Tags 1 (Goiânia) */}
                <div className="step2-tags-group-1 absolute inset-0 w-full flex gap-3">
                    <div className="flex-1 border-2 border-[#facc15] text-white px-4 py-3 rounded-full font-bold flex items-center justify-between bg-black/20">
                      <span>Sertanejo</span>
                      <div className="bg-[#facc15] text-black rounded-full p-0.5"><Check size={14} strokeWidth={4} /></div>
                    </div>
                    <div className="flex-1 border-2 border-zinc-700 text-zinc-500 px-4 py-3 rounded-full font-bold flex items-center justify-between">
                      <span>Mulheres</span>
                    </div>
                </div>

                {/* Grupo de Tags 2 (São Paulo) - Inicialmente invisível via CSS puro (display:none é setado no js, mas botamos via opacidade para start seguro) */}
                <div className="step2-tags-group-2 absolute inset-0 w-full flex gap-3" style={{ display: 'none', opacity: 0 }}>
                    <div className="flex-1 border-2 border-[#facc15] text-white px-4 py-3 rounded-full font-bold flex items-center justify-between bg-black/20">
                      <span>Eletrônico</span>
                      <div className="bg-[#facc15] text-black rounded-full p-0.5"><Check size={14} strokeWidth={4} /></div>
                    </div>
                    <div className="flex-1 border-2 border-[#facc15] text-white px-4 py-3 rounded-full font-bold flex items-center justify-between bg-black/20">
                      <span>18-24 anos</span>
                      <div className="bg-[#facc15] text-black rounded-full p-0.5"><Check size={14} strokeWidth={4} /></div>
                    </div>
                </div>
              </div>
           </div>
        </div>

        {/* Step 3: Meta de Entrega (Algoritmo Visual) */}
        <div className="step-card flex flex-col lg:flex-row items-center min-h-[70vh] border-b border-white/5 pb-24 lg:pb-0">
           <div className="flex-1 lg:pr-16 mb-12 lg:mb-0">
              <div className="w-12 h-12 rounded-full bg-white text-black font-black flex items-center justify-center mb-6">3</div>
              <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 tracking-tight text-balance">Selecione a meta da IA</h2>
              <p className="text-xl text-zinc-400 font-medium leading-relaxed">
                 Diga ao nosso Algoritmo o que o criador precisa fazer para receber. Controle absoluto sobre o resultado que você paga.
              </p>
           </div>
           
           <div className="flex-1 w-full lg:h-[420px] min-h-[300px] sm:min-h-[350px] lg:min-h-0 bg-[#1c1c1c] rounded-3xl p-8 lg:p-12 flex items-center justify-center step-mockup relative overflow-hidden border border-white/5 shadow-2xl">
              <div className="w-full max-w-sm flex flex-col gap-0 relative z-10 items-center">
                 
                  {/* Bloco 0: Rede Social (Pai Principal) */}
                 <div className="step3-network-box bg-[#2a2a2a] w-full text-zinc-400 font-bold p-4 rounded-xl border border-white/5 transition-colors flex justify-center items-center gap-3 relative z-10">
                    <span className="step3-network-icon text-zinc-400 transition-colors"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg></span>
                    <span className="step3-network-text text-zinc-400 transition-colors">Selecione a Rede (Instagram)</span>
                 </div>

                 {/* Fio de conexão 0 */}
                 <div className="w-[2px] bg-zinc-800 relative z-0 flex justify-center">
                    <div className="step3-wire-0 w-full bg-brand-purple rounded-full"></div>
                 </div>

                 {/* Bloco 1: Áudio */}
                 <div className="step3-audio-box bg-[#2a2a2a] w-[95%] text-zinc-400 font-bold p-4 rounded-xl border border-white/5 transition-colors flex justify-center items-center gap-3 relative z-10 opacity-30">
                    <span className="step3-audio-icon text-zinc-400 transition-colors"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg></span>
                    <span className="step3-audio-text text-zinc-400 transition-colors">Usar Áudio Oficial</span>
                 </div>

                 {/* Fio de conexão 1 */}
                 <div className="w-[2px] bg-zinc-800 relative z-0 flex justify-center">
                    <div className="step3-wire-1 w-full bg-brand-purple rounded-full"></div>
                 </div>

                 {/* Bloco 2: Views */}
                 <div className="step3-views-box bg-[#2a2a2a] w-[90%] text-zinc-400 font-bold p-4 rounded-xl border border-white/5 flex justify-between px-8 relative z-10 opacity-30">
                    <span>+ Mínimo de Views</span>
                    <span className="step3-views-val text-zinc-400 font-mono">0</span>
                 </div>

                 {/* Fio de conexão 2 */}
                 <div className="w-[2px] bg-zinc-800 relative z-0 flex justify-center">
                    <div className="step3-wire-2 w-full bg-brand-purple rounded-full"></div>
                 </div>

                 {/* Bloco 3: Hashtag */}
                 <div className="step3-hash-box bg-[#2a2a2a] w-[80%] text-zinc-400 font-bold p-4 rounded-xl border border-white/5 flex justify-between px-8 relative z-10 opacity-30">
                    <span>+ Usar Hashtag</span>
                    <span className="step3-hash-val text-zinc-400 transition-colors font-mono">…</span>
                 </div>
                 
                 {/* Cursor Flutuante Step 3 */}
                 <MousePointer2 className="step3-cursor absolute right-8 top-[10px] text-white fill-current w-6 h-6 rotate-[-15deg] z-20 pointer-events-none drop-shadow-lg opacity-0" />
              </div>
           </div>
        </div>

        {/* Step 4: Budget */}
        <div className="step-card flex flex-col lg:flex-row items-center min-h-[70vh] border-b border-white/5 pb-24 lg:pb-0 lg:flex-row-reverse">
           <div className="flex-1 lg:pl-16 mb-12 lg:mb-0">
              <div className="w-12 h-12 rounded-full bg-white text-black font-black flex items-center justify-center mb-6">4</div>
              <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 tracking-tight text-balance">Defina a recompensa</h2>
              <p className="text-xl text-zinc-400 font-medium leading-relaxed">
                 O orçamento é protegido no contrato inteligente. Escolha se vai recompensar com PIX na hora ou disponibilizar Ingressos VIPs do seu evento.
              </p>
           </div>
           
           <div className="flex-1 w-full lg:h-[420px] min-h-[300px] sm:min-h-[350px] lg:min-h-0 bg-[#1c1c1c] rounded-3xl p-8 lg:p-12 flex items-center justify-center step-mockup relative overflow-hidden border border-white/5 shadow-2xl">
              <div className="w-full max-w-xs flex flex-col items-center gap-4 relative z-10">
                 <div className="step4-vip bg-[#2a2a2a] text-zinc-400 font-bold w-48 py-4 rounded-full border border-white/5 text-center transition-[transform,background-color,color,opacity] duration-300">Recompensa: VIP</div>
                 <div className="step4-pix50 bg-[#2a2a2a] text-zinc-400 font-bold w-56 py-4 rounded-full border border-white/5 text-center transition-[transform,background-color,color,opacity] duration-300">PIX: R$ 50</div>
                 <div className="step4-pix150 bg-green-500 text-black font-black w-64 py-5 rounded-full text-center text-2xl relative transition-[transform,background-color,color,opacity] duration-300">
                    PIX: R$ 150
                 </div>
                 {/* Cursor Flutuante que sobe e desce */}
                 <MousePointer2 className="step4-cursor absolute right-4 bottom-[-15px] text-white fill-current w-8 h-8 rotate-[-15deg] z-20 pointer-events-none drop-shadow-lg" />
              </div>
           </div>
        </div>

      </div>
    </section>
  )
}
