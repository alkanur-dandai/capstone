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
import { IOES } from "../buildings/ioes";
import { NewAcad } from "../buildings/newacad";
import { STUDENTCENTER } from "../buildings/studentcenter";
import { SHSBUILDING } from "../buildings/shsbuilding";
import { CASS } from "../buildings/cas";
import { FIC } from "../buildings/fic";
import { COED } from "../buildings/coed";
import { NewRegistrar } from "../buildings/newregistrar";
import { FacultyCenter } from "../buildings/facultycenter";
import { Dormitel } from "../buildings/dormitel";
import { Gym } from "../buildings/gym";
import { ISL } from "../buildings/isl";
import { MaasKamlon } from "../buildings/maaskamlon";
import { Cafeteria } from "../buildings/cafeteria";
import { Admin } from "../buildings/admin";
import { MSM } from "../buildings/msm";
import { OCeanes } from "../buildings/oceanes";
import { BOYSDORMITORY } from "../buildings/boysdormitory";
import { SUPPLYANDPROCUREMENT } from "../buildings/supplyandprocurement";
import { CBAM } from "../buildings/cbam";
import { DataCenter } from "../buildings/datacenter";
import { GIRLDORMITORY } from "../buildings/girldormitory";
import { Park } from "../buildings/park";
import { Infirmary } from "../buildings/infirmary";
import { SED } from "../buildings/sed";
import { Library } from "../buildings/library";
import { COF1 } from "../buildings/cof1";
import { COF2 } from "../buildings/cof2";
import { COFLAB } from "../buildings/coflab";
import { ROTC } from "../buildings/rotc";
import { PHYSICALPLANT } from "../buildings/physicalplant";
import { NewGirlsdorm } from "../buildings/newgirlsdorm";
import { NewBoysDorm } from "../buildings/newboysdorm";
import { TennisCourt } from "../buildings/tenniscourt";
import { SEARCDEC } from "../buildings/searcdec";
import TreeComponent from "../environment/treecomponent";

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

        {/* <Loader /> */}

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