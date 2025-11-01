import { Video, Clapperboard, FileText } from "lucide-react";

export const INSIGHT_ICONS = {
  Video: <Video size={24} className="mx-auto" />,
  Reels: <Clapperboard size={24} className="mx-auto" />,
  Posts: <FileText size={24} className="mx-auto" />,
}

export function Insight({ label, value, icon = 'Posts', logo }: { label: string; value: string; icon?: keyof typeof INSIGHT_ICONS; logo?: React.ReactNode }) {
  return (
    <div className="rounded-xl bg-white p-5 w-auto shadow-sm ring-1 ring-black/5">
      <div className="flex items-center">
        {logo && <div className="flex items-center justify-center w-12 h-12 bg-rose-500 rounded-lg">{logo}</div>}
        <div className="flex flex-col items-start ml-5">
          {INSIGHT_ICONS[icon]}
          <div className="mt-3 text-lg font-semibold">{value}</div>
          <div className="text-xs text-neutral-500">{label}</div>
        </div>
      </div>
    </div>
  );
}