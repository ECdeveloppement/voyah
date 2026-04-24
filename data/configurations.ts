// Configuration data for Voyah models
export interface ConfigurationOption {
  id: string
  name: {
    en: string
    fr: string
    ar: string
  }
  description?: {
    en: string
    fr: string
    ar: string
  }
  price?: number
  included?: boolean
  category: string
}

export interface ModelVersion {
  id: string
  name: {
    en: string
    fr: string
    ar: string
  }
  type: 'PHEV' | 'EV'
  price: number
  configurations: ConfigurationOption[]
}

export interface CarModel {
  id: string
  name: {
    en: string
    fr: string
    ar: string
  }
  versions: ModelVersion[]
}

// Passion model configurations
export const passionConfigurations: CarModel = {
  id: 'passion',
  name: {
    en: 'Lantu Chasing Light',
    fr: 'Lantu à la poursuite de la lumière',
    ar: 'Lantu Chasing Light'
  },
  versions: [
    {
      id: 'passion-executive-phev',
      name: {
        en: 'Executive AWD Extended Range',
        fr: 'Édition Executive à traction intégrale et autonomie étendue',
        ar: 'Executive AWD Extended Range'
      },
      type: 'PHEV',
      price: 369900,
      configurations: [
        {
          id: 'exterior-design',
          name: {
            en: 'Exterior Design',
            fr: 'Design extérieur',
            ar: 'Exterior Design'
          },
          category: 'exterior',
          included: true
        },
        {
          id: 'led-headlights',
          name: {
            en: 'LED Matrix Headlights',
            fr: 'Phares à matrice LED',
            ar: 'LED Matrix Headlights'
          },
          category: 'exterior',
          included: true
        },
        {
          id: 'panoramic-roof',
          name: {
            en: 'Panoramic Sunroof',
            fr: 'Toit panoramique',
            ar: 'Panoramic Sunroof'
          },
          category: 'exterior',
          price: 12000
        },
        {
          id: '21-inch-wheels',
          name: {
            en: '21-inch Alloy Wheels',
            fr: 'Jantes en alliage 21 pouces',
            ar: '21-inch Alloy Wheels'
          },
          category: 'exterior',
          included: true
        },
        {
          id: 'interior-luxury',
          name: {
            en: 'Luxury Interior Package',
            fr: 'Pack intérieur luxe',
            ar: 'Luxury Interior Package'
          },
          category: 'interior',
          included: true
        },
        {
          id: 'nappa-leather',
          name: {
            en: 'Nappa Leather Seats',
            fr: 'Sièges en cuir Nappa',
            ar: 'Nappa Leather Seats'
          },
          category: 'interior',
          price: 15000
        },
        {
          id: 'heated-ventilated-seats',
          name: {
            en: 'Heated & Ventilated Front Seats',
            fr: 'Sièges avant chauffants et ventilés',
            ar: 'Heated & Ventilated Front Seats'
          },
          category: 'interior',
          included: true
        },
        {
          id: 'premium-audio',
          name: {
            en: 'Premium Audio System',
            fr: 'Système audio premium',
            ar: 'Premium Audio System'
          },
          category: 'technology',
          price: 8000
        },
        {
          id: 'wireless-charging',
          name: {
            en: 'Wireless Phone Charging',
            fr: 'Charge sans fil du téléphone',
            ar: 'Wireless Phone Charging'
          },
          category: 'technology',
          included: true
        },
        {
          id: 'advanced-driver-assist',
          name: {
            en: 'Advanced Driver Assistance Package',
            fr: 'Pack d\'assistance conducteur avancé',
            ar: 'Advanced Driver Assistance Package'
          },
          category: 'safety',
          price: 18000
        },
        {
          id: 'adaptive-cruise-control',
          name: {
            en: 'Adaptive Cruise Control',
            fr: 'Régulateur de vitesse adaptatif',
            ar: 'Adaptive Cruise Control'
          },
          category: 'safety',
          included: true
        }
      ]
    },
    {
      id: 'passion-flagship-phev',
      name: {
        en: 'Flagship AWD Ultra Long Range',
        fr: 'Version phare à quatre roues motrices à très grande autonomie',
        ar: 'Flagship AWD Ultra Long Range'
      },
      type: 'PHEV',
      price: 429900,
      configurations: [
        {
          id: 'exterior-design',
          name: {
            en: 'Exterior Design',
            fr: 'Design extérieur',
            ar: 'Exterior Design'
          },
          category: 'exterior',
          included: true
        },
        {
          id: 'led-headlights',
          name: {
            en: 'LED Matrix Headlights',
            fr: 'Phares à matrice LED',
            ar: 'LED Matrix Headlights'
          },
          category: 'exterior',
          included: true
        },
        {
          id: 'panoramic-roof',
          name: {
            en: 'Panoramic Sunroof',
            fr: 'Toit panoramique',
            ar: 'Panoramic Sunroof'
          },
          category: 'exterior',
          included: true
        },
        {
          id: '22-inch-wheels',
          name: {
            en: '22-inch Forged Wheels',
            fr: 'Jantes forgées 22 pouces',
            ar: '22-inch Forged Wheels'
          },
          category: 'exterior',
          included: true
        },
        {
          id: 'interior-luxury',
          name: {
            en: 'Luxury Interior Package',
            fr: 'Pack intérieur luxe',
            ar: 'Luxury Interior Package'
          },
          category: 'interior',
          included: true
        },
        {
          id: 'nappa-leather',
          name: {
            en: 'Nappa Leather Seats',
            fr: 'Sièges en cuir Nappa',
            ar: 'Nappa Leather Seats'
          },
          category: 'interior',
          included: true
        },
        {
          id: 'massaging-seats',
          name: {
            en: 'Front Massaging Seats',
            fr: 'Sièges avant massants',
            ar: 'Front Massaging Seats'
          },
          category: 'interior',
          price: 12000
        },
        {
          id: 'premium-audio',
          name: {
            en: 'Premium Audio System',
            fr: 'Système audio premium',
            ar: 'Premium Audio System'
          },
          category: 'technology',
          included: true
        },
        {
          id: 'wireless-charging',
          name: {
            en: 'Wireless Phone Charging',
            fr: 'Charge sans fil du téléphone',
            ar: 'Wireless Phone Charging'
          },
          category: 'technology',
          included: true
        },
        {
          id: 'advanced-driver-assist',
          name: {
            en: 'Advanced Driver Assistance Package',
            fr: 'Pack d\'assistance conducteur avancé',
            ar: 'Advanced Driver Assistance Package'
          },
          category: 'safety',
          included: true
        },
        {
          id: 'surround-view-camera',
          name: {
            en: '360° Surround View Camera',
            fr: 'Caméra de vision à 360°',
            ar: '360° Surround View Camera'
          },
          category: 'safety',
          included: true
        }
      ]
    },
    {
      id: 'passion-standard-ev',
      name: {
        en: 'Standard Range',
        fr: 'Gamme standard',
        ar: 'Standard Range'
      },
      type: 'EV',
      price: 329900,
      configurations: [
        {
          id: 'exterior-design',
          name: {
            en: 'Exterior Design',
            fr: 'Design extérieur',
            ar: 'Exterior Design'
          },
          category: 'exterior',
          included: true
        },
        {
          id: 'led-headlights',
          name: {
            en: 'LED Headlights',
            fr: 'Phares LED',
            ar: 'LED Headlights'
          },
          category: 'exterior',
          included: true
        },
        {
          id: '19-inch-wheels',
          name: {
            en: '19-inch Alloy Wheels',
            fr: 'Jantes en alliage 19 pouces',
            ar: '19-inch Alloy Wheels'
          },
          category: 'exterior',
          included: true
        },
        {
          id: 'interior-premium',
          name: {
            en: 'Premium Interior',
            fr: 'Intérieur premium',
            ar: 'Premium Interior'
          },
          category: 'interior',
          included: true
        },
        {
          id: 'heated-seats',
          name: {
            en: 'Heated Front Seats',
            fr: 'Sièges avant chauffants',
            ar: 'Heated Front Seats'
          },
          category: 'interior',
          included: true
        },
        {
          id: 'basic-audio',
          name: {
            en: 'Basic Audio System',
            fr: 'Système audio de base',
            ar: 'Basic Audio System'
          },
          category: 'technology',
          included: true
        },
        {
          id: 'basic-driver-assist',
          name: {
            en: 'Basic Driver Assistance',
            fr: 'Assistance conducteur de base',
            ar: 'Basic Driver Assistance'
          },
          category: 'safety',
          included: true
        }
      ]
    },
    {
      id: 'passion-long-range-ev',
      name: {
        en: 'Long Range',
        fr: 'Version longue portée',
        ar: 'Long Range'
      },
      type: 'EV',
      price: 379900,
      configurations: [
        {
          id: 'exterior-design',
          name: {
            en: 'Exterior Design',
            fr: 'Design extérieur',
            ar: 'Exterior Design'
          },
          category: 'exterior',
          included: true
        },
        {
          id: 'led-headlights',
          name: {
            en: 'LED Matrix Headlights',
            fr: 'Phares à matrice LED',
            ar: 'LED Matrix Headlights'
          },
          category: 'exterior',
          included: true
        },
        {
          id: 'panoramic-roof',
          name: {
            en: 'Panoramic Sunroof',
            fr: 'Toit panoramique',
            ar: 'Panoramic Sunroof'
          },
          category: 'exterior',
          price: 12000
        },
        {
          id: '20-inch-wheels',
          name: {
            en: '20-inch Alloy Wheels',
            fr: 'Jantes en alliage 20 pouces',
            ar: '20-inch Alloy Wheels'
          },
          category: 'exterior',
          included: true
        },
        {
          id: 'interior-luxury',
          name: {
            en: 'Luxury Interior Package',
            fr: 'Pack intérieur luxe',
            ar: 'Luxury Interior Package'
          },
          category: 'interior',
          included: true
        },
        {
          id: 'heated-ventilated-seats',
          name: {
            en: 'Heated & Ventilated Front Seats',
            fr: 'Sièges avant chauffants et ventilés',
            ar: 'Heated & Ventilated Front Seats'
          },
          category: 'interior',
          included: true
        },
        {
          id: 'premium-audio',
          name: {
            en: 'Premium Audio System',
            fr: 'Système audio premium',
            ar: 'Premium Audio System'
          },
          category: 'technology',
          price: 8000
        },
        {
          id: 'wireless-charging',
          name: {
            en: 'Wireless Phone Charging',
            fr: 'Charge sans fil du téléphone',
            ar: 'Wireless Phone Charging'
          },
          category: 'technology',
          included: true
        },
        {
          id: 'advanced-driver-assist',
          name: {
            en: 'Advanced Driver Assistance Package',
            fr: 'Pack d\'assistance conducteur avancé',
            ar: 'Advanced Driver Assistance Package'
          },
          category: 'safety',
          price: 18000
        },
        {
          id: 'adaptive-cruise-control',
          name: {
            en: 'Adaptive Cruise Control',
            fr: 'Régulateur de vitesse adaptatif',
            ar: 'Adaptive Cruise Control'
          },
          category: 'safety',
          included: true
        }
      ]
    }
  ]
}

// Titan model configurations
export const titanConfigurations: CarModel = {
  id: 'titan',
  name: {
    en: 'Voyah Titan',
    fr: 'Voyah Titan',
    ar: 'Voyah Titan'
  },
  versions: [
    {
      id: 'titan-executive-ev',
      name: {
        en: 'Executive AWD',
        fr: 'Édition Executive à traction intégrale',
        ar: 'Executive AWD'
      },
      type: 'EV',
      price: 459900,
      configurations: [
        {
          id: 'exterior-design',
          name: {
            en: 'Flagship Exterior Design',
            fr: 'Design extérieur phare',
            ar: 'Flagship Exterior Design'
          },
          category: 'exterior',
          included: true
        },
        {
          id: 'matrix-led-headlights',
          name: {
            en: 'Matrix LED Headlights',
            fr: 'Phares à matrice LED',
            ar: 'Matrix LED Headlights'
          },
          category: 'exterior',
          included: true
        },
        {
          id: 'panoramic-roof',
          name: {
            en: 'Panoramic Sunroof',
            fr: 'Toit panoramique',
            ar: 'Panoramic Sunroof'
          },
          category: 'exterior',
          price: 15000
        },
        {
          id: '22-inch-wheels',
          name: {
            en: '22-inch Forged Wheels',
            fr: 'Jantes forgées 22 pouces',
            ar: '22-inch Forged Wheels'
          },
          category: 'exterior',
          included: true
        },
        {
          id: 'executive-interior',
          name: {
            en: 'Executive Interior Package',
            fr: 'Pack intérieur executive',
            ar: 'Executive Interior Package'
          },
          category: 'interior',
          included: true
        },
        {
          id: 'premium-leather',
          name: {
            en: 'Premium Leather Seats',
            fr: 'Sièges en cuir premium',
            ar: 'Premium Leather Seats'
          },
          category: 'interior',
          included: true
        },
        {
          id: 'massaging-seats',
          name: {
            en: 'Front Massaging Seats',
            fr: 'Sièges avant massants',
            ar: 'Front Massaging Seats'
          },
          category: 'interior',
          price: 12000
        },
        {
          id: 'premium-audio',
          name: {
            en: 'Premium Audio System',
            fr: 'Système audio premium',
            ar: 'Premium Audio System'
          },
          category: 'technology',
          included: true
        },
        {
          id: 'advanced-driver-assist',
          name: {
            en: 'Advanced Driver Assistance',
            fr: 'Assistance conducteur avancée',
            ar: 'Advanced Driver Assistance'
          },
          category: 'safety',
          included: true
        },
        {
          id: 'surround-camera',
          name: {
            en: '360° Surround View Camera',
            fr: 'Caméra de vision à 360°',
            ar: '360° Surround View Camera'
          },
          category: 'safety',
          included: true
        }
      ]
    }
  ]
}

// Free model configurations
export const freeConfigurations: CarModel = {
  id: 'free',
  name: {
    en: 'Voyah FREE',
    fr: 'Voyah FREE',
    ar: 'Voyah FREE'
  },
  versions: [
    {
      id: 'free-long-range-ev',
      name: {
        en: 'Long Range',
        fr: 'Version longue portée',
        ar: 'Long Range'
      },
      type: 'EV',
      price: 389900,
      configurations: [
        {
          id: 'urban-design',
          name: {
            en: 'Urban Light-and-Shadow Design',
            fr: 'Design urbain d’ombres et de lumière',
            ar: 'Urban Light-and-Shadow Design'
          },
          category: 'exterior',
          included: true
        },
        {
          id: 'led-headlights',
          name: {
            en: 'LED Headlights',
            fr: 'Phares LED',
            ar: 'LED Headlights'
          },
          category: 'exterior',
          included: true
        },
        {
          id: '20-inch-wheels',
          name: {
            en: '20-inch Alloy Wheels',
            fr: 'Jantes en alliage 20 pouces',
            ar: '20-inch Alloy Wheels'
          },
          category: 'exterior',
          included: true
        },
        {
          id: 'free-cabin',
          name: {
            en: 'Free Cabin 2.0',
            fr: 'Habitacle Free 2.0',
            ar: 'Free Cabin 2.0'
          },
          category: 'interior',
          included: true
        },
        {
          id: 'heated-ventilated-seats',
          name: {
            en: 'Heated & Ventilated Front Seats',
            fr: 'Sièges avant chauffants et ventilés',
            ar: 'Heated & Ventilated Front Seats'
          },
          category: 'interior',
          included: true
        },
        {
          id: 'harmony-cockpit',
          name: {
            en: 'HarmonySpace 5 Cockpit',
            fr: 'Cockpit HarmonySpace 5',
            ar: 'HarmonySpace 5 Cockpit'
          },
          category: 'technology',
          included: true
        },
        {
          id: 'wireless-charging',
          name: {
            en: 'Wireless Phone Charging',
            fr: 'Charge sans fil du téléphone',
            ar: 'Wireless Phone Charging'
          },
          category: 'technology',
          included: true
        },
        {
          id: 'driver-assist',
          name: {
            en: 'Basic Driver Assistance',
            fr: 'Assistance conducteur de base',
            ar: 'Basic Driver Assistance'
          },
          category: 'safety',
          included: true
        }
      ]
    }
  ]
}

// Dreamer model configurations
export const dreamerConfigurations: CarModel = {
  id: 'dreamer',
  name: {
    en: 'Voyah Dreamer',
    fr: 'Voyah Dreamer',
    ar: 'Voyah Dreamer'
  },
  versions: [
    {
      id: 'dreamer-executive-ev',
      name: {
        en: 'Executive Lounge',
        fr: 'Salon Executive',
        ar: 'Executive Lounge'
      },
      type: 'EV',
      price: 429900,
      configurations: [
        {
          id: 'luxury-exterior',
          name: {
            en: 'Luxury MPV Exterior',
            fr: 'Extérieur MPV de luxe',
            ar: 'Luxury MPV Exterior'
          },
          category: 'exterior',
          included: true
        },
        {
          id: 'led-headlights',
          name: {
            en: 'LED Matrix Headlights',
            fr: 'Phares à matrice LED',
            ar: 'LED Matrix Headlights'
          },
          category: 'exterior',
          included: true
        },
        {
          id: 'panoramic-roof',
          name: {
            en: 'Panoramic Sunroof',
            fr: 'Toit panoramique',
            ar: 'Panoramic Sunroof'
          },
          category: 'exterior',
          included: true
        },
        {
          id: 'lounge-interior',
          name: {
            en: 'Executive Lounge Cabin',
            fr: 'Habitacle salon exécutif',
            ar: 'Executive Lounge Cabin'
          },
          category: 'interior',
          included: true
        },
        {
          id: 'rear-comfort',
          name: {
            en: 'Rear Cabin Comfort Package',
            fr: 'Pack confort arrière',
            ar: 'Rear Cabin Comfort Package'
          },
          category: 'interior',
          included: true
        },
        {
          id: 'premium-audio',
          name: {
            en: 'Premium Audio System',
            fr: 'Système audio premium',
            ar: 'Premium Audio System'
          },
          category: 'technology',
          included: true
        },
        {
          id: 'harmony-travel',
          name: {
            en: 'Harmony Intelligent Travel',
            fr: 'Voyage intelligent Harmony',
            ar: 'Harmony Intelligent Travel'
          },
          category: 'technology',
          included: true
        },
        {
          id: 'family-safety',
          name: {
            en: 'Family Safety Package',
            fr: 'Pack sécurité familiale',
            ar: 'Family Safety Package'
          },
          category: 'safety',
          included: true
        }
      ]
    }
  ]
}

// All available models
export const allModels: CarModel[] = [
  passionConfigurations,
  titanConfigurations,
  freeConfigurations,
  dreamerConfigurations
]

// Helper functions
export const getModelById = (modelId: string): CarModel | undefined => {
  return allModels.find(model => model.id === modelId)
}

export const getVersionById = (modelId: string, versionId: string): ModelVersion | undefined => {
  const model = getModelById(modelId)
  return model?.versions.find(version => version.id === versionId)
}

export const getConfigurationsByCategory = (configurations: ConfigurationOption[]): Record<string, ConfigurationOption[]> => {
  return configurations.reduce((acc, config) => {
    if (!acc[config.category]) {
      acc[config.category] = []
    }
    acc[config.category].push(config)
    return acc
  }, {} as Record<string, ConfigurationOption[]>)
}
