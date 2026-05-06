import { motion, useScroll, useTransform } from 'motion/react'
import {
  ArrowRight,
  Phone,
  GraduationCap,
  Building2,
  School,
  Rocket,
  Users,
  ArrowUpRight,
  Sparkles,
  Zap,
  TrendingUp,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { TextReveal } from '@/components/ui/TextReveal'
import { MagneticButton } from '@/components/ui/MagneticButton'
import { Stagger, Rise } from '@/components/ui/Stagger'
import { useRef } from 'react'

const AUDIENCE_STRIP: { label: string; sub: string; icon: LucideIcon; color: string }[] = [
  { label: 'Students',     sub: 'Training & placement',    icon: GraduationCap, color: 'from-blue-500 to-cyan-400' },
  { label: 'Colleges',     sub: 'Academic operations',     icon: Building2,     color: 'from-purple-500 to-pink-400' },
  { label: 'Schools',      sub: 'STEM · ATL · AI labs',    icon: School,        color: 'from-orange-500 to-amber-400' },
  { label: 'Businesses',   sub: 'Engineering & AI',        icon: Rocket,        color: 'from-emerald-500 to-teal-400' },
  { label: 'Hiring Teams', sub: 'Recruitment services',    icon: Users,         color: 'from-rose-500 to-red-400' },
]

// Animated background grid component
function GridBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Gradient mesh */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-50 via-white to-brand-50" />
      
      {/* Animated gradient orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-r from-brand-200/40 to-purple-200/40 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-r from-cyan-200/40 to-blue-200/40 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-brand-100/30 to-indigo-100/30 rounded-full blur-3xl"
      />

      {/* Grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(29, 58, 165, 0.3) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(29, 58, 165, 0.3) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />
      
      {/* Dotted pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(29, 58, 165, 0.4) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />
    </div>
  )
}

// Floating badge component
function FloatingBadge({ icon: Icon, text, delay, position }: { icon: any; text: string; delay: number; position: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: [0.23, 1, 0.32, 1] }}
      className={`absolute hidden lg:block ${position}`}
    >
      <div className="flex items-center gap-2 px-4 py-2.5 bg-white/80 backdrop-blur-sm rounded-full shadow-lg border border-white/50">
        <Icon className="w-4 h-4 text-brand-600" strokeWidth={2.5} />
        <span className="text-xs font-semibold text-fg-2">{text}</span>
      </div>
    </motion.div>
  )
}

export function Hero() {
  const heroRef = useRef<HTMLElement>(null)
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 150])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])

  return (
    <section id="hero" ref={heroRef} className="relative overflow-hidden bg-white min-h-screen flex flex-col justify-center">
      <GridBackground />
      
      {/* Floating badges */}
      <FloatingBadge icon={Zap} text="Lightning Fast" delay={1.2} position="top-32 right-[15%]" />
      <FloatingBadge icon={TrendingUp} text="Proven Results" delay={1.4} position="bottom-48 left-[12%]" />
      <FloatingBadge icon={Sparkles} text="AI-Powered" delay={1.6} position="top-40 left-[20%]" />

      {/* Main content */}
      <motion.div 
        style={{ y, opacity }}
        className="relative mx-auto max-w-6xl px-5 pt-20 pb-12 text-center md:px-8 md:pt-28 md:pb-16"
      >
        {/* Eyebrow text */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
          className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-brand-50 to-brand-100/50 border border-brand-200/60"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-600"></span>
          </span>
          <span className="text-xs font-semibold tracking-wide text-brand-700 uppercase">Enterprise Solutions</span>
        </motion.div>

        {/* Centered headline with word-by-word reveal */}
        <h1 className="mx-auto max-w-[22ch] font-display text-[46px] font-semibold leading-[1.02] tracking-[-0.03em] text-fg sm:text-[60px] md:text-[72px] lg:text-[84px] xl:text-[88px]">
          <TextReveal text="One partner." stagger={70} delay={0.05} />{' '}
          <span className="bg-gradient-to-r from-brand-600 via-brand-700 to-brand-800 bg-clip-text text-transparent">
            <TextReveal text="One platform." stagger={70} delay={0.35} />
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7, ease: [0.23, 1, 0.32, 1] }}
          className="mx-auto mt-8 max-w-[62ch] text-[17px] leading-[1.7] text-fg-3 md:text-[19px] lg:text-[18px]"
        >
          Alphinix combines campus training, in-house engineering and
          recruitment under a single accountable team — replacing the four
          or five vendors institutions and businesses were juggling.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.85, ease: [0.23, 1, 0.32, 1] }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <MagneticButton
            href="#contact"
            className="group relative overflow-hidden rounded-full bg-gradient-to-r from-brand-600 to-brand-700 px-7 py-3.5 text-[15px] font-semibold text-white shadow-[0_8px_32px_-12px_rgba(29,58,165,0.5)] transition-all duration-300 hover:shadow-[0_12px_40px_-12px_rgba(29,58,165,0.6)] hover:scale-[1.02] active:scale-[0.98]"
          >
            <span className="relative z-10 flex items-center gap-2">
              Request a proposal
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={2.5} />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-brand-700 to-brand-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </MagneticButton>
          
          <a
            href="tel:+910000000000"
            className="group inline-flex items-center gap-2.5 rounded-full bg-white px-7 py-3.5 text-[15px] font-semibold text-fg ring-1 ring-line-2/80 transition-all duration-300 hover:bg-canvas hover:ring-brand-200 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]"
          >
            <div className="grid h-5 w-5 place-items-center rounded-full bg-brand-50 group-hover:bg-brand-100 transition-colors">
              <Phone className="h-3.5 w-3.5 text-brand-700" strokeWidth={2.5} />
            </div>
            Speak to a consultant
          </a>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-16 flex flex-col items-center gap-4"
        >
          <p className="text-xs font-medium uppercase tracking-widest text-fg-4">Trusted by industry leaders</p>
          <div className="flex items-center gap-6 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="h-8 w-24 bg-gradient-to-r from-slate-200 to-slate-300 rounded-md" />
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Audience strip with stagger reveal */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5, ease: [0.23, 1, 0.32, 1] }}
        className="relative mx-auto max-w-7xl px-5 pb-16 md:px-8 md:pb-20"
      >
        <div className="relative overflow-hidden rounded-2xl border border-line/60 bg-white/60 backdrop-blur-xl shadow-2xl">
          {/* Top gradient line */}
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-200 to-transparent" />
          
          <Stagger step={0.08} className="grid grid-cols-2 lg:grid-cols-5 divide-x divide-line/60 lg:divide-x-0 lg:divide-y-0">
            {AUDIENCE_STRIP.map((m, i) => (
              <Rise
                key={m.label}
                className={`relative group ${
                  i !== 0 ? 'border-t border-line/60 lg:border-t-0 lg:border-l lg:border-l-line/60' : ''
                } ${i === 1 ? 'sm:border-t-0' : ''} ${i >= 2 && i <= 4 ? 'border-t border-line/60 sm:border-t-0 sm:border-l sm:border-l-line/60' : ''}`}
              >
                <a
                  href="#audiences"
                  className="group/block relative block px-5 py-7 transition-all duration-300 hover:bg-gradient-to-br hover:from-brand-50/50 hover:to-transparent md:px-6 md:py-8"
                >
                  <div className="flex items-start justify-between">
                    <motion.span 
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      className={`grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br ${m.color} text-white shadow-lg transition-all duration-300 group-hover/block:shadow-xl`}
                    >
                      <m.icon className="h-5 w-5" strokeWidth={2} />
                    </motion.span>
                    <span className="font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-fg-4 group-hover/block:text-brand-600 transition-colors">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <p className="under-slide mt-6 inline-block font-display text-[18px] font-semibold leading-tight tracking-tight text-fg group-hover/block:text-brand-700 md:text-[19px] transition-colors">
                    {m.label}
                  </p>
                  <p className="mt-2 text-[13px] leading-relaxed text-fg-4 group-hover/block:text-fg-3 transition-colors">{m.sub}</p>
                  <div className="mt-6 flex items-center justify-between border-t border-line/60 pt-4">
                    <span className="text-[11.5px] font-semibold tracking-wide text-fg-4 group-hover/block:text-brand-700 transition-colors uppercase">
                      Explore
                    </span>
                    <ArrowUpRight
                      className="h-4 w-4 text-fg-4 transition-all duration-300 group-hover/block:translate-x-1 group-hover/block:-translate-y-1 group-hover/block:text-brand-700"
                      strokeWidth={2.25}
                    />
                  </div>
                  
                  {/* Hover gradient background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-50/0 to-brand-50/0 group-hover/block:from-brand-50/80 group-hover/block:to-transparent transition-all duration-500 pointer-events-none rounded-2xl m-2" />
                </a>
              </Rise>
            ))}
          </Stagger>
          
          {/* Bottom gradient line */}
          <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-200 to-transparent" />
        </div>
      </motion.div>
    </section>
  )
}
