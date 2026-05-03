import { motion, useReducedMotion } from 'motion/react'
import { type ReactNode } from 'react'

type Props = {
  /** Triggers re-render with a new wipe when this changes */
  triggerKey: string | number
  children: ReactNode
  /** Wipe direction: 'left' (default) or 'right' or 'top' or 'bottom' */
  from?: 'left' | 'right' | 'top' | 'bottom'
  duration?: number
  className?: string
}

/**
 * Diagonal mask reveal for swapped content.
 * Replaces the generic translate+fade tab swap with a clip-path wipe.
 */
export function MaskWipe({
  triggerKey,
  children,
  from = 'left',
  duration = 0.55,
  className,
}: Props) {
  const reduce = useReducedMotion()

  if (reduce) {
    return <div className={className}>{children}</div>
  }

  const initialClip = {
    left:   'polygon(0 0, 0 0, 0 100%, 0 100%)',
    right:  'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)',
    top:    'polygon(0 0, 100% 0, 100% 0, 0 0)',
    bottom: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)',
  }[from]
  const fullClip = 'polygon(0 0, 100% 0, 100% 100%, 0 100%)'

  return (
    <motion.div
      key={triggerKey}
      initial={{ clipPath: initialClip, opacity: 0.4 }}
      animate={{ clipPath: fullClip, opacity: 1 }}
      transition={{ duration, ease: [0.2, 0.7, 0.2, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
