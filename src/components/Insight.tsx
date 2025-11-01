export function Insight({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl bg-white p-5 w-auto shadow-sm ring-1 ring-black/5">
      <div className="text-xs text-neutral-500">{label}</div>
      <div className="mt-1 text-lg font-semibold">{value}</div>
    </div>
  );
}
  