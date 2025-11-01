export function ComparisonList() {
  const rows = [
    { k: "Skincare", score: "Good" },
    { k: "Beauty Products", score: "Average" },
    { k: "Fashion", score: "Great" },
    { k: "Fitness", score: "Average" },
  ];
  return (
    <div className="divide-y divide-neutral-100">
      {rows.map((r) => (
        <div key={r.k} className="flex items-center justify-between py-2 text-sm">
          <span className="text-neutral-600">{r.k}</span>
          <span className="rounded-full bg-neutral-100 px-2 py-1 text-xs">{r.score}</span>
        </div>
      ))}
    </div>
  );
}


