import React from "react";

type Slice = {
  label: string;
  value: number;
  color?: string;
};

type DonutProps = {
  colors?: "rose" | "violet"; // kept for backward compat (used when no data provided)
  data?: Slice[];
  centerValue?: string; // e.g., "189789"
  centerSub?: string; // e.g., "Views"
};

const defaultData: Slice[] = [
  { label: "Views", value: 183_000, color: "#fb7185" }, // rose-400
  { label: "Likes", value: 280_000, color: "#fb8aa7" }, // pink-ish
  { label: "Comments", value: 888, color: "#8b5cf6" }, // violet-500
];

const circumference = 2 * Math.PI * 15.915; // for r=15.915

function formatCompact(n: number) {
  if (n >= 1_000_000) return (n / 1_000_000).toFixed(1).replace(/\.0$/, "") + "M";
  if (n >= 1_000) return (n / 1_000).toFixed(0) + "K";
  return String(n);
}

export function Donut({ colors = "rose", data, centerValue, centerSub }: DonutProps) {
  const slices = (data && data.length ? data : defaultData).map((s, i) => ({
    ...s,
    color: s.color ?? (i === 0 ? (colors === "rose" ? "#fb7185" : "#8b5cf6") : i === 1 ? "#fb8aa7" : "#8b5cf6"),
  }));

  const total = slices.reduce((sum, s) => sum + s.value, 0);
  let offsetPct = 0; // cumulative offset for successive arcs

  return (
    <div className="flex items-center justify-between gap-6">
      {/* Donut */}
      <div className="flex flex-col items-center">
        <svg viewBox="0 0 42 42" className="mx-auto h-36 w-36">
          {/* Track */}
          <circle cx="21" cy="21" r="15.915" fill="none" stroke="#eee" strokeWidth="6" />
          {/* Slices */}
          {slices.map((s, idx) => {
            const pct = total === 0 ? 0 : (s.value / total) * 100;
            const dash = (pct / 100) * circumference;
            const gap = circumference - dash;
            const dashOffset = (offsetPct / 100) * circumference;
            offsetPct += pct;
            return (
              <circle
                key={idx}
                cx="21"
                cy="21"
                r="15.915"
                fill="none"
                stroke={s.color!}
                strokeWidth="6"
                strokeDasharray={`${dash} ${gap}`}
                strokeDashoffset={-dashOffset}
                strokeLinecap="round"
                transform="rotate(-90 21 21)"
              />
            );
          })}
          {/* Center text (percent or provided value) */}
          <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" className="fill-neutral-700 text-sm font-semibold">
            {centerValue ?? formatCompact(total)}
          </text>
        </svg>
        {centerSub ? (
          <div className="mt-1 text-xs text-neutral-500">{centerSub}</div>
        ) : null}
      </div>

      {/* Legend */}
      <div className="space-y-3 text-sm">
        {slices.map((s, i) => (
          <div key={i} className="flex items-center gap-2">
            <span className="inline-block h-2 w-2 rounded-full" style={{ backgroundColor: s.color }} />
            <span className="font-semibold text-neutral-700">{formatCompact(s.value)}</span>
            <span className="text-neutral-400">{s.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}


