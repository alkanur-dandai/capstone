

"use client";

import { useEffect } from "react";

type Person = {
  name: string;
  position: string;
  office_role?: string;
  is_head?: boolean;
  office?: string;
  department?: string;
  email?: string;
};

type Props = {
  person: Person | null;
  onClose: () => void;
};

function getInitials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((n) => n[0].toUpperCase())
    .join("");
}

const IconCrown = () => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M2 4l3 12h14l3-12-6 4-4-7-4 7-6-4z" />
  </svg>
);

const IconBuilding = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="M3 9h18M9 21V9" />
  </svg>
);

const IconDepartment = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M3 21V7l9-4 9 4v14" />
    <path d="M9 21v-6h6v6" />
  </svg>
);



function Field({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
      <span
        style={{
          marginTop: 2,
           color: "#61063b",
          flexShrink: 0,

        }}
      >
        {icon}
      </span>

      <div>
        <p
          style={{
            margin: 0,
            fontSize: "16px",
            fontWeight: 600,
            letterSpacing: "0.07em",
            textTransform: "uppercase",
           color: "#61063b",
            marginBottom: 4,
          }}
        >
          {label}
        </p>

        <p
          style={{
            paddingTop:"5px",
            margin: 0,
            fontSize: 13.5,
            color: "black",
            lineHeight: 1.5,
          }}
        >
          {value}
        </p>
      </div>
    </div>
  );
}

export default function FacultyCard({ person, onClose }: Props) {
  const isOpen = !!person;

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKey);

    return () => {
      document.removeEventListener("keydown", handleKey);
    };
  }, [onClose]);

  const hasRole = person?.is_head || person?.office_role;

  return (
    <>
      <style>{`
        @keyframes fc-slide-in {
          from {
            transform: translateX(100%);
          }

          to {
            transform: translateX(0);
          }
        }

        .fc-sidebar-open {
          animation: fc-slide-in 0.25s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        .fc-close-btn:hover {
          background: rgba(255,255,255,0.2) !important;
        }

        .fc-email-btn:hover {
          background: #61063b !important;
          color: #fff !important;
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
        aria-label={
          person ? `Faculty profile: ${person.name}` : undefined
        }
        className={isOpen ? "fc-sidebar-open" : ""}
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
          fontFamily:
            "'DM Sans', 'Geist', ui-sans-serif, system-ui, sans-serif",
          transform: isOpen
            ? "translateX(0)"
            : "translateX(100%)",
          transition: isOpen
            ? "none"
            : "transform 0.25s cubic-bezier(0.4,0,0.2,1)",
          pointerEvents: isOpen ? "auto" : "none",
          overflowY: "auto",
        }}
      >
        {person && (
          <>
            {/* Header */}
            <div
              style={{
                background: "#61063b",
                padding: "40px 24px 28px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 10,
                position: "relative",
                flexShrink: 0,
              }}
            >
              <button
                onClick={onClose}
                aria-label="Close sidebar"
                className="fc-close-btn"
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

              <div
                aria-hidden="true"
                style={{
                  width: 76,
                  height: 76,
                  borderRadius: "50%",
                  background:
                    "linear-gradient(135deg, #dbeafe 0%, #ede9fe 100%)",
                  color: "#03045e",
                  fontWeight: 700,
                  fontSize: 24,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "3px solid rgba(255,255,255,0.3)",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.25)",
                  letterSpacing: "0.03em",
                }}
              >
                {getInitials(person.name)}
              </div>

              <p
                style={{
                  margin: 0,
                  fontWeight: 700,
                  fontSize: 20,
                  color: "#fff",
                  textAlign: "center",
                  lineHeight: 1.3,
                }}
              >
                {person.name}
              </p>

              <p
                style={{
                  margin: 0,
                  fontSize: "16px",
                  color: "rgba(255,255,255,0.72)",
                  textAlign: "center",
                  lineHeight: 1.5,
                  
                }}
              >
                {person.position}
              </p>

              {hasRole && (
                <span
                  style={{
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
                  }}
                >
                  {person.is_head && <IconCrown />}

                  {person.is_head
                    ? `Head · ${person.office_role ?? "Office"}`
                    : person.office_role}
                </span>
              )}
            </div>

            {/* Section Label */}
            <div style={{ padding: "20px 24px 0" }}>
              <p
                style={{
                  margin: 0,
                  fontSize: "14px",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "#61063b",
                }}
              >
                Details
              </p>
            </div>

            {/* Fields */}
            <div
              style={{
                padding: "25px 24px",
                display: "flex",
                flexDirection: "column",
                gap: "25px",
                flex: 1,
                background: "#fcfcfd",
               
              }}
            >
              {person.office && (
                <Field
                  icon={<IconBuilding />}
                  label="Office"
                  value={person.office}
                />
              )}

              {person.department && (
                <Field
                  icon={<IconDepartment />}
                  label="Department"
                  value={person.department}
                />
              )}

             
            </div>

     
           
          </>
        )}
      </div>
    </>
  );
}