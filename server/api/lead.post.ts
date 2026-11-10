import type { H3Event } from 'h3'
import { createTransport } from 'nodemailer'
import { createError, defineEventHandler, getRequestIP, readBody, useRuntimeConfig, useStorage } from '#imports'
import { leadForms, modelKeyValue, publicModelSlugs, type LeadFormKey, type Localized } from '~/data/dealer'

const MAX_LENGTH = 2000
const WINDOW_MS = 10 * 60 * 1000
const MAX_PER_WINDOW = 5

const attempts = new Map<string, number[]>()

const throttled = (ip: string) => {
  const now = Date.now()
  const recent = (attempts.get(ip) ?? []).filter((time) => now - time < WINDOW_MS)

  if (recent.length >= MAX_PER_WINDOW) {
    return true
  }

  recent.push(now)
  attempts.set(ip, recent)
  return false
}

const asString = (value: unknown) =>
  typeof value === 'string' ? value.trim().slice(0, MAX_LENGTH) : ''

const isEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value)

const escape = (value: string) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')

const localize = (text: Localized, locale: string) =>
  (text as Record<string, string>)[locale] ?? text.en ?? text.fr

const badRequest = (statusMessage: string) => createError({ statusCode: 400, statusMessage })

export default defineEventHandler(async (event: H3Event) => {
  const body = (await readBody(event).catch(() => null)) as Record<string, unknown> | null
  const formKey = asString(body?.form) as LeadFormKey
  const schema = leadForms[formKey]

  if (!schema) {
    throw badRequest('Unknown form')
  }

  if (throttled(getRequestIP(event) || 'unknown')) {
    throw createError({ statusCode: 429, statusMessage: 'Too many requests' })
  }

  // Honeypot : un robot qui remplit ce champ caché obtient une réponse vide.
  if (asString(body?.company)) {
    return { ok: true }
  }

  const raw = (body?.fields ?? {}) as Record<string, unknown>
  const values: Record<string, string> = {}

  for (const field of schema.fields) {
    const input = typeof raw[field.name] === 'string' ? (raw[field.name] as string) : ''

    if (input.length > MAX_LENGTH) {
      throw badRequest(`${field.name} is too long`)
    }

    const value = input.trim()

    if (field.required && !value) {
      throw badRequest(`${field.name} is required`)
    }

    if (field.type === 'email' && value && !isEmail(value)) {
      throw badRequest(`${field.name} is not a valid e-mail`)
    }

    values[field.name] = value
  }

  const locale = ['en', 'fr', 'ar'].includes(asString(body?.locale)) ? asString(body?.locale) : 'fr'
  const modelSlug = values.model
  const modelLabel =
    modelSlug && (publicModelSlugs as readonly string[]).includes(modelSlug)
      ? modelKeyValue[modelSlug]
      : modelSlug || ''

  const lead = {
    receivedAt: new Date().toISOString(),
    form: formKey,
    locale,
    model: modelLabel,
    values,
    ip: getRequestIP(event) || ''
  }

  const config = useRuntimeConfig(event)
  const to = config.mail?.to || config.leadTo || config.smtp.user

  // Toute demande est archivée : la boîte mail du revendeur reste joignable même en cas d'échec SMTP.
  await useStorage('leads').setItem(`${Date.now()}-${formKey}.json`, lead)

  if (!to) {
    console.error('[lead] no recipient configured (NUXT_LEAD_TO or NUXT_SMTP_USER); lead stored only')
    return { ok: true }
  }

  if (!config.smtp.host || !config.smtp.pass) {
    console.warn('[lead] SMTP not configured; lead stored only')
    return { ok: true }
  }

  const rows = schema.fields
    .map(
      (field) =>
        `<tr><td style="padding:6px 12px;border-bottom:1px solid #eee">${escape(
          localize(field.label, locale)
        )}</td><td style="padding:6px 12px;border-bottom:1px solid #eee">${escape(values[field.name] || '—')}</td></tr>`
    )
    .join('')

  const html = `<h2 style="font-family:sans-serif">${escape(localize(schema.title, locale))}</h2>
<table style="border-collapse:collapse;font-family:sans-serif;font-size:14px">${rows}</table>
<p style="font-family:sans-serif;color:#666">Reçu le ${escape(lead.receivedAt)}</p>`

  const text = schema.fields
    .map((field) => `${localize(field.label, locale)}: ${values[field.name] || '-'}`)
    .join('\n')

  try {
    await createTransport({
      host: config.smtp.host,
      port: Number(config.smtp.port) || 465,
      secure: (Number(config.smtp.port) || 465) === 465 || String(config.smtp.secure).toLowerCase() === 'true',
      auth: { user: config.smtp.user, pass: config.smtp.pass }
    }).sendMail({
      from: config.mail?.from || config.smtp.from || config.smtp.user,
      to,
      replyTo: values.email || undefined,
      subject: localize(schema.subject, locale),
      text,
      html
    })
  } catch (error) {
    console.error('[lead] SMTP send failed', error)
    throw createError({ statusCode: 502, statusMessage: 'Mail delivery failed' })
  }

  return { ok: true }
})
