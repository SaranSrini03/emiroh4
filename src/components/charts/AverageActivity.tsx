import React from "react";
import { Donut } from "./Donut";

export function AverageActivity() {
  return (
    <Donut
      data={[
        { label: "Views", value: 183000, color: "#f87171" },
        { label: "Likes", value: 280000, color: "#f0a5c8" },
        { label: "Comments", value: 888, color: "#8b5cf6" },
      ]}
      centerValue="189789"
      centerSub="Views"
    />
  );
}
