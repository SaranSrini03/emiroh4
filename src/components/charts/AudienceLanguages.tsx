import React from "react";

const languageData = [
  { name: "English", percentage: 44.5 },
  { name: "Hindi", percentage: 7.5 },
  { name: "Telugu", percentage: 45.5 },
  { name: "Tamil", percentage: 54.5 },
  { name: "Kannada", percentage: 9.5 },
  { name: "Malayalam", percentage: 7.5 },
];

export function AudienceLanguages() {
  return (
    <div className="space-y-3">
      {languageData.map((lang, index) => (
        <div key={index} className="flex items-center gap-3">
          <span className="text-sm text-neutral-800 min-w-[100px]">{lang.name}</span>
          <div className="flex-1 h-4 bg-neutral-200 rounded-full overflow-hidden">
            <div
              className="h-full rounded-full"
              style={{
                width: `${lang.percentage}%`,
                backgroundColor: "#f87171",
              }}
            />
          </div>
          <span className="text-sm text-neutral-800 min-w-[60px] text-right">
            {lang.percentage}%
          </span>
        </div>
      ))}
    </div>
  );
}

