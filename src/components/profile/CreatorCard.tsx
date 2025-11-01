// components/CreatorCard.tsx
import React from 'react';

interface KpiProps {
  label: string;
  value: string;
}

interface CreatorCardProps {
  name: string;
  categories: string[];
  location: string;
  gender: string;
  age: number;
  avatarUrl: string;
  kpis: Array<{ k: string; v: string }>;
  onInvite?: () => void;
  onCheckAvailability?: () => void;
}

const Kpi: React.FC<KpiProps> = ({ label, value }) => (
  <div className="flex flex-col items-center justify-center rounded-lg bg-neutral-50 p-3 text-center">
    <div className="text-sm font-medium text-neutral-900">{value}</div>
    <div className="text-xs text-neutral-500">{label}</div>
  </div>
);

const IconBtn: React.FC<{ label: string }> = ({ label }) => (
  <button className="flex h-9 w-9 items-center justify-center rounded-lg bg-neutral-100 text-neutral-600 hover:bg-neutral-200">
    <span className="sr-only">{label}</span>
    <span>•</span>
  </button>
);

const CreatorCard: React.FC<CreatorCardProps> = ({
  name,
  categories,
  location,
  gender,
  age,
  avatarUrl,
  kpis,
  onInvite,
  onCheckAvailability
}) => {
  return (
    <section className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-black/5">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-4">
          <img
            src={avatarUrl}
            alt={`${name} avatar`}
            className="h-14 w-14 rounded-full object-cover"
          />
          <div>
            <div className="flex items-center gap-2 text-sm text-neutral-500">
              <span className="font-medium text-neutral-900">{name}</span>
              <span>•</span>
              <span>{categories.join(', ')}</span>
              <span>•</span>
              <span>{location}</span>
            </div>
            <div className="mt-1 text-xs text-neutral-500">
              Gender: {gender} • Age: {age}
            </div>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <button 
            onClick={onInvite}
            className="rounded-lg bg-rose-500 px-3 py-2 text-sm font-medium text-white hover:bg-rose-600"
          >
            Invite to Campaign
          </button>
          <button 
            onClick={onCheckAvailability}
            className="rounded-lg bg-neutral-100 px-3 py-2 text-sm font-medium hover:bg-neutral-200"
          >
            Check Availability
          </button>
          <div className="hidden items-center gap-2 md:flex">
            <IconBtn label="Save" />
            <IconBtn label="Share" />
            <IconBtn label="More" />
          </div>
        </div>
      </div>
      
      {/* quick KPIs */}
      <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4 md:grid-cols-6">
        {kpis.map((x) => (
          <Kpi key={x.k} label={x.k} value={x.v} />
        ))}
      </div>
    </section>
  );
};

export default CreatorCard;