'use client'

import React from 'react'

// ==========================================
// 1. FORMAS & ELEMENTOS
// ==========================================

interface ElementProps extends React.SVGProps<SVGSVGElement> {
  className?: string
}

/**
 * Quatrefoil / Flor de 4 Lóbulos (Forma Preta/Verde)
 */
export function Quatrefoil({ className = 'w-24 h-24 fill-brand-black', ...props }: ElementProps) {
  return (
    <svg viewBox="0 0 100 100" className={className} {...props}>
      <path d="M 50,30 A 20,20 0 1,1 70,50 A 20,20 0 1,1 50,70 A 20,20 0 1,1 30,50 A 20,20 0 1,1 50,30 Z" />
    </svg>
  )
}

/**
 * Cápsula Laranja Horizontal (Pill shape)
 */
export function OrangeCapsule({ className = 'w-32 h-14 bg-brand-orange rounded-full shadow-md', ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`${className} flex items-center justify-center`} {...props}>
      <span className="text-transparent">Tshirteria</span>
    </div>
  )
}

/**
 * Cruz Arredondada / Flor Geométrica Verde
 */
export function RoundedCross({ className = 'w-24 h-24 fill-brand-green', shadow = false, ...props }: ElementProps & { shadow?: boolean }) {
  const pathData = "M 30,30 A 20,20 0 0 1 70,30 A 20,20 0 0 1 70,70 A 20,20 0 0 1 30,70 A 20,20 0 0 1 30,30 Z"
  return (
    <svg viewBox="-5 -5 110 110" className={className} {...props}>
      {shadow && <path d={pathData} fill="#111111" transform="translate(4, 4)" />}
      <path d={pathData} />
    </svg>
  )
}

/**
 * Squircle Azul (Rounded Square superellipse)
 */
export function BlueSquircle({ className = 'w-24 h-24 fill-brand-blue', ...props }: ElementProps) {
  return (
    <svg viewBox="0 0 100 100" className={className} {...props}>
      <path d="M 50,5 C 80,5 95,20 95,50 C 95,80 80,95 50,95 C 20,95 5,80 5,50 C 5,20 20,5 50,5 Z" />
    </svg>
  )
}

/**
 * Nuvem Lilás (Purple cloud)
 */
export function PurpleCloud({ className = 'w-28 h-20 fill-brand-purple', ...props }: ElementProps) {
  return (
    <svg viewBox="0 0 100 100" className={className} {...props}>
      <path d="M 25,70 L 75,70 A 15,15 0 0,0 75,45 A 20,20 0 0,0 42,35 A 16,16 0 0,0 21,50 A 12,12 0 0,0 25,70 Z" />
    </svg>
  )
}

/**
 * Círculo Vazado
 */
export function EmptyCircle({ className = 'w-24 h-24 text-brand-black', ...props }: ElementProps) {
  return (
    <svg viewBox="0 0 100 100" className={className} {...props}>
      <circle cx="50" cy="50" r="42" stroke="currentColor" strokeWidth="2.5" fill="none" />
    </svg>
  )
}

// ==========================================
// 2. ELEMENTOS DE APOIO
// ==========================================

/**
 * Globo Wireframe Orbital (Grid Globe)
 */
export function GridGlobe({ className = 'w-28 h-20 text-brand-black', ...props }: ElementProps) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <ellipse cx="50" cy="50" rx="45" ry="22" />
      <line x1="5" y1="50" x2="95" y2="50" />
      <path d="M 12,40 Q 50,44 88,40" />
      <path d="M 12,60 Q 50,56 88,60" />
      <line x1="50" y1="28" x2="50" y2="72" />
      <path d="M 50,28 Q 32,50 50,72" />
      <path d="M 50,28 Q 14,50 50,72" />
      <path d="M 50,28 Q 68,50 50,72" />
      <path d="M 50,28 Q 86,50 50,72" />
    </svg>
  )
}

/**
 * Estrela de Brilho de 4 Pontas (Sparkle)
 */
export function SparkleElement({ className = 'w-12 h-12 fill-brand-black', ...props }: ElementProps) {
  return (
    <svg viewBox="0 0 100 100" className={className} {...props}>
      <path d="M 50,10 Q 50,50 90,50 Q 50,50 50,90 Q 50,50 10,50 Q 50,50 50,10 Z" />
    </svg>
  )
}

/**
 * Seta Curva
 */
export function CurvedArrow({ className = 'w-16 h-16 text-brand-black', ...props }: ElementProps) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M 20,65 C 25,35 55,25 78,38" />
      <path d="M 66,39 L 78,38 L 76,50" />
    </svg>
  )
}

/**
 * S-Curve Ondulada (Wavy Wave)
 */
export function SCurve({ className = 'w-16 h-8 text-brand-black', ...props }: ElementProps) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" {...props}>
      <path d="M 15,50 C 35,30 45,70 65,50 S 85,30 95,45" />
    </svg>
  )
}

// ==========================================
// 3. STICKERS REALISTAS
// ==========================================

/**
 * Sticker: "GOOD DAYS" (Círculo Roxo)
 */
export function GoodDaysSticker({ className = 'w-28 h-28', ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`${className} flex items-center justify-center rounded-full bg-brand-purple border-[3px] border-brand-black shadow-[4px_4px_0px_#111] select-none cursor-grab active:cursor-grabbing hover:scale-105 active:scale-95 transition-transform duration-100 flex-col rotate-[-4deg]`}
      {...props}
    >
      <span className="font-heading font-black text-brand-black text-lg tracking-tight leading-none uppercase text-center">
        Good<br />Days
      </span>
    </div>
  )
}

/**
 * Sticker: "NO BAD VIBES" (Oval Branco Slanted)
 */
export function NoBadVibesSticker({ className = 'w-36 h-20', ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`${className} flex items-center justify-center rounded-[50%_50%] bg-white border-[3px] border-brand-black shadow-[4px_4px_0px_#111] select-none cursor-grab active:cursor-grabbing hover:scale-105 active:scale-95 transition-transform duration-100 rotate-[8deg] px-2 text-center`}
      {...props}
    >
      <span className="font-heading font-black text-brand-black text-sm tracking-wide leading-none uppercase">
        No Bad<br />Vibes
      </span>
    </div>
  )
}

interface StayBoldStickerProps extends React.HTMLAttributes<HTMLDivElement> {
  color?: 'orange' | 'pink' | 'green' | 'blue' | 'purple' | 'yellow'
}

/**
 * Sticker: "stay bold" (Pebble Orgânico Laranja)
 */
export function StayBoldSticker({ className = 'w-28 h-24', color = 'orange', ...props }: StayBoldStickerProps) {
  const bgClasses = {
    orange: 'bg-brand-orange',
    pink: 'bg-brand-pink',
    green: 'bg-brand-green',
    blue: 'bg-brand-blue',
    purple: 'bg-brand-purple',
    yellow: 'bg-brand-yellow',
  }

  const activeBg = bgClasses[color] || bgClasses.orange

  return (
    <div
      className={`${className} flex items-center justify-center rounded-[40%_60%_50%_50%/50%_40%_60%_50%] ${activeBg} border-[3px] border-brand-black shadow-[4px_4px_0px_#111] select-none cursor-grab active:cursor-grabbing hover:scale-105 active:scale-95 transition-transform duration-100 rotate-[-8deg] p-4 text-center`}
      {...props}
    >
      <span className="font-heading font-black text-brand-black text-lg leading-tight tracking-tight uppercase">
        Stay<br />Bold
      </span>
    </div>
  )
}

/**
 * Sticker: "Tshirteria TSH Club" (Blob Escuro Orgânico com estrelas)
 */
export function ConfidenceClubSticker({ className = 'w-36 h-28', ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`${className} flex items-center justify-center rounded-[30%_70%_50%_50%/40%_40%_60%_60%] bg-brand-orange border-[3px] border-brand-orange shadow-[4px_4px_0px_rgba(255,255,255,0.4)] select-none cursor-grab active:cursor-grabbing hover:scale-105 active:scale-95 transition-transform duration-100 rotate-[4deg] p-4 flex-col text-center`}
      {...props}
    >
      <div className="flex items-center gap-1.5 justify-center mb-1">
        <SparkleElement className="w-3.5 h-3.5 fill-white" />
        <span className="font-heading font-black text-brand-green text-[10px] tracking-wider uppercase leading-none">
          Tshirteria
        </span>
        <SparkleElement className="w-3.5 h-3.5 fill-white" />
      </div>
      <span className="font-heading font-black text-brand-green text-lg tracking-wider uppercase leading-none">
        TSH Club
      </span>
    </div>
  )
}

/**
 * Sticker: Smiley Face (Amarelo)
 */
export function SmileySticker({ className = 'w-28 h-28', ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`${className} flex items-center justify-center select-none cursor-grab active:cursor-grabbing hover:scale-105 active:scale-95 transition-transform duration-100 rotate-[-6deg]`}
      {...props}
    >
      <svg viewBox="0 0 100 100" className="w-full h-full">
        {/* Sombra sólida manual para evitar que o filtro de CSS duplique os traços do sorriso */}
        <circle cx="54" cy="54" r="43" fill="#111111" />
        {/* Círculo amarelo principal do adesivo */}
        <circle cx="50" cy="50" r="43" fill="#FFD34D" stroke="#111111" strokeWidth="3.5" />
        {/* Olhos ovais verticais simétricos */}
        <ellipse cx="38" cy="38" rx="4.5" ry="11" fill="#111111" />
        <ellipse cx="62" cy="38" rx="4.5" ry="11" fill="#111111" />
        {/* Curva única e limpa do Sorriso */}
        <path d="M 32,54 A 20,20 0 0,0 68,54" fill="none" stroke="#111111" strokeWidth="4.5" strokeLinecap="round" />
      </svg>
    </div>
  )
}
