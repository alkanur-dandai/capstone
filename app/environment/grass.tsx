

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

type GrassProps ={
  position?: [ number, number, number]
  scale?: [number, number, number]
}

export function Grass({position = [0, 0,0 ], scale = [1,1,1]}: GrassProps) {
  const { nodes, materials } = useGLTF('/grass.glb') as any
  return (
    <group  dispose={null} position={position} scale={scale}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Node-Mesh'].geometry}
        material={materials.mat9}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Node-Mesh_1'].geometry}
        material={materials.mat10}
      />
     
    </group>
  )
}

useGLTF.preload('/grass.glb')
