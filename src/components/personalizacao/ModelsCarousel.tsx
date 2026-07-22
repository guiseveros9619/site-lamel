'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { MODELS } from './productModels'

/**
 * Carrossel de modelos do Passo 2 (Escolha das Peças).
 * Interativo (setas + dots controlados pelo usuário) — substitui o antigo
 * customizador animado por cursor GSAP, que confundia.
 */
export function ModelsCarousel() {
  const [idx, setIdx] = useState(0)
  const total = MODELS.length
  const model = MODELS[idx]
  const go = (dir: 1 | -1) => setIdx((i) => (i + dir + total) % total)

  return (
    <div className="flex min-h-0 flex-1 flex-col">
      {/* Header */}
      <div className="mb-3 flex items-center justify-between">
        <span className="font-heading text-sm font-black uppercase tracking-wide text-brand-black">
          Modelos disponíveis
        </span>
        <span className="font-mono text-xs font-bold text-brand-black/50">
          {idx + 1}/{total}
        </span>
      </div>

      {/* Imagem + setas */}
      <div className="relative min-h-0 flex-1 overflow-hidden rounded-2xl border border-brand-black/10 bg-zinc-50">
        <div key={model.image} className="absolute inset-0 animate-in fade-in duration-300">
          <Image
            src={model.image}
            alt={model.alt}
            fill
            sizes="(max-width: 1024px) 100vw, 420px"
            className="object-contain"
          />
        </div>

        <span className="absolute left-3 top-3 z-10 inline-flex items-center rounded-full bg-white/95 px-3 py-1 text-[11px] font-bold tracking-wide text-brand-orange shadow-sm backdrop-blur">
          Algodão premium
        </span>

        <button
          type="button"
          aria-label="Modelo anterior"
          onClick={() => go(-1)}
          className="absolute left-2 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-brand-black/10 bg-white/90 shadow-md transition-colors hover:bg-brand-orange hover:text-brand-beige"
        >
          <ChevronLeft size={18} strokeWidth={2.5} />
        </button>
        <button
          type="button"
          aria-label="Próximo modelo"
          onClick={() => go(1)}
          className="absolute right-2 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-brand-black/10 bg-white/90 shadow-md transition-colors hover:bg-brand-orange hover:text-brand-beige"
        >
          <ChevronRight size={18} strokeWidth={2.5} />
        </button>
      </div>

      {/* Info do modelo */}
      <div className="mt-3 flex items-end justify-between gap-3">
        <div className="min-w-0">
          <h3 className="truncate text-lg font-bold leading-tight text-brand-black">{model.modelo}</h3>
          <p className="text-xs font-medium text-brand-black/50">Tamanhos {model.tamanhos}</p>
        </div>
        <p className="flex shrink-0 items-baseline gap-1">
          <span className="text-[11px] font-medium text-brand-black/50">A partir de</span>
          <span className="text-lg font-bold text-brand-orange">{model.preco}</span>
        </p>
      </div>

      {/* Dots */}
      <div className="mt-3 flex items-center justify-center gap-1.5">
        {MODELS.map((m, i) => (
          <button
            key={m.image}
            type="button"
            aria-label={`Ir para ${m.modelo}`}
            onClick={() => setIdx(i)}
            className={`h-2 rounded-full transition-all duration-200 ${
              i === idx ? 'w-5 bg-brand-orange' : 'w-2 bg-brand-black/20 hover:bg-brand-black/40'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
