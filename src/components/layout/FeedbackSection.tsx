'use client'

import { useRef, useState, useEffect } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Play, Pause, Heart, Volume2, ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import { SectionBadge } from '@/components/ui/SectionBadge'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP)
}

/**
 * Feedbacks em vídeo dos clientes elogiando a marca.
 * Os arquivos vivem em `public/feedback/` (feedback-1..6.mp4 + poster-N.jpg).
 * Cada vídeo declara sua orientação real para o card respeitar o aspecto
 * (sem cortes nem barras pretas). Edite `name`/`location` à vontade.
 */
const VIDEO_FEEDBACKS = [
  {
    id: 'v1',
    src: '/feedback/feedback-1.mp4',
    poster: '/feedback/poster-1.jpg',
    orientation: 'vertical',
    name: '',
    location: 'Depoimento de cliente',
    playBtn: 'bg-brand-pink text-brand-black',
    hoverBorder: 'group-hover:border-brand-pink',
  },
  {
    id: 'v4',
    src: '/feedback/feedback-4.mp4',
    poster: '/feedback/poster-4.jpg',
    orientation: 'vertical',
    name: '',
    location: 'Depoimento de cliente',
    playBtn: 'bg-brand-blue text-brand-black',
    hoverBorder: 'group-hover:border-brand-blue',
  },
  {
    id: 'v5',
    src: '/feedback/feedback-5.mp4',
    poster: '/feedback/poster-5.jpg',
    orientation: 'vertical',
    name: '',
    location: 'Depoimento de cliente',
    playBtn: 'bg-brand-purple text-brand-black',
    hoverBorder: 'group-hover:border-brand-purple',
  },
  {
    id: 'v6',
    src: '/feedback/feedback-6.mp4',
    poster: '/feedback/poster-6.jpg',
    orientation: 'vertical',
    name: '',
    location: 'Depoimento de cliente',
    playBtn: 'bg-brand-yellow text-brand-black',
    hoverBorder: 'group-hover:border-brand-yellow',
  },
] as const

/**
 * Feedbacks em áudio (clientes elogiando ou recebendo os pedidos).
 * Arquivos reais em `public/feedback/audio-1..7.mp3`.
 */
const AUDIO_FEEDBACKS = [
  { id: 'a1', name: 'Mariana Sales', location: 'São Paulo, SP', duration: 22, audioSrc: '/feedback/audio-1.mp3', avatarBg: 'bg-brand-orange text-brand-beige', waveActive: 'bg-brand-orange', button: 'bg-brand-orange text-brand-beige' },
  { id: 'a2', name: 'Rafael Andrade', location: 'Goiânia, GO', duration: 25, audioSrc: '/feedback/audio-2.mp3', avatarBg: 'bg-brand-blue text-brand-black', waveActive: 'bg-brand-blue', button: 'bg-brand-blue text-brand-black' },
  { id: 'a3', name: 'Juliana Prado', location: 'Belo Horizonte, MG', duration: 60, audioSrc: '/feedback/audio-3.mp3', avatarBg: 'bg-brand-green text-brand-black', waveActive: 'bg-brand-green', button: 'bg-brand-green text-brand-black' },
  { id: 'a4', name: 'Carlos Eduardo', location: 'Curitiba, PR', duration: 15, audioSrc: '/feedback/audio-4.mp3', avatarBg: 'bg-brand-pink text-brand-black', waveActive: 'bg-brand-pink', button: 'bg-brand-pink text-brand-black' },
  { id: 'a5', name: 'Beatriz Nunes', location: 'Salvador, BA', duration: 12, audioSrc: '/feedback/audio-5.mp3', avatarBg: 'bg-brand-purple text-brand-black', waveActive: 'bg-brand-purple', button: 'bg-brand-purple text-brand-black' },
  { id: 'a6', name: 'Thiago Moraes', location: 'Rio de Janeiro, RJ', duration: 89, audioSrc: '/feedback/audio-6.mp3', avatarBg: 'bg-brand-yellow text-brand-black', waveActive: 'bg-brand-yellow', button: 'bg-brand-yellow text-brand-black' },
  { id: 'a7', name: 'Larissa Campos', location: 'Recife, PE', duration: 25, audioSrc: '/feedback/audio-7.mp3', avatarBg: 'bg-brand-orange text-brand-beige', waveActive: 'bg-brand-orange', button: 'bg-brand-orange text-brand-beige' },
  { id: 'a8', name: 'Fernanda Rocha', location: 'Fortaleza, CE', duration: 30, audioSrc: '/feedback/audio-8.mp3', avatarBg: 'bg-brand-blue text-brand-black', waveActive: 'bg-brand-blue', button: 'bg-brand-blue text-brand-black' },
  { id: 'a9', name: 'Gustavo Lima', location: 'Porto Alegre, RS', duration: 30, audioSrc: '/feedback/audio-9.mp3', avatarBg: 'bg-brand-green text-brand-black', waveActive: 'bg-brand-green', button: 'bg-brand-green text-brand-black' },
  { id: 'a10', name: 'Patrícia Mendes', location: 'Manaus, AM', duration: 90, audioSrc: '/feedback/audio-10.mp3', avatarBg: 'bg-brand-pink text-brand-black', waveActive: 'bg-brand-pink', button: 'bg-brand-pink text-brand-black' },
  { id: 'a11', name: 'Diego Carvalho', location: 'Florianópolis, SC', duration: 65, audioSrc: '/feedback/audio-11.mp3', avatarBg: 'bg-brand-purple text-brand-black', waveActive: 'bg-brand-purple', button: 'bg-brand-purple text-brand-black' },
  { id: 'a12', name: 'Aline Ferreira', location: 'Brasília, DF', duration: 19, audioSrc: '/feedback/audio-12.mp3', avatarBg: 'bg-brand-yellow text-brand-black', waveActive: 'bg-brand-yellow', button: 'bg-brand-yellow text-brand-black' },
] as const

// Alturas das barras do waveform — fixas para manter estável entre renders.
const WAVE_BARS = [
  0.4, 0.7, 0.5, 0.9, 0.6, 1, 0.45, 0.75, 0.55, 0.85, 0.5, 0.95, 0.4, 0.7,
  0.6, 0.8, 0.5, 1, 0.45, 0.65, 0.55, 0.9, 0.5, 0.75, 0.6, 0.85, 0.4, 0.7,
]

function formatTime(seconds: number) {
  if (!Number.isFinite(seconds)) return '0:00'
  const m = Math.floor(seconds / 60)
  const s = Math.floor(seconds % 60)
  return `${m}:${s.toString().padStart(2, '0')}`
}

function VideoFeedbackCard({ item }: { item: (typeof VIDEO_FEEDBACKS)[number] }) {
  const [isPlaying, setIsPlaying] = useState(false)
  // Largura do slide derivada da orientação para uma altura uniforme.
  // Como o aspecto do frame bate com o do vídeo, object-cover preenche sem cortar.
  const aspect = item.orientation === 'vertical' ? 'aspect-[9/16]' : 'aspect-[16/9]'

  return (
    <div
      className={`anim-fb-card group relative h-[380px] shrink-0 snap-center overflow-hidden rounded-[2rem] border-2 border-brand-black bg-brand-black opacity-0 shadow-xl transition-colors sm:h-[460px] ${aspect} ${item.hoverBorder}`}
    >
      {!isPlaying ? (
        <button
          onClick={() => setIsPlaying(true)}
          className="absolute inset-0 h-full w-full cursor-pointer focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-inset focus-visible:ring-brand-pink"
          aria-label={`Assistir ao depoimento${item.name ? ` de ${item.name}` : ''}`}
        >
          <Image
            src={item.poster}
            alt={`Depoimento${item.name ? ` de ${item.name}` : ' de cliente'}`}
            fill
            sizes="(max-width: 640px) 80vw, 400px"
            className="object-cover opacity-85 transition-transform duration-700 group-hover:scale-105"
          />

          {/* Gradiente para o botão e o texto saltarem */}
          <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/10 to-brand-black/10" />

          {/* Botão Play */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div
              className={`flex h-16 w-16 items-center justify-center rounded-full pl-1 shadow-lg transition-transform duration-300 group-hover:scale-110 ${item.playBtn}`}
            >
              <Play size={28} className="fill-current" />
            </div>
          </div>

          {/* Identificação do cliente */}
          <div className="absolute inset-x-0 bottom-0 p-5 text-left">
            {item.name ? (
              <h4 className="font-heading text-lg font-bold leading-tight text-brand-beige">
                {item.name}
              </h4>
            ) : null}
            <p className="flex items-center gap-1.5 text-sm font-medium text-brand-beige/70">
              <Heart size={13} className="fill-brand-pink text-brand-pink" />
              {item.location}
            </p>
          </div>
        </button>
      ) : (
        <video
          src={item.src}
          poster={item.poster}
          controls
          autoPlay
          playsInline
          className="absolute inset-0 h-full w-full bg-brand-black object-cover"
        />
      )}
    </div>
  )
}

function VideoCarousel() {
  const trackRef = useRef<HTMLDivElement>(null)
  const [canPrev, setCanPrev] = useState(false)
  const [canNext, setCanNext] = useState(true)

  const updateArrows = () => {
    const el = trackRef.current
    if (!el) return
    setCanPrev(el.scrollLeft > 8)
    setCanNext(el.scrollLeft < el.scrollWidth - el.clientWidth - 8)
  }

  useEffect(() => {
    updateArrows()
    const el = trackRef.current
    if (!el) return
    el.addEventListener('scroll', updateArrows, { passive: true })
    window.addEventListener('resize', updateArrows)
    return () => {
      el.removeEventListener('scroll', updateArrows)
      window.removeEventListener('resize', updateArrows)
    }
  }, [])

  const scrollByAmount = (dir: 1 | -1) => {
    const el = trackRef.current
    if (!el) return
    el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: 'smooth' })
  }

  return (
    <div className="anim-fb-grid relative">
      {/* Trilho com scroll-snap — inner w-max + mx-auto centraliza quando cabe
          e continua rolando quando estoura a largura (mobile). */}
      <div
        ref={trackRef}
        className="no-scrollbar -mx-6 snap-x snap-mandatory overflow-x-auto scroll-smooth px-6 pb-2 lg:-mx-8 lg:px-8"
      >
        <div className="mx-auto flex w-max gap-5">
          {VIDEO_FEEDBACKS.map((item) => (
            <VideoFeedbackCard key={item.id} item={item} />
          ))}
        </div>
      </div>

      {/* Setas de navegação (desktop) */}
      <button
        onClick={() => scrollByAmount(-1)}
        disabled={!canPrev}
        aria-label="Vídeos anteriores"
        className="absolute -left-5 top-1/2 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border-2 border-brand-black bg-brand-beige text-brand-black shadow-lg transition-all hover:bg-brand-black hover:text-brand-beige disabled:pointer-events-none disabled:opacity-0 lg:flex"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={() => scrollByAmount(1)}
        disabled={!canNext}
        aria-label="Próximos vídeos"
        className="absolute -right-5 top-1/2 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border-2 border-brand-black bg-brand-beige text-brand-black shadow-lg transition-all hover:bg-brand-black hover:text-brand-beige disabled:pointer-events-none disabled:opacity-0 lg:flex"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  )
}

function AudioFeedbackCard({
  item,
  playingId,
  setPlayingId,
}: {
  item: (typeof AUDIO_FEEDBACKS)[number]
  playingId: string | null
  setPlayingId: (id: string | null) => void
}) {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [progress, setProgress] = useState(0) // 0–1
  const [currentTime, setCurrentTime] = useState(0)

  // Quem está tocando é definido pelo carrossel (estado único) → garante que
  // só um áudio toca por vez.
  const isPlaying = playingId === item.id

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const onTime = () => {
      setCurrentTime(audio.currentTime)
      if (audio.duration) setProgress(audio.currentTime / audio.duration)
    }
    const onEnded = () => {
      setProgress(0)
      setCurrentTime(0)
      setPlayingId(null)
    }

    audio.addEventListener('timeupdate', onTime)
    audio.addEventListener('ended', onEnded)
    return () => {
      audio.removeEventListener('timeupdate', onTime)
      audio.removeEventListener('ended', onEnded)
    }
  }, [item.id, setPlayingId])

  // Auto-pause: assim que outro áudio vira o ativo, este pausa sozinho.
  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return
    if (isPlaying) {
      audio.play().catch(() => {})
    } else if (!audio.paused) {
      audio.pause()
    }
  }, [isPlaying])

  const toggle = () => {
    if (isPlaying) {
      setPlayingId(null)
    } else {
      // play() direto no clique preserva o "gesto do usuário" exigido pelos navegadores;
      // o efeito acima cuida de pausar o áudio que estava tocando antes.
      audioRef.current?.play().catch(() => {})
      setPlayingId(item.id)
    }
  }

  const playedBars = Math.round(progress * WAVE_BARS.length)

  return (
    <div className="anim-fb-card flex w-[300px] shrink-0 translate-y-10 snap-center flex-col justify-between rounded-[2rem] border-2 border-brand-black bg-white p-7 opacity-0 shadow-xl sm:w-[360px]">
      {/* Cabeçalho: avatar com ícone de áudio */}
      <div className="mb-6 flex items-center gap-4">
        <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full ${item.avatarBg}`}>
          <Volume2 size={22} />
        </div>
        <div className="min-w-0">
          <h4 className="truncate font-heading text-base font-bold leading-tight text-brand-black">
            {item.name}
          </h4>
          <p className="truncate text-xs font-bold uppercase tracking-widest text-brand-black/40">
            {item.location}
          </p>
        </div>
        <Heart size={18} className="ml-auto shrink-0 fill-brand-pink/30 text-brand-pink/30" />
      </div>

      {/* Player */}
      <div className="flex items-center gap-4 rounded-2xl border border-brand-black/10 bg-brand-beige/50 p-3">
        <button
          onClick={toggle}
          aria-label={isPlaying ? `Pausar áudio de ${item.name}` : `Ouvir áudio de ${item.name}`}
          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full shadow-sm transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange ${item.button}`}
        >
          {isPlaying ? <Pause size={18} className="fill-current" /> : <Play size={18} className="fill-current pl-0.5" />}
        </button>

        {/* Waveform */}
        <div className="flex h-8 flex-1 items-center gap-[3px]" aria-hidden="true">
          {WAVE_BARS.map((h, i) => (
            <span
              key={i}
              style={{ height: `${Math.max(h * 100, 20)}%` }}
              className={`w-full rounded-full transition-colors duration-150 ${
                i < playedBars ? item.waveActive : 'bg-brand-black/15'
              }`}
            />
          ))}
        </div>

        <span className="w-10 shrink-0 text-right font-mono text-xs font-bold text-brand-black/50">
          {formatTime(currentTime > 0 ? currentTime : item.duration)}
        </span>
      </div>

      <audio ref={audioRef} src={item.audioSrc} preload="metadata" />
    </div>
  )
}

function AudioCarousel() {
  const trackRef = useRef<HTMLDivElement>(null)
  const [canPrev, setCanPrev] = useState(false)
  const [canNext, setCanNext] = useState(true)
  // Estado único de reprodução: só um áudio toca por vez (auto-pause).
  const [playingId, setPlayingId] = useState<string | null>(null)

  const updateArrows = () => {
    const el = trackRef.current
    if (!el) return
    setCanPrev(el.scrollLeft > 8)
    setCanNext(el.scrollLeft < el.scrollWidth - el.clientWidth - 8)
  }

  useEffect(() => {
    updateArrows()
    const el = trackRef.current
    if (!el) return
    el.addEventListener('scroll', updateArrows, { passive: true })
    window.addEventListener('resize', updateArrows)
    return () => {
      el.removeEventListener('scroll', updateArrows)
      window.removeEventListener('resize', updateArrows)
    }
  }, [])

  const scrollByAmount = (dir: 1 | -1) => {
    const el = trackRef.current
    if (!el) return
    el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: 'smooth' })
  }

  return (
    <div className="anim-fb-grid relative">
      {/* Trilho com scroll-snap */}
      <div
        ref={trackRef}
        className="no-scrollbar -mx-6 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth px-6 pb-2 lg:-mx-8 lg:px-8"
      >
        {AUDIO_FEEDBACKS.map((item) => (
          <AudioFeedbackCard key={item.id} item={item} playingId={playingId} setPlayingId={setPlayingId} />
        ))}
        {/* Espaçador para o último card respirar à direita */}
        <div className="shrink-0 pr-1" aria-hidden="true" />
      </div>

      {/* Setas de navegação (desktop) */}
      <button
        onClick={() => scrollByAmount(-1)}
        disabled={!canPrev}
        aria-label="Áudios anteriores"
        className="absolute -left-5 top-1/2 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border-2 border-brand-black bg-brand-beige text-brand-black shadow-lg transition-all hover:bg-brand-black hover:text-brand-beige disabled:pointer-events-none disabled:opacity-0 lg:flex"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={() => scrollByAmount(1)}
        disabled={!canNext}
        aria-label="Próximos áudios"
        className="absolute -right-5 top-1/2 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border-2 border-brand-black bg-brand-beige text-brand-black shadow-lg transition-all hover:bg-brand-black hover:text-brand-beige disabled:pointer-events-none disabled:opacity-0 lg:flex"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  )
}

export function FeedbackSection() {
  const containerRef = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

      if (!prefersReducedMotion) {
        gsap.to('.anim-fb-text', {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%',
          },
        })

        gsap.to('.anim-fb-card', {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.anim-fb-grid',
            start: 'top 85%',
          },
        })

        // Coraçõezinhos flutuando
        gsap.to('.fb-heart', {
          y: '-=12',
          rotation: '+=6',
          duration: 3,
          yoyo: true,
          repeat: -1,
          ease: 'sine.inOut',
          stagger: 0.4,
        })
      } else {
        gsap.set(['.anim-fb-text', '.anim-fb-card'], { opacity: 1, y: 0 })
      }
    },
    { scope: containerRef }
  )

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden border-t border-brand-black/5 bg-brand-beige py-24"
    >
      {/* Corações decorativos */}
      <Heart className="fb-heart pointer-events-none absolute left-[6%] top-32 hidden h-10 w-10 fill-brand-pink text-brand-pink opacity-60 lg:block" />
      <Heart className="fb-heart pointer-events-none absolute right-[8%] top-48 hidden h-8 w-8 fill-brand-orange text-brand-orange opacity-50 lg:block" />
      <Heart className="fb-heart pointer-events-none absolute right-[14%] bottom-24 hidden h-12 w-12 fill-brand-purple text-brand-purple opacity-40 lg:block" />

      <div className="container relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Cabeçalho */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <SectionBadge variant="pink" className="anim-fb-text mb-4 translate-y-10 opacity-0">
            <Heart size={14} className="mr-1.5 fill-current" /> Cartinhas de amor
          </SectionBadge>
          <h2 className="anim-fb-text translate-y-10 text-5xl font-heading font-extrabold leading-tight text-brand-black opacity-0 sm:text-6xl text-balance">
            O que dizem nossos clientes.
          </h2>
          <p className="anim-fb-text mt-6 translate-y-10 text-xl font-medium leading-relaxed text-brand-black/70 opacity-0">
            Quem veste, quem revende e quem recebe os pedidos não esconde a paixão. São histórias
            reais, em vídeo e em áudio, direto de quem já é Lamell Store.
          </p>
        </div>

        {/* Carrossel de feedbacks em vídeo */}
        <div className="mb-20">
          <VideoCarousel />
        </div>

        {/* Divisor com legenda dos áudios */}
        <div className="anim-fb-text mb-10 flex translate-y-10 items-center gap-4 opacity-0">
          <span className="text-sm font-bold uppercase tracking-widest text-brand-black/50">
            Recados de voz
          </span>
          <span className="h-px flex-1 bg-brand-black/10" />
        </div>

        {/* Carrossel de feedbacks em áudio (só um toca por vez) */}
        <AudioCarousel />
      </div>
    </section>
  )
}
