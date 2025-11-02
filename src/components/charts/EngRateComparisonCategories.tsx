import React from "react";

type Status = "Good" | "Average";

const categoryData: { category: string; status: Status }[] = [
  { category: "Apparel", status: "Good" },
  { category: "Summer outfit", status: "Average" },
  { category: "Beauty Products", status: "Good" },
  { category: "Men wear", status: "Average" },
  { category: "Shoes", status: "Good" },
  { category: "Clothes", status: "Average" },
  { category: "Ootd", status: "Average" },
  { category: "Online shopping", status: "Good" },
];

export function EngRateComparisonCategories() {
  return (
    <div>
      {/* Column Headers */}
      <div className="mb-3 flex items-center justify-between border-b border-neutral-200 pb-2">
        <span className="text-xs font-medium text-neutral-500">Categories</span>
        <span className="text-xs font-medium text-neutral-500">Influencer ER</span>
      </div>

      {/* List Items */}
      <div className="space-y-3">
        {categoryData.map((item, index) => (
          <div key={index} className="flex items-center justify-between">
            <span className="text-sm text-neutral-800">{item.category}</span>
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

