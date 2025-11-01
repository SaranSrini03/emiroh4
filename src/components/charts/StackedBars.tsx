export function StackedBars() {
  return (
    <div className="grid grid-cols-1 gap-2">
      {[
        { k: "Video", a: 70, b: 40 },
        { k: "Reels", a: 60, b: 35 },
        { k: "Posts", a: 50, b: 28 },
      ].map((row) => (
        <div key={row.k} className="">
          <div className="mb-1 text-xs text-neutral-500">{row.k}</div>
          <div className="flex h-4 w-full overflow-hidden rounded-full bg-neutral-100">
            <div className="bg-rose-500" style={{ width: `${row.a}%` }} />
            <div className="bg-rose-200" style={{ width: `${row.b}%` }} />
          </div>
        </div>
      ))}
    </div>
  );
}


