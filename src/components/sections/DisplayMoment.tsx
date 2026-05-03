import { motion } from 'motion/react'
import { ArrowRight } from 'lucide-react'
import { TextReveal } from '@/components/ui/TextReveal'

const VENDOR_TRACKS = [
  { name: 'Training', sub: 'usually a separate vendor' },
  { name: 'Software', sub: 'usually a separate vendor' },
  { name: 'Recruitment', sub: 'usually a separate vendor' },
  { name: 'Accreditation', sub: 'usually a separate vendor' },
]

export function DisplayMoment() {
  return (
    <section className="relative bg-white">
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <div className="grid grid-cols-12 gap-x-10 gap-y-12">
          {/* Left — display headline */}
          <div className="col-span-12 lg:col-span-7">
            <h2 className="display-xl text-[clamp(36px,8vw,96px)] text-fg">
              <TextReveal text="Four vendors." unit="word" stagger={50} trigger="inview" as="span" />
              <br />
              <span className="text-brand-700">
                <TextReveal text="One accountable team." unit="word" stagger={50} trigger="inview" as="span" />
              </span>
            </h2>

            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-15%' }}
              transition={{ duration: 0.45, delay: 0.2 }}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <a
                href="#audiences"
                className="group inline-flex items-center gap-2 rounded-md bg-brand-700 px-5 py-3 text-[14.5px] font-semibold text-white transition-colors hover:bg-brand-800"
              >
                See how we replace them
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" strokeWidth={2.5} />
              </a>
            </motion.div>
          </div>

          {/* Right — visual breakdown — vendor count vs Alphinix */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-15%' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="col-span-12 lg:col-span-5"
          >
            <div className="overflow-hidden rounded-lg border border-line bg-canvas">
              {/* Numeric headline row */}
              <div className="grid grid-cols-2 divide-x divide-line border-b border-line">
                <div className="px-6 py-7">
                  <p className="kicker">Most institutions</p>
                  <p className="mt-3 font-display text-[64px] font-semibold leading-none tracking-[-0.04em] text-fg-3 line-through decoration-2 decoration-fg-5">
                    4
                  </p>
                  <p className="mt-2 text-[12.5px] text-fg-4">separate vendors</p>
                </div>
                <div className="bg-brand-50 px-6 py-7">
                  <p className="kicker">With Alphinix</p>
                  <p className="mt-3 font-display text-[64px] font-semibold leading-none tracking-[-0.04em] text-brand-700">
                    1
                  </p>
                  <p className="mt-2 text-[12.5px] text-brand-700/70">accountable team</p>
                </div>
              </div>

              {/* Vendor track list */}
              <ul>
                {VENDOR_TRACKS.map((v, i) => (
                  <li
                    key={v.name}
                    className={`grid grid-cols-12 items-center gap-3 px-5 py-3.5 ${
                      i !== 0 ? 'border-t border-line' : ''
                    }`}
                  >
                    <span className="col-span-1 font-mono text-[10.5px] tracking-[0.14em] text-fg-5">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="col-span-7 text-[14px] font-medium text-fg-2">{v.name}</span>
                    <span className="col-span-4 text-right text-[11.5px] text-fg-4">→ inside Alphinix</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
