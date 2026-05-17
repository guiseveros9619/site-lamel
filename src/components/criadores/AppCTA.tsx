'use client'

import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { QRCodeSVG } from 'qrcode.react'
import { APP_STORE_URL, PLAY_STORE_URL } from '@/lib/appDownload'

const QR_FALLBACK_URL = 'https://hitlovers.app/baixar'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP)
}

// Apple icon
const AppleIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6 text-white fill-current" aria-hidden="true">
    <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701" />
  </svg>
)

// Google Play icon
const GooglePlayIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6 text-white fill-current" aria-hidden="true">
    <path d="M3 21.68V2.32c0-.52.56-.84 1.01-.58l16.78 9.68c.45.26.45.9 0 1.16L4.01 22.26c-.45.26-1.01-.06-1.01-.58z"/>
  </svg>
)

export function AppCTA() {
  const container = useRef<HTMLDivElement>(null)
  const [qrUrl, setQrUrl] = useState<string>(QR_FALLBACK_URL)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setQrUrl(`${window.location.origin}/baixar`)
    }
  }, [])

  useGSAP(
    () => {
      gsap.from('.anim-app-cta', {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: container.current,
          start: 'top 75%',
        },
      })
    },
    { scope: container },
  )

  return (
    <section ref={container} className="bg-[#121212] py-32 border-t border-white/5">
      <div className="container mx-auto max-w-4xl px-6 lg:px-8 text-center flex flex-col items-center">
        
        <h2 className="anim-app-cta text-5xl sm:text-6xl font-extrabold leading-tight tracking-tight mb-8">
          Pronto para fazer parte do <span className="text-brand-purple">Hit?</span>
        </h2>
        <p className="anim-app-cta text-xl text-zinc-300 mb-12 max-w-2xl mx-auto leading-relaxed font-medium">
          Baixe o aplicativo agora, cadastre-se como criador e comece a ser pago para viralizar as músicas e os eventos da sua região.
        </p>

        <div className="anim-app-cta flex flex-wrap justify-center gap-4 mb-16">
          <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer" aria-label="Baixar na App Store" className="flex items-center gap-3 border border-zinc-600 rounded-2xl py-3 px-6 bg-black hover:bg-zinc-900 transition-colors min-w-[200px] justify-center">
            <AppleIcon />
            <div className="flex flex-col text-left">
              <span className="text-[10px] leading-tight text-white/90">Baixar na</span>
              <span className="text-sm font-bold leading-tight text-white">App Store</span>
            </div>
          </a>
          <a href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer" aria-label="Disponível no Google Play" className="flex items-center gap-3 border border-zinc-600 rounded-2xl py-3 px-6 bg-black hover:bg-zinc-900 transition-colors min-w-[200px] justify-center">
            <GooglePlayIcon />
            <div className="flex flex-col text-left">
              <span className="text-[10px] leading-tight text-white/90 uppercase tracking-tight">Disponível no</span>
              <span className="text-sm font-bold leading-tight text-white">Google Play</span>
            </div>
          </a>
        </div>

        {/* QR Code */}
        <div className="anim-app-cta relative p-1 rounded-3xl bg-gradient-to-b from-brand-purple/20 to-transparent flex flex-col items-center">
           <div className="bg-[#1c1c1c] p-8 rounded-[1.4rem] flex flex-col items-center gap-4">
               <a
                 href={qrUrl}
                 target="_blank"
                 rel="noopener noreferrer"
                 aria-label="Abrir página de download em outro dispositivo"
                 className="relative w-32 h-32 bg-white rounded-xl p-2 flex items-center justify-center shadow-lg"
               >
                  <QRCodeSVG
                    value={qrUrl}
                    size={112}
                    bgColor="#ffffff"
                    fgColor="#000000"
                    level="M"
                    marginSize={0}
                  />
               </a>
               <span className="text-xs font-bold text-zinc-400">Escaneie para baixar</span>
           </div>
        </div>

      </div>
    </section>
  )
}
