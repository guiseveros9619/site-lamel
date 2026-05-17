'use client'

import { useState, useRef } from 'react'
import { AudioLines, ShieldCheck, Zap, Lock, DollarSign, CheckCircle2, FileText } from 'lucide-react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(useGSAP)

function PixVisuals() {
  const container = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 2 })
    const scoreObj = { val: 4.5 }
    const pixObj = { val: 0 }

    const updateScore = () => {
      const el = container.current?.querySelector('.score-val')
      if (el) el.innerHTML = `${scoreObj.val.toFixed(1)}<span class="text-lg text-zinc-500 font-medium">/5.0</span>`
    }
    const updatePix = () => {
      const el = container.current?.querySelector('.pix-val')
      if (el) el.innerHTML = `+ R$ ${Math.floor(pixObj.val)},00`
    }

    tl.set('.pix-notificacao', { y: 30, opacity: 0, scale: 0.95 })
      .set('.score-val', { innerHTML: '4.5<span class="text-lg text-zinc-500 font-medium">/5.0</span>' })
      .set('.pix-val', { innerHTML: '+ R$ 0,00' })
      .set('.score-stars', { scale: 1, color: '#eab308' })
      .set('.transfer-badge', { opacity: 0, scale: 0.8 })
      .set('.pix-reputacao', { scale: 1 })
      
      // 1. Notificação de Pix aparece
      .to('.pix-notificacao', { y: 0, opacity: 1, scale: 1, duration: 0.6, ease: 'back.out(1.5)' })
      
      // 2. Contador do Pix sobe
      .to(pixObj, { val: 350, duration: 1.2, ease: 'power2.out', onUpdate: updatePix }, '+=0.2')
      
      // 3. Transferência concluída aparece
      .to('.transfer-badge', { opacity: 1, scale: 1, duration: 0.4, ease: 'back.out(2)' })
      
      // 4. Flash do Card Pix e Efeito no Score de reputação
      .to('.pix-notificacao', { duration: 0.3 }, '-=0.2') // Removido boxShadow
      .to('.pix-reputacao', { scale: 1.03, borderColor: 'rgba(168,85,247,0.3)', duration: 0.3 }, '+=0.3')
      .to(scoreObj, { val: 4.9, duration: 0.8, ease: 'power2.out', onUpdate: updateScore }, '<')
      .to('.score-stars', { scale: 1.2, duration: 0.3, yoyo: true, repeat: 1 }, '<')
      .to('.pix-reputacao', { scale: 1, duration: 0.3 }, '+=0.5')

  }, { scope: container })

  return (
    <div ref={container} className="relative w-full h-full flex justify-center lg:block">
      {/* Mockup PIX 1: Reputação / Score do Criador (Fundo Esquerda) */}
      <div className="pix-reputacao absolute left-1/2 -translate-x-1/2 ml-[-40px] lg:ml-0 lg:left-auto lg:translate-x-0 lg:right-[35%] top-0 sm:top-4 sm:rotate-[-6deg] z-10 w-64 rounded-2xl bg-[#0a0a0a] overflow-hidden border border-white/10">
         <div className="h-20 bg-gradient-to-br from-zinc-800 to-zinc-900 flex items-center px-6 border-b border-white/5 gap-3">
             <div className="w-10 h-10 rounded-full bg-zinc-700 overflow-hidden border border-white/20">
               <div className="w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjM2YzZjQ2Ij48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDBMOCA4Wk04IDBMMCA4WiIgc3Ryb2tlPSIjNTI1MjViIiBzdHJva2Utd2lkdGg9IjEiPjwvcGF0aD4KPC9zdmc+')] opacity-50"></div>
             </div>
             <div>
               <span className="text-zinc-300 font-bold text-sm block leading-tight">@criador.oficial</span>
               <span className="text-zinc-500 text-[10px] uppercase tracking-wider">Conta Verificada</span>
             </div>
         </div>
         <div className="p-6">
            <div className="flex justify-between items-end mb-4">
              <p className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Score de Reputação</p>
              <div className="score-stars flex text-yellow-500 text-sm origin-right">★★★★★</div>
            </div>
            <h4 className="score-val text-4xl font-black mb-1 text-white">4.9<span className="text-lg text-zinc-500 font-medium">/5.0</span></h4>
            <p className="text-xs text-brand-purple bg-brand-purple/10 inline-block px-2 py-1 rounded-md font-bold mt-2 border border-brand-purple/20">Top Performer</p>
         </div>
      </div>

      {/* Mockup PIX 2: Notificação Verde (Frente Direita) */}
      <div className="pix-notificacao absolute left-1/2 -translate-x-1/2 ml-[40px] lg:ml-0 lg:left-auto lg:translate-x-0 lg:right-[5%] top-24 sm:top-24 sm:rotate-[4deg] z-20 w-72 rounded-2xl bg-[#1A1A1A] overflow-hidden border border-zinc-800">
         <div className="p-4 border-b border-zinc-800 flex items-center gap-3">
             <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-black">
                <DollarSign size={20} strokeWidth={3} />
             </div>
             <div>
                <h4 className="font-bold text-sm">Pagamento Liberado!</h4>
                <p className="text-xs text-zinc-400">Requisitos cumpridos 100%</p>
             </div>
         </div>
         <div className="p-6 bg-zinc-900/80 flex flex-col items-center text-center">
            <span className="text-xs font-semibold text-zinc-500 uppercase tracking-widest mb-2">Pix Recebido</span>
            <span className="pix-val text-4xl font-black text-green-400 mb-3">+ R$ 350,00</span>
            <div className="transfer-badge inline-flex items-center gap-1.5 bg-green-500/10 text-green-400 text-xs font-bold px-3 py-1.5 rounded-full mt-2 border border-green-500/20">
               <CheckCircle2 size={14} /> Transferência Concluída
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
      
      // Simulação de análise progressiva
      .to('.ia-progress', { width: '33%', duration: 0.5, ease: 'power1.inOut' }, '+=0.2')
      .to('.check-audio', { opacity: 1, scale: 1, duration: 0.4, ease: 'back.out(2)' })
      
      .to('.ia-progress', { width: '66%', duration: 0.5, ease: 'power1.inOut' })
      .to('.check-hashtag', { opacity: 1, scale: 1, duration: 0.4, ease: 'back.out(2)' })
      
      .to('.ia-progress', { width: '100%', duration: 0.5, ease: 'power1.inOut' })
      .to('.check-mention', { opacity: 1, scale: 1, duration: 0.4, ease: 'back.out(2)' })
      
      // Aprovação final
      .to('.ia-approved', { opacity: 1, scale: 1, y: 0, duration: 0.5, ease: 'back.out(1.5)' }, '+=0.2')
      .to('.ia-checks', { borderColor: 'rgba(34,197,94,0.3)', duration: 0.4 }, '<')

  }, { scope: container })

  return (
    <div ref={container} className="relative w-full h-full flex justify-center lg:block">
      {/* Mockup IA 1: Análise de Video (Fundo Direita) */}
      <div className="ia-video absolute left-1/2 -translate-x-1/2 ml-[-40px] lg:ml-0 lg:left-auto lg:translate-x-0 lg:-right-4 top-0 sm:top-4 sm:rotate-[6deg] z-10 w-64 rounded-2xl bg-zinc-900 overflow-hidden border border-white/10">
         <div className="h-32 bg-zinc-800 flex items-center justify-center relative overflow-hidden border-b border-white/5">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjMWYyOTM3Ij48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDBMOCA4Wk04IDBMMCA4WiIgc3Ryb2tlPSIjM2YzZjQ2IiBzdHJva2Utd2lkdGg9IjEiPjwvcGF0aD4KPC9zdmc+')] opacity-20"></div>
            <div className="flex flex-col gap-2 relative z-10 w-full px-6">
               <div className="flex items-center gap-2 text-xs font-bold text-zinc-400">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div> Monitoramento Ativo
               </div>
               <div className="w-full bg-black/50 rounded-full h-1.5 overflow-hidden">
                  <div className="ia-progress bg-green-500 w-[0%] h-full rounded-full"></div>
               </div>
            </div>
         </div>
         <div className="p-5 flex flex-col gap-3">
            <div className="flex justify-between items-center">
              <span className="text-xs text-zinc-400">Status do Post</span>
              <span className="text-[10px] text-green-400 bg-green-500/10 px-2 py-1 rounded font-bold uppercase tracking-wider">Online (Público)</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs text-zinc-400">Tempo Decorrido</span>
              <span className="text-[10px] text-zinc-300 font-mono">48h 12m</span>
            </div>
         </div>
      </div>

      {/* Mockup IA 2: Match & Checks (Frente Esquerda) */}
      <div className="ia-checks absolute left-1/2 -translate-x-1/2 ml-[40px] lg:ml-0 lg:left-auto lg:translate-x-0 lg:right-[20%] top-24 sm:top-20 sm:rotate-[-4deg] z-20 w-72 rounded-2xl bg-[#0f0f0f] overflow-hidden border border-zinc-800 transition-colors duration-300">
        <div className="p-6 border-b border-zinc-800 flex items-center justify-between">
           <div className="flex items-center gap-2">
              <ShieldCheck size={20} className="text-green-500" />
              <span className="font-bold text-sm">Auditoria de Requisitos</span>
           </div>
           <div className="bg-green-500/20 text-green-500 text-[10px] font-black uppercase px-2 py-1 rounded">IA Ativa</div>
        </div>
        <div className="p-6 flex flex-col gap-4">
           <div>
             <p className="text-xs text-zinc-500 mb-1">Link Validado</p>
             <h4 className="font-bold text-xs text-zinc-300 break-all truncate">tiktok.com/@creator/video/1…</h4>
           </div>
           
           <div className="bg-zinc-900/80 rounded-xl border border-white/5 overflow-hidden">
             <div className="flex items-center justify-between p-3 border-b border-white/5">
                <div className="flex items-center gap-2 text-xs text-zinc-300">
                   <AudioLines size={14} className="text-brand-purple" />
                   <span>Match de Áudio</span>
                </div>
                <CheckCircle2 size={14} className="ia-check-icon check-audio text-green-500 origin-center" />
             </div>
             <div className="flex items-center justify-between p-3 border-b border-white/5">
                <div className="flex items-center gap-2 text-xs text-zinc-300">
                   <span className="font-mono text-zinc-500">#</span>
                   <span>Hashtag da Campanha</span>
                </div>
                <CheckCircle2 size={14} className="ia-check-icon check-hashtag text-green-500 origin-center" />
             </div>
             <div className="flex items-center justify-between p-3">
                <div className="flex items-center gap-2 text-xs text-zinc-300">
                   <span className="font-mono text-zinc-500">@</span>
                   <span>Marcação Oficial</span>
                </div>
                <CheckCircle2 size={14} className="ia-check-icon check-mention text-green-500 origin-center" />
             </div>
           </div>

           <div className="flex justify-center mt-1 min-h-[16px]">
              <span className="ia-approved text-[11px] font-black text-green-500 uppercase tracking-widest text-center origin-bottom">
                 Aprovado para Pagamento
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
    
    const budgetObj = { val: 0 }
    const updateBudget = () => {
      const el = container.current?.querySelector('.escrow-paid')
      if (el) el.innerHTML = `R$ ${Math.floor(budgetObj.val).toLocaleString('pt-BR')},00`
    }

    tl.set('.escrow-contract', { rotationY: -15, opacity: 0, x: -20 })
      .set('.escrow-fund', { y: 30, opacity: 0 })
      .set('.escrow-bar', { width: '0%' })
      .set('.escrow-paid', { innerHTML: 'R$ 0,00' })
      .set('.escrow-lock', { rotation: 0, scale: 1 })
      
      // Entram
      .to('.escrow-fund', { y: 0, opacity: 1, duration: 0.6, ease: 'back.out(1.2)' })
      .to('.escrow-contract', { rotationY: 0, opacity: 1, x: 0, duration: 0.7, ease: 'power2.out' }, '-=0.4')
      
      // Cadeado fecha/protege com pulso
      .to('.escrow-lock', { rotation: -15, duration: 0.1, yoyo: true, repeat: 3 }, '+=0.2')
      .to('.escrow-lock', { scale: 1.2, color: '#60a5fa', duration: 0.2, yoyo: true, repeat: 1 }, '<')
      .to('.escrow-fund', { borderColor: 'rgba(59,130,246,0.3)', duration: 0.4 }, '-=0.1')
      
      // Verba liquidada sobe (Performance bate meta parcial)
      .to('.escrow-bar', { width: '25%', duration: 1.5, ease: 'power2.inOut' }, '+=0.4')
      .to(budgetObj, { val: 12500, duration: 1.5, ease: 'power2.inOut', onUpdate: updateBudget }, '<')
      
      // Glow final no valor
      .to('.escrow-value', { scale: 1.02, duration: 0.3, yoyo: true, repeat: 1 }, '+=0.2') // Removido textShadow

  }, { scope: container })

  return (
    <div ref={container} className="relative w-full h-full flex justify-center lg:block perspective-[1000px]">
      {/* Mockup Escrow 1: Contract Details (Fundo Esquerda) */}
      <div className="escrow-contract absolute left-1/2 -translate-x-1/2 ml-[-40px] lg:ml-0 lg:left-auto lg:translate-x-0 lg:right-[35%] top-0 sm:top-8 sm:rotate-[-5deg] z-10 w-64 rounded-2xl bg-zinc-900 overflow-hidden border border-white/10 origin-left">
         <div className="h-20 bg-[#1e293b] flex items-center px-4 border-b border-white/5 gap-3">
             <FileText size={20} className="text-blue-400" />
             <div>
                <h4 className="text-sm font-bold">Smart Contract</h4>
                <p className="text-[10px] text-blue-300/70">ID: #8892-ESCROW</p>
             </div>
         </div>
         <div className="p-5 flex flex-col gap-3">
            <div className="flex justify-between items-center border-b border-white/5 pb-2">
              <span className="text-xs text-zinc-500">Devolução Agendada</span>
              <span className="text-xs font-bold text-zinc-300">Em 15 dias</span>
            </div>
            <div className="flex justify-between items-center border-b border-white/5 pb-2">
              <span className="text-xs text-zinc-500">Meta Global</span>
              <span className="text-xs font-bold text-zinc-300">2.0M Views</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs text-zinc-500">Status</span>
              <span className="text-[10px] text-blue-400 bg-blue-500/10 px-2 py-1 rounded-full font-bold">Em Execução</span>
            </div>
         </div>
      </div>

      {/* Mockup Escrow 2: Budget Tracking (Frente Direita) */}
      <div className="escrow-fund absolute left-1/2 -translate-x-1/2 ml-[40px] lg:ml-0 lg:left-auto lg:translate-x-0 lg:right-[5%] top-24 sm:top-24 sm:rotate-[5deg] z-20 w-72 rounded-2xl bg-[#0a0a0a] overflow-hidden border border-zinc-800 transition-colors duration-300">
         <div className="p-6 border-b border-zinc-800">
             <div className="flex items-center gap-2 mb-1">
                <Lock size={16} className="escrow-lock text-blue-400 origin-bottom" />
                <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Fundo de Garantia (Escrow)</span>
             </div>
             <h4 className="escrow-value font-black text-3xl mt-2 text-white">R$ 50.000,00</h4>
         </div>
         <div className="p-6 bg-zinc-900/50">
            <div className="flex justify-between text-xs font-bold mb-2">
               <span className="text-zinc-400">Verba Liquidada (Paga)</span>
               <span className="escrow-paid text-white">R$ 12.500,00</span>
            </div>
            <div className="w-full bg-zinc-800 rounded-full h-3 mb-4 overflow-hidden border border-white/5">
               <div className="escrow-bar bg-blue-500 w-[25%] h-full rounded-full"></div>
            </div>
            
            <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-3 text-center">
               <span className="text-xs font-medium text-blue-300">
                 R$ 37.500,00 protegidos e aguardando performance.
               </span>
            </div>
         </div>
      </div>
    </div>
  )
}

// Object containing the unique content and mockups for each tab
const TAB_CONTENT = {
  'PIX Automático': {
    icon: <Zap size={32} />,
    iconColor: 'bg-brand-purple/10 text-brand-purple',
    title: 'Transações e Reputação',
    description: 'Esqueça cobranças de prints e pagamentos atrasados: o PIX cai na hora em que a meta é atingida. Criadores constroem uma reputação valiosa e atraem as melhores campanhas. Garantia de recebimento, segurança de entrega.',
    visuals: <PixVisuals />
  },
  'Auditoria via IA': {
    icon: <ShieldCheck size={32} />,
    iconColor: 'bg-green-500/10 text-green-500',
    title: 'A precisão da Inteligência Artificial',
    description: 'Nossa tecnologia roda 24/7 auditando cada postagem. O algoritmo verifica o uso do áudio oficial, a presença de hashtags e marcações obrigatórias, além de garantir que o vídeo continue público. O pagamento da campanha só é liberado em um ambiente 100% livre de fraudes.',
    visuals: <IAVisuals />
  },
  'Gestão de Orçamento': {
    icon: <Lock size={32} />,
    iconColor: 'bg-blue-500/10 text-blue-400',
    title: 'Orçamento blindado e seguro',
    description: 'O budget da sua campanha fica protegido em uma conta garantia (Escrow), eliminando riscos de calote. Você tem controle total e sabe exatamente quanto vai gastar. Se a rede de criadores não atingir as visualizações contratadas no prazo, a verba não gasta volta para o seu caixa.',
    visuals: <EscrowVisuals />
  }
}

type TabName = keyof typeof TAB_CONTENT;

export function StorySection() {
  const [activeTab, setActiveTab] = useState<TabName>('PIX Automático')
  const containerRef = useRef<HTMLElement>(null)

  const currentContent = TAB_CONTENT[activeTab]

  useGSAP(
    () => {
      // Animate the header elements
      gsap.from('.anim-story-header', {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
        }
      })

      // Animate the tabs container
      gsap.from('.anim-story-tabs', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 60%',
        }
      })

      // Animate the main card body
      gsap.from('.anim-story-card', {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.anim-story-tabs', // Trigger slightly before the card appears
          start: 'top 80%',
        }
      })
    },
    { scope: containerRef }
  )

  return (
    <section ref={containerRef} className="bg-[#121212] py-24 overflow-hidden">
      <div className="container mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header Part */}
        <div className="grid lg:grid-cols-2 gap-12 items-end mb-16">
          <div>
            <p className="anim-story-header text-sm font-bold tracking-wide text-brand-purple mb-4 uppercase">Chega de apostar no escuro</p>
            <h2 className="anim-story-header text-5xl sm:text-6xl font-bold leading-tight tracking-tight text-balance">
              Segurança para quem promove e quem cria.
            </h2>
          </div>
          <div className="anim-story-header lg:pb-4 flex flex-col items-start lg:items-start">
            <p className="text-xl text-zinc-300 leading-relaxed mb-6 font-medium">
            No mercado tradicional, você paga adiantado por um post que pode flopar. Aqui, é performance: nossa IA audita a campanha em tempo real e o pagamento só é liberado para quem atinge a meta. Risco zero para quem contrata e garantia para quem cria.
            </p>
          </div>
        </div>

        {/* Tabs */}
        <div className="anim-story-tabs flex justify-center mb-8 relative z-20">
          <div className="bg-[#1c1c1c] rounded-full p-1.5 flex overflow-x-auto max-w-full no-scrollbar border border-white/5">
            {(Object.keys(TAB_CONTENT) as TabName[]).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-8 py-3.5 rounded-full text-sm font-bold transition-colors whitespace-nowrap ${
                  activeTab === tab ? 'bg-brand-purple text-black shadow-md' : 'text-zinc-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Main Content Card (Dynamic) */}
        <div className="anim-story-card bg-[#1c1c1c] rounded-[2.5rem] p-8 lg:p-16 flex flex-col lg:flex-row items-center gap-12 overflow-hidden border border-white/5 relative">
          
          {/* Left Text */}
          <div className="w-full lg:flex-1 text-left z-10 min-h-[320px] flex flex-col justify-center items-start">
            <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-8 transition-colors duration-500 ${currentContent.iconColor}`}>
              {currentContent.icon}
            </div>
            <h3 className="text-4xl sm:text-5xl font-extrabold mb-6 animate-in fade-in slide-in-from-bottom-4 duration-500 text-balance" key={currentContent.title}>
              {currentContent.title}
            </h3>
            <p className="text-xl text-zinc-300 mb-8 max-w-md leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-700" key={currentContent.description}>
              {currentContent.description}
            </p>
          </div>

          {/* Right Graphics (Dynamic Mockups) */}
          <div className="w-full lg:flex-1 relative h-[380px] lg:h-[400px] flex justify-center items-center perspective-[1000px] mt-8 lg:mt-0">
             {/* Key ensures React re-mounts and triggers CSS entry animations on the entire block when tab changes */}
             {/* Note: since we now use GSAP, remounting is good as it triggers useGSAP from the start */}
             <div key={activeTab} className="w-full h-full relative animate-in fade-in zoom-in-95 duration-500 scale-[0.8] sm:scale-100 origin-top flex justify-center items-center">
                {currentContent.visuals}
             </div>
          </div>
        </div>
      </div>
    </section>
  )
}
