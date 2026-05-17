'use client'

import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Button } from '@/components/ui/button'
import { LineChart, Line, ResponsiveContainer } from "recharts"

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP)
}

const chartData = [
  { step: 'A', hype: 5, bilheteria: 2 },
  { step: 'B', hype: 20, bilheteria: 10 },
  { step: 'C', hype: 50, bilheteria: 30 },
  { step: 'D', hype: 80, bilheteria: 45 },
  { step: 'E', hype: 95, bilheteria: 75 },
  { step: 'F', hype: 85, bilheteria: 95 }, // Sold out spike
  { step: 'G', hype: 60, bilheteria: 100 },
]

export function MeasurementEventos() {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      gsap.from('.measure-ev-text', {
        x: -30, opacity: 0, duration: 0.8, stagger: 0.2, ease: 'power3.out',
        scrollTrigger: { trigger: containerRef.current, start: 'top 70%' }
      })

      gsap.from('.measure-ev-visual', {
        x: 30, opacity: 0, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: containerRef.current, start: 'top 70%' }
      })

      gsap.from('.chart-ev-badge', {
        scale: 0, opacity: 0, duration: 0.6, ease: 'back.out(2)', delay: 1,
        scrollTrigger: { trigger: containerRef.current, start: 'top 50%' }
      })
    },
    { scope: containerRef }
  )

  return (
    <section ref={containerRef} className="bg-[#121212] py-32 border-t border-white/5 overflow-hidden">
      <div className="container mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-8 items-center">
           
           <div className="flex flex-col items-start max-w-xl mx-auto lg:mx-0">
             <p className="measure-ev-text text-sm font-bold tracking-wide text-blue-400 mb-6 uppercase">
               Inteligência de Dados
             </p>
             <h2 className="measure-ev-text text-5xl sm:text-6xl font-extrabold tracking-tight text-white mb-8 leading-[1.1]">
               Transforme Hype em Sold Out.
             </h2>
             <p className="measure-ev-text text-lg text-zinc-300 font-medium mb-10 leading-relaxed">
               Acompanhe a jornada de conversão em tempo real. Visualize através dos nossos dashboards a correlação direta entre os picos de alcance orgânico nas redes sociais (FOMO) e a curva de esgotamento de lotes na sua plataforma de bilheteria.
             </p>
             <div className="measure-ev-text">
               <Button className="rounded-full bg-blue-500 text-white font-bold px-8 h-12 hover:bg-blue-400 transition-colors">
                 Agendar uma Demo
               </Button>
             </div>
           </div>

           <div className="measure-ev-visual relative w-full h-[500px] flex justify-center items-center">
              <div className="w-[90%] h-full bg-[#1c1c1c] rounded-3xl overflow-hidden relative border border-blue-500/20 shadow-[0_0_50px_rgba(59,130,246,0.05)] flex flex-col p-8">
                 
                 <div className="flex justify-between items-start mb-8">
                    <div>
                       <h3 className="text-white font-bold text-lg">Pico de Vendas e FOMO</h3>
                       <p className="text-zinc-500 text-sm">Tardezinha SP</p>
                    </div>
                    <div className="chart-ev-badge bg-blue-500/10 border border-blue-500/30 text-blue-400 px-3 py-1 rounded-full text-sm font-bold flex items-center gap-2">
                       <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                       Sold Out
                    </div>
                 </div>

                 <div className="flex-1 relative">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={chartData} margin={{ top: 20, right: 5, left: 5, bottom: 5 }}>
                        <Line 
                          type="monotone" 
                          dataKey="hype" 
                          stroke="#60a5fa" 
                          strokeWidth={3} 
                          dot={false}
                          isAnimationActive={true}
                          animationDuration={2000}
                        />
                        <Line 
                          type="monotone" 
                          dataKey="bilheteria" 
                          stroke="#22c55e" 
                          strokeWidth={4} 
                          dot={false}
                          isAnimationActive={true}
                          animationDuration={2500}
                          animationEasing="ease-in-out"
                        />
                      </LineChart>
                    </ResponsiveContainer>

                    <div className="absolute top-0 bottom-0 left-[60%] border-l border-dashed border-white/20 flex items-start">
                       <span className="text-[10px] font-bold text-zinc-500 uppercase -translate-x-1/2 bg-[#1c1c1c] px-2 py-1 rounded-full border border-white/10 -mt-3">Dia do Evento</span>
                    </div>
                 </div>

                 <div className="flex justify-center gap-6 mt-6 border-t border-white/10 pt-6">
                    <div className="flex items-center gap-2">
                       <div className="w-3 h-3 rounded-full bg-blue-400"></div>
                       <span className="text-sm text-zinc-400 font-medium">Hype Social (Vídeos)</span>
                    </div>
                    <div className="flex items-center gap-2">
                       <div className="w-3 h-3 rounded-full bg-green-500"></div>
                       <span className="text-sm text-zinc-400 font-medium">Venda de Ingressos</span>
                    </div>
                 </div>

              </div>
           </div>

        </div>
      </div>
    </section>
  )
}
