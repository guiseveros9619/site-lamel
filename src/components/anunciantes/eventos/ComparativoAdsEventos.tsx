'use client'

import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Check, X } from 'lucide-react'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP)
}

const COMPARISON_DATA = [
  {
    title: 'Engajamento (FOMO)',
    ads: 'Anúncios padronizados competem por atenção e são facilmente ignorados pelo público.',
    hitlovers: 'Fãs reais gerando expectativa autêntica constroem um desejo inegável.',
  },
  {
    title: 'Custo de Aquisição',
    ads: 'Investimento alto e imprevisível em cliques sem garantia de conversão na bilheteria.',
    hitlovers: 'Otimize seu orçamento. Troque capacidade ociosa (cortesias) por alcance massivo.',
  },
  {
    title: 'Público Alvo',
    ads: 'O algoritmo gasta tempo e dinheiro testando segmentações frias.',
    hitlovers: 'Criadores locais já conversam diretamente com o público aquecido da sua região.',
  }
]

export function ComparativoAdsEventos() {
  const container = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      gsap.from('.comp-header-ev', {
        y: 30, opacity: 0, duration: 0.8, stagger: 0.2, ease: 'power3.out',
        scrollTrigger: { trigger: container.current, start: 'top 80%' }
      })

      gsap.from('.comp-row-ev', {
        y: 30, opacity: 0, duration: 0.6, stagger: 0.15, ease: 'power3.out',
        scrollTrigger: { trigger: '.comp-table-ev', start: 'top 75%' }
      })
    },
    { scope: container }
  )

  return (
    <section ref={container} className="py-32 bg-[#121212] border-t border-white/5 overflow-hidden">
      <div className="container mx-auto max-w-5xl px-6 lg:px-8">
        
        <div className="text-center mb-16 max-w-3xl mx-auto">
           <h2 className="comp-header-ev text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-6">
             Ultrapasse a barreira do <br className="hidden sm:block" /> tráfego pago tradicional.
           </h2>
           <p className="comp-header-ev text-lg sm:text-xl text-zinc-400 font-medium leading-relaxed">
             Anúncios estáticos não garantem mais a conversão em ingressos. O verdadeiro sold out acontece quando a cidade inteira comenta e gera expectativa orgânica sobre o seu evento.
           </p>
        </div>

        {/* MOBILE LAYOUT (Cards empilhados) */}
        <div className="comp-table-ev md:hidden flex flex-col gap-6">
          {COMPARISON_DATA.map((row, index) => (
            <div key={`mobile-${index}`} className="comp-row-ev bg-[#1a1a1a] rounded-2xl border border-white/5 overflow-hidden shadow-xl flex flex-col">
              
              {/* Título do Card */}
              <div className="bg-[#222] py-4 px-6 text-center border-b border-white/5">
                <span className="text-xs font-extrabold text-zinc-400 uppercase tracking-widest">{row.title}</span>
              </div>
              
              {/* Lado Ruim (Ads) */}
              <div className="p-6 border-b border-white/5 flex gap-4 bg-red-500/[0.02]">
                <div className="mt-0.5 shrink-0">
                  <X className="text-red-500/70" size={18} aria-hidden="true" />
                </div>
                <p className="text-sm text-zinc-400 leading-relaxed font-medium">
                  {row.ads}
                </p>
              </div>

              {/* Lado Bom (Hitlovers) */}
              <div className="p-6 flex gap-4 bg-brand-purple/[0.05] relative overflow-hidden">
                {/* Subtle glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-brand-purple/10 to-transparent opacity-50"></div>
                <div className="mt-0.5 shrink-0 relative z-10">
                  <Check className="text-brand-purple" size={18} aria-hidden="true" />
                </div>
                <p className="text-sm text-white/90 leading-relaxed font-bold relative z-10">
                  {row.hitlovers}
                </p>
              </div>

            </div>
          ))}
        </div>

        {/* DESKTOP LAYOUT (Tabela lado a lado) */}
        <div className="comp-table-ev hidden md:block relative bg-[#1a1a1a] rounded-[2rem] border border-white/5 shadow-2xl overflow-hidden">
          
          {/* Header Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 bg-[#222] border-b border-white/5 relative z-10">
            <div className="p-6 md:p-8 flex items-center gap-3 md:border-r border-white/5">
               <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center border border-red-500/20" aria-hidden="true">
                 <X className="text-red-500" size={20} />
               </div>
               <h3 className="text-xl font-bold text-white/70">Tráfego Pago (Ads)</h3>
            </div>
            <div className="p-6 md:p-8 flex items-center gap-3 bg-brand-purple/5 relative overflow-hidden">
               {/* Subtle glow */}
               <div className="absolute inset-0 bg-gradient-to-r from-brand-purple/10 to-transparent opacity-50"></div>
               <div className="w-10 h-10 rounded-full bg-brand-purple/20 flex items-center justify-center border border-brand-purple/30 shadow-[0_0_15px_rgba(216,180,254,0.3)] relative z-10" aria-hidden="true">
                 <Check className="text-brand-purple" size={20} />
               </div>
               <h3 className="text-xl font-bold text-white relative z-10">Ecossistema <span className="text-brand-purple">hitlovers</span></h3>
            </div>
          </div>

          {/* Comparison Rows */}
          <div className="flex flex-col relative z-10">
            {COMPARISON_DATA.map((row, index) => (
              <div key={index} className="comp-row-ev grid grid-cols-2 border-b border-white/5 last:border-b-0">
                
                {/* Ads Side */}
                <div className="p-8 text-zinc-500 border-r border-white/5 flex flex-col justify-center">
                  <span className="text-xs font-bold text-zinc-600 uppercase tracking-widest mb-3">{row.title}</span>
                  <p className="text-lg leading-relaxed">{row.ads}</p>
                </div>

                {/* hitlovers Side */}
                <div className="p-8 text-zinc-200 bg-brand-purple/[0.02] flex flex-col justify-center group hover:bg-brand-purple/[0.05] transition-colors relative overflow-hidden">
                  <span className="text-xs font-bold text-brand-purple/60 uppercase tracking-widest mb-3">{row.title}</span>
                  <p className="text-lg leading-relaxed font-medium text-white/90">{row.hitlovers}</p>
                  
                  {/* Hover effect line */}
                  <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-brand-purple group-hover:w-full transition-[width] duration-500 ease-out"></div>
                </div>

              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  )
}
