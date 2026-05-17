'use client'

import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight, Smartphone, LayoutDashboard, BellRing } from 'lucide-react'
import Link from 'next/link'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP)
}

export function NewsTrendsSection() {
  const containerRef = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      // Header Animation
      gsap.from('.anim-eco-header', {
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

      // Grid Cards Animation
      gsap.from('.anim-eco-card', {
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.3, // Maior intervalo para destacar cada lado
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.anim-eco-card',
          start: 'top 85%',
        }
      })
    },
    { scope: containerRef }
  )

  return (
    <section ref={containerRef} className="bg-[#121212] py-24 overflow-hidden">
      <div className="container mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16 flex flex-col items-center">
          <p className="anim-eco-header text-sm font-bold tracking-wide text-brand-purple mb-4 uppercase">O MELHOR DOS MUNDOS</p>
          <h2 className="anim-eco-header text-5xl sm:text-6xl font-extrabold leading-tight tracking-tight mb-6 max-w-2xl text-balance">
            O ecossistema perfeito.
          </h2>
          <p className="anim-eco-header text-lg text-zinc-300 mb-8 max-w-3xl leading-relaxed font-medium">
            Um Dashboard poderoso para o anunciante distribuir o orçamento e gerenciar a rede, e um App viciante para o criador receber missões e pagamentos.
          </p>
        </div>

        {/* Bento Grid Layout - O Ecossistema */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* COLUNA 1 & 2 (A Sala de Comando - Dashboard SaaS) - Ocupa 2 colunas para impacto */}
          <Link href="/anunciantes" className="anim-eco-card flex flex-col lg:col-span-2 group cursor-pointer rounded-[2rem] overflow-hidden bg-[#1c1c1c] border border-white/5 hover:border-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple">
             <div className="h-[320px] w-full relative overflow-hidden bg-brand-purple/5 shrink-0">
                <div className="absolute top-6 left-6 bg-brand-purple text-black font-bold text-xs px-4 py-2 rounded-full z-10 flex items-center gap-2 shadow-lg">
                  <LayoutDashboard size={14} aria-hidden="true" /> Para Escritórios & Produtoras
                </div>
                
                {/* Mockup do Dashboard - Focado em Performance e Alcance */}
                <div className="absolute top-20 left-10 right-10 bottom-0 bg-zinc-900 rounded-t-2xl border-t border-x border-white/10 shadow-[0_-10px_40px_rgba(216,180,254,0.1)] p-4 sm:p-6 lg:p-8">
                   <div className="flex flex-wrap lg:flex-nowrap gap-3 sm:gap-4 mb-6">
                      <div className="flex-1 min-w-[120px] bg-zinc-800 rounded-xl border border-white/5 p-3 sm:p-4 flex flex-col justify-between">
                         <span className="text-[10px] sm:text-xs text-zinc-400 font-medium">Views Alcançadas</span>
                         <span className="text-lg sm:text-xl lg:text-2xl font-bold text-white mt-1">4.8M</span>
                      </div>
                      <div className="flex-1 min-w-[120px] bg-zinc-800 rounded-xl border border-white/5 p-3 sm:p-4 flex flex-col justify-between">
                         <span className="text-[10px] sm:text-xs text-zinc-400 font-medium">Taxa Engajamento</span>
                         <span className="text-lg sm:text-xl lg:text-2xl font-bold text-green-400 mt-1">12.5%</span>
                      </div>
                      <div className="w-full lg:flex-1 bg-brand-purple/10 rounded-xl border border-brand-purple/20 p-3 sm:p-4 flex flex-col justify-between">
                         <span className="text-[10px] sm:text-xs text-brand-purple font-medium">Conversão de Ingressos</span>
                         <span className="text-lg sm:text-xl lg:text-2xl font-bold text-brand-purple mt-1">1.250 VIPs</span>
                      </div>
                   </div>
                   
                   {/* Fake Chart representation para Performance */}
                   <div className="w-full bg-zinc-800/50 rounded-xl border border-white/5 p-4 h-32 flex flex-col justify-end relative overflow-hidden">
                      <div className="absolute top-4 left-4 flex justify-between items-center w-[calc(100%-2rem)] border-b border-white/5 pb-2">
                         <span className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold">Crescimento de Alcance Semanal</span>
                      </div>
                      <div className="flex items-end gap-3 h-16 mt-6 w-full">
                         {[30, 45, 20, 60, 50, 85, 70, 95, 100].map((h, i) => (
                           <div key={i} className="flex-1 bg-brand-purple/50 rounded-t-sm hover:bg-brand-purple transition-colors" style={{ height: `${h}%` }}></div>
                         ))}
                      </div>
                   </div>
                </div>
             </div>
             
             {/* Text Area */}
             <div className="p-8 flex flex-col gap-6 bg-[#1c1c1c] flex-grow justify-between">
                <div>
                   <h3 className="text-3xl font-extrabold text-white tracking-tight leading-snug mb-3 text-balance">
                     O seu Centro de Comando
                   </h3>
                   <p className="text-zinc-400 font-medium max-w-xl text-base leading-relaxed">
                     Gerencie centenas de campanhas simultâneas, crie seu próprio banco de influenciadores (CRM White-label), aprove verbas e acompanhe os relatórios de viralização em tempo real.
                   </p>
                </div>
                <div className="w-12 h-12 shrink-0 rounded-full bg-brand-purple text-black flex items-center justify-center transition-transform group-hover:translate-x-2">
                  <ArrowRight size={24} aria-hidden="true" />
                </div>
             </div>
          </Link>

          {/* COLUNA 3 (O App Mobile - Creators) */}
          <Link href="/" className="anim-eco-card flex flex-col group cursor-pointer rounded-[2rem] overflow-hidden bg-[#1c1c1c] border border-white/5 hover:border-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple">
             
             {/* Área visual do Celular */}
             <div className="h-[320px] w-full bg-gradient-to-b from-green-500/10 to-transparent relative flex justify-center items-end pb-0 overflow-hidden shrink-0">
                <div className="absolute top-6 left-6 bg-green-500 text-black font-bold text-xs px-4 py-2 rounded-full z-10 flex items-center gap-2 shadow-lg">
                  <Smartphone size={14} aria-hidden="true" /> Para Criadores
                </div>
                
                {/* Mockup do Celular Refinado */}
                <div className="w-56 h-[90%] bg-zinc-950 rounded-t-[2.5rem] border-t-8 border-x-8 border-zinc-800 relative overflow-hidden shadow-[0_-15px_40px_rgba(34,197,94,0.15)] flex flex-col">
                   {/* Notch */}
                   <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-5 bg-zinc-800 rounded-b-2xl z-20"></div>
                   
                   {/* Tela do App */}
                   <div className="flex-1 bg-black w-full pt-10 px-4">
                      {/* Header App */}
                      <div className="flex justify-between items-center mb-6">
                         <div className="w-8 h-8 rounded-full bg-zinc-800 border border-white/10"></div>
                         <div className="w-16 h-2 bg-zinc-800 rounded-full"></div>
                      </div>

                      {/* Notificação/Missão Card */}
                      <div className="bg-zinc-900 rounded-2xl p-4 border border-white/5 shadow-xl relative overflow-hidden group-hover:-translate-y-2 transition-transform duration-500 flex flex-col">
                         <div className="absolute top-0 left-0 w-1 h-full bg-brand-purple"></div>
                         <div className="flex items-center gap-2 mb-3">
                            <BellRing size={14} className="text-brand-purple shrink-0" aria-hidden="true" />
                            <span className="text-[10px] font-bold text-zinc-300 uppercase tracking-wider truncate">Nova Missão</span>
                         </div>
                         <h4 className="text-xs font-bold text-white mb-2 leading-tight">Gravar trend na Festa</h4>
                         <div className="inline-flex w-fit text-[10px] text-green-400 font-bold bg-green-500/10 px-2 py-1 rounded border border-green-500/20 truncate">
                            VIP + R$ 150
                         </div>
                      </div>
                   </div>
                </div>
             </div>

             {/* Text Area */}
             <div className="p-8 flex flex-col gap-6 bg-[#1c1c1c] flex-grow justify-between">
                <div>
                   <h3 className="text-3xl font-extrabold text-white tracking-tight leading-snug mb-3 text-balance">
                     O Palco Principal
                   </h3>
                   <p className="text-zinc-400 font-medium text-base leading-relaxed">
                     Um app nativo desenhado para retenção. As missões chegam via Push segmentado. Bateu a meta da campanha? O PIX acontece na velocidade da luz.
                   </p>
                </div>
                <div className="w-12 h-12 shrink-0 rounded-full bg-green-500 text-black flex items-center justify-center transition-transform group-hover:translate-x-2">
                  <ArrowRight size={24} aria-hidden="true" />
                </div>
             </div>
          </Link>

        </div>
      </div>
    </section>
  )
}

