import { useState, useEffect, useCallback } from "react";
import { fetchOSRMRoute, type Coords, type RouteGeoJSON } from "../services/routing";

type UseRouteReturn = {
  destinationPin: Coords | null;
  route: RouteGeoJSON | null;
  loading: boolean;
  error: string | null;
  setPin: (coords: Coords) => void;
  clearPin: () => void;
};

export function useRoute(userLocation: Coords | null): UseRouteReturn {
  const [destinationPin, setDestinationPin] = useState<Coords | null>(null);
  const [route, setRoute] = useState<RouteGeoJSON | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Fetch route whenever pin or user location changes
  useEffect(() => {
    if (!destinationPin || !userLocation) return;

    let cancelled = false;

    const load = async () => {
      setLoading(true);
      setError(null);
      try {
        const result = await fetchOSRMRoute(userLocation, destinationPin);
        if (!cancelled) setRoute(result);
      } catch (err) {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : "Route fetch failed");
          setRoute(null);
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    load();

    // Cleanup: if pin changes mid-fetch, ignore stale response
    return () => { cancelled = true; };
  }, [destinationPin, userLocation]);

  const setPin = useCallback((coords: Coords) => {
    setDestinationPin(coords);
    setRoute(null); // clear stale route immediately
    setError(null);
  }, []);

  const clearPin = useCallback(() => {
    setDestinationPin(null);
    setRoute(null);
    setError(null);
  }, []);

  return { destinationPin, route, loading, error, setPin, clearPin };
}