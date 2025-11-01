import { MiniLineChart } from "./charts/MiniLineChart";
import { FaInstagram } from "react-icons/fa";

export function PlatformCard({ name, colorIdx = 0 }: { name?: string; colorIdx?: number }) {
  return (
    <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-black/5">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div className="flex items-start gap-3">
          {/* Instagram badge */}
          <div className="h-8 w-8 rounded-lg flex items-center justify-center shadow-sm"
               style={{
                 background:
                   "radial-gradient(30% 30% at 30% 30%, #FEDA77 0%, #FEDA77 20%, transparent 21%), linear-gradient(135deg, #405DE6 0%, #5851DB 25%, #833AB4 50%, #C13584 75%, #E1306C 90%, #FD1D1D 100%)",
                 color: "white"
               }}>
            <FaInstagram className="h-4 w-4" />
          </div>
          <div className="leading-tight">
            <div className="flex items-baseline gap-2">
              <div className="text-2xl font-semibold">145K</div>
              <div className="text-xs text-neutral-500">Followers</div>
            </div>
          </div>
        </div>
        <div className="text-xs font-medium text-emerald-600">+ 17.36%</div>
      </div>

      {/* Chart */}
      <div className="mt-4 h-24 w-full">
        <MiniLineChart compact className="h-24 w-full overflow-visible text-emerald-500" />
      </div>

      {/* Bottom rows */}
      <div className="mt-3 divide-y divide-neutral-200 rounded-lg border border-neutral-200">
        <div className="flex items-center justify-between px-3 py-3 text-sm">
          <span className="text-neutral-600">Growth Rate</span>
          <span className="text-neutral-500">Top 5%</span>
        </div>
        <div className="flex items-center justify-between px-3 py-3 text-sm">
          <span className="text-neutral-600">Eng. Rate</span>
          <span className="text-neutral-800">8.8%</span>
        </div>
      </div>
    </div>
  );
}


