import type { ReactNode } from "react";

export function Section({ title, className = "", children }: { title: string; className?: string; children: ReactNode }) {
  return (
    <section className={className}>
      <div className="mb-3 text-sm font-semibold text-neutral-700">{title}</div>
      {children}
    </section>
  );
}


