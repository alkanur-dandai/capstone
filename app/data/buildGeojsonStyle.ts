import type { StyleSpecification } from "maplibre-gl";

export const buildGeoJSONStyle = (
  geojson: any
): StyleSpecification => ({
  version: 8,

  sources: {
    campus: {
      type: "geojson",
      data: geojson,
    },
  },

  layers: [
    {
      id: "background",
      type: "background",
      paint: {
        "background-color": "#e8f4ea",
      },
    },

    {
      id: "campus-ground",
      type: "fill",
      source: "campus",
      filter: ["==", ["get", "type"], "ground"] as any,
      paint: {
        "fill-color": "#c8dfc8",
        "fill-opacity": 0.8,
      },
    },

    {
      id: "campus-water",
      type: "fill",
      source: "campus",
      filter: ["==", ["get", "type"], "water"] as any,
      paint: {
        "fill-color": "#a0c8e8",
        "fill-opacity": 0.8,
      },
    },

    {
      id: "campus-park",
      type: "fill",
      source: "campus",
      filter: ["==", ["get", "type"], "park"] as any,
      paint: {
        "fill-color": "#90c090",
        "fill-opacity": 0.6,
      },
    },

    {
      id: "campus-buildings-fill",
      type: "fill",
      source: "campus",
      filter: ["==", ["get", "type"], "building"] as any,
      paint: {
        "fill-color": "#a0b4c8",
        "fill-opacity": 0.5,
      },
    },

    {
      id: "campus-buildings-outline",
      type: "line",
      source: "campus",
      filter: ["==", ["get", "type"], "building"] as any,
      paint: {
        "line-color": "#607080",
        "line-width": 1.5,
      },
    },

    {
      id: "campus-roads",
      type: "line",
      source: "campus",
      filter: ["==", ["get", "type"], "road"] as any,
      paint: {
        "line-color": "#b0a090",
        "line-width": 3,
      },
    },

    {
      id: "campus-paths",
      type: "line",
      source: "campus",
      filter: ["==", ["get", "type"], "path"] as any,
      paint: {
        "line-color": "#d4c5a9",
        "line-width": 1.5,
        "line-dasharray": [2, 2],
      },
    },
  ] as StyleSpecification["layers"],
});