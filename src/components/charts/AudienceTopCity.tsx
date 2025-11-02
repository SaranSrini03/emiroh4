import React from "react";

const cityData = [
  { name: "Mumbai", percentage: 57.5 },
  { name: "Bangalore", percentage: 57.5 },
  { name: "Chennai", percentage: 57.5 },
  { name: "Pune", percentage: 57.5 },
  { name: "Delhi", percentage: 57.5 },
  { name: "Mumbai", percentage: 57.5 },
];

export function AudienceTopCity() {
  return (
    <div className="space-y-3">
      {cityData.map((city, index) => (
        <div key={index} className="flex items-center gap-3">
          <span className="text-sm text-neutral-800 min-w-[100px]">{city.name}</span>
          <div className="flex-1 h-4 bg-neutral-200 rounded-full overflow-hidden">
            <div
              className="h-full rounded-full"
              style={{
                width: `${city.percentage}%`,
                backgroundColor: "#f87171",
              }}
            />
          </div>
          <span className="text-sm text-neutral-800 min-w-[60px] text-right">
            {city.percentage}%
          </span>
        </div>
      ))}
    </div>
  );
}

