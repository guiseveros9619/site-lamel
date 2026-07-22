'use client'

import { useRef, useState } from 'react'
import { Palette, Copy, Check } from 'lucide-react'

// Converte HSV (h:0-360, s/v:0-1) em RGB (0-255)
function hsvToRgb(h: number, s: number, v: number) {
  const c = v * s
  const x = c * (1 - Math.abs(((h / 60) % 2) - 1))
  const m = v - c
  let r = 0
  let g = 0
  let b = 0
  if (h < 60) [r, g, b] = [c, x, 0]
  else if (h < 120) [r, g, b] = [x, c, 0]
  else if (h < 180) [r, g, b] = [0, c, x]
  else if (h < 240) [r, g, b] = [0, x, c]
  else if (h < 300) [r, g, b] = [x, 0, c]
  else [r, g, b] = [c, 0, x]
  return {
    r: Math.round((r + m) * 255),
    g: Math.round((g + m) * 255),
    b: Math.round((b + m) * 255),
  }
}

function toHex(n: number) {
  return n.toString(16).padStart(2, '0').toUpperCase()
}

// Converte RGB (0-255) em CMYK (0-100%) — o formato que a gráfica usa
function rgbToCmyk(r: number, g: number, b: number) {
  const rr = r / 255
  const gg = g / 255
  const bb = b / 255
  const k = 1 - Math.max(rr, gg, bb)
  if (k >= 1) return { c: 0, m: 0, y: 0, k: 100 }
  return {
    c: Math.round(((1 - rr - k) / (1 - k)) * 100),
    m: Math.round(((1 - gg - k) / (1 - k)) * 100),
    y: Math.round(((1 - bb - k) / (1 - k)) * 100),
    k: Math.round(k * 100),
  }
}

/**
 * Seletor de cor interativo do Passo 1.
 * Área de saturação/brilho arrastável + barra de matiz (hue), com leitura HEX/CMYK ao vivo.
 * Começa no magenta da marca (#D50084).
 */
export function ColorPicker() {
  // Começa exatamente no magenta da marca: HSV(322.82, 1, 0.8353) => rgb(213, 0, 132) = #D50084
  const [hsv, setHsv] = useState({ h: 322.82, s: 1, v: 0.8353 })
  const [copiedField, setCopiedField] = useState<'hex' | 'cmyk' | null>(null)
  const svRef = useRef<HTMLDivElement>(null)
  const dragging = useRef(false)

  const { r, g, b } = hsvToRgb(hsv.h, hsv.s, hsv.v)
  const hex = `#${toHex(r)}${toHex(g)}${toHex(b)}`
  const { c, m, y, k } = rgbToCmyk(r, g, b)
  const cmyk = `${c}%, ${m}%, ${y}%, ${k}%`

  const updateSV = (clientX: number, clientY: number) => {
    const el = svRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const s = Math.min(1, Math.max(0, (clientX - rect.left) / rect.width))
    const v = Math.min(1, Math.max(0, 1 - (clientY - rect.top) / rect.height))
    setHsv((p) => ({ ...p, s, v }))
  }

  const handleDown = (e: React.PointerEvent<HTMLDivElement>) => {
    dragging.current = true
    e.currentTarget.setPointerCapture(e.pointerId)
    updateSV(e.clientX, e.clientY)
  }
  const handleMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!dragging.current) return
    updateSV(e.clientX, e.clientY)
  }
  const handleUp = () => {
    dragging.current = false
  }

  const copy = async (text: string, field: 'hex' | 'cmyk') => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedField(field)
      setTimeout(() => setCopiedField(null), 1200)
    } catch {
      /* clipboard indisponível — ignora silenciosamente */
    }
  }

  return (
    <div className="flex min-h-0 flex-1 flex-col">
      {/* Header */}
      <div className="mb-4 flex items-center gap-2">
        <Palette size={18} className="shrink-0 text-brand-orange" />
        <span className="font-heading text-sm font-black uppercase tracking-wide text-brand-black">
          Seletor de cores
        </span>
      </div>

      {/* Área de saturação (X) e brilho (Y) — arrastável */}
      <div
        ref={svRef}
        onPointerDown={handleDown}
        onPointerMove={handleMove}
        onPointerUp={handleUp}
        className="relative min-h-[140px] flex-1 cursor-crosshair touch-none overflow-hidden rounded-xl border border-brand-black/10"
        style={{ backgroundColor: `hsl(${hsv.h}, 100%, 50%)` }}
      >
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, #fff, rgba(255,255,255,0))' }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, #000, rgba(0,0,0,0))' }} />
        <div
          className="pointer-events-none absolute h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white shadow-[0_0_0_1px_rgba(0,0,0,0.35)]"
          style={{ left: `${hsv.s * 100}%`, top: `${(1 - hsv.v) * 100}%`, backgroundColor: hex }}
        />
      </div>

      {/* Barra de matiz (hue) */}
      <input
        type="range"
        min={0}
        max={360}
        value={hsv.h}
        onChange={(e) => setHsv((p) => ({ ...p, h: Number(e.target.value) }))}
        aria-label="Matiz da cor"
        className="hue-slider mt-4 w-full"
      />

      {/* Leitura HEX + CMYK (código que a gráfica usa) */}
      <div className="mt-4 flex items-center gap-3">
        <span
          className="h-12 w-12 shrink-0 rounded-xl border border-brand-black/10"
          style={{ backgroundColor: hex }}
        />
        <div className="flex flex-1 flex-wrap gap-2">
          <button
            type="button"
            onClick={() => copy(hex, 'hex')}
            title="Copiar código HEX"
            className="group inline-flex items-center gap-2 rounded-lg border border-brand-black/10 bg-brand-beige/60 px-2.5 py-1.5 transition-colors hover:border-brand-orange/40"
          >
            <span className="text-[9px] font-bold uppercase tracking-wider text-brand-black/40">HEX</span>
            <span className="font-mono text-xs font-bold text-brand-black">{hex}</span>
            {copiedField === 'hex' ? (
              <Check size={13} className="text-brand-green" />
            ) : (
              <Copy size={13} className="text-brand-black/40 group-hover:text-brand-orange" />
            )}
          </button>
          <button
            type="button"
            onClick={() => copy(cmyk, 'cmyk')}
            title="Copiar código CMYK (para a gráfica)"
            className="group inline-flex items-center gap-2 rounded-lg border border-brand-black/10 bg-brand-beige/60 px-2.5 py-1.5 transition-colors hover:border-brand-orange/40"
          >
            <span className="text-[9px] font-bold uppercase tracking-wider text-brand-black/40">CMYK</span>
            <span className="font-mono text-xs font-bold text-brand-black">{cmyk}</span>
            {copiedField === 'cmyk' ? (
              <Check size={13} className="text-brand-green" />
            ) : (
              <Copy size={13} className="text-brand-black/40 group-hover:text-brand-orange" />
            )}
          </button>
        </div>
      </div>
    </div>
  )
}
