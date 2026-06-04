// "use client";

// import { useEffect, useRef, useState } from "react";

// type Faculty = {
//   employee_id?: number;
//   name: string;
//   position: string;
//   department?: string;
//   office?: string;
//   office_role?: string;
//   head_type?: string;
// };

// type Building = {
//   building_id?: number;
//   name: string;
//   latitude: number;
//   longitude: number;
// };

// // ✅ FIX: strict union type (this removes TS error)
// type ResultItem =
//   | { type: "faculty"; data: Faculty }
//   | { type: "building"; data: Building };

// type Props = {
//   onSearch: (building: Building) => void;
//   onFacultySelect: (person: Faculty) => void;
// };

// export default function SearchBar({
//   onSearch,
//   onFacultySelect,
// }: Props) {
//   const [query, setQuery] = useState("");

//   const [faculty, setFaculty] = useState<Faculty[]>([]);
//   const [buildings, setBuildings] = useState<Building[]>([]);

//   const [results, setResults] = useState<ResultItem[]>([]);
//   const [loading, setLoading] = useState(false);
// const [isFirstLoad, setIsFirstLoad] = useState(true);
// const isMounted = useRef(false);
//   // =========================
//   // LOAD EMPLOYEES
//   // =========================
//   useEffect(() => {
//     const loadEmployees = async () => {
//       try {
//         setLoading(true);

//         const res = await fetch("/api/employees");
//         const data = await res.json();

//         if (data.success) {
//           setFaculty(data.data);
//         }
//       } catch (err) {
//         console.error(err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     loadEmployees();
//   }, []);

//   // =========================
//   // LOAD BUILDINGS
//   // =========================
//   useEffect(() => {
//     const loadBuildings = async () => {
      
//       try {
//         const res = await fetch("/api/searchBuilding?search=");
//         const data = await res.json();

//         if (data.success) {
           
            
//           setBuildings(data.data);
//         }
//       } catch (err) {
//         console.error(err);
//       }
//     };

//     loadBuildings();
//   }, []);

//   // =========================
//   // LIVE SEARCH
//   // =========================
// useEffect(() => {
//   if (!isMounted.current) {
//     isMounted.current = true;
//     return; // ❌ block first render
//   }

//   if (!query.trim()) {
//     setResults([]);
//     return;
//   }

//   const q = query.toLowerCase();

//   const employeeResults: ResultItem[] = faculty
//     .filter((p) => p.name?.toLowerCase().includes(q))
//     .map((p) => ({
//       type: "faculty" as const,
//       data: p,
//     }));

//   const buildingResults: ResultItem[] = buildings
//     .filter((b) => b.name?.toLowerCase().includes(q))
//     .map((b) => ({
//       type: "building" as const,
//       data: b,
//     }));

//   setResults([...employeeResults, ...buildingResults]);
// }, [query, faculty, buildings]);
//   // =========================
//   // SEARCH BUTTON
//   // =========================
//   const handleSearch = () => {
//     const q = query.trim().toLowerCase();
//     if (!q) return;

//     const matchFaculty = faculty.find(
//       (p) => p.name.toLowerCase() === q
//     );

//     if (matchFaculty) {
//       onFacultySelect(matchFaculty);
//       setResults([]);
//       return;
//     }

//     const matchBuilding = buildings.find(
//       (b) => b.name.toLowerCase() === q
//     );

//     if (matchBuilding) {
//       onSearch(matchBuilding); // 🚀 FLY
//       setResults([]);
//       return;
//     }

//     setResults([]);
//   };

//   return (
//     <div
//       style={{
//         position: "absolute",
//         top: 0,
//         left: "50%",
//         transform: "translateX(-50%)",
//         zIndex: 20,
//         background: "white",
//         padding: 10,
//         borderRadius: 8,
//         width: 300,
//         boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
//       }}
//     >
//       {/* INPUT */}
//       <div style={{ display: "flex" }}>
//         <input
//           value={query}
//           placeholder="Search building or employees..."
//           onChange={(e) => setQuery(e.target.value)}
//           onKeyDown={(e) => {
//             if (e.key === "Enter") handleSearch();
//           }}
//           style={{
//             padding: 8,
//             width: 200,
//             border: "1px solid #ccc",
//             borderRadius: 6,
//           }}
//         />

//         <button
//           onClick={handleSearch}
//           style={{
//             marginLeft: 8,
//             padding: "8px 12px",
//             background: "#61063b",
//             color: "white",
//             borderRadius: 6,
//           }}
//         >
//           Find
//         </button>
//       </div>

//       {/* LOADING */}
//       {loading && (
//         <div style={{ fontSize: 12, marginTop: 8 }}>
//           Loading...
//         </div>
//       )}

//       {/* RESULTS */}
//       {results.length > 0 && (
//         <div
//           style={{
//             marginTop: 8,
//             border: "1px solid #ddd",
//             borderRadius: 6,
//             maxHeight: 240,
//             overflowY: "auto",
//           }}
//         >
//           {results.map((item, index) => (
//             <div
//               key={index}
//               onClick={() => {
//                 if (item.type === "faculty") {
//                   onFacultySelect(item.data);
//                   setQuery(item.data.name);
//                 } else {
//                   onSearch(item.data); // 🚀 BUILDING FLY
//                   setQuery(item.data.name);
//                 }

//                 setResults([]);
//               }}
//               style={{
//                 padding: 10,
//                 cursor: "pointer",
//                 borderBottom: "1px solid #eee",
//               }}
//             >
//               {/* NAME */}
//               <div style={{ fontWeight: 600 }}>
//                 {item.data.name}
//               </div>

//               {/* TYPE LABEL */}
//               <div style={{ fontSize: 12, color: "#666" }}>
//                 {item.type === "faculty"
//                   ? item.data.position
//                   : "Building"}
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }



// FILE: app/components/Searchbar.tsx

"use client";

import { useEffect, useRef, useState } from "react";
import type { RoomOrOffice } from "./roomofficecard";

// ─── Types ────────────────────────────────────────────────────────────────────

type Faculty = {
  employee_id?: number;
  name: string;
  position: string;
  department?: string;
  office?: string;
  office_role?: string;
  head_type?: string;
};

type Building = {
  building_id?: number;
  name: string;
  latitude: number;
  longitude: number;
};

type ResultItem =
  | { type: "faculty"; data: Faculty }
  | { type: "building"; data: Building }
  | { type: "room"; data: RoomOrOffice & { kind: "room" } }
  | { type: "office"; data: RoomOrOffice & { kind: "office" } };

type Props = {
  onSearch: (building: Building) => void;
  onFacultySelect: (person: Faculty) => void;
  onRoomOrOfficeSelect: (item: RoomOrOffice) => void;
};

const TYPE_LABEL: Record<ResultItem["type"], string> = {
  faculty: "Faculty",
  building: "Building",
  room: "Room",
  office: "Office",
};

const TYPE_COLOR: Record<ResultItem["type"], string> = {
  faculty: "#61063b",
  building: "#0369a1",
  room: "#1e40af",
  office: "#5b21b6",
};

// ─── Component ────────────────────────────────────────────────────────────────

export default function SearchBar({
  onSearch,
  onFacultySelect,
  onRoomOrOfficeSelect,
}: Props) {
  const [query, setQuery] = useState("");
  const [faculty, setFaculty] = useState<Faculty[]>([]);
  const [buildings, setBuildings] = useState<Building[]>([]);
  const [results, setResults] = useState<ResultItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [roLoading, setRoLoading] = useState(false);

  const isMounted = useRef(false);
  const roDebounce = useRef<ReturnType<typeof setTimeout> | null>(null);

  // ── Load faculty ────────────────────────────────────────────────────────────
  useEffect(() => {
    const load = async () => {
      try {
        setLoading(true);
        const res = await fetch("/api/employees");
        const data = await res.json();
        if (data.success) setFaculty(data.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  // ── Load buildings ──────────────────────────────────────────────────────────
  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch("/api/searchBuilding?search=");
        const data = await res.json();
        if (data.success) setBuildings(data.data);
      } catch (err) {
        console.error(err);
      }
    };
    load();
  }, []);

  // ── Live search ─────────────────────────────────────────────────────────────
  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
      return;
    }

    if (!query.trim()) {
      setResults([]);
      return;
    }

    const q = query.toLowerCase();

    // Faculty + buildings filter instantly from local state
    const facultyResults: ResultItem[] = faculty
      .filter((p) => p.name?.toLowerCase().includes(q))
      .map((p) => ({ type: "faculty" as const, data: p }));

    const buildingResults: ResultItem[] = buildings
      .filter((b) => b.name?.toLowerCase().includes(q))
      .map((b) => ({ type: "building" as const, data: b }));

    setResults([...facultyResults, ...buildingResults]);

    // Rooms + offices fetched from API with debounce
    if (roDebounce.current) clearTimeout(roDebounce.current);

    roDebounce.current = setTimeout(async () => {
      try {
        setRoLoading(true);
        const res = await fetch(
          `/api/officeroom?q=${encodeURIComponent(query.trim())}`
        );
        if (!res.ok) return;

        const roData: RoomOrOffice[] = await res.json();

        const roomResults: ResultItem[] = roData
          .filter((r) => r.kind === "room")
          .map((r) => ({
            type: "room" as const,
            data: r as RoomOrOffice & { kind: "room" },
          }));

        const officeResults: ResultItem[] = roData
          .filter((r) => r.kind === "office")
          .map((r) => ({
            type: "office" as const,
            data: r as RoomOrOffice & { kind: "office" },
          }));

        setResults((prev) => {
          const withoutRO = prev.filter(
            (r) => r.type !== "room" && r.type !== "office"
          );
          return [...withoutRO, ...roomResults, ...officeResults];
        });
      } catch (err) {
        console.error(err);
      } finally {
        setRoLoading(false);
      }
    }, 300);

    return () => {
      if (roDebounce.current) clearTimeout(roDebounce.current);
    };
  }, [query, faculty, buildings]);

  // ── Search button / Enter ───────────────────────────────────────────────────
  const handleSearch = () => {
    const q = query.trim().toLowerCase();
    if (!q) return;

    const matchFaculty = faculty.find((p) => p.name.toLowerCase() === q);
    if (matchFaculty) {
      onFacultySelect(matchFaculty);
      setResults([]);
      return;
    }

    const matchBuilding = buildings.find((b) => b.name.toLowerCase() === q);
    if (matchBuilding) {
      onSearch(matchBuilding);
      setResults([]);
      return;
    }

    setResults([]);
  };

  // ── Select a result ─────────────────────────────────────────────────────────
  const handleSelect = (item: ResultItem) => {
    setResults([]);
    setQuery(item.data.name);

    if (item.type === "faculty") {
      onFacultySelect(item.data);
    } else if (item.type === "building") {
      onSearch(item.data);
    } else {
      onRoomOrOfficeSelect(item.data);
    }
  };

  // ─── Render ─────────────────────────────────────────────────────────────────
  return (
    <div style={{
      position: "absolute",
      top: 0,
      left: "50%",
      transform: "translateX(-50%)",
      zIndex: 20,
      background: "white",
      padding: 10,
      borderRadius: 8,
      width: 300,
      boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
    }}>
      {/* INPUT */}
      <div style={{ display: "flex" }}>
        <input
          value={query}
          placeholder="Search building, faculty, room..."
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => { if (e.key === "Enter") handleSearch(); }}
          style={{
            padding: 8,
            width: 200,
            border: "1px solid #ccc",
            borderRadius: 6,
          }}
        />
        <button
          onClick={handleSearch}
          style={{
            marginLeft: 8,
            padding: "8px 12px",
            background: "#61063b",
            color: "white",
            borderRadius: 6,
            border: "none",
            cursor: "pointer",
          }}
        >
          Find
        </button>
      </div>

      {/* LOADING */}
      {(loading || roLoading) && (
        <div style={{ fontSize: 12, marginTop: 8, color: "#888" }}>
          {loading ? "Loading..." : "Searching rooms & offices..."}
        </div>
      )}

      {/* RESULTS */}
      {results.length > 0 && (
        <div style={{
          marginTop: 8,
          border: "1px solid #ddd",
          borderRadius: 6,
          maxHeight: 260,
          overflowY: "auto",
        }}>
          {results.map((item, index) => (
            <div
              key={index}
              onClick={() => handleSelect(item)}
              style={{
                padding: "10px 12px",
                cursor: "pointer",
                borderBottom: "1px solid #eee",
                display: "flex",
                alignItems: "center",
                gap: 10,
                background: "white",
                transition: "background 0.1s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#f9f5f7")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "white")}
            >
              {/* Color dot */}
              <span style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: TYPE_COLOR[item.type],
                flexShrink: 0,
              }} />

              <div style={{ flex: 1, minWidth: 0 }}>
                {/* Name */}
                <div style={{
                  fontWeight: 600,
                  fontSize: 13.5,
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}>
                  {item.data.name}
                </div>

                {/* Subtitle */}
                <div style={{ fontSize: 11.5, color: "#666", marginTop: 2 }}>
                  {item.type === "faculty" && item.data.position}
                  {item.type === "building" && "Building"}
                  {item.type === "room" &&
                    `Room · ${(item.data as any).type} · ${(item.data as any).building_name}`}
                  {item.type === "office" &&
                    `Office · ${(item.data as any).building_name}`}
                </div>
              </div>

              {/* Type badge */}
              <span style={{
                fontSize: 10,
                fontWeight: 700,
                letterSpacing: "0.05em",
                color: TYPE_COLOR[item.type],
                background: `${TYPE_COLOR[item.type]}18`,
                padding: "2px 7px",
                borderRadius: 20,
                flexShrink: 0,
                textTransform: "uppercase",
              }}>
                {TYPE_LABEL[item.type]}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}


