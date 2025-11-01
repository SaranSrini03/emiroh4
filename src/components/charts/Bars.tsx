export function Bars() {
  return (
    <div className="flex items-end gap-3">
      {[40, 65, 55, 70, 45].map((h, i) => (
        <div key={i} className="w-8 rounded-t bg-rose-400" style={{ height: `${h}px` }} />
      ))}
    </div>
  );
}


