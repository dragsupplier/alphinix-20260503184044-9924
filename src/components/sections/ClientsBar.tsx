const SERVICES = [
  'Industrial training',
  'Coding bootcamps',
  'Placement drives',
  'NAAC / NBA support',
  'AI & robotics labs',
  'STEM / ATL labs',
  'Web & mobile development',
  'AI solutions',
  'Cloud infrastructure',
  'Permanent recruitment',
  'Contract staffing',
  'Bulk hiring drives',
  'Faculty development',
  'Hardware kits',
  'Curriculum design',
  'RPO partnerships',
]

export function ClientsBar() {
  return (
    <section className="relative overflow-hidden border-y border-line bg-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-7 md:flex-row md:items-center md:gap-10 md:px-8">
        <div className="shrink-0">
          <p className="text-[10.5px] font-semibold uppercase tracking-[0.16em] text-brand-700">
            What we deliver
          </p>
          <p className="mt-1 text-[12.5px] text-fg-4">
            Forty-plus services · One delivery DNA
          </p>
        </div>
        <div className="relative flex-1 overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-white to-transparent" />
          <div className="animate-marquee flex w-max items-center gap-x-8 whitespace-nowrap will-change-transform">
            {[...SERVICES, ...SERVICES].map((s, i) => (
              <span
                key={`${s}-${i}`}
                className="inline-flex items-center gap-x-8 font-display text-[14px] font-medium tracking-tight text-fg-3"
              >
                {s}
                <span aria-hidden className="h-1 w-1 rounded-full bg-line-2" />
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
