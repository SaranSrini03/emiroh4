import React from "react";
import { Donut } from "./Donut";

export function AverageActivity() {
  return (
    <div className="flex items-center justify-between">
      <Donut
        data={[
          { label: "Views", value: 183000, color: "#fb7185" },
          { label: "Likes", value: 280000, color: "#fb8aa7" },
          { label: "Comments", value: 888, color: "#8b5cf6" },
        ]}
        centerValue="189789"
        centerSub="Views"
      />
    </div>
  );
}
