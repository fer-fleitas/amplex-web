
/** Isotipo geométrico basado en la letra A. */
export function LogoMark({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden fill="none">
      <defs>
        <linearGradient id="amplex-logo-g" x1="17" y1="3" x2="38" y2="36" gradientUnits="userSpaceOnUse">
          <stop stopColor="#5a9bff" />
          <stop offset="1" stopColor="#1c5fd6" />
        </linearGradient>
      </defs>
      <polygon points="17,3 23.5,3 38,36 31.5,36" fill="url(#amplex-logo-g)" />
      <polygon points="2,36 17,3 23.5,3 9,36" fill="#ffffff" />
      <polygon points="14.3,24 26.2,24 28,28 12.5,28" fill="#38c6ff" />
      <circle cx="33.5" cy="7.5" r="2.2" fill="#2878ff" />
    </svg>
  );
}

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <span className="flex items-center gap-2.5">
      <LogoMark />
      <span className="flex flex-col leading-none">
        <span className="text-lg font-extrabold tracking-[0.14em] text-white">AMPLEX</span>
        {!compact && (
          <span className="mt-1 text-[0.58rem] font-semibold tracking-[0.3em] text-electric-light">
            TECH SOLUTIONS
          </span>
        )}
      </span>
    </span>
  );
}
