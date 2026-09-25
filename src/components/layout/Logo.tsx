/**
 * Isotipo AMPLEX: una "A" de trazo grueso con base en chevrón y una pista de circuito
 * que la atraviesa y termina en un nodo fuera de la letra.
 */
export function LogoMark({ className = "h-10 w-12" }: { className?: string }) {
  return (
    <svg viewBox="0 0 113 92" className={className} aria-hidden fill="none">
      {/* Letra A */}
      <polygon
        points="7,86 43,8 95,86 82,86 55,64 26,86"
        stroke="currentColor"
        strokeWidth="9"
        strokeLinejoin="miter"
        strokeMiterlimit="10"
      />
      {/* Pista de circuito */}
      <path
        d="M36 60 H46 C53 60 54 51 61 51 H101"
        stroke="#2878ff"
        strokeWidth="4.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="31" cy="60" r="5" stroke="#38c6ff" strokeWidth="3.5" />
      <circle cx="106" cy="51" r="5" stroke="#38c6ff" strokeWidth="3.5" />
    </svg>
  );
}

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <span className="flex items-center gap-2.5 text-white">
      <LogoMark />
      <span className="flex flex-col leading-none">
        <span className="font-logo text-[1.6rem] font-extrabold tracking-[0.02em]">AMPLEX</span>
        {!compact && (
          <span className="font-logo mt-1 text-[0.5rem] font-semibold tracking-[0.06em] whitespace-nowrap text-electric-light">
            FUTURE-READY SOLUTIONS
          </span>
        )}
      </span>
    </span>
  );
}
