/**
 * Revendeur: coordonnées, réseaux sociaux, brochures et formulaires.
 * C'est le seul fichier à éditer pour brancher les infos du concessionnaire.
 * Les URL laissées à '' ne sont pas rendues sur le site.
 */

export type Localized = { en: string; fr: string; ar: string }

export const t = (en: string, fr: string, ar: string): Localized => ({ en, fr, ar })

/** Modèles exhibés, dans l'ordre d'affichage. Les autres pages modèle sont masquées. */
export const publicModelSlugs = ['Free', 'Dream', 'Passion', 'Courage'] as const

export type PublicModelSlug = (typeof publicModelSlugs)[number]

/** Modèles temporairement absents des sélecteurs de formulaire (données conservées, réactivables en retirant la valeur). */
export const hiddenFormModelSlugs = ['Passion'] as const

/** Titre court affiché dans le menu, les slides et les sélecteurs de formulaire. */
export const modelDisplayName: Record<string, Localized> = {
  'Free': t('VOYAH FREE', 'VOYAH FREE', 'VOYAH FREE'),
  'Dream': t('VOYAH DREAM', 'VOYAH DREAM', 'VOYAH DREAM'),
  'Passion': t('VOYAH PASSION', 'VOYAH PASSION', 'VOYAH PASSION'),
  'Courage': t('VOYAH COURAGE', 'VOYAH COURAGE', 'VOYAH COURAGE')
}

/** Valeur transmise au concessionnaire quand une demande concerne un modèle précis. */
export const modelKeyValue: Record<string, string> = {
  'Free': 'VOYAH FREE',
  'Dream': 'VOYAH DREAM',
  'Passion': 'VOYAH PASSION',
  'Courage': 'VOYAH COURAGE'
}

/** Déposer les PDF officiels dans public/brochures/ pour activer le téléchargement. */
export const brochureBySlug: Record<string, string> = {
  'Free': '/brochures/voyah-free.pdf',
  'Dream': '/brochures/voyah-dream.pdf',
  'Passion': '/brochures/voyah-passion.pdf',
  'Courage': '/brochures/voyah-courage.pdf'
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
  partnerLogo: '/assets/updates/voyah-tunisie-new-logo.png',
  address: t(
    'Auto Hall, Route de la Marsa GP9, Cité Essalema, 2079 Tunis',
    'Auto Hall, Route de la Marsa GP9, Cité Essalema, 2079 Tunis',
    ' AUTO Hall، طريق المرسى GP9، حي السلامة، 2079 تونس'
  ),
  phone: '58 555 156',
  phoneHref: 'tel:55555156',
  phoneSecondary: '+216 29 803 078',
  phoneSecondaryHref: 'tel:+21629803078',
  email: 'boc@autohall.tn',
  workingHours: t(
    'Monday to Friday: 9:00 - 18:00 / Saturday: 9:00 - 13:00.',
    'Du lundi au vendredi : 9h00 - 18h00 / Samedi : 9h00 - 13h00.',
    'الاثنين إلى الجمعة: 9:00 - 18:00 / السبت: 9:00 - 13:00.'
  ),
  mapUrl: 'https://www.google.com/maps?q=Route+de+la+Marsa+Cite+Essalema+Tunis'
}

export type LeadChoice = { value: string; label: Localized }

export type LeadField = {
  name: string
  label: Localized
  type: 'text' | 'email' | 'tel' | 'number' | 'date' | 'time' | 'select' | 'textarea'
  required?: boolean
  options?: 'models'
  choices?: readonly LeadChoice[]
  defaultValue?: string
  placeholder?: Localized
  allowedValues?: readonly string[]
}

const choiceValues = (choices: readonly LeadChoice[]) => choices.map((choice) => choice.value)

export const appointmentTitles = [
  { value: 'Mr', label: t('Mr.', 'M.', 'السيد') },
  { value: 'Mrs', label: t('Mrs.', 'Mme', 'السيدة') },
  { value: 'Ms', label: t('Ms.', 'Mlle', 'الآنسة') }
] as const

export const appointmentServiceTypes = [
  { value: 'maintenance', label: t('Periodic maintenance', 'Entretien périodique', 'صيانة دورية') },
  { value: 'diagnostic', label: t('Diagnostics and warning lights', 'Diagnostic et voyants', 'تشخيص ومؤشرات تحذير') },
  { value: 'warranty-repair', label: t('Warranty repair', 'Réparation sous garantie', 'إصلاح ضمن الضمان') },
  { value: 'software', label: t('Software update', 'Mise à jour logicielle', 'تحديث البرمجيات') },
  { value: 'bodywork', label: t('Body and paint', 'Carrosserie et peinture', 'هيكل ودهان') },
  { value: 'other', label: t('Other request', 'Autre demande', 'طلب آخر') }
] as const

export const appointmentServiceLocations = [
  {
    value: 'VOYAH SERVICE-TUNISIE',
    label: t('VOYAH SERVICE-TUNISIE', 'VOYAH SERVICE-TUNISIE', 'فواه سيرفس - تونس')
  },
  {
    value: 'AUTRE CENTRE',
    label: t('Another centre (to be confirmed)', 'Autre centre (à confirmer)', 'مركز آخر (للتأكيد)')
  }
] as const

export const appointmentTimeSlots = Array.from({ length: 17 }, (_, index) => {
  const minutes = 9 * 60 + index * 30
  const value = `${String(Math.floor(minutes / 60)).padStart(2, '0')}:${String(minutes % 60).padStart(2, '0')}`
  return { value, label: t(value, value, value) }
}) as readonly LeadChoice[]

export const quoteModels = [
  {
    value: 'Dream',
    name: 'VOYAH Dream',
    image: '/assets/quote/dream-card.webp',
    description: t('PHEV - Premium MPV\nPlug-in hybrid', 'PHEV - Monospace premium\nHybride rechargeable', 'PHEV - سيارة عائلية فاخرة\nهجين قابل للشحن')
  },
  {
    value: 'Courage',
    name: 'VOYAH Courage',
    image: '/assets/quote/courage-card.webp',
    description: t('100% electric - Up to 476km\n(WLTP)', '100% électrique - Jusqu’à 476km\n(WLTP)', 'كهربائية بالكامل - حتى 476 كم\n(WLTP)')
  },
  {
    value: 'Free',
    name: 'VOYAH Free',
    image: '/assets/quote/free-card.webp',
    description: t('REEV - Electric with a range\nextender', 'REEV - Électrique avec prolongateur\nd’autonomie', 'REEV - كهربائية مع موسّع\nمدى السير')
  }
] as const

export const quoteCustomerTypes = [
  { value: 'Particulier', label: t('Individual', 'Particulier', 'فرد') },
  { value: 'Société', label: t('Company', 'Société', 'شركة') }
] as const

export const quoteFinancingOptions = [
  { value: 'Comptant', label: t('Cash', 'Comptant', 'نقداً') },
  { value: 'Crédit bancaire', label: t('Bank loan', 'Crédit bancaire', 'قرض بنكي') },
  { value: 'Leasing', label: t('Leasing', 'Leasing', 'إيجار مالي') }
] as const

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
    title: t('Request your VOYAH quote', 'Demandez votre devis VOYAH', 'اطلب عرض سعر VOYAH'),
    subject: t('Voyah — Quote request', 'Voyah — Demande de devis', 'Voyah — طلب عرض سعر'),
    success: t('Your request has been sent.', 'Votre demande est envoyée.', 'تم إرسال طلبك.'),
    fields: [
      { name: 'model', label: t('Model', 'Modèle', 'الطراز'), type: 'text', required: true, allowedValues: quoteModels.map((model) => model.value) },
      { name: 'customerType', label: t('You are', 'Vous êtes', 'أنت'), type: 'text', required: true, allowedValues: quoteCustomerTypes.map((option) => option.value) },
      { name: 'name', label: t('Full name', 'Nom et prénom', 'الاسم واللقب'), type: 'text', required: true },
      { name: 'phone', label: t('Tel.', 'Tél.', 'الهاتف'), type: 'tel', required: true },
      { name: 'address', label: t('Address', 'Adresse', 'العنوان'), type: 'text', required: true },
      { name: 'city', label: t('City', 'Ville', 'المدينة'), type: 'text', required: true },
      { name: 'email', label: t('E-mail', 'E-mail', 'البريد الإلكتروني'), type: 'email', required: true },
      { name: 'consent', label: t('Contact consent', 'Consentement de contact', 'الموافقة على التواصل'), type: 'text', required: true, allowedValues: ['Oui'] },
      { name: 'financing', label: t('Financing method', 'Mode de financement', 'طريقة التمويل'), type: 'text', required: true, allowedValues: quoteFinancingOptions.map((option) => option.value) }
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
  appointment: {
    title: t('Book an appointment', 'Prenez rendez-vous', 'احجز موعداً'),
    subject: t('Voyah — Service appointment', 'Voyah — Demande de rendez-vous atelier', 'Voyah — طلب موعد صيانة'),
    success: t(
      'Your appointment request has been sent. Our after-sales team confirms the slot by phone.',
      'Votre demande de rendez-vous est envoyée. Notre service après-vente confirme le créneau par téléphone.',
      'تم إرسال طلب الموعد. سيتواصل معك فريق ما بعد البيع لتأكيد الموعد هاتفياً.'
    ),
    fields: [
      {
        name: 'title',
        label: t('Title', 'Civilité', 'الصفة'),
        type: 'select',
        required: true,
        choices: appointmentTitles,
        allowedValues: choiceValues(appointmentTitles)
      },
      { name: 'firstName', label: t('First Name', 'Prénom', 'الاسم'), type: 'text', required: true },
      { name: 'lastName', label: t('Last Name', 'Nom', 'اللقب'), type: 'text', required: true },
      { name: 'email', label: t('E-mail', 'E-mail', 'البريد الإلكتروني'), type: 'email', required: true },
      {
        name: 'phone',
        label: t('Phone Number', 'Numéro de téléphone', 'رقم الهاتف'),
        type: 'tel',
        required: true,
        placeholder: t('8 digits, without country code', '8 chiffres, sans indicatif', '8 أرقام بدون مفتاح الدولة')
      },
      { name: 'model', label: t('Select Model', 'Choisir un modèle', 'اختر الطراز'), type: 'select', options: 'models', required: true },
      {
        name: 'mileage',
        label: t('Current Mileage (km)', 'Kilométrage actuel (km)', 'المسافة المقطوعة (كم)'),
        type: 'number'
      },
      {
        name: 'serviceType',
        label: t('Service Type', 'Type de service', 'نوع الخدمة'),
        type: 'select',
        required: true,
        choices: appointmentServiceTypes,
        allowedValues: choiceValues(appointmentServiceTypes)
      },
      {
        name: 'serviceLocation',
        label: t('Preferred Service Location', 'Centre de service souhaité', 'مركز الخدمة المفضل'),
        type: 'select',
        required: true,
        choices: appointmentServiceLocations,
        allowedValues: choiceValues(appointmentServiceLocations),
        defaultValue: 'VOYAH SERVICE-TUNISIE'
      },
      { name: 'date', label: t('Preferred Date', 'Date souhaitée', 'التاريخ المفضل'), type: 'date', required: true },
      {
        name: 'time',
        label: t('Preferred Time', 'Heure souhaitée', 'الوقت المفضل'),
        type: 'select',
        required: true,
        choices: appointmentTimeSlots,
        allowedValues: choiceValues(appointmentTimeSlots)
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
