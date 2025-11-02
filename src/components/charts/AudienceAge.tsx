import React from "react";

const ageGroups = ["18-24", "24-30", "31-35", "36-40", "40-45", "45+"];

const data = {
  Male: [2.3, 32.3, 2.3, 2.3, 25, 2.3],
  Female: [13, 4.2, 29, 14, 15, 3],
};

const chartHeight = 200;
const maxPercentage = 35;

export function AudienceAge() {
  const h = (pct: number) => Math.round((pct / maxPercentage) * chartHeight);

  return (
    <div>
      {/* Legend */}
      <div className="mb-4 flex justify-end gap-4">
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-red-500" />
          <span className="text-xs text-neutral-600">Male 70%</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-purple-500" />
          <span className="text-xs text-neutral-600">Female 60%</span>
        </div>
      </div>

      <div className="flex">
        {/* Y Axis */}
        <div className="mr-3 flex flex-col justify-between text-neutral-500 text-xs" style={{ height: chartHeight + 32 }}>
          {[35, 30, 25, 20, 15, 10, 5, 0].map((tick) => (
            <div key={tick} className="flex items-center gap-1">
              <span className="tabular-nums">{tick}%</span>
            </div>
          ))}
        </div>

        {/* Chart Area */}
        <div className="flex-1">
          <div className="relative bg-neutral-100 rounded">
            {/* Grid lines */}
            <div className="absolute inset-0" style={{ height: chartHeight + 32 }}>
              {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
                <div
                  key={i}
                  className="absolute left-0 right-0 border-t border-neutral-300"
                  style={{ top: `${(i / 7) * 100}%` }}
                />
              ))}
            </div>

            {/* Baseline */}
            <div className="absolute left-0 right-0 bottom-8 border-b border-neutral-300" />

            {/* Bars */}
            <div className="flex items-end justify-around px-2 pb-8" style={{ height: chartHeight }}>
              {ageGroups.map((age, index) => (
                <div key={age} className="flex items-end gap-1">
                  {/* Male bar (red) */}
                  <div className="relative flex flex-col items-center">
                    {data.Male[index] > 2 && (
                      <span className="absolute -top-5 text-[10px] text-neutral-600 whitespace-nowrap">
                        {data.Male[index]}%
                      </span>
                    )}
                    <div
                      className="w-6 rounded-t"
                      style={{
                        height: Math.max(h(data.Male[index]), 2),
                        backgroundColor: "#ef4444",
                      }}
                    />
                  </div>

                  {/* Female bar (purple) */}
                  <div className="relative flex flex-col items-center">
                    {data.Female[index] > 2 && (
                      <span className="absolute -top-5 text-[10px] text-neutral-600 whitespace-nowrap">
                        {data.Female[index]}%
                      </span>
                    )}
                    <div
                      className="w-6 rounded-t"
                      style={{
                        height: Math.max(h(data.Female[index]), 2),
                        backgroundColor: "#a855f7",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* X-axis labels */}
            <div className="flex justify-around px-2 pt-2 text-xs text-neutral-600">
              {ageGroups.map((age) => (
                <div key={age} className="w-[50px] text-center">
                  {age}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

