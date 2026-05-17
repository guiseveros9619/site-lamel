import { LegalPageWrapper } from '@/components/layout/LegalPageWrapper'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sobre Anúncios | hitlovers',
  description: 'Transparência sobre como o tráfego e as campanhas funcionam na hitlovers.',
}

export default function AboutAdsPage() {
  return (
    <LegalPageWrapper title="Transparência e Anúncios" lastUpdated="14 de Maio de 2026">
      <p>
        A <strong>hitlovers</strong> tem como base a transparência absoluta no fluxo entre o dinheiro de uma marca e a entrega de um criador. 
        Nesta página, explicamos de forma simples como as campanhas são distribuídas, como o tráfego é validado e o que torna nossa plataforma diferente.
      </p>

      <h2>1. Como as campanhas chegam até você (Criador)</h2>
      <p>
        Diferente de agências tradicionais que fecham &ldquo;panelinhas&rdquo;, nossa plataforma é movida por dados. Se você vê uma oferta de campanha no seu painel,
        é porque o seu perfil demonstrou o engajamento e o nicho procurado pela marca. As oportunidades são distribuídas com base em:
      </p>
      <ul>
        <li><strong>Seu Score de Reputação:</strong> Entregas anteriores bem-sucedidas abrem portas para orçamentos maiores.</li>
        <li><strong>Público e Nicho:</strong> Se o seu conteúdo bate com o segmento da marca, a campanha aparecerá para você.</li>
      </ul>

      <h2>2. O Combate à Fraude no Tráfego</h2>
      <p>
        Marcas pagam por pessoas reais vendo suas músicas, produtos ou campanhas. A hitlovers não tolera compras de visualizações, robôs ou qualquer tipo de engajamento artificial (farm clicks).
      </p>
      <p>
        Se a nossa IA detectar anomalias severas na curva de crescimento de um post (como 50.000 visualizações em 1 minuto originadas de IPs não orgânicos), 
        a auditoria falhará, a campanha será suspensa e o saldo retornará ao anunciante (Escrow).
      </p>

      <h2>3. Pagamento por Performance</h2>
      <p>
        A hitlovers quebra a lógica do mercado de &ldquo;pagar adiantado e rezar para dar certo&rdquo;. As verbas dos anúncios ficam 100% visíveis e garantidas em uma conta segura.
        A partir do momento em que a tecnologia constata que as metas foram atingidas — sejam 10 mil views ou 1 milhão de views — o saldo é liberado <strong>instantaneamente</strong> para o criador.
      </p>

      <h2>4. Publicidade Eticamente Clara</h2>
      <p>
        Apoiamos e exigimos que todos os criadores sejam transparentes com seu público. Campanhas patrocinadas devem seguir as regulamentações de publicidade do seu país (como uso da hashtag #ad ou #publicidade) quando a lei exigir.
      </p>
    </LegalPageWrapper>
  )
}
