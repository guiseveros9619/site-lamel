'use client'

import React, { useState, useRef } from 'react'
import {
  SmileySticker,
  StayBoldSticker,
  ConfidenceClubSticker,
  GoodDaysSticker,
  NoBadVibesSticker,
  Quatrefoil,
  RoundedCross,
  BlueSquircle,
  PurpleCloud,
  GridGlobe,
  SCurve,
  CurvedArrow,
  EmptyCircle
} from '@/components/ui/BrandElements'
import { RotateCcw, Sparkles } from 'lucide-react'
import gsap from 'gsap'

interface StickerInstance {
  id: string
  name: string
  component: React.ReactNode
  x: number // X coordinate in percentage (0 - 100)
  y: number // Y coordinate in percentage (0 - 100)
  rotation: number
  zIndex: number
  scale: number
}

const INITIAL_STICKERS = [
  // 1. FORMAS & ELEMENTOS
  {
    id: 'quatrefoil',
    name: 'Flor de 4 Lóbulos',
    component: <Quatrefoil className="w-16 h-16 sm:w-24 sm:h-24 fill-brand-black cursor-grab active:cursor-grabbing hover:scale-105 active:scale-95 transition-transform" />,
    x: 10,
    y: 12,
    rotation: -15,
    zIndex: 1,
    scale: 1
  },
  {
    id: 'rounded-cross',
    name: 'Cruz Verde',
    component: <RoundedCross className="w-16 h-16 sm:w-24 sm:h-24 fill-brand-green cursor-grab active:cursor-grabbing hover:scale-105 active:scale-95 transition-transform" />,
    x: 75,
    y: 10,
    rotation: 20,
    zIndex: 2,
    scale: 1
  },
  {
    id: 'blue-squircle',
    name: 'Superelipse Azul',
    component: <BlueSquircle className="w-16 h-16 sm:w-24 sm:h-24 fill-brand-blue cursor-grab active:cursor-grabbing hover:scale-105 active:scale-95 transition-transform" />,
    x: 8,
    y: 42,
    rotation: 12,
    zIndex: 3,
    scale: 1
  },
  {
    id: 'purple-cloud',
    name: 'Nuvem Lilás',
    component: <PurpleCloud className="w-20 h-16 sm:w-28 sm:h-20 fill-brand-purple cursor-grab active:cursor-grabbing hover:scale-105 active:scale-95 transition-transform" />,
    x: 40,
    y: 45,
    rotation: -8,
    zIndex: 4,
    scale: 1
  },
  {
    id: 'empty-circle',
    name: 'Círculo Outlined',
    component: <EmptyCircle className="w-16 h-16 sm:w-24 sm:h-24 text-brand-black/40 cursor-grab active:cursor-grabbing hover:scale-105 active:scale-95 transition-transform" />,
    x: 75,
    y: 45,
    rotation: 0,
    zIndex: 5,
    scale: 1
  },

  // 2. ELEMENTOS DE APOIO
  {
    id: 'grid-globe',
    name: 'Globo Orbital',
    component: <GridGlobe className="w-20 h-16 sm:w-28 sm:h-20 text-brand-black/40 cursor-grab active:cursor-grabbing hover:scale-105 active:scale-95 transition-transform" />,
    x: 75,
    y: 24,
    rotation: -12,
    zIndex: 6,
    scale: 1
  },
  {
    id: 'curved-arrow',
    name: 'Seta Curva',
    component: <CurvedArrow className="w-12 h-12 sm:w-16 sm:h-16 text-brand-black/60 cursor-grab active:cursor-grabbing hover:scale-105 active:scale-95 transition-transform" />,
    x: 26,
    y: 38,
    rotation: 30,
    zIndex: 7,
    scale: 1
  },
  {
    id: 's-curve',
    name: 'Onda S',
    component: <SCurve className="w-12 h-6 sm:w-16 sm:h-8 text-brand-black/50 cursor-grab active:cursor-grabbing hover:scale-105 active:scale-95 transition-transform" />,
    x: 58,
    y: 54,
    rotation: -15,
    zIndex: 8,
    scale: 1
  },

  // 3. STICKERS
  {
    id: 'good-days',
    name: 'Sticker Good Days',
    component: <GoodDaysSticker className="w-20 h-20 sm:w-28 sm:h-28" />,
    x: 12,
    y: 70,
    rotation: -10,
    zIndex: 9,
    scale: 1
  },
  {
    id: 'no-bad-vibes',
    name: 'Sticker No Bad Vibes',
    component: <NoBadVibesSticker className="w-28 h-16 sm:w-36 sm:h-20" />,
    x: 48,
    y: 72,
    rotation: 8,
    zIndex: 10,
    scale: 1
  },
  {
    id: 'stay-bold',
    name: 'Sticker Stay Bold',
    component: <StayBoldSticker className="w-20 h-18 sm:w-28 sm:h-24" />,
    x: 32,
    y: 75,
    rotation: -12,
    zIndex: 11,
    scale: 1
  },
  {
    id: 'confidence-club',
    name: 'Sticker Confidence Club',
    component: <ConfidenceClubSticker className="w-28 h-20 sm:w-36 sm:h-28" />,
    x: 52,
    y: 12,
    rotation: 5,
    zIndex: 12,
    scale: 1
  },
  {
    id: 'smiley',
    name: 'Sticker Smiley Amarelo',
    component: <SmileySticker className="w-20 h-20 sm:w-28 sm:h-28" />,
    x: 75,
    y: 70,
    rotation: -6,
    zIndex: 13,
    scale: 1
  }
]

export function StickerBoardSection() {
  const [stickers, setStickers] = useState<StickerInstance[]>(INITIAL_STICKERS)
  const [activeId, setActiveId] = useState<string | null>(null)
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 })
  const [maxZIndex, setMaxZIndex] = useState(20)
  const boardRef = useRef<HTMLDivElement>(null)

  const resetStickers = (animate = true) => {
    if (!animate) {
      setStickers(INITIAL_STICKERS.map(s => ({ ...s })))
      setMaxZIndex(20)
      return
    }

    // GSAP Animate reset spring style
    INITIAL_STICKERS.forEach(sticker => {
      const el = document.getElementById(`sticker-${sticker.id}`)
      if (el) {
        gsap.to(el, {
          left: `${sticker.x}%`,
          top: `${sticker.y}%`,
          rotation: sticker.rotation,
          scale: 1,
          duration: 0.8,
          ease: 'elastic.out(1, 0.75)'
        })
      }
    })

    // Reset the React states as well after the visual spring transition completes
    setTimeout(() => {
      setStickers(INITIAL_STICKERS.map(s => ({ ...s })))
      setMaxZIndex(20)
    }, 800)
  }

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>, stickerId: string) => {
    e.preventDefault()
    const stickerEl = e.currentTarget
    const rect = stickerEl.getBoundingClientRect()

    // Calculate click coordinates relative to the top-left of the element
    setDragOffset({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    })

    setActiveId(stickerId)
    const nextZ = maxZIndex + 1
    setMaxZIndex(nextZ)

    // Increase Z-index and set dragging scale
    setStickers(prev =>
      prev.map(s => {
        if (s.id === stickerId) {
          return { ...s, zIndex: nextZ, scale: 1.08 }
        }
        return s
      })
    )

    // Capture the pointer to handle movements safely outside the element bounds
    stickerEl.setPointerCapture(e.pointerId)
  }

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>, stickerId: string) => {
    if (activeId !== stickerId || !boardRef.current) return

    const boardRect = boardRef.current.getBoundingClientRect()

    // Translate absolute pointer coordinates to board container percentage values
    let newX = ((e.clientX - boardRect.left - dragOffset.x) / boardRect.width) * 100
    let newY = ((e.clientY - boardRect.top - dragOffset.y) / boardRect.height) * 100

    // Constrain inside container so stickers don't fly off screen
    newX = Math.max(-2, Math.min(newX, 90))
    newY = Math.max(-2, Math.min(newY, 90))

    setStickers(prev =>
      prev.map(s => {
        if (s.id === stickerId) {
          return { ...s, x: newX, y: newY }
        }
        return s
      })
    )
  }

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>, stickerId: string) => {
    if (activeId === stickerId) {
      setActiveId(null)
      setStickers(prev =>
        prev.map(s => {
          if (s.id === stickerId) {
            return { ...s, scale: 1 }
          }
          return s
        })
      )
      e.currentTarget.releasePointerCapture(e.pointerId)
    }
  }

  return (
    <section className="bg-brand-beige py-24 overflow-hidden border-t-2 border-brand-black/10 relative">
      <div className="container mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Title Content */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 bg-brand-pink/10 border border-brand-pink/30 text-brand-pink text-xs font-black uppercase px-3 py-1.5 rounded-full mb-4">
              <Sparkles size={12} className="animate-pulse" />
              Identidade Visual
            </div>
            <h2 className="text-4xl sm:text-5xl font-heading font-extrabold tracking-tight text-brand-black">
              Mesa de Criação &amp; Stickers
            </h2>
            <p className="text-base sm:text-lg text-brand-black/60 font-medium mt-2 max-w-xl">
              Nossa marca é construída por formas, cores vibrantes e atitude. Arraste e posicione os stickers e elementos de apoio livremente pelo mural para criar sua própria estampa!
            </p>
          </div>
          
          {/* Action button to reset */}
          <button
            onClick={() => resetStickers(true)}
            className="inline-flex items-center gap-2 rounded-full border-2 border-brand-black bg-brand-beige px-6 py-3 text-sm font-bold text-brand-black hover:bg-brand-orange hover:text-brand-beige transition-colors shadow-md shrink-0 self-start md:self-auto cursor-pointer"
          >
            <RotateCcw size={16} />
            Resetar Mural
          </button>
        </div>

        {/* Sticker Canvas Board */}
        <div
          ref={boardRef}
          className="w-full h-[500px] sm:h-[600px] bg-brand-beige border-2 border-brand-black rounded-[2.5rem] shadow-xl relative overflow-hidden select-none"
          style={{
            backgroundSize: '40px 40px',
            backgroundImage: `
              linear-gradient(to right, rgba(17, 17, 17, 0.05) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(17, 17, 17, 0.05) 1px, transparent 1px)
            `
          }}
        >
          {/* Helpful indicator text */}
          <div className="absolute bottom-6 right-6 bg-brand-orange text-brand-beige text-xs font-bold px-3 py-1.5 rounded-full z-10 opacity-70 flex items-center gap-1.5 pointer-events-none">
            <span>👉 Arraste os adesivos para personalizar a mesa!</span>
          </div>

          {/* Central brand mark background watermark */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.02] select-none">
            <span className="text-[12rem] sm:text-[18rem] font-heading font-black">TSH</span>
          </div>

          {/* Render individual stickers */}
          {stickers.map((sticker) => (
            <div
              key={sticker.id}
              id={`sticker-${sticker.id}`}
              onPointerDown={(e) => handlePointerDown(e, sticker.id)}
              onPointerMove={(e) => handlePointerMove(e, sticker.id)}
              onPointerUp={(e) => handlePointerUp(e, sticker.id)}
              className="absolute touch-none"
              style={{
                left: `${sticker.x}%`,
                top: `${sticker.y}%`,
                zIndex: sticker.zIndex,
                transform: `rotate(${sticker.rotation}deg) scale(${sticker.scale})`,
                transition: activeId === sticker.id ? 'none' : 'transform 0.15s ease-out',
                WebkitUserSelect: 'none',
                userSelect: 'none'
              }}
            >
              {sticker.component}
            </div>
          ))}

        </div>

      </div>
    </section>
  )
}
