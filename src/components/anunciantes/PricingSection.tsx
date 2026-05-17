import { Button } from '@/components/ui/button'
import { Check, Info } from 'lucide-react'
import Link from 'next/link'

interface PlanProps {
  name: string
  price: string
  takeRate: string
  limits: string
  audience: string
  features: string[]
  ctaText: string
  ctaHref: string
  isPopular?: boolean
}

const PlanCard = ({ name, price, takeRate, limits, audience, features, ctaText, ctaHref, isPopular }: PlanProps) => {
  return (
    <div className={`relative flex flex-col p-8 rounded-3xl ${isPopular ? 'bg-brand-purple/10 border-brand-purple border-2' : 'bg-[#1a1a1a] border border-white/10'} transition-transform hover:-translate-y-1 duration-300`}>
      {isPopular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-purple text-black px-4 py-1 rounded-full text-sm font-bold tracking-wide">
          Recomendado
        </div>
      )}
      
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-white mb-2">{name}</h3>
        <p className="text-zinc-400 text-sm h-10">{audience}</p>
      </div>

      <div className="mb-6 pb-6 border-b border-white/10">
        <div className="flex items-baseline gap-2 mb-2">
          <span className="text-4xl font-extrabold text-white">{price}</span>
          {price !== 'Personalizado' && <span className="text-zinc-400 font-medium">/mês</span>}
        </div>
        <div className="flex items-center gap-2 text-brand-purple font-semibold text-lg">
          <span>{takeRate} de taxa</span>
          <div className="group relative inline-flex justify-center items-center">
            <Info size={16} className="text-zinc-500 cursor-help" aria-hidden="true" />
            <div className="absolute bottom-full mb-2 hidden group-hover:block w-64 p-3 bg-[#2a2a2a] text-xs text-zinc-300 rounded-lg shadow-xl text-center z-10 border border-white/10">
              Comissão cobrada apenas se utilizar nosso marketplace ou sistema de pagamentos. Zero taxa para pagamentos manuais.
            </div>
          </div>
        </div>
        <p className="text-zinc-300 text-sm mt-1">{limits}</p>
      </div>

      <ul className="flex-1 space-y-4 mb-8">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start gap-3">
            <Check size={20} className="text-brand-purple shrink-0 mt-0.5" aria-hidden="true" />
            <span className="text-zinc-300 text-sm">{feature}</span>
          </li>
        ))}
      </ul>

      <Link href={ctaHref} className="w-full mt-auto">
        <Button 
          className={`w-full h-12 rounded-full font-bold text-base ${isPopular ? 'bg-brand-purple text-black hover:bg-brand-purple-light hover:scale-[1.02] transition-transform' : 'bg-white text-black hover:bg-zinc-200'}`}
        >
          {ctaText}
        </Button>
      </Link>
    </div>
  )
}

export function PricingSection() {
  const plans: PlanProps[] = [
    {
      name: 'Básico',
      price: 'R$ 99',
      takeRate: '10%',
      limits: 'Até 3 campanhas/mês',
      audience: 'Para artistas independentes e produtores locais.',
      features: [
        'Acesso ao Dashboard de Anunciante',
        'Criação de campanhas de Escuta e Vídeo',
        'Gestão de Budget em Escrow',
        'Métricas básicas de alcance',
        'Suporte via ticket'
      ],
      ctaText: 'Começar agora',
      ctaHref: '/auth/registro?plan=basic'
    },
    {
      name: 'Escala',
      price: 'R$ 497',
      takeRate: '6%',
      limits: 'Até 10 campanhas/mês',
      audience: 'Para agências, casas de shows e selos.',
      isPopular: true,
      features: [
        'Tudo do plano Básico',
        'Segmentação avançada de criadores',
        'Campanhas de Eventos (Cortesias/VIP)',
        'Relatórios detalhados de engajamento',
        'Aprovação prévia de criadores',
        'Suporte prioritário'
      ],
      ctaText: 'Começar agora',
      ctaHref: '/auth/registro?plan=escala'
    },
    {
      name: 'Personalizado',
      price: 'Sob demanda',
      takeRate: '3%',
      limits: 'Campanhas ilimitadas',
      audience: 'Para grandes festivais, gravadoras e marcas.',
      features: [
        'Tudo do plano Escala',
        'API de integração',
        'Account Manager dedicado',
        'Consultoria de estratégia de lançamento',
        'Acesso a Top Creators (+100k)',
        'Faturamento pós-pago (mediante análise)'
      ],
      ctaText: 'Falar com especialista',
      ctaHref: '/demonstracao'
    }
  ]

  return (
    <section className="bg-[#121212] py-24 relative overflow-hidden" id="planos">
      <div className="container mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
            Invista em engajamento real.<br />Escolha o seu plano.
          </h2>
          <p className="text-lg text-zinc-400">
            Acesse a tecnologia da hitlovers pagando uma mensalidade fixa e uma taxa administrativa apenas sobre o orçamento que você destinar aos criadores.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
          {plans.map((plan) => (
            <PlanCard key={plan.name} {...plan} />
          ))}
        </div>
      </div>
    </section>
  )
}
