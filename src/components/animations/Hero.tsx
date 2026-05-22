"use client"

import { useRef } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ArrowRight, Star } from "lucide-react"
import { HeroEyebrow } from "@/components/ui/HeroEyebrow"
import { Quatrefoil } from "@/components/ui/BrandElements"

gsap.registerPlugin(useGSAP)

// Cúpula esquerda mais alta (pico y=30), direita mais baixa (pico y=90); base reta sem arredondamento.
const DOUBLE_ARCH_PATH =
  "M 0,700 L 600,700 L 600,260 " +
  "C 600,160 540,90 460,90 C 380,90 320,160 320,260 " +
  "C 320,160 260,30 170,30 C 80,30 0,120 0,260 Z"

function ArchCard({ clipId }: { clipId: string }) {
  return (
    <svg
      viewBox="0 0 600 700"
      className="w-full h-full"
      role="img"
      aria-label="Camisetas premium Lamell Store"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <clipPath id={clipId}>
          <path d={DOUBLE_ARCH_PATH} />
        </clipPath>
      </defs>
      <image
        href="/23.jpg"
        width="600"
        height="700"
        x="0"
        y="0"
        preserveAspectRatio="xMidYMid slice"
        clipPath={"url(#" + clipId + ")"}
      />
    </svg>
  )
}

export function Hero() {
  const container = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches

      if (!prefersReducedMotion) {
        gsap.from(".hero-text", {
          y: 40,
          opacity: 0,
          duration: 1,
          stagger: 0.15,
          ease: "power3.out",
        })

        gsap.to(".floating-card", {
          y: "-=15",
          duration: 3,
          yoyo: true,
          repeat: -1,
          ease: "sine.inOut",
          stagger: {
            amount: 1.5,
            from: "random",
          },
        })

        gsap.to(".rotating-badge", {
          rotation: 360,
          duration: 10,
          repeat: -1,
          ease: "linear",
        })
      }
    },
    { scope: container },
  )

  return (
    <section
      ref={container}
      className="relative min-h-[90vh] overflow-hidden bg-brand-beige flex flex-col justify-center pt-20 pb-0 lg:py-0"
    >
      {/* Texto: dentro do container */}
      <div className="container mx-auto max-w-7xl px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col justify-center max-w-2xl lg:max-w-[52%] py-12 lg:py-32 relative">
          <div className="hero-text mb-6">
            <div className="mb-8">
              <HeroEyebrow icon={Star} variant="light-green">
              MODA QUE ACOMPANHA SUA ROTINA! 
              </HeroEyebrow>
            </div>
            <h1 className="text-5xl font-heading font-extrabold leading-[1.05] tracking-tight sm:text-6xl lg:text-[5rem] text-brand-black text-balance">
              Seja um revendedor credenciado Lamell Store.
            </h1>
          </div>

          <p className="hero-text mb-10 text-lg leading-relaxed text-brand-black/80 sm:text-xl font-medium">
            Produtos premium de algodão 100% Fio 30.1 penteado, margem de até 200% de lucro na revenda e suporte completo para o crescimento do seu negócio.
          </p>

          <div className="hero-text flex flex-col gap-4 relative z-10 sm:flex-row sm:flex-wrap sm:items-center">
            <a
              href="https://wa.me/5562999895357?text=Olá%20quero%20me%20tornar%20um%20revendedor%20credenciado%20da%20Lamell%20Store"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-brand-green px-8 text-base font-bold text-brand-black hover:bg-brand-green/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-black shadow-md cursor-pointer"
            >
              Solicitar aprovação
              <ArrowRight size={18} aria-hidden="true" />
            </a>

            <a
              href="https://wa.me/5562999895357?text=Olá%20quero%20criar%20uma%20conta%20de%20revenda%20na%20Lamell%20Store"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-14 items-center justify-center rounded-full border-2 border-brand-black bg-transparent px-8 text-base font-bold text-brand-black hover:bg-brand-black/5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-black cursor-pointer"
            >
              Criar conta
            </a>
          </div>
        </div>
      </div>

      {/* Visual mobile/tablet: dentro do fluxo, abaixo do texto */}
      <div className="lg:hidden mt-8 w-full px-6">
        <div className="relative max-w-[400px] mx-auto aspect-[6/7] pointer-events-auto">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-brand-blue/20 rounded-[40%_60%_70%_30%/40%_50%_60%_50%] blur-3xl -z-10" />

          <ArchCard clipId="double-arch-clip-mobile" />

          <div className="floating-card absolute left-[-5%] top-[48%] z-20 w-14 h-14 hover:rotate-12 transition-transform duration-300">
            <Quatrefoil className="w-full h-full fill-brand-orange" />
          </div>
        </div>
      </div>

      {/* Visual desktop: ancorado ao bottom-direita da viewport, com leve sangria embaixo */}
      <div className="hidden lg:block absolute right-0 bottom-0 translate-y-[3%] w-[48vw] max-w-[720px] aspect-[6/7] z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-brand-blue/20 rounded-[40%_60%_70%_30%/40%_50%_60%_50%] blur-3xl -z-10" />

        <ArchCard clipId="double-arch-clip-desktop" />

        <div className="floating-card absolute left-[-5%] top-[36%] z-20 w-16 h-16 xl:w-20 xl:h-20 hover:rotate-12 transition-transform duration-300">
          <Quatrefoil className="w-full h-full fill-brand-orange" />
        </div>
      </div>
    </section>
  )
}
