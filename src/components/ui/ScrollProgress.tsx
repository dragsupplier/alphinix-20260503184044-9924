import { useScroll, useSpring, motion } from 'motion/react'

export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 160,
    damping: 28,
    mass: 0.4,
  })
  return (
    <motion.div
      aria-hidden
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[60] h-[2px] origin-left bg-gradient-to-r from-brand-700 via-brand-500 to-brand-300"
    />
  )
}
