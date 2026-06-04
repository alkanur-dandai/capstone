// "use client";

// import * as THREE from "three";
// import { Clouds, Cloud } from "@react-three/drei";

// interface SceneCloudsProps {
//   opacity?: number;
//   seed?: number;
// }

// export function SceneClouds({
//   opacity = 1,
//   seed = 42,
// }: SceneCloudsProps) {
//   return (
//     <Clouds material={THREE.MeshBasicMaterial}>
//       {/* Main background cloud (optimized) */}
//       <Cloud
//         segments={5}          // 🔥 reduced from 40
//         bounds={[12, 2, 2]}    // slightly smaller volume
//         volume={5}             // 🔥 reduced from 6
//         color="darkgrey"
//         opacity={opacity}
//         fade={8}
//         speed={0.05}           // slower = smoother performance
//         position={[0, 30, -12]}
//       />

//       {/* Secondary cloud (lightweight) */}
//       <Cloud
//         seed={seed}
//         scale={2}
//         segments={5}          // default is heavy → reduce
//         volume={3}             // 🔥 lower density
//         color="darkgrey"
//         opacity={opacity * 1}
//         fade={8}
//         speed={0.03}
//         position={[-8, 30, -8]}
//       />
//     </Clouds>
//   );
// }