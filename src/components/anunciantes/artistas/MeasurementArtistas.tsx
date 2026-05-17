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
  { step: 'A', ugc: 5, stream: 10 },
  { step: 'B', ugc: 20, stream: 15 },
  { step: 'C', ugc: 45, stream: 25 },
  { step: 'D', ugc: 80, stream: 40 }, // Fim da Campanha (UGC Peak)
  { step: 'E', ugc: 90, stream: 70 }, 
  { step: 'F', ugc: 85, stream: 95 }, // Streams continuam subindo (Cauda longa)
  { step: 'G', ugc: 75, stream: 100 },
]

export function MeasurementArtistas() {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      gsap.from('.measure-art-text', {
        x: -30, opacity: 0, duration: 0.8, stagger: 0.2, ease: 'power3.out',
        scrollTrigger: { trigger: containerRef.current, start: 'top 70%' }
      })

      gsap.from('.measure-art-visual', {
        x: 30, opacity: 0, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: containerRef.current, start: 'top 70%' }
      })

      // Pop do badge do gráfico
      gsap.from('.chart-art-badge', {
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
           
           {/* Left Column: Text */}
           <div className="flex flex-col items-start max-w-xl mx-auto lg:mx-0">
             <p className="measure-art-text text-sm font-bold tracking-wide text-brand-purple mb-6 uppercase">
               Mais do que Views
             </p>
             <h2 className="measure-art-text text-5xl sm:text-6xl font-extrabold tracking-tight text-white mb-8 leading-[1.1]">
               Das redes para as playlists.
             </h2>
             <p className="measure-art-text text-lg text-zinc-300 font-medium mb-10 leading-relaxed">
               De nada adianta ter 1 milhão de views se ninguém procurar pela sua música. O objetivo da Hitlovers é injetar um volume massivo de vídeos (UGC) criados pela comunidade para gerar curiosidade orgânica e levar o público a dar o play nas plataformas de streaming.
             </p>
             <div className="measure-art-text">
               <Button className="rounded-full bg-brand-purple text-black font-bold px-8 h-12 hover:bg-brand-purple-light transition-colors">
                 Agendar uma Demo
               </Button>
             </div>
           </div>

           {/* Right Column: Visual Mockup */}
           <div className="measure-art-visual relative w-full h-[500px] flex justify-center items-center">
              
              <div className="w-[90%] h-full bg-[#1c1c1c] rounded-3xl overflow-hidden relative border border-brand-purple/20 shadow-[0_0_50px_rgba(216,180,254,0.05)] flex flex-col p-8">
                 
                 <div className="flex justify-between items-start mb-8">
                    <div>
                       <h3 className="text-white font-bold text-lg">Crescimento de Streams</h3>
                       <p className="text-zinc-500 text-sm">Goiânia, GO</p>
                    </div>
                    <div className="chart-art-badge bg-green-500/10 border border-green-500/30 text-green-400 px-3 py-1 rounded-full text-sm font-bold flex items-center gap-2">
                       <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                       + 428% Hoje
                    </div>
                 </div>

                 {/* Chart Graph */}
                 <div className="flex-1 relative">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={chartData} margin={{ top: 20, right: 5, left: 5, bottom: 5 }}>
                        {/* UGC Curve (Criação de Videos) */}
                        <Line 
                          type="monotone" 
                          dataKey="ugc" 
                          stroke="#d8b4fe" 
                          strokeWidth={3} 
                          dot={false}
                          isAnimationActive={true}
                          animationDuration={2000}
                        />
                        {/* Stream Curve (Plays no Spotify) */}
                        <Line 
                          type="monotone" 
                          dataKey="stream" 
                          stroke="#22c55e" 
                          strokeWidth={4} 
                          dot={false}
                          isAnimationActive={true}
                          animationDuration={2500}
                          animationEasing="ease-in-out"
                        />
                      </LineChart>
                    </ResponsiveContainer>

                    {/* Linha Vertical simulando O Fim do Budget */}
                    <div className="absolute top-0 bottom-0 left-[50%] border-l border-dashed border-white/20 flex items-start">
                       <span className="text-[10px] font-bold text-zinc-500 uppercase -translate-x-1/2 bg-[#1c1c1c] px-2 py-1 rounded-full border border-white/10 -mt-3">Fim do Budget</span>
                    </div>

                    <div className="absolute top-0 bottom-0 right-[15%] flex flex-col items-center justify-center pointer-events-none">
                       <span className="text-xs font-bold text-green-400 bg-green-500/10 px-2 py-1 rounded border border-green-500/20">Cauda Longa</span>
                    </div>
                 </div>

                 {/* Legend */}
                 <div className="flex justify-center gap-6 mt-6 border-t border-white/10 pt-6">
                    <div className="flex items-center gap-2">
                       <div className="w-3 h-3 rounded-full bg-brand-purple"></div>
                       <span className="text-sm text-zinc-400 font-medium">Vídeos TikTok (UGC)</span>
                    </div>
                     <div className="flex items-center gap-2">
                       <div className="w-3 h-3 rounded-full bg-green-500"></div>
                       <span className="text-sm text-zinc-400 font-medium">Impacto no Streaming (Estimado)</span>
                     </div>
                 </div>

              </div>

           </div>

        </div>
      </div>
    </section>
  )
}
