"use client";

import { useRef } from "react";
import type { MapRef } from "react-map-gl/maplibre";

export function useLocate(
  mapRef: React.RefObject<MapRef | null>,
  onUpdate?: (coords: {
    latitude: number;
    longitude: number;
  }) => void
) {
  const watchId = useRef<number | null>(null);

  const start = () => {
    if (!navigator.geolocation) {
      alert("Geolocation not supported");
      return;
    }

    watchId.current = navigator.geolocation.watchPosition(
      (position) => {
        const { latitude, longitude } = position.coords;

        // update marker
        onUpdate?.({ latitude, longitude });

        // SAFE CHECK
        const map = mapRef.current?.getMap();

        // prevent crash
        if (!map) return;

        map.easeTo({
          center: [longitude, latitude],
          zoom: 18,
          pitch: 60,
          duration: 800,
        });
      },
      (error) => {
        console.error("Location error:", error);
        alert("Unable to track location. Please enable GPS.");
      },
      {
        enableHighAccuracy: true,
        maximumAge: 1000,
        timeout: 10000,
      }
    );
  };

  const stop = () => {
    if (watchId.current !== null) {
      navigator.geolocation.clearWatch(watchId.current);
      watchId.current = null;
    }
  };

  return { start, stop };
}