'use client'

import { useRef, useState, useEffect, useCallback } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { TextPlugin } from 'gsap/TextPlugin'
import { useGSAP } from '@gsap/react'
import {
  MousePointer2,
  CheckCircle2,
  Scissors,
  Palette,
  PackageCheck,
  Truck,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, TextPlugin, useGSAP)
}

const SHIRT_COLORS = [
  { name: 'Preto Jet', value: '#111111', class: 'demo-color-1' },
  { name: 'Pêssego', value: '#F3C5A8', class: 'demo-color-2' },
  { name: 'Branco', value: '#FFFFFF', class: 'demo-color-3' }
]

const PRESET_PRINTS = [
  {
    id: 'star',
    name: 'Estrela Y2K',
    element: (
      <svg viewBox="0 0 100 100" className="w-full h-full fill-current" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M 50,10 L 53,40 L 83,43 L 53,46 L 50,76 L 47,46 L 17,43 L 47,40 Z" />
        <circle cx="50" cy="43" r="2" fill="none" stroke="currentColor" strokeWidth="1" />
      </svg>
    )
  },
  {
    id: 'flower',
    name: 'Retro Flower',
    element: (
      <svg viewBox="0 0 100 100" className="w-full h-full fill-current animate-spin" style={{ animationDuration: '20s' }} aria-hidden="true">
        <circle cx="50" cy="50" r="14" />
        <circle cx="50" cy="24" r="12" />
        <circle cx="50" cy="76" r="12" />
        <circle cx="24" cy="50" r="12" />
        <circle cx="76" cy="50" r="12" />
        <circle cx="32" cy="32" r="12" />
        <circle cx="68" cy="68" r="12" />
        <circle cx="32" cy="68" r="12" />
        <circle cx="68" cy="32" r="12" />
        <circle cx="50" cy="50" r="6" fill="rgba(255,255,255,0.95)" />
      </svg>
    )
  },
  {
    id: 'tshirteria',
    name: 'TSH Mono',
    element: (
      <svg viewBox="0 0 100 100" className="w-full h-full fill-current" aria-hidden="true">
        {/* círculo selo */}
        <circle cx="50" cy="50" r="38" fill="none" stroke="currentColor" strokeWidth="3" />
        {/* T monograma */}
        <path d="M 30,38 L 70,38 M 50,38 L 50,68" stroke="currentColor" strokeWidth="6" strokeLinecap="round" fill="none" />
        {/* dois pontos decorativos */}
        <circle cx="36" cy="74" r="1.8" />
        <circle cx="64" cy="74" r="1.8" />
      </svg>
    )
  }
]

const SIZE_SCALE: Record<string, number> = { P: 0.78, M: 0.9, G: 1.0, GG: 1.14 }

// Decide cor do estampado conforme luminância da camiseta (evita preto-no-preto)
function isDarkShirt(color: string): boolean {
  const hex = color.replace('#', '')
  if (hex.length !== 6) return false
  const r = parseInt(hex.slice(0, 2), 16)
  const g = parseInt(hex.slice(2, 4), 16)
  const b = parseInt(hex.slice(4, 6), 16)
  return (r * 0.299 + g * 0.587 + b * 0.114) < 110
}

function ShirtVector({ color, scale = 1 }: { color: string; scale?: number }) {
  const dark = isDarkShirt(color)
  return (
    <svg
      viewBox="0 0 200 220"
      className="w-60 h-64 sm:w-72 sm:h-80 select-none pointer-events-none drop-shadow-md"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <g
        style={{
          transform: `scale(${scale})`,
          transformOrigin: '100px 120px',
          transition: 'transform 450ms cubic-bezier(0.22, 1, 0.36, 1)',
        }}
      >
        {/* Silhueta da camiseta — linhas retas com cantos arredondados (estilo flat) */}
        <path
          d="M 80,24
             C 88,38 112,38 120,24
             L 138,32
             L 178,52
             L 168,82
             L 148,76
             L 148,196
             L 52,196
             L 52,76
             L 32,82
             L 22,52
             L 62,32
             Z"
          fill={color}
          stroke="#111111"
          strokeWidth="4"
          strokeLinejoin="round"
          strokeLinecap="round"
          style={{ transition: 'fill 350ms ease' }}
        />
        {/* Linha de costura da gola (sem preenchimento — sem patch cinza) */}
        <path
          d="M 80,24 C 88,38 112,38 120,24"
          fill="none"
          stroke={dark ? 'rgba(255,255,255,0.25)' : '#111111'}
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </g>
    </svg>
  )
}

// Modelos do carrossel do Step 1 — 4 peças do catálogo
const PRODUCT_MODELS = [
  { id: 'oversized', name: 'Camiseta Oversized' },
  { id: 'baby', name: 'Baby Look' },
  { id: 'tank', name: 'Regata' },
  { id: 'hoodie', name: 'Moletom' },
] as const

function ProductModelIcon({ variant }: { variant: (typeof PRODUCT_MODELS)[number]['id'] }) {
  const common = {
    fill: '#F2EDE2',
    stroke: '#111111',
    strokeWidth: 4,
    strokeLinejoin: 'round' as const,
    strokeLinecap: 'round' as const,
  }
  // Oversized usa o mesmo desenho do customizer (ShirtVector) — viewBox 0 0 200 220
  if (variant === 'oversized') {
    return (
      <svg viewBox="0 0 200 220" className="w-full h-full drop-shadow-md transition-opacity duration-300" aria-hidden="true">
        <path
          d="M 80,24 C 88,38 112,38 120,24 L 138,32 L 178,52 L 168,82 L 148,76 L 148,196 L 52,196 L 52,76 L 32,82 L 22,52 L 62,32 Z"
          {...common}
        />
        <path d="M 80,24 C 88,38 112,38 120,24" fill="none" stroke="#111111" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    )
  }
  return (
    <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-md transition-opacity duration-300" aria-hidden="true">
      {variant === 'baby' && (
        <>
          <path
            d="M 78,32 C 86,44 114,44 122,32 L 138,40 L 162,58 L 152,74 L 142,68 L 146,170 C 146,176 142,180 136,180 L 64,180 C 58,180 54,176 54,170 L 58,68 L 48,74 L 38,58 L 62,40 Z"
            {...common}
          />
          <path d="M 78,32 C 86,44 114,44 122,32" fill="none" stroke="#111111" strokeWidth="2.5" strokeLinecap="round" />
        </>
      )}
      {variant === 'tank' && (
        <>
          <path
            d="M 72,28 C 78,52 122,52 128,28 L 152,42 L 152,178 L 48,178 L 48,42 Z"
            {...common}
          />
          <path d="M 72,28 C 78,52 122,52 128,28" fill="none" stroke="#111111" strokeWidth="2.5" strokeLinecap="round" />
        </>
      )}
      {variant === 'hoodie' && (
        <>
          <path
            d="M 62,40 C 70,18 130,18 138,40 L 158,50 L 184,72 L 172,90 L 158,80 L 158,180 L 42,180 L 42,80 L 28,90 L 16,72 L 42,50 Z"
            {...common}
          />
          {/* abertura do capuz */}
          <path d="M 78,40 C 86,58 114,58 122,40" fill="rgba(0,0,0,0.1)" stroke="#111111" strokeWidth="2.5" />
          {/* cordão */}
          <line x1="94" y1="56" x2="94" y2="74" stroke="#111111" strokeWidth="2" strokeLinecap="round" />
          <line x1="106" y1="56" x2="106" y2="74" stroke="#111111" strokeWidth="2" strokeLinecap="round" />
          {/* bolso canguru */}
          <path d="M 70,120 L 130,120 L 130,150 L 70,150 Z" fill="none" stroke="#111111" strokeWidth="2" strokeLinecap="round" opacity="0.4" />
        </>
      )}
    </svg>
  )
}

const STEPS = [
  { id: 'briefing', label: '1. Escolha o Modelo Base' },
  { id: 'design', label: '2. Desenvolvimento da Arte' },
  { id: 'approval', label: '3. Validação do Projeto' },
  { id: 'delivery', label: '4. Estamparia e Envio' },
]

export function PersonalizacaoSteps() {
  const container = useRef<HTMLDivElement>(null)
  const [activeStep, setActiveTab] = useState(0)

  const tlStep1Ref = useRef<gsap.core.Timeline | null>(null)
  const tlStep2Ref = useRef<gsap.core.Timeline | null>(null)

  // Step 2: Customizer states
  const [shirtColor, setShirtColor] = useState('#F2EDE2')
  const [activeSize, setActiveSize] = useState('G')
  const [activePreset, setActivePreset] = useState<string | null>(null)

  // Step 1: carousel de modelos (índice ativo)
  const [productIdx, setProductIdx] = useState(0)

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      
      if (!prefersReducedMotion) {
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

        // Resolve target coords RELATIVE to the given container in its current layout.
        // The cursor is positioned at top:0; left:0 of that same container, so the
        // returned (x, y) maps 1:1 to gsap translate values without any offset math.
        const getCursorTarget = (containerSel: string, targetSel: string) => {
          const containerEl = document.querySelector(containerSel)
          const targetEl = document.querySelector(targetSel)
          if (!containerEl || !targetEl) return { x: 0, y: 0 }
          const c = containerEl.getBoundingClientRect()
          const t = targetEl.getBoundingClientRect()
          // ponta da seta entra ~3px no botão (top-left do MousePointer2 é a ponta)
          return {
            x: t.left - c.left + t.width / 2 - 3,
            y: t.top - c.top + t.height / 2 - 3,
          }
        }

        const CURSOR_ROTATE = -15

        const clickStep = (
          tl: gsap.core.Timeline,
          cursorSel: string,
          containerSel: string,
          targetSel: string,
          onClick: () => void,
          { moveDur = 0.9, hold = 0.7 }: { moveDur?: number; hold?: number } = {}
        ) => {
          tl.to(cursorSel, {
              x: () => getCursorTarget(containerSel, targetSel).x,
              y: () => getCursorTarget(containerSel, targetSel).y,
              rotate: CURSOR_ROTATE,
              duration: moveDur,
              ease: 'power3.inOut',
            })
            .to(cursorSel, { scale: 0.82, duration: 0.12, ease: 'power2.in' })
            .to(targetSel, { scale: 0.9, duration: 0.12, ease: 'power2.in' }, '<')
            .call(onClick)
            .to(cursorSel, { scale: 1, duration: 0.2, ease: 'back.out(2)' })
            .to(targetSel, { scale: 1, duration: 0.25, ease: 'back.out(2)' }, '<')
            .to({}, { duration: hold })
        }

        // ==========================================
        // STEP 1: Cursor automático clica nas setinhas
        // ==========================================
        const tlStep1 = gsap.timeline({ repeat: -1, repeatDelay: 1.2 })
        tlStep1Ref.current = tlStep1

        tlStep1
          .set('.step1-cursor', {
            x: 30,
            y: 30,
            scale: 1,
            opacity: 1,
            rotate: CURSOR_ROTATE,
            transformOrigin: '0% 0%',
          })
          .call(() => setProductIdx(0))
          .to({}, { duration: 0.8 })

        // Avança 3x clicando na seta direita: 0→1→2→3
        for (let n = 0; n < 3; n++) {
          clickStep(
            tlStep1,
            '.step1-cursor',
            '.step1-container',
            '.step1-next',
            () => setProductIdx((i) => (i + 1) % PRODUCT_MODELS.length),
            { moveDur: 0.85, hold: 1.0 },
          )
        }

        // Volta 3x clicando na seta esquerda: 3→2→1→0
        for (let n = 0; n < 3; n++) {
          clickStep(
            tlStep1,
            '.step1-cursor',
            '.step1-container',
            '.step1-prev',
            () =>
              setProductIdx((i) => (i - 1 + PRODUCT_MODELS.length) % PRODUCT_MODELS.length),
            { moveDur: 0.85, hold: 0.9 },
          )
        }

        const tlStep2 = gsap.timeline({ repeat: -1, repeatDelay: 1.2 })
        tlStep2Ref.current = tlStep2

        tlStep2
          // Estado inicial absoluto: cursor visível, inclinado, no canto esquerdo do card
          .set('.step2-cursor', {
            x: 40,
            y: 230,
            scale: 1,
            opacity: 1,
            rotate: CURSOR_ROTATE,
            transformOrigin: '0% 0%',
          })
          .set('.demo-logo-print', { opacity: 0, scale: 0 })
          .call(() => {
            setShirtColor('#F2EDE2')
            setActiveSize('G')
            setActivePreset(null)
          })
          .to({}, { duration: 0.4 })

        // 1) Cor pêssego
        clickStep(tlStep2, '.step2-cursor', '.step2-container', '.demo-color-2', () => setShirtColor('#F3C5A8'), { moveDur: 1.0, hold: 0.6 })

        // 2) Tamanho P (G→P para diferença de escala bem visível)
        clickStep(tlStep2, '.step2-cursor', '.step2-container', '.demo-size-p', () => setActiveSize('P'), { moveDur: 0.9, hold: 0.8 })

        // 3) Estampa estrela
        clickStep(tlStep2, '.step2-cursor', '.step2-container', '.demo-preset-star', () => setActivePreset('star'), { moveDur: 1.0, hold: 0.2 })
        tlStep2.fromTo(
          '.demo-logo-print',
          { scale: 0, rotation: -45, opacity: 0 },
          { scale: 1, rotation: 0, opacity: 1, duration: 0.55, ease: 'back.out(2)' }
        )
        tlStep2.to({}, { duration: 1.0 })

        // 4) Cor preta
        clickStep(tlStep2, '.step2-cursor', '.step2-container', '.demo-color-1', () => setShirtColor('#111111'), { moveDur: 0.95, hold: 0.7 })

        // 5) Tamanho GG (camiseta cresce)
        clickStep(tlStep2, '.step2-cursor', '.step2-container', '.demo-size-gg', () => setActiveSize('GG'), { moveDur: 0.85, hold: 0.7 })

        // 6) Estampa flor (substitui estrela)
        tlStep2.to('.demo-logo-print', { opacity: 0, scale: 0, duration: 0.25, ease: 'power2.in' })
        clickStep(tlStep2, '.step2-cursor', '.step2-container', '.demo-preset-flower', () => setActivePreset('flower'), { moveDur: 1.0, hold: 0.2 })
        tlStep2.fromTo(
          '.demo-logo-print',
          { scale: 0.5, rotation: 180, opacity: 0 },
          { scale: 1, rotation: 0, opacity: 1, duration: 0.6, ease: 'back.out(1.5)' }
        )
        tlStep2.to({}, { duration: 1.6 })

        // Fade out do cursor e reset
        tlStep2
          .to('.step2-cursor', { opacity: 0, duration: 0.4 })
          .to('.demo-logo-print', { opacity: 0, scale: 0, duration: 0.3 }, '<')
          .to({}, { duration: 0.3 })


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
          
          .to('.step4-days', { innerHTML: '6', duration: 1, ease: 'power1.inOut', snap: 'innerHTML' })
          .to('.step4-days', { color: '#FF8A4C', scale: 1.1, duration: 0.3, yoyo: true, repeat: 1 })
          
          .to({}, { duration: 1.5 })
          .to('.step4-box, .step4-truck', { x: 50, opacity: 0, duration: 0.5, ease: 'power2.in' })
      }
    },
    { scope: container },
  )

  // Recalcula coordenadas dos cursores quando o layout muda (resize / mobile rotation)
  useEffect(() => {
    const els = [
      container.current?.querySelector('.step1-container'),
      container.current?.querySelector('.step2-container'),
    ].filter((el): el is Element => Boolean(el))
    if (els.length === 0) return
    const ro = new ResizeObserver(() => {
      tlStep1Ref.current?.invalidate()
      tlStep2Ref.current?.invalidate()
    })
    els.forEach((el) => ro.observe(el))
    return () => ro.disconnect()
  }, [])

  return (
    <section ref={container} className="bg-brand-beige relative pb-32 border-t border-brand-black/5">
      
      {/* Sticky Navigation Bar */}
      <div className="sticky-nav z-40 w-full bg-brand-beige/90 backdrop-blur-md border-b border-brand-black/10 hidden md:block">
        <div className="container mx-auto max-w-5xl px-6 h-16 flex items-center justify-between overflow-x-auto no-scrollbar">
           {STEPS.map((step, i) => (
              <div 
                key={step.id} 
                className={`text-sm font-heading font-bold whitespace-nowrap transition-colors duration-300 relative py-4 px-2
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
               <h2 className="text-4xl sm:text-5xl font-heading font-extrabold mb-6 tracking-tight text-brand-black text-balance">Escolha o Modelo Base</h2>
               <p className="text-xl text-brand-black/70 font-medium leading-relaxed mb-6">
                  Navegue pelas opções do nosso catálogo e selecione a modelagem ideal para começar o seu projeto: camisetas básicas, oversizeds, regatas ou moletons com caimento impecável.
               </p>
               <div className="inline-flex items-center gap-2 bg-brand-black text-brand-beige px-4 py-2 rounded-full text-sm font-bold">
                  Defina o modelo de partida e simule a peça na tela.
               </div>
           </div>
           
           <div className="step1-container flex-1 w-full lg:h-[420px] min-h-[350px] bg-white rounded-[2rem] p-6 flex items-center justify-center step-mockup relative overflow-hidden border-2 border-brand-black shadow-2xl">

              <div className="flex flex-col items-center gap-6 relative z-10 select-none pointer-events-none">
                 {/* Ilustração da peça atual */}
                 <div className="step1-product-display w-44 h-44 sm:w-48 sm:h-48 flex items-center justify-center">
                    <ProductModelIcon variant={PRODUCT_MODELS[productIdx].id} />
                 </div>

                 {/* Nome da peça */}
                 <div className="step1-product-name text-lg sm:text-xl font-heading font-black uppercase tracking-wide text-brand-black text-center min-h-[1.6em]">
                    {PRODUCT_MODELS[productIdx].name}
                 </div>

                 {/* Setas (alvos visuais do cursor) + dots indicadores */}
                 <div className="flex items-center justify-center gap-5">
                    <div
                      aria-hidden="true"
                      className="step1-prev h-10 w-10 rounded-full border-2 border-brand-black bg-white flex items-center justify-center shadow-sm transition-colors"
                    >
                      <ChevronLeft size={18} strokeWidth={2.5} />
                    </div>

                     <div className="flex gap-2" aria-hidden="true">
                        {PRODUCT_MODELS.map((_, i) => (
                           <span
                             key={i}
                             className={`w-2 h-2 rounded-full transition-all duration-200 ${i === productIdx ? 'bg-brand-green scale-150' : 'bg-brand-black/20'}`}
                           />
                        ))}
                     </div>

                    <div
                      aria-hidden="true"
                      className="step1-next h-10 w-10 rounded-full border-2 border-brand-black bg-white flex items-center justify-center shadow-sm transition-colors"
                    >
                      <ChevronRight size={18} strokeWidth={2.5} />
                    </div>
                 </div>
              </div>

              {/* Cursor — top:0 left:0 ancora origem em (0,0) do container */}
              <MousePointer2 className="step1-cursor absolute top-0 left-0 text-brand-black fill-current w-7 h-7 z-30 pointer-events-none drop-shadow-lg" />
           </div>
        </div>

         {/* Step 2: Design */}
         <div className="step-card flex flex-col lg:flex-row items-center min-h-[70vh] border-b border-brand-black/10 pb-24 lg:pb-0 lg:flex-row-reverse">
            <div className="flex-1 lg:pl-16 mb-12 lg:mb-0">
               <div className="w-12 h-12 rounded-2xl bg-brand-green text-brand-black font-heading font-black text-2xl flex items-center justify-center mb-6 border-2 border-brand-black shadow-[4px_4px_0px_0px_rgba(17,17,17,1)]">2</div>
              <h2 className="text-4xl sm:text-5xl font-heading font-extrabold mb-6 tracking-tight text-brand-black text-balance">Desenvolvimento da Arte</h2>
              <p className="text-xl text-brand-black/70 font-medium leading-relaxed">
                 Nossos designers criam a arte do zero ou adaptamos a sua identidade visual para a nossa linha de produção de forma impecável.
              </p>
               <div className="mt-6 flex items-center gap-3">
                  <span className="text-4xl font-heading font-black text-emerald-800">R$ 40,00</span>
                  <span className="text-sm font-bold text-brand-black/60 uppercase tracking-widest max-w-[200px] leading-tight">Valor único de desenvolvimento</span>
               </div>
           </div>
           
             <div className="step2-container flex-1 w-full lg:h-[420px] min-h-[360px] bg-white rounded-[2rem] p-5 flex flex-col sm:flex-row gap-4 items-stretch justify-between step-mockup relative overflow-hidden border-2 border-brand-black shadow-2xl">
               {/* Column 1: Shirt Preview */}
               <div className="flex-1 min-h-[280px] bg-zinc-50 border border-brand-black/5 rounded-2xl flex items-center justify-center relative overflow-hidden p-4 select-none pointer-events-none">
                  {/* Backdrop subtle grid texture */}
                  <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1.5px,transparent_1.5px)] [background-size:20px_20px] opacity-30"></div>

                  <div className="demo-shirt-container flex items-center justify-center relative">
                     <ShirtVector color={shirtColor} scale={SIZE_SCALE[activeSize] ?? 1} />

                     {/* Print layer — sempre montado, controlado por opacity. Inverte cor em camisetas escuras. */}
                     <div
                        className="demo-logo-print absolute top-[46%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 flex items-center justify-center pointer-events-none select-none opacity-0"
                        style={{ color: isDarkShirt(shirtColor) ? '#F2EDE2' : '#111111', transition: 'color 350ms ease' }}
                     >
                        {activePreset ? PRESET_PRINTS.find(p => p.id === activePreset)?.element : null}
                     </div>
                  </div>

                  {/* Demonstration Badge */}
                  <div className="absolute top-3 left-3 bg-brand-black/5 text-brand-black/60 px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase flex items-center gap-1.5 backdrop-blur-sm">
                     <span className="w-1.5 h-1.5 rounded-full bg-brand-green animate-ping" />
                     Demonstração
                  </div>
               </div>

               {/* Column 2: Controls Sidebar (Purely visual) */}
               <div className="w-full sm:w-[170px] flex flex-col justify-between gap-3 select-none pointer-events-none relative z-10">
                  <div className="flex flex-col gap-3">
                     {/* Colors */}
                     <div>
                        <span className="text-[10px] font-black text-brand-black/50 uppercase tracking-widest block mb-1.5">Cor da Peça</span>
                        <div className="flex gap-2 items-center">
                           {SHIRT_COLORS.map((c, idx) => (
                              <div
                                key={c.value}
                                className={`demo-color-${idx + 1} w-7 h-7 rounded-full border cursor-default transition-all duration-200 ${shirtColor === c.value ? 'border-brand-green scale-110 ring-2 ring-brand-green/20 shadow-sm' : 'border-brand-black/10'}`}
                                style={{ backgroundColor: c.value }}
                              />
                           ))}
                        </div>
                     </div>

                     {/* Size */}
                     <div>
                        <span className="text-[10px] font-black text-brand-black/50 uppercase tracking-widest block mb-1.5">Tamanho</span>
                        <div className="flex gap-1.5">
                           {['P', 'M', 'G', 'GG'].map(size => (
                              <div
                                key={size}
                                className={`demo-size-${size.toLowerCase()} w-8 h-8 rounded-lg border flex items-center justify-center font-heading font-extrabold text-[11px] transition-colors duration-200 ${activeSize === size ? 'bg-brand-green border-brand-black text-brand-black shadow-sm' : 'bg-white border-brand-black/10 text-brand-black/50'}`}
                              >
                                 {size}
                              </div>
                           ))}
                        </div>
                     </div>

                     {/* Presets */}
                     <div>
                        <span className="text-[10px] font-black text-brand-black/50 uppercase tracking-widest block mb-1.5">Estampa / Logo</span>
                        <div className="flex gap-1.5">
                           {PRESET_PRINTS.map(p => (
                              <div
                                key={p.id}
                                className={`demo-preset-${p.id} w-9 h-9 p-1.5 rounded-lg border bg-white flex items-center justify-center transition-colors duration-200 ${activePreset === p.id ? 'border-brand-green ring-1 ring-brand-green/30' : 'border-brand-black/10'}`}
                              >
                                 <div className="w-full h-full">
                                    {p.element}
                                 </div>
                              </div>
                           ))}
                        </div>
                     </div>
                  </div>

                  <p className="text-[9px] font-bold text-brand-green animate-pulse uppercase tracking-wider text-center leading-tight">
                     ⚡ Criando arte digital...
                  </p>
               </div>

               {/* Simulated Cursor — top-0 left-0 ancora origem do translate em (0,0) do container */}
               <MousePointer2 className="step2-cursor absolute top-0 left-0 text-brand-black fill-current w-7 h-7 z-30 pointer-events-none drop-shadow-lg" />
            </div>
         </div>

         {/* Step 3: Approval */}
         <div className="step-card flex flex-col lg:flex-row items-center min-h-[70vh] border-b border-brand-black/10 pb-24 lg:pb-0">
            <div className="flex-1 lg:pr-16 mb-12 lg:mb-0">
                <div className="w-12 h-12 rounded-2xl bg-brand-green text-brand-black font-heading font-black text-2xl flex items-center justify-center mb-6 border-2 border-brand-black shadow-[4px_4px_0px_0px_rgba(17,17,17,1)]">3</div>
               <h2 className="text-4xl sm:text-5xl font-heading font-extrabold mb-6 tracking-tight text-brand-black text-balance">Validação & Qualidade</h2>
               <p className="text-xl text-brand-black/70 font-medium leading-relaxed">
                  Você recebe o mockup digital detalhado para aprovação visual. Nossa equipe valida o posicionamento exato, o tamanho e as cores da sua estampa na peça selecionada, garantindo precisão absoluta antes de iniciar a impressão.
               </p>
            </div>
            
            <div className="flex-1 w-full lg:h-[420px] min-h-[300px] sm:min-h-[350px] lg:min-h-0 bg-brand-black rounded-[2rem] p-8 lg:p-12 flex items-center justify-center step-mockup relative overflow-hidden shadow-2xl">
               <div className="step3-box bg-white w-full max-w-sm rounded-2xl border border-brand-black/10 p-6 flex flex-col gap-4 relative z-10 transition-colors">
                  <div className="flex items-center gap-3 border-b border-brand-black/10 pb-4">
                     <PackageCheck size={24} className="text-brand-black" />
                     <span className="font-heading font-bold text-lg text-brand-black">Checklist de Qualidade</span>
                  </div>
                  
                  <div className="flex flex-col gap-3">
                     <div className="flex items-center justify-between">
                        <span className="text-sm font-bold text-brand-black/70">Algodão 30.1 Penteado</span>
                        <CheckCircle2 size={18} className="step3-check1 text-brand-green" />
                     </div>
                     <div className="flex items-center justify-between">
                        <span className="text-sm font-bold text-brand-black/70">Costura Reforçada Ombro</span>
                        <CheckCircle2 size={18} className="step3-check2 text-brand-green" />
                     </div>
                     <div className="flex items-center justify-between">
                        <span className="text-sm font-bold text-brand-black/70">Impressão da Arte</span>
                        <CheckCircle2 size={18} className="step3-check3 text-brand-green" />
                     </div>
                  </div>
 
                  <div className="flex justify-center mt-1">
                     <span className="step3-approved text-[11px] font-black text-brand-green uppercase tracking-widest text-center bg-brand-green/10 px-3 py-1 rounded-full origin-bottom">
                        Aprovado Cliente
                     </span>
                  </div>
               </div>
            </div>
         </div>
 
         {/* Step 4: Delivery */}
         <div className="step-card flex flex-col lg:flex-row items-center min-h-[70vh] border-b border-brand-black/10 pb-24 lg:pb-0 lg:flex-row-reverse">
            <div className="flex-1 lg:pl-16 mb-12 lg:mb-0">
               <div className="w-12 h-12 rounded-2xl bg-brand-green text-brand-black font-heading font-black text-2xl flex items-center justify-center mb-6 border-2 border-brand-black shadow-[4px_4px_0px_0px_rgba(17,17,17,1)]">4</div>
               <h2 className="text-4xl sm:text-5xl font-heading font-extrabold mb-6 tracking-tight text-brand-black text-balance">Estamparia & Envio em 6 Dias</h2>
               <p className="text-xl text-brand-black/70 font-medium leading-relaxed">
                  Sua arte aprovada entra imediatamente para a nossa linha de estamparia de alta performance. Aplicamos o seu design com impressão de alta definição nas peças prontas e postamos o seu lote em apenas 6 dias úteis.
               </p>
           </div>
           
           <div className="flex-1 w-full lg:h-[420px] min-h-[300px] sm:min-h-[350px] lg:min-h-0 bg-white rounded-[2rem] p-8 lg:p-12 flex items-center justify-center step-mockup relative overflow-hidden border-2 border-brand-black shadow-2xl">
              <div className="flex flex-col items-center gap-6 w-full max-w-sm relative z-10">
                 
                 <div className="flex items-center gap-6">
                    <div className="step4-box w-20 h-20 bg-brand-green rounded-2xl border-2 border-brand-black shadow-[4px_4px_0px_0px_rgba(17,17,17,1)] flex items-center justify-center">
                       <PackageCheck size={32} className="text-brand-black" />
                    </div>
                    <div className="step4-truck w-20 h-20 bg-brand-black rounded-2xl border-2 border-brand-black shadow-[4px_4px_0px_0px_rgba(17,17,17,1)] flex items-center justify-center text-brand-beige">
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
