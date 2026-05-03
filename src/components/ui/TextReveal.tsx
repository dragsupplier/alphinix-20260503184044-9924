import { motion, useReducedMotion } from 'motion/react'
import { cn } from '@/lib/cn'

type Variant = 'mask' | 'cascade'

type Props = {
  text: string
  className?: string
  unit?: 'word' | 'char'
  /** 'mask' = each token rises out of an overflow-hidden mask (default).
   *  'cascade' = each token rises with a small variable rotation, creating a wave. */
  variant?: Variant
  stagger?: number
  delay?: number
  trigger?: 'inview' | 'mount'
  as?: keyof React.JSX.IntrinsicElements
}

export function TextReveal({
  text,
  className,
  unit = 'word',
  variant = 'mask',
  stagger = 30,
  delay = 0,
  trigger = 'mount',
  as = 'span',
}: Props) {
  const reduce = useReducedMotion()
  const Tag = motion[as as 'span'] as typeof motion.span

  if (reduce) {
    return <Tag className={className}>{text}</Tag>
  }

  const tokens =
    unit === 'word' ? text.split(/(\s+)/) : Array.from(text)

  const animateProps =
    trigger === 'inview'
      ? { initial: 'hidden', whileInView: 'visible', viewport: { once: true, margin: '-12%' } }
      : { initial: 'hidden', animate: 'visible' }

  if (variant === 'cascade') {
    return (
      <Tag
        className={cn('inline', className)}
        variants={{
          visible: { transition: { staggerChildren: stagger / 1000, delayChildren: delay } },
        }}
        {...animateProps}
      >
        {tokens.map((tok, i) => {
          if (/^\s+$/.test(tok)) return <span key={i}>{tok}</span>
          // Slight tilt that flips sign by index for a "wave" character
          const rot = (i % 2 === 0 ? 1 : -1) * (4 + (i % 3))
          return (
            <motion.span
              key={i}
              className="inline-block"
              style={{ transformOrigin: 'bottom center' }}
              variants={{
                hidden: { y: '60%', rotate: rot, opacity: 0, scale: 0.92 },
                visible: {
                  y: 0,
                  rotate: 0,
                  opacity: 1,
                  scale: 1,
                  transition: { duration: 0.7, ease: [0.18, 0.74, 0.2, 1] },
                },
              }}
            >
              {tok}
            </motion.span>
          )
        })}
      </Tag>
    )
  }

  // Default mask reveal (preserved for compatibility)
  return (
    <Tag
      className={cn('inline', className)}
      variants={{
        visible: { transition: { staggerChildren: stagger / 1000, delayChildren: delay } },
      }}
      {...animateProps}
    >
      {tokens.map((tok, i) => {
        if (/^\s+$/.test(tok)) return <span key={i}>{tok}</span>
        return (
          <span key={i} className="inline-block overflow-hidden align-bottom leading-[1] pb-[0.06em]">
            <motion.span
              className="inline-block"
              variants={{
                hidden: { y: '110%', opacity: 0 },
                visible: {
                  y: 0,
                  opacity: 1,
                  transition: { duration: 0.7, ease: [0.2, 0.7, 0.2, 1] },
                },
              }}
            >
              {tok}
            </motion.span>
          </span>
        )
      })}
    </Tag>
  )
}
