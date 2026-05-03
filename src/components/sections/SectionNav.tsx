import { useEffect, useState } from 'react'
import { cn } from '@/lib/cn'

const ITEMS: { id: string; num: string; label: string }[] = [
  { id: 'audiences',     num: '02', label: 'Solutions' },
  { id: 'capabilities',  num: '03', label: 'Capabilities' },
  { id: 'industries',    num: '04', label: 'Engagement' },
  { id: 'approach',      num: '05', label: 'Approach' },
  { id: 'about',         num: '06', label: 'Why Alphinix' },
  { id: 'insights',      num: '07', label: 'Insights' },
  { id: 'contact',       num: '08', label: 'Contact' },
]

export function SectionNav() {
  const [activeId, setActiveId] = useState<string>(ITEMS[0].id)

  useEffect(() => {
    const elements = ITEMS.map((i) => document.getElementById(i.id)).filter(
      (el): el is HTMLElement => Boolean(el),
    )
    if (elements.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (visible[0]) setActiveId(visible[0].target.id)
      },
      { rootMargin: '-30% 0% -55% 0%', threshold: [0, 0.1, 0.5] },
    )
    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div
      data-sticky-subnav
      className="sticky top-[105px] z-40 hidden border-b border-line bg-white/85 backdrop-blur-md md:block"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <nav className="-mx-1 flex items-stretch overflow-x-auto">
          {ITEMS.map((it) => {
            const isActive = it.id === activeId
            return (
              <a
                key={it.id}
                href={`#${it.id}`}
                className={cn(
                  'group relative flex shrink-0 items-baseline gap-2 px-4 py-3 text-[13px] font-medium transition-colors',
                  isActive ? 'text-fg' : 'text-fg-3 hover:text-fg',
                )}
              >
                <span
                  className={cn(
                    'font-mono text-[10.5px] tracking-[0.14em]',
                    isActive ? 'text-brand-700' : 'text-fg-5',
                  )}
                >
                  {it.num}
                </span>
                {it.label}
                {isActive && (
                  <span
                    aria-hidden
                    className="absolute inset-x-3 -top-px h-0.5 bg-brand-700"
                  />
                )}
              </a>
            )
          })}
        </nav>
      </div>
    </div>
  )
}
