import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { TextReveal } from '@/components/ui/TextReveal'
import {
  ArrowRight,
  ArrowUpRight,
  Compass,
  Rocket,
  Calendar,
  Settings,
  CheckCircle2,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

type Format = {
  key: string
  num: string
  name: string
  duration: string
  audience: string
  body: string
  body2: string
  includes: string[]
  flag: 'standard' | 'popular' | 'enterprise'
  icon: LucideIcon
}

const FORMATS: Format[] = [
  {
    key: 'discovery',
    num: '01',
    name: 'Discovery sprint',
    duration: '1–2 weeks',
    audience: 'First-time engagements',
    body:
      'A short paid sprint to map the real constraint, surface the smallest viable scope and produce a written 90-day plan.',
    body2:
      'Refundable against any subsequent engagement. Best for institutions and businesses that have an open question and need a written, owner-mapped plan before committing to a longer programme.',
    includes: ['Stakeholder workshops', 'Constraint audit', 'Written 90-day plan', 'Refundable fee'],
    flag: 'standard',
    icon: Compass,
  },
  {
    key: 'pilot',
    num: '02',
    name: 'Pilot programme',
    duration: '4–12 weeks',
    audience: 'Single-track engagement',
    body:
      'A focused pilot — one cohort, one drive, one product, or one lab. Designed to ship a measurable outcome within a single quarter so you can decide on scale-up.',
    body2:
      'Pilots run with the full Alphinix team and the same engagement model as larger contracts — they are not "trial" engagements. Output is real production work.',
    includes: ['Single workstream', 'Owner per stream', 'Weekly status reviews', 'Real production output'],
    flag: 'popular',
    icon: Rocket,
  },
  {
    key: 'annual',
    num: '03',
    name: 'Annual partnership',
    duration: '12 months',
    audience: 'Multi-track institutions',
    body:
      'A retainer engagement spanning the full academic or fiscal year — combining training, technology and hiring tracks under one master agreement and one quarterly review cadence.',
    body2:
      'Designed for colleges and growing companies that want a single-vendor relationship instead of stitching together three. Includes carry-forward of unused capacity within the year.',
    includes: ['Multi-track scope', 'Quarterly business reviews', 'Cohort year-on-year carry', 'One master agreement'],
    flag: 'standard',
    icon: Calendar,
  },
  {
    key: 'bespoke',
    num: '04',
    name: 'Built-for-you',
    duration: 'Bespoke',
    audience: 'Enterprises & PSU partners',
    body:
      'A custom engagement scoped around your operating model — including dedicated teams, specialised SOWs, on-premise placement, and joint-IP arrangements where relevant.',
    body2:
      'Used for skill-mission projects, large-bid responses, and enterprise GCC engagements. We will scope, contract and staff a dedicated pod that operates as an extension of your team.',
    includes: ['Dedicated delivery pod', 'Custom SOW', 'On-premise placement', 'Joint-IP optional'],
    flag: 'enterprise',
    icon: Settings,
  },
]

export function Industries() {
  const [activeKey, setActiveKey] = useState(FORMATS[0].key)
  const activeIndex = FORMATS.findIndex((f) => f.key === activeKey)
  const prev = useRef<number>(activeIndex)
  const [direction, setDirection] = useState(1)

  useEffect(() => {
    setDirection(activeIndex >= prev.current ? 1 : -1)
    prev.current = activeIndex
  }, [activeIndex])

  const active = FORMATS.find((f) => f.key === activeKey) ?? FORMATS[0]
  const ActiveIcon = active.icon

  return (
    <section id="industries" className="relative bg-white">
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-5 pt-16 md:px-8 md:pt-20">
          <div className="flex items-center gap-3">
            <span className="kicker">04 — Engagement formats</span>
            <span className="h-px flex-1 bg-line-2" />
          </div>
          <div className="mt-8 grid grid-cols-12 gap-x-10 gap-y-6">
            <h2 className="col-span-12 font-display text-[36px] font-semibold leading-[1.04] tracking-[-0.02em] text-fg lg:col-span-7 lg:text-[52px]">
              <TextReveal text="Four ways to start" unit="word" stagger={50} trigger="inview" />{' '}
              <span className="text-brand-700">
                <TextReveal text="working with us." unit="word" stagger={50} trigger="inview" />
              </span>
            </h2>
            <p className="col-span-12 text-[15.5px] leading-[1.6] text-fg-3 lg:col-span-5 lg:text-[16.5px]">
              Start small with a discovery sprint, scale into a pilot, or
              commit to an annual partnership. Every format begins with the
              same conversation and the same delivery DNA.
            </p>
          </div>
        </div>
      </div>

      {/* Visual timeline of formats — bigger than a tab strip */}
      <div className="mx-auto mt-12 max-w-7xl px-5 md:px-8">
        <div className="relative">
          {/* Background rail */}
          <div className="absolute left-0 right-0 top-7 hidden h-px bg-line md:block" aria-hidden />
          {/* Active progress rail */}
          <div
            className="absolute left-0 top-7 hidden h-px bg-brand-700 transition-all duration-500 md:block"
            style={{ width: `${(activeIndex / (FORMATS.length - 1)) * 100}%` }}
            aria-hidden
          />

          <ol className="relative grid grid-cols-2 gap-y-6 md:grid-cols-4">
            {FORMATS.map((f, i) => {
              const isActive = i === activeIndex
              const isPast = i < activeIndex
              const Icon = f.icon
              return (
                <li key={f.key} className="flex flex-col items-center text-center">
                  <button
                    onClick={() => setActiveKey(f.key)}
                    className="group relative flex flex-col items-center"
                    aria-pressed={isActive}
                  >
                    <span
                      className={`grid h-14 w-14 place-items-center rounded-full border-2 transition-all duration-200 ${
                        isActive
                          ? 'border-brand-700 bg-brand-700 text-white shadow-[0_0_0_6px_rgba(29,58,165,0.12)]'
                          : isPast
                            ? 'border-brand-700 bg-white text-brand-700'
                            : 'border-line bg-white text-fg-4 group-hover:border-line-2 group-hover:text-fg-3'
                      }`}
                    >
                      <Icon className="h-5 w-5" strokeWidth={2} />
                    </span>
                    <span
                      className={`mt-3 font-mono text-[10.5px] font-semibold uppercase tracking-[0.14em] ${
                        isActive ? 'text-brand-700' : 'text-fg-4'
                      }`}
                    >
                      {f.num} · {f.duration}
                    </span>
                    <span
                      className={`mt-1 font-display text-[14px] font-semibold tracking-tight ${
                        isActive ? 'text-fg' : 'text-fg-3 group-hover:text-fg'
                      }`}
                    >
                      {f.name}
                    </span>
                  </button>
                </li>
              )
            })}
          </ol>
        </div>
      </div>

      {/* Active format detail */}
      <div className="mx-auto mt-14 max-w-7xl px-5 pb-20 md:mt-16 md:px-8 md:pb-24">
        <AnimatePresence mode="wait">
          <motion.article
            key={active.key}
            initial={{
              clipPath:
                direction > 0
                  ? 'polygon(0 0, 0 0, 0 100%, 0 100%)'
                  : 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)',
              opacity: 0.6,
            }}
            animate={{
              clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
              opacity: 1,
            }}
            exit={{
              clipPath:
                direction > 0
                  ? 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)'
                  : 'polygon(0 0, 0 0, 0 100%, 0 100%)',
              opacity: 0.6,
            }}
            transition={{ duration: 0.5, ease: [0.2, 0.7, 0.2, 1] }}
            className="overflow-hidden rounded-lg border border-line bg-canvas"
          >
            <div className="grid grid-cols-12 gap-0">
              {/* Left visual block */}
              <div className="col-span-12 border-b border-line bg-white p-7 md:col-span-4 md:border-b-0 md:border-r md:p-10">
                <span className="grid h-12 w-12 place-items-center rounded-md bg-brand-700 text-white">
                  <ActiveIcon className="h-5 w-5" strokeWidth={2} />
                </span>
                <p className="mt-6 inline-block rounded-sm bg-brand-50 px-2 py-0.5 font-mono text-[10.5px] font-semibold uppercase tracking-[0.14em] text-brand-700 ring-1 ring-brand-100">
                  {active.flag === 'popular'
                    ? 'Most chosen'
                    : active.flag === 'enterprise'
                      ? 'Enterprise'
                      : 'Standard'}
                </p>
                <h3 className="mt-4 font-display text-[26px] font-semibold leading-tight tracking-[-0.02em] text-fg md:text-[32px]">
                  {active.name}
                </h3>

                <dl className="mt-6 grid grid-cols-2 gap-4 border-t border-line pt-5">
                  <div>
                    <dt className="kicker">Duration</dt>
                    <dd className="mt-1 text-[14px] font-semibold text-fg">{active.duration}</dd>
                  </div>
                  <div>
                    <dt className="kicker">For</dt>
                    <dd className="mt-1 text-[14px] font-semibold text-fg">{active.audience}</dd>
                  </div>
                </dl>

                <a href="#contact" className="link-rule mt-7 text-[13.5px]">
                  Start with this format
                  <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2.5} />
                </a>
              </div>

              {/* Right body */}
              <div className="col-span-12 p-7 md:col-span-8 md:p-10">
                <p className="max-w-2xl text-[15.5px] leading-[1.65] text-fg-3 md:text-[16.5px]">
                  {active.body}
                </p>
                <p className="mt-4 max-w-2xl text-[14.5px] leading-[1.65] text-fg-4">
                  {active.body2}
                </p>

                <div className="mt-7 border-t border-line pt-5">
                  <p className="kicker">What it includes</p>
                  <ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
                    {active.includes.map((inc) => (
                      <li
                        key={inc}
                        className="flex items-center gap-2.5 rounded-sm bg-white px-3 py-2.5 text-[13.5px] text-fg-2 ring-1 ring-line"
                      >
                        <CheckCircle2 className="h-4 w-4 text-brand-700" strokeWidth={2.25} />
                        {inc}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.article>
        </AnimatePresence>

        {/* Footer note */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-fg-4">
            Format {active.num} of {String(FORMATS.length).padStart(2, '0')}
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-brand-700 hover:text-brand-800"
          >
            Recommend a format for me
            <ArrowRight className="h-3.5 w-3.5" strokeWidth={2.5} />
          </a>
        </div>
      </div>
    </section>
  )
}
