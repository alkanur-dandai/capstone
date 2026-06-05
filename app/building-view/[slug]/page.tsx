
// 3rd

"use client";


import { Canvas } from "@react-three/fiber";
import {
  Stage,
  Loader,
  MapControls,
  Environment,
  ContactShadows,
} from "@react-three/drei";
import { IoArrowBack } from "react-icons/io5";
import React, { Suspense, useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
// MODELS
import { IOES } from "../../buildings/ioes";
import {SHSBUILDING } from "../../buildings/shsbuilding";
import { CASS } from "../../buildings/cas";
import { NewAcad } from "../../buildings/newacad";
import {  STUDENTCENTER } from "../../buildings/studentcenter";

import { COED } from "../../buildings/coed";
import { NewRegistrar } from "../../buildings/newregistrar";
import { Dormitel } from "@/app/buildings/dormitel";
import { Admin } from "@/app/buildings/admin";
import { Library } from "@/app/buildings/library";
import { CBAM } from "@/app/buildings/cbam";
import { BOYSDORMITORY } from "@/app/buildings/boysdormitory";
import { Cafeteria } from "@/app/buildings/cafeteria";
import { COF1 } from "@/app/buildings/cof1";
import { COF2 } from "@/app/buildings/cof2";
import { COFLAB } from "@/app/buildings/coflab";
import { DataCenter } from "@/app/buildings/datacenter";
import { FacultyCenter } from "@/app/buildings/facultycenter";
import { GIRLDORMITORY } from "@/app/buildings/girldormitory";
import { Gym } from "@/app/buildings/gym";
import { Infirmary } from "@/app/buildings/infirmary";
import { ISL } from "@/app/buildings/isl";
import { MaasKamlon } from "@/app/buildings/maaskamlon";
import { MSM } from "@/app/buildings/msm";
import { NewBoysDorm } from "@/app/buildings/newboysdorm";
import { NewGirlsdorm } from "@/app/buildings/newgirlsdorm";
import { OCeanes } from "@/app/buildings/oceanes";
import {  PHYSICALPLANT } from "@/app/buildings/physicalplant";
import { ROTC } from "@/app/buildings/rotc";
import { SEARCDEC } from "@/app/buildings/searcdec";
import { SED } from "@/app/buildings/sed";
import { SUPPLYANDPROCUREMENT } from "@/app/buildings/supplyandprocurement";
import { TennisCourt } from "@/app/buildings/tenniscourt";
import { FIC } from "@/app/buildings/fic";



export default function BuildingPage() {
  const params = useParams();
  const slug = params?.slug as string;

  const [building, setBuilding] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);
  const [expanded, setExpanded] = useState(false);
  const [floorOrder, setFloorOrder] = useState<string[]>([]);
  const [visibleFloors, setVisibleFloors] = useState<string[]>([]);
  const [expandedFloor, setExpandedFloor] = useState<string | null>(null);

  // 1. ADD THIS BACK: Responsive state for mobile tracking
  const [isMobile, setIsMobile] = useState(false);
const router = useRouter();
  // 2. ADD THIS BACK: Listen to window size changes
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize(); // Run on initial mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const normalize = (f: string) => f?.toLowerCase().trim();

  // FETCH BUILDING
  useEffect(() => {
    if (!slug) return;

    setLoading(true);

    fetch(`/api/buildingdata?slug=${slug}`)
      .then((res) => res.json())
      .then((data) => {
        if (!data.error) {
          setBuilding(data);
          const floors = data.floors || data.floor || ["1ST"];
          setFloorOrder(floors);
          setVisibleFloors(floors);
        } else {
          setBuilding(null);
        }
      })
      .finally(() => setLoading(false));
  }, [slug]);

  // FLOOR CLICK LOGIC
  const handleFloorClick = (floor: string) => {
    if (floor === "roof") {
      setExpandedFloor(null);
      setVisibleFloors(floorOrder);
      return;
    }

    const isSame = expandedFloor === floor;
    setExpandedFloor(isSame ? null : floor);

    const index = floorOrder.indexOf(floor);
    setVisibleFloors(floorOrder.slice(0, index + 1));
  };

  if (!slug) return null;
  if (loading) return <div>Loading...</div>;
  if (!building) return <div>Building Not Found</div>;

  const models: any = {
    ioes: <IOES visibleFloors={visibleFloors} />,
    cass: <CASS visibleFloors={visibleFloors} />,
    newacad: <NewAcad visibleFloors={visibleFloors} />,
    fic:<FIC visibleFloors={visibleFloors}/>,
    newregistrar: <NewRegistrar visibleFloors={visibleFloors} />,
    admin: <Admin visibleFloors={visibleFloors} />,
    coed: <COED visibleFloors={visibleFloors}/>,
    studentcenter: <STUDENTCENTER visibleFloors={visibleFloors}/>,
    library: <Library visibleFloors={visibleFloors}/>,
    cbam: <CBAM visibleFloors={visibleFloors}/>,
    shsbuilding: <SHSBUILDING visibleFloors={visibleFloors}/>,
    boysdormitory:<BOYSDORMITORY visibleFloors={visibleFloors}/>,
    cafeteria:<Cafeteria visibleFloors={visibleFloors}/>,
    cof1:<COF1 visibleFloors={visibleFloors}/>,
    cof2:<COF2 visibleFloors={visibleFloors}/>,
    coflab:<COFLAB visibleFloors={visibleFloors}/>,
    datacenter:<DataCenter visibleFloors={visibleFloors}/>,
    dormitel:<Dormitel visibleFloors={visibleFloors}/>,
    facultycenter:<FacultyCenter visibleFloors={visibleFloors}/>,
    girldormitory:<GIRLDORMITORY visibleFloors={visibleFloors}/>,
    gym:<Gym visibleFloors={visibleFloors}/>,
    infirmary: <Infirmary visibleFloors={visibleFloors}/>,
    isl:<ISL visibleFloors={visibleFloors}/>,
    maaskamlon:<MaasKamlon visibleFloors={visibleFloors}/>,
    msm:<MSM visibleFloors={visibleFloors}/>,
    newboysdorm:<NewBoysDorm visibleFloors={visibleFloors}/>,
    newgirlsdorm:<NewGirlsdorm visibleFloors={visibleFloors}/>,
    oceanes:<OCeanes visibleFloors={visibleFloors}/>,
    physicalplant:<PHYSICALPLANT visibleFloors={visibleFloors}/>,
    rotc:<ROTC visibleFloors={visibleFloors}/>,
    searcdec:<SEARCDEC visibleFloors={visibleFloors}/>,
    sed:<SED visibleFloors={visibleFloors}/>,
    supplyandprocurement:<SUPPLYANDPROCUREMENT visibleFloors={visibleFloors}/>,
    tenniscourt:<TennisCourt visibleFloors={visibleFloors}/>
    







  };

  return (
    <div className="page-container">
      <style jsx global>{`
        /* Core viewport lock layout */
        .page-container {
          display: flex;
          height: 100vh;
          width: 100vw;
          flex-direction: row;
          overflow: hidden; 
        }
        
        .canvas-wrapper {
          flex: 1;
          background: #45474B;
          position: relative;
          height: 100%;
        }
        
        .info-panel {
          width: 380px;
          padding: 24px;
          overflow-y: auto; 
          background: white;
          border-left: 1px solid #e5e7eb;
        }

        /* Mobile Breakpoint Modifications */
        @media (max-width: 768px) {
          .page-container {
            flex-direction: column; 
          }
          
          .canvas-wrapper {
            height: 45vh; 
            width: 100%;
            flex: none;
          }
          
          .info-panel {
            flex: 1; 
            width: 100%;
            border-left: none;
            border-top: 1px solid #e5e7eb;
            overflow-y: auto; 
          }
        }
      `}</style>

      {/* 3D CANVAS WRAPPER */}
      
      <div className="canvas-wrapper">

    <button
  onClick={() => router.back()}
  style={{
    position: "absolute",
    top: "16px",
    left: "16px",
    zIndex: 9999,

    width: "52px",
    height: "52px",
    borderRadius: "50%",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    border: "none",
    background: "white",
    boxShadow: "0 4px 12px rgba(0,0,0,0.15)",

    cursor: "pointer",
  }}
>
  <IoArrowBack size={24} color="#61063b" />
</button>
        <Canvas
          shadows={false}
          camera={{ position: [-160, -10, 80], fov: 25 }}
          gl={{
            antialias: false,
            powerPreference: "high-performance",
            precision: "mediump",
          }}
          dpr={[1, 1.5]}
          frameloop="demand"
        >
          <color attach="background" args={["#d0e7ff"]} />

          <Suspense fallback={null}>
            <Environment files="/assets/city.hdr" background={false} />

            <Stage adjustCamera={false} intensity={0.2} environment={null}>
              <group rotation={[0, Math.PI, 0]}>
                {models[slug.toLowerCase()] ?? <mesh />}
              </group>
            </Stage>

            {/* <ContactShadows
              position={[0, -10, 0]}
              opacity={0.4}
              scale={100}
              blur={1.5}
              far={20}
              frames={1}
            /> */}
          </Suspense>

          <ambientLight intensity={0.8} />
          <directionalLight position={[80, 120, 60]} intensity={0.8} />

          {/* 3. OPTIMIZED MOBILES CONTROLS USING ISMOBILE */}
          <MapControls
            makeDefault
            enableRotate={true}
            enableZoom={true}
            enablePan={!isMobile} 
            target={[0, 0, 0]}
            minDistance={30}
            maxDistance={180}
            maxPolarAngle={Math.PI / 2.1} 
          />
        </Canvas>
        <Loader />
      </div>

      {/* BOTTOM PANEL */}
      <div className="info-panel">
        <h1 style={{ fontSize: "24px", color: "#61063b", marginTop: 0 }}>
          {building.name}
        </h1>

        {/* DESCRIPTION */}
        <div style={{ marginBottom: "20px" }}>
          <p
            style={{
              display: "-webkit-box",
              WebkitLineClamp: expanded ? "unset" : 3,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              lineHeight: "1.6",
              fontSize: "14px",
              color: "#03045e",
              textAlign: "justify",
              fontFamily: "Arial",
            }}
          >
            {building.description}
          </p>

          <button
            onClick={() => setExpanded(!expanded)}
            style={{
              marginTop: "6px",
              fontSize: "12px",
              color: "#61063b",
              background: "none",
              border: "none",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            {expanded ? "Show less" : "Show more"}
          </button>
        </div>

        {/* OFFICES */}
        <div
          style={{
            padding: "16px",
            background: "#61063b",
            borderRadius: "10px",
            marginBottom: "20px",
          }}
        >
          <h3 style={{ color: "white", marginTop: 0 }}>OFFICES / DEPARTMENT</h3>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
            {building.offices?.map((office: any) => (
              <span
                key={office.office_id}
                style={{
                  padding: "6px 10px",
                  background: "white",
                  color: "#61063b",
                  fontSize: "12px",
                  borderRadius: "6px",
                  fontFamily: "Arial",
                }}
              >
                {office.name}
              </span>
            ))}
          </div>
        </div>

        {/* FLOOR NAVIGATOR */}
        <div
          style={{
            padding: "16px",
            background: "#61063b",
            borderRadius: "10px",
          }}
        >
          <h3 style={{ color: "white", marginTop: 0, marginBottom: "10px" }}>
            FLOOR NAVIGATOR
          </h3>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {floorOrder.map((floor) => {
              const isActive = visibleFloors.includes(floor);
              const isExpanded = expandedFloor === floor;

              return (
                <button
                  key={floor}
                  onClick={() => handleFloorClick(floor)}
                  style={{
                    padding: "8px 12px",
                    borderRadius: "6px",
                    cursor: "pointer",
                    border: isExpanded
                      ? "2px solid white"
                      : "1px solid rgba(255,255,255,0.3)",
                    background: isActive
                      ? "rgba(255,255,255,0.2)"
                      : "transparent",
                    color: "white",
                    fontSize: "12px",
                  }}
                >
                  {floor === "roof" ? "Full Building" : floor}
                </button>
              );
            })}
          </div>

          {/* ACCORDION */}
          {expandedFloor &&
            expandedFloor !== "roof" &&
            (() => {
              const floorRooms =
                building.rooms?.filter(
                  (r: any) => normalize(r.floor) === normalize(expandedFloor)
                ) || [];

              return (
                <div
                  style={{
                    marginTop: "15px",
                    borderRadius: "6px",
                    overflow: "hidden",
                  }}
                >
                  <div
                    onClick={() => setExpandedFloor(null)}
                    style={{
                      padding: "10px",
                      background: "rgba(255,255,255,0.15)",
                      color: "white",
                      cursor: "pointer",
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <span>Rooms ({expandedFloor})</span>
                    <span>{floorRooms.length}</span>
                  </div>

                  <div
                    style={{
                      padding: "10px",
                      background: "rgba(255,255,255,0.05)",
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "6px",
                    }}
                  >
                    {floorRooms.length > 0 ? (
                      floorRooms.map((room: any) => (
                        <span
                          key={room.room_id}
                          style={{
                            padding: "6px 10px",
                            background: "white",
                            color: "#61063b",
                            fontSize: "11px",
                            borderRadius: "4px",
                          }}
                        >
                          {room.name}
                        </span>
                      ))
                    ) : (
                      <span style={{ color: "rgba(255,255,255,0.5)" }}>
                        No rooms
                      </span>
                    )}
                  </div>
                </div>
              );
            })()}
        </div>
      </div>
    </div>
  );
}