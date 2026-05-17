'use client'

import { ReactLenis } from 'lenis/react'
import { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import gsap from 'gsap'
import type { LenisRef } from 'lenis/react'

export function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const lenisRef = useRef<LenisRef>(null)
  const pathname = usePathname()

  useEffect(() => {
    // Evita conflitos com a restauração de scroll nativa do navegador
    if (typeof window !== 'undefined') {
      window.history.scrollRestoration = 'manual'
    }

    function update(time: number) {
      lenisRef.current?.lenis?.raf(time * 1000)
    }

    gsap.ticker.add(update)
    gsap.ticker.lagSmoothing(0) // Garante sincronia perfeita do ticker do GSAP com a Lenis

    return () => {
      gsap.ticker.remove(update)
    }
  }, [])

  // Reseta o scroll para o topo sempre que a rota mudar
  useEffect(() => {
    if (lenisRef.current?.lenis) {
      lenisRef.current.lenis.scrollTo(0, { immediate: true })
    }
  }, [pathname])

  return (
    <ReactLenis
      root
      ref={lenisRef}
      options={{
        autoRaf: false, // Deixa o GSAP gerenciar o requestAnimationFrame
        lerp: 0.1, // Nível de suavidade (quanto menor, mais suave)
        smoothWheel: true,
      }}
    >
      {children}
    </ReactLenis>
  )
}
