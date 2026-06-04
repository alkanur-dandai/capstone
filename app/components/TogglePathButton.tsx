interface Props {
  active: boolean;
  onClick: () => void;
}

export default function TogglePathButton({ active, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      style={{
        display: "flex",
        alignItems: "center",
        gap: 6,
        padding: "8px 14px",
        borderRadius: 8,
        border: active ? "2px solid #378ADD" : "1.5px solid rgba(0,0,0,0.2)",
        background: active ? "#378ADD" : "#fff",
        color: active ? "#fff" : "#333",
        fontSize: 13,
        fontWeight: 500,
        cursor: "pointer",
        boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
        transition: "all 0.2s",
      }}
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 12h18M3 6h18M3 18h18" />
      </svg>
      {active ? "Hide paths" : "Show paths"}
    </button>
  );
}