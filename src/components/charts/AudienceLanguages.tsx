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
      {languageData.map((language, index) => (
        <div key={index} className="flex flex-col items-start gap-1">
          <div className="flex items-center justify-between w-full">
            <span className="text-sm text-neutral-800 font-medium pr-3">{language.name}</span>
            <span className="text-sm text-neutral-800">{language.percentage}%</span>
          </div>
          <div className="w-full h-2 rounded-lg bg-neutral-200">
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
