import { motion } from 'motion/react'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { TextReveal } from '@/components/ui/TextReveal'
import { MagneticButton } from '@/components/ui/MagneticButton'
import { Stagger, Rise } from '@/components/ui/Stagger'

const META = [
  ['Headquartered in', 'Pune, Maharashtra'],
  ['Operating across', 'India'],
  ['Established', '2024'],
  ['Engagement model', 'In-house teams'],
] as const

export function ManifestoBand() {
  return (
    <section className="brand-mesh relative isolate text-white">
      <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        <div className="flex items-center gap-3 text-white/55">
          <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-brand-200">
            Our position
          </span>
          <span className="h-px flex-1 bg-white/15" />
        </div>

        <h2 className="mt-10 max-w-[14ch] font-display text-[40px] font-semibold leading-[1.05] tracking-[-0.025em] text-white md:text-[56px] lg:text-[64px]">
          <TextReveal
            text="Five segments. One platform."
            unit="word"
            stagger={50}
            trigger="inview"
            as="span"
          />
        </h2>

        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-15%' }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 max-w-2xl text-[16px] leading-[1.65] text-white/75 md:text-[17.5px]"
        >
          Every Alphinix segment quietly feeds the next. The student we train
          today becomes the intern your startup hires next quarter, builds the
          software your college runs, and goes back to teach the school down
          the road.
        </motion.p>

        <div className="mt-12 flex flex-wrap items-center gap-3">
          <MagneticButton
            href="#contact"
            className="group rounded-md bg-white px-5 py-3 text-[14.5px] font-semibold text-brand-950 transition-colors hover:bg-brand-50"
          >
            Request a proposal
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" strokeWidth={2.5} />
          </MagneticButton>
          <a
            href="#audiences"
            className="inline-flex items-center gap-2 rounded-md px-5 py-3 text-[14.5px] font-semibold text-white ring-1 ring-white/25 transition-colors hover:bg-white/10"
          >
            See audiences
            <ArrowUpRight className="h-4 w-4" strokeWidth={2.25} />
          </a>
        </div>

        {/* Metadata strip with stagger */}
        <Stagger step={0.07} delay={0.2} className="mt-16 grid grid-cols-2 gap-y-6 border-t border-white/15 pt-8 md:grid-cols-4">
          {META.map(([label, value]) => (
            <Rise key={label}>
              <p className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-white/45">
                {label}
              </p>
              <p className="mt-1.5 text-[14.5px] font-semibold text-white">{value}</p>
            </Rise>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
