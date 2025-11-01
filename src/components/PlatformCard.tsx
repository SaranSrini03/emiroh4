import { MiniLineChart } from "./charts/MiniLineChart";

export function PlatformCard({
  name,
  colorIdx = 0,
  followers,
  growthPct,
  growthRateRank,
  engagementRate,
  badgeSrc,
}: {
  name?: string;
  colorIdx?: number;
  followers?: string | number;
  growthPct?: string;
  growthRateRank?: string;
  engagementRate?: string;
  badgeSrc?: string;
}) {
  return (
    <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-black/5">
      {/* Header */}
      <div className="flex flex-col items-start">
        <div className="flex items-start gap-3">
          {/* Instagram badge */}
          <img src={badgeSrc ?? `/logos/instagram.png`} alt={name} className="h-15 w-15 object-contain" />
        </div>
        <div className="flex items-center gap-2 mt-1">
          <div className="flex items-center gap-10 justify-center">
            <div className="text-2xl font-semibold">{followers ?? "145K"}</div>
          <div className="text-xs text-neutral-500">Followers</div>
            <div className="text-xs font-medium text-emerald-600">{growthPct ?? "+ 17.36%"}</div>
          </div>
        </div>
      </div>

      {/* Chart */}
      <div className="mt-4 h-24 w-full" >
        <MiniLineChart compact className="h-24 w-full overflow-visible text-emerald-500" />
      </div>

      {/* Bottom rows */}
      <div className="mt-3 divide-y divide-neutral-200 rounded-lg border border-neutral-200">
        <div className="flex items-center justify-between px-3 py-3 text-sm">
          <span className="text-neutral-600">Growth Rate</span>
          <span className="text-neutral-500">{growthRateRank ?? "Top 5%"}</span>
        </div>
        <div className="flex items-center justify-between px-3 py-3 text-sm">
          <span className="text-neutral-600">Eng. Rate</span>
          <span className="text-neutral-800">{engagementRate ?? "8.8%"}</span>
        </div>
      </div>
    </div>
  );
}


