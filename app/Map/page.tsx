"use client";

import "maplibre-gl/dist/maplibre-gl.css";

import Map from "react-map-gl/maplibre";
import maplibregl from "maplibre-gl";
import { Marker } from "react-map-gl/maplibre";
import { Canvas as ReactThreeMapCanvas } from "react-three-map/maplibre";
import dynamic from "next/dynamic";

import SearchBar from "../components/Searchbar";
import FacultyCard from "../components/FacultyCard";

import { useEffect, useState, useCallback, useRef, Suspense } from "react";
import { useRouter } from "next/navigation";

import RoutePins from "../components/RoutePins";
import RouteLayer from "../components/RouteLayer";

import { Loader } from "@react-three/drei";

import LocateButton from "../components/ButtonLocation";
import { useLocate } from "../hooks/handleLocate";
import { useRoute } from "../hooks/useRoute";

import type { MapRef } from "react-map-gl/maplibre";

import { OFFLINE_MAP_STYLE } from "../mapstyle/offlineMapStyle";

import CampusPathLayer from "../components/CampusPathLayer";
import TogglePathButton from "../components/TogglePathButton";

import RoomOfficeCard, { type RoomOrOffice } from "../components/roomofficecard";

// ─── Dynamic imports for all 3D buildings (prevents SSR crash + reduces initial bundle) ──
const IOES               = dynamic(() => import("../buildings/ioes").then(m => ({ default: m.IOES })), { ssr: false });
const NewAcad            = dynamic(() => import("../buildings/newacad").then(m => ({ default: m.NewAcad })), { ssr: false });
const STUDENTCENTER      = dynamic(() => import("../buildings/studentcenter").then(m => ({ default: m.STUDENTCENTER })), { ssr: false });
const SHSBUILDING        = dynamic(() => import("../buildings/shsbuilding").then(m => ({ default: m.SHSBUILDING })), { ssr: false });
const CASS               = dynamic(() => import("../buildings/cas").then(m => ({ default: m.CASS })), { ssr: false });
const FIC                = dynamic(() => import("../buildings/fic").then(m => ({ default: m.FIC })), { ssr: false });
const COED               = dynamic(() => import("../buildings/coed").then(m => ({ default: m.COED })), { ssr: false });
const NewRegistrar       = dynamic(() => import("../buildings/newregistrar").then(m => ({ default: m.NewRegistrar })), { ssr: false });
const FacultyCenter      = dynamic(() => import("../buildings/facultycenter").then(m => ({ default: m.FacultyCenter })), { ssr: false });
const Dormitel           = dynamic(() => import("../buildings/dormitel").then(m => ({ default: m.Dormitel })), { ssr: false });
const Gym                = dynamic(() => import("../buildings/gym").then(m => ({ default: m.Gym })), { ssr: false });
const ISL                = dynamic(() => import("../buildings/isl").then(m => ({ default: m.ISL })), { ssr: false });
const MaasKamlon         = dynamic(() => import("../buildings/maaskamlon").then(m => ({ default: m.MaasKamlon })), { ssr: false });
const Cafeteria          = dynamic(() => import("../buildings/cafeteria").then(m => ({ default: m.Cafeteria })), { ssr: false });
const Admin              = dynamic(() => import("../buildings/admin").then(m => ({ default: m.Admin })), { ssr: false });
const MSM                = dynamic(() => import("../buildings/msm").then(m => ({ default: m.MSM })), { ssr: false });
const OCeanes            = dynamic(() => import("../buildings/oceanes").then(m => ({ default: m.OCeanes })), { ssr: false });
const BOYSDORMITORY      = dynamic(() => import("../buildings/boysdormitory").then(m => ({ default: m.BOYSDORMITORY })), { ssr: false });
const SUPPLYANDPROCUREMENT = dynamic(() => import("../buildings/supplyandprocurement").then(m => ({ default: m.SUPPLYANDPROCUREMENT })), { ssr: false });
const CBAM               = dynamic(() => import("../buildings/cbam").then(m => ({ default: m.CBAM })), { ssr: false });
const DataCenter         = dynamic(() => import("../buildings/datacenter").then(m => ({ default: m.DataCenter })), { ssr: false });
const GIRLDORMITORY      = dynamic(() => import("../buildings/girldormitory").then(m => ({ default: m.GIRLDORMITORY })), { ssr: false });
const Park               = dynamic(() => import("../buildings/park").then(m => ({ default: m.Park })), { ssr: false });
const Infirmary          = dynamic(() => import("../buildings/infirmary").then(m => ({ default: m.Infirmary })), { ssr: false });
const SED                = dynamic(() => import("../buildings/sed").then(m => ({ default: m.SED })), { ssr: false });
const Library            = dynamic(() => import("../buildings/library").then(m => ({ default: m.Library })), { ssr: false });
const COF1               = dynamic(() => import("../buildings/cof1").then(m => ({ default: m.COF1 })), { ssr: false });
const COF2               = dynamic(() => import("../buildings/cof2").then(m => ({ default: m.COF2 })), { ssr: false });
const COFLAB = dynamic(() => import("../buildings/coflab").then(m => ({ default: m.COFLAB })), { ssr: false });
const ROTC               = dynamic(() => import("../buildings/rotc").then(m => ({ default: m.ROTC })), { ssr: false });
const PHYSICALPLANT      = dynamic(() => import("../buildings/physicalplant").then(m => ({ default: m.PHYSICALPLANT })), { ssr: false });
const NewGirlsdorm       = dynamic(() => import("../buildings/newgirlsdorm").then(m => ({ default: m.NewGirlsdorm })), { ssr: false });
const NewBoysDorm        = dynamic(() => import("../buildings/newboysdorm").then(m => ({ default: m.NewBoysDorm })), { ssr: false });
const TennisCourt        = dynamic(() => import("../buildings/tenniscourt").then(m => ({ default: m.TennisCourt })), { ssr: false });
const SEARCDEC           = dynamic(() => import("../buildings/searcdec").then(m => ({ default: m.SEARCDEC })), { ssr: false });
const TreeComponent      = dynamic(() => import("../environment/treecomponent"), { ssr: false });

// ─── Hook: reactive online/offline detection ─────────────────────────────────
function useIsOnline() {
  const [isOnline, setIsOnline] = useState(
    typeof navigator !== "undefined" ? navigator.onLine : true,
  );
  useEffect(() => {
    const on = () => setIsOnline(true);
    const off = () => setIsOnline(false);
    window.addEventListener("online", on);
    window.addEventListener("offline", off);
    return () => {
      window.removeEventListener("online", on);
      window.removeEventListener("offline", off);
    };
  }, []);
  return isOnline;
}

// ─── Hook: detect mobile viewport ────────────────────────────────────────────
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  return isMobile;
}

// ─── Page ────────────────────────────────────────────────────────────────────
export default function MapPage() {
  const ONLINE_MAP_STYLE = `https://tiles.openfreemap.org/styles/bright`;

  const isOnline = useIsOnline();
  const isMobile = useIsMobile();
  const mapStyle = isOnline ? ONLINE_MAP_STYLE : OFFLINE_MAP_STYLE;

  const [selected, setSelected] = useState<string>("");
  const [selectedFaculty, setSelectedFaculty] = useState<any>(null);
  const [selectedRoomOrOffice, setSelectedRoomOrOffice] = useState<RoomOrOffice | null>(null);

  const mapRef = useRef<MapRef | null>(null);
  const router = useRouter();

  const go = (name: string) => router.push(`/building-view/${name}`);

  const flyToBuilding = (building: any) => {
    if (!mapRef.current || !building) return;
    mapRef.current.getMap().flyTo({
      center: [building.longitude, building.latitude],
      zoom: 19,
      pitch: isMobile ? 30 : 60,
      duration: 2000,
    });
  };

  const [userLocation, setUserLocation] = useState<{
    latitude: number;
    longitude: number;
  } | null>(null);

  const { start } = useLocate(mapRef, setUserLocation);

  // ── Routing ───────────────────────────────────────────────────────────────
  const { destinationPin, route, loading, error, setPin, clearPin } =
    useRoute(userLocation);

  const handleMapClick = useCallback(
    (e: maplibregl.MapMouseEvent) => {
      setPin({ longitude: e.lngLat.lng, latitude: e.lngLat.lat });
    },
    [setPin],
  );

  const [showPaths, setShowPaths] = useState(false);

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        // Prevents touch event conflicts between map drag and Three.js canvas
        touchAction: "none",
      }}
    >
      <Map
        ref={mapRef}
        mapLib={maplibregl}
        initialViewState={{
          latitude: 5.038789363321598,
          longitude: 119.74431649629128,
          zoom: isMobile ? 17 : 18,
          pitch: isMobile ? 30 : 70,
          bearing: 0,
        }}
        mapStyle={mapStyle}
        interactive={true}
        onClick={handleMapClick}
      >
        {/* User location marker */}
        {userLocation && (
          <Marker
            longitude={userLocation.longitude}
            latitude={userLocation.latitude}
            anchor="center"
          >
            <div
              style={{
                position: "relative",
                width: 50,
                height: 50,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src="./assets/dolphin.png"
                alt="Dolphin Marker"
                style={{
                  position: "relative",
                  width: 40,
                  height: 40,
                  zIndex: 2,
                  objectFit: "contain",
                }}
              />
            </div>
          </Marker>
        )}

        {/* Destination pin */}
        {destinationPin && (
          <Marker
            longitude={destinationPin.longitude}
            latitude={destinationPin.latitude}
            anchor="bottom"
          >
            <div
              title="Tap to remove pin"
              onClick={(e) => {
                e.stopPropagation();
                clearPin();
              }}
              style={{
                width: 28,
                height: 28,
                background: "#e53e3e",
                border: "3px solid #fff",
                borderRadius: "50% 50% 50% 0",
                transform: "rotate(-45deg)",
                boxShadow: "0 2px 6px rgba(0,0,0,0.4)",
                cursor: "pointer",
              }}
            />
          </Marker>
        )}

        {/* Route line */}
        {route && <RouteLayer route={route} />}

        {/* Route start/end pins */}
        {userLocation && destinationPin && (
          <RoutePins start={userLocation} end={destinationPin} />
        )}

        {/* 3D buildings */}
        <ReactThreeMapCanvas
          latitude={5.038789363321598}
          longitude={119.74431649629128}
        >
          <Suspense fallback={null}>
            <ambientLight intensity={0.8} />
            <directionalLight
              position={[100, 200, 100]}
              intensity={1.2}
              castShadow
              shadow-mapSize-width={isMobile ? 1024 : 2048}
              shadow-mapSize-height={isMobile ? 1024 : 2048}
              shadow-camera-near={1}
              shadow-camera-far={1000}
              shadow-camera-left={-200}
              shadow-camera-right={200}
              shadow-camera-top={200}
              shadow-camera-bottom={-200}
            />
            <directionalLight
              position={[-100, 100, -50]}
              intensity={0.4}
              shadow-normalBias={0.01}
            />

            <IOES selected={selected === "IOES"} onClick={() => go("IOES")} />
            <NewAcad selected={selected === "NewAcad"} onClick={() => go("NewAcad")} />
            <STUDENTCENTER selected={selected === "STUDENTCENTER"} onClick={() => go("STUDENTCENTER")} />
            <SHSBUILDING selected={selected === "SHSBUILDING"} onClick={() => go("SHSBUILDING")} />
            <CASS selected={selected === "CASS"} onClick={() => go("CASS")} />
            <FIC selected={selected === "FIC"} onClick={() => go("FIC")} />
            <COED selected={selected === "COED"} onClick={() => go("COED")} />
            <NewRegistrar selected={selected === "NewRegistrar"} onClick={() => go("NewRegistrar")} />
            <FacultyCenter selected={selected === "FacultyCenter"} onClick={() => go("FacultyCenter")} />
            <Dormitel selected={selected === "Dormitel"} onClick={() => go("Dormitel")} />
            <Gym selected={selected === "Gym"} onClick={() => go("Gym")} />
            <ISL selected={selected === "ISL"} onClick={() => go("ISL")} />
            <MaasKamlon selected={selected === "MaasKamlon"} onClick={() => go("Maaskamlon")} />
            <Cafeteria selected={selected === "Cafeteria"} onClick={() => go("Cafeteria")} />
            <Admin selected={selected === "Admin"} onClick={() => go("Admin")} />
            <MSM selected={selected === "MSM"} onClick={() => go("MSM")} />
            <OCeanes selected={selected === "OCeanes"} onClick={() => go("OCeanes")} />
            <BOYSDORMITORY selected={selected === "BOYSDORMITORY"} onClick={() => go("BOYSDORMITORY")} />
            <SUPPLYANDPROCUREMENT selected={selected === "SUPPLYANDPROCUREMENT"} onClick={() => go("SUPPLYANDPROCUREMENT")} />
            <CBAM selected={selected === "CBAM"} onClick={() => go("CBAM")} />
            <DataCenter selected={selected === "DataCenter"} onClick={() => go("DataCenter")} />
            <GIRLDORMITORY selected={selected === "GIRLDORMITORY"} onClick={() => go("GIRLDORMITORY")} />
            <Park />
            <Infirmary selected={selected === "Infirmary"} onClick={() => go("Infirmary")} />
            <SED selected={selected === "SED"} onClick={() => go("SED")} />
            <Library selected={selected === "Library"} onClick={() => go("Library")} />
            <COF1 selected={selected === "COF1"} onClick={() => go("COF1")} />
            <COF2 selected={selected === "COF2"} onClick={() => go("COF2")} />
            <COFLAB selected={selected === "COFLAB"} onClick={() => go("COFLAB")} />
            <ROTC selected={selected === "ROTC"} onClick={() => go("ROTC")} />
            <PHYSICALPLANT selected={selected === "PHYSICALPLANT"} onClick={() => go("PHYSICALPLANT")} />
            <NewGirlsdorm selected={selected === "NewGirlsdorm"} onClick={() => go("NewGirlsdorm")} />
            <NewBoysDorm selected={selected === "NewBoysDorm"} onClick={() => go("NewBoysDorm")} />
            <TennisCourt selected={selected === "TennisCourt"} onClick={() => go("TennisCourt")} />
            <SEARCDEC selected={selected === "SEARCDEC"} onClick={() => go("SEARCDEC")} />

            {/* Skip heavy tree instancing on mobile to save GPU */}
            {!isMobile && <TreeComponent />}
          </Suspense>

          {/* Only show debug axes in development */}
          {process.env.NODE_ENV === "development" && (
            <axesHelper args={[15]} />
          )}
        </ReactThreeMapCanvas>

        <Loader />

        {/* Search bar */}
        <div
          style={{
            position: "absolute",
            top: 20,
            left: 20,
            zIndex: 999,
            width: 300,
            maxWidth: "90vw",
          }}
        >
          <div style={{ position: "relative", width: 260, marginLeft: 15 }}>
            <SearchBar
              onSearch={(building) => {
                setSelectedFaculty(null);
                setSelectedRoomOrOffice(null);
                flyToBuilding(building);
              }}
              onFacultySelect={(person) => {
                setSelectedRoomOrOffice(null);
                setSelectedFaculty(person);
              }}
              onRoomOrOfficeSelect={(item) => {
                setSelectedFaculty(null);
                setSelectedRoomOrOffice(item);
              }}
            />
          </div>
        </div>

        {/* Route loading / error toast */}
        {(loading || error) && (
          <div
            style={{
              position: "absolute",
              bottom: 110,
              right: 20,
              zIndex: 9999,
              background: error ? "rgba(180,40,40,0.85)" : "rgba(0,0,0,0.65)",
              color: "#fff",
              padding: "6px 14px",
              borderRadius: 8,
              fontSize: 13,
            }}
          >
            {loading ? "Finding route…" : error}
          </div>
        )}

        {/* No location warning */}
        {destinationPin && !userLocation && (
          <div
            style={{
              position: "absolute",
              bottom: 110,
              right: 20,
              zIndex: 9999,
              background: "rgba(180,120,0,0.85)",
              color: "#fff",
              padding: "6px 14px",
              borderRadius: 8,
              fontSize: 13,
            }}
          >
            Press the locate button first
          </div>
        )}

        {/* Locate button */}
        <div
          style={{
            position: "absolute",
            bottom: 110,
            left: 20,
            zIndex: 9999,
          }}
        >
          <LocateButton onClick={start} />
        </div>

        <CampusPathLayer visible={showPaths} />

        <div
          style={{
            position: "absolute",
            bottom: 50,
            left: 20,
            zIndex: 9999,
          }}
        >
          <TogglePathButton
            active={showPaths}
            onClick={() => setShowPaths((prev) => !prev)}
          />
        </div>
      </Map>

      <FacultyCard
        person={selectedFaculty}
        onClose={() => setSelectedFaculty(null)}
      />

      <RoomOfficeCard
        item={selectedRoomOrOffice}
        onClose={() => setSelectedRoomOrOffice(null)}
      />
    </div>
  );
}