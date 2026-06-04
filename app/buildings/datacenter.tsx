

import React, { useRef } from 'react'
import { Edges, useGLTF } from '@react-three/drei'
type Props = {
  selected?: boolean
  onSelect?: (id: string) => void
  onClick?: () => void
  visibleFloors?: string[]
}

export function DataCenter({ visibleFloors = ["1ST", "2ND", "roof"], selected, onSelect, onClick, ...props }: Props) {
  const { nodes, materials } = useGLTF('/Data-center.glb') as any;
  return (
    <group  {...props}
      onClick={(e) => {
        e.stopPropagation()
        onClick?.()
      }}  dispose={null} position={[-2,-1, -34]} rotation={[0, Math.PI / 1.13, 0, ]} scale={[1.2, 1, 1.2]}>
      <group>
        <group rotation={[-Math.PI / 2, 0, 0]}>
          <group name="Assembly-14" scale={0.001}>
            <group
              name="Active_View"
              position={[-22947.006, 95290.109, 64102.664]}
              rotation={[-1.039, -0.155, -3.051]}
              scale={1000}
            />
             {visibleFloors.includes('roof') && (
            <group
              name="roof"
              position={[4491.244, -4619.032, 4115]}
              rotation={[0, 0, Math.PI / 2]}
              scale={25.4}>
              <mesh
                name="3DGeom-1"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-1'].geometry}
                material={materials.magenta1}>
               <Edges 
              threshold={5} 
              color="white" />
                </mesh>

              
              <mesh
                name="3DGeom-2"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-2'].geometry}
                material={materials.magenta1}>
 <Edges 
              threshold={5} 
              color="white" 
             
            />
                </mesh>
              
             
            </group>
             )}
  {visibleFloors.includes('1ST') && (
            <group
              name="datacenter"
              position={[12069.244, -7561.032, 0]}
              rotation={[0, 0, Math.PI / 2]}
              scale={25.4}>
              <mesh
                name="3DGeom-3"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-3'].geometry}
                material={materials.magenta1}
              />
              <mesh
                name="3DGeom-4"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-4'].geometry}
                material={materials.cream}
              />
              <mesh
                name="3DGeom-5"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-5'].geometry}
                material={materials['[Formica Graystone]']}
              />
              <mesh
                name="3DGeom-6"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-6'].geometry}
                material={materials['[Polished Concrete Old]']}
              />
              <mesh
                name="3DGeom-7"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-7'].geometry}
                material={materials['[Polished Concrete Old]']}
              />
              <mesh
                name="3DGeom-8"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-8'].geometry}
                material={materials['[Blacktop Old 01]']}
              />
              <mesh
                name="3DGeom-9"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-9'].geometry}
                material={materials.Lily_Dark}
              />
              <group position={[236.22, 161.969, 89.173]} rotation={[Math.PI / 2, Math.PI / 2, 0]}>
                <mesh
                  name="3DGeom-10"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-10'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
              </group>
              <group position={[177.165, 90.551, 89.173]} rotation={[Math.PI / 2, 0, 0]}>
                <mesh
                  name="3DGeom-10_1"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-10_1'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
              </group>
              <group
                position={[232.283, 352.047, 101.378]}
                rotation={[Math.PI / 2, -Math.PI / 2, 0]}>
                <mesh
                  name="3DGeom-12"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-12'].geometry}
                  material={materials['[0130_Gainsboro]']}
                />
                <group
                  name="glass"
                  position={[34.016, -41.339, 2.362]}
                  rotation={[-Math.PI / 2, 0, Math.PI / 2]}
                  scale={[1, 1, 1.025]}>
                  <mesh
                    name="3DGeom-13"
                    castShadow
                    receiveShadow
                    geometry={nodes['3DGeom-13'].geometry}
                    material={materials['[Mirror 01]']}
                  />
                  <mesh
                    name="3DGeom-14"
                    castShadow
                    receiveShadow
                    geometry={nodes['3DGeom-14'].geometry}
                    material={materials['[Color M02]']}
                  />
                </group>
              </group>
              <group
                position={[232.283, 728.583, 101.378]}
                rotation={[Math.PI / 2, -Math.PI / 2, 0]}>
                <mesh
                  name="3DGeom-12_1"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-12_1'].geometry}
                  material={materials['[0130_Gainsboro]']}
                />
                <group
                  name="glass_1"
                  position={[34.016, -41.339, 2.362]}
                  rotation={[-Math.PI / 2, 0, Math.PI / 2]}
                  scale={[1, 1, 1.025]}>
                  <mesh
                    name="3DGeom-13_1"
                    castShadow
                    receiveShadow
                    geometry={nodes['3DGeom-13_1'].geometry}
                    material={materials['[Mirror 01]']}
                  />
                  <mesh
                    name="3DGeom-14_1"
                    castShadow
                    receiveShadow
                    geometry={nodes['3DGeom-14_1'].geometry}
                    material={materials['[Color M02]']}
                  />
                </group>
              </group>
              <group position={[152.03, 331.927, 60.039]}>
                <mesh
                  name="3DGeom-18"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-18'].geometry}
                  material={materials['[0018_Brown]']}
                />
                <mesh
                  name="3DGeom-19"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-19'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
              </group>
              <group position={[152.03, 556.297, 60.039]}>
                <mesh
                  name="3DGeom-18_1"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-18_1'].geometry}
                  material={materials['[0018_Brown]']}
                />
                <mesh
                  name="3DGeom-19_1"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-19_1'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
              </group>
              <group
                name="frame"
                position={[177.165, 237.323, 59.843]}
                rotation={[Math.PI / 2, 0, 0]}>
                <mesh
                  name="3DGeom-22"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-22'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
              </group>
              <group position={[-3292.125, -4915.064, 0]}>
                <mesh
                  name="3DGeom-23"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-23'].geometry}
                  material={materials.magenta1}
                />
              </group>
              <group position={[-3292.125, -4915.064, 0]}>
                <mesh
                  name="3DGeom-24"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-24'].geometry}
                  material={materials.magenta1}
                />
              </group>
            </group>
              )}
          </group>
        </group>
      </group>
    </group>
  )
}

