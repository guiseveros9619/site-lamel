import { LegalPageWrapper } from '@/components/layout/LegalPageWrapper'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Termos de Uso | hitlovers',
  description: 'Termos de uso e condições legais da plataforma hitlovers.',
}

export default function LegalPage() {
  return (
    <LegalPageWrapper title="Termos de Uso" lastUpdated="14 de Maio de 2026">
      <p>
        Bem-vindo à <strong>hitlovers</strong>. Ao utilizar nossa plataforma, você concorda com estes Termos de Uso. 
        Nossa missão é conectar marcas anunciantes e criadores de conteúdo de forma transparente, segura e focada em performance.
      </p>

      <h2>1. Natureza do Serviço</h2>
      <p>
        A hitlovers é uma plataforma de intermediação e gestão de campanhas publicitárias focada em performance e alcance de visualizações. 
        Não somos uma agência tradicional; nosso modelo garante que anunciantes paguem apenas pelos resultados auditados por nossa tecnologia, 
        e que criadores sejam remunerados com segurança ao cumprirem as métricas propostas.
      </p>

      <h2>2. Regras para Anunciantes</h2>
      <p>
        Ao criar uma campanha na hitlovers, o Anunciante concorda que:
      </p>
      <ul>
        <li>O orçamento da campanha será retido em uma conta garantia (<strong>Escrow</strong>) até a finalização do período contratado.</li>
        <li>O pagamento aos criadores ocorre apenas mediante a validação dos requisitos pela nossa Inteligência Artificial (áudio oficial, hashtags, @marcações e views reais).</li>
        <li>Caso a rede de criadores não atinja o objetivo de visualizações dentro do prazo estipulado, o valor não gasto será devolvido integralmente.</li>
      </ul>

      <h2>3. Regras para Criadores</h2>
      <p>
        Criadores que aceitam participar das campanhas estão sujeitos às seguintes diretrizes:
      </p>
      <ul>
        <li>Os conteúdos devem ser mantidos como &ldquo;Público&rdquo; na rede social original pelo tempo exigido na campanha.</li>
        <li>Tentativas de fraude nas visualizações (uso de bots ou engajamento artificial) resultarão em banimento imediato e retenção dos fundos.</li>
        <li>O <strong>Score de Reputação</strong> do criador é afetado diretamente por sua performance, consistência e respeito às diretrizes da marca. Criadores com pontuação mais alta recebem acesso prioritário a campanhas com orçamentos maiores.</li>
        <li>A liberação do PIX é automática assim que a Inteligência Artificial aprova e certifica o atingimento das metas no post.</li>
      </ul>

      <h2>4. Auditoria via IA</h2>
      <p>
        A tecnologia de auditoria da hitlovers roda 24 horas por dia, 7 dias por semana. Nossa IA analisa links submetidos em tempo real, 
        verificando a validade dos requisitos exigidos pelas marcas. Essa decisão técnica e automatizada serve como a principal métrica de resolução 
        para liberação ou retenção de pagamentos em Escrow.
      </p>

      <h2>5. Modificação dos Termos</h2>
      <p>
        A hitlovers reserva-se o direito de alterar estes Termos a qualquer momento. Modificações significativas serão comunicadas através do seu e-mail cadastrado ou por avisos claros em nossa plataforma.
      </p>

      <p>
        Se você tiver dúvidas sobre estes Termos, entre em contato através da nossa{' '}
        <Link href="/central-de-ajuda">Central de Ajuda</Link>.
      </p>
    </LegalPageWrapper>
  )
}
