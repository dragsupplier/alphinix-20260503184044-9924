import { Stagger, Rise } from '@/components/ui/Stagger'

const FRAMEWORKS: { name: string; sub: string }[] = [
  { name: 'NEP 2020',         sub: 'National Education Policy alignment' },
  { name: 'NAAC',             sub: 'Accreditation documentation support' },
  { name: 'NBA',              sub: 'Outcome-based education readiness' },
  { name: 'AICTE',            sub: 'Curriculum & internship norms' },
  { name: 'NITI Aayog · ATL', sub: 'Atal Tinkering Lab guidelines' },
  { name: 'DPDP Act 2023',    sub: 'Data privacy compliance' },
  { name: 'ISO 27001',        sub: 'Information security readiness' },
  { name: 'GDPR-aware',       sub: 'Cross-border data handling' },
]

export function Standards() {
  return (
    <section id="standards" className="relative bg-canvas-2">
      <div className="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-14">
        <div className="grid grid-cols-12 items-start gap-8">
          <div className="col-span-12 md:col-span-3">
            <p className="kicker">Standards & frameworks</p>
            <p className="mt-3 font-display text-[18px] font-semibold leading-snug tracking-tight text-fg md:text-[20px]">
              Built around public standards, not proprietary lock-ins.
            </p>
          </div>
          <Stagger step={0.05} className="col-span-12 md:col-span-9">
            <ul className="grid grid-cols-2 gap-x-6 gap-y-5 md:grid-cols-4">
              {FRAMEWORKS.map((f) => (
                <Rise key={f.name} y={10}>
                  <li className="border-l-2 border-brand-700 pl-4 transition-[border-color] duration-300 hover:border-brand-500">
                    <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-700">
                      {f.name}
                    </p>
                    <p className="mt-1 text-[12.5px] leading-snug text-fg-3">{f.sub}</p>
                  </li>
                </Rise>
              ))}
            </ul>
          </Stagger>
        </div>
      </div>
    </section>
  )
}
