'use client'

import * as React from 'react'
import Cal, { getCalApi } from '@calcom/embed-react'
import { ArrowRight, Check, Rocket, Sparkles } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { CAL_LINK, WHATSAPP_LINK } from '@/lib/cal'

const STEPS = [
  { id: 1, label: 'Seus dados' },
  { id: 2, label: 'Sua campanha' },
  { id: 3, label: 'Agendamento' },
]

const advertiserTypes = [
  'Artista / Banda',
  'Gravadora / Selo',
  'Organizador de eventos',
  'Agência / Assessoria',
  'Outro',
]

const campaignFrequencies = [
  { value: 'single', label: 'Campanha única / lançamento pontual', requiresDemo: false },
  { value: 'monthly', label: '1 a 2 campanhas por mês', requiresDemo: false },
  { value: 'weekly', label: 'Várias campanhas por mês', requiresDemo: true },
  { value: 'ongoing', label: 'Sempre rodando (always on)', requiresDemo: true },
]

const monthlyBudgets = [
  'Até R$ 2.000',
  'R$ 2.000 – R$ 10.000',
  'R$ 10.000 – R$ 50.000',
  'Mais de R$ 50.000',
  'Prefiro não dizer',
]

const frequencyRequiresDemo = (value: string) => {
  const f = campaignFrequencies.find((c) => c.value === value)
  return f?.requiresDemo ?? false
}

const frequencyLabel = (value: string) => {
  const f = campaignFrequencies.find((c) => c.value === value)
  return f?.label ?? value
}

const formatPhone = (value: string) => {
  const digits = value.replace(/\D/g, '').slice(0, 11)
  if (digits.length === 0) return ''
  if (digits.length <= 2) return `(${digits}`
  if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`
  if (digits.length <= 10) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`
  }
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`
}

type FormData = {
  name: string
  email: string
  phone: string
  brand: string
  advertiserType: string
  campaignFrequency: string
  monthlyBudget: string
}

const inputClasses =
  'w-full h-12 px-0 bg-transparent border-b border-white/20 text-base text-white placeholder:text-zinc-500 focus:outline-none focus:border-white transition-colors'

export function DemoForm() {
  const [currentStep, setCurrentStep] = React.useState(1)
  const [isSubmitted, setIsSubmitted] = React.useState(false)
  const [formData, setFormData] = React.useState<FormData>({
    name: '',
    email: '',
    phone: '',
    brand: '',
    advertiserType: '',
    campaignFrequency: '',
    monthlyBudget: '',
  })
  const hasSentLead = React.useRef(false)

  const sendLead = React.useCallback(async (data: FormData) => {
    if (hasSentLead.current) return
    hasSentLead.current = true
    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...data,
          campaignFrequency: frequencyLabel(data.campaignFrequency),
        }),
      })
      if (!res.ok) {
        hasSentLead.current = false
        console.error('[demo] lead capture failed', await res.text())
      }
    } catch (err) {
      hasSentLead.current = false
      console.error('[demo] lead capture error', err)
    }
  }, [])

  React.useEffect(() => {
    ;(async function () {
      const cal = await getCalApi()
      cal('ui', {
        theme: 'dark',
        cssVarsPerTheme: {
          dark: {
            'cal-bg': 'transparent',
            'cal-bg-emphasis': '#1c1c1c',
            'cal-border': 'rgba(255,255,255,0.1)',
            'cal-border-emphasis': 'rgba(255,255,255,0.2)',
            'cal-text': '#ffffff',
            'cal-text-emphasis': '#ffffff',
            'cal-text-muted': 'rgba(255,255,255,0.6)',
            'cal-brand': '#d8b4fe',
            'cal-brand-emphasis': '#b794e8',
          },
          light: {
            'cal-bg': '#ffffff',
            'cal-bg-emphasis': '#f3f4f6',
            'cal-border': 'rgba(0,0,0,0.1)',
            'cal-border-emphasis': 'rgba(0,0,0,0.2)',
            'cal-text': '#000000',
            'cal-text-emphasis': '#000000',
            'cal-text-muted': 'rgba(0,0,0,0.6)',
            'cal-brand': '#d8b4fe',
            'cal-brand-emphasis': '#b794e8',
          }
        },
        hideEventTypeDetails: false,
        layout: 'month_view',
      })

      cal('on', {
        action: 'bookingSuccessful',
        callback: () => setIsSubmitted(true),
      })
    })()
  }, [])

  const updateField = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleNext = () => {
    if (currentStep === 2) void sendLead(formData)
    if (currentStep < 3) setCurrentStep(currentStep + 1)
  }

  const handleBack = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1)
  }

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return Boolean(formData.name && formData.email)
      case 2:
        return Boolean(formData.advertiserType && formData.campaignFrequency)
      default:
        return false
    }
  }

  if (isSubmitted) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6">
          <Check className="w-8 h-8 text-green-500" />
        </div>
        <h3 className="text-2xl font-semibold text-white mb-3">
          Demonstração agendada!
        </h3>
        <p className="text-base text-zinc-300 mb-6 max-w-sm mx-auto">
          Enviamos um e-mail de confirmação para{' '}
          <strong className="text-white">{formData.email}</strong> com os detalhes do agendamento.
        </p>
        <p className="text-sm text-zinc-500">
          Nossa equipe entrará em contato em breve.
        </p>
      </div>
    )
  }

  const step3IsDemo = frequencyRequiresDemo(formData.campaignFrequency)

  return (
    <div className="w-full max-w-md">
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-white mb-2">
          {currentStep === 3 && step3IsDemo
            ? 'Escolha o melhor horário'
            : currentStep === 3
              ? 'Vamos te chamar agora'
              : 'Agende sua demonstração'}
        </h2>
        <p className="text-base text-zinc-400">
          {currentStep === 3 && step3IsDemo
            ? 'Selecione uma data e horário disponíveis'
            : currentStep === 3
              ? 'Temos um caminho rápido pra você começar'
              : 'Preencha seus dados para personalizar a experiência'}
        </p>
      </div>

      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-2 text-xs text-zinc-500">
          <span className="uppercase tracking-wider">Etapa {currentStep} de 3</span>
        </div>
        <div className="flex gap-1.5">
          {STEPS.map((step) => (
            <div
              key={step.id}
              className={cn(
                'h-1.5 rounded-full transition-all duration-300',
                step.id === currentStep
                  ? 'w-8 bg-brand-purple'
                  : step.id < currentStep
                    ? 'w-4 bg-brand-purple/60'
                    : 'w-4 bg-white/10',
              )}
            />
          ))}
        </div>
      </div>

      <div>
        {currentStep === 1 && (
          <div className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                Nome completo <span className="text-zinc-500">*</span>
              </label>
              <input
                id="name"
                type="text"
                value={formData.name}
                onChange={(e) => updateField('name', e.target.value)}
                placeholder="Seu nome"
                className={inputClasses}
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                Email corporativo <span className="text-zinc-500">*</span>
              </label>
              <input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => updateField('email', e.target.value)}
                placeholder="seu@dominio.com"
                className={inputClasses}
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-white mb-2">
                Telefone / WhatsApp
              </label>
              <input
                id="phone"
                type="tel"
                inputMode="numeric"
                value={formData.phone}
                onChange={(e) => updateField('phone', formatPhone(e.target.value))}
                placeholder="(11) 99999-9999"
                maxLength={16}
                className={inputClasses}
              />
            </div>
          </div>
        )}

        {currentStep === 2 && (
          <div className="space-y-6">
            <div>
              <label htmlFor="brand" className="block text-sm font-medium text-white mb-2">
                Nome do artista / evento / marca
              </label>
              <input
                id="brand"
                type="text"
                value={formData.brand}
                onChange={(e) => updateField('brand', e.target.value)}
                placeholder="Como te conhecem no streaming"
                className={inputClasses}
              />
            </div>

            <div>
              <label htmlFor="advertiserType" className="block text-sm font-medium text-white mb-2">
                Tipo de anunciante <span className="text-zinc-500">*</span>
              </label>
              <div className="relative">
                <select
                  id="advertiserType"
                  value={formData.advertiserType}
                  onChange={(e) => updateField('advertiserType', e.target.value)}
                  className={cn(inputClasses, 'appearance-none cursor-pointer pr-8')}
                >
                  <option value="" disabled className="bg-[#1c1c1c]">
                    Selecione o tipo
                  </option>
                  {advertiserTypes.map((type) => (
                    <option key={type} value={type} className="bg-[#1c1c1c]">
                      {type}
                    </option>
                  ))}
                </select>
                <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none">
                  <svg className="w-5 h-5 text-zinc-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="campaignFrequency" className="block text-sm font-medium text-white mb-2">
                Frequência de campanhas <span className="text-zinc-500">*</span>
              </label>
              <div className="relative">
                <select
                  id="campaignFrequency"
                  value={formData.campaignFrequency}
                  onChange={(e) => updateField('campaignFrequency', e.target.value)}
                  className={cn(inputClasses, 'appearance-none cursor-pointer pr-8')}
                >
                  <option value="" disabled className="bg-[#1c1c1c]">
                    Selecione a frequência
                  </option>
                  {campaignFrequencies.map((freq) => (
                    <option key={freq.value} value={freq.value} className="bg-[#1c1c1c]">
                      {freq.label}
                    </option>
                  ))}
                </select>
                <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none">
                  <svg className="w-5 h-5 text-zinc-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="monthlyBudget" className="block text-sm font-medium text-white mb-2">
                Orçamento mensal estimado
              </label>
              <div className="relative">
                <select
                  id="monthlyBudget"
                  value={formData.monthlyBudget}
                  onChange={(e) => updateField('monthlyBudget', e.target.value)}
                  className={cn(inputClasses, 'appearance-none cursor-pointer pr-8')}
                >
                  <option value="" className="bg-[#1c1c1c]">
                    Selecione a faixa
                  </option>
                  {monthlyBudgets.map((budget) => (
                    <option key={budget} value={budget} className="bg-[#1c1c1c]">
                      {budget}
                    </option>
                  ))}
                </select>
                <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none">
                  <svg className="w-5 h-5 text-zinc-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        )}

        {currentStep === 3 && step3IsDemo && (
          <div className="rounded-lg overflow-hidden">
            <Cal
              calLink={CAL_LINK}
              style={{ width: '100%', minHeight: '500px' }}
              config={{
                name: formData.name,
                email: formData.email,
                notes: `Marca: ${formData.brand || 'N/A'}\nTipo: ${formData.advertiserType}\nFrequência: ${frequencyLabel(formData.campaignFrequency)}\nOrçamento: ${formData.monthlyBudget || 'N/A'}\nWhatsApp: ${formData.phone || 'N/A'}`,
                theme: 'dark',
                layout: 'month_view',
              }}
            />
          </div>
        )}

        {currentStep === 3 && !step3IsDemo && (
          <div className="text-center py-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-purple to-brand-purple-pressed flex items-center justify-center mx-auto mb-4">
              <Rocket className="w-6 h-6 text-black" />
            </div>

            <h3 className="text-xl font-semibold text-white mb-2">
              Você pode começar agora!
            </h3>

            <p className="text-sm text-zinc-300 mb-6 max-w-xs mx-auto">
              Para campanhas pontuais, o Hitlovers é direto ao ponto. Fale com um especialista e configure seu lançamento.
            </p>

            <div className="space-y-3">
              <Button
                size="lg"
                className="w-full bg-brand-purple text-black hover:bg-brand-purple-light h-12 rounded-full font-semibold"
                onClick={() => window.open(WHATSAPP_LINK, '_blank')}
              >
                <Sparkles className="w-4 h-4 mr-2" />
                Falar com um especialista
              </Button>

              <p className="text-xs text-zinc-500">
                Resposta em até 1 dia útil • Sem compromisso
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10">
              <button
                type="button"
                onClick={handleBack}
                className="text-sm text-zinc-400 hover:text-white transition-colors"
              >
                ← Voltar e revisar dados
              </button>
            </div>
          </div>
        )}

        {currentStep < 3 && (
          <div className="flex items-center justify-between mt-10">
            {currentStep > 1 ? (
              <button
                type="button"
                onClick={handleBack}
                className="text-base text-zinc-400 hover:text-white transition-colors"
              >
                Voltar
              </button>
            ) : (
              <div />
            )}

            <Button
              type="button"
              onClick={handleNext}
              disabled={!canProceed()}
              size="lg"
              className="min-w-[160px] bg-brand-purple text-black hover:bg-brand-purple-light h-12 rounded-full font-semibold"
            >
              {currentStep === 2 && frequencyRequiresDemo(formData.campaignFrequency)
                ? 'Escolher horário'
                : 'Continuar'}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        )}

        {currentStep === 3 && step3IsDemo && (
          <div className="mt-6">
            <button
              type="button"
              onClick={handleBack}
              className="text-base text-zinc-400 hover:text-white transition-colors"
            >
              ← Voltar e editar dados
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
