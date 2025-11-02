import React from "react";

type Status = "Good" | "Average";

const countryData: { country: string; status: Status }[] = [
  { country: "India", status: "Good" },
  { country: "USA", status: "Average" },
  { country: "UK", status: "Good" },
  { country: "Canada", status: "Average" },
  { country: "Italy", status: "Good" },
  { country: "Germany", status: "Average" },
  { country: "France", status: "Average" },
  { country: "Saudi", status: "Good" },
];

export function EngRateComparisonCountries() {
  return (
    <div>
      {/* Column Headers */}
      <div className="mb-3 flex items-center justify-between border-b border-neutral-200 pb-2">
        <span className="text-xs font-medium text-neutral-500">Country</span>
        <span className="text-xs font-medium text-neutral-500">Influencer ER</span>
      </div>

      {/* List Items */}
      <div className="space-y-3">
        {countryData.map((item, index) => (
          <div key={index} className="flex items-center justify-between">
            <span className="text-sm text-neutral-800">{item.country}</span>
            <div className="flex items-center gap-2">
              <div
                className={`h-2 w-2 rounded-full ${
                  item.status === "Good" ? "bg-green-500" : "bg-red-500"
                }`}
              />
              <span className="text-sm text-neutral-800">{item.status}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

