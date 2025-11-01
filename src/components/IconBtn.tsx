export function IconBtn({ label }: { label: string }) {
  return (
    <button className="rounded-lg bg-neutral-100 px-3 py-2 text-sm hover:bg-neutral-200" aria-label={label}>
      {label}
    </button>
  );
}


