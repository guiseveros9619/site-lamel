'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { APP_STORE_URL, PLAY_STORE_URL, getAppDownloadUrl } from '@/lib/appDownload'

export default function BaixarPage() {
  useEffect(() => {
    const target = getAppDownloadUrl()
    window.location.replace(target)
  }, [])

  return (
    <main className="min-h-screen bg-[#121212] text-white flex items-center justify-center px-6">
      <div className="max-w-md w-full text-center flex flex-col items-center gap-8">
        <Link href="/" className="text-2xl font-bold tracking-tighter">
          hit<span className="text-brand-purple">lovers</span>
        </Link>

        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-extrabold tracking-tight">Redirecionando…</h1>
          <p className="text-zinc-400 text-sm font-medium">
            Estamos te enviando para a loja do seu aparelho.
          </p>
        </div>

        <div className="flex flex-col gap-3 w-full">
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-full h-14 rounded-full bg-white text-black font-bold text-base hover:bg-zinc-200 transition-colors"
          >
            Abrir App Store
          </a>
          <a
            href={PLAY_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-full h-14 rounded-full border border-white/20 text-white font-bold text-base hover:bg-white/5 transition-colors"
          >
            Abrir Google Play
          </a>
        </div>

        <p className="text-xs text-zinc-500">
          Se nada acontecer, escolha sua loja acima.
        </p>
      </div>
    </main>
  )
}
