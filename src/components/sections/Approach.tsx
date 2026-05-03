import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { TextReveal } from '@/components/ui/TextReveal'
import {
  ArrowRight,
  Compass,
  Layers3,
  Workflow,
  Activity,
  CheckCircle2,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

type Step = {
  num: string
  tag: string
  title: string
  body: string
  artefacts: string[]
  duration: string
  icon: LucideIcon
}

const STEPS: Step[] = [
  {
    num: '01',
    tag: 'Discovery',
    title: 'Listen first.',
    body:
      'A short consultation, no decks. We map your real constraint — placement targets, hiring TAT, accreditation gaps, product timeline — before suggesting anything.',
    artefacts: ['Stakeholder workshop', 'Constraint audit', 'Goal mapping'],
    duration: '1 week',
    icon: Compass,
  },
  {
    num: '02',
    tag: 'Solution Design',
    title: 'The smallest viable scope.',
    body:
      'A written plan with sequencing and clear ownership. No vendor jargon, no sprawling line items — just what moves the needle next, and what is deliberately out of scope.',
    artefacts: ['Phased roadmap', 'Owner per workstream', 'Success metrics'],
    duration: '1–2 weeks',
    icon: Layers3,
  },
  {
    num: '03',
    tag: 'Delivery',
    title: 'In-house, end-to-end.',
    body:
      'Trainers, engineers and recruiters under one team — same brand, same standard. You get one weekly status, one number to call, no agency-of-agencies maze.',
    artefacts: ['Weekly status reviews', 'Single point of contact', 'In-house teams'],
    duration: 'Ongoing',
    icon: Workflow,
  },
  {
    num: '04',
    tag: 'Continuous Engagement',
    title: 'Built to compound.',
    body:
      'Programmes and platforms designed to compound year over year — alumni, content, dashboards and tooling that stay after we leave.',
    artefacts: ['Quarterly reviews', 'Alumni network', 'Year-on-year ROI'],
    duration: 'Year over year',
    icon: Activity,
  },
]

export function Approach() {
  const [activeIndex, setActiveIndex] = useState(0)
  const prev = useRef<number>(0)
  const [direction, setDirection] = useState(1)

  useEffect(() => {
    setDirection(activeIndex >= prev.current ? 1 : -1)
    prev.current = activeIndex
  }, [activeIndex])

  const active = STEPS[activeIndex]
  const ActiveIcon = active.icon

  return (
    <section id="approach" className="relative bg-white">
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-5 pt-16 md:px-8 md:pt-20">
          <div className="flex items-center gap-3">
            <span className="kicker">05 — How we work</span>
            <span className="h-px flex-1 bg-line-2" />
          </div>
          <div className="mt-8 grid grid-cols-12 gap-x-10 gap-y-6">
            <h2 className="col-span-12 font-display text-[36px] font-semibold leading-[1.04] tracking-[-0.02em] text-fg lg:col-span-7 lg:text-[52px]">
              <TextReveal text="A predictable" unit="word" stagger={50} trigger="inview" />{' '}
              <span className="text-brand-700">
                <TextReveal text="engagement model." unit="word" stagger={50} trigger="inview" />
              </span>
            </h2>
            <p className="col-span-12 text-[15.5px] leading-[1.6] text-fg-3 lg:col-span-5 lg:text-[16.5px]">
              Most education and technology vendors lose institutions in the
              sales-to-delivery handoff. We don't have one — the team that
              scopes is the team that ships.
            </p>
          </div>
        </div>
      </div>

      {/* Visual stepper */}
      <div className="mx-auto mt-12 max-w-7xl px-5 md:px-8 md:mt-16">
        <div className="relative">
          <div className="absolute left-0 right-0 top-7 hidden h-px bg-line md:block" aria-hidden />
          <div
            className="absolute left-0 top-7 hidden h-px bg-brand-700 transition-all duration-500 md:block"
            style={{ width: `${(activeIndex / (STEPS.length - 1)) * 100}%` }}
            aria-hidden
          />

          <ol className="relative grid grid-cols-2 gap-y-6 md:grid-cols-4">
            {STEPS.map((s, i) => {
              const isActive = i === activeIndex
              const isPast = i < activeIndex
              const Icon = s.icon
              return (
                <li key={s.num} className="flex flex-col items-center text-center">
                  <button
                    onClick={() => setActiveIndex(i)}
                    className="group relative flex flex-col items-center"
                    aria-pressed={isActive}
                  >
                    <span
                      className={`grid h-14 w-14 place-items-center rounded-full border-2 transition-all duration-200 ${
                        isActive
                          ? 'border-brand-700 bg-brand-700 text-white shadow-[0_0_0_6px_rgba(29,58,165,0.12)]'
                          : isPast
                            ? 'border-brand-700 bg-white text-brand-700'
                            : 'border-line bg-white text-fg-4 group-hover:border-line-2'
                      }`}
                    >
                      <Icon className="h-5 w-5" strokeWidth={2} />
                    </span>
                    <span
                      className={`mt-3 font-mono text-[10.5px] font-semibold uppercase tracking-[0.14em] ${
                        isActive ? 'text-brand-700' : 'text-fg-4'
                      }`}
                    >
                      Step {s.num}
                    </span>
                    <span
                      className={`mt-1 font-display text-[14px] font-semibold tracking-tight ${
                        isActive ? 'text-fg' : 'text-fg-3'
                      }`}
                    >
                      {s.tag}
                    </span>
                  </button>
                </li>
              )
            })}
          </ol>
        </div>
      </div>

      {/* Active step detail */}
      <div className="mx-auto mt-14 max-w-7xl px-5 pb-20 md:mt-16 md:px-8 md:pb-24">
        <AnimatePresence mode="wait">
          <motion.article
            key={active.num}
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
                <p className="mt-6 kicker">Step {active.num}</p>
                <h3 className="mt-3 font-display text-[28px] font-semibold leading-tight tracking-[-0.02em] text-fg md:text-[34px]">
                  {active.title}
                </h3>

                <dl className="mt-6 grid grid-cols-2 gap-4 border-t border-line pt-5">
                  <div>
                    <dt className="kicker">Stage</dt>
                    <dd className="mt-1 text-[14px] font-semibold text-fg">{active.tag}</dd>
                  </div>
                  <div>
                    <dt className="kicker">Duration</dt>
                    <dd className="mt-1 text-[14px] font-semibold text-fg">{active.duration}</dd>
                  </div>
                </dl>
              </div>

              {/* Right body */}
              <div className="col-span-12 p-7 md:col-span-8 md:p-10">
                <p className="max-w-2xl text-[15.5px] leading-[1.65] text-fg-3 md:text-[16.5px]">
                  {active.body}
                </p>

                <div className="mt-7 border-t border-line pt-5">
                  <p className="kicker">What you receive</p>
                  <ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-3">
                    {active.artefacts.map((a) => (
                      <li
                        key={a}
                        className="flex items-center gap-2.5 rounded-sm bg-white px-3 py-2.5 text-[13.5px] text-fg-2 ring-1 ring-line"
                      >
                        <CheckCircle2 className="h-4 w-4 text-brand-700" strokeWidth={2.25} />
                        {a}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-7 flex items-center justify-between border-t border-line pt-5">
                  <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-fg-4">
                    Step {active.num} of {String(STEPS.length).padStart(2, '0')}
                  </p>
                  {activeIndex < STEPS.length - 1 && (
                    <button
                      onClick={() => setActiveIndex(activeIndex + 1)}
                      className="inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-brand-700 hover:text-brand-800"
                    >
                      Next: {STEPS[activeIndex + 1].tag}
                      <ArrowRight className="h-3.5 w-3.5" strokeWidth={2.5} />
                    </button>
                  )}
                </div>
              </div>
            </div>
          </motion.article>
        </AnimatePresence>
      </div>
    </section>
  )
}
