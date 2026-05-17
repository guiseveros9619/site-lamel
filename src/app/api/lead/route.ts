import { Resend } from 'resend'

type LeadPayload = {
  name?: string
  email?: string
  phone?: string
  brand?: string
  advertiserType?: string
  campaignFrequency?: string
  monthlyBudget?: string
}

const escape = (value: string) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')

const row = (label: string, value: string | undefined) => `
  <tr>
    <td style="padding:8px 12px;color:#71717a;font-size:13px;border-bottom:1px solid #27272a;">${escape(label)}</td>
    <td style="padding:8px 12px;color:#fafafa;font-size:14px;border-bottom:1px solid #27272a;">${escape(value && value.trim() ? value : '—')}</td>
  </tr>
`

const buildHtml = (data: LeadPayload) => `
<!doctype html>
<html><body style="margin:0;background:#0a0a0a;font-family:-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;">
  <div style="max-width:560px;margin:0 auto;padding:32px 24px;">
    <h1 style="color:#fafafa;font-size:20px;margin:0 0 4px 0;">Novo lead — demonstração</h1>
    <p style="color:#a1a1aa;font-size:14px;margin:0 0 24px 0;">Capturado no step 3 da página /demonstracao</p>
    <table style="width:100%;border-collapse:collapse;background:#18181b;border-radius:12px;overflow:hidden;">
      ${row('Nome', data.name)}
      ${row('Email', data.email)}
      ${row('WhatsApp', data.phone)}
      ${row('Marca / artista / evento', data.brand)}
      ${row('Tipo de anunciante', data.advertiserType)}
      ${row('Frequência de campanhas', data.campaignFrequency)}
      ${row('Orçamento mensal', data.monthlyBudget)}
    </table>
    <p style="color:#52525b;font-size:12px;margin-top:24px;">Enviado em ${new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' })}</p>
  </div>
</body></html>
`

export async function POST(req: Request) {
  let data: LeadPayload
  try {
    data = await req.json()
  } catch {
    return Response.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  if (!data?.name || !data?.email) {
    return Response.json({ error: 'Missing name or email' }, { status: 400 })
  }

  const apiKey = process.env.RESEND_API_KEY
  const to = process.env.LEAD_EMAIL_TO
  const from = process.env.LEAD_EMAIL_FROM ?? 'Hitlovers <onboarding@resend.dev>'

  if (!apiKey || !to) {
    console.error('[api/lead] Missing RESEND_API_KEY or LEAD_EMAIL_TO env vars')
    return Response.json({ error: 'Server not configured' }, { status: 500 })
  }

  const resend = new Resend(apiKey)

  const { error } = await resend.emails.send({
    from,
    to,
    replyTo: data.email,
    subject: `Novo lead Hitlovers — ${data.name}`,
    html: buildHtml(data),
  })

  if (error) {
    console.error('[api/lead] Resend error:', error)
    return Response.json({ error: 'Failed to send email' }, { status: 502 })
  }

  return Response.json({ ok: true })
}
