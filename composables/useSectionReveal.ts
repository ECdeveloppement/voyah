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

  onMounted(() => {
    const element = target.value

    if (!element) {
      return
    }

    const nodes = Array.from(element.querySelectorAll<HTMLElement>('[data-reveal]'))
    const targets = nodes.length > 0 ? nodes : [element]

    gsap.set(targets, { autoAlpha: 0, y: options.y ?? 36 })

    observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) {
          return
        }

        gsap.to(targets, {
          autoAlpha: 1,
          y: 0,
          duration: options.duration ?? 0.9,
          ease: 'power3.out',
          stagger: options.stagger ?? 0.12
        })

        observer?.disconnect()
      },
      { threshold: options.threshold ?? 0.2 }
    )

    observer.observe(element)
  })

  onBeforeUnmount(() => {
    observer?.disconnect()
  })

  return target
}
