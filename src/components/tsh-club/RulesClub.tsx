'use client'

import { Hourglass, Activity } from 'lucide-react'

export function RulesClub() {
  return (
    <section className="py-24 bg-brand-black text-brand-beige border-t border-brand-beige/10">
      <div className="container mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-brand-beige/5 p-8 lg:p-12 rounded-3xl border border-brand-beige/10 hover:border-brand-purple/50 transition-colors">
            <div className="w-14 h-14 rounded-2xl bg-brand-purple text-brand-black flex items-center justify-center mb-8">
              <Hourglass size={28} />
            </div>
            <h3 className="text-3xl font-heading font-extrabold mb-4">Pontos têm validade</h3>
            <p className="text-brand-beige/70 font-medium leading-relaxed text-lg">
              Seus pontos têm prazo para serem utilizados em mudanças de nível. A cada virada de mês, os pontos que venceram são descontados do seu saldo automaticamente.
            </p>
          </div>
          <div className="bg-brand-beige/5 p-8 lg:p-12 rounded-3xl border border-brand-beige/10 hover:border-brand-blue/50 transition-colors">
            <div className="w-14 h-14 rounded-2xl bg-brand-blue text-brand-black flex items-center justify-center mb-8">
              <Activity size={28} />
            </div>
            <h3 className="text-3xl font-heading font-extrabold mb-4">Mantenha o ritmo, mantenha o nível</h3>
            <p className="text-brand-beige/70 font-medium leading-relaxed text-lg">
              Como os pontos têm validade, o seu nível depende de manter compras constantes. Clientes regulares mantêm ou aumentam o nível; quedas no volume podem levar à perda de posição.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
