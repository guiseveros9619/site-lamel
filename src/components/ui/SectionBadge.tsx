import type { ReactNode } from 'react'

type SectionBadgeVariant =
  | 'orange'
  | 'yellow'
  | 'green'
  | 'blue'
  | 'purple'
  | 'pink'
  | 'light-pink'
  | 'dark'
  | 'dark-orange'
  | 'dark-yellow'
  | 'dark-green'
  | 'dark-blue'
  | 'dark-purple'
  | 'dark-pink'

interface SectionBadgeProps {
  children: ReactNode
  className?: string
  variant?: SectionBadgeVariant
}

export function SectionBadge({
  children,
  className = '',
  variant = 'orange',
}: SectionBadgeProps) {
  const variantStyles: Record<SectionBadgeVariant, string> = {
    orange: 'bg-brand-orange/10 text-brand-orange border-brand-orange/20',
    yellow: 'bg-brand-yellow/10 text-brand-yellow border-brand-yellow/20',
    green: 'bg-brand-green/10 text-brand-green border-brand-green/20',
    blue: 'bg-brand-blue/10 text-brand-blue border-brand-blue/20',
    purple: 'bg-brand-purple/10 text-brand-purple border-brand-purple/20',
    pink: 'bg-brand-pink/10 text-brand-pink border-brand-pink/20',
    'light-pink': 'bg-brand-pink text-brand-black border-brand-black/10',
    dark: 'bg-brand-orange text-brand-beige border-brand-orange/30',
    'dark-orange': 'bg-brand-orange text-brand-beige border-brand-orange/30',
    'dark-yellow': 'bg-brand-orange text-brand-beige border-brand-orange/30',
    'dark-green': 'bg-brand-orange text-brand-beige border-brand-orange/30',
    'dark-blue': 'bg-brand-orange text-brand-beige border-brand-orange/30',
    'dark-purple': 'bg-brand-orange text-brand-beige border-brand-orange/30',
    'dark-pink': 'bg-brand-orange text-brand-beige border-brand-orange/30',
  }

  return (
    <span
      className={`inline-flex px-4 py-1.5 rounded-full border text-sm font-bold tracking-widest uppercase items-center justify-center ${variantStyles[variant]} ${className}`}
    >
      {children}
    </span>
  )
}
