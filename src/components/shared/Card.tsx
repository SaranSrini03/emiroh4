import type { ReactNode } from "react";

export function Card({ title, children, className }: { title: string; children: ReactNode; className?: string }) {
  return (
    <div className={"rounded-xl bg-white p-3 sm:p-4 shadow-sm ring-1 ring-black/5 w-full" + (className ? " " + className : "")}>
      <div className="mb-2 text-xs sm:text-sm font-semibold text-neutral-700 break-words">{title}</div>
      {children}
    </div>
  );
}


