import type { Metadata } from 'next'
import { LegalPageWrapper } from '@/components/layout/LegalPageWrapper'

export const metadata: Metadata = {
  title: 'Desenvolvedores',
  description:
    'API e SDKs públicas da Hitlovers para integração com plataformas, ferramentas de marketing e dashboards.',
  alternates: { canonical: '/desenvolvedores' },
}

export default function DesenvolvedoresPage() {
  return (
    <LegalPageWrapper title="Desenvolvedores">
      <p>
        Estamos preparando uma <strong>API pública</strong> e SDKs oficiais para que parceiros, agências e
        plataformas possam integrar campanhas, métricas e payouts da hitlovers diretamente em seus próprios
        produtos.
      </p>

      <h2>O que está vindo</h2>
      <ul>
        <li>API REST para criação e gestão de campanhas.</li>
        <li>Webhooks para eventos de validação por IA, pagamentos e status de campanha.</li>
        <li>SDK em TypeScript e exemplos prontos para Next.js, Node e Python.</li>
        <li>Documentação aberta, com sandbox e chaves de teste.</li>
      </ul>

      <h2>Quer acesso antecipado?</h2>
      <p>
        Mande um e-mail para{' '}
        <a href="mailto:dev@hitlovers.app">dev@hitlovers.app</a> contando sobre seu caso de uso — vamos
        priorizar os early adopters quando o programa abrir.
      </p>
    </LegalPageWrapper>
  )
}
