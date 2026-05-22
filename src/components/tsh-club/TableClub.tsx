'use client'

import { Gem } from 'lucide-react'

const LEVELS = [
  { name: 'Bronze', points: '0 a 4.999', discount: '-', benefits: 'Acesso ao catálogo de atacado', color: '#CD7F32', text: 'text-white' },
  { name: 'Prata', points: '5.000 a 9.999', discount: '3%', benefits: 'Desconto em todas as compras', color: '#C0C0C0', text: 'text-black' },
  { name: 'Ouro', points: '10.000 a 24.999', discount: '6%', benefits: 'Desconto + Atendimento prioritário', color: '#FFD700', text: 'text-orange-900' },
  { name: 'Diamante', points: '25.000 a 49.999', discount: '8%', benefits: 'Desconto + Brindes exclusivos', color: '#b9f2ff', text: 'text-blue-900' },
  { name: 'Platina', points: 'Acima de 50.000', discount: '10%', benefits: 'Desconto máximo + Consultoria VIP', color: '#E5E4E2', text: 'text-zinc-800' },
]

export function TableClub() {
  return (
    <section className="py-24 bg-brand-beige border-t border-brand-black/5">
      <div className="container mx-auto max-w-5xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-heading font-extrabold mb-6 text-brand-black leading-tight">
            Compare os Níveis
          </h2>
        </div>

        <div className="hidden md:block bg-white rounded-3xl border-2 border-brand-black overflow-hidden shadow-xl">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-brand-black text-brand-beige border-b border-brand-black">
                <th className="p-6 font-heading font-bold text-lg w-1/4">Nível</th>
                <th className="p-6 font-heading font-bold text-lg w-1/4">Piso de Pontos</th>
                <th className="p-6 font-heading font-bold text-lg w-1/6 text-center">Desconto</th>
                <th className="p-6 font-heading font-bold text-lg w-1/3">Principais Benefícios</th>
              </tr>
            </thead>
            <tbody>
              {LEVELS.map((level, i) => (
                <tr key={level.name} className={`border-b border-brand-black/10 hover:bg-brand-beige/30 transition-colors ${i === LEVELS.length - 1 ? 'border-none' : ''}`}>
                  <td className="p-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center shadow-sm" style={{ backgroundColor: level.color, color: level.text }}>
                        <Gem size={20} />
                      </div>
                      <span className="font-heading font-bold text-xl text-brand-black">{level.name}</span>
                    </div>
                  </td>
                  <td className="p-6 font-bold text-brand-black/70">{level.points}</td>
                  <td className="p-6 text-center">
                    <span className="inline-block bg-brand-black text-brand-beige px-3 py-1 rounded-full font-black text-lg">
                      {level.discount}
                    </span>
                  </td>
                  <td className="p-6 font-medium text-brand-black/80">{level.benefits}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="md:hidden flex flex-col gap-6">
          {LEVELS.map((level) => (
            <div key={level.name} className="bg-white rounded-3xl p-6 border-2 border-brand-black shadow-lg">
              <div className="flex items-center gap-4 mb-6 pb-4 border-b border-brand-black/10">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-md" style={{ backgroundColor: level.color, color: level.text }}>
                  <Gem size={28} />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-2xl text-brand-black">{level.name}</h3>
                  <span className="inline-block bg-brand-black text-brand-beige px-2 py-0.5 rounded text-sm font-bold mt-1">
                    {level.discount}
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div>
                  <p className="text-xs font-bold text-brand-black/50 uppercase tracking-widest mb-1">Piso de Pontos</p>
                  <p className="font-bold text-brand-black text-lg">{level.points}</p>
                </div>
                <div>
                  <p className="text-xs font-bold text-brand-black/50 uppercase tracking-widest mb-1">Benefícios</p>
                  <p className="font-medium text-brand-black/80">{level.benefits}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
