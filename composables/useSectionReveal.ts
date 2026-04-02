import gsap from 'gsap'

type RevealOptions = {
  y?: number
  duration?: number
  stagger?: number
  threshold?: number
}

export const useSectionReveal = (options: RevealOptions = {}) => {
  const target = ref<HTMLElement | null>(null)
  let observer: IntersectionObserver | null = null
  const animated = new WeakSet<HTMLElement>()

  onMounted(() => {
    const element = target.value

    if (!element) {
      return
    }

    const nodes = Array.from(element.querySelectorAll<HTMLElement>('[data-reveal]'))
    const targets = nodes.length > 0 ? nodes : [element]

    observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries.filter((entry) => entry.isIntersecting)

        if (!visibleEntries.length) {
          return
        }

        const pending = targets.filter((node) => !animated.has(node))

        if (!pending.length) {
          observer?.disconnect()
          return
        }

        gsap.fromTo(
          pending,
          { autoAlpha: 0.01, y: options.y ?? 36 },
          {
            autoAlpha: 1,
            y: 0,
            duration: options.duration ?? 0.9,
            ease: 'power3.out',
            stagger: options.stagger ?? 0.12,
            onComplete: () => {
              pending.forEach((node) => animated.add(node))
              observer?.disconnect()
            }
          }
        )
      },
      { threshold: options.threshold ?? 0.08, rootMargin: '0px 0px -12% 0px' }
    )

    observer.observe(element)
  })

  onBeforeUnmount(() => {
    observer?.disconnect()
  })

  return target
}
