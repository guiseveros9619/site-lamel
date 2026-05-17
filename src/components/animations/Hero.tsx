'use client'

import { useRef } from 'react'
import Link from 'next/link'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { CheckCircle2, ChevronDown, Ticket, DollarSign, TrendingUp, Music, Sparkles } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

gsap.registerPlugin(useGSAP)

export function Hero() {
  const container = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      // Animação de entrada dos textos (Fade up)
      gsap.from('.hero-text', {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: 'power3.out',
      })

      // Efeito flutuante infinito nos cards da direita
      gsap.to('.floating-card', {
        y: '-=15',
        duration: 3,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        stagger: {
          amount: 1.5,
          from: 'random',
        },
      })
    },
    { scope: container },
  )

  return (
    <section
      ref={container}
      className="relative flex min-h-[90vh] items-center overflow-hidden bg-[#121212] py-20 lg:py-0"
    >
      <div className="container mx-auto max-w-7xl px-6 lg:px-8 grid gap-12 lg:grid-cols-2 lg:gap-8">
        
        {/* Left Column - Text Content */}
        <div className="flex flex-col justify-center max-w-2xl">
          <div className="hero-text mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-bold text-brand-purple mb-8 backdrop-blur-sm">
              <Sparkles size={16} aria-hidden="true" />
              O Hype nunca foi tão seguro
            </div>
            <h1 className="text-5xl font-extrabold leading-[1.1] tracking-tight sm:text-6xl lg:text-[4.5rem] text-balance">
              Onde a música vira hit e o seu evento lota.
            </h1>
          </div>
          
          <p className="hero-text mb-10 text-lg leading-relaxed text-zinc-300 sm:text-xl font-medium">
            Conectamos artistas e eventos a um exército de criadores locais e fãs prontos para viralizar. Automação e pagamentos instantâneos para quem promove, e alcance recorde para quem contrata.
          </p>

          <div className="hero-text flex flex-col gap-4 relative z-10 sm:flex-row sm:flex-wrap sm:items-start">
            <Link
              href="/criadores"
              className="inline-flex h-14 items-center justify-center rounded-full bg-brand-purple px-8 text-base font-bold text-black hover:bg-brand-purple-light transition-colors"
            >
              Sou criador
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger className="inline-flex h-14 items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-md px-8 text-base font-bold text-white hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple">
                Sou artista ou evento
                <ChevronDown size={18} aria-hidden="true" className="text-zinc-400" />
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="start"
                sideOffset={8}
                className="min-w-[280px] rounded-2xl border border-white/10 bg-[#1c1c1c] p-2 text-white shadow-2xl"
              >
                <Link href="/artistas" className="block outline-none">
                  <DropdownMenuItem className="flex items-start gap-4 rounded-xl p-3 focus:bg-white/5 cursor-pointer">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/5 bg-brand-purple/10">
                      <Music size={18} className="text-brand-purple" />
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <span className="text-sm font-bold tracking-tight text-white">Artistas &amp; Escritórios</span>
                      <span className="text-xs font-medium text-zinc-500">Acelere o seu lançamento</span>
                    </div>
                  </DropdownMenuItem>
                </Link>
                <Link href="/eventos" className="block outline-none">
                  <DropdownMenuItem className="flex items-start gap-4 rounded-xl p-3 focus:bg-white/5 cursor-pointer">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/5 bg-blue-500/10">
                      <Ticket size={18} className="text-blue-400" />
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <span className="text-sm font-bold tracking-tight text-white">Eventos &amp; Produtores</span>
                      <span className="text-xs font-medium text-zinc-500">Lote sua casa de shows</span>
                    </div>
                  </DropdownMenuItem>
                </Link>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        {/* Right Column - Floating Interface Mockups */}
        <div className="relative h-[720px] lg:h-[600px] w-full mt-12 lg:mt-0 flex justify-center lg:block overflow-visible">
          <div className="relative w-full h-full max-w-[340px] sm:max-w-[400px] lg:max-w-none scale-[1] lg:scale-100 origin-top flex justify-center lg:block">
          
          {/* Card 2: App Mobile - Notificação PIX (Canto Superior Esquerdo - Jogado mais pra esquerda/cima) */}
          <div className="floating-card absolute left-0 lg:-left-4 top-0 lg:top-12 z-20 w-60 rounded-2xl bg-[#1A1A1A] shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden border border-zinc-800">
             <div className="p-4 border-b border-zinc-800 flex items-center gap-3">
                 <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-black">
                    <DollarSign size={20} strokeWidth={3} />
                 </div>
                 <div>
                    <h4 className="font-bold text-sm">Meta Atingida!</h4>
                    <p className="text-xs text-zinc-400">10k views alcançadas</p>
                 </div>
             </div>
             <div className="p-5 bg-zinc-900/50 flex flex-col items-center text-center">
                <span className="text-xs font-semibold text-zinc-500 uppercase tracking-widest mb-1">Recompensa</span>
                <span className="text-3xl font-black text-green-400 mb-2">R$ 150,00</span>
                <div className="inline-flex items-center gap-1.5 bg-green-500/10 text-green-400 text-xs font-bold px-3 py-1.5 rounded-full mt-2">
                   <CheckCircle2 size={14} /> PIX Enviado
                </div>
             </div>
          </div>

          {/* Card 1: Dashboard de Campanha (Centro - Mais pra direita/baixo e atrás) */}
          <div className="floating-card absolute right-0 lg:left-auto lg:right-30 top-[180px] lg:top-20image.png z-20 flex w-72 flex-col rounded-2xl bg-[#1c1c1c] shadow-2xl overflow-hidden border border-white/10">
            <div className="h-32 w-full bg-gradient-to-br from-brand-purple/20 to-transparent flex flex-col justify-end p-5 relative">
               <span className="absolute top-4 left-4 text-xs font-bold text-brand-purple uppercase tracking-wider">Campanha Ativa</span>
               <h3 className="font-bold text-xl leading-tight">Novo Single Sertanejo</h3>
               <p className="text-xs text-zinc-400 mt-1">Status: Viralizando 🔥</p>
            </div>
            <div className="p-5 flex flex-col gap-4">
               <div className="flex justify-between items-end border-b border-white/10 pb-4">
                 <div>
                   <p className="text-xs text-zinc-400 mb-1">Vídeos Aprovados (IA)</p>
                   <h4 className="font-bold text-2xl">1.284</h4>
                 </div>
                 <div className="w-10 h-10 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center">
                   <TrendingUp size={20} />
                 </div>
               </div>
               
               <div>
                  <div className="flex justify-between text-xs font-bold text-zinc-400 mb-2">
                     <span>Progresso da Meta</span>
                     <span className="text-brand-purple">85%</span>
                  </div>
                  <div className="w-full bg-zinc-800 rounded-full h-2">
                    <div className="bg-brand-purple w-[85%] h-full rounded-full shadow-[0_0_10px_rgba(216,180,254,0.5)]"></div>
                  </div>
               </div>
            </div>
          </div>

           {/* Card 3: App Mobile - Ticket VIP (Canto Inferior Direito - Sobreposto) */}
           <div className="floating-card absolute left-35 lg:left-auto lg:-right-0 top-[300px] lg:top-auto lg:bottom-4 z-30 w-56 rounded-2xl bg-gradient-to-br from-[#FF9A9E] to-[#FECFEF] shadow-xl overflow-hidden transform rotate-3 hover:rotate-0 transition-transform">
             <div className="p-5 flex flex-col gap-4 text-black">
                <div className="flex items-center justify-between border-b border-black/10 pb-3">
                   <div className="flex items-center gap-2">
                      <Music size={16} />
                      <span className="text-xs font-bold uppercase tracking-wider">Recompensa VIP</span>
                   </div>
                   <Ticket size={20} className="text-brand" />
                </div>
                
                <div className="text-center py-2">
                   <h4 className="font-black text-xl leading-none mb-1">Camarote Villa</h4>
                   <p className="text-sm font-semibold opacity-80">Sábado, 23h</p>
                </div>

                <div className="mt-2 bg-white/40 backdrop-blur-sm rounded-xl p-3 flex flex-col items-center border border-white/50">
                   {/* QR Code Realista Minimalista */}
                   <div className="relative w-24 h-24 bg-black rounded-xl mb-3 p-2 flex items-center justify-center shadow-inner">
                      <svg viewBox="0 0 19 19" className="w-full h-full text-white drop-shadow-md">
                         <g fill="currentColor">
                           <path d="M0 2C0 .895.895 0 2 0h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm2-1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H2z" />
                           <rect x="2" y="2" width="3" height="3" rx="0.5" />
                           <path d="M12 2c0-1.105.895-2 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2V2zm2-1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1h-3z" />
                           <rect x="14" y="2" width="3" height="3" rx="0.5" />
                           <path d="M0 14c0-1.105.895-2 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-3zm2-1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1H2z" />
                           <rect x="2" y="14" width="3" height="3" rx="0.5" />
                           {"10,0 8,1 10,1 8,2 9,2 10,2 8,3 8,4 10,4 8,5 9,5 10,5 8,6 10,6 8,7 1,8 3,8 5,8 6,8 7,8 8,8 10,8 12,8 14,8 15,8 18,8 0,9 1,9 2,9 4,9 5,9 8,9 9,9 10,9 11,9 12,9 16,9 17,9 4,10 6,10 8,10 12,10 13,10 15,10 18,10 8,11 10,11 11,11 16,11 18,11 8,12 10,12 12,12 14,12 16,12 18,12 9,13 10,13 12,13 13,13 14,13 16,13 17,13 8,14 12,14 16,14 18,14 9,15 10,15 11,15 12,15 14,15 15,15 16,15 17,15 8,16 9,16 10,16 18,16 8,17 12,17 14,17 16,17 17,17 8,18 10,18 12,18 14,18 15,18 16,18 17,18 18,18".split(" ").map((p) => {
                             const [x, y] = p.split(",");
                             return <rect key={p} x={x} y={y} width="1" height="1" rx="0.35" />;
                           })}
                         </g>
                      </svg>
                   </div>
                   <span className="text-[10px] font-black uppercase tracking-widest text-black/80">Acesso Liberado</span>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
      
    </section>
  )
}
