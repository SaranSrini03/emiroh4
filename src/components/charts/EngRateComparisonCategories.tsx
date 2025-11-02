import React from "react";
import { CATEGORY_DATA } from "@/data/globaldata";

type Status = "Good" | "Average";

const categoryData = CATEGORY_DATA;

export function EngRateComparisonCategories() {
  return (
    <div>
      {/* Column Headers */}
      <div className="mb-2 sm:mb-3 flex items-center justify-between border-b border-neutral-200 pb-2">
        <span className="text-[10px] sm:text-xs font-medium text-neutral-500">Categories</span>
        <span className="text-[10px] sm:text-xs font-medium text-neutral-500">Influencer ER</span>
      </div>

      {/* List Items */}
      <div className="space-y-2 sm:space-y-3">
        {categoryData.map((item, index) => (
          <div key={index} className="flex items-center justify-between gap-2">
            <span className="text-xs sm:text-sm text-neutral-800 truncate">{item.category}</span>
            <div className="flex items-center gap-1.5 sm:gap-2 flex-shrink-0">
              <div
                className={`h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full ${
                  item.status === "Good" ? "bg-green-500" : "bg-red-500"
                }`}
              />
              <span className="text-xs sm:text-sm text-neutral-800">{item.status}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

