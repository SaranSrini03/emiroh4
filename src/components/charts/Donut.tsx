export function Donut({ colors = "rose" }: { colors?: "rose" | "violet" }) {
  const c = colors === "rose" ? "#fb7185" : "#8b5cf6";
  return (
    <svg viewBox="0 0 42 42" className="mx-auto h-36 w-36">
      <circle cx="21" cy="21" r="15.915" fill="none" stroke="#eee" strokeWidth="6" />
      <circle cx="21" cy="21" r="15.915" fill="none" stroke={c} strokeWidth="6" strokeDasharray="60 40" strokeLinecap="round" transform="rotate(-90 21 21)" />
      <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" className="fill-neutral-700 text-sm font-semibold">
        60%
      </text>
    </svg>
  );
}


