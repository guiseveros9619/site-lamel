import type { Metadata } from 'next'
import Link from 'next/link'
import { Shield, FileText, Cookie, Database, EyeOff, Lock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Centro de Privacidade | hitlovers',
  description: 'Gerencie seus dados e entenda como sua privacidade é tratada.',
}

const PRIVACY_LINKS = [
  {
    title: 'Política de Privacidade',
    description: 'Entenda como usamos, coletamos e protegemos seus dados pessoais e de performance nas redes.',
    icon: <FileText size={24} />,
    href: '/politica-de-privacidade',
    color: 'text-brand-purple'
  },
  {
    title: 'Termos de Uso',
    description: 'Conheça as regras para anunciantes, criadores e as diretrizes de pagamento da hitlovers.',
    icon: <Shield size={24} />,
    href: '/legal',
    color: 'text-green-500'
  },
  {
    title: 'Política de Cookies',
    description: 'Saiba como utilizamos cookies para otimizar a sua experiência e rastrear campanhas.',
    icon: <Cookie size={24} />,
    href: '/cookies',
    color: 'text-orange-400'
  },
  {
    title: 'Transparência em Anúncios',
    description: 'Entenda como as campanhas são distribuídas e por que você vê determinados conteúdos.',
    icon: <EyeOff size={24} />,
    href: '/sobre-anuncios',
    color: 'text-blue-400'
  }
]

export default function PrivacyCenterPage() {
  return (
    <div className="bg-[#121212] pt-32 pb-24 px-6 lg:px-8 min-h-screen">
      <div className="container mx-auto max-w-5xl">
        <header className="mb-16 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-purple/10 text-brand-purple mb-6">
            <Lock size={32} />
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-6 text-balance">
            Centro de Privacidade
          </h1>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Na hitlovers, o controle sobre as suas informações está nas suas mãos. 
            Nossa tecnologia anti-fraude protege campanhas sem comprometer sua segurança pessoal.
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {PRIVACY_LINKS.map((item) => (
            <Link 
              key={item.href} 
              href={item.href}
              className="group block p-8 rounded-[2rem] bg-[#1c1c1c] border border-white/5 hover:border-white/10 hover:bg-[#222222] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple"
            >
              <div className={`mb-4 ${item.color}`}>
                {item.icon}
              </div>
              <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-brand-purple transition-colors text-balance">
                {item.title}
              </h2>
              <p className="text-zinc-400 leading-relaxed">
                {item.description}
              </p>
            </Link>
          ))}
        </div>

        <div className="bg-[#1c1c1c] rounded-[2rem] p-8 md:p-12 border border-white/5 flex flex-col md:flex-row items-center gap-8">
          <div className="flex-shrink-0 w-16 h-16 rounded-full bg-red-500/10 flex items-center justify-center text-red-500">
            <Database size={32} />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-white mb-2 text-balance">Seus Dados, Suas Regras</h3>
            <p className="text-zinc-400">
              Você tem o direito garantido pela LGPD de solicitar uma cópia dos seus dados cadastrados na hitlovers 
              ou pedir a exclusão permanente da sua conta e informações financeiras a qualquer momento.
            </p>
          </div>
          <button className="whitespace-nowrap px-6 py-3 rounded-full bg-zinc-800 text-white font-bold hover:bg-zinc-700 transition-colors">
            Solicitar Dados
          </button>
        </div>
      </div>
    </div>
  )
}
