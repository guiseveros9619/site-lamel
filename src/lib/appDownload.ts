'use client'

import { useSyncExternalStore } from 'react'

// TODO: trocar pelos links reais quando o app for publicado
export const APP_STORE_URL = 'https://apps.apple.com/br/app/hitlovers/id000000000'
export const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=app.hitlovers'
export const APP_FALLBACK_URL = APP_STORE_URL

type Platform = 'ios' | 'android' | 'other'

function detectPlatform(): Platform {
  if (typeof navigator === 'undefined') return 'other'
  const ua = navigator.userAgent || ''
  if (/iPad|iPhone|iPod/.test(ua)) return 'ios'
  // iPadOS 13+ reporta como Mac; usar suporte a touch como sinal extra
  if (/Macintosh/.test(ua) && typeof document !== 'undefined' && 'ontouchend' in document) return 'ios'
  if (/Android/i.test(ua)) return 'android'
  return 'other'
}

export function getAppDownloadUrl(): string {
  const platform = detectPlatform()
  if (platform === 'ios') return APP_STORE_URL
  if (platform === 'android') return PLAY_STORE_URL
  return APP_FALLBACK_URL
}

const noopSubscribe = () => () => {}

// useSyncExternalStore: SSR usa o snapshot do servidor (fallback) e o cliente
// resolve a URL específica da plataforma sem disparar render extra nem mismatch.
export function useAppDownloadLink(): string {
  return useSyncExternalStore(noopSubscribe, getAppDownloadUrl, () => APP_FALLBACK_URL)
}
