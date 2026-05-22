'use client'

import { useMemo, useState } from 'react'
import { Calculator, Gem, TrendingUp, Sparkles } from 'lucide-react'

const LEVELS = [
  { name: 'Platina', minPoints: 50000, discount: 10, color: '#E5E4E2', text: 'text-zinc-800' },
  { name: 'Diamante', minPoints: 25000, discount: 8, color: '#b9f2ff', text: 'text-blue-900' },
  { name: 'Ouro', minPoints: 10000, discount: 6, color: '#FFD700', text: 'text-orange-900' },
  { name: 'Prata', minPoints: 5000, discount: 3, color: '#C0C0C0', text: 'text-black/80' },
  { name: 'Bronze', minPoints: 0, discount: 0, color: '#CD7F32', text: 'text-white' },
]

const SLIDER_MAX = 100000

const integerFormatter = new Intl.NumberFormat('pt-BR', {
  maximumFractionDigits: 0,
  minimumFractionDigits: 0,
})

const formatBRL = (value: number) => integerFormatter.format(Math.round(value))

export function CalculatorClub() {
  const [monthlySpend, setMonthlySpend] = useState<number>(5000)

  const currentLevel = LEVELS.find((l) => monthlySpend >= l.minPoints) || LEVELS[LEVELS.length - 1]
  const currentIndex = LEVELS.findIndex((l) => l.name === currentLevel.name)
  const nextLevel = currentIndex > 0 ? LEVELS[currentIndex - 1] : null

  const monthlySavings = (monthlySpend * currentLevel.discount) / 100
  const yearlySavings = monthlySavings * 12
  const pointsToNext = nextLevel ? nextLevel.minPoints - monthlySpend : 0

  const progress = useMemo(
    () => Math.min(100, Math.max(0, (monthlySpend / SLIDER_MAX) * 100)),
    [monthlySpend],
  )

  return (
    <section className="py-24 bg-brand-beige">
      <div className="container mx-auto max-w-5xl px-6 lg:px-8">
        <div className="bg-white rounded-[2.5rem] p-8 lg:p-12 shadow-xl border-2 border-brand-black">
          <div className="text-center mb-12">
            <div className="w-16 h-16 rounded-2xl bg-brand-purple text-brand-black flex items-center justify-center mx-auto mb-6 shadow-sm border border-brand-black/10">
              <Calculator size={32} />
            </div>
            <h2 className="text-4xl font-heading font-extrabold mb-4 text-brand-black">
              Simule seus ganhos
            </h2>
            <p className="text-brand-black/70 font-medium">
              Veja quanto você pode economizar ajustando seu volume de compras.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-stretch">
            {/* LEFT: input panel */}
            <div className="flex flex-col justify-between gap-8 bg-brand-beige/20 p-8 rounded-3xl border border-brand-black/5">
              <div>
                <label
                  htmlFor="spend-slider"
                  className="block text-xs font-black text-brand-black/50 mb-4 uppercase tracking-widest"
                >
                  Quanto você compra por mês?
                </label>

                <div
                  className="flex items-baseline gap-1.5 mb-6 text-brand-black"
                  style={{ fontVariantNumeric: 'tabular-nums' }}
                >
                  <span className="text-lg font-bold text-brand-black/40">R$</span>
                  <span className="text-4xl sm:text-5xl font-heading font-black tracking-tight">
                    {formatBRL(monthlySpend)}
                  </span>
                </div>

                <div className="relative mb-6">
                  <input
                    id="spend-slider"
                    type="range"
                    min="0"
                    max={SLIDER_MAX}
                    step="500"
                    value={monthlySpend}
                    onChange={(e) => setMonthlySpend(Number(e.target.value))}
                    aria-valuetext={`R$ ${formatBRL(monthlySpend)} por mês`}
                    style={{
                      background: `linear-gradient(to right, #C6B6FF 0%, #C6B6FF ${progress}%, rgba(17,17,17,0.08) ${progress}%, rgba(17,17,17,0.08) 100%)`,
                    }}
                    className="w-full h-2 rounded-full appearance-none cursor-pointer outline-none transition-shadow focus-visible:ring-2 focus-visible:ring-brand-purple focus-visible:ring-offset-2 focus-visible:ring-offset-white
                      [&::-webkit-slider-runnable-track]:rounded-full
                      [&::-webkit-slider-runnable-track]:h-2
                      [&::-webkit-slider-thumb]:appearance-none
                      [&::-webkit-slider-thumb]:-mt-2
                      [&::-webkit-slider-thumb]:h-6
                      [&::-webkit-slider-thumb]:w-6
                      [&::-webkit-slider-thumb]:rounded-full
                      [&::-webkit-slider-thumb]:bg-[#C6B6FF]
                      [&::-webkit-slider-thumb]:border-4
                      [&::-webkit-slider-thumb]:border-white
                      [&::-webkit-slider-thumb]:shadow-[0_2px_6px_rgba(198,182,255,0.4)]
                      [&::-webkit-slider-thumb]:cursor-grab
                      [&::-webkit-slider-thumb]:active:cursor-grabbing
                      [&::-webkit-slider-thumb]:transition-transform
                      [&::-webkit-slider-thumb]:hover:scale-110
                      [&::-moz-range-track]:h-2
                      [&::-moz-range-track]:rounded-full
                      [&::-moz-range-track]:bg-transparent
                      [&::-moz-range-thumb]:h-6
                      [&::-moz-range-thumb]:w-6
                      [&::-moz-range-thumb]:rounded-full
                      [&::-moz-range-thumb]:bg-[#C6B6FF]
                      [&::-moz-range-thumb]:border-4
                      [&::-moz-range-thumb]:border-white
                      [&::-moz-range-thumb]:shadow-[0_2px_6px_rgba(198,182,255,0.4)]
                      [&::-moz-range-thumb]:cursor-grab
                      [&::-moz-range-thumb]:active:cursor-grabbing"
                  />
                </div>

                <div className="flex justify-between text-xs font-bold text-brand-black/30 mb-0">
                  <span>R$ 0</span>
                  <span>R$ 100k+</span>
                </div>
              </div>

              {nextLevel && (
                <div className="bg-brand-yellow/10 text-brand-black p-5 rounded-2xl border border-brand-yellow/30 flex items-start gap-4 shadow-sm min-h-[92px] mt-6">
                  <div className="w-8 h-8 rounded-lg bg-brand-yellow/20 flex items-center justify-center shrink-0 mt-0.5">
                    <TrendingUp size={18} className="text-brand-yellow" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-brand-black mb-1">
                      Falta pouco!
                    </p>
                    <p className="text-sm font-medium text-brand-black/70 leading-relaxed">
                      Faltam apenas{' '}
                      <span
                        className="font-extrabold text-brand-yellow whitespace-nowrap"
                        style={{ fontVariantNumeric: 'tabular-nums' }}
                      >
                        R$ {formatBRL(pointsToNext)}
                      </span>{' '}
                      em compras mensais para atingir o nível{' '}
                      <span className="font-extrabold text-brand-black">{nextLevel.name}</span> e ganhar{' '}
                      <span className="font-extrabold text-brand-black">{nextLevel.discount}%</span> de desconto.
                    </p>
                  </div>
                </div>
              )}
              {!nextLevel && (
                <div className="bg-emerald-50/60 text-emerald-950 p-5 rounded-2xl border border-emerald-500/10 flex items-start gap-4 shadow-sm min-h-[92px] mt-6">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Sparkles size={18} className="text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-emerald-950 mb-1">
                      Parabéns!
                    </p>
                    <p className="text-sm font-medium text-emerald-900/80 leading-relaxed">
                      Você atingiu o nível máximo do TSH Club. Aproveite o desconto máximo e a Consultoria VIP!
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* RIGHT: result panel */}
            <div className="flex flex-col gap-6 justify-center h-full">
              {/* Level card */}
              <div
                className="flex items-center justify-between p-5 rounded-2xl border-2 transition-all duration-300 shadow-sm"
                style={{
                  borderColor: currentLevel.color,
                  backgroundColor: `${currentLevel.color}12`,
                }}
              >
                <div className="flex items-center gap-4">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center font-bold shadow-md border-2 border-white transition-all duration-300 relative overflow-hidden"
                    style={{ backgroundColor: currentLevel.color }}
                  >
                    <Gem size={28} className={`${currentLevel.text} drop-shadow-sm`} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-brand-black/40 uppercase tracking-widest mb-0.5">
                      Seu Nível Atual
                    </p>
                    <h4 className="text-2xl font-heading font-black text-brand-black">
                      {currentLevel.name}
                    </h4>
                  </div>
                </div>

                <div className="bg-brand-black text-brand-beige px-4 py-2 rounded-xl flex flex-col items-center justify-center shadow-md select-none">
                  <span className="text-lg font-heading font-black leading-none">{currentLevel.discount}%</span>
                  <span className="text-[9px] font-bold uppercase tracking-wider text-brand-beige/60 mt-0.5">OFF</span>
                </div>
              </div>

              {/* Economia Mensal */}
              <div className="bg-brand-beige/10 p-5 sm:p-6 rounded-2xl border border-brand-black/5 flex items-center justify-between gap-6 shadow-sm">
                <div>
                  <span className="text-[11px] font-bold text-brand-black/40 uppercase tracking-[0.18em] block mb-1">
                    Economia Mensal
                  </span>
                  <p className="text-xs font-medium text-brand-black/60">
                    Sua economia estimada a cada mês de compras.
                  </p>
                </div>
                <div className="text-right shrink-0">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-700/60 block mb-0.5">
                    R$
                  </span>
                  <span 
                    className="font-heading font-black text-emerald-800 text-3xl sm:text-4xl tracking-tight"
                    style={{ fontVariantNumeric: 'tabular-nums' }}
                  >
                    {formatBRL(monthlySavings)}
                  </span>
                </div>
              </div>
              
              {/* Economia Anual */}
              <div className="bg-brand-green/5 p-5 sm:p-6 rounded-2xl border-2 border-brand-green/25 relative overflow-hidden flex items-center justify-between gap-6 shadow-sm">
                <div className="absolute top-0 right-0 w-24 h-24 bg-brand-green/10 rounded-bl-full pointer-events-none" />
                <div className="relative">
                  <span className="text-[11px] font-extrabold text-brand-green uppercase tracking-[0.18em] block mb-1">
                    Economia Anual
                  </span>
                  <p className="text-xs font-medium text-brand-black/60 max-w-[180px] sm:max-w-[220px]">
                    Acumulado que você poupa em 1 ano de parceria.
                  </p>
                </div>
                <div className="text-right shrink-0 relative">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-green/70 block mb-0.5">
                    R$
                  </span>
                  <span 
                    className="font-heading font-black text-brand-green text-4xl sm:text-5xl tracking-tight"
                    style={{ fontVariantNumeric: 'tabular-nums' }}
                  >
                    {formatBRL(yearlySavings)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
