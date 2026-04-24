export interface Configuration {
  id: string
  name: {
    en: string
    fr: string
    ar: string
  }
  category: string
  value?: string
  displayValue?: string | { text?: string; value?: string }
  description?: {
    en: string
    fr: string
    ar: string
  }
  icon?: 'standard' | 'optional' | 'not-included' | null
}

export interface ModelVersion {
  id: string
  name: {
    en: string
    fr: string
    ar: string
  }
  price: {
    en: string
    fr: string
    ar: string
  } | string
  type?: 'PHEV' | 'EV' | string
  configurations?: Configuration[]
}

export interface Param {
  id: string
  name: {
    en: string
    fr: string
    ar: string
  }
  values: Record<string, string>
}

export interface Category {
  id: string
  name: {
    en: string
    fr: string
    ar: string
  }
  params: Param[]
}

export interface CarModel {
  id: string
  name: {
    en: string
    fr: string
    ar: string
  }
  versions: ModelVersion[]
  categories?: Category[]
}
