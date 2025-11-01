import React from "react";

type Category = "Positive" | "Neutral" | "Negative";

const categories: Category[] = ["Positive", "Neutral", "Negative"];

// Percent values to mimic the reference image
const data = {
  Reels: [50, 38, 37],
  Posts: [80, 78, 80],
};

const chartHeight = 220; // px for plotting area (bars)

export function Bars() {
  // Helper to convert percentage value to pixel height
  const h = (pct: number) => Math.round((pct / 100) * chartHeight);

  return (
    <div className="">


      <div className="flex">
        {/* Y Axis with % labels */}
        <div className="mr-3 flex flex-col justify-between text-gray-500 text-sm select-none" style={{ height: chartHeight + 32 }}>
          {/* add extra 32px to account for baseline area */}
          {[100, 80, 60, 40, 20, 10, 0].map((tick) => (
            <div key={tick} className="flex items-center gap-1">
              <span className="tabular-nums">{tick}%</span>
            </div>
          ))}
        </div>

        {/* Plot area */}
        <div className="flex-1">
          <div className="relative bg-white">
            {/* Grid/baseline */}
            <div className="absolute left-0 right-0 bottom-8 border-b border-gray-300" />

            {/* Bars row */}
            <div className="flex items-end justify-around px-6" style={{ height: chartHeight }}>
              {categories.map((cat, i) => (
                <div key={cat} className="flex items-end gap-8">
                  {/* Reels (coral) */}
                  <div className="relative flex flex-col items-center">
                    <div
                      className="w-8 rounded-t"
                      style={{ height: h(data.Reels[i]), backgroundColor: "#f87171" }}
                    />
                    {/* Label above bar */}
                    <span className="absolute -top-6 text-gray-400 text-sm">Reels</span>
                  </div>

                  {/* Posts (blue) */}
                  <div className="relative flex flex-col items-center">
                    <div
                      className="w-8 rounded-t"
                      style={{ height: h(data.Posts[i]), backgroundColor: "#60a5fa" }}
                    />
                    <span className="absolute -top-6 text-gray-400 text-sm">Posts</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Category labels */}
            <div className="flex justify-around px-6 text-gray-600 mt-2">
              {categories.map((c) => (
                <div key={c} className="w-[120px] text-center">
                  {c}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


