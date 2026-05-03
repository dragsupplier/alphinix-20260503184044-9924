import { motion } from 'motion/react'
import {
  ArrowRight,
  UserCheck,
  ShieldCheck,
  Layers,
  Globe,
  Quote,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { TextReveal } from '@/components/ui/TextReveal'
import { Stagger, Rise } from '@/components/ui/Stagger'

type Pillar = { tag: string; title: string; body: string; icon: LucideIcon }

const PILLARS: Pillar[] = [
  {
    tag: 'Delivery',
    title: 'Everything in-house.',
    body:
      'Trainers, engineers and recruiters under one roof. No subcontractors. The team that scopes is the team that ships.',
    icon: UserCheck,
  },
  {
    tag: 'Accountability',
    title: 'A single point of contact.',
    body:
      'One owner per engagement, one weekly status, one number to call — and a written record at every milestone.',
    icon: ShieldCheck,
  },
  {
    tag: 'Compounding',
    title: 'Built to keep paying back.',
    body:
      'The students we train this year become next year\'s interns and the alumni base that fuels every future drive.',
    icon: Layers,
  },
  {
    tag: 'Local context',
    title: 'India-ready by default.',
    body:
      'Programmes designed around NEP, NAAC, NBA and ATL guidelines — not Western blueprints retrofitted.',
    icon: Globe,
  },
]

export function SignatureMoment() {
  return (
    <section id="about" className="relative overflow-hidden bg-canvas">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <div className="flex items-center gap-3">
          <span className="kicker">06 — Why Alphinix</span>
          <span className="h-px flex-1 bg-line-2" />
        </div>

        <div className="mt-12 grid grid-cols-12 gap-x-10 gap-y-10">
          {/* Featured principle on color — anchors the section */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-15%' }}
            transition={{ duration: 0.5 }}
            className="brand-mesh color-card-edge col-span-12 overflow-hidden rounded-lg p-8 text-white md:p-10 lg:col-span-5"
          >
            <Quote className="h-8 w-8 text-brand-200" strokeWidth={1.6} />
            <p className="mt-6 font-display text-[26px] font-semibold leading-[1.18] tracking-[-0.02em] md:text-[34px]">
              <TextReveal
                text="We're not five businesses in a trench coat — we are five segments of one platform."
                unit="word"
                stagger={45}
                trigger="inview"
              />
            </p>
            <div className="mt-8 flex items-center gap-3 border-t border-white/15 pt-5">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-white text-brand-950">
                <span className="font-display text-[12px] font-bold">α</span>
              </span>
              <div>
                <p className="text-[13px] font-semibold text-white">Alphinix · Founding principle</p>
                <p className="text-[11.5px] text-white/55">Pune · 2024</p>
              </div>
            </div>
            <a
              href="#contact"
              className="group mt-8 inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-white hover:text-brand-200"
            >
              See the engagement model
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" strokeWidth={2.5} />
            </a>
          </motion.div>

          {/* Supporting pillars — visual cards, not plain prose */}
          <div className="col-span-12 lg:col-span-7">
            <Stagger step={0.08}>
              <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {PILLARS.map((p, i) => {
                  const Icon = p.icon
                  return (
                    <Rise
                      key={p.title}
                      className="tilt-card group relative overflow-hidden rounded-md border border-line bg-white p-6"
                    >
                    <div className="flex items-start justify-between">
                      <span className="grid h-10 w-10 place-items-center rounded-md bg-brand-50 text-brand-700 ring-1 ring-brand-100 transition-colors group-hover:bg-brand-700 group-hover:text-white">
                        <Icon className="h-4 w-4" strokeWidth={2} />
                      </span>
                      <span className="font-mono text-[10.5px] font-semibold uppercase tracking-[0.14em] text-fg-5">
                        0{i + 1}
                      </span>
                    </div>
                    <p className="mt-5 kicker text-brand-700">{p.tag}</p>
                    <h3 className="mt-2 font-display text-[18px] font-semibold leading-tight tracking-tight text-fg md:text-[19px]">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-[13.5px] leading-[1.6] text-fg-3">{p.body}</p>

                    {/* Bottom accent strip */}
                    <span
                      aria-hidden
                      className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-brand-700 transition-transform duration-300 group-hover:scale-x-100"
                    />
                    </Rise>
                  )
                })}
              </ul>
            </Stagger>
          </div>
        </div>
      </div>
    </section>
  )
}
