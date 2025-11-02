import { ComposableMap, Geographies, Geography } from "react-simple-maps";

export function WorldMapSkeleton() {
  const countries: { name: string; pct: number }[] = [
    { name: "India", pct: 45 },
    { name: "UK", pct: 80 },
    { name: "Australia", pct: 72 },
    { name: "United states", pct: 50 },
    { name: "Italy", pct: 60 },
  ];

  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-stretch w-full">
      {/* Map area */}
      <div className="flex-1 rounded-lg ">
        <div className="flex h-56 items-center justify-center text-neutral-400 md:h-64">
          <ComposableMap projectionConfig={{ scale: 120 }}>
          <Geographies geography="https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json">
            {({ geographies }: { geographies: any[] }) =>
              geographies.map((geo: any) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  style={{
                    default: { fill: "#d1d5db", outline: "none" },
                    hover: { fill: "#f87171", outline: "none" },
                    pressed: { fill: "#ef4444", outline: "none" },
                  }}
                />
              ))
            }
          </Geographies>
        </ComposableMap>
        </div>
      </div>

      {/* Right panel */}
      <div className="md:w-[360px] w-full">
        {/* Header with dropdown */}
        <div className="mb-3 flex items-center justify-end">
          <select className="rounded-md border border-neutral-200 px-2 py-1 text-sm text-neutral-700">
            <option>World</option>
          </select>
        </div>

        <div className="space-y-4">
          {countries.map((c) => (
            <div key={c.name} className="flex items-center gap-3">
              <div className="h-6 w-6 rounded-sm bg-neutral-200" />
              <div className="flex-1">
                <div className="mb-1 text-sm text-neutral-700">{c.name}</div>
                <div className="h-1.5 w-full rounded-full bg-neutral-200">
                  <div
                    className="h-1.5 rounded-full bg-rose-400"
                    style={{ width: `${c.pct}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer chevrons */}
        <div className="mt-4 flex justify-end gap-3 text-neutral-600">
          <button className="flex h-7 w-7 items-center justify-center rounded-md border border-neutral-200 hover:bg-neutral-50" aria-label="Prev">
            ‹
          </button>
          <button className="flex h-7 w-7 items-center justify-center rounded-md border border-neutral-200 hover:bg-neutral-50" aria-label="Next">
            ›
          </button>
        </div>
      </div>
    </div>
  );
}
