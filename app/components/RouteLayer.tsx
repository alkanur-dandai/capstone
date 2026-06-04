"use client";

import { useEffect } from "react";
import { useMap } from "react-map-gl/maplibre";
import type { RouteGeoJSON } from "../services/routing";

type Props = {
  route: RouteGeoJSON | null;
};

export default function RouteLayer({ route }: Props) {
  const { current: mapRef } = useMap();

  useEffect(() => {
    if (!mapRef) return;

    // ✅ get the real MapLibre instance
    const map = mapRef.getMap();

    const sourceId = "route-source";
    const layerId = "route-layer";

    const removeRoute = () => {
      if (map.getLayer(layerId)) map.removeLayer(layerId);
      if (map.getSource(sourceId)) map.removeSource(sourceId);
    };

    if (!route) {
      removeRoute();
      return;
    }

    removeRoute();

    map.addSource(sourceId, {
      type: "geojson",
      data: route as any,
    });

    map.addLayer({
      id: layerId,
      type: "line",
      source: sourceId,
      layout: {
        "line-join": "round",
        "line-cap": "round",
      },
      paint: {
        "line-color": "#007bff",
        "line-width": 5,
      },
    });

    return () => {
      removeRoute();
    };
  }, [mapRef, route]);

  return null;
}
