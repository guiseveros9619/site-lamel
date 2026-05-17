import { LegalPageWrapper } from '@/components/layout/LegalPageWrapper'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Política de Cookies | hitlovers',
  description: 'Como usamos cookies para melhorar sua experiência.',
}

export default function CookiesPage() {
  return (
    <LegalPageWrapper title="Política de Cookies" lastUpdated="14 de Maio de 2026">
      <p>
        A <strong>hitlovers</strong> utiliza cookies e tecnologias semelhantes (como pixels e local storage) 
        para garantir que a plataforma funcione de maneira rápida, segura e eficiente para você.
      </p>

      <h2>1. O que são Cookies?</h2>
      <p>
        Cookies são pequenos arquivos de texto que são salvos no seu navegador ou dispositivo quando você acessa nosso site. 
        Eles ajudam a plataforma a lembrar de você em visitas futuras, mantendo sua sessão ativa e carregando os dados de forma mais ágil.
      </p>

      <h2>2. Como utilizamos os Cookies</h2>
      <p>Nós separamos os cookies nas seguintes categorias:</p>
      <ul>
        <li>
          <strong>Cookies Estritamente Necessários:</strong> Essenciais para a hitlovers funcionar. Eles permitem que você faça login de forma segura, acesse o painel do criador ou gerenciador de anunciantes e opere transações financeiras. Sem eles, o site quebra.
        </li>
        <li>
          <strong>Cookies de Desempenho e Analytics:</strong> Usados para entendermos como nossos usuários navegam no site. Eles nos dizem quais páginas carregam devagar ou se houve algum erro, nos ajudando a melhorar a plataforma. Dados coletados de forma anônima.
        </li>
        <li>
          <strong>Cookies de Rastreio (Pixels):</strong> Utilizados em nossa plataforma para verificar o sucesso de conversões (ex: se um criador completou o cadastro via um anúncio que fizemos). Eles não leem seus dados em outros sites.
        </li>
      </ul>

      <h2>3. Nossa Plataforma vs Redes Sociais</h2>
      <p>
        A hitlovers valida as visualizações e interações nas plataformas externas (TikTok, Instagram, Spotify) 
        através das APIs oficiais dessas redes ou algoritmos próprios de checagem. <strong>Nós não injetamos cookies 
        no dispositivo do usuário final que assiste ao vídeo.</strong> O ecossistema de cookies da hitlovers aplica-se 
        apenas a criadores e anunciantes que fazem login no painel `hitlovers.com`.
      </p>

      <h2>4. Como Gerenciar seus Cookies</h2>
      <p>
        Você pode optar por não compartilhar cookies não essenciais. A maioria dos navegadores permite que você recuse ou exclua cookies através de suas configurações de privacidade:
      </p>
      <ul>
        <li>Configurações no Google Chrome</li>
        <li>Configurações no Safari (Mac / iOS)</li>
        <li>Configurações no Mozilla Firefox</li>
      </ul>
      <p>
        <em>Atenção:</em> Bloquear cookies essenciais fará com que o painel de login e operações financeiras (Escrow/PIX) parem de funcionar.
      </p>
    </LegalPageWrapper>
  )
}
