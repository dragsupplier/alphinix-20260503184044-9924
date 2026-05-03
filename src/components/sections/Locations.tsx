import { ArrowUpRight } from 'lucide-react'
import { motion } from 'motion/react'
import { TextReveal } from '@/components/ui/TextReveal'
import { Stagger, Rise } from '@/components/ui/Stagger'

const STATES = ['Maharashtra', 'Karnataka', 'Telangana', 'Gujarat', 'Tamil Nadu', 'NCR']

export function Locations() {
  return (
    <section id="locations" className="relative bg-white">
      <div className="mx-auto max-w-7xl px-5 py-14 md:px-8 md:py-16">
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true, margin: '-15%' }}
          transition={{ duration: 0.6, ease: [0.2, 0.7, 0.2, 1] }}
          className="origin-top"
        >
        <div className="grid grid-cols-12 gap-x-10 gap-y-8 border-l-4 border-brand-700 pl-6 md:pl-8">
          <div className="col-span-12 md:col-span-6">
            <p className="kicker">Operating geography</p>
            <p className="mt-4 font-display text-[26px] font-semibold leading-[1.18] tracking-[-0.02em] text-fg md:text-[34px] lg:text-[40px]">
              <TextReveal text="Headquartered in Pune." unit="word" stagger={50} trigger="inview" />{' '}
              <span className="text-fg-3">
                <TextReveal text="On-ground engagements across India and remote delivery pan-country." unit="word" stagger={40} trigger="inview" />
              </span>
            </p>
          </div>

          <div className="col-span-12 md:col-span-6">
            <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2">
              <div>
                <p className="kicker">Headquarters</p>
                <p className="mt-1.5 text-[15px] font-semibold text-fg">Pune, Maharashtra</p>
                <p className="mt-1 text-[13px] text-fg-4">India · IST (UTC +5:30)</p>
              </div>
              <div>
                <p className="kicker">Active engagements in</p>
                <Stagger step={0.04}>
                  <ul className="mt-1.5 flex flex-wrap gap-x-3 gap-y-1.5">
                    {STATES.map((s) => (
                      <Rise key={s} y={6}>
                        <li
                          className="text-[13.5px] font-medium text-fg-2 after:ml-3 after:text-fg-5 after:content-['·'] last:after:hidden"
                        >
                          {s}
                        </li>
                      </Rise>
                    ))}
                  </ul>
                </Stagger>
              </div>
            </div>

            <div className="mt-6 border-t border-line pt-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-brand-700 hover:text-brand-800"
              >
                Discuss your geography
                <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2.5} />
              </a>
            </div>
          </div>
        </div>
        </motion.div>
      </div>
    </section>
  )
}
