import { motion, useScroll, useTransform } from 'motion/react'
import { ArrowRight, Phone } from 'lucide-react'
import { TextReveal } from '@/components/ui/TextReveal'
import { MagneticButton } from '@/components/ui/MagneticButton'
import { Stagger, Rise } from '@/components/ui/Stagger'
import { useRef } from 'react'

const AUDIENCE_STRIP: { label: string; sub: string; href: string }[] = [
  { label: 'Students',     sub: 'Training & placement',    href: '#students' },
  { label: 'Colleges',     sub: 'Academic operations',     href: '#colleges' },
  { label: 'Schools',      sub: 'STEM · ATL · AI labs',    href: '#schools' },
  { label: 'Businesses',   sub: 'Engineering & AI',        href: '#businesses' },
  { label: 'Hiring Teams', sub: 'Recruitment services',    href: '#hiring' },
]

export function Hero() {
  const heroRef = useRef<HTMLElement>(null)
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 80])
  const opacity = useTransform(scrollY, [0, 400], [1, 0])

  return (
    <section id="hero" ref={heroRef} className="relative bg-white">
      {/* Main content */}
      <div className="mx-auto max-w-7xl px-6 pt-32 pb-20 md:px-8 md:pt-40 md:pb-28 lg:pt-48 lg:pb-36">
        <motion.div 
          style={{ y, opacity }}
          className="max-w-4xl"
        >
          {/* Eyebrow text */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6 text-sm font-medium text-fg-3 uppercase tracking-wider"
          >
            Enterprise Solutions
          </motion.p>

          {/* Headline */}
          <h1 className="font-display text-5xl font-semibold leading-tight tracking-tight text-fg sm:text-6xl md:text-7xl lg:text-8xl">
            <TextReveal text="One partner." stagger={70} delay={0.05} />{' '}
            <TextReveal text="One platform." stagger={70} delay={0.35} />
          </h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-8 max-w-2xl text-lg leading-relaxed text-fg-3 md:text-xl"
          >
            Alphinix combines campus training, in-house engineering and
            recruitment under a single accountable team — replacing the four
            or five vendors institutions and businesses were juggling.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.85 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <MagneticButton
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-md bg-brand-700 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-800"
            >
              Request a proposal
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" strokeWidth={2.5} />
            </MagneticButton>
            
            <a
              href="tel:+910000000000"
              className="inline-flex items-center gap-2 rounded-md px-6 py-3 text-sm font-semibold text-fg ring-1 ring-line transition-colors hover:bg-canvas"
            >
              <Phone className="h-4 w-4" strokeWidth={2.5} />
              Speak to a consultant
            </a>
          </motion.div>
        </motion.div>

        {/* Audience strip */}
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 border-t border-line pt-12 md:mt-24 md:pt-16"
        >
          <Stagger step={0.06} className="grid grid-cols-2 gap-y-8 gap-x-6 sm:grid-cols-3 lg:grid-cols-5">
            {AUDIENCE_STRIP.map((item) => (
              <Rise key={item.label}>
                <a
                  href={item.href}
                  className="group block"
                >
                  <p className="text-sm font-semibold text-fg group-hover:text-brand-700 transition-colors">
                    {item.label}
                  </p>
                  <p className="mt-1.5 text-sm leading-relaxed text-fg-4">{item.sub}</p>
                </a>
              </Rise>
            ))}
          </Stagger>
        </motion.div>
      </div>
    </section>
  )
}
