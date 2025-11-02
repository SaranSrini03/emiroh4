import { INTEREST_DATA } from "@/data/globaldata";

const interestData = INTEREST_DATA;

export function AudienceInterest() {
  return (
    <div className="space-y-2 sm:space-y-3">
      {interestData.map((interest, index) => (
        <div key={index} className="flex flex-col items-start gap-1">
          <div className="flex items-center justify-between w-full gap-2">
            <span className="text-xs sm:text-sm text-neutral-800 font-medium truncate">{interest.name}</span>
            <span className="text-xs sm:text-sm text-neutral-800 flex-shrink-0">{interest.percentage}%</span>
          </div>
          <div className="w-full h-1.5 sm:h-2 rounded-lg bg-neutral-200">
            <div
              className="h-full bg-[#f87171] rounded-lg"
              style={{ width: `${interest.percentage}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
