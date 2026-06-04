// FILE: app/components/RoomOfficeCard.tsx

"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

// ─── Types ────────────────────────────────────────────────────────────────────

export type RoomResult = {
  kind: "room";
  room_id: number;
  name: string;
  type: string;
  building_id: number;
  building_name: string;
  building_slug: string;
};

export type OfficeResult = {
  kind: "office";
  office_id: number;
  name: string;
  description?: string;
  building_id: number;
  building_name: string;
  building_slug: string;
};

export type RoomOrOffice = RoomResult | OfficeResult;

type Props = {
  item: RoomOrOffice | null;
  onClose: () => void;
};

// ─── Icons ────────────────────────────────────────────────────────────────────

const IconBuilding = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="M3 9h18M9 21V9" />
  </svg>
);

const IconType = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 6h16M4 10h16M4 14h10" />
  </svg>
);

const IconDescription = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="8" y1="13" x2="16" y2="13" />
    <line x1="8" y1="17" x2="12" y2="17" />
  </svg>
);

const IconArrow = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

// ─── Field ────────────────────────────────────────────────────────────────────

function Field({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
      <span style={{ marginTop: 2, color: "#61063b", flexShrink: 0 }}>
        {icon}
      </span>
      <div>
        <p style={{
          margin: 0,
          fontSize: "16px",
          fontWeight: 600,
          letterSpacing: "0.07em",
          textTransform: "uppercase",
          color: "#61063b",
          marginBottom: 4,
        }}>
          {label}
        </p>
        <p style={{
          paddingTop: "5px",
          margin: 0,
          fontSize: 13.5,
          color: "black",
          lineHeight: 1.5,
        }}>
          {value}
        </p>
      </div>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function RoomOfficeCard({ item, onClose }: Props) {
  const isOpen = !!item;
  const router = useRouter();

  // Close on Escape
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [onClose]);

  const handleVisit = () => {
    if (!item) return;
    router.push(`/building-view/${item.building_slug}`);
  };

  const isRoom = item?.kind === "room";
  const avatarGradient = isRoom
    ? "linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)"
    : "linear-gradient(135deg, #ede9fe 0%, #ddd6fe 100%)";
  const avatarColor = isRoom ? "#1e40af" : "#5b21b6";
  const avatarLetter = isRoom ? "R" : "O";
  const badgeLabel = isRoom ? "Room" : "Office";

  return (
    <>
      <style>{`
        @keyframes roc-slide-in {
          from { transform: translateX(100%); }
          to   { transform: translateX(0); }
        }
        .roc-sidebar-open {
          animation: roc-slide-in 0.25s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
        .roc-close-btn:hover {
          background: rgba(255,255,255,0.2) !important;
        }
        .roc-visit-btn:hover {
          background: #7a0849 !important;
          transform: translateY(-1px);
          box-shadow: 0 4px 14px rgba(97,6,59,0.35) !important;
        }
      `}</style>

      {/* Backdrop */}
      <div
        onClick={onClose}
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 998,
          background: "rgba(0,0,0,0.2)",
          opacity: isOpen ? 1 : 0,
          pointerEvents: isOpen ? "auto" : "none",
          transition: "opacity 0.25s",
        }}
      />

      {/* Sidebar */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label={item ? `${item.kind} details: ${item.name}` : undefined}
        className={isOpen ? "roc-sidebar-open" : ""}
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          width: 320,
          height: "100vh",
          background: "#fff",
          boxShadow: "-6px 0 32px rgba(0,0,0,0.18)",
          zIndex: 999,
          display: "flex",
          flexDirection: "column",
          fontFamily: "'DM Sans', 'Geist', ui-sans-serif, system-ui, sans-serif",
          transform: isOpen ? "translateX(0)" : "translateX(100%)",
          transition: isOpen ? "none" : "transform 0.25s cubic-bezier(0.4,0,0.2,1)",
          pointerEvents: isOpen ? "auto" : "none",
          overflowY: "auto",
        }}
      >
        {item && (
          <>
            {/* ── Header ── */}
            <div style={{
              background: "#61063b",
              padding: "40px 24px 28px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 10,
              position: "relative",
              flexShrink: 0,
            }}>
              {/* Close button */}
              <button
                onClick={onClose}
                aria-label="Close sidebar"
                className="roc-close-btn"
                style={{
                  position: "absolute",
                  top: 14,
                  right: 14,
                  border: "none",
                  background: "rgba(255,255,255,0.12)",
                  cursor: "pointer",
                  color: "#fff",
                  borderRadius: 10,
                  width: 32,
                  height: 32,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 20,
                  lineHeight: 1,
                  transition: "background 0.15s",
                }}
              >
                ×
              </button>

              {/* Avatar */}
              <div style={{
                width: 76,
                height: 76,
                borderRadius: "50%",
                background: avatarGradient,
                color: avatarColor,
                fontWeight: 700,
                fontSize: 28,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "3px solid rgba(255,255,255,0.3)",
                boxShadow: "0 4px 20px rgba(0,0,0,0.25)",
              }}>
                {avatarLetter}
              </div>

              {/* Name */}
              <p style={{
                margin: 0,
                fontWeight: 700,
                fontSize: 20,
                color: "#fff",
                textAlign: "center",
                lineHeight: 1.3,
              }}>
                {item.name}
              </p>

              {/* Building subtitle */}
              <p style={{
                margin: 0,
                fontSize: "14px",
                color: "rgba(255,255,255,0.72)",
                textAlign: "center",
                lineHeight: 1.5,
              }}>
                {item.building_name}
              </p>

              {/* Badge */}
              <span style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                background: "rgba(255,255,255,0.15)",
                color: "#fff",
                borderRadius: 20,
                fontSize: 11.5,
                fontWeight: 600,
                padding: "5px 14px",
                border: "1px solid rgba(255,255,255,0.25)",
                marginTop: 4,
                textTransform: "uppercase",
                letterSpacing: "0.06em",
              }}>
                {badgeLabel}
              </span>
            </div>

            {/* ── Section Label ── */}
            <div style={{ padding: "20px 24px 0" }}>
              <p style={{
                margin: 0,
                fontSize: "14px",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#61063b",
              }}>
                Details
              </p>
            </div>

            {/* ── Fields ── */}
            <div style={{
              padding: "25px 24px",
              display: "flex",
              flexDirection: "column",
              gap: "25px",
              flex: 1,
              background: "#fcfcfd",
            }}>
              <Field icon={<IconBuilding />} label="Building" value={item.building_name} />

              {item.kind === "room" && (
                <Field icon={<IconType />} label="Type" value={item.type} />
              )}

              {item.kind === "office" && item.description && (
                <Field icon={<IconDescription />} label="Description" value={item.description} />
              )}
            </div>

            {/* ── Visit Button ── */}
            <div style={{
              padding: "16px 24px 28px",
              background: "#fcfcfd",
              borderTop: "1px solid #f0f0f3",
              flexShrink: 0,
            }}>
              <button
                onClick={handleVisit}
                className="roc-visit-btn"
                style={{
                  width: "100%",
                  padding: "12px 0",
                  background: "#61063b",
                  color: "#fff",
                  border: "none",
                  borderRadius: 10,
                  fontSize: 14,
                  fontWeight: 700,
                  letterSpacing: "0.05em",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                  transition: "background 0.15s, transform 0.15s, box-shadow 0.15s",
                  boxShadow: "0 2px 8px rgba(97,6,59,0.2)",
                  fontFamily: "inherit",
                }}
              >
                Visit Building
                <IconArrow />
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
}