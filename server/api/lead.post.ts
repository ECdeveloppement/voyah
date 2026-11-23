import { randomUUID } from 'node:crypto'
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

const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === 'object' && value !== null && !Array.isArray(value)

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
  const body: unknown = await readBody(event).catch(() => null)

  if (!isRecord(body)) {
    throw badRequest('Invalid request body')
  }

  const formKey = asString(body.form) as LeadFormKey

  if (!Object.prototype.hasOwnProperty.call(leadForms, formKey)) {
    throw badRequest('Unknown form')
  }

  const schema = leadForms[formKey]
  const isQuote = formKey === 'quote'

  if (throttled(getRequestIP(event) || 'unknown')) {
    throw createError({ statusCode: 429, statusMessage: 'Too many requests' })
  }

  // Un devis ne doit jamais annoncer un succès sans acceptation SMTP.
  if (asString(body.company)) {
    if (isQuote) {
      throw badRequest('Invalid submission')
    }
    return { ok: true }
  }

  if (!isRecord(body.fields)) {
    throw badRequest('Fields must be an object')
  }

  const raw = body.fields
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

    if (field.type === 'email' && (/[\r\n]/.test(input) || (value && !isEmail(value)))) {
      throw badRequest(`${field.name} is not a valid e-mail`)
    }

    if (field.allowedValues && value && !field.allowedValues.includes(value)) {
      throw badRequest(`${field.name} is not an allowed value`)
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
  const from = config.mail?.from || config.smtp.from || config.smtp.user

  // Toute demande validée est archivée, même en cas d'échec SMTP.
  await useStorage('leads').setItem(`${randomUUID()}-${formKey}.json`, lead)

  if (isQuote && (!config.smtp.host || !config.smtp.user || !config.smtp.pass || !from)) {
    console.warn('[lead] Quote SMTP not configured; lead stored only')
    throw createError({ statusCode: 503, statusMessage: 'Mail service unavailable' })
  }

  if (!to) {
    console.error('[lead] no recipient configured (NUXT_MAIL_TO, NUXT_LEAD_TO or NUXT_SMTP_USER); lead stored only')
    return { ok: true }
  }

  if (!config.smtp.host || !config.smtp.pass) {
    console.warn('[lead] SMTP not configured; lead stored only')
    return { ok: true }
  }

  const notificationLocale = isQuote ? 'fr' : locale
  const notificationValue = (name: string) =>
    isQuote && name === 'model' ? modelLabel : values[name]
  const notificationHtml = (name: string) => {
    const value = escape(notificationValue(name) || '—')
    return isQuote ? value.replace(/\r\n|\r|\n/g, '<br>') : value
  }

  const rows = schema.fields
    .map(
      (field) =>
        `<tr><td style="padding:6px 12px;border-bottom:1px solid #eee">${escape(
          localize(field.label, notificationLocale)
        )}</td><td style="padding:6px 12px;border-bottom:1px solid #eee">${notificationHtml(field.name)}</td></tr>`
    )
    .join('')

  const html = `<h2 style="font-family:sans-serif">${escape(localize(schema.title, notificationLocale))}</h2>
<table style="border-collapse:collapse;font-family:sans-serif;font-size:14px">${rows}</table>
<p style="font-family:sans-serif;color:#666">Reçu le ${escape(lead.receivedAt)}</p>`

  const text = schema.fields
    .map((field) => `${localize(field.label, notificationLocale)}: ${notificationValue(field.name) || '-'}`)
    .join('\n')

  const port = Number(config.smtp.port) || 465

  try {
    const result = await createTransport({
      host: config.smtp.host,
      port,
      secure: port === 465 || (port !== 587 && String(config.smtp.secure).toLowerCase() === 'true'),
      requireTLS: port === 587,
      connectionTimeout: 10_000,
      greetingTimeout: 10_000,
      socketTimeout: 30_000,
      auth: { user: config.smtp.user, pass: config.smtp.pass }
    }).sendMail({
      from,
      to,
      replyTo: values.email || undefined,
      subject: localize(schema.subject, notificationLocale),
      text,
      html
    })

    if (isQuote && (!result.accepted?.length || result.rejected?.length)) {
      throw new Error('One or more quote recipients were not accepted')
    }
  } catch {
    console.error('[lead] SMTP send failed')
    throw createError({ statusCode: 502, statusMessage: 'Mail delivery failed' })
  }

  return { ok: true }
})
