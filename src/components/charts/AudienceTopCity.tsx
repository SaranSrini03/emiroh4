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
    <div className="space-y-2 sm:space-y-3">
      {cityData.map((city, index) => (
        <div key={index} className="flex flex-col items-start gap-1">
          <div className="flex items-center justify-between w-full gap-2">
            <span className="text-xs sm:text-sm text-neutral-800 font-medium truncate">{city.name}</span>
            <span className="text-xs sm:text-sm text-neutral-800 flex-shrink-0">{city.percentage}%</span>
          </div>
          <div className="w-full h-1.5 sm:h-2 rounded-lg bg-neutral-200">
            <div
              className="h-full bg-[#f87171] rounded-lg"
              style={{ width: `${city.percentage}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
