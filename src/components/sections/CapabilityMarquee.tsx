import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { TextReveal } from '@/components/ui/TextReveal'
import {
  Plus,
  Minus,
  ArrowRight,
  GraduationCap,
  Code2,
  Beaker,
  Briefcase,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

type Item = { label: string; desc: string }
type Group = { key: string; tag: string; title: string; intro: string; items: Item[]; icon: LucideIcon }

const GROUPS: Group[] = [
  {
    key: 'training',
    tag: 'A',
    title: 'Training & academic operations',
    intro:
      'Programmes that turn into placements — industrial training, internships, certifications, faculty development, and accreditation support.',
    icon: GraduationCap,
    items: [
      { label: 'Industrial training',     desc: 'Year-3 / 4 cohorts on campus' },
      { label: 'Internship placement',    desc: 'Curated with hiring partners' },
      { label: 'Coding bootcamps',        desc: 'Web · mobile · data · AI tracks' },
      { label: 'Certifications',          desc: 'Industry-aligned tracks' },
      { label: 'Career guidance',         desc: 'Resume · interview · offer' },
      { label: 'Faculty development',     desc: 'FDPs aligned to curriculum' },
      { label: 'NAAC / NBA support',      desc: 'Documentation + audit prep' },
      { label: 'Curriculum consulting',   desc: 'Stream-wise outcome design' },
      { label: 'Skill development',       desc: 'Year-long structured tracks' },
    ],
  },
  {
    key: 'engineering',
    tag: 'B',
    title: 'Software, AI and infrastructure',
    intro:
      'Production-grade engineering by senior in-house leads — for founders shipping their first product and enterprises modernising the next workflow.',
    icon: Code2,
    items: [
      { label: 'Web development',     desc: 'Marketing · product · internal tools' },
      { label: 'Mobile applications', desc: 'iOS · Android · React Native' },
      { label: 'AI solutions',        desc: 'Agents · RAG · fine-tuning' },
      { label: 'Automation',          desc: 'Internal ops · integrations' },
      { label: 'Cloud infrastructure',desc: 'AWS · Azure · GCP' },
      { label: 'Data platforms',      desc: 'Pipelines · warehouses · BI' },
      { label: 'API engineering',     desc: 'Public · partner · internal' },
      { label: 'DevOps & SRE',        desc: 'CI/CD, observability' },
      { label: 'Tech consulting',     desc: 'Architecture · roadmaps' },
    ],
  },
  {
    key: 'labs',
    tag: 'C',
    title: 'Future-ready labs for schools',
    intro:
      'STEM, ATL, AI, IoT and robotics labs designed for Indian classrooms — with curriculum, hardware and teacher training that survive the year.',
    icon: Beaker,
    items: [
      { label: 'STEM / ATL labs',       desc: 'AIM-aligned setups' },
      { label: 'AI · IoT labs',         desc: 'Microcontroller + cloud' },
      { label: 'Robotics labs',         desc: 'Hardware + curriculum' },
      { label: 'Coding curriculum',     desc: 'Grade-wise learning ladders' },
      { label: 'Hardware kits',         desc: 'Arduino · Pi · drones' },
      { label: 'Teacher training',      desc: 'On-site + recorded modules' },
      { label: 'Maker spaces',          desc: 'Tools, safety, workflow' },
    ],
  },
  {
    key: 'talent',
    tag: 'D',
    title: 'Recruitment & talent supply',
    intro:
      'Permanent recruitment, contract staffing, RPO and bulk drives — backed by candidates we trained ourselves.',
    icon: Briefcase,
    items: [
      { label: 'Permanent recruitment',   desc: 'Engineering & non-tech roles' },
      { label: 'Contract staffing',       desc: '3 to 18-month engagements' },
      { label: 'Pre-trained interns',     desc: 'Curated from our cohorts' },
      { label: 'Technical assessments',   desc: 'Custom screens per role' },
      { label: 'Recruitment outsourcing', desc: 'RPO with weekly reviews' },
      { label: 'Bulk hiring drives',      desc: 'Single-day on-site drives' },
    ],
  },
]

export function CapabilityMarquee() {
  const [openKey, setOpenKey] = useState<string>(GROUPS[0].key)

  return (
    <section id="capabilities" className="relative bg-canvas">
      {/* Section opener */}
      <div className="bg-canvas">
        <div className="mx-auto max-w-7xl px-5 pt-16 md:px-8 md:pt-20">
          <div className="flex items-center gap-3">
            <span className="kicker">03 — Capabilities</span>
            <span className="h-px flex-1 bg-line-2" />
          </div>
          <div className="mt-8 grid grid-cols-12 gap-x-10 gap-y-6">
            <h2 className="col-span-12 font-display text-[36px] font-semibold leading-[1.04] tracking-[-0.02em] text-fg lg:col-span-7 lg:text-[52px]">
              <TextReveal text="Forty-plus services." unit="word" stagger={60} trigger="inview" />{' '}
              <span className="text-brand-700">
                <TextReveal text="Four delivery groups." unit="word" stagger={60} trigger="inview" />
              </span>
            </h2>
            <p className="col-span-12 text-[15.5px] leading-[1.6] text-fg-3 lg:col-span-5 lg:text-[16.5px]">
              Each group runs as an in-house team — same hiring standard,
              shared engagement model, single point of contact for
              multi-track engagements.
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-7xl px-5 pb-20 md:mt-16 md:px-8 md:pb-24">
        <div className="grid grid-cols-12 gap-x-10">
          {/* Persistent left rail with icon cards */}
          <aside className="col-span-12 lg:col-span-3">
            <div className="sticky top-[120px] hidden lg:block">
              <p className="kicker">Index</p>
              <ol className="mt-5 space-y-2">
                {GROUPS.map((g) => {
                  const isActive = g.key === openKey
                  const Icon = g.icon
                  return (
                    <li key={g.key}>
                      <button
                        onClick={() => setOpenKey(g.key)}
                        className={`relative grid w-full grid-cols-[auto_1fr_auto] items-center gap-3 rounded-md border p-3 text-left transition-colors ${
                          isActive
                            ? 'border-brand-700 bg-white'
                            : 'border-line bg-white/60 hover:border-line-2 hover:bg-white'
                        }`}
                      >
                        <span
                          className={`grid h-9 w-9 place-items-center rounded-md transition-colors ${
                            isActive ? 'bg-brand-700 text-white' : 'bg-canvas-2 text-fg-3'
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
                            {g.tag} · {g.items.length} svc
                          </span>
                          <span className="font-display text-[13.5px] font-semibold leading-tight tracking-tight text-fg">
                            {g.title}
                          </span>
                        </span>
                        <ArrowRight
                          className={`h-3.5 w-3.5 transition-all duration-200 ${
                            isActive ? 'translate-x-0 text-brand-700' : '-translate-x-1 text-fg-5'
                          }`}
                          strokeWidth={2.5}
                        />
                      </button>
                    </li>
                  )
                })}
              </ol>
            </div>
            {/* Mobile horizontal index */}
            <ol className="-mx-1 flex items-stretch overflow-x-auto border-y border-line lg:hidden">
              {GROUPS.map((g) => {
                const isActive = g.key === openKey
                const Icon = g.icon
                return (
                  <li key={g.key} className="shrink-0">
                    <button
                      onClick={() => setOpenKey(g.key)}
                      className={`relative flex items-center gap-2 px-4 py-3 ${
                        isActive ? 'text-fg' : 'text-fg-3'
                      }`}
                    >
                      <Icon className={`h-3.5 w-3.5 ${isActive ? 'text-brand-700' : 'text-fg-4'}`} strokeWidth={2} />
                      <span className="font-display text-[13px] font-semibold tracking-tight">
                        {g.title.split(' ').slice(0, 2).join(' ')}
                      </span>
                      {isActive && <span aria-hidden className="absolute inset-x-3 -bottom-px h-0.5 bg-brand-700" />}
                    </button>
                  </li>
                )
              })}
            </ol>
          </aside>

          {/* Accordion — wrapped in a single bounded card */}
          <div className="col-span-12 overflow-hidden rounded-lg border border-line bg-white lg:col-span-9">
            <ul>
            {GROUPS.map((g, i) => {
              const isOpen = openKey === g.key
              const Icon = g.icon
              return (
                <li
                  key={g.key}
                  className={i !== 0 ? 'border-t border-line' : ''}
                >
                  <button
                    onClick={() => setOpenKey(isOpen ? '' : g.key)}
                    className="flex w-full items-center gap-5 px-5 py-6 text-left transition-colors hover:bg-canvas/60 md:px-8 md:py-7"
                    aria-expanded={isOpen}
                  >
                    <span
                      className={`grid h-11 w-11 shrink-0 place-items-center rounded-md transition-colors ${
                        isOpen ? 'bg-brand-700 text-white' : 'bg-canvas-2 text-fg-3'
                      }`}
                    >
                      <Icon className="h-4 w-4" strokeWidth={2} />
                    </span>
                    <span className="flex min-w-0 flex-1 flex-col gap-1">
                      <span className="kicker">
                        Group {g.tag}
                      </span>
                      <h3 className="truncate font-display text-[18px] font-semibold leading-tight tracking-tight text-fg md:text-[22px]">
                        {g.title}
                      </h3>
                    </span>
                    <span className="hidden shrink-0 font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-fg-4 md:inline">
                      {g.items.length} services
                    </span>
                    <span
                      className={`grid h-9 w-9 shrink-0 place-items-center rounded-full border transition-colors ${
                        isOpen ? 'border-brand-700 bg-brand-700 text-white' : 'border-line text-fg-3'
                      }`}
                    >
                      {isOpen ? (
                        <Minus className="h-3.5 w-3.5" strokeWidth={2.5} />
                      ) : (
                        <Plus className="h-3.5 w-3.5" strokeWidth={2.5} />
                      )}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.2, 0.7, 0.2, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="border-t border-line bg-canvas px-5 pb-8 pt-6 md:px-8 md:pb-10 md:pt-7">
                          <div className="grid grid-cols-12 gap-x-6 gap-y-6">
                          <div className="col-span-12 md:col-span-4">
                            <p className="max-w-[40ch] text-[14.5px] leading-[1.6] text-fg-3">
                              {g.intro}
                            </p>
                            <a href="#contact" className="link-rule mt-5 text-[13px]">
                              Discuss this team
                              <ArrowRight className="h-3.5 w-3.5" strokeWidth={2.5} />
                            </a>
                          </div>
                          <ul className="col-span-12 grid grid-cols-1 gap-2.5 sm:grid-cols-2 md:col-span-8">
                            {g.items.map((it, idx) => (
                              <li
                                key={it.label}
                                className="group flex items-start gap-3 rounded-md border border-line bg-white p-3 transition-colors hover:border-brand-300 hover:bg-brand-50/40"
                              >
                                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-sm bg-canvas font-mono text-[10.5px] font-semibold tracking-wider text-brand-700 transition-colors group-hover:bg-brand-700 group-hover:text-white">
                                  {String(idx + 1).padStart(2, '0')}
                                </span>
                                <div>
                                  <p className="font-display text-[14.5px] font-medium tracking-tight text-fg">
                                    {it.label}
                                  </p>
                                  <p className="mt-0.5 text-[12.5px] leading-snug text-fg-4">
                                    {it.desc}
                                  </p>
                                </div>
                              </li>
                            ))}
                          </ul>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              )
            })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
