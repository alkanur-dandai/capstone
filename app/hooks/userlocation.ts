// "use client";

// import { useEffect, useState } from "react";

// type Location = {
//   latitude: number;
//   longitude: number;
// };

// export default function useUserLocation() {
//   const [location, setLocation] = useState<Location | null>(null);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     if (!navigator.geolocation) {
//       setError("Geolocation not supported");
//       return;
//     }

//     const watchId = navigator.geolocation.watchPosition(
//       (position) => {
//         setLocation({
//           latitude: position.coords.latitude,
//           longitude: position.coords.longitude,
//         });
//       },
//       (err) => {
//         setError(err.message);
//       },
//       {
//         enableHighAccuracy: true,
//         maximumAge: 1000,
//         timeout: 10000,
//       }
//     );

//     return () => navigator.geolocation.clearWatch(watchId);
//   }, []);

//   return { location, error };
// }