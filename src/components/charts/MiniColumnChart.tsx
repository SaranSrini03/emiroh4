export function MiniColumnChart() {
  return (
    <div className="flex items-end gap-2">
      {[20, 32, 28, 40, 22, 35, 18, 30, 24, 26, 20, 34].map((h, i) => (
        <div key={i} className="h-24 w-3 rounded bg-rose-400" style={{ height: `${h * 0.6}px` }} />
      ))}
    </div>
  );
}


