import { useEffect } from 'react'
import Lenis from 'lenis'

export function SmoothScroll() {
  useEffect(() => {
    if (typeof window === 'undefined') return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) return

    const lenis = new Lenis({
      duration: 1.05,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.4,
    })

    let raf = 0
    const tick = (time: number) => {
      lenis.raf(time)
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)

    // Calculate dynamic offset based on actual sticky header heights
    const computeOffset = () => {
      const header = document.querySelector('header')
      const sectionNav = document.querySelector('[data-sticky-subnav]')
      const headerH = header instanceof HTMLElement ? header.offsetHeight : 0
      const subnavH = sectionNav instanceof HTMLElement ? sectionNav.offsetHeight : 0
      return -(headerH + subnavH + 8)
    }

    const onAnchor = (e: MouseEvent) => {
      const a = (e.target as HTMLElement)?.closest('a[href^="#"]') as HTMLAnchorElement | null
      if (!a) return
      const href = a.getAttribute('href')
      if (!href || href === '#' || href === '#enquiry') {
        // Allow plain '#' to do nothing; '#enquiry' falls through to native focus
        if (href === '#') e.preventDefault()
        return
      }
      const id = href.slice(1)
      const el = document.getElementById(id)
      if (!el) return
      e.preventDefault()
      lenis.scrollTo(el, { offset: computeOffset() })
    }
    document.addEventListener('click', onAnchor)

    return () => {
      cancelAnimationFrame(raf)
      lenis.destroy()
      document.removeEventListener('click', onAnchor)
    }
  }, [])
  return null
}
