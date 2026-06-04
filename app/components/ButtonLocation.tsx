"use client";

import { LocateFixed } from "lucide-react";

type Props = {
  onClick: () => void;
};

export default function LocateButton({ onClick }: Props) {
  return (
    <button
      onClick={onClick}
      style={{
        background: "white",
        padding: "10px",
        borderRadius: "10px",
        border: "1px solid #ddd",
        cursor: "pointer",
        boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
      }}
    >
      <LocateFixed size={25} color="#61063b" />
    </button>
  );
}