// Value (rose) + remainder (light blue) to visually match the provided mock
export type StackedBarRow = { k: string; v: number; r: number };

export const defaultRows: StackedBarRow[] = [
  { k: "Video", v: 12, r: 38 },
  { k: "Stories", v: 60, r: 25 },
  { k: "Posts", v: 45, r: 30 },
  { k: "Reels", v: 75, r: 15 },
];

export const defaultAxis = ["1-2%", "2-3%", "3-4%", "4-5%"];

export function StackedBars({
  rows = defaultRows,
  axis = defaultAxis,
}: {
  rows?: StackedBarRow[];
  axis?: string[];
}) {
  return (
    <div className="w-full border border-[#e8f1ff] bg-[#fafcff] p-5">
      <div className="grid grid-cols-1 gap-3 ">
        {rows.map((row) => (
          <div key={row.k} className="flex items-center gap-3">
            <div className="text-xs text-neutral-500 w-24 shrink-0">{row.k}</div>
            <div className="flex-1 h-4 overflow-hidden rounded-md bg-neutral-100 h-8">
              <div
                className="bg-gradient-to-r from-[#ff5641] to-[#ff8070] h-full inline-block"
                style={{ width: `${row.v}%` }}
              />
              <div className="bg-blue-100 h-full inline-block" style={{ width: `${row.r}%` }} />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-3 flex items-center justify-between text-[10px] text-neutral-400">
        {axis.map((t) => (
          <span key={t} className="w-1/4 text-center">{t}</span>
        ))}
      </div>
      <div className="mt-3 flex items-center gap-2 text-xs text-neutral-600">
        <span className="h-2 w-2 rounded-full bg-rose-500" />
        <span>Eng. Rate</span>
      </div>
    </div>
  );
}

