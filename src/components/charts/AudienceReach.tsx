import React from "react";

const reachData = [
  { range: "<500", percentage: 18 },
  { range: "500-1.5K", percentage: 30 },
  { range: "1.5-2.5K", percentage: 18 },
  { range: "2.5-3.5K", percentage: 23 },
  { range: "2.5-3.5K", percentage: 33 },
  { range: "3.5-4.5K", percentage: 27 },
];

const chartHeight = 180;
const maxPercentage = 40;

export function AudienceReach() {
  const h = (pct: number) => Math.round((pct / maxPercentage) * chartHeight);

  return (
    <div className="flex">
      <div className="mr-3 flex flex-col justify-between text-neutral-500 text-xs" style={{ height: chartHeight + 32 }}>
        {[40, 35, 30, 25, 20, 15, 10, 5, 0].map((tick) => (
          <div key={tick} className="flex items-center gap-1">
            <span className="tabular-nums">{tick}%</span>
          </div>
        ))}
      </div>

      <div className="flex-1">
        <div className="relative bg-neutral-100 rounded">
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
          <div className="flex items-end justify-around px-4 pb-8" style={{ height: chartHeight }}>
            {reachData.map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                <div
                  className="w-8 rounded-t"
                  style={{
                    height: h(item.percentage),
                    backgroundColor: "#f87171",
                  }}
                />
              </div>
            ))}
          </div>

          {/* X-axis labels */}
          <div className="flex justify-around px-4 pt-2 text-xs text-neutral-600">
            {reachData.map((item, index) => (
              <div key={index} className="w-[70px] text-center">
                {item.range}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

