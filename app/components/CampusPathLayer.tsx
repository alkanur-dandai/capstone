import { Source, Layer } from "react-map-gl/maplibre";
import CAMPUS_PATHS from "../data/road-v2.json";
import type { FeatureCollection } from "geojson";

interface Props {
  visible: boolean;
}

export default function CampusPathLayer({ visible }: Props) {
  if (!visible) return null;

  return (
    <Source
      id="campus-paths"
      type="geojson"
      data={CAMPUS_PATHS as FeatureCollection}
    >
      <Layer
        id="campus-paths-casing"
        type="line"
        paint={{
          "line-color": "#fff",
          "line-width": 6,
          "line-opacity": 0.5,
        }}
      />
      <Layer
        id="campus-paths-line"
        type="line"
        paint={{
          "line-color": "#378ADD",
          "line-width": 3,
          "line-opacity": 0.9,
        }}
      />
    </Source>
  );
}