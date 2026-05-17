import type { MetadataRoute } from 'next'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://hitlovers.app'

const ROUTES = [
  { path: '/', priority: 1.0, changeFrequency: 'weekly' as const },
  { path: '/anunciantes', priority: 0.9, changeFrequency: 'weekly' as const },
  { path: '/artistas', priority: 0.8, changeFrequency: 'weekly' as const },
  { path: '/eventos', priority: 0.8, changeFrequency: 'weekly' as const },
  { path: '/criadores', priority: 0.9, changeFrequency: 'weekly' as const },
  { path: '/legal', priority: 0.3, changeFrequency: 'yearly' as const },
  { path: '/politica-de-privacidade', priority: 0.3, changeFrequency: 'yearly' as const },
  { path: '/cookies', priority: 0.3, changeFrequency: 'yearly' as const },
  { path: '/centro-de-privacidade', priority: 0.3, changeFrequency: 'yearly' as const },
  { path: '/sobre-anuncios', priority: 0.3, changeFrequency: 'yearly' as const },
  { path: '/acessibilidade', priority: 0.3, changeFrequency: 'yearly' as const },
  { path: '/central-de-ajuda', priority: 0.4, changeFrequency: 'monthly' as const },
  { path: '/desenvolvedores', priority: 0.4, changeFrequency: 'monthly' as const },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()
  return ROUTES.map(({ path, priority, changeFrequency }) => ({
    url: `${siteUrl}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }))
}
