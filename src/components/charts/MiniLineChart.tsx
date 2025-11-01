export function MiniLineChart({ compact = false, className }: { compact?: boolean; className?: string }) {
  return (
    <svg viewBox="0 0 200 80" className={className ?? "h-28 w-full overflow-visible text-rose-500"}>
      <defs>
        <linearGradient id="g1" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="rgb(244 63 94)" stopOpacity="0.25" />
          <stop offset="100%" stopColor="rgb(244 63 94)" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d="M5 60 L35 40 L65 55 L95 30 L125 45 L155 35 L195 50" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      {!compact && <polygon points="5,60 35,40 65,55 95,30 125,45 155,35 195,50 195,80 5,80" fill="url(#g1)" />}
      <g fill="currentColor">
        {[5, 35, 65, 95, 125, 155, 195].map((x, i) => (
          <circle key={i} cx={x} cy={[60, 40, 55, 30, 45, 35, 50][i]} r="2" />
        ))}
      </g>
    </svg>
  );
}


