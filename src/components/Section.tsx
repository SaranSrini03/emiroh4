import type { ReactNode } from "react";

export function Section({ title, className = "", children }: { title: ReactNode; className?: string; children: ReactNode }) {
  return (
    <section className={className}>
      <div className="mb-2 sm:mb-3 text-xs sm:text-sm font-semibold text-neutral-700">{title}</div>
      {children}
    </section>
  );
}


