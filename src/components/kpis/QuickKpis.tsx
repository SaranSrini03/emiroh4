import { Kpi } from "@/data/imports";

export default function QuickKpis() {
  return (
    <div className="mt-4 justify-center grid grid-cols-2 gap-3 sm:grid-cols-4 md:grid-cols-6">
      {[
        { k: "Avg. Likes", v: "20K" },
        { k: "Avg. Comments", v: "555" },
        { k: "Avg. Views", v: "11K" },
        { k: "Avg. ER", v: "2.28%" },
        { k: "Follower Rate", v: "2.26%" },
        { k: "Unfollow Rate", v: "2.28%" },
      ].map((x) => (
        <Kpi key={x.k} label={x.k} value={x.v} />
      ))}
    </div>
  );
}
