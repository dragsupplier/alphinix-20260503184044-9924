import { cn } from '@/lib/cn'

type Props = {
  className?: string
  variant?: 'default' | 'inverted'
}

export function Logo({ className, variant = 'default' }: Props) {
  const wordmark = variant === 'inverted' ? 'text-white' : 'text-fg'
  return (
    <a href="/" className={cn('inline-flex items-center gap-2.5', className)}>
      <span
        className={cn(
          'grid h-9 w-9 place-items-center rounded-md',
          variant === 'inverted'
            ? 'bg-white text-brand-700'
            : 'bg-brand-700 text-white',
        )}
      >
        <svg viewBox="0 0 24 24" className="h-[16px] w-[16px]" fill="none" aria-hidden>
          <path
            d="M3 20L12 4l9 16"
            stroke="currentColor"
            strokeWidth="2.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M7.5 14h9" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
        </svg>
      </span>
      <span className={cn('font-display text-[20px] font-bold tracking-tight', wordmark)}>
        Alphinix
      </span>
    </a>
  )
}
