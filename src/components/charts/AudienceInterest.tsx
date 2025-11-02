import React from "react";

const interestData = [
  { name: "Apparel", percentage: 57.5 },
  { name: "Summer outfit", percentage: 57.5 },
  { name: "Beauty Products", percentage: 57.5 },
  { name: "Men wear", percentage: 57.5 },
  { name: "Shoes", percentage: 57.5 },
  { name: "Street style", percentage: 57.5 },
];

export function AudienceInterest() {
  return (
    <div className="space-y-3">
      {interestData.map((item, index) => (
        <div key={index} className="flex items-center gap-3">
          <span className="text-sm text-neutral-800 min-w-[120px]">{item.name}</span>
          <div className="flex-1 h-4 bg-neutral-200 rounded-full overflow-hidden">
            <div
              className="h-full rounded-full"
              style={{
                width: `${item.percentage}%`,
                backgroundColor: "#f87171",
              }}
            />
          </div>
          <span className="text-sm text-neutral-800 min-w-[60px] text-right">
            {item.percentage}%
          </span>
        </div>
      ))}
    </div>
  );
}

