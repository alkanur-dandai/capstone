// import React, { useRef } from 'react'
// import { useGLTF } from '@react-three/drei'
  

// export function LowPolyTree() {
//   const { nodes, materials } = useGLTF('/Tree (5).glb') as any;
//   return (
//     <group  dispose={null} position={[10,0.3,-90]} scale={[2.5,2.5,2.5]}>
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.CommonTree_1_1.geometry}
//         material={materials.Bark_NormalTree}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.CommonTree_1_2.geometry}
//         material={materials.Leaves_NormalTree}
//       />
//     </group>
//   )
// }

// useGLTF.preload('/Tree (5).glb')


import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export function LowPolyTree() {
  const { nodes, materials } = useGLTF('/Tree (5).glb') as any;
  
  // 1. Create a reference for the entire tree group
  const treeRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (treeRef.current) {
      const time = state.clock.getElapsedTime();
      
      // Fast wind speed (multiplied by 4.5) affecting the entire group
      treeRef.current.rotation.x = Math.sin(time * 1.9) * 0.03;
     
    }
  });

  return (
    // 2. Attach the ref to the group container
    <group ref={treeRef} dispose={null} position={[10, 0.3, -90]} scale={[2.5, 2.5, 2.5]}>
      {/* Trunk */}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.CommonTree_1_1.geometry}
        material={materials.Bark_NormalTree}
      />

      {/* Leaves */}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.CommonTree_1_2.geometry}
        material={materials.Leaves_NormalTree}
      />
    </group>
  )
}

useGLTF.preload('/Tree (5).glb')