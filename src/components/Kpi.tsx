export function Kpi({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl bg-[#EFE5FF]/30 p-3 text-left ring-1 ring-black/5">
      <div className="text-[15px] text-neutral-500">{label}</div>
      <div className="mt-1 text-base font-semibold">{value}</div>
    </div>
  );
}


