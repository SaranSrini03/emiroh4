import React from "react";

const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sept","Oct","Nov","Dec"];
const values = [23, 18, 23, 15, 23, 28, 23, 16, 23, 18, 23, 30];

export function EngRate() {
  const max = 30;
  const h = (v: number) => `${(v / max) * 180}px`;
  return (
    <div className="w-full">
      <div className="flex items-center justify-end mb-2">
        <select className="rounded-md border border-neutral-200 px-2 py-1 text-sm text-neutral-600">
          <option>Fashion</option>
        </select>
      </div>
      <div className="relative">
        <div className="absolute left-0 right-0 bottom-8 border-b border-neutral-300" />
        <div className="flex items-end gap-4" style={{ height: 200 }}>
          {values.map((v, i) => (
            <div key={i} className="relative flex flex-col items-center">
              <div className="text-[10px] text-neutral-400 mb-1">{(v/10).toFixed(1)}%</div>
              <div className="w-6 bg-rose-300 rounded-t" style={{ height: h(v) }} />
            </div>
          ))}
        </div>
        <div className="mt-2 grid grid-cols-12 text-[11px] text-neutral-500">
          {months.map((m) => (
            <div key={m} className="text-center">{m}</div>
          ))}
        </div>
      </div>
    </div>
  );
}
