'use client'

import { useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { Gem, ArrowUp, Star, Gift, Crown, Percent } from 'lucide-react'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP)
}

const STEPS = [
  { id: 'bronze', label: '1. Início: Bronze' },
  { id: 'prata', label: '2. Evolução: Prata' },
  { id: 'ouro', label: '3. Destaque: Ouro' },
  { id: 'diamante', label: '4. Elite: Diamante' },
  { id: 'platina', label: '5. Máximo: Platina' },
]

export function TshClubSteps() {
  const container = useRef<HTMLDivElement>(null)
  const [activeStep, setActiveTab] = useState(0)

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      
      if (!prefersReducedMotion) {
        const cards = gsap.utils.toArray<HTMLElement>('.step-card-club')

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
          trigger: '.sticky-nav-club',
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
        // ANIMATION LOOPS (GEMAS)
        // ==========================================

        // Efeito de flutuação genérico para todas as gemas
        gsap.to('.gem-float', {
          y: '-=15',
          rotation: '+=2',
          duration: 2.5,
          yoyo: true,
          repeat: -1,
          ease: 'sine.inOut',
          stagger: { amount: 1, from: 'random' }
        })

        // Step 1: Bronze (Points accumulator)
        const tlBronze = gsap.timeline({ repeat: -1, repeatDelay: 1 })
        tlBronze
          .set('.bronze-pts', { innerHTML: '0' })
          .set('.bronze-bar', { width: '0%' })
          .to('.bronze-pts', { innerHTML: '4999', duration: 2, ease: 'power1.inOut', snap: 'innerHTML' })
          .to('.bronze-bar', { width: '100%', duration: 2, ease: 'power1.inOut' }, "<")
          .to({}, { duration: 1 })

        // Step 2: Prata (Discount unlock)
        const tlPrata = gsap.timeline({ repeat: -1, repeatDelay: 1 })
        tlPrata
          .set('.prata-badge', { scale: 0, opacity: 0 })
          .set('.prata-gem', { filter: 'brightness(1)' })
          .to('.prata-gem', { filter: 'brightness(1.2)', scale: 1.05, duration: 0.5, ease: 'power2.out' })
          .to('.prata-badge', { scale: 1, opacity: 1, duration: 0.4, ease: 'back.out(2)' }, "-=0.2")
          .to('.prata-badge', { y: -5, duration: 1, yoyo: true, repeat: 1, ease: 'sine.inOut' })
          .to('.prata-gem', { filter: 'brightness(1)', scale: 1, duration: 0.5 })
          .to('.prata-badge', { scale: 0, opacity: 0, duration: 0.3 })

        // Step 3: Ouro (Priority)
        const tlOuro = gsap.timeline({ repeat: -1, repeatDelay: 1.5 })
        tlOuro
          .set('.ouro-star', { scale: 0, opacity: 0, rotation: -45 })
          .set('.ouro-glow', { opacity: 0, scale: 0.8 })
          .to('.ouro-glow', { opacity: 1, scale: 1.2, duration: 0.8, ease: 'power2.out' })
          .to('.ouro-star', { scale: 1, opacity: 1, rotation: 0, duration: 0.5, ease: 'back.out(2)', stagger: 0.1 }, "-=0.4")
          .to('.ouro-star', { rotation: 180, duration: 2, ease: 'linear' })
          .to('.ouro-glow, .ouro-star', { opacity: 0, scale: 0, duration: 0.4 })

        // Step 4: Diamante (Exclusive Gifts)
        const tlDiamante = gsap.timeline({ repeat: -1, repeatDelay: 2 })
        tlDiamante
          .set('.diamante-box', { y: 20, opacity: 0 })
          .set('.diamante-gem', { y: 0 })
          .to('.diamante-gem', { y: -20, duration: 0.5, ease: 'power2.out' })
          .to('.diamante-box', { y: 0, opacity: 1, duration: 0.5, ease: 'back.out(1.5)' }, "-=0.2")
          .to('.diamante-box', { scale: 1.05, duration: 0.2, yoyo: true, repeat: 1, delay: 0.5 })
          .to('.diamante-box', { y: 20, opacity: 0, duration: 0.4, delay: 1 })
          .to('.diamante-gem', { y: 0, duration: 0.4 }, "<")

        // Step 5: Platina (VIP Max)
        const tlPlatina = gsap.timeline({ repeat: -1, repeatDelay: 1 })
        tlPlatina
          .set('.platina-crown', { y: -30, opacity: 0, scale: 0.5 })
          .set('.platina-sparkle', { opacity: 0, scale: 0 })
          .to('.platina-crown', { y: -10, opacity: 1, scale: 1, duration: 0.6, ease: 'back.out(1.5)' })
          .to('.platina-sparkle', { opacity: 1, scale: 1, duration: 0.3, stagger: 0.1, ease: 'power2.out' })
          .to('.platina-sparkle', { rotation: 180, duration: 1.5, ease: 'none' }, "<")
          .to('.platina-crown, .platina-sparkle', { opacity: 0, scale: 0, duration: 0.4, delay: 0.5 })
      }
    },
    { scope: container }
  )

  return (
    <section ref={container} className="bg-brand-black relative pb-32 border-t border-brand-beige/10">
      
      {/* Sticky Navigation Bar */}
      <div className="sticky-nav-club z-40 w-full bg-brand-black/90 backdrop-blur-md border-b border-brand-beige/10 hidden md:block">
        <div className="container mx-auto max-w-5xl px-6 h-16 flex items-center justify-between overflow-x-auto no-scrollbar">
           {STEPS.map((step, i) => (
              <div 
                key={step.id} 
                 className={`step-nav-anim text-sm font-heading font-bold whitespace-nowrap transition-colors duration-300 relative py-4 px-2
                   ${activeStep >= i ? 'text-brand-purple' : 'text-brand-beige/50'}
                 `}
               >
                  {step.label}
                  {activeStep === i && (
                    <div className="absolute bottom-0 left-0 w-full h-[3px] bg-brand-purple"></div>
                  )}
              </div>
           ))}
        </div>
      </div>

      <div className="container mx-auto max-w-6xl px-6 lg:px-8 mt-16 flex flex-col gap-24 lg:gap-0">
        
        {/* Step 1: Bronze */}
        <div className="step-card-club flex flex-col lg:flex-row items-center min-h-[70vh] border-b border-brand-beige/10 pb-24 lg:pb-0">
            <div className="flex-1 lg:pr-16 mb-12 lg:mb-0">
              <div className="step-text-anim w-12 h-12 rounded-2xl bg-[#CD7F32]/20 text-[#CD7F32] font-heading font-black flex items-center justify-center mb-6 border border-[#CD7F32]/30">1</div>
              <h2 className="step-text-anim text-4xl sm:text-5xl font-heading font-extrabold mb-6 tracking-tight text-brand-beige text-balance">Nível Bronze: O Começo</h2>
              <p className="step-text-anim text-xl text-brand-beige/70 font-medium leading-relaxed mb-6">
                 O ponto de partida de todo revendedor Tshirteria. Ao fazer suas primeiras compras e acumular até 4.999 pontos, você estabelece a base da nossa parceria.
              </p>
              <div className="step-text-anim inline-flex items-center gap-2 bg-brand-beige/10 text-brand-beige px-4 py-2 rounded-full text-sm font-bold border border-brand-beige/20">
                 <ArrowUp size={16} className="text-[#CD7F32]" /> Acesso ao catálogo de atacado
              </div>
           </div>
           
            <div className="flex-1 w-full lg:h-[420px] min-h-[300px] sm:min-h-[350px] lg:min-h-0 bg-white rounded-3xl p-8 lg:p-12 flex flex-col items-center justify-center relative overflow-hidden border-2 border-brand-black shadow-2xl">
               
               <div className="gem-float w-32 h-32 rounded-[2rem] bg-[#CD7F32] flex items-center justify-center border-4 border-white relative z-10 mb-8">
                  <Gem size={64} className="text-white drop-shadow-md" />
               </div>
               
               <div className="w-full max-w-xs bg-brand-beige rounded-2xl p-6 border-2 border-brand-black shadow-lg relative z-10">
                  <div className="flex justify-between items-center mb-3">
                     <span className="text-xs font-bold text-brand-black/50 uppercase tracking-widest">Pontos<br />Acumulados</span>
                     <span className="text-[#CD7F32] font-black text-xl whitespace-nowrap"><span className="bronze-pts">0</span> / 4.999</span>
                  </div>
                 <div className="h-3 bg-white border border-brand-black/10 rounded-full overflow-hidden">
                    <div className="bronze-bar h-full bg-[#CD7F32] rounded-full"></div>
                 </div>
              </div>

           </div>
        </div>

        {/* Step 2: Prata */}
        <div className="step-card-club flex flex-col lg:flex-row items-center min-h-[70vh] border-b border-brand-beige/10 pb-24 lg:pb-0 lg:flex-row-reverse">
            <div className="flex-1 lg:pl-16 mb-12 lg:mb-0">
              <div className="step-text-anim w-12 h-12 rounded-2xl bg-[#C0C0C0]/20 text-[#C0C0C0] font-heading font-black flex items-center justify-center mb-6 border border-[#C0C0C0]/30">2</div>
              <h2 className="step-text-anim text-4xl sm:text-5xl font-heading font-extrabold mb-6 tracking-tight text-brand-beige text-balance">Nível Prata: Evolução</h2>
              <p className="step-text-anim text-xl text-brand-beige/70 font-medium leading-relaxed mb-6">
                 Ao atingir 5.000 pontos, você destrava o primeiro multiplicador de lucros. O programa começa a recompensar sua constância de forma tangível.
              </p>
              <div className="step-text-anim inline-flex items-center gap-2 bg-brand-beige/10 text-brand-beige px-4 py-2 rounded-full text-sm font-bold border border-brand-beige/20">
                 <Percent size={16} className="text-[#C0C0C0]" /> 3% de Desconto em todas as compras
              </div>
           </div>
           
            <div className="flex-1 w-full lg:h-[420px] min-h-[300px] sm:min-h-[350px] lg:min-h-0 bg-white rounded-3xl p-8 lg:p-12 flex items-center justify-center relative overflow-hidden border-2 border-brand-black shadow-2xl">
               
               <div className="relative">
                  <div className="prata-gem gem-float w-40 h-40 rounded-[2.5rem] bg-[#C0C0C0] flex items-center justify-center border-4 border-white relative z-10">
                    <Gem size={80} className="text-black/80 drop-shadow-md" />
                 </div>
                 
                 <div className="prata-badge absolute -top-4 -right-8 bg-brand-black text-brand-beige font-black text-xl px-4 py-2 rounded-xl shadow-xl z-20 border-2 border-[#C0C0C0] rotate-12">
                    3% OFF
                 </div>
              </div>

           </div>
        </div>

        {/* Step 3: Ouro */}
        <div className="step-card-club flex flex-col lg:flex-row items-center min-h-[70vh] border-b border-brand-beige/10 pb-24 lg:pb-0">
            <div className="flex-1 lg:pr-16 mb-12 lg:mb-0">
              <div className="step-text-anim w-12 h-12 rounded-2xl bg-[#FFD700]/20 text-[#FFD700] font-heading font-black flex items-center justify-center mb-6 border border-[#FFD700]/30">3</div>
              <h2 className="step-text-anim text-4xl sm:text-5xl font-heading font-extrabold mb-6 tracking-tight text-brand-beige text-balance">Nível Ouro: Destaque</h2>
              <p className="step-text-anim text-xl text-brand-beige/70 font-medium leading-relaxed mb-6">
                 A partir de 10.000 pontos, você entra para o grupo de lojistas de destaque. Além do dobro de desconto, você recebe atendimento prioritário da nossa equipe.
              </p>
              <div className="step-text-anim flex flex-col gap-2">
                 <div className="inline-flex items-center gap-2 bg-brand-beige/10 text-brand-beige px-4 py-2 rounded-full text-sm font-bold border border-brand-beige/20 w-fit">
                    <Percent size={16} className="text-[#FFD700]" /> 6% de Desconto Global
                 </div>
                 <div className="inline-flex items-center gap-2 bg-brand-beige/10 text-brand-beige px-4 py-2 rounded-full text-sm font-bold border border-brand-beige/20 w-fit">
                    <Star size={16} className="text-[#FFD700]" /> Atendimento Prioritário
                 </div>
              </div>
           </div>
           
            <div className="flex-1 w-full lg:h-[420px] min-h-[300px] sm:min-h-[350px] lg:min-h-0 bg-white rounded-3xl p-8 lg:p-12 flex items-center justify-center relative overflow-hidden border-2 border-brand-black shadow-2xl">
               
               <div className="relative flex items-center justify-center">
                  
                  <div className="gem-float w-48 h-48 rounded-[3rem] bg-[#FFD700] flex items-center justify-center border-4 border-white relative z-10">
                     <Gem size={96} className="text-orange-900 drop-shadow-md" />
                  </div>
                 
                 {/* Orbiting Stars */}
                 <Star size={32} className="ouro-star absolute -top-8 right-0 text-[#FFD700] fill-[#FFD700] z-20 drop-shadow-lg" />
                 <Star size={24} className="ouro-star absolute bottom-4 -left-12 text-[#FFD700] fill-[#FFD700] z-20 drop-shadow-lg" />
                 <Star size={28} className="ouro-star absolute -bottom-8 right-8 text-[#FFD700] fill-[#FFD700] z-20 drop-shadow-lg" />
              </div>

           </div>
        </div>

        {/* Step 4: Diamante */}
        <div className="step-card-club flex flex-col lg:flex-row items-center min-h-[70vh] border-b border-brand-beige/10 pb-24 lg:pb-0 lg:flex-row-reverse">
            <div className="flex-1 lg:pl-16 mb-12 lg:mb-0">
              <div className="step-text-anim w-12 h-12 rounded-2xl bg-[#b9f2ff]/20 text-[#b9f2ff] font-heading font-black flex items-center justify-center mb-6 border border-[#b9f2ff]/30">4</div>
              <h2 className="step-text-anim text-4xl sm:text-5xl font-heading font-extrabold mb-6 tracking-tight text-brand-beige text-balance">Nível Diamante: Elite</h2>
              <p className="step-text-anim text-xl text-brand-beige/70 font-medium leading-relaxed mb-6">
                 Para lojistas com alto volume (acima de 25.000 pontos). Margem de lucro ampliada e reconhecimento com mimos exclusivos da marca nas suas caixas.
              </p>
              <div className="step-text-anim flex flex-col gap-2">
                 <div className="inline-flex items-center gap-2 bg-brand-beige/10 text-brand-beige px-4 py-2 rounded-full text-sm font-bold border border-brand-beige/20 w-fit">
                    <Percent size={16} className="text-[#b9f2ff]" /> 8% de Desconto Global
                 </div>
                 <div className="inline-flex items-center gap-2 bg-brand-beige/10 text-brand-beige px-4 py-2 rounded-full text-sm font-bold border border-brand-beige/20 w-fit">
                    <Gift size={16} className="text-[#b9f2ff]" /> Brindes Exclusivos
                 </div>
              </div>
           </div>
           
            <div className="flex-1 w-full lg:h-[420px] min-h-[300px] sm:min-h-[350px] lg:min-h-0 bg-white rounded-3xl p-8 lg:p-12 flex items-center justify-center relative overflow-hidden border-2 border-brand-black shadow-2xl">
               
               <div className="relative flex flex-col items-center">
                  <div className="diamante-gem gem-float w-40 h-40 rounded-[2.5rem] bg-[#b9f2ff] flex items-center justify-center border-4 border-white relative z-20">
                    <Gem size={80} className="text-blue-900 drop-shadow-md" />
                 </div>
                 
                  {/* Gift Box popping up */}
                  <div className="diamante-box absolute -bottom-16 bg-brand-black text-[#b9f2ff] px-6 py-4 rounded-2xl shadow-xl z-10 border-2 border-[#b9f2ff]/30 flex items-center gap-3">
                     <Gift size={24} />
                     <span className="font-heading font-bold text-sm tracking-widest uppercase whitespace-nowrap">Mimo Exclusivo</span>
                  </div>
              </div>

           </div>
        </div>

        {/* Step 5: Platina */}
        <div className="step-card-club flex flex-col lg:flex-row items-center min-h-[70vh] pb-24 lg:pb-0">
            <div className="flex-1 lg:pr-16 mb-12 lg:mb-0">
              <div className="step-text-anim w-12 h-12 rounded-2xl bg-[#E5E4E2]/20 text-[#E5E4E2] font-heading font-black flex items-center justify-center mb-6 border border-[#E5E4E2]/30">5</div>
              <h2 className="step-text-anim text-4xl sm:text-5xl font-heading font-extrabold mb-6 tracking-tight text-brand-beige text-balance">Nível Platina: O Máximo</h2>
              <p className="step-text-anim text-xl text-brand-beige/70 font-medium leading-relaxed mb-6">
                 O topo do TSH Club (acima de 50.000 pontos). Desconto máximo liberado em todo o site, garantindo a maior rentabilidade possível para os maiores parceiros da Tshirteria.
              </p>
              <div className="step-text-anim flex flex-col gap-2">
                 <div className="inline-flex items-center gap-2 bg-brand-beige/10 text-brand-beige px-4 py-2 rounded-full text-sm font-bold border border-brand-beige/20 w-fit">
                    <Percent size={16} className="text-[#E5E4E2]" /> 10% de Desconto Global
                 </div>
                 <div className="inline-flex items-center gap-2 bg-brand-beige/10 text-brand-beige px-4 py-2 rounded-full text-sm font-bold border border-brand-beige/20 w-fit">
                    <Crown size={16} className="text-[#E5E4E2]" /> Consultoria VIP
                 </div>
              </div>
           </div>
           
            <div className="flex-1 w-full lg:h-[420px] min-h-[300px] sm:min-h-[350px] lg:min-h-0 bg-white rounded-3xl p-8 lg:p-12 flex items-center justify-center relative overflow-hidden border-2 border-brand-black shadow-2xl">
               
               <div className="relative flex flex-col items-center">
                  <Crown size={64} className="platina-crown absolute text-brand-yellow drop-shadow-xl z-30 fill-current" />
                  
                  <div className="gem-float w-48 h-48 rounded-[3rem] bg-[#E5E4E2] flex items-center justify-center border-4 border-white relative z-20">
                     <Gem size={96} className="text-zinc-800 drop-shadow-md" />
                  </div>

                 <Star size={40} className="platina-sparkle absolute -top-4 -right-12 text-[#E5E4E2] fill-[#E5E4E2] z-10" />
                 <Star size={32} className="platina-sparkle absolute top-1/2 -left-16 text-[#E5E4E2] fill-[#E5E4E2] z-10" />
              </div>

           </div>
        </div>

      </div>
    </section>
  )
}
