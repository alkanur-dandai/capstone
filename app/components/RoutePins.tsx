"use client";

import { Marker } from "react-map-gl/maplibre";

type Props = {
  start: { latitude: number; longitude: number } | null;
  end: { latitude: number; longitude: number } | null;
};

export default function RoutePins({ start, end }: Props) {
  return (
    <>
      {start && (
        <Marker latitude={start.latitude} longitude={start.longitude} anchor="bottom">
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: "50%",
              background: "green",
              border: "2px solid white",
            }}
          />
        </Marker>
      )}

      {end && (
        <Marker latitude={end.latitude} longitude={end.longitude} anchor="bottom">
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: "50%",
              background: "red",
              border: "2px solid white",
            }}
          />
        </Marker>
      )}
    </>
  );
}
