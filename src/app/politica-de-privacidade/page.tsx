import { LegalPageWrapper } from '@/components/layout/LegalPageWrapper'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Política de Privacidade | hitlovers',
  description: 'Como a hitlovers coleta, usa e protege seus dados.',
}

export default function PrivacyPolicyPage() {
  return (
    <LegalPageWrapper title="Política de Privacidade" lastUpdated="14 de Maio de 2026">
      <p>
        A sua privacidade é uma prioridade para a <strong>hitlovers</strong>. Esta política detalha como coletamos, 
        usamos, armazenamos e protegemos os seus dados quando você interage com a nossa plataforma.
      </p>

      <h2>1. Coleta de Dados das Redes Sociais</h2>
      <p>
        Para que nosso sistema de auditoria e Score de Reputação funcione, precisamos nos conectar às suas contas de redes sociais 
        (como TikTok, Instagram e Spotify).
      </p>
      <ul>
        <li><strong>O que lemos:</strong> Monitoramos estritamente métricas públicas das campanhas associadas a você (visualizações, curtidas, comentários) e a presença de itens obrigatórios (áudio, marcações, hashtags).</li>
        <li><strong>O que NÃO lemos:</strong> Não acessamos, sob nenhuma hipótese, suas mensagens diretas (DMs), senhas, ou dados privados não relacionados às campanhas geridas pela plataforma.</li>
      </ul>

      <h2>2. Inteligência Artificial e Rastreamento</h2>
      <p>
        Nossa IA analisa automaticamente o conteúdo que você submete para garantir que atende às regras da campanha. 
        Este processamento visa identificar fraudes e validar a performance real do post. O processamento é focado no 
        conteúdo entregue à plataforma e não monitora sua navegação ou atividade fora das campanhas ativas.
      </p>

      <h2>3. Dados Financeiros</h2>
      <p>
        Para realizarmos os pagamentos automáticos aos criadores e operarmos as contas Escrow para os anunciantes, 
        coletamos dados financeiros (como chaves PIX ou dados de faturamento corporativo). Essas informações são 
        criptografadas e processadas por parceiros de pagamento certificados de alta segurança; a hitlovers não armazena 
        suas senhas bancárias ou dados críticos de cartão de crédito.
      </p>

      <h2>4. Compartilhamento de Informações</h2>
      <p>
        Não vendemos seus dados pessoais. As informações da sua performance (Score de Reputação, histórico de campanhas e métricas públicas) 
        são compartilhadas apenas com anunciantes da plataforma para fins de contratação. O seu nome e métricas atuam como seu &ldquo;currículo&rdquo; na hitlovers.
      </p>

      <h2>5. Seus Direitos (LGPD)</h2>
      <p>
        De acordo com a Lei Geral de Proteção de Dados (LGPD), você tem o direito de solicitar o acesso, a retificação ou a exclusão dos seus 
        dados pessoais em nossa base a qualquer momento. Você pode gerenciar essas preferências diretamente na plataforma ou através do nosso{' '}
        <Link href="/centro-de-privacidade">Centro de Privacidade</Link>.
      </p>

      <h2>6. Segurança</h2>
      <p>
        Implementamos medidas rigorosas de segurança, incluindo criptografia de ponta a ponta e auditorias regulares, para garantir que suas 
        informações e fundos estejam seguros contra acessos não autorizados.
      </p>
    </LegalPageWrapper>
  )
}
