import { computed, ref } from 'vue'
import { useRoute } from '#app'
import { useSiteContent } from '~/composables/useSiteContent'

/**
 * Composable optimisé pour gérer la navigation des pages modèles
 * Permet de remplacer efficacement le header principal par ModelSecondaryNav
 */
export function useModelNavigation() {
  const route = useRoute()
  const { resolveCurrentPage } = useSiteContent()
  
  // État partagé pour la visibilité de la navigation secondaire
  const secondaryNavVisible = ref(false)
  
  // Détection optimisée des pages modèles
  const currentPage = computed(() => resolveCurrentPage())
  const currentModel = computed(() => 
    currentPage.value?.kind === 'model' ? currentPage.value : null
  )
  const isModelPage = computed(() => !!currentModel.value)
  
  // Détection des routes home pour optimisation
  const isHomeRoute = computed(() =>
    !currentPage.value ||
    route.path === '/' ||
    route.path.endsWith('/index')
  )
  
  // Logique de visibilité optimisée pour la navigation secondaire
  const shouldShowSecondaryNav = computed(() => 
    isModelPage.value && secondaryNavVisible.value
  )
  
  // Actions pour contrôler la navigation
  const showSecondaryNav = () => {
    secondaryNavVisible.value = true
  }
  
  const hideSecondaryNav = () => {
    secondaryNavVisible.value = false
  }
  
  const resetNavigation = () => {
    secondaryNavVisible.value = false
  }
  
  return {
    // État
    secondaryNavVisible,
    currentModel,
    isModelPage,
    isHomeRoute,
    shouldShowSecondaryNav,
    
    // Actions
    showSecondaryNav,
    hideSecondaryNav,
    resetNavigation
  }
}
