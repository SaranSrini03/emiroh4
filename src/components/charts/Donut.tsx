import React from "react";

type Slice = {
  label: string;
  value: number;
  color?: string;
};

type DonutProps = {
  colors?: "rose" | "violet"; // optional theme
  data?: Slice[];
  centerValue?: string; // e.g., "189789"
  centerSub?: string; // e.g., "Views"
};

const defaultData: Slice[] = [
  { label: "Views", value: 183000, color: "#f87171" }, // coral/red
  { label: "Likes", value: 280000, color: "#f0a5c8" }, // light pink/lavender
  { label: "Comments", value: 888, color: "#8b5cf6" } // dark magenta/purple
];

const formatCompact = (n: number) => {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1).replace(/\.0$/, "")}M`;
  if (n >= 1_000) return `${(n / 1_000).toFixed(0)}K`;
  return `${n}`;
};

// Helper function to create pie slice path
const createPieSlice = (cx: number, cy: number, radius: number, startAngle: number, endAngle: number): string => {
  const start = {
    x: cx + radius * Math.cos((startAngle * Math.PI) / 180),
    y: cy + radius * Math.sin((startAngle * Math.PI) / 180),
  };
  const end = {
    x: cx + radius * Math.cos((endAngle * Math.PI) / 180),
    y: cy + radius * Math.sin((endAngle * Math.PI) / 180),
  };

  const largeArcFlag = endAngle - startAngle > 180 ? 1 : 0;

  return [
    `M ${cx} ${cy}`,
    `L ${start.x} ${start.y}`,
    `A ${radius} ${radius} 0 ${largeArcFlag} 1 ${end.x} ${end.y}`,
    "Z",
  ].join(" ");
};

export const Donut: React.FC<DonutProps> = ({ colors = "rose", data, centerValue, centerSub }) => {
  const slices = (data && data.length ? data : defaultData).map((s, i) => ({
    ...s,
    color: s.color ?? (i === 0 ? (colors === "rose" ? "#f87171" : "#8b5cf6") : i === 1 ? "#f0a5c8" : "#8b5cf6"),
  }));

  const total = slices.reduce((sum, s) => sum + s.value, 0);
  const cx = 21;
  const cy = 21;
  const radius = 21; // Full radius for pie chart (no gap)
  
  let currentAngle = -90; // Start at top (-90 degrees)

  return (
    <div className="flex items-start justify-between gap-6">
      {/* Pie Chart */}
      <div className="flex flex-col items-center">
        <svg viewBox="0 0 42 42" className="mx-auto h-36 w-36">
          {/* Pie slices */}
          {slices.map((s, idx) => {
            const percentage = total === 0 ? 0 : (s.value / total) * 100;
            const sliceAngle = (percentage / 100) * 360;
            const startAngle = currentAngle;
            const endAngle = currentAngle + sliceAngle;

            const pathData = createPieSlice(cx, cy, radius, startAngle, endAngle);

            currentAngle = endAngle;

            return (
              <path
                key={idx}
                d={pathData}
                fill={s.color!}
                stroke="#fff"
                strokeWidth={0.5}
              />
            );
          })}
        </svg>
        {/* Center value and label below the pie */}
        {centerValue && (
          <div className="mt-2 text-sm text-neutral-500">
            {centerValue} {centerSub && <span>{centerSub}</span>}
          </div>
        )}
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
};
