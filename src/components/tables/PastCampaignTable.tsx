import React from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";

export type PastCampaignRow = {
  brand: string;
  posts: number | string;
  likes: number | string;
  com: number | string;
  er: string;
  st: string;
};

export function PastCampaignTable({ rows }: { rows: ReadonlyArray<PastCampaignRow> }) {
  return (
    <TableContainer component={Paper} style={{ borderColor: "#eef0f3" }}>
      <Table style={{ borderColor: "#eef0f3" }}>
        <TableHead>
          <TableRow>
            <TableCell style={{ borderColor: "#eef0f3", backgroundColor: "#f9fafb" }}>Brand</TableCell>
            <TableCell style={{ borderColor: "#eef0f3", backgroundColor: "#f9fafb" }}>Total Posts</TableCell>
            <TableCell style={{ borderColor: "#eef0f3", backgroundColor: "#f9fafb" }}>Likes</TableCell>
            <TableCell style={{ borderColor: "#eef0f3", backgroundColor: "#f9fafb" }}>Comments</TableCell>
            <TableCell style={{ borderColor: "#eef0f3", backgroundColor: "#f9fafb" }}>Eng. rate</TableCell>
            <TableCell style={{ borderColor: "#eef0f3", backgroundColor: "#f9fafb" }}>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((r) => (
            <TableRow key={r.brand} style={{ borderColor: "#eef0f3" }}>
              <TableCell style={{ borderColor: "#eef0f3" }}>{r.brand}</TableCell>
              <TableCell style={{ borderColor: "#eef0f3" }}>{r.posts}</TableCell>
              <TableCell style={{ borderColor: "#eef0f3" }}>{r.likes}</TableCell>
              <TableCell style={{ borderColor: "#eef0f3" }}>{r.com}</TableCell>
              <TableCell style={{ borderColor: "#eef0f3" }}>{r.er}</TableCell>
              <TableCell style={{ borderColor: "#eef0f3" }}>
                <span
                  style={{
                    backgroundColor: "rgba(0, 128, 0, 0.2)",
                    borderRadius: "16px",
                    padding: "4px 8px",
                    color: "green",
                    fontSize: "12px",
                    fontWeight: "bold",
                    borderColor: "#eef0f3",
                  }}
                >
                  {r.st}
                </span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}