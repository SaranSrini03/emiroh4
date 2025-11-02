import React from "react";

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const likeData = [125000, 110000, 95000, 80000, 70000, 60000, 50000, 35000, 25000, 15000, 10000, 5000];

const chartHeight = 200;
const chartWidth = 400;
const maxValue = 150000;
const padding = 8;

export function LikeChart() {
  const y = (value: number) => Math.round(chartHeight - padding - (value / maxValue) * (chartHeight - padding * 2));
  const x = (index: number) => Math.round(padding + (index / (months.length - 1)) * (chartWidth - padding * 2));

  const points = likeData.map((value, index) => ({
    x: x(index),
    y: y(value),
  }));

  const pathData = points.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`).join(" ");
  const areaPath = `${pathData} L ${points[points.length - 1].x} ${chartHeight - padding} L ${points[0].x} ${chartHeight - padding} Z`;

  return (
    <div className="flex w-full overflow-x-auto">
      {/* Y Axis */}
      <div className="mr-2 sm:mr-3 flex flex-col justify-between text-neutral-500 text-[10px] sm:text-xs flex-shrink-0" style={{ height: chartHeight + 32 }}>
        {[150, 125, 100, 75, 50, 25, 0].map((tick) => (
          <div key={tick} className="flex items-center gap-1">
            <span className="tabular-nums">{tick}K</span>
          </div>
        ))}
      </div>

      {/* Chart Area */}
      <div className="flex-1 relative min-w-[350px]">
        <div className="relative bg-neutral-100 rounded" style={{ height: chartHeight + 32 }}>
          {/* Grid lines */}
          <div className="absolute inset-0">
            {[0, 1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="absolute left-0 right-0 border-t border-neutral-300"
                style={{ top: `${(i / 6) * 100}%` }}
              />
            ))}
          </div>

          {/* Baseline */}
          <div className="absolute left-0 right-0 bottom-8 border-b border-neutral-300" />

          {/* SVG Chart */}
          <svg
            viewBox={`0 0 ${chartWidth} ${chartHeight}`}
            className="absolute inset-0 w-full h-full"
            style={{ height: chartHeight + 32 }}
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="likeGradient" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#60a5fa" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d={areaPath}
              fill="url(#likeGradient)"
              transform={`translate(0, ${padding})`}
            />
            <path
              d={pathData}
              fill="none"
              stroke="#60a5fa"
              strokeWidth="2"
              strokeLinecap="round"
              transform={`translate(0, ${padding})`}
            />
          </svg>
        </div>

        {/* X-axis labels */}
        <div className="flex justify-between px-1 sm:px-2 pt-2 text-[10px] sm:text-xs text-neutral-600 mt-2">
          {months.map((month) => (
            <div key={month} className="text-center">
              {month}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

