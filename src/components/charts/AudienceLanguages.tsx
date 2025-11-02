import { LANGUAGE_DATA } from "@/data/globaldata";

const languageData = LANGUAGE_DATA;

export function AudienceLanguages() {
  return (
    <div className="space-y-2 sm:space-y-3">
      {languageData.map((language, index) => (
        <div key={index} className="flex flex-col items-start gap-1">
          <div className="flex items-center justify-between w-full gap-2">
            <span className="text-xs sm:text-sm text-neutral-800 font-medium truncate">{language.name}</span>
            <span className="text-xs sm:text-sm text-neutral-800 flex-shrink-0">{language.percentage}%</span>
          </div>
          <div className="w-full h-1.5 sm:h-2 rounded-lg bg-neutral-200">
            <div
              className="h-full bg-[#f87171] rounded-lg"
              style={{ width: `${language.percentage}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
