import React from "react";

export function TopContentLine({ className }: { className?: string }) {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
  // Example values in thousands (to mimic 0-100K ... 2-5M look)
  const reels = [100, 200, 150, 500, 300, 80];
  const posts = [160, 120, 180, 110, 90, 200];
  const videos = [200, 100, 220, 150, 130, 160];

  const maxY = 520; // a bit above the max to give headroom
  const h = 220;
  const w = 680;
  const padL = 56;
  const padR = 16;
  const padT = 18;
  const padB = 28;
  const innerW = w - padL - padR;
  const innerH = h - padT - padB;

  const yTicks = [0, 100, 200, 500];

  const scaleX = (i: number) => padL + (i * innerW) / (months.length - 1);
  const scaleY = (v: number) => padT + innerH - (v / maxY) * innerH;

  const linePath = (data: number[]) =>
    data
      .map((v, i) => `${i === 0 ? "M" : "L"}${scaleX(i)},${scaleY(v)}`)
      .join(" ");

  return (
    <div className={["w-3/4", className].filter(Boolean).join(" ")}>
      <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-[260px]">
        {/* Grid */}
        <g>
          {yTicks.map((t, i) => (
            <line
              key={t}
              x1={padL}
              x2={w - padR}
              y1={scaleY(t)}
              y2={scaleY(t)}
              stroke="#e5e7eb"
              strokeWidth={1}
            />
          ))}
          {months.map((_, i) => (
            <line
              key={i}
              x1={scaleX(i)}
              x2={scaleX(i)}
              y1={padT}
              y2={h - padB}
              stroke="#f1f5f9"
              strokeWidth={1}
            />
          ))}
        </g>

        {/* Axes labels */}
        <g fill="#6b7280" fontSize={11} textAnchor="end">
          {yTicks.map((t) => (
            <text key={t} x={padL - 8} y={scaleY(t) + 4}>
              {t === 0 ? "0-100K" : t === 100 ? "100-200K" : t === 200 ? "200-500K" : "1-2M"}
            </text>
          ))}
        </g>
        <g fill="#6b7280" fontSize={11} textAnchor="middle">
          {months.map((m, i) => (
            <text key={m} x={scaleX(i)} y={h - 6}>
              {m}
            </text>
          ))}
        </g>

        {/* Lines */}
        <g fill="none" strokeLinecap="round" strokeWidth={2.5}>
          <path d={linePath(reels)} stroke="#2563eb" />
          <path d={linePath(posts)} stroke="#7c3aed" />
          <path d={linePath(videos)} stroke="#ec4899" />
        </g>

        {/* Dots */}
        <g>
          {reels.map((v, i) => (
            <circle key={`r-${i}`} cx={scaleX(i)} cy={scaleY(v)} r={3} fill="#2563eb" />
          ))}
          {posts.map((v, i) => (
            <circle key={`p-${i}`} cx={scaleX(i)} cy={scaleY(v)} r={3} fill="#7c3aed" />
          ))}
          {videos.map((v, i) => (
            <circle key={`v-${i}`} cx={scaleX(i)} cy={scaleY(v)} r={3} fill="#ec4899" />
          ))}
        </g>
      </svg>

      {/* Legend */}
      <div className="mt-2 flex items-center gap-4 text-xs">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full" style={{ background: "#2563eb" }} />
          <span className="text-neutral-600">Reels</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full" style={{ background: "#7c3aed" }} />
          <span className="text-neutral-600">Posts</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full" style={{ background: "#ec4899" }} />
          <span className="text-neutral-600">videos</span>
        </div>
      </div>
    </div>
  );
}
