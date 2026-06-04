export type Coords = {
  latitude: number;
  longitude: number;
};

export type RouteGeoJSON = {
  type: "FeatureCollection";
  features: GeoJSON.Feature[];
};

const OSRM_BASE = "https://router.project-osrm.org/route/v1/foot";

export async function fetchOSRMRoute(
  origin: Coords,
  destination: Coords
): Promise<RouteGeoJSON> {
  const url = `${OSRM_BASE}/${origin.longitude},${origin.latitude};${destination.longitude},${destination.latitude}?overview=full&geometries=geojson`;

  const res = await fetch(url);

  if (!res.ok) {
    throw new Error(`OSRM request failed: ${res.status}`);
  }

  const data = await res.json();

  if (!data.routes?.length) {
    throw new Error("No route found between the two points");
  }

  const geometry = data.routes[0].geometry;

  return {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        geometry,
        properties: {
          distance: data.routes[0].distance, // meters
          duration: data.routes[0].duration, // seconds
        },
      },
    ],
  };
}