import type { LucideIcon } from 'lucide-react'
import type { ReactNode } from 'react'

type HeroEyebrowVariant =
  | 'light'
  | 'light-pink'
  | 'light-green'
  | 'light-purple'
  | 'light-blue'
  | 'light-yellow'
  | 'orange'
  | 'pink'
  | 'green'
  | 'purple'
  | 'blue'
  | 'yellow'
  | 'dark'

interface HeroEyebrowProps {
  icon: LucideIcon
  children: ReactNode
  variant?: HeroEyebrowVariant
  uppercase?: boolean
  className?: string
}

const variantStyles: Record<
  HeroEyebrowVariant,
  { wrap: string; chip: string; chipIcon: string }
> = {
  light: {
    wrap: 'border-brand-black/10 bg-white/70 text-brand-black backdrop-blur-sm shadow-[0_1px_0_rgba(17,17,17,0.04),0_8px_30px_-18px_rgba(17,17,17,0.25)]',
    chip: 'bg-brand-orange',
    chipIcon: 'text-brand-black',
  },
  'light-pink': {
    wrap: 'border-brand-black/10 bg-white/70 text-brand-black backdrop-blur-sm shadow-[0_1px_0_rgba(17,17,17,0.04),0_8px_30px_-18px_rgba(17,17,17,0.25)]',
    chip: 'bg-brand-pink',
    chipIcon: 'text-brand-black',
  },
  'light-green': {
    wrap: 'border-brand-black/10 bg-white/70 text-brand-black backdrop-blur-sm shadow-[0_1px_0_rgba(17,17,17,0.04),0_8px_30px_-18px_rgba(17,17,17,0.25)]',
    chip: 'bg-brand-green',
    chipIcon: 'text-brand-black',
  },
  'light-purple': {
    wrap: 'border-brand-black/10 bg-white/70 text-brand-black backdrop-blur-sm shadow-[0_1px_0_rgba(17,17,17,0.04),0_8px_30px_-18px_rgba(17,17,17,0.25)]',
    chip: 'bg-brand-purple',
    chipIcon: 'text-brand-black',
  },
  'light-blue': {
    wrap: 'border-brand-black/10 bg-white/70 text-brand-black backdrop-blur-sm shadow-[0_1px_0_rgba(17,17,17,0.04),0_8px_30px_-18px_rgba(17,17,17,0.25)]',
    chip: 'bg-brand-blue',
    chipIcon: 'text-brand-black',
  },
  'light-yellow': {
    wrap: 'border-brand-black/10 bg-white/70 text-brand-black backdrop-blur-sm shadow-[0_1px_0_rgba(17,17,17,0.04),0_8px_30px_-18px_rgba(17,17,17,0.25)]',
    chip: 'bg-brand-yellow',
    chipIcon: 'text-brand-black',
  },
  orange: {
    wrap: 'border-brand-orange/30 bg-brand-orange/10 text-brand-orange shadow-[0_1px_0_rgba(255,138,76,0.1),0_10px_30px_-18px_rgba(255,138,76,0.45)]',
    chip: 'bg-brand-orange',
    chipIcon: 'text-brand-black',
  },
  pink: {
    wrap: 'border-brand-pink/30 bg-brand-pink/10 text-brand-pink shadow-[0_1px_0_rgba(255,158,198,0.1),0_10px_30px_-18px_rgba(255,158,198,0.45)]',
    chip: 'bg-brand-pink',
    chipIcon: 'text-brand-black',
  },
  green: {
    wrap: 'border-brand-green/30 bg-brand-green/10 text-brand-green shadow-[0_1px_0_rgba(123,196,127,0.1),0_10px_30px_-18px_rgba(123,196,127,0.45)]',
    chip: 'bg-brand-green',
    chipIcon: 'text-brand-black',
  },
  purple: {
    wrap: 'border-brand-purple/30 bg-brand-purple/10 text-brand-purple shadow-[0_1px_0_rgba(198,182,255,0.1),0_10px_30px_-18px_rgba(198,182,255,0.45)]',
    chip: 'bg-brand-purple',
    chipIcon: 'text-brand-black',
  },
  blue: {
    wrap: 'border-brand-blue/30 bg-brand-blue/10 text-brand-blue shadow-[0_1px_0_rgba(127,167,255,0.1),0_10px_30px_-18px_rgba(127,167,255,0.45)]',
    chip: 'bg-brand-blue',
    chipIcon: 'text-brand-black',
  },
  yellow: {
    wrap: 'border-brand-yellow/30 bg-brand-yellow/10 text-brand-yellow shadow-[0_1px_0_rgba(255,211,77,0.1),0_10px_30px_-18px_rgba(255,211,77,0.45)]',
    chip: 'bg-brand-yellow',
    chipIcon: 'text-brand-black',
  },
  dark: {
    wrap: 'border-brand-black/40 bg-brand-black text-brand-orange shadow-[0_1px_0_rgba(255,138,76,0.06),0_12px_30px_-18px_rgba(17,17,17,0.55)]',
    chip: 'bg-brand-orange',
    chipIcon: 'text-brand-black',
  },
}

export function HeroEyebrow({
  icon: Icon,
  children,
  variant = 'light',
  uppercase = true,
  className = '',
}: HeroEyebrowProps) {
  const styles = variantStyles[variant]

  return (
    <span
      className={`inline-flex items-center gap-2.5 h-10 pl-1 pr-4 rounded-full border text-[11px] sm:text-[12px] font-bold tracking-[0.18em] ${
        uppercase ? 'uppercase' : ''
      } ${styles.wrap} ${className}`}
    >
      <span
        className={`flex h-8 w-8 items-center justify-center rounded-full ${styles.chip}`}
      >
        <Icon size={15} strokeWidth={2.5} aria-hidden="true" className={styles.chipIcon} />
      </span>
      <span className="whitespace-nowrap">{children}</span>
    </span>
  )
}
