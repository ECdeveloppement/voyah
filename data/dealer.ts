/**
 * Revendeur: coordonnées, réseaux sociaux, brochures et formulaires.
 * C'est le seul fichier à éditer pour brancher les infos du concessionnaire.
 * Les URL laissées à '' ne sont pas rendues sur le site.
 */

export type Localized = { en: string; fr: string; ar: string }

export const t = (en: string, fr: string, ar: string): Localized => ({ en, fr, ar })

/** Modèles exhibés, dans l'ordre d'affichage. Les autres pages modèle sont masquées. */
export const publicModelSlugs = ['free.html', 'newDreamer26.html', 'passion.html', 'courage.html'] as const

export type PublicModelSlug = (typeof publicModelSlugs)[number]

/** Titre court affiché dans le menu, les slides et les sélecteurs de formulaire. */
export const modelDisplayName: Record<string, Localized> = {
  'free.html': t('VOYAH FREE', 'VOYAH FREE', 'VOYAH FREE'),
  'newDreamer26.html': t('VOYAH DREAM', 'VOYAH DREAM', 'VOYAH DREAM'),
  'passion.html': t('VOYAH PASSION', 'VOYAH PASSION', 'VOYAH PASSION'),
  'courage.html': t('VOYAH COURAGE', 'VOYAH COURAGE', 'VOYAH COURAGE')
}

/** Valeur transmise au concessionnaire quand une demande concerne un modèle précis. */
export const modelKeyValue: Record<string, string> = {
  'free.html': 'VOYAH FREE',
  'newDreamer26.html': 'VOYAH DREAM',
  'passion.html': 'VOYAH PASSION',
  'courage.html': 'VOYAH COURAGE'
}

/** Déposer les PDF officiels dans public/brochures/ pour activer le téléchargement. */
export const brochureBySlug: Record<string, string> = {
  'free.html': '/brochures/voyah-free.pdf',
  'newDreamer26.html': '/brochures/voyah-dream.pdf'
}

export type SocialLink = { id: string; label: Localized; url: string }

/** Renseigner les profils du concessionnaire ; une entrée avec url '' reste cachée. */
export const socialLinks: SocialLink[] = [
  { id: 'facebook', label: t('Facebook', 'Facebook', 'فيسبوك'), url: '' },
  { id: 'instagram', label: t('Instagram', 'Instagram', 'إنستغرام'), url: '' },
  { id: 'tiktok', label: t('TikTok', 'TikTok', 'تيك توك'), url: '' },
  { id: 'youtube', label: t('YouTube', 'YouTube', 'يوتيوب'), url: '' },
  { id: 'x', label: t('X', 'X', 'إكس'), url: '' },
  { id: 'linkedin', label: t('LinkedIn', 'LinkedIn', 'لينكدإن'), url: '' },
  { id: 'whatsapp', label: t('WhatsApp', 'WhatsApp', 'واتساب'), url: '' }
]

export type DealerContact = {
  brandLabel: string
  partnerLabel: string
  partnerSubLabel: Localized
  partnerLogo: string
  address: Localized
  phone: string
  phoneHref: string
  phoneSecondary: string
  phoneSecondaryHref: string
  email: string
  workingHours: Localized
  mapUrl: string
}

export const dealerContact: DealerContact = {
  brandLabel: 'VOYAH',
  partnerLabel: 'AUTO HALL',
  partnerSubLabel: t('Voyah Tunisia', 'Voyah Tunisie', 'فواه تونس'),
  partnerLogo: '',
  address: t(
    'Auto Hall, Route de la Marsa GP9, Cité Essalema, 2079 Tunis',
    'Auto Hall, Route de la Marsa GP9, Cité Essalema, 2079 Tunis',
    ' AUTO Hall، طريق المرسى GP9، حي السلامة، 2079 تونس'
  ),
  phone: '+216 93 107 107',
  phoneHref: 'tel:+21693107107',
  phoneSecondary: '+216 29 803 078',
  phoneSecondaryHref: 'tel:+21629803078',
  email: 'boc@autohall.tn',
  workingHours: t(
    'Monday to Friday: 8:30 - 18:00 / Saturday: 9:00 - 14:00',
    'Du lundi au vendredi : 8h30 - 18h00 / Samedi : 9h00 - 14h00',
    'الاثنين إلى الجمعة: 8:30 - 18:00 / السبت: 9:00 - 14:00'
  ),
  mapUrl: 'https://www.google.com/maps?q=Route+de+la+Marsa+Cite+Essalema+Tunis'
}

export type LeadField = {
  name: string
  label: Localized
  type: 'text' | 'email' | 'tel' | 'date' | 'time' | 'select' | 'textarea'
  required?: boolean
  options?: 'models'
  placeholder?: Localized
}

/**
 * Champs des deux formulaires. À remplacer dès que la liste définitive est communiquée :
 * tout ce qui est déclaré ici est rendu, validé, transmis et envoyé par e-mail.
 */
export const leadForms = {
  'test-drive': {
    title: t('Book a Test Drive', 'Demander un essai', 'احجز تجربة قيادة'),
    subject: t('Voyah — Test drive request', 'Voyah — Demande d’essai', 'Voyah — طلب تجربة قيادة'),
    success: t(
      'Your test drive request has been sent. Our team will contact you to confirm the appointment.',
      'Votre demande d’essai a été envoyée. Notre équipe vous contactera pour confirmer le rendez-vous.',
      'تم إرسال طلب تجربة القيادة. سيتواصل معك فريقنا لتأكيد الموعد.'
    ),
    fields: [
      { name: 'name', label: t('Your Name', 'Votre nom', 'الاسم'), type: 'text', required: true },
      { name: 'email', label: t('E-mail', 'E-mail', 'البريد الإلكتروني'), type: 'email', required: true },
      { name: 'phone', label: t('Phone Number', 'Numéro de téléphone', 'رقم الهاتف'), type: 'tel', required: true },
      { name: 'model', label: t('Select Model', 'Choisir un modèle', 'اختر الطراز'), type: 'select', options: 'models' },
      { name: 'date', label: t('Preferred Date', 'Date souhaitée', 'التاريخ المفضل'), type: 'date', required: true },
      { name: 'time', label: t('Preferred Time', 'Heure souhaitée', 'الوقت المفضل'), type: 'time' }
    ] as LeadField[]
  },
  quote: {
    title: t('Request a Quote', 'Demander un devis', 'اطلب عرض سعر'),
    subject: t('Voyah — Quote request', 'Voyah — Demande de devis', 'Voyah — طلب عرض سعر'),
    success: t(
      'Your quote request has been sent. Our team will send you a proposal shortly.',
      'Votre demande de devis a été envoyée. Notre équipe vous adressera une proposition rapidement.',
      'تم إرسال طلب عرض السعر. سيرسل لك فريقنا عرضاً قريباً.'
    ),
    fields: [
      { name: 'name', label: t('Your Name', 'Votre nom', 'الاسم'), type: 'text', required: true },
      { name: 'email', label: t('E-mail', 'E-mail', 'البريد الإلكتروني'), type: 'email', required: true },
      { name: 'phone', label: t('Phone Number', 'Numéro de téléphone', 'رقم الهاتف'), type: 'tel', required: true },
      { name: 'model', label: t('Select Model', 'Choisir un modèle', 'اختر الطراز'), type: 'select', options: 'models' },
      { name: 'subject', label: t('Subject', 'Objet', 'الموضوع'), type: 'text', required: true },
      {
        name: 'message',
        label: t('Message', 'Message', 'الرسالة'),
        type: 'textarea',
        required: true,
        placeholder: t(
          'Tell us about your project',
          'Décrivez votre projet',
          'اكتب تفاصيل طلبك'
        )
      }
    ] as LeadField[]
  },
  service: {
    title: t('Book a Service', 'Prendre un rendez-vous', 'حجز موعد صيانة'),
    subject: t('Voyah — Service appointment', 'Voyah — Demande de rendez-vous atelier', 'Voyah — طلب موعد صيانة'),
    success: t(
      'Your appointment request has been sent. Our after-sales team will confirm the slot by phone.',
      'Votre demande de rendez-vous a été envoyée. Notre service après-vente confirme le créneau par téléphone.',
      'تم إرسال طلب الموعد. سيتواصل معك فريق ما بعد البيع لتأكيد الموعد هاتفياً.'
    ),
    fields: [
      { name: 'name', label: t('Your Name', 'Votre nom', 'الاسم'), type: 'text', required: true },
      { name: 'email', label: t('E-mail', 'E-mail', 'البريد الإلكتروني'), type: 'email', required: true },
      { name: 'phone', label: t('Phone Number', 'Numéro de téléphone', 'رقم الهاتف'), type: 'tel', required: true },
      { name: 'model', label: t('Select Model', 'Choisir un modèle', 'اختر الطراز'), type: 'select', options: 'models' },
      { name: 'date', label: t('Preferred Date', 'Date souhaitée', 'التاريخ المفضل'), type: 'date', required: true },
      { name: 'time', label: t('Preferred Time', 'Heure souhaitée', 'الوقت المفضل'), type: 'time' },
      {
        name: 'message',
        label: t('Description', 'Description du besoin', 'وصف الاحتياج'),
        type: 'textarea',
        placeholder: t(
          'Mileage, warning lights, requested intervention',
          'Kilométrage, voyants allumés, intervention souhaitée',
          'المسافة المقطوعة، مؤشرات التحذير، التدخل المطلوب'
        )
      }
    ] as LeadField[]
  },
  contact: {
    title: t('Contact', 'Contact', 'اتصل بنا'),
    subject: t('Voyah — Contact message', 'Voyah — Message de contact', 'Voyah — رسالة اتصال'),
    success: t(
      'Your message has been sent. Our team answers within one business day.',
      'Votre message a été envoyé. Notre équipe répond sous un jour ouvré.',
      'تم إرسال رسالتك. سيرد عليك فريقنا خلال يوم عمل واحد.'
    ),
    fields: [
      { name: 'name', label: t('Your Name', 'Votre nom', 'الاسم'), type: 'text', required: true },
      { name: 'subject', label: t('Subject', 'Objet', 'الموضوع'), type: 'text', required: true },
      { name: 'email', label: t('E-mail', 'E-mail', 'البريد الإلكتروني'), type: 'email', required: true },
      { name: 'phone_number', label: t('Phone Number', 'Numéro de téléphone', 'رقم الهاتف'), type: 'tel', required: true },
      {
        name: 'message',
        label: t('Message', 'Message', 'الرسالة'),
        type: 'textarea',
        required: true,
        placeholder: t('How can we help?', 'Comment pouvons-nous vous aider ?', 'كيف يمكننا مساعدتك؟')
      }
    ] as LeadField[]
  }
} as const

export type LeadFormKey = keyof typeof leadForms

export const brochureOf = (slug?: string) => (slug ? brochureBySlug[slug] : undefined)

export const socialOf = (id: string) => socialLinks.find((link) => link.id === id && link.url.trim() !== '')
