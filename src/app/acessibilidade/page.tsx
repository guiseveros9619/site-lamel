import { LegalPageWrapper } from '@/components/layout/LegalPageWrapper'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Acessibilidade | hitlovers',
  description: 'O compromisso da hitlovers com a acessibilidade digital.',
}

export default function AccessibilityPage() {
  return (
    <LegalPageWrapper title="Declaração de Acessibilidade" lastUpdated="14 de Maio de 2026">
      <p>
        Na <strong>hitlovers</strong>, acreditamos que a economia dos criadores deve ser inclusiva e acessível a todos. 
        Estamos constantemente trabalhando para tornar nossa plataforma e experiência de usuário totalmente acessíveis, 
        independentemente de condições tecnológicas ou limitações físicas.
      </p>

      <h2>1. Nossos Compromissos (WCAG)</h2>
      <p>
        Nossa equipe de engenharia e design utiliza como base as <strong>Diretrizes de Acessibilidade para Conteúdo Web (WCAG) 2.1</strong>, 
        buscando conformidade de nível AA. Algumas das práticas ativas em nosso código incluem:
      </p>
      <ul>
        <li><strong>Navegação por Teclado:</strong> Toda a plataforma pode ser operada sem o uso do mouse. Botões, modais e transações financeiras são plenamente acessíveis por atalhos e tecla Tab.</li>
        <li><strong>Contraste e Cores:</strong> Utilizamos o <em>Modo Escuro (Dark Mode)</em> nativo com foco em alto contraste entre textos em tons de branco/cinza e fundos profundos para facilitar a leitura. O contraste é regularmente auditado.</li>
        <li><strong>Leitores de Tela:</strong> Implementamos <code>aria-labels</code> em todos os ícones visuais, botões e SVGs (como nos botões de lojas de apps e redes sociais) para que o fluxo faça sentido ao ser lido pelas ferramentas de assistência de voz.</li>
        <li><strong>Redução de Movimento:</strong> Respeitamos as preferências do sistema operacional para redução de movimento (<em>prefers-reduced-motion</em>), desabilitando ou amenizando animações pesadas para quem sofre de labirintite ou desconforto visual.</li>
      </ul>

      <h2>2. Áreas de Foco Contínuo</h2>
      <p>
        Sabemos que a acessibilidade não é um projeto de fim de semana, mas sim um compromisso contínuo. 
        À medida que implementamos novos painéis de controle e gráficos complexos para acompanhamento de métricas, 
        estamos testando ativamente formas de tornar esses gráficos inteligíveis por meio de tabelas de dados puras e textos descritivos.
      </p>

      <h2>3. Encontrou algum problema?</h2>
      <p>
        Se você encontrou alguma barreira ao utilizar a hitlovers ou tem sugestões de como podemos tornar a plataforma melhor, 
        queremos muito ouvir você. Por favor, envie um e-mail com a descrição da dificuldade encontrada para a nossa equipe de desenvolvimento e design.
      </p>
    </LegalPageWrapper>
  )
}
