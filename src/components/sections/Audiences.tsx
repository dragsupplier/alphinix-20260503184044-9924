import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { TextReveal } from '@/components/ui/TextReveal'
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  GraduationCap,
  Building2,
  School,
  Rocket,
  Users,
  Target,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

type Segment = {
  key: string
  num: string
  tab: string
  title: string
  who: string
  promise: string
  body: string
  programs: string[]
  outcome: string
  icon: LucideIcon
}

const SEGMENTS: Segment[] = [
  {
    key: 'students',
    num: '01',
    tab: 'Students',
    title: 'For Students',
    who: 'Engineering · BCA · MCA · BSc · Diploma',
    promise: 'From classroom to offer letter.',
    body:
      'A guided runway across your degree — industrial training, internships, certifications, coding programmes and structured placement preparation, sequenced by stream and year.',
    programs: ['Industrial training', 'Internships', 'Coding bootcamps', 'Certifications', 'Career guidance', 'Skill development'],
    outcome: 'Industry-ready before you graduate.',
    icon: GraduationCap,
  },
  {
    key: 'colleges',
    num: '02',
    tab: 'Colleges',
    title: 'For Colleges',
    who: 'Engineering & polytechnic institutes',
    promise: 'Better placements. Stronger accreditation.',
    body:
      'A single partner for the academic stack — pre-placement training, drives, faculty development, NAAC/NBA support and on-campus AI/IoT/Cloud labs.',
    programs: ['Campus training', 'Placement drives', 'NAAC / NBA support', 'AI · IoT · Cloud labs', 'Faculty development', 'LMS / ERP systems'],
    outcome: 'A measurable lift in placement and ranking outcomes.',
    icon: Building2,
  },
  {
    key: 'schools',
    num: '03',
    tab: 'Schools',
    title: 'For Schools (K-12)',
    who: 'Principals & school management',
    promise: 'Future-ready labs. NEP 2020 aligned.',
    body:
      'AI, robotics, IoT and STEM/ATL labs designed for Indian classrooms — with curriculum, hardware kits and teacher training that survive the school year.',
    programs: ['AI & robotics', 'STEM / ATL labs', 'Coding curriculum', 'IoT lab setup', 'Hardware kits', 'Teacher training'],
    outcome: 'Future-tech literacy that parents notice.',
    icon: School,
  },
  {
    key: 'businesses',
    num: '04',
    tab: 'Businesses',
    title: 'For Businesses & Startups',
    who: 'Founders, product & operations leaders',
    promise: 'Ship faster. Scale leaner.',
    body:
      'Web, mobile, AI and automation work delivered by the same team that trains the engineers — so you can scale capability before you scale headcount.',
    programs: ['Web development', 'Mobile apps', 'AI solutions', 'Automation', 'Cloud infrastructure', 'Tech consulting'],
    outcome: 'Production-grade software, on real timelines.',
    icon: Rocket,
  },
  {
    key: 'hiring',
    num: '05',
    tab: 'Hiring',
    title: 'For Hiring Teams',
    who: 'Talent acquisition & people operations',
    promise: 'Pre-trained talent, on demand.',
    body:
      'Permanent recruitment, contract staffing, RPO and bulk drives — backed by the same students we train, so candidates arrive interview-ready.',
    programs: ['Permanent recruitment', 'Contract staffing', 'Pre-trained interns', 'Technical assessments', 'Bulk drives', 'RPO'],
    outcome: 'Faster time-to-hire with less drop-off.',
    icon: Users,
  },
]

export function Audiences() {
  const [activeKey, setActiveKey] = useState(SEGMENTS[0].key)
  const activeIndex = SEGMENTS.findIndex((s) => s.key === activeKey)
  const prevIndex = useRef<number>(activeIndex)
  const [direction, setDirection] = useState(1)

  useEffect(() => {
    setDirection(activeIndex >= prevIndex.current ? 1 : -1)
    prevIndex.current = activeIndex
  }, [activeIndex])

  const active = SEGMENTS.find((s) => s.key === activeKey) ?? SEGMENTS[0]
  const ActiveIcon = active.icon

  return (
    <section id="audiences" className="relative bg-canvas">
      <div className="brand-mesh-light h-2 w-full" aria-hidden />

      {/* Section opener */}
      <div className="bg-canvas">
        <div className="mx-auto max-w-7xl px-5 pt-14 md:px-8 md:pt-20">
          <div className="flex items-center gap-3">
            <span className="kicker">02 — Solutions</span>
            <span className="h-px flex-1 bg-line-2" />
          </div>
          <div className="mt-8 grid grid-cols-12 gap-x-10 gap-y-6">
            <h2 className="col-span-12 font-display text-[36px] font-semibold leading-[1.04] tracking-[-0.02em] text-fg lg:col-span-7 lg:text-[52px]">
              <TextReveal text="Five audiences." unit="word" stagger={60} trigger="inview" />{' '}
              <span className="text-brand-700">
                <TextReveal text="One platform." unit="word" stagger={60} trigger="inview" />
              </span>
            </h2>
            <p className="col-span-12 text-[15.5px] leading-[1.6] text-fg-3 lg:col-span-5 lg:text-[16.5px]">
              Pick an audience to see the programmes we deliver, the outcomes
              we target, and how it connects to the rest of the platform.
            </p>
          </div>
        </div>
      </div>

      {/* Tabs with icons */}
      <div className="mx-auto mt-10 max-w-7xl px-5 md:px-8 md:mt-14">
        <div className="border-y border-line">
          <div className="-mx-1 flex items-stretch overflow-x-auto">
            {SEGMENTS.map((s) => {
              const isActive = s.key === activeKey
              const Icon = s.icon
              return (
                <button
                  key={s.key}
                  onClick={() => setActiveKey(s.key)}
                  aria-pressed={isActive}
                  className={`group relative flex shrink-0 items-center gap-3 px-4 py-4 text-left transition-colors md:px-6 md:py-5 ${
                    isActive ? 'text-fg' : 'text-fg-3 hover:text-fg'
                  }`}
                >
                  <span
                    className={`grid h-9 w-9 place-items-center rounded-md transition-colors ${
                      isActive
                        ? 'bg-brand-700 text-white'
                        : 'bg-canvas-2 text-fg-3 group-hover:bg-brand-50 group-hover:text-brand-700'
                    }`}
                  >
                    <Icon className="h-4 w-4" strokeWidth={2} />
                  </span>
                  <span className="flex flex-col">
                    <span
                      className={`font-mono text-[10.5px] tracking-[0.14em] ${
                        isActive ? 'text-brand-700' : 'text-fg-5'
                      }`}
                    >
                      {s.num}
                    </span>
                    <span className="font-display text-[15px] font-semibold tracking-tight md:text-[16px]">
                      {s.tab}
                    </span>
                  </span>
                  {isActive && (
                    <span aria-hidden className="absolute inset-x-3 -bottom-px h-0.5 bg-brand-700" />
                  )}
                </button>
              )
            })}
          </div>
        </div>
      </div>

      {/* Animated card — clip-path wipe from the side that matches the tab direction */}
      <div className="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-16">
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
            transition={{ duration: 0.55, ease: [0.2, 0.7, 0.2, 1] }}
            className="overflow-hidden rounded-lg border border-line bg-canvas shadow-[0_24px_60px_-30px_rgba(11,18,32,0.18)]"
          >
            {/* Top accent stripe — brand colour band, no heavy corner block */}
            <div className="h-1.5 w-full bg-brand-700" aria-hidden />

            {/* Card header — clean horizontal layout */}
            <div className="flex flex-col gap-5 border-b border-line bg-white p-7 md:flex-row md:items-end md:justify-between md:p-10">
              <div className="flex flex-col gap-4 md:flex-row md:items-center">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-md bg-brand-50 text-brand-700 ring-1 ring-brand-100">
                  <ActiveIcon className="h-5 w-5" strokeWidth={2} />
                </span>
                <div>
                  <p className="kicker">
                    {active.num} · {active.title}
                  </p>
                  <h3 className="mt-2 font-display text-[26px] font-semibold leading-[1.06] tracking-[-0.025em] text-fg md:text-[36px] lg:text-[42px]">
                    {active.promise}
                  </h3>
                </div>
              </div>
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-fg-4 md:text-right">
                {active.who}
              </p>
            </div>

            {/* Card body — sits on canvas tint, not pure white */}
            <div className="grid grid-cols-12 gap-x-10 gap-y-10 p-7 md:p-10">
              {/* Body + outcome */}
              <div className="col-span-12 lg:col-span-7">
                <p className="max-w-xl text-[16px] leading-[1.65] text-fg-3 md:text-[17px]">
                  {active.body}
                </p>

                {/* Outcome — visual chip */}
                <div className="mt-7 flex items-start gap-4 rounded-md border border-brand-100 bg-brand-50 p-5">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-md bg-brand-700 text-white">
                    <Target className="h-4 w-4" strokeWidth={2.25} />
                  </span>
                  <div>
                    <p className="kicker">The outcome</p>
                    <p className="mt-1.5 font-display text-[18px] font-semibold leading-snug tracking-tight text-fg md:text-[20px]">
                      {active.outcome}
                    </p>
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <a
                    href="#contact"
                    className="group inline-flex items-center gap-2 rounded-md bg-brand-700 px-5 py-3 text-[14px] font-semibold text-white transition-colors hover:bg-brand-800"
                  >
                    Talk to the {active.tab.toLowerCase()} team
                    <ArrowRight
                      className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
                      strokeWidth={2.5}
                    />
                  </a>
                  <a href="#" className="link-rule text-[13.5px]">
                    Programmes catalogue
                    <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2.5} />
                  </a>
                </div>
              </div>

              {/* Programs list — proper white card on the canvas tint */}
              <aside className="col-span-12 lg:col-span-5">
                <div className="overflow-hidden rounded-md border border-line bg-white">
                  <div className="flex items-center justify-between border-b border-line bg-canvas-2 px-5 py-3">
                    <p className="kicker">Programmes included</p>
                    <span className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-fg-4">
                      {active.programs.length} items
                    </span>
                  </div>
                  <ul>
                    {active.programs.map((p, i) => (
                      <li
                        key={p}
                        className={`flex items-center gap-3 px-5 py-3 text-[14px] text-fg-2 ${
                          i !== active.programs.length - 1 ? 'border-b border-line' : ''
                        }`}
                      >
                        <CheckCircle2 className="h-4 w-4 text-brand-700" strokeWidth={2.25} />
                        <span className="flex-1">{p}</span>
                        <span className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-fg-5">
                          {String(i + 1).padStart(2, '0')}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </aside>
            </div>

            {/* Visual progression footer */}
            <div className="flex items-center justify-between border-t border-line bg-white px-7 py-4 md:px-10">
              <p className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-fg-4">
                Audience {active.num} of {String(SEGMENTS.length).padStart(2, '0')}
              </p>
              <div className="flex items-center gap-1.5">
                {SEGMENTS.map((s, i) => {
                  const isActive = i === activeIndex
                  return (
                    <button
                      key={s.key}
                      onClick={() => setActiveKey(s.key)}
                      aria-label={`Show ${s.tab}`}
                      className={`h-1.5 rounded-full transition-all duration-500 ease-out ${
                        isActive ? 'w-10 bg-brand-700 pulse-dot' : 'w-2 bg-line-2 hover:bg-fg-5'
                      }`}
                    />
                  )
                })}
              </div>
            </div>
          </motion.article>
        </AnimatePresence>
      </div>
    </section>
  )
}
