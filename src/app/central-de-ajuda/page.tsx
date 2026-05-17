import type { Metadata } from 'next'
import { LegalPageWrapper } from '@/components/layout/LegalPageWrapper'

export const metadata: Metadata = {
  title: 'Central de Ajuda',
  description:
    'Tire dúvidas sobre campanhas, validação por IA, pagamentos e participação como criador na Hitlovers.',
  alternates: { canonical: '/central-de-ajuda' },
}

export default function CentralDeAjudaPage() {
  return (
    <LegalPageWrapper title="Central de Ajuda">
      <p>
        Precisa de ajuda? Nosso time está pronto para responder dúvidas sobre campanhas, validação por IA,
        pagamentos via PIX e participação como criador.
      </p>

      <h2>Canais de atendimento</h2>
      <ul>
        <li>
          <strong>E-mail:</strong>{' '}
          <a href="mailto:ajuda@hitlovers.app">ajuda@hitlovers.app</a> — respondemos em até 1 dia útil.
        </li>
        <li>
          <strong>Instagram:</strong>{' '}
          <a href="https://instagram.com/hitlovers.app" target="_blank" rel="noopener noreferrer">
            @hitlovers.app
          </a>{' '}
          — para dúvidas rápidas via DM.
        </li>
        <li>
          <strong>TikTok:</strong>{' '}
          <a href="https://tiktok.com/@hitlovers.app" target="_blank" rel="noopener noreferrer">
            @hitlovers.app
          </a>
        </li>
      </ul>

      <h2>Dúvidas mais comuns</h2>
      <p>
        Antes de abrir um chamado, dá uma olhada nas FAQs específicas de cada perfil — Anunciantes,
        Artistas, Eventos e Criadores — diretamente nas páginas correspondentes do site. Muitas das dúvidas
        sobre validação, payout e Score de Reputação já estão respondidas por lá.
      </p>
    </LegalPageWrapper>
  )
}
