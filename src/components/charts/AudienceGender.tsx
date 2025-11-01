import React from "react";
import { Donut } from "./Donut";

export function AudienceGender() {
  return (
    <div className="flex items-center justify-between">
      <Donut
        data={[
          { label: "Men", value: 57, color: "#fb7185" },
          { label: "Women", value: 43.5, color: "#8b5cf6" },
        ]}
        centerValue="57.5%"
        centerSub="Men"
      />
    </div>
  );
}
