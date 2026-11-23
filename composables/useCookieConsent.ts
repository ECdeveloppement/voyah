import { computed } from 'vue'
import { useCookie, useState } from '#app'

type CookieChoice = 'accepted' | 'rejected'

export const useCookieConsent = () => {
  const preference = useCookie<CookieChoice | null>('voyah-cookie-consent', {
    default: () => null,
    maxAge: 60 * 60 * 24 * 180,
    sameSite: 'lax',
    path: '/'
  })
  const choice = useState<CookieChoice | null>('cookie-consent-choice', () => null)
  const isOpen = useState('cookie-consent-open', () => false)
  const allowsExternalMaps = computed(() => choice.value === 'accepted')

  function initialize() {
    const stored = preference.value
    choice.value = stored === 'accepted' || stored === 'rejected' ? stored : null
    isOpen.value = choice.value === null
  }

  function choose(value: CookieChoice) {
    preference.value = value
    choice.value = value
    isOpen.value = false
  }

  function openPreferences() {
    isOpen.value = true
  }

  return { isOpen, allowsExternalMaps, initialize, choose, openPreferences }
}
