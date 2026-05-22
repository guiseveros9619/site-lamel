import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.youtube.com',
        pathname: '/**',
      },
    ],
  },
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
  compiler: {
    removeConsole: { exclude: ['error'] },
  },
  async redirects() {
    return [
      { source: '/anunciantes/artistas', destination: '/artistas', permanent: true },
      { source: '/anunciantes/eventos', destination: '/eventos', permanent: true },
    ]
  },
}

export default nextConfig
