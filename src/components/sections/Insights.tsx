import { ArrowUpRight, Clock } from 'lucide-react'
import { TextReveal } from '@/components/ui/TextReveal'
import { Stagger, Rise } from '@/components/ui/Stagger'

type Article = {
  category: string
  title: string
  dek: string
  read: string
  date: string
  featured?: boolean
}

const ARTICLES: Article[] = [
  {
    category: 'Field notes',
    title: 'Designing a placement runway that actually starts in year two.',
    dek: 'Most placement programmes run as a final-year sprint. Here is how a sequenced, year-on-year plan compounds outcomes for both colleges and students — and how to start small in the second-year cohort.',
    read: '6 min read',
    date: 'Q3 · 2025',
    featured: true,
  },
  {
    category: 'Curriculum',
    title: 'NEP-aligned STEM and ATL labs that survive the school year.',
    dek: 'Hardware kits, teacher training, lab maintenance and how to roll out across multiple campuses without dropping standards.',
    read: '5 min read',
    date: 'Q3 · 2025',
  },
  {
    category: 'Engineering',
    title: 'Shipping production AI for institutions, not Silicon Valley.',
    dek: 'Privacy posture, data residency, and integration with existing ERP and LMS systems for Indian institutions.',
    read: '8 min read',
    date: 'Q2 · 2025',
  },
]

export function Insights() {
  const featured = ARTICLES.find((a) => a.featured) ?? ARTICLES[0]
  const supporting = ARTICLES.filter((a) => !a.featured).slice(0, 2)

  return (
    <section id="insights" className="relative bg-white">
      {/* Section opener */}
      <div className="border-y border-line">
        <div className="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-14">
          <div className="grid grid-cols-12 items-end gap-6">
            <div className="col-span-12 lg:col-span-7">
              <p className="kicker">07 — Insights</p>
              <h2 className="mt-4 font-display text-[28px] font-semibold leading-[1.08] tracking-[-0.02em] text-fg md:text-[36px] lg:text-[44px]">
                <TextReveal text="Latest thinking from the field." unit="word" stagger={40} trigger="inview" />
              </h2>
            </div>
            <div className="col-span-12 lg:col-span-5">
              <p className="text-[15px] leading-[1.6] text-fg-3 md:text-[15.5px]">
                Field notes, playbooks and short briefs from the engineers,
                trainers and recruiters delivering Alphinix engagements.
              </p>
              <a href="#" className="mt-3 inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-brand-700 hover:text-brand-800">
                See all writing
                <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2.5} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Featured + supporting layout */}
      <div className="mx-auto max-w-7xl px-5 py-14 md:px-8 md:py-20">
        <Stagger step={0.06}>
          <div className="grid grid-cols-12 gap-x-8 gap-y-10">
            {/* Featured — large article on the left */}
            <Rise className="col-span-12 lg:col-span-7">
              <a
                href="#"
                className="group block overflow-hidden rounded-lg border border-line bg-white transition-shadow duration-300 hover:shadow-[0_30px_60px_-30px_rgba(11,18,32,0.22)]"
              >
                {/* Visual top band — color block, no drawn shapes */}
                <div className="brand-mesh-light relative h-44 overflow-hidden md:h-56">
                  <div className="absolute inset-0 flex flex-col justify-between p-7 text-white md:p-9">
                    <div className="flex items-center justify-between">
                      <span className="rounded-sm bg-white/12 px-2.5 py-1 font-mono text-[10.5px] font-semibold uppercase tracking-[0.16em] text-white ring-1 ring-white/20 backdrop-blur">
                        Featured
                      </span>
                      <span className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-white/70">
                        {featured.date}
                      </span>
                    </div>
                    <p className="font-mono text-[44px] font-semibold leading-none tracking-[-0.04em] text-white/80 md:text-[68px]">
                      01
                    </p>
                  </div>
                </div>

                <div className="p-7 md:p-9">
                  <span className="kicker">{featured.category}</span>
                  <h3 className="mt-3 font-display text-[22px] font-semibold leading-[1.2] tracking-tight text-fg transition-colors group-hover:text-brand-700 md:text-[28px]">
                    {featured.title}
                  </h3>
                  <p className="mt-4 max-w-2xl text-[14.5px] leading-[1.65] text-fg-3 md:text-[15.5px]">
                    {featured.dek}
                  </p>
                  <div className="mt-6 flex items-center justify-between border-t border-line pt-5">
                    <span className="inline-flex items-center gap-1.5 text-[12.5px] text-fg-4">
                      <Clock className="h-3 w-3" strokeWidth={2.25} />
                      {featured.read}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-brand-700 transition-colors group-hover:text-brand-800">
                      Read article
                      <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:rotate-12" strokeWidth={2.5} />
                    </span>
                  </div>
                </div>
              </a>
            </Rise>

            {/* Supporting stack on the right */}
            <div className="col-span-12 lg:col-span-5">
              <ul className="flex flex-col gap-4">
                {supporting.map((a, i) => (
                  <Rise key={a.title}>
                    <li>
                      <a
                        href="#"
                        className="group flex h-full flex-col rounded-lg border border-line bg-white p-6 transition-all duration-300 hover:border-brand-200 hover:bg-brand-50/30 md:p-7"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="grid h-7 w-7 place-items-center rounded-sm bg-canvas font-mono text-[10.5px] font-semibold tracking-wider text-brand-700 transition-colors group-hover:bg-brand-700 group-hover:text-white">
                              {String(i + 2).padStart(2, '0')}
                            </span>
                            <span className="kicker">{a.category}</span>
                          </div>
                          <span className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-fg-4">
                            {a.date}
                          </span>
                        </div>
                        <h3 className="mt-5 font-display text-[18px] font-semibold leading-[1.25] tracking-tight text-fg transition-colors group-hover:text-brand-700 md:text-[19px]">
                          {a.title}
                        </h3>
                        <p className="mt-2.5 line-clamp-2 text-[13.5px] leading-[1.55] text-fg-3">
                          {a.dek}
                        </p>
                        <div className="mt-5 flex items-center justify-between border-t border-line pt-4">
                          <span className="inline-flex items-center gap-1.5 text-[12px] text-fg-4">
                            <Clock className="h-3 w-3" strokeWidth={2.25} />
                            {a.read}
                          </span>
                          <ArrowUpRight
                            className="h-3.5 w-3.5 text-fg-4 transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-brand-700"
                            strokeWidth={2.25}
                          />
                        </div>
                      </a>
                    </li>
                  </Rise>
                ))}
              </ul>
            </div>
          </div>
        </Stagger>
      </div>
    </section>
  )
}
