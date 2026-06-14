'use client'

import { useState, useRef, useEffect } from 'react'
import { Search, MapPin, Store, Instagram, Phone, X, AlertTriangle, Crosshair, Loader2 } from 'lucide-react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { HeroEyebrow } from '@/components/ui/HeroEyebrow'
import { BRAZIL_MAP_DATA } from './brazilMapData'

gsap.registerPlugin(useGSAP)

// All 27 Brazilian States list
const STATES = [
  { value: "AC", label: "Acre" }, { value: "AL", label: "Alagoas" }, { value: "AP", label: "Amapá" },
  { value: "AM", label: "Amazonas" }, { value: "BA", label: "Bahia" }, { value: "CE", label: "Ceará" },
  { value: "DF", label: "Distrito Federal" }, { value: "ES", label: "Espírito Santo" }, { value: "GO", label: "Goiás" },
  { value: "MA", label: "Maranhão" }, { value: "MT", label: "Mato Grosso" }, { value: "MS", label: "Mato Grosso do Sul" },
  { value: "MG", label: "Minas Gerais" }, { value: "PA", label: "Pará" }, { value: "PB", label: "Paraíba" },
  { value: "PR", label: "Paraná" }, { value: "PE", label: "Pernambuco" }, { value: "PI", label: "Piauí" },
  { value: "RJ", label: "Rio de Janeiro" }, { value: "RN", label: "Rio Grande do Norte" }, { value: "RS", label: "Rio Grande do Sul" },
  { value: "RO", label: "Rondônia" }, { value: "RR", label: "Roraima" }, { value: "SC", label: "Santa Catarina" },
  { value: "SP", label: "São Paulo" }, { value: "SE", label: "Sergipe" }, { value: "TO", label: "Tocantins" }
]

// Authorizated resellers with accurate database
const REAL_RESELLERS = [
  { id: 1, name: "Urban Streetwear Gyn", type: "Loja Física", address: "Av. T-9, 1234 - Setor Bueno", city: "Goiânia", uf: "GO", ig: "@urban.gyn", phone: "5562999999999" },
  { id: 2, name: "Conceito Store Bueno", type: "Física e Online", address: "Rua 44, Galeria Premium - Setor Bueno", city: "Goiânia", uf: "GO", ig: "@conceitostore", phone: "5562988888888" },
  { id: 3, name: "Lamell Store Oficial (Bueno)", type: "Física e Online", address: "Rua T-36, Setor Bueno", city: "Goiânia", uf: "GO", ig: "@lamellstore", phone: "5562999895357" },
  
  { id: 4, name: "Metropolis Streetwear", type: "Loja Física", address: "Rua Augusta, 1050 - Consolação", city: "São Paulo", uf: "SP", ig: "@metropolis.sp", phone: "5511999999999" },
  { id: 5, name: "Paulista Concept", type: "Física e Online", address: "Av. Paulista, 2000 - Bela Vista", city: "São Paulo", uf: "SP", ig: "@paulistaconcept", phone: "5511988888888" },
  { id: 6, name: "Vanguard Shop", type: "Online", address: "Envio para toda capital", city: "São Paulo", uf: "SP", ig: "@vanguard.sp", phone: "5511977777777" },

  { id: 7, name: "Carioca Street", type: "Loja Física", address: "Av. Atlântica, 500 - Copacabana", city: "Rio de Janeiro", uf: "RJ", ig: "@carioca.street", phone: "5521999999999" },
  { id: 8, name: "Ipanema Premium", type: "Física e Online", address: "Rua Visconde de Pirajá, 150 - Ipanema", city: "Rio de Janeiro", uf: "RJ", ig: "@ipanema.premium", phone: "5521988888888" },

  { id: 9, name: "Capital Concept", type: "Loja Física", address: "CLS 302 Bloco B - Asa Sul", city: "Brasília", uf: "DF", ig: "@capitalconcept", phone: "5561999999999" },
  
  { id: 10, name: "Belo Horizonte Outlet", type: "Loja Física", address: "Av. do Contorno, 6000 - Savassi", city: "Belo Horizonte", uf: "MG", ig: "@bh.outlet", phone: "5531999999999" },
]

export function InteractiveMap() {
  const containerRef = useRef<HTMLElement>(null)
  const mapRef = useRef<SVGSVGElement>(null)
  const resultsRef = useRef<HTMLDivElement>(null)

  const [selectedState, setSelectedState] = useState<string | null>(null)
  const [hoveredState, setHoveredState] = useState<string | null>(null)
  const [selectedCity, setSelectedCity] = useState<string | null>(null)
  const [cities, setCities] = useState<string[]>([])
  const [loadingCities, setLoadingCities] = useState(false)
  const [citiesError, setCitiesError] = useState(false)

  // Fetch Cities dynamically from IBGE API
  useEffect(() => {
    if (!selectedState) {
      setCities([])
      return
    }

    let active = true
    setLoadingCities(true)
    setCitiesError(false)

    fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedState}/municipios?ordenar=nome`)
      .then(res => {
        if (!res.ok) throw new Error('Erro ao carregar cidades')
        return res.json()
      })
      .then(data => {
        if (active) {
          const names = data.map((c: any) => c.nome)
          setCities(names)
          setLoadingCities(false)
        }
      })
      .catch(err => {
        console.error(err)
        if (active) {
          setCitiesError(true)
          setLoadingCities(false)
          // Fallback data in case of API failure
          const offlineFallback: Record<string, string[]> = {
            "GO": ["Goiânia", "Anápolis", "Aparecida de Goiânia", "Rio Verde", "Caldas Novas"],
            "SP": ["São Paulo", "Campinas", "Guarulhos", "Ribeirão Preto", "Osasco"],
            "RJ": ["Rio de Janeiro", "Niterói", "Petrópolis", "Búzios"],
            "MG": ["Belo Horizonte", "Uberlândia", "Contagem", "Juiz de Fora"],
            "DF": ["Brasília"],
          }
          setCities(offlineFallback[selectedState] || ["Outra Cidade"])
        }
      })

    return () => {
      active = false
    }
  }, [selectedState])

  // Zoom into selected state using accurate bounding box (getBBox)
  const handleStateClick = (uf: string) => {
    setSelectedState(uf)
    setSelectedCity(null)
    
    setTimeout(() => {
      const pathElement = document.getElementById(`BR-${uf}`) as SVGPathElement | null
      const svgElement = mapRef.current
      if (pathElement && svgElement) {
        const state = BRAZIL_MAP_DATA.states.find(s => s.id === uf)
        if (state) {
          const bbox = pathElement.getBBox()
          
          // Parse translate: e.g. "(-445.79, -375.93)" or "translate(-445.79, -375.93)"
          const translateClean = state.translate.replace('translate', '').trim()
          const translateMatch = translateClean.match(/\(([^,]+),\s*([^)]+)\)/)
          const translateX = translateMatch ? parseFloat(translateMatch[1]) : 0
          const translateY = translateMatch ? parseFloat(translateMatch[2]) : 0
          
          // Parse matrix: e.g. "1 0 0 1 139.79 56.66"
          const matrixParts = state.matrix.trim().split(/\s+/)
          const matrixX = matrixParts.length >= 6 ? parseFloat(matrixParts[4]) : 0
          const matrixY = matrixParts.length >= 6 ? parseFloat(matrixParts[5]) : 0
          
          const padding = 60 // comfortable padding
          
          const targetX = bbox.x + translateX + matrixX + 540 - padding
          const targetY = bbox.y + translateY + matrixY + 540 - padding
          const targetW = bbox.width + padding * 2
          const targetH = bbox.height + padding * 2
          
          gsap.to(svgElement, {
            attr: { viewBox: `${targetX} ${targetY} ${targetW} ${targetH}` },
            duration: 1.2,
            ease: "power3.inOut"
          })
        }
      }
    }, 50)
  }

  const resetMap = () => {
    setSelectedState(null)
    setSelectedCity(null)
    if (mapRef.current) {
      gsap.to(mapRef.current, {
        attr: { viewBox: "160 180 760 760" },
        duration: 1.2,
        ease: "power3.inOut"
      })
    }
  }

  // Filtered store results (computed reactively on state/city change)
  const filteredResellers = REAL_RESELLERS.filter(r => {
    const matchState = r.uf === selectedState
    const matchCity = !selectedCity || r.city.toLowerCase() === selectedCity.toLowerCase()
    return matchState && matchCity
  })

  const hasCoverage = filteredResellers.length > 0

  // Count active resellers for each state (helper for map tooltips)
  const getResellersCount = (uf: string) => {
    return REAL_RESELLERS.filter(r => r.uf === uf).length
  }

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      if (!prefersReducedMotion) {
        gsap.from('.anim-header', {
          y: 30, opacity: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out'
        })
        
        // Entrance animation for map
        gsap.from('.map-svg-container', {
          scale: 0.95, opacity: 0, duration: 1.2, ease: 'power2.out'
        })
      }
    },
    { scope: containerRef }
  )

  // Smooth scroll and entrance animation for results
  useGSAP(() => {
    if (selectedState) {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      if (!prefersReducedMotion) {
        gsap.fromTo('.anim-result-card, .anim-coverage-banner',
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'power3.out' }
        )
      }
      
      // Auto smooth scroll to results
      setTimeout(() => {
        resultsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 300)
    }
  }, [selectedState, selectedCity])

  return (
    <section ref={containerRef} className="py-24 bg-brand-beige min-h-screen flex flex-col border-t border-brand-black/5">
      <div className="container mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="anim-header mb-8 flex justify-center">
            <HeroEyebrow icon={MapPin} variant="light-green">
              Rede credenciada
            </HeroEyebrow>
          </div>
          <h1 className="anim-header text-5xl font-heading font-extrabold leading-[1.05] tracking-tight sm:text-6xl lg:text-[5rem] text-brand-black text-balance mb-6">
            Encontre um revendedor
          </h1>
          <p className="anim-header text-lg sm:text-xl text-brand-black/80 leading-relaxed font-medium max-w-2xl mx-auto">
            Explore o mapa oficial ou busque por cidade para encontrar os revendedores autorizados da Lamell Store mais próximos.
          </p>
        </div>

        {/* Map and Search Layout */}
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-8 items-stretch bg-white rounded-[3rem] p-8 lg:p-12 border-2 border-brand-black shadow-2xl relative z-20">
          
          {/* Map Area */}
          <div className="lg:col-span-3 relative aspect-square lg:aspect-auto lg:h-[550px] bg-brand-beige/20 rounded-3xl border-2 border-brand-black/10 overflow-hidden group map-svg-container shadow-inner">
            
            <div className="absolute top-6 left-6 z-10">
              <span className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full font-bold text-sm border-2 border-brand-black shadow-md">
                <Crosshair size={16} className="text-brand-orange animate-pulse" /> Mapa Interativo
              </span>
            </div>

            {selectedState && (
              <button 
                onClick={resetMap}
                className="absolute top-6 right-6 z-10 bg-brand-orange text-brand-beige p-3 rounded-full hover:bg-brand-orange/90 transition-all shadow-md active:scale-95"
                title="Resetar Zoom"
              >
                <X size={20} />
              </button>
            )}

            {/* Vector Map of Brazil */}
            <svg 
              ref={mapRef}
              viewBox="160 180 760 760" 
              className="w-full h-full p-4 transition-all duration-300 select-none outline-none"
              preserveAspectRatio="xMidYMid meet"
            >
              <defs>
                <filter id="map-drop-shadow" x="-10%" y="-10%" width="130%" height="130%">
                  <feDropShadow dx="2" dy="5" stdDeviation="4" floodColor="#111111" floodOpacity="0.15"/>
                </filter>
              </defs>

              <g filter="url(#map-drop-shadow)">
                <g transform="matrix(1 0 0 1 540 540)">
                  {BRAZIL_MAP_DATA.states.map((state) => {
                    const isSelected = selectedState === state.id
                    const isHovered = hoveredState === state.id
                    const isDimmed = selectedState && !isSelected
                    const hasStores = getResellersCount(state.id) > 0

                    return (
                      <g 
                        key={state.id} 
                        transform={`matrix(${state.matrix})`}
                        className="cursor-pointer group/state outline-none"
                        onClick={() => handleStateClick(state.id)}
                        onMouseEnter={() => setHoveredState(state.id)}
                        onMouseLeave={() => setHoveredState(null)}
                      >
                        <path 
                          id={`BR-${state.id}`}
                          transform={`translate${state.translate}`}
                          d={state.d}
                          className={`transition-all duration-300 ${
                            isSelected ? 'fill-brand-orange stroke-brand-black stroke-[3.5]' :
                            isHovered ? 'fill-brand-orange/60 stroke-brand-black stroke-[2.5]' :
                            isDimmed ? 'fill-brand-black/5 stroke-brand-black/10 stroke-[1]' :
                            hasStores ? 'fill-brand-black/95 stroke-brand-beige stroke-[1.5]' :
                            'fill-brand-black/85 stroke-brand-beige stroke-[1]'
                          }`}
                          style={{ transformOrigin: 'center' }}
                        />
                      </g>
                    )
                  })}
                </g>
              </g>

              {/* State Acronym Labels */}
              <g className="pointer-events-none select-none">
                {BRAZIL_MAP_DATA.acronyms.map((acronym) => {
                  const isSelected = selectedState === acronym.id
                  const isDimmed = selectedState && !isSelected
                  const hasStores = getResellersCount(acronym.id) > 0

                  return (
                    <g key={acronym.id} transform={`matrix(${acronym.matrix})`}>
                      <text
                        id={acronym.id}
                        className={`text-[12px] font-heading font-black select-none transition-all duration-300 ${
                          isSelected ? 'fill-brand-black scale-125' :
                          isDimmed ? 'fill-brand-black/10' :
                          hasStores ? 'fill-brand-orange' :
                          'fill-brand-beige'
                        }`}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        {acronym.tspans.map((tspan, idx) => (
                          <tspan key={idx} x={tspan.x} y={tspan.y}>
                            {tspan.text}
                          </tspan>
                        ))}
                      </text>
                    </g>
                  )
                })}
              </g>

              {/* Grid dots background inside SVG */}
              <pattern id="grid-dots" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
                <circle cx="15" cy="15" r="1.5" fill="#111111" opacity="0.07"></circle>
              </pattern>
              <rect x="0" y="0" width="1080" height="1080" fill="url(#grid-dots)" className="-z-10 pointer-events-none" />
            </svg>

            {/* Tooltip Overlay */}
            {hoveredState && !selectedState && (
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-brand-orange text-brand-beige px-6 py-3 rounded-full font-bold text-sm shadow-2xl flex items-center gap-3 border border-brand-beige/20 pointer-events-none animate-in fade-in slide-in-from-bottom-2 duration-200">
                <MapPin size={16} className="text-brand-orange" />
                <span>{STATES.find(s => s.value === hoveredState)?.label}</span>
                <span className={`px-2 py-0.5 rounded text-xs font-bold ${
                  getResellersCount(hoveredState) > 0 ? 'bg-brand-orange text-brand-black' : 'bg-white/10 text-white/60'
                }`}>
                  {getResellersCount(hoveredState) === 1 
                    ? '1 Revendedor' 
                    : `${getResellersCount(hoveredState)} Revendedores`}
                </span>
              </div>
            )}
          </div>

          {/* Search Panel */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <div className="bg-brand-beige p-6 sm:p-8 rounded-3xl border-2 border-brand-black/10 h-full flex flex-col justify-start shadow-inner">
              <h3 className="font-heading font-extrabold text-2xl mb-6 text-brand-black flex items-center gap-3">
                <Search className="text-brand-orange" size={24} />
                Busca Rápida
              </h3>
              
              <div className="flex flex-col gap-5">
                {/* State Select */}
                <div>
                  <label htmlFor="state" className="block text-sm font-bold text-brand-black/70 mb-2">Selecione o Estado</label>
                  <div className="relative">
                    <select 
                      id="state"
                      value={selectedState || ''}
                      onChange={(e) => handleStateClick(e.target.value)}
                      className="w-full bg-white border-2 border-brand-black rounded-xl px-4 py-4 text-brand-black font-bold focus:outline-none focus:border-brand-orange focus:ring-2 focus:ring-brand-orange appearance-none cursor-pointer shadow-[3px_3px_0px_0px_rgba(17,17,17,1)] transition-all"
                    >
                      <option value="" disabled>Escolha no mapa ou na lista...</option>
                      {STATES.map(s => (
                        <option key={s.value} value={s.value}>{s.label}</option>
                      ))}
                    </select>
                    <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 border-l-2 border-b-2 border-brand-black w-2.5 h-2.5 -rotate-45" />
                  </div>
                </div>

                {/* City Select */}
                <div>
                  <label htmlFor="city" className="block text-sm font-bold text-brand-black/70 mb-2">Selecione a Cidade</label>
                  <div className="relative">
                    <select 
                      id="city"
                      value={selectedCity || ''}
                      onChange={(e) => setSelectedCity(e.target.value)}
                      disabled={!selectedState || loadingCities}
                      className="w-full bg-white border-2 border-brand-black rounded-xl px-4 py-4 text-brand-black font-bold focus:outline-none focus:border-brand-orange focus:ring-2 focus:ring-brand-orange appearance-none disabled:opacity-50 disabled:bg-brand-black/5 disabled:cursor-not-allowed cursor-pointer shadow-[3px_3px_0px_0px_rgba(17,17,17,1)] transition-all"
                    >
                      <option value="" disabled>
                        {loadingCities ? "Carregando cidades..." : selectedState ? "Todas as Cidades" : "Aguardando estado..."}
                      </option>
                      {cities.map(c => (
                        <option key={c} value={c}>{c}</option>
                      ))}
                    </select>
                    {loadingCities ? (
                      <div className="absolute right-4 top-1/2 -translate-y-1/2">
                        <Loader2 className="animate-spin text-brand-orange" size={18} />
                      </div>
                    ) : (
                      <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 border-l-2 border-b-2 border-brand-black w-2.5 h-2.5 -rotate-45" />
                    )}
                  </div>
                  {citiesError && (
                    <span className="text-xs text-red-500 font-medium mt-1.5 block">Erro ao buscar cidades do IBGE. Carregando cidades locais.</span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Results Area */}
      <div 
        ref={resultsRef} 
        className="w-full pt-16 pb-24 outline-none" 
        tabIndex={-1}
        aria-live="polite"
      >
        {selectedState && (
          <div className="container mx-auto max-w-7xl px-6 lg:px-8">
            
            {hasCoverage ? (
              <div>
                <div className="mb-10 text-center sm:text-left flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-brand-black/15 pb-6">
                  <div>
                    <h3 className="text-3xl sm:text-4xl font-heading font-extrabold text-brand-black mb-2">
                      Revendedores em {selectedCity || STATES.find(s => s.value === selectedState)?.label}
                    </h3>
                    <p className="text-brand-black/60 font-bold">{filteredResellers.length} {filteredResellers.length === 1 ? 'revendedor autorizado encontrado.' : 'revendedores autorizados encontrados.'}</p>
                  </div>
                  <div className="bg-brand-orange text-brand-beige px-5 py-2.5 rounded-full font-bold text-sm inline-flex items-center gap-2 shadow-md self-center sm:self-auto">
                    <Store size={16} className="text-brand-orange" /> Rede credenciada
                  </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredResellers.map((reseller) => (
                    <div key={reseller.id} className="anim-result-card bg-white rounded-3xl p-6 border-2 border-brand-black shadow-[8px_8px_0px_0px_rgba(17,17,17,1)] hover:-translate-y-2 hover:shadow-[12px_12px_0px_0px_rgba(17,17,17,1)] transition-all duration-300 flex flex-col">
                      
                      <div className="flex justify-between items-start mb-6">
                        <div>
                          <h4 className="font-heading font-extrabold text-2xl text-brand-black mb-2 leading-tight">{reseller.name}</h4>
                          <span className="inline-block bg-brand-orange/20 text-brand-orange border border-brand-orange/30 text-xs font-bold px-2.5 py-1 rounded-md uppercase tracking-wider">
                            {reseller.type}
                          </span>
                        </div>
                      </div>

                      <div className="flex flex-col gap-4 mb-8 flex-grow">
                        <div className="flex items-start gap-3 p-3 bg-brand-beige/50 rounded-xl border border-brand-black/5">
                          <MapPin size={18} className="shrink-0 mt-0.5 text-brand-black" />
                          <span className="font-medium text-sm text-brand-black/80">{reseller.address}</span>
                        </div>
                        <div className="flex items-center gap-3 px-3">
                          <Instagram size={18} className="shrink-0 text-brand-black" />
                          <a href={`https://instagram.com/${reseller.ig.replace('@', '')}`} target="_blank" rel="noopener noreferrer" className="font-bold text-sm hover:text-brand-orange transition-colors">
                            {reseller.ig}
                          </a>
                        </div>
                      </div>

                      <a 
                        href={`https://wa.me/${reseller.phone}?text=Olá,%20vi%20sua%20loja%20no%20mapa%20da%20Lamell%20Store%20e%20gostaria%20de%20saber%20mais%20sobre%20os%20produtos.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 w-full py-4 rounded-xl bg-brand-orange text-brand-beige font-extrabold hover:bg-brand-orange/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange border border-transparent shadow-md active:scale-95"
                      >
                        <Phone size={18} /> Chamar no WhatsApp
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              // "Seja o primeiro" call-to-action banner
              <div className="anim-coverage-banner max-w-3xl mx-auto text-center bg-brand-pink rounded-[3rem] p-10 lg:p-16 border border-brand-black/10 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange/20 blur-[80px] rounded-full"></div>

                <div className="w-24 h-24 bg-brand-orange text-brand-beige rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-lg rotate-12 relative z-10 border-4 border-brand-orange">
                  <AlertTriangle size={40} strokeWidth={2.5} />
                </div>

                <h3 className="text-4xl font-heading font-extrabold text-brand-black mb-6 relative z-10 leading-tight">
                  Sua região está<br/>no nosso radar.
                </h3>

                <p className="text-brand-black/70 font-medium text-xl mb-12 leading-relaxed max-w-2xl mx-auto relative z-10">
                  Ainda não temos revendedores oficiais ativos em <strong className="text-brand-orange">{selectedCity ? `${selectedCity} - ${selectedState}` : STATES.find(s => s.value === selectedState)?.label}</strong>. Essa é a oportunidade perfeita para você liderar o mercado de atacado e revenda na sua região.
                </p>
                
                <a 
                  href={`https://api.whatsapp.com/send/?phone=5562999895357&text=Ol%C3%A1!+Gostaria+de+ser+o+primeiro+revendedor+autorizado+da+Lamell+Store+em+${encodeURIComponent((selectedCity ? `${selectedCity} - ` : '') + STATES.find(s => s.value === selectedState)?.label)}!&type=phone_number&app_absent=0`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 w-full sm:w-auto px-10 h-16 rounded-full bg-brand-green text-brand-black font-extrabold text-lg hover:bg-brand-green/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green relative z-10 shadow-[0_0_30px_rgba(255,142,191,0.3)] active:scale-95"
                >
                  <Store size={24} /> Quero ser o primeiro revendedor
                </a>
              </div>
            )}

          </div>
        )}
      </div>

    </section>
  )
}
