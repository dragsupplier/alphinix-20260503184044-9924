import { motion, useReducedMotion } from 'motion/react'
import { cn } from '@/lib/cn'

type StaggerProps = {
  children: React.ReactNode
  /** Stagger between children in seconds */
  step?: number
  className?: string
  /** Delay before the sequence starts */
  delay?: number
}

export function Stagger({ children, step = 0.06, delay = 0, className }: StaggerProps) {
  const reduce = useReducedMotion()
  if (reduce) return <div className={className}>{children}</div>

  return (
    <motion.div
      className={cn(className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-10%' }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: step, delayChildren: delay } },
      }}
    >
      {children}
    </motion.div>
  )
}

type RiseProps = { children: React.ReactNode; className?: string; y?: number }

/** Child of Stagger — gentle rise + fade. No blur, short duration. */
export function Rise({ children, className, y = 8 }: RiseProps) {
  const reduce = useReducedMotion()
  if (reduce) return <div className={className}>{children}</div>

  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.4, ease: [0.2, 0.7, 0.2, 1] },
        },
      }}
    >
      {children}
    </motion.div>
  )
}
