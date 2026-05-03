import { useEffect, useRef, useState, type ComponentPropsWithoutRef, type ReactNode } from 'react'
import { motion, useMotionValue, useSpring, useReducedMotion } from 'motion/react'
import { cn } from '@/lib/cn'

type Props = ComponentPropsWithoutRef<'a'> & {
  children: ReactNode
  /** Pull strength multiplier (0.2 subtle → 0.5 strong) */
  strength?: number
}

/**
 * Magnetic anchor — element gently follows the cursor inside its bounds on hover.
 * On touch devices, falls back to a subtle press state.
 * Honors prefers-reduced-motion.
 */
export function MagneticButton({
  children,
  strength = 0.32,
  className,
  ...rest
}: Props) {
  const reduce = useReducedMotion()
  const ref = useRef<HTMLAnchorElement | null>(null)
  const [isTouch, setIsTouch] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(hover: none) and (pointer: coarse)')
    setIsTouch(mq.matches)
  }, [])

  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const innerX = useMotionValue(0)
  const innerY = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 220, damping: 18, mass: 0.4 })
  const sy = useSpring(y, { stiffness: 220, damping: 18, mass: 0.4 })
  const isx = useSpring(innerX, { stiffness: 260, damping: 20, mass: 0.4 })
  const isy = useSpring(innerY, { stiffness: 260, damping: 20, mass: 0.4 })

  if (reduce || isTouch) {
    return (
      <a className={cn(className, 'transition-transform active:scale-[0.98]')} {...rest}>
        {children}
      </a>
    )
  }

  const handleMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    const dx = e.clientX - (r.left + r.width / 2)
    const dy = e.clientY - (r.top + r.height / 2)
    x.set(dx * strength)
    y.set(dy * strength)
    innerX.set(dx * strength * 0.4)
    innerY.set(dy * strength * 0.4)
  }
  const handleLeave = () => {
    x.set(0); y.set(0); innerX.set(0); innerY.set(0)
  }

  return (
    <motion.a
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ x: sx, y: sy }}
      className={cn(className, 'inline-block')}
      {...(rest as ComponentPropsWithoutRef<typeof motion.a>)}
    >
      <motion.span className="inline-flex items-center gap-2" style={{ x: isx, y: isy }}>
        {children}
      </motion.span>
    </motion.a>
  )
}
