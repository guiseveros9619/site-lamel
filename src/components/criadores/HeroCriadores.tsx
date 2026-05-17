'use client'

import { useRef, useState } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { Button } from '@/components/ui/button'
import { ArrowRight, Smartphone, DollarSign, CheckCircle2, ShieldCheck, Heart, MessageCircle, Send, Music, AudioLines, Play } from 'lucide-react'
import { VideoModal } from '@/components/ui/VideoModal'
import { useAppDownloadLink } from '@/lib/appDownload'

export function HeroCriadores() {
  const container = useRef<HTMLDivElement>(null)
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false)
  const appDownloadUrl = useAppDownloadLink()

  useGSAP(
    () => {
      const tl = gsap.timeline()
      
      tl.from('.hero-badge', { y: 20, opacity: 0, duration: 0.6, ease: 'power3.out' })
        .from('.hero-title-1', { y: 30, opacity: 0, duration: 0.8, ease: 'power3.out' }, '-=0.4')
        .from('.hero-title-2', { y: 30, opacity: 0, duration: 0.8, ease: 'power3.out' }, '-=0.6')
        .from('.hero-desc', { y: 20, opacity: 0, duration: 0.8, ease: 'power3.out' }, '-=0.4')
        .from('.hero-btns', { y: 20, opacity: 0, duration: 0.6, ease: 'power3.out' }, '-=0.4')

      // Main Story Timeline (Video -> Match -> PIX)
      const storyTl = gsap.timeline({ repeat: -1, repeatDelay: 2.5 })
      
      storyTl
        .set('.ia-progress', { width: '0%' })
        .set('.ia-check-icon', { opacity: 0, scale: 0 })
        .set('.ia-video', { y: 20, opacity: 0, rotation: 6 })
        .set('.ia-checks', { x: 20, opacity: 0, rotation: -4 })
        .set('.pix-notificacao', { y: -40, opacity: 0 })
        .set('.pix-val', { innerHTML: '+ R$ 0,00' })

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
        
        // Aprovação final (borda verde)
        .to('.ia-checks', { borderColor: 'rgba(34,197,94,0.3)', duration: 0.4 }, '+=0.2')
        
        // Pix aparece (slide down como notificação de celular)
        .to('.pix-notificacao', { y: 0, opacity: 1, duration: 0.6, ease: 'back.out(1.5)' }, '+=0.2')
        
        // Contador do Pix sobe
        .to({ val: 0 }, {
            val: 120,
            duration: 1.2,
            ease: 'power2.out', 
            onUpdate: function() {
                const el = document.querySelector('.pix-val')
                if (el) el.innerHTML = `+ R$ ${Math.floor(this.targets()[0].val)},00`
            }
        }, '<')

        // Glow effect
        .to('.pix-notificacao', { duration: 0.3, yoyo: true, repeat: 1 })
        
        // Mantém a ilustração visível por mais tempo (5 segundos) antes de esconder e reiniciar
        .to(['.ia-video', '.ia-checks', '.pix-notificacao'], { opacity: 0, y: 10, duration: 0.5, stagger: 0.1 }, '+=5')
    },
    { scope: container }
  )

  return (
    <section ref={container} className="relative min-h-[90vh] flex items-center pt-32 pb-20 overflow-hidden bg-[#121212]">
      
      {/* Background abstrato */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-purple/20 via-[#121212] to-[#121212] pointer-events-none" />
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay pointer-events-none" />

      <div className="container mx-auto max-w-7xl px-6 lg:px-8 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Column - Text Content */}
        <div className="max-w-2xl">
          <div className="hero-badge inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-sm font-bold text-green-400 mb-8 backdrop-blur-sm">
            <Smartphone size={16} aria-hidden="true" />
            Criadores de Conteúdo
          </div>
          
          <h1 className="text-5xl font-extrabold leading-[1.1] tracking-tight sm:text-6xl lg:text-[4.5rem] mb-8 text-balance">
            <span className="hero-title-1 block text-white">Seu conteúdo vira</span>
            <span className="hero-title-2 block text-brand-purple">
              PIX com artistas e eventos que você curte.
            </span>
          </h1>
          
          <p className="hero-desc text-lg leading-relaxed text-zinc-300 sm:text-xl font-medium max-w-3xl mb-12">
            Participe de campanhas, promova eventos e músicas, e ganhe PIX, ingressos VIP e vantagens exclusivas pelo seu engajamento. Tudo automático, com a vaga garantida e zero burocracia.
          </p>
          
          <div className="hero-btns flex flex-col gap-3 relative z-10 sm:flex-row sm:flex-wrap sm:gap-4">
            <a
              href={appDownloadUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center h-14 w-full sm:w-auto rounded-full bg-brand-purple px-8 text-base font-bold text-black hover:bg-brand-purple-light transition-[transform,shadow] hover:scale-105 shadow-[0_0_40px_rgba(216,180,254,0.3)] hover:shadow-[0_0_60px_rgba(216,180,254,0.5)]"
            >
              Baixar o App<ArrowRight className="ml-2" size={20} aria-hidden="true" />
            </a>
            <Button
              variant="outline"
              onClick={() => setIsVideoModalOpen(true)}
              className="h-14 w-full sm:w-auto rounded-full border-white/20 bg-black/50 backdrop-blur-md px-8 text-base font-bold text-white hover:bg-white/10 transition-colors flex items-center gap-2"
            >
               <Play size={20} className="text-brand-purple fill-brand-purple" aria-hidden="true" /> Veja na prática
            </Button>
          </div>
        </div>

        {/* Right Column - GSAP Narrative Graphics */}
        <div className="relative h-[680px] sm:h-[600px] w-full flex justify-center items-center">

            <div className="relative w-full h-full flex justify-center lg:block origin-center scale-[0.85] xl:scale-100">
               {/* Mockup IA 1: Análise de Video (Fundo Direita) - Adaptado para Criadores */}
               <div className="ia-video absolute left-1/2 -translate-x-1/2 ml-[-40px] lg:ml-0 lg:left-auto lg:translate-x-0 lg:-right-4 top-0 sm:top-4 sm:rotate-[6deg] z-10 w-[280px] h-[520px] rounded-3xl bg-zinc-900 overflow-hidden border border-white/10 shadow-2xl">
                  {/* Subtle Overlay to make UI elements pop less and focus on scan */}
                  <div className="absolute inset-0 bg-black/20 z-10 pointer-events-none"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f1a] via-transparent to-transparent z-10 pointer-events-none"></div>
                  
                  {/* Scanner Line GSAP - Now above everything */}
                  <div className="ia-scan absolute left-0 right-0 h-[2px] bg-[#22c55e] shadow-[0_0_20px_rgba(34,197,94,1)] z-30"></div>
                  <div className="ia-scan absolute left-0 right-0 h-24 bg-gradient-to-b from-[#22c55e]/30 to-transparent z-20 -translate-y-full pointer-events-none"></div>

                  {/* Notificação de Pagamento (estilo push do celular) */}
                  <div className="pix-notificacao opacity-0 absolute top-[5%] left-1/2 -translate-x-1/2 bg-[#1c1c1c]/95 backdrop-blur-md border border-green-500/30 rounded-xl p-3 shadow-2xl flex flex-row items-center justify-between gap-3 z-[40] w-[90%] max-w-[240px]">
                     <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center shrink-0">
                        <DollarSign className="text-green-500" size={20} strokeWidth={2.5} />
                     </div>
                     <div className="flex flex-col items-start w-full">
                        <span className="font-bold text-white text-sm">Pagamento Liberado</span>
                        <span className="pix-val text-green-400 text-[10px] font-bold mt-0.5">+ R$ 0,00</span>
                     </div>
                  </div>

                  {/* UI Lateral Direita (Ações) - Simplified */}
                  <div className="absolute right-4 bottom-24 flex flex-col gap-6 items-center z-20 opacity-70 w-8">
                     <div className="flex flex-col items-center justify-center gap-1">
                        <Heart size={22} className="hero-like-icon text-white drop-shadow-md" strokeWidth={2} />
                        <span className="hero-likes-val text-[10px] font-bold text-white drop-shadow-md text-center">89.5k</span>
                     </div>
                     <div className="flex flex-col items-center justify-center gap-1">
                        <MessageCircle size={22} className="text-white drop-shadow-md" strokeWidth={2} />
                        <span className="text-[10px] font-bold text-white drop-shadow-md text-center">702</span>
                     </div>
                     <div className="flex flex-col items-center justify-center gap-1">
                        <Send size={22} className="text-white drop-shadow-md" strokeWidth={2} />
                        <span className="text-[10px] font-bold text-white drop-shadow-md text-center">1.2k</span>
                     </div>
                  </div>

                  {/* UI Inferior (Legenda e Música) - Simplified */}
                  <div className="absolute bottom-6 left-4 right-16 z-20 flex flex-col gap-2 opacity-70">
                     <h5 className="font-bold text-white text-[15px] drop-shadow-md">@creator</h5>
                     <p className="text-white/80 text-[13px] drop-shadow-md leading-snug">Gente a nova música dele é<br/>perfeita! #Noitada #Hitlovers</p>
                     <div className="flex items-center gap-2 mt-2">
                        <Music size={14} className="text-white drop-shadow-md" />
                        <div className="w-36 overflow-hidden">
                           <p className="text-white text-xs font-bold whitespace-nowrap animate-[marquee_4s_linear_infinite]">Novo Hit (Oficial) - Seu Artista</p>
                        </div>
                     </div>
                  </div>

                  {/* Disco Girando Canto */}
                  <div className="absolute right-4 bottom-6 w-[38px] h-[38px] rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center animate-spin z-20 opacity-70" style={{ animationDuration: '3s' }}>
                     <div className="w-[14px] h-[14px] rounded-full bg-black flex items-center justify-center">
                       <div className="w-1.5 h-1.5 rounded-full bg-zinc-800"></div>
                     </div>
                     {/* Notes flying out from the disk */}
                     <Music size={12} className="absolute -top-4 -left-4 text-white/50 animate-[ping_2s_ease-in-out_infinite]" style={{ animationDelay: '0.5s' }} />
                     <Music size={10} className="absolute -top-6 left-0 text-white/30 animate-[ping_2s_ease-in-out_infinite]" style={{ animationDelay: '1.5s' }} />
                  </div>

               </div>

               {/* Mockup IA 2: Match & Checks (Frente Esquerda) */}
               <div className="ia-checks absolute left-1/2 -translate-x-1/2 ml-[8px] lg:ml-0 lg:left-auto lg:translate-x-0 lg:right-[30%] top-[370px] sm:top-20 sm:rotate-[-4deg] z-20 w-72 rounded-2xl bg-[#0f0f0f] overflow-hidden border border-zinc-800 transition-colors duration-300 shadow-2xl">
                 <div className="p-6 border-b border-zinc-800 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                       <ShieldCheck size={20} className="text-brand-purple" />
                       <span className="font-bold text-sm">Auditoria da IA</span>
                    </div>
                    <div className="bg-green-500/20 text-green-500 text-[10px] font-black uppercase px-2 py-1 rounded">Ativa</div>
                 </div>
                 <div className="p-6 flex flex-col gap-4">
                    <div>
                      <p className="text-xs text-zinc-500 mb-1">Link Postado</p>
                      <h4 className="font-bold text-xs text-zinc-300 break-all truncate">tiktok.com/@creator/video/1…</h4>
                    </div>
                    
                    <div className="bg-zinc-900/80 rounded-xl border border-white/5 overflow-hidden">
                      <div className="flex items-center justify-between p-3 border-b border-white/5">
                         <div className="flex items-center gap-2 text-xs text-zinc-300">
                            <AudioLines size={14} className="text-green-400" />
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
                 </div>
              </div>
            </div>

        </div>
      </div>
      
      <VideoModal isOpen={isVideoModalOpen} setIsOpen={setIsVideoModalOpen} />
    </section>
  )
}
