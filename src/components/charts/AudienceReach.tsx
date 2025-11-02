import { REACH_DATA } from "@/data/globaldata";

const reachData = REACH_DATA;

const chartHeight = 180;
const maxPercentage = 40;
const barSpacing = 4; // Adjust this value to increase or decrease the spacing between bars

export function AudienceReach() {
  const h = (pct: number) => Math.round((pct / maxPercentage) * chartHeight);

  return (
    <div className="flex w-full overflow-x-auto">
      <div className="mr-2 sm:mr-3 flex flex-col justify-between text-neutral-500 text-[10px] sm:text-xs flex-shrink-0" style={{ height: chartHeight + 32 }}>
        {[40, 35, 30, 25, 20, 15, 10, 5, 0].map((tick) => (
          <div key={tick} className="flex items-center gap-1">
            <span className="tabular-nums">{tick}%</span>
          </div>
        ))}
      </div>

      <div className="flex-1 min-w-0">
        <div className="relative w-full min-w-[280px] bg-neutral-100 rounded">
          {/* Grid lines */}
          <div className="absolute inset-0" style={{ height: chartHeight + 32 }}>
            {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div
                key={i}
                className="absolute left-0 right-0 border-t border-neutral-300"
                style={{ top: `${(i / 8) * 100}%` }}
              />
            ))}
          </div>
          
          {/* Baseline */}
          <div className="absolute left-0 right-0 bottom-8 border-b border-neutral-300" />

          {/* Bars */}
          <div className="flex items-end justify-around px-1 sm:px-2 pb-8" style={{ height: chartHeight }}>
            {reachData.map((item, index) => (
              <div key={index} className="flex flex-col items-center z-10">
                <div
                  className="w-6 sm:w-8 rounded-t"
                  style={{
                    height: h(item.percentage),
                    backgroundColor: "#f87171",
                  }}
                />
              </div>
            ))}
          </div>

          {/* X-axis labels */}
          <div className="flex justify-around px-1 sm:px-2 pt-2 text-[10px] sm:text-xs text-neutral-600">
            {reachData.map((item, index) => (
              <div key={index} className="w-[45px] sm:w-[60px] text-center">
                {item.range}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
