import { Logo } from '@/components/ui/Logo'
import { ArrowUpRight, MapPin, Phone, Mail, Compass } from 'lucide-react'

function LinkedInIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.22 8h4.56v15H.22V8zm7.79 0h4.37v2.05h.06c.61-1.15 2.1-2.37 4.32-2.37 4.62 0 5.47 3.04 5.47 6.99V23h-4.56v-7.6c0-1.81-.04-4.14-2.52-4.14-2.52 0-2.91 1.97-2.91 4v7.74H8.01V8z" />
    </svg>
  )
}
function XIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231zm-1.161 17.52h1.833L7.084 4.126H5.117l11.966 15.644z" />
    </svg>
  )
}
function YouTubeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  )
}

const COL_SOLUTIONS: [string, string][] = [
  ['For Students', '#audiences'],
  ['For Colleges', '#audiences'],
  ['For Schools', '#audiences'],
  ['For Businesses', '#audiences'],
  ['For Hiring Teams', '#audiences'],
]
const COL_CAPABILITIES: [string, string][] = [
  ['Training & academics', '#capabilities'],
  ['Software engineering', '#capabilities'],
  ['Labs & curriculum', '#capabilities'],
  ['Recruitment services', '#capabilities'],
]
const COL_COMPANY: [string, string][] = [
  ['About', '#about'],
  ['Approach', '#approach'],
  ['Engagement formats', '#industries'],
  ['Insights', '#insights'],
  ['Newsroom', '#'],
  ['Careers', '#'],
]
const COL_RESOURCES: [string, string][] = [
  ['Blog', '#'],
  ['Webinars', '#'],
  ['Career roadmaps', '#'],
  ['Industry briefs', '#'],
  ['FAQ', '#'],
]

const LEGAL: [string, string][] = [
  ['Privacy', '#'],
  ['Terms', '#'],
  ['Cookies', '#'],
  ['Refunds', '#'],
  ['Grievance Officer', '#'],
]

export function Footer() {
  return (
    <footer id="footer" className="relative overflow-hidden bg-ink-950 text-white">
      {/* Top featured band — brand statement with visual chrome */}
      <div className="relative border-b border-white/10">
        <div className="brand-mesh-light absolute inset-y-0 right-0 -z-10 hidden w-1/3 opacity-40 md:block" aria-hidden />
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
          <div className="grid grid-cols-12 items-end gap-10">
            <div className="col-span-12 lg:col-span-8">
              <div className="flex items-center gap-3">
                <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-200">
                  Alphinix
                </span>
                <span className="h-px w-10 bg-white/15" />
                <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-white/55">
                  Pune · Est. 2024
                </span>
              </div>
              <h2 className="mt-6 max-w-[20ch] font-display text-[36px] font-semibold leading-[1.04] tracking-[-0.02em] text-white md:text-[52px] lg:text-[60px]">
                One partner. Five audiences. Quiet, accountable engagements.
              </h2>
            </div>
            <div className="col-span-12 lg:col-span-4">
              <a
                href="#contact"
                className="group flex w-full items-center justify-between gap-3 rounded-md bg-white px-5 py-4 text-[14.5px] font-semibold text-ink-950 transition-colors hover:bg-brand-50"
              >
                <span className="inline-flex items-center gap-2">
                  <Compass className="h-4 w-4 text-brand-700" strokeWidth={2.25} />
                  Start a conversation
                </span>
                <ArrowUpRight
                  className="h-4 w-4 transition-transform duration-200 group-hover:rotate-12"
                  strokeWidth={2.5}
                />
              </a>
              <ul className="mt-4 space-y-2 text-[12.5px] text-white/65">
                <li className="flex items-center gap-2">
                  <Phone className="h-3 w-3 text-brand-200" strokeWidth={2.25} />
                  +91 00000 00000
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="h-3 w-3 text-brand-200" strokeWidth={2.25} />
                  hello@alphinix.in
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="h-3 w-3 text-brand-200" strokeWidth={2.25} />
                  Pune, Maharashtra · India
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Link directory */}
      <div className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-16">
          <div className="grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-12">
            {/* Brand block */}
            <div className="col-span-2 lg:col-span-4">
              <Logo variant="inverted" />
              <p className="mt-5 max-w-sm text-[13px] leading-[1.65] text-white/65">
                A Pune-based partner combining campus training, in-house
                engineering and recruitment under one accountable team.
              </p>

              <div className="mt-6 flex items-center gap-2">
                {[
                  { I: LinkedInIcon, label: 'LinkedIn' },
                  { I: XIcon, label: 'X' },
                  { I: YouTubeIcon, label: 'YouTube' },
                ].map(({ I, label }) => (
                  <a
                    key={label}
                    href="#"
                    aria-label={label}
                    className="group grid h-9 w-9 place-items-center rounded-md border border-white/15 text-white/70 transition-colors hover:border-brand-200 hover:bg-white/[0.04] hover:text-brand-200"
                  >
                    <I className="h-3.5 w-3.5" />
                  </a>
                ))}
              </div>
            </div>

            <FooterCol title="Solutions" links={COL_SOLUTIONS} />
            <FooterCol title="Capabilities" links={COL_CAPABILITIES} />
            <FooterCol title="Company" links={COL_COMPANY} />
            <FooterCol title="Resources" links={COL_RESOURCES} />
          </div>
        </div>
      </div>

      {/* Bottom strip */}
      <div className="mx-auto max-w-7xl px-5 py-6 md:px-8">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <div className="flex items-center gap-3">
            <span className="grid h-7 w-7 place-items-center rounded-sm bg-brand-700 text-white">
              <span className="font-display text-[10px] font-bold">α</span>
            </span>
            <p className="text-[12px] text-white/55">
              © {new Date().getFullYear()} Alphinix Technologies. All rights reserved.
            </p>
          </div>
          <ul className="flex flex-wrap gap-x-5 gap-y-1.5 text-[12px]">
            {LEGAL.map(([label, href]) => (
              <li key={label}>
                <a href={href} className="text-white/65 transition-colors hover:text-white">
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-white/40">
            Built in Pune
          </p>
        </div>
      </div>
    </footer>
  )
}

function FooterCol({ title, links }: { title: string; links: [string, string][] }) {
  return (
    <div className="lg:col-span-2">
      <p className="text-[10.5px] font-semibold uppercase tracking-[0.16em] text-brand-200">
        {title}
      </p>
      <ul className="mt-5 space-y-2.5">
        {links.map(([label, href]) => (
          <li key={label}>
            <a
              href={href}
              className="group inline-flex items-center gap-1 text-[13px] text-white/75 transition-colors hover:text-white"
            >
              {label}
              <ArrowUpRight
                className="h-3 w-3 -translate-x-1 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100"
                strokeWidth={2.25}
              />
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
