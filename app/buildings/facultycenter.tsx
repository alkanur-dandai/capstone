

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
type Props = {
  selected?: boolean
  onSelect?: (id: string) => void
  onClick?: () => void
  visibleFloors?: string[]
}

export function FacultyCenter({ visibleFloors = ["1ST", "2ND", "roof"], selected, onSelect, onClick, ...props }: Props) {
  const { nodes, materials } = useGLTF('/Faculty Center_compressed.glb') as any
  return (
    <group  {...props}
      onClick={(e) => {
        e.stopPropagation()
        onClick?.()
      }}  dispose={null} position={[-6,0,-125 ]} rotation={[0,-Math.PI / 8, 0, ]} >
      <group>
        <group rotation={[-Math.PI / 2, 0, 0]}>
          <group name="Assembly-83" scale={0.001}>
            
  {visibleFloors.includes('2ND') && (

            <group name="2nd-Floor" position={[-7200, -7398, 2738]} scale={25.4}>
              <mesh
                name="3DGeom-1"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-1'].geometry}
                material={materials.cream}
              />
              <mesh
                name="3DGeom-2"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-2'].geometry}
                material={materials.magenta}
              />
              <mesh
                name="3DGeom-3"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-3'].geometry}
                material={materials.assets}
              />
              <mesh
                name="3DGeom-4"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-4'].geometry}
                material={materials.tiless}
              />
              <mesh
                name="3DGeom-5"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-5'].geometry}
                material={nodes['3DGeom-5'].material}
              />
              <group position={[566.929, 291.26, 31.89]} rotation={[Math.PI / 2, -Math.PI / 2, 0]}>
                <mesh
                  name="3DGeom-6"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-6'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-7"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-7'].geometry}
                  material={materials['WB Glazing']}
                />
              </group>
              <group position={[566.929, 399.213, 31.89]} rotation={[Math.PI / 2, -Math.PI / 2, 0]}>
                <mesh
                  name="3DGeom-6_1"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-6_1'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-7_1"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-7_1'].geometry}
                  material={materials['WB Glazing']}
                />
              </group>
              <group position={[0, 263.425, 47.795]} rotation={[Math.PI / 2, Math.PI / 2, 0]}>
                <mesh
                  name="3DGeom-10"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-10'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-11"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-11'].geometry}
                  material={materials['[Translucent Glass Gray]']}
                />
                <mesh
                  name="3DGeom-12"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-12'].geometry}
                  material={materials['WB Glazing']}
                />
              </group>
              <group position={[0, 202.992, 47.795]} rotation={[Math.PI / 2, Math.PI / 2, 0]}>
                <mesh
                  name="3DGeom-10_1"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-10_1'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-11_1"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-11_1'].geometry}
                  material={materials['[Translucent Glass Gray]']}
                />
                <mesh
                  name="3DGeom-12_1"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-12_1'].geometry}
                  material={materials['WB Glazing']}
                />
              </group>
              <group position={[3.937, 361.535, 53.15]} rotation={[Math.PI / 2, -Math.PI / 2, 0]}>
                <mesh
                  name="3DGeom-16"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-16'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-17"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-17'].geometry}
                  material={materials['[Translucent Glass Gray]']}
                />
              </group>
              <group position={[148.504, 403.15, 47.795]} rotation={[Math.PI / 2, 0, 0]}>
                <mesh
                  name="3DGeom-18"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-18'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-19"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-19'].geometry}
                  material={materials['[Translucent Glass Gray]']}
                />
              </group>
              <group position={[259.843, 403.15, 47.795]} rotation={[Math.PI / 2, 0, 0]}>
                <mesh
                  name="3DGeom-18_1"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-18_1'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-19_1"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-19_1'].geometry}
                  material={materials['[Translucent Glass Gray]']}
                />
              </group>
              <group position={[204.173, 401.181, 47.795]} rotation={[Math.PI / 2, 0, 0]}>
                <mesh
                  name="3DGeom-22"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-22'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-23"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-23'].geometry}
                  material={materials['[Translucent Glass Gray]']}
                />
                <mesh
                  name="3DGeom-24"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-24'].geometry}
                  material={nodes['3DGeom-24'].material}
                />
                <mesh
                  name="3DGeom-25"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-25'].geometry}
                  material={materials['[0133_Gray]']}
                />
              </group>
              <group position={[395.177, 0, 84.646]} rotation={[-Math.PI / 2, 0, -Math.PI]}>
                <mesh
                  name="3DGeom-26"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-26'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-27"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-27'].geometry}
                  material={materials['[Translucent Glass Gray]']}
                />
              </group>
              <group position={[323.327, 0, 84.646]} rotation={[-Math.PI / 2, 0, -Math.PI]}>
                <mesh
                  name="3DGeom-28"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-28'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-29"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-29'].geometry}
                  material={materials['[Translucent Glass Gray]']}
                />
              </group>
              <group position={[323.327, 578.583, 84.646]} rotation={[-Math.PI / 2, 0, -Math.PI]}>
                <mesh
                  name="3DGeom-28_1"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-28_1'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-29_1"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-29_1'].geometry}
                  material={materials['[Translucent Glass Gray]']}
                />
              </group>
              <group position={[170.249, 0, 70.492]} rotation={[-Math.PI / 2, 0, -Math.PI]}>
                <mesh
                  name="3DGeom-32"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-32'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-33"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-33'].geometry}
                  material={materials['[Translucent Glass Gray]']}
                />
              </group>
              <group position={[170.249, 578.583, 70.492]} rotation={[-Math.PI / 2, 0, -Math.PI]}>
                <mesh
                  name="3DGeom-32_1"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-32_1'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-33_1"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-33_1'].geometry}
                  material={materials['[Translucent Glass Gray]']}
                />
              </group>
              <group position={[0, 490.866, 70.492]} rotation={[Math.PI / 2, Math.PI / 2, 0]}>
                <mesh
                  name="3DGeom-32_2"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-32_2'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-33_2"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-33_2'].geometry}
                  material={materials['[Translucent Glass Gray]']}
                />
              </group>
              <group position={[0, 91.654, 70.492]} rotation={[Math.PI / 2, Math.PI / 2, 0]}>
                <mesh
                  name="3DGeom-32_3"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-32_3'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-33_3"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-33_3'].geometry}
                  material={materials['[Translucent Glass Gray]']}
                />
              </group>
              <group position={[437.008, 152.795, 53.15]} rotation={[Math.PI / 2, Math.PI / 2, 0]}>
                <mesh
                  name="3DGeom-40"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-40'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-41"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-41'].geometry}
                  material={materials['[Translucent Glass Gray]']}
                />
              </group>
              <group position={[433.071, 291.22, 53.15]} rotation={[Math.PI / 2, Math.PI / 2, 0]}>
                <mesh
                  name="3DGeom-40_1"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-40_1'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-41_1"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-41_1'].geometry}
                  material={materials['[Translucent Glass Gray]']}
                />
              </group>
              <group position={[433.071, 429.685, 53.15]} rotation={[Math.PI / 2, Math.PI / 2, 0]}>
                <mesh
                  name="3DGeom-40_2"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-40_2'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-41_2"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-41_2'].geometry}
                  material={materials['[Translucent Glass Gray]']}
                />
              </group>
              <group position={[300.276, 82.677, 11.811]}>
                <mesh
                  name="3DGeom-46"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-46'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
              </group>
              <group position={[351.378, 91.772, 11.811]}>
                <mesh
                  name="3DGeom-47"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-47'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
              </group>
              <group position={[351.378, 460.157, 11.811]}>
                <mesh
                  name="3DGeom-47_1"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-47_1'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
              </group>
              <group position={[300.276, 499.843, 11.811]}>
                <mesh
                  name="3DGeom-46_1"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-46_1'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
              </group>
              <group position={[503.937, 0, 70.492]} rotation={[-Math.PI / 2, 0, -Math.PI]}>
                <mesh
                  name="3DGeom-50"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-50'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-51"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-51'].geometry}
                  material={materials['[Translucent Glass Gray]']}
                />
              </group>
              <group position={[503.937, 574.646, 70.492]} rotation={[-Math.PI / 2, 0, -Math.PI]}>
                <mesh
                  name="3DGeom-50_1"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-50_1'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-51_1"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-51_1'].geometry}
                  material={materials['[Translucent Glass Gray]']}
                />
              </group>
              <group position={[-89.72, -80.769, -107.795]}>
                <mesh
                  name="3DGeom-54"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-54'].geometry}
                  material={materials['[0132_LightGray]']}
                />
                <mesh
                  name="3DGeom-55"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-55'].geometry}
                  material={nodes['3DGeom-55'].material}
                />
              </group>
              <group position={[395.177, 578.583, 84.646]} rotation={[-Math.PI / 2, 0, -Math.PI]}>
                <mesh
                  name="3DGeom-26_1"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-26_1'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-27_1"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-27_1'].geometry}
                  material={materials['[Translucent Glass Gray]']}
                />
              </group>
              <group
                position={[622.047, 227.219, 5.604]}
                rotation={[Math.PI / 2, Math.PI / 2, 0]}
                scale={0.553}>
                <mesh
                  name="3DGeom-58"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-58'].geometry}
                  material={materials['[0134_DimGray]']}
                />
              </group>
            </group>
  )}
  {visibleFloors.includes('roof') && (

            <group name="roof" position={[-7000, -7198, 6526]} scale={25.4}>
              <mesh
                name="3DGeom-59"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-59'].geometry}
                material={materials.cream}
              />
            </group>
              )}
  {visibleFloors.includes('1ST') && (


            <group name="1st-Floor" position={[-7260, -7398, 0]} scale={25.4}>
              <mesh
                name="3DGeom-60"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-60'].geometry}
                material={materials['white asset']}
              />
              <mesh
                name="3DGeom-61"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-61'].geometry}
                material={materials.magenta}
              />
              <mesh
                name="3DGeom-62"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-62'].geometry}
                material={materials.cream}
              />
              <mesh
                name="3DGeom-63"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-63'].geometry}
                material={materials.tiless}
              />
              <mesh
                name="3DGeom-64"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-64'].geometry}
                material={materials.magenta}
              />
              <group position={[2.362, 363.228, 95.787]} rotation={[Math.PI / 2, Math.PI / 2, 0]}>
                <mesh
                  name="3DGeom-65"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-65'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-66"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-66'].geometry}
                  material={materials['[Translucent Glass Gray]']}
                />
              </group>
              <group position={[567.323, 291.26, 47.795]} rotation={[Math.PI / 2, Math.PI / 2, 0]}>
                <mesh
                  name="3DGeom-22_1"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-22_1'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-23_1"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-23_1'].geometry}
                  material={materials['[Translucent Glass Gray]']}
                />
                <mesh
                  name="3DGeom-24_1"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-24_1'].geometry}
                  material={materials.magenta}
                />
                <mesh
                  name="3DGeom-25_1"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-25_1'].geometry}
                  material={materials['[0133_Gray]']}
                />
              </group>
              <group position={[2.362, 363.228, 47.795]} rotation={[Math.PI / 2, Math.PI / 2, 0]}>
                <mesh
                  name="3DGeom-71"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-71'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-72"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-72'].geometry}
                  material={materials['[Translucent Glass Gray]']}
                />
              </group>
              <group position={[567.323, 219.291, 47.795]} rotation={[Math.PI / 2, Math.PI / 2, 0]}>
                <mesh
                  name="3DGeom-71_1"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-71_1'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-72_1"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-72_1'].geometry}
                  material={materials['[Translucent Glass Gray]']}
                />
              </group>
              <group position={[567.323, 219.291, 95.787]} rotation={[Math.PI / 2, Math.PI / 2, 0]}>
                <mesh
                  name="3DGeom-65_1"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-65_1'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-66_1"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-66_1'].geometry}
                  material={materials['[Translucent Glass Gray]']}
                />
              </group>
              <group position={[567.323, 363.228, 47.795]} rotation={[Math.PI / 2, Math.PI / 2, 0]}>
                <mesh
                  name="3DGeom-71_2"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-71_2'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-72_2"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-72_2'].geometry}
                  material={materials['[Translucent Glass Gray]']}
                />
              </group>
              <group position={[567.323, 363.228, 95.787]} rotation={[Math.PI / 2, Math.PI / 2, 0]}>
                <mesh
                  name="3DGeom-65_2"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-65_2'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-66_2"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-66_2'].geometry}
                  material={materials['[Translucent Glass Gray]']}
                />
              </group>
              <group position={[567.323, 291.26, 95.787]} rotation={[Math.PI / 2, Math.PI / 2, 0]}>
                <mesh
                  name="3DGeom-81"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-81'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-82"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-82'].geometry}
                  material={materials['[Translucent Glass Gray]']}
                />
              </group>
              <group position={[2.362, 291.26, 95.787]} rotation={[Math.PI / 2, Math.PI / 2, 0]}>
                <mesh
                  name="3DGeom-81_1"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-81_1'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-82_1"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-82_1'].geometry}
                  material={materials['[Translucent Glass Gray]']}
                />
              </group>
              <group position={[567.323, 91.654, 71.811]} rotation={[Math.PI / 2, Math.PI / 2, 0]}>
                <mesh
                  name="3DGeom-85"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-85'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-86"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-86'].geometry}
                  material={materials['[Translucent Glass Gray]']}
                />
              </group>
              <group position={[567.323, 490.866, 71.811]} rotation={[Math.PI / 2, Math.PI / 2, 0]}>
                <mesh
                  name="3DGeom-85_1"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-85_1'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-86_1"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-86_1'].geometry}
                  material={materials['[Translucent Glass Gray]']}
                />
              </group>
              <group position={[2.362, 219.291, 47.795]} rotation={[Math.PI / 2, Math.PI / 2, 0]}>
                <mesh
                  name="3DGeom-71_3"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-71_3'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-72_3"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-72_3'].geometry}
                  material={materials['[Translucent Glass Gray]']}
                />
              </group>
              <group position={[2.362, 219.291, 95.787]} rotation={[Math.PI / 2, Math.PI / 2, 0]}>
                <mesh
                  name="3DGeom-65_3"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-65_3'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-66_3"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-66_3'].geometry}
                  material={materials['[Translucent Glass Gray]']}
                />
              </group>
              <group position={[4.331, 291.26, 47.795]} rotation={[Math.PI / 2, -Math.PI / 2, 0]}>
                <mesh
                  name="3DGeom-22_2"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-22_2'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-23_2"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-23_2'].geometry}
                  material={materials['[Translucent Glass Gray]']}
                />
                <mesh
                  name="3DGeom-24_2"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-24_2'].geometry}
                  material={materials.magenta}
                />
                <mesh
                  name="3DGeom-25_2"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-25_2'].geometry}
                  material={materials['[0133_Gray]']}
                />
              </group>
              <group position={[567.323, 91.654, 143.78]} rotation={[Math.PI / 2, Math.PI / 2, 0]}>
                <mesh
                  name="3DGeom-85_2"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-85_2'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-86_2"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-86_2'].geometry}
                  material={materials['[Translucent Glass Gray]']}
                />
              </group>
              <group position={[567.323, 490.866, 143.78]} rotation={[Math.PI / 2, Math.PI / 2, 0]}>
                <mesh
                  name="3DGeom-85_3"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-85_3'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-86_3"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-86_3'].geometry}
                  material={materials['[Translucent Glass Gray]']}
                />
              </group>
              <group position={[190.4, 0, 59.823]} rotation={[-Math.PI / 2, 0, -Math.PI]}>
                <mesh
                  name="3DGeom-101"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-101'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-102"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-102'].geometry}
                  material={materials['[Translucent Glass Gray]']}
                />
              </group>
              <group position={[357.559, 0, 59.823]} rotation={[-Math.PI / 2, 0, -Math.PI]}>
                <mesh
                  name="3DGeom-103"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-103'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-104"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-104'].geometry}
                  material={materials['[Translucent Glass Gray]']}
                />
              </group>
              <group position={[190.4, 574.646, 59.823]} rotation={[-Math.PI / 2, 0, -Math.PI]}>
                <mesh
                  name="3DGeom-101_1"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-101_1'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-102_1"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-102_1'].geometry}
                  material={materials['[Translucent Glass Gray]']}
                />
              </group>
              <group position={[357.559, 574.646, 59.823]} rotation={[-Math.PI / 2, 0, -Math.PI]}>
                <mesh
                  name="3DGeom-103_1"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-103_1'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-104_1"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-104_1'].geometry}
                  material={materials['[Translucent Glass Gray]']}
                />
              </group>
              <group position={[393.543, 128.189, 47.795]} rotation={[-Math.PI / 2, 0, -Math.PI]}>
                <mesh
                  name="3DGeom-22_3"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-22_3'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-23_3"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-23_3'].geometry}
                  material={materials['[Translucent Glass Gray]']}
                />
                <mesh
                  name="3DGeom-24_3"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-24_3'].geometry}
                  material={materials.magenta}
                />
                <mesh
                  name="3DGeom-25_3"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-25_3'].geometry}
                  material={materials['[0133_Gray]']}
                />
              </group>
              <group position={[282.922, 458.268, 47.795]} rotation={[Math.PI / 2, 0, 0]}>
                <mesh
                  name="3DGeom-22_4"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-22_4'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-23_4"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-23_4'].geometry}
                  material={materials['[Translucent Glass Gray]']}
                />
                <mesh
                  name="3DGeom-24_4"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-24_4'].geometry}
                  material={materials.magenta}
                />
                <mesh
                  name="3DGeom-25_4"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-25_4'].geometry}
                  material={materials['[0133_Gray]']}
                />
              </group>
              <group position={[79.916, 582.52, 73.976]} rotation={[Math.PI / 2, 0, 0]}>
                <mesh
                  name="3DGeom-117"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-117'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-118"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-118'].geometry}
                  material={materials['[Translucent Glass Gray]']}
                />
              </group>
              <group position={[2.362, 560.866, 73.976]} rotation={[Math.PI / 2, Math.PI / 2, 0]}>
                <mesh
                  name="3DGeom-117_1"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-117_1'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-118_1"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-118_1'].geometry}
                  material={materials['[Translucent Glass Gray]']}
                />
              </group>
              <group position={[2.362, 471.102, 73.976]} rotation={[Math.PI / 2, Math.PI / 2, 0]}>
                <mesh
                  name="3DGeom-117_2"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-117_2'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-118_2"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-118_2'].geometry}
                  material={materials['[Translucent Glass Gray]']}
                />
              </group>
              <group position={[2.362, 451.378, 73.976]} rotation={[Math.PI / 2, Math.PI / 2, 0]}>
                <mesh
                  name="3DGeom-117_3"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-117_3'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-118_3"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-118_3'].geometry}
                  material={materials['[Translucent Glass Gray]']}
                />
              </group>
              <group position={[2.362, 111.457, 73.976]} rotation={[Math.PI / 2, Math.PI / 2, 0]}>
                <mesh
                  name="3DGeom-117_4"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-117_4'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-118_4"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-118_4'].geometry}
                  material={materials['[Translucent Glass Gray]']}
                />
              </group>
              <group position={[2.362, 131.142, 73.976]} rotation={[Math.PI / 2, Math.PI / 2, 0]}>
                <mesh
                  name="3DGeom-117_5"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-117_5'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-118_5"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-118_5'].geometry}
                  material={materials['[Translucent Glass Gray]']}
                />
              </group>
              <group position={[2.362, 74.055, 73.976]} rotation={[Math.PI / 2, Math.PI / 2, 0]}>
                <mesh
                  name="3DGeom-117_6"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-117_6'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-118_6"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-118_6'].geometry}
                  material={materials['[Translucent Glass Gray]']}
                />
              </group>
              <group position={[2.362, 21.654, 73.976]} rotation={[Math.PI / 2, Math.PI / 2, 0]}>
                <mesh
                  name="3DGeom-117_7"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-117_7'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-118_7"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-118_7'].geometry}
                  material={materials['[Translucent Glass Gray]']}
                />
              </group>
              <group position={[2.362, 150.827, 73.976]} rotation={[Math.PI / 2, Math.PI / 2, 0]}>
                <mesh
                  name="3DGeom-117_8"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-117_8'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-118_8"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-118_8'].geometry}
                  material={materials['[Translucent Glass Gray]']}
                />
              </group>
              <group position={[66.339, 0, 73.976]} rotation={[-Math.PI / 2, 0, -Math.PI]}>
                <mesh
                  name="3DGeom-135"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-135'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-136"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-136'].geometry}
                  material={materials['[Translucent Glass Gray]']}
                />
              </group>
              <group position={[285.827, 185.276, 47.795]} rotation={[Math.PI / 2, 0, 0]}>
                <mesh
                  name="3DGeom-22_5"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-22_5'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-23_5"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-23_5'].geometry}
                  material={materials['[Translucent Glass Gray]']}
                />
                <mesh
                  name="3DGeom-24_5"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-24_5'].geometry}
                  material={materials.magenta}
                />
                <mesh
                  name="3DGeom-25_5"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-25_5'].geometry}
                  material={materials['[0133_Gray]']}
                />
              </group>
              <group position={[285.827, 183.307, 95.787]} rotation={[-Math.PI / 2, 0, -Math.PI]}>
                <mesh
                  name="3DGeom-141"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-141'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-142"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-142'].geometry}
                  material={materials['[Translucent Glass Gray]']}
                />
              </group>
              <group position={[231.85, 183.307, 47.795]} rotation={[-Math.PI / 2, 0, -Math.PI]}>
                <mesh
                  name="3DGeom-143"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-143'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-144"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-144'].geometry}
                  material={materials['[Translucent Glass Gray]']}
                />
              </group>
              <group position={[339.803, 183.307, 47.795]} rotation={[-Math.PI / 2, 0, -Math.PI]}>
                <mesh
                  name="3DGeom-143_1"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-143_1'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-144_1"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-144_1'].geometry}
                  material={materials['[Translucent Glass Gray]']}
                />
              </group>
              <group position={[285.827, 395.276, 95.787]} rotation={[-Math.PI / 2, 0, -Math.PI]}>
                <mesh
                  name="3DGeom-141_1"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-141_1'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-142_1"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-142_1'].geometry}
                  material={materials['[Translucent Glass Gray]']}
                />
              </group>
              <group position={[231.85, 395.276, 47.795]} rotation={[-Math.PI / 2, 0, -Math.PI]}>
                <mesh
                  name="3DGeom-143_2"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-143_2'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-144_2"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-144_2'].geometry}
                  material={materials['[Translucent Glass Gray]']}
                />
              </group>
              <group position={[339.803, 395.276, 47.795]} rotation={[-Math.PI / 2, 0, -Math.PI]}>
                <mesh
                  name="3DGeom-143_3"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-143_3'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-144_3"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-144_3'].geometry}
                  material={materials['[Translucent Glass Gray]']}
                />
              </group>
              <group position={[285.827, 397.244, 47.795]} rotation={[-Math.PI / 2, 0, -Math.PI]}>
                <mesh
                  name="3DGeom-22_6"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-22_6'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-23_6"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-23_6'].geometry}
                  material={materials['[Translucent Glass Gray]']}
                />
                <mesh
                  name="3DGeom-24_6"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-24_6'].geometry}
                  material={materials.magenta}
                />
                <mesh
                  name="3DGeom-25_6"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-25_6'].geometry}
                  material={materials['[0133_Gray]']}
                />
              </group>
              <group position={[46.654, 582.52, 73.976]} rotation={[Math.PI / 2, 0, 0]}>
                <mesh
                  name="3DGeom-117_9"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-117_9'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-118_9"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-118_9'].geometry}
                  material={materials['[Translucent Glass Gray]']}
                />
              </group>
              <group position={[15.236, 89.803, 11.811]}>
                <mesh
                  name="3DGeom-46_2"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-46_2'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
              </group>
              <group position={[60.433, 458.268, 11.811]}>
                <mesh
                  name="3DGeom-47_2"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-47_2'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
              </group>
              <group position={[60.433, 93.74, 11.811]}>
                <mesh
                  name="3DGeom-47_3"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-47_3'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
              </group>
              <group position={[15.236, 488.78, 11.811]}>
                <mesh
                  name="3DGeom-46_3"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-46_3'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
              </group>
              <group position={[616.614, 171.496, 0]}>
                <mesh
                  name="3DGeom-163"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-163'].geometry}
                  material={materials.magenta}
                />
                <mesh
                  name="3DGeom-164"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-164'].geometry}
                  material={materials.cream}
                />
              </group>
              <group position={[616.535, 399.213, 0]}>
                <mesh
                  name="3DGeom-163_1"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-163_1'].geometry}
                  material={materials.magenta}
                />
                <mesh
                  name="3DGeom-164_1"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-164_1'].geometry}
                  material={materials.cream}
                />
              </group>
              <group position={[616.535, 357.323, 0]}>
                <mesh
                  name="3DGeom-163_2"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-163_2'].geometry}
                  material={materials.magenta}
                />
                <mesh
                  name="3DGeom-164_2"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-164_2'].geometry}
                  material={materials.cream}
                />
              </group>
              <group position={[616.535, 213.386, 0]}>
                <mesh
                  name="3DGeom-163_3"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-163_3'].geometry}
                  material={materials.magenta}
                />
                <mesh
                  name="3DGeom-164_3"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-164_3'].geometry}
                  material={materials.cream}
                />
              </group>
              <group position={[1091.05, 502.669, -112.205]} rotation={[0, 0, -Math.PI]}>
                <mesh
                  name="3DGeom-171"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-171'].geometry}
                  material={materials['[White Square Tile]']}
                />
                <mesh
                  name="3DGeom-172"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-172'].geometry}
                  material={materials['[White Square Tile]']}
                />
                <mesh
                  name="3DGeom-173"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-173'].geometry}
                  material={materials['[0132_LightGray]']}
                />
              </group>
              <group position={[-87.362, -71.793, -4.409]}>
                <mesh
                  name="3DGeom-174"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-174'].geometry}
                  material={materials['[White Square Tile]']}
                />
                <mesh
                  name="3DGeom-175"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-175'].geometry}
                  material={materials['[0132_LightGray]']}
                />
              </group>
              <group name="door" position={[154.213, 129.37, 53.15]} rotation={[Math.PI / 2, 0, 0]}>
                <mesh
                  name="3DGeom-176"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-176'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-177"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-177'].geometry}
                  material={materials['[Translucent Glass Gray]']}
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

useGLTF.preload('/Faculty Center_compressed.glb')
