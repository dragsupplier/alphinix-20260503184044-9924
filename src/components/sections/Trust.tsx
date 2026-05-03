import { motion } from 'motion/react'

const QUOTE = {
  body:
    'Their campus training plugged a year-long gap in our placement preparation, and the platform talked to our ERP from day one. We finally have one number to call instead of five.',
  who: 'Director of Placements',
  org: 'Engineering College',
  where: 'Pune',
  program: 'Campus Training + ERP',
  year: '2025',
  initials: 'DP',
}

export function Trust() {
  return (
    <section id="trust" className="relative bg-white">
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <motion.figure
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-15%' }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-[920px] text-center"
        >
          <p className="eyebrow">07 / Customer voices</p>

          <blockquote className="mt-8 font-display text-[26px] font-medium leading-[1.35] tracking-[-0.012em] text-fg md:text-[34px]">
            "{QUOTE.body}"
          </blockquote>

          <figcaption className="mt-10">
            <div className="mx-auto h-px w-full bg-line" />
            <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-4 text-left md:grid-cols-4">
              <div>
                <p className="eyebrow">Role</p>
                <p className="mt-1.5 text-[14px] font-medium text-fg">{QUOTE.who}</p>
              </div>
              <div>
                <p className="eyebrow">Organisation</p>
                <p className="mt-1.5 text-[14px] font-medium text-fg">{QUOTE.org}</p>
              </div>
              <div>
                <p className="eyebrow">Programme</p>
                <p className="mt-1.5 text-[14px] font-medium text-fg">{QUOTE.program}</p>
              </div>
              <div>
                <p className="eyebrow">Year</p>
                <p className="mt-1.5 text-[14px] font-medium text-fg">
                  {QUOTE.year} · {QUOTE.where}
                </p>
              </div>
            </div>
          </figcaption>
        </motion.figure>

        <div className="mx-auto mt-16 flex max-w-[920px] items-center justify-between border-t border-line pt-6">
          <p className="text-[12.5px] text-fg-4">
            Selected from active engagements across colleges, schools, startups and hiring teams.
          </p>
          <a
            href="#contact"
            className="text-[13.5px] font-semibold text-brand-700 hover:text-brand-800"
          >
            Read more case studies →
          </a>
        </div>
      </div>
    </section>
  )
}
