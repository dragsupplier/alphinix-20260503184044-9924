import { useRef, type ReactNode } from 'react'
import { cn } from '@/lib/cn'

type Props = {
  children: ReactNode
  className?: string
  /** Element type — 'div' | 'a' | 'li' (default 'div') */
  as?: 'div' | 'a' | 'li'
  href?: string
}

/**
 * Cursor-proximity glow card — uses CSS variables (--mx, --my) updated on
 * mousemove. The glow is rendered via a ::before pseudo-element on the
 * .glow-card class. No per-frame React state, no rerenders.
 */
export function GlowCard({ children, className, as = 'div', href }: Props) {
  const ref = useRef<HTMLDivElement | null>(null)

  const onMove = (e: React.MouseEvent<HTMLElement>) => {
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    el.style.setProperty('--mx', `${e.clientX - r.left}px`)
    el.style.setProperty('--my', `${e.clientY - r.top}px`)
  }

  const props = {
    ref: ref as React.RefObject<HTMLAnchorElement & HTMLDivElement & HTMLLIElement>,
    onMouseMove: onMove,
    className: cn('glow-card', className),
  }

  if (as === 'a') {
    return (
      <a href={href} {...props}>
        {children}
      </a>
    )
  }
  if (as === 'li') {
    return <li {...props}>{children}</li>
  }
  return <div {...props}>{children}</div>
}
