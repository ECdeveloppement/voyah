export interface Autohall {
  id: string
  name: string
  address: string
  phone: string
  email: string
  coordinates: {
    lat: number
    lng: number
  }
  services: string[]
  hours: {
    monday: string
    tuesday: string
    wednesday: string
    thursday: string
    friday: string
    saturday: string
    sunday: string
  }
  website?: string
  type: 'showroom' | 'service' | 'both'
  region: string
  city: string
}

export const autohallsData: Autohall[] = [
  {
    id: 'autohall-casablanca',
    name: 'Autohall Casablanca',
    address: 'Boulevard d\'Anfa, Casablanca 20250',
    phone: '0522-123456',
    email: 'casablanca@autohall.ma',
    coordinates: { lat: 33.5731, lng: -7.5898 },
    services: ['Vente', 'Service après-vente', 'Pièces détachées', 'Financement'],
    hours: {
      monday: '08:30 - 18:30',
      tuesday: '08:30 - 18:30',
      wednesday: '08:30 - 18:30',
      thursday: '08:30 - 18:30',
      friday: '08:30 - 18:30',
      saturday: '09:00 - 13:00',
      sunday: 'Fermé'
    },
    website: 'https://www.autohall.ma',
    type: 'both',
    region: 'Grand Casablanca',
    city: 'Casablanca'
  },
  {
    id: 'autohall-rabat',
    name: 'Autohall Rabat',
    address: 'Avenue Mohammed V, Rabat 10000',
    phone: '0537-123456',
    email: 'rabat@autohall.ma',
    coordinates: { lat: 34.0209, lng: -6.8416 },
    services: ['Vente', 'Service après-vente', 'Pièces détachées'],
    hours: {
      monday: '08:30 - 18:30',
      tuesday: '08:30 - 18:30',
      wednesday: '08:30 - 18:30',
      thursday: '08:30 - 18:30',
      friday: '08:30 - 18:30',
      saturday: '09:00 - 13:00',
      sunday: 'Fermé'
    },
    website: 'https://www.autohall.ma',
    type: 'both',
    region: 'Rabat-Salé-Kénitra',
    city: 'Rabat'
  },
  {
    id: 'autohall-marrakech',
    name: 'Autohall Marrakech',
    address: 'Route de Guéliz, Marrakech 40000',
    phone: '0524-123456',
    email: 'marrakech@autohall.ma',
    coordinates: { lat: 31.6295, lng: -7.9811 },
    services: ['Vente', 'Service après-vente', 'Pièces détachées', 'Financement'],
    hours: {
      monday: '08:30 - 18:30',
      tuesday: '08:30 - 18:30',
      wednesday: '08:30 - 18:30',
      thursday: '08:30 - 18:30',
      friday: '08:30 - 18:30',
      saturday: '09:00 - 13:00',
      sunday: 'Fermé'
    },
    website: 'https://www.autohall.ma',
    type: 'both',
    region: 'Marrakech-Safi',
    city: 'Marrakech'
  },
  {
    id: 'autohall-tanger',
    name: 'Autohall Tanger',
    address: 'Port de Tanger, Tanger 90000',
    phone: '0539-123456',
    email: 'tanger@autohall.ma',
    coordinates: { lat: 35.7595, lng: -5.8340 },
    services: ['Vente', 'Service après-vente', 'Pièces détachées'],
    hours: {
      monday: '08:30 - 18:30',
      tuesday: '08:30 - 18:30',
      wednesday: '08:30 - 18:30',
      thursday: '08:30 - 18:30',
      friday: '08:30 - 18:30',
      saturday: '09:00 - 13:00',
      sunday: 'Fermé'
    },
    website: 'https://www.autohall.ma',
    type: 'both',
    region: 'Tanger-Tétouan-Al Hoceïma',
    city: 'Tanger'
  },
  {
    id: 'autohall-agadir',
    name: 'Autohall Agadir',
    address: 'Boulevard du 20 Août, Agadir 80000',
    phone: '0528-123456',
    email: 'agadir@autohall.ma',
    coordinates: { lat: 30.4278, lng: -9.5981 },
    services: ['Vente', 'Service après-vente', 'Pièces détachées'],
    hours: {
      monday: '08:30 - 18:30',
      tuesday: '08:30 - 18:30',
      wednesday: '08:30 - 18:30',
      thursday: '08:30 - 18:30',
      friday: '08:30 - 18:30',
      saturday: '09:00 - 13:00',
      sunday: 'Fermé'
    },
    website: 'https://www.autohall.ma',
    type: 'both',
    region: 'Souss-Massa',
    city: 'Agadir'
  },
  {
    id: 'autohall-fes',
    name: 'Autohall Fès',
    address: 'Route de Meknès, Fès 30000',
    phone: '0535-123456',
    email: 'fes@autohall.ma',
    coordinates: { lat: 34.0181, lng: -5.0078 },
    services: ['Vente', 'Service après-vente', 'Pièces détachées'],
    hours: {
      monday: '08:30 - 18:30',
      tuesday: '08:30 - 18:30',
      wednesday: '08:30 - 18:30',
      thursday: '08:30 - 18:30',
      friday: '08:30 - 18:30',
      saturday: '09:00 - 13:00',
      sunday: 'Fermé'
    },
    website: 'https://www.autohall.ma',
    type: 'both',
    region: 'Fès-Meknès',
    city: 'Fès'
  },
  {
    id: 'autohall-oujda',
    name: 'Autohall Oujda',
    address: 'Boulevard Mohammed VI, Oujda 60000',
    phone: '0536-123456',
    email: 'oujda@autohall.ma',
    coordinates: { lat: 34.6865, lng: -1.9110 },
    services: ['Vente', 'Service après-vente', 'Pièces détachées'],
    hours: {
      monday: '08:30 - 18:30',
      tuesday: '08:30 - 18:30',
      wednesday: '08:30 - 18:30',
      thursday: '08:30 - 18:30',
      friday: '08:30 - 18:30',
      saturday: '09:00 - 13:00',
      sunday: 'Fermé'
    },
    website: 'https://www.autohall.ma',
    type: 'both',
    region: 'Oriental',
    city: 'Oujda'
  }
]

export const getAutohallsByRegion = (region: string): Autohall[] => {
  return autohallsData.filter(autohall => autohall.region === region)
}

export const getAutohallsByCity = (city: string): Autohall[] => {
  return autohallsData.filter(autohall => autohall.city.toLowerCase() === city.toLowerCase())
}

export const getAutohallById = (id: string): Autohall | undefined => {
  return autohallsData.find(autohall => autohall.id === id)
}

export const getAllRegions = (): string[] => {
  return [...new Set(autohallsData.map(autohall => autohall.region))]
}

export const getAllCities = (): string[] => {
  return [...new Set(autohallsData.map(autohall => autohall.city))]
}
