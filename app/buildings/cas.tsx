
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
type Props = {
  selected?: boolean
  onSelect?: (id: string) => void
  onClick?: () => void
  visibleFloors?: string[]
}


export function CASS({visibleFloors = ["1ST", "2ND", "roof"], selected, onSelect, onClick, ...props }: Props){
  const { nodes, materials } = useGLTF('/CASS.glb') as any;
  return (
    <group {...props}
      onClick={(e) => {
        e.stopPropagation()
        onClick?.()
      }}  dispose={null} position={[-36,0, -14]} rotation={[0, -Math.PI / -2.7, 0, ]} scale={[1,1,1]}>
      <group>
        <group rotation={[-Math.PI / 2, 0, 0]}>
          <group name="Assembly-139" scale={0.001}>
            <group
              name="Active_View"
              position={[55136.551, 40453.383, 28471.533]}
              rotation={[-0.386, 0.714, 2.127]}
              scale={1000}
            />

            {visibleFloors.includes('2ND') && (
            <group name="CASS-2ndfloor" position={[26517.654, 15595.357, 3500]} scale={25.4}>
              <mesh
                name="3DGeom-1"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-1'].geometry}
                material={materials['*43']}
              />
              <mesh
                name="3DGeom-2"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-2'].geometry}
                material={materials['[Polished Concrete Old]']}
              />
              <mesh
                name="3DGeom-3"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-3'].geometry}
                material={materials['[White Square Tile]1']}
              />
              <mesh
                name="3DGeom-4"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-4'].geometry}
                material={materials['[Carrera Marble]']}
              />
              <group position={[500.512, 73.902, 87.953]} rotation={[Math.PI / 2, 0.998, 0]}>
                <mesh
                  name="3DGeom-5"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-5'].geometry}
                  material={materials['[0023_FireBrick]']}
                />
                <mesh
                  name="3DGeom-6"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-6'].geometry}
                  material={materials['[Translucent Glass Gray]']}
                />
              </group>
              <group position={[319.98, 15.748, 85.984]} rotation={[Math.PI / 2, 0, 0]}>
                <mesh
                  name="3DGeom-7"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-7'].geometry}
                  material={materials['[0018_Brown]1']}
                />
                <mesh
                  name="3DGeom-8"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-8'].geometry}
                  material={materials['[Translucent Glass Gray]']}
                />
              </group>
              <group position={[240.531, 275.591, 59.803]} rotation={[Math.PI / 2, 0, 0]}>
                <mesh
                  name="3DGeom-9"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-9'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-10"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-10'].geometry}
                  material={materials['[Translucent Glass Gray]']}
                />
              </group>
              <group position={[376.181, 182.913, 11.811]} rotation={[0, 0, Math.PI / 2]}>
                <mesh
                  name="3DGeom-11"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-11'].geometry}
                  material={materials['[0042_Sienna]']}
                />
                <mesh
                  name="3DGeom-12"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-12'].geometry}
                  material={materials['[0040_Peru]']}
                />
              </group>
              <group position={[431.299, 76.772, 23.622]}>
                <mesh
                  name="3DGeom-13"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-13'].geometry}
                  material={materials['[0040_Peru]']}
                />
              </group>
              <group position={[431.299, 129.921, 23.622]}>
                <mesh
                  name="3DGeom-13_1"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-13_1'].geometry}
                  material={materials['[0040_Peru]']}
                />
              </group>
              <group position={[295.276, 171.26, 11.811]}>
                <mesh
                  name="3DGeom-15"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-15'].geometry}
                  material={materials['[0042_Sienna]']}
                />
                <mesh
                  name="3DGeom-16"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-16'].geometry}
                  material={materials['[0040_Peru]']}
                />
              </group>
              <group
                position={[90.551, 16.451, 59.803]}
                rotation={[0, 0, -Math.PI]}
                scale={[0.469, 0.58, 0.529]}>
                <mesh
                  name="3DGeom-17"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-17'].geometry}
                  material={materials['[Color_007]']}
                />
                <mesh
                  name="3DGeom-18"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-18'].geometry}
                  material={materials['[Translucent_Glass_Gray]11']}
                />
              </group>
              <group
                position={[59.055, 16.451, 59.803]}
                rotation={[0, 0, -Math.PI]}
                scale={[0.469, 0.58, 0.529]}>
                <mesh
                  name="3DGeom-17_1"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-17_1'].geometry}
                  material={materials['[Color_007]']}
                />
                <mesh
                  name="3DGeom-18_1"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-18_1'].geometry}
                  material={materials['[Translucent_Glass_Gray]11']}
                />
              </group>
              <group position={[122.087, 11.811, 59.803]}>
                <mesh
                  name="3DGeom-21"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-21'].geometry}
                  material={materials['WB Frame']}
                />
                <mesh
                  name="3DGeom-22"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-22'].geometry}
                  material={materials['WB Glazing']}
                />
              </group>
              <group position={[151.949, 1133.858, 77.795]} rotation={[-Math.PI / 2, 0, -Math.PI]}>
                <mesh
                  name="3DGeom-23"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-23'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-24"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-24'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
              </group>
              <group position={[31.496, 1003.937, 59.803]}>
                <mesh
                  name="3DGeom-25"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-25'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-26"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-26'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
              </group>
              <group position={[31.496, 834.646, 59.803]}>
                <mesh
                  name="3DGeom-27"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-27'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-28"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-28'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
              </group>
              <group position={[31.496, 496.063, 59.803]}>
                <mesh
                  name="3DGeom-27_1"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-27_1'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-28_1"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-28_1'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
              </group>
              <group position={[31.496, 665.354, 59.803]}>
                <mesh
                  name="3DGeom-27_2"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-27_2'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-28_2"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-28_2'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
              </group>
              <group position={[37.402, 391.732, 77.795]} rotation={[Math.PI / 2, -Math.PI / 2, 0]}>
                <mesh
                  name="3DGeom-33"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-33'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-34"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-34'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
              </group>
              <group position={[37.402, 212.598, 77.795]} rotation={[Math.PI / 2, -Math.PI / 2, 0]}>
                <mesh
                  name="3DGeom-35"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-35'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-36"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-36'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
              </group>
              <group position={[191.693, 1091.85, 59.803]} rotation={[Math.PI / 2, Math.PI / 2, 0]}>
                <mesh
                  name="3DGeom-37"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-37'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-38"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-38'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
              </group>
              <group
                position={[191.693, 1091.85, 118.858]}
                rotation={[Math.PI / 2, Math.PI / 2, 0]}>
                <mesh
                  name="3DGeom-39"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-39'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-40"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-40'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
              </group>
              <group
                position={[191.693, 1036.929, 118.858]}
                rotation={[Math.PI / 2, Math.PI / 2, 0]}>
                <mesh
                  name="3DGeom-41"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-41'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-42"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-42'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
              </group>
              <group position={[191.693, 848.566, 59.803]} rotation={[Math.PI / 2, Math.PI / 2, 0]}>
                <mesh
                  name="3DGeom-37_1"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-37_1'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-38_1"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-38_1'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
              </group>
              <group
                position={[191.693, 848.566, 118.858]}
                rotation={[Math.PI / 2, Math.PI / 2, 0]}>
                <mesh
                  name="3DGeom-39_1"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-39_1'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-40_1"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-40_1'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
              </group>
              <group
                position={[191.693, 917.531, 118.858]}
                rotation={[Math.PI / 2, Math.PI / 2, 0]}>
                <mesh
                  name="3DGeom-47"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-47'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-48"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-48'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
              </group>
              <group position={[191.693, 782.896, 59.803]} rotation={[Math.PI / 2, Math.PI / 2, 0]}>
                <mesh
                  name="3DGeom-37_2"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-37_2'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-38_2"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-38_2'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
              </group>
              <group
                position={[191.693, 782.896, 118.858]}
                rotation={[Math.PI / 2, Math.PI / 2, 0]}>
                <mesh
                  name="3DGeom-39_2"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-39_2'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-40_2"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-40_2'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
              </group>
              <group position={[191.693, 668.661, 59.803]} rotation={[Math.PI / 2, Math.PI / 2, 0]}>
                <mesh
                  name="3DGeom-37_3"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-37_3'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-38_3"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-38_3'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
              </group>
              <group
                position={[191.693, 668.661, 118.858]}
                rotation={[Math.PI / 2, Math.PI / 2, 0]}>
                <mesh
                  name="3DGeom-39_3"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-39_3'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-40_3"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-40_3'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
              </group>
              <group
                position={[191.693, 725.779, 118.858]}
                rotation={[Math.PI / 2, Math.PI / 2, 0]}>
                <mesh
                  name="3DGeom-57"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-57'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-58"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-58'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
              </group>
              <group position={[191.693, 499.37, 59.803]} rotation={[Math.PI / 2, Math.PI / 2, 0]}>
                <mesh
                  name="3DGeom-37_4"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-37_4'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-38_4"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-38_4'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
              </group>
              <group position={[191.693, 499.37, 118.858]} rotation={[Math.PI / 2, Math.PI / 2, 0]}>
                <mesh
                  name="3DGeom-39_4"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-39_4'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-40_4"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-40_4'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
              </group>
              <group position={[191.693, 602.992, 59.803]} rotation={[Math.PI / 2, Math.PI / 2, 0]}>
                <mesh
                  name="3DGeom-37_5"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-37_5'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-38_5"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-38_5'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
              </group>
              <group
                position={[191.693, 602.992, 118.858]}
                rotation={[Math.PI / 2, Math.PI / 2, 0]}>
                <mesh
                  name="3DGeom-39_5"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-39_5'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-40_5"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-40_5'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
              </group>
              <group
                position={[191.693, 551.181, 118.858]}
                rotation={[Math.PI / 2, Math.PI / 2, 0]}>
                <mesh
                  name="3DGeom-67"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-67'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-68"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-68'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
              </group>
              <group position={[191.693, 391.732, 59.803]} rotation={[Math.PI / 2, Math.PI / 2, 0]}>
                <mesh
                  name="3DGeom-69"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-69'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-70"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-70'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
              </group>
              <group
                position={[191.693, 391.732, 118.858]}
                rotation={[Math.PI / 2, Math.PI / 2, 0]}>
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
                  material={materials['[0135_DarkGray]']}
                />
              </group>
              <group position={[57.441, 1122.047, 11.811]}>
                <mesh
                  name="3DGeom-15_1"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-15_1'].geometry}
                  material={materials['[0042_Sienna]']}
                />
                <mesh
                  name="3DGeom-16_1"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-16_1'].geometry}
                  material={materials['[0040_Peru]']}
                />
              </group>
              <group position={[35.433, 1164.651, 59.803]} scale={[0.469, 0.58, 0.529]}>
                <mesh
                  name="3DGeom-17_2"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-17_2'].geometry}
                  material={materials['[Color_007]']}
                />
                <mesh
                  name="3DGeom-18_2"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-18_2'].geometry}
                  material={materials['[Translucent_Glass_Gray]11']}
                />
              </group>
              <group position={[67.867, 1164.651, 59.803]} scale={[0.469, 0.58, 0.529]}>
                <mesh
                  name="3DGeom-17_3"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-17_3'].geometry}
                  material={materials['[Color_007]']}
                />
                <mesh
                  name="3DGeom-18_3"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-18_3'].geometry}
                  material={materials['[Translucent_Glass_Gray]11']}
                />
              </group>
              <group
                position={[117.771, 112.159, 11.811]}
                rotation={[0, 0, -Math.PI / 2]}
                scale={[0.72, 0.67, 0.61]}>
                <mesh
                  name="3DGeom-79"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-79'].geometry}
                  material={materials['[Wood Bamboo]']}
                />
                <mesh
                  name="3DGeom-80"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-80'].geometry}
                  material={materials['[Carpet Loop Pattern]']}
                />
              </group>
              <group
                position={[117.771, 223.774, 11.811]}
                rotation={[0, 0, -Math.PI / 2]}
                scale={[0.72, 0.67, 0.61]}>
                <mesh
                  name="3DGeom-79_1"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-79_1'].geometry}
                  material={materials['[Wood Bamboo]']}
                />
                <mesh
                  name="3DGeom-80_1"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-80_1'].geometry}
                  material={materials['[Carpet Loop Pattern]']}
                />
              </group>
              <group
                position={[176.551, 223.774, 11.811]}
                rotation={[0, 0, -Math.PI / 2]}
                scale={[0.72, 0.67, 0.61]}>
                <mesh
                  name="3DGeom-79_2"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-79_2'].geometry}
                  material={materials['[Wood Bamboo]']}
                />
                <mesh
                  name="3DGeom-80_2"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-80_2'].geometry}
                  material={materials['[Carpet Loop Pattern]']}
                />
              </group>
              <group
                position={[176.551, 113.695, 11.811]}
                rotation={[0, 0, -Math.PI / 2]}
                scale={[0.72, 0.67, 0.61]}>
                <mesh
                  name="3DGeom-79_3"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-79_3'].geometry}
                  material={materials['[Wood Bamboo]']}
                />
                <mesh
                  name="3DGeom-80_3"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-80_3'].geometry}
                  material={materials['[Carpet Loop Pattern]']}
                />
              </group>
              <group
                position={[62.063, 223.774, 11.811]}
                rotation={[0, 0, -Math.PI / 2]}
                scale={[0.72, 0.67, 0.61]}>
                <mesh
                  name="3DGeom-79_4"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-79_4'].geometry}
                  material={materials['[Wood Bamboo]']}
                />
                <mesh
                  name="3DGeom-80_4"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-80_4'].geometry}
                  material={materials['[Carpet Loop Pattern]']}
                />
              </group>
              <group
                position={[62.063, 114.089, 11.811]}
                rotation={[0, 0, -Math.PI / 2]}
                scale={[0.72, 0.67, 0.61]}>
                <mesh
                  name="3DGeom-79_5"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-79_5'].geometry}
                  material={materials['[Wood Bamboo]']}
                />
                <mesh
                  name="3DGeom-80_5"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-80_5'].geometry}
                  material={materials['[Carpet Loop Pattern]']}
                />
              </group>
              <group
                position={[62.063, 420.309, 11.811]}
                rotation={[0, 0, -Math.PI / 2]}
                scale={[0.72, 0.67, 0.61]}>
                <mesh
                  name="3DGeom-79_6"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-79_6'].geometry}
                  material={materials['[Wood Bamboo]']}
                />
                <mesh
                  name="3DGeom-80_6"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-80_6'].geometry}
                  material={materials['[Carpet Loop Pattern]']}
                />
              </group>
              <group
                position={[62.063, 582.081, 11.811]}
                rotation={[0, 0, -Math.PI / 2]}
                scale={[0.72, 0.67, 0.61]}>
                <mesh
                  name="3DGeom-79_7"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-79_7'].geometry}
                  material={materials['[Wood Bamboo]']}
                />
                <mesh
                  name="3DGeom-80_7"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-80_7'].geometry}
                  material={materials['[Carpet Loop Pattern]']}
                />
              </group>
            </group>
            )}
              {visibleFloors.includes('1ST') && (
            <group name="CASS-1stfloor" position={[26517.654, 15595.357, 0]} scale={25.4}>
              <mesh
                name="3DGeom-95"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-95'].geometry}
                material={materials['*43']}
              />
              <mesh
                name="3DGeom-96"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-96'].geometry}
                material={materials['[Polished Concrete Old]']}
              />
              <mesh
                name="3DGeom-97"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-97'].geometry}
                material={materials['[White Square Tile]1']}
              />
              <mesh
                name="3DGeom-98"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-98'].geometry}
                material={materials['[Carrera Marble]']}
              />
              <group position={[31.496, 1003.937, 95.787]}>
                <mesh
                  name="3DGeom-99"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-99'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-100"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-100'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
              </group>
              <group position={[31.496, 1003.937, 59.803]}>
                <mesh
                  name="3DGeom-25_1"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-25_1'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-26_1"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-26_1'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
              </group>
              <group position={[31.496, 834.646, 59.803]}>
                <mesh
                  name="3DGeom-27_3"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-27_3'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-28_3"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-28_3'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
              </group>
              <group position={[31.496, 834.646, 95.787]}>
                <mesh
                  name="3DGeom-105"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-105'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-106"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-106'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
              </group>
              <group position={[33.465, 665.354, 59.803]}>
                <mesh
                  name="3DGeom-27_4"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-27_4'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-28_4"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-28_4'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
              </group>
              <group position={[33.465, 665.354, 95.787]}>
                <mesh
                  name="3DGeom-105_1"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-105_1'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-106_1"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-106_1'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
              </group>
              <group position={[31.496, 496.063, 95.787]}>
                <mesh
                  name="3DGeom-105_2"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-105_2'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-106_2"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-106_2'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
              </group>
              <group position={[31.496, 137.795, 59.803]}>
                <mesh
                  name="3DGeom-113"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-113'].geometry}
                  material={materials['[0129_WhiteSmoke]']}
                />
                <mesh
                  name="3DGeom-114"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-114'].geometry}
                  material={materials['[Mirror 02]']}
                />
              </group>
              <group position={[66.929, 1164.651, 59.803]} scale={[0.469, 0.58, 0.529]}>
                <mesh
                  name="3DGeom-17_4"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-17_4'].geometry}
                  material={materials['[Color_007]']}
                />
                <mesh
                  name="3DGeom-18_4"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-18_4'].geometry}
                  material={materials['[Translucent_Glass_Gray]11']}
                />
              </group>
              <group position={[35.433, 1164.651, 59.803]} scale={[0.469, 0.58, 0.529]}>
                <mesh
                  name="3DGeom-17_5"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-17_5'].geometry}
                  material={materials['[Color_007]']}
                />
                <mesh
                  name="3DGeom-18_5"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-18_5'].geometry}
                  material={materials['[Translucent_Glass_Gray]11']}
                />
              </group>
              <group
                position={[59.055, 16.451, 59.803]}
                rotation={[0, 0, -Math.PI]}
                scale={[0.469, 0.58, 0.529]}>
                <mesh
                  name="3DGeom-17_6"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-17_6'].geometry}
                  material={materials['[Color_007]']}
                />
                <mesh
                  name="3DGeom-18_6"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-18_6'].geometry}
                  material={materials['[Translucent_Glass_Gray]11']}
                />
              </group>
              <group
                position={[90.551, 16.451, 59.803]}
                rotation={[0, 0, -Math.PI]}
                scale={[0.469, 0.58, 0.529]}>
                <mesh
                  name="3DGeom-17_7"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-17_7'].geometry}
                  material={materials['[Color_007]']}
                />
                <mesh
                  name="3DGeom-18_7"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-18_7'].geometry}
                  material={materials['[Translucent_Glass_Gray]11']}
                />
              </group>
              <group position={[114.173, 1129.921, 95.787]}>
                <mesh
                  name="3DGeom-123"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-123'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-124"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-124'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
              </group>
              <group position={[114.173, 1129.921, 59.803]}>
                <mesh
                  name="3DGeom-125"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-125'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-126"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-126'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
              </group>
              <group
                position={[191.693, 1019.715, 77.795]}
                rotation={[Math.PI / 2, Math.PI / 2, 0]}>
                <mesh
                  name="3DGeom-127"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-127'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-128"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-128'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
              </group>
              <group
                position={[191.693, 1099.065, 77.795]}
                rotation={[Math.PI / 2, Math.PI / 2, 0]}>
                <mesh
                  name="3DGeom-127_1"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-127_1'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-128_1"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-128_1'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
              </group>
              <group
                position={[191.693, 1059.39, 103.661]}
                rotation={[Math.PI / 2, Math.PI / 2, 0]}>
                <mesh
                  name="3DGeom-131"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-131'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-132"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-132'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
              </group>
              <group position={[191.693, 900.377, 77.795]} rotation={[Math.PI / 2, Math.PI / 2, 0]}>
                <mesh
                  name="3DGeom-133"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-133'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-134"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-134'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
              </group>
              <group
                position={[191.693, 900.377, 103.661]}
                rotation={[Math.PI / 2, Math.PI / 2, 0]}>
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
                  material={materials['[0135_DarkGray]']}
                />
              </group>
              <group
                position={[191.693, 726.378, 103.661]}
                rotation={[Math.PI / 2, Math.PI / 2, 0]}>
                <mesh
                  name="3DGeom-137"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-137'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-138"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-138'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
              </group>
              <group position={[191.693, 763.504, 53.799]} rotation={[Math.PI / 2, Math.PI / 2, 0]}>
                <mesh
                  name="3DGeom-139"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-139'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-140"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-140'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
              </group>
              <group position={[191.693, 561.024, 77.795]} rotation={[Math.PI / 2, Math.PI / 2, 0]}>
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
                  material={materials['[0135_DarkGray]']}
                />
              </group>
              <group position={[191.693, 367.835, 11.811]}>
                <mesh
                  name="3DGeom-143"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-143'].geometry}
                  material={materials['[0031_PapayaWhip]']}
                />
                <mesh
                  name="3DGeom-144"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-144'].geometry}
                  material={materials['[0043_SaddleBrown]']}
                />
              </group>
              <group position={[500.511, 73.902, 87.953]} rotation={[Math.PI / 2, 0.998, 0]}>
                <mesh
                  name="3DGeom-5_1"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-5_1'].geometry}
                  material={materials['[0023_FireBrick]']}
                />
                <mesh
                  name="3DGeom-6_1"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-6_1'].geometry}
                  material={materials['[Translucent Glass Gray]']}
                />
              </group>
              <group position={[319.98, 15.748, 85.984]} rotation={[Math.PI / 2, 0, 0]}>
                <mesh
                  name="3DGeom-7_1"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-7_1'].geometry}
                  material={materials['[0018_Brown]1']}
                />
                <mesh
                  name="3DGeom-8_1"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-8_1'].geometry}
                  material={materials['[Translucent Glass Gray]']}
                />
              </group>
              <group position={[122.087, 11.811, 59.843]}>
                <mesh
                  name="3DGeom-21_1"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-21_1'].geometry}
                  material={materials['WB Frame']}
                />
                <mesh
                  name="3DGeom-22_1"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-22_1'].geometry}
                  material={materials['WB Glazing']}
                />
              </group>
              <group position={[214.409, 253.583, 11.811]}>
                <mesh
                  name="3DGeom-11_1"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-11_1'].geometry}
                  material={materials['[0042_Sienna]']}
                />
                <mesh
                  name="3DGeom-12_1"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-12_1'].geometry}
                  material={materials['[0040_Peru]']}
                />
              </group>
              <group position={[370.276, 182.913, 11.811]} rotation={[0, 0, Math.PI / 2]}>
                <mesh
                  name="3DGeom-11_2"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-11_2'].geometry}
                  material={materials['[0042_Sienna]']}
                />
                <mesh
                  name="3DGeom-12_2"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-12_2'].geometry}
                  material={materials['[0040_Peru]']}
                />
              </group>
              <group position={[291.339, 171.26, 11.811]}>
                <mesh
                  name="3DGeom-15_2"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-15_2'].geometry}
                  material={materials['[0042_Sienna]']}
                />
                <mesh
                  name="3DGeom-16_2"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-16_2'].geometry}
                  material={materials['[0040_Peru]']}
                />
              </group>
              <group position={[431.299, 76.772, 23.622]}>
                <mesh
                  name="3DGeom-13_2"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-13_2'].geometry}
                  material={materials['[0040_Peru]']}
                />
              </group>
              <group position={[431.299, 129.921, 23.622]}>
                <mesh
                  name="3DGeom-13_3"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-13_3'].geometry}
                  material={materials['[0040_Peru]']}
                />
              </group>
              <group position={[62.441, 1094.488, 11.811]}>
                <mesh
                  name="3DGeom-15_3"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-15_3'].geometry}
                  material={materials['[0042_Sienna]']}
                />
                <mesh
                  name="3DGeom-16_3"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-16_3'].geometry}
                  material={materials['[0040_Peru]']}
                />
              </group>
              <group position={[59.055, 1106.299, 11.811]} rotation={[0, 0, Math.PI / 2]}>
                <mesh
                  name="3DGeom-15_4"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-15_4'].geometry}
                  material={materials['[0042_Sienna]']}
                />
                <mesh
                  name="3DGeom-16_4"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-16_4'].geometry}
                  material={materials['[0040_Peru]']}
                />
              </group>
              <group position={[31.496, 496.063, 59.803]}>
                <mesh
                  name="3DGeom-27_5"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-27_5'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-28_5"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-28_5'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
              </group>
              <group
                position={[88.957, 821.636, 59.803]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={[1.076, 0.871, 1]}>
                <mesh
                  name="3DGeom-165"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-165'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-166"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-166'].geometry}
                  material={materials['[Translucent Glass Gray]']}
                />
              </group>
              <group position={[178.72, 821.636, 59.803]} rotation={[Math.PI / 2, 0, 0]}>
                <mesh
                  name="3DGeom-167"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-167'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-168"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-168'].geometry}
                  material={materials['[Translucent Glass Gray]']}
                />
              </group>
              <group position={[118.484, 821.636, 115.669]} rotation={[Math.PI / 2, 0, 0]}>
                <mesh
                  name="3DGeom-169"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-169'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-170"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-170'].geometry}
                  material={materials['[Translucent Glass Gray]']}
                />
              </group>
              <group
                position={[88.957, 645.669, 59.803]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={[1.076, 0.871, 1]}>
                <mesh
                  name="3DGeom-165_1"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-165_1'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-166_1"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-166_1'].geometry}
                  material={materials['[Translucent Glass Gray]']}
                />
              </group>
              <group position={[118.484, 645.669, 115.669]} rotation={[Math.PI / 2, 0, 0]}>
                <mesh
                  name="3DGeom-169_1"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-169_1'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-170_1"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-170_1'].geometry}
                  material={materials['[Translucent Glass Gray]']}
                />
              </group>
              <group position={[178.72, 645.669, 59.803]} rotation={[Math.PI / 2, 0, 0]}>
                <mesh
                  name="3DGeom-167_1"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-167_1'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-168_1"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-168_1'].geometry}
                  material={materials['[Translucent Glass Gray]']}
                />
              </group>
              <group position={[124.764, 782.212, 59.803]} rotation={[Math.PI / 2, Math.PI / 2, 0]}>
                <mesh
                  name="3DGeom-177"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-177'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-178"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-178'].geometry}
                  material={materials['[Translucent Glass Gray]']}
                />
              </group>
              <group position={[124.764, 679.189, 59.803]} rotation={[Math.PI / 2, Math.PI / 2, 0]}>
                <mesh
                  name="3DGeom-177_1"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-177_1'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-178_1"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-178_1'].geometry}
                  material={materials['[Translucent Glass Gray]']}
                />
              </group>
              <group position={[124.764, 730.7, 113.701]} rotation={[Math.PI / 2, Math.PI / 2, 0]}>
                <mesh
                  name="3DGeom-181"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-181'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-182"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-182'].geometry}
                  material={materials['[Translucent Glass Gray]']}
                />
              </group>
              <group position={[191.693, 1035.492, 11.811]}>
                <mesh
                  name="3DGeom-183"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-183'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-184"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-184'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
              </group>
              <group position={[125.316, 1002.729, 11.811]} scale={[0.72, 0.67, 0.61]}>
                <mesh
                  name="3DGeom-79_8"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-79_8'].geometry}
                  material={materials['[Wood Bamboo]']}
                />
                <mesh
                  name="3DGeom-80_8"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-80_8'].geometry}
                  material={materials['[Carpet Loop Pattern]']}
                />
              </group>
              <group
                position={[75.61, 247.544, 11.811]}
                rotation={[0, 0, -Math.PI / 2]}
                scale={[0.72, 0.67, 0.61]}>
                <mesh
                  name="3DGeom-79_9"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-79_9'].geometry}
                  material={materials['[Wood Bamboo]']}
                />
                <mesh
                  name="3DGeom-80_9"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-80_9'].geometry}
                  material={materials['[Carpet Loop Pattern]']}
                />
              </group>
              <group
                position={[141.24, 247.544, 11.811]}
                rotation={[0, 0, -Math.PI / 2]}
                scale={[0.72, 0.67, 0.61]}>
                <mesh
                  name="3DGeom-79_10"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-79_10'].geometry}
                  material={materials['[Wood Bamboo]']}
                />
                <mesh
                  name="3DGeom-80_10"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-80_10'].geometry}
                  material={materials['[Carpet Loop Pattern]']}
                />
              </group>
              <group position={[45.549, 998.086, 11.811]} scale={[0.85, 0.791, 0.72]}>
                <mesh
                  name="3DGeom-79_11"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-79_11'].geometry}
                  material={materials['[Wood Bamboo]']}
                />
                <mesh
                  name="3DGeom-80_11"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-80_11'].geometry}
                  material={materials['[Carpet Loop Pattern]']}
                />
              </group>
              <group
                position={[108.204, 961.964, 11.811]}
                rotation={[0, 0, Math.PI]}
                scale={[0.72, 0.67, 0.61]}>
                <mesh
                  name="3DGeom-79_12"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-79_12'].geometry}
                  material={materials['[Wood Bamboo]']}
                />
                <mesh
                  name="3DGeom-80_12"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-80_12'].geometry}
                  material={materials['[Carpet Loop Pattern]']}
                />
              </group>
              <group
                position={[184.094, 961.989, 11.811]}
                rotation={[0, 0, Math.PI]}
                scale={[0.72, 0.67, 0.61]}>
                <mesh
                  name="3DGeom-79_13"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-79_13'].geometry}
                  material={materials['[Wood Bamboo]']}
                />
                <mesh
                  name="3DGeom-80_13"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-80_13'].geometry}
                  material={materials['[Carpet Loop Pattern]']}
                />
              </group>
              <group
                position={[184.094, 927.028, 11.811]}
                rotation={[0, 0, Math.PI]}
                scale={[0.72, 0.67, 0.61]}>
                <mesh
                  name="3DGeom-79_14"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-79_14'].geometry}
                  material={materials['[Wood Bamboo]']}
                />
                <mesh
                  name="3DGeom-80_14"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-80_14'].geometry}
                  material={materials['[Carpet Loop Pattern]']}
                />
              </group>
              <group
                position={[108.204, 927.004, 11.811]}
                rotation={[0, 0, Math.PI]}
                scale={[0.72, 0.67, 0.61]}>
                <mesh
                  name="3DGeom-79_15"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-79_15'].geometry}
                  material={materials['[Wood Bamboo]']}
                />
                <mesh
                  name="3DGeom-80_15"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-80_15'].geometry}
                  material={materials['[Carpet Loop Pattern]']}
                />
              </group>
              <group
                position={[108.204, 887.87, 11.811]}
                rotation={[0, 0, Math.PI]}
                scale={[0.72, 0.67, 0.61]}>
                <mesh
                  name="3DGeom-79_16"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-79_16'].geometry}
                  material={materials['[Wood Bamboo]']}
                />
                <mesh
                  name="3DGeom-80_16"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-80_16'].geometry}
                  material={materials['[Carpet Loop Pattern]']}
                />
              </group>
              <group
                position={[184.094, 887.894, 11.811]}
                rotation={[0, 0, Math.PI]}
                scale={[0.72, 0.67, 0.61]}>
                <mesh
                  name="3DGeom-79_17"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-79_17'].geometry}
                  material={materials['[Wood Bamboo]']}
                />
                <mesh
                  name="3DGeom-80_17"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-80_17'].geometry}
                  material={materials['[Carpet Loop Pattern]']}
                />
              </group>
              <group
                position={[178.571, 529.795, 11.811]}
                rotation={[0, 0, Math.PI / 2]}
                scale={[0.72, 0.67, 0.61]}>
                <mesh
                  name="3DGeom-79_18"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-79_18'].geometry}
                  material={materials['[Wood Bamboo]']}
                />
                <mesh
                  name="3DGeom-80_18"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-80_18'].geometry}
                  material={materials['[Carpet Loop Pattern]']}
                />
              </group>
              <group
                position={[186.933, 365.535, 11.811]}
                rotation={[0, 0, -Math.PI]}
                scale={[0.72, 0.67, 0.61]}>
                <mesh
                  name="3DGeom-79_19"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-79_19'].geometry}
                  material={materials['[Wood Bamboo]']}
                />
                <mesh
                  name="3DGeom-80_19"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-80_19'].geometry}
                  material={materials['[Carpet Loop Pattern]']}
                />
              </group>
              <group
                position={[66.687, 604.317, 11.811]}
                rotation={[0, 0, -Math.PI / 2]}
                scale={[0.72, 0.67, 0.61]}>
                <mesh
                  name="3DGeom-79_20"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-79_20'].geometry}
                  material={materials['[Wood Bamboo]']}
                />
                <mesh
                  name="3DGeom-80_20"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-80_20'].geometry}
                  material={materials['[Carpet Loop Pattern]']}
                />
              </group>
              <group position={[110.068, 76.933, 11.811]} scale={[0.72, 0.67, 0.61]}>
                <mesh
                  name="3DGeom-79_21"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-79_21'].geometry}
                  material={materials['[Wood Bamboo]']}
                />
                <mesh
                  name="3DGeom-80_21"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-80_21'].geometry}
                  material={materials['[Carpet Loop Pattern]']}
                />
              </group>
              <group position={[133.812, 417.197, 11.811]} scale={[0.72, 0.67, 0.61]}>
                <mesh
                  name="3DGeom-79_22"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-79_22'].geometry}
                  material={materials['[Wood Bamboo]']}
                />
                <mesh
                  name="3DGeom-80_22"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-80_22'].geometry}
                  material={materials['[Carpet Loop Pattern]']}
                />
              </group>
              <group
                position={[238.505, 106.846, 11.811]}
                rotation={[0, 0, -Math.PI]}
                scale={[0.72, 0.67, 0.61]}>
                <mesh
                  name="3DGeom-79_23"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-79_23'].geometry}
                  material={materials['[Wood Bamboo]']}
                />
                <mesh
                  name="3DGeom-80_23"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-80_23'].geometry}
                  material={materials['[Carpet Loop Pattern]']}
                />
              </group>
              <group
                position={[66.687, 729.553, 11.811]}
                rotation={[0, 0, -Math.PI / 2]}
                scale={[0.72, 0.67, 0.61]}>
                <mesh
                  name="3DGeom-79_24"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-79_24'].geometry}
                  material={materials['[Wood Bamboo]']}
                />
                <mesh
                  name="3DGeom-80_24"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-80_24'].geometry}
                  material={materials['[Carpet Loop Pattern]']}
                />
              </group>
              <group
                position={[66.687, 543.844, 11.811]}
                rotation={[0, 0, -Math.PI / 2]}
                scale={[0.72, 0.67, 0.61]}>
                <mesh
                  name="3DGeom-79_25"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-79_25'].geometry}
                  material={materials['[Wood Bamboo]']}
                />
                <mesh
                  name="3DGeom-80_25"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-80_25'].geometry}
                  material={materials['[Carpet Loop Pattern]']}
                />
              </group>
              <group position={[125.636, 494.352, 11.811]} scale={[0.72, 0.67, 0.61]}>
                <mesh
                  name="3DGeom-79_26"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-79_26'].geometry}
                  material={materials['[Wood Bamboo]']}
                />
                <mesh
                  name="3DGeom-80_26"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-80_26'].geometry}
                  material={materials['[Carpet Loop Pattern]']}
                />
              </group>
              <group
                position={[101.575, 439.564, 11.811]}
                rotation={[0, 0, -Math.PI]}
                scale={[0.72, 0.67, 0.61]}>
                <mesh
                  name="3DGeom-79_27"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-79_27'].geometry}
                  material={materials['[Wood Bamboo]']}
                />
                <mesh
                  name="3DGeom-80_27"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-80_27'].geometry}
                  material={materials['[Carpet Loop Pattern]']}
                />
              </group>
              <group name="ergonomic_chair" position={[-640.775, 391.77, -0.148]}>
                <group name="3DGeom-225" />
                <group name="3DGeom-226" />
              </group>
              <group
                name="ergonomic_chair_1"
                position={[133.395, 74.61, 11.811]}
                rotation={[0, 0, Math.PI]}
                scale={0.5}>
                <mesh
                  name="3DGeom-225_1"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-225_1'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
                <mesh
                  name="3DGeom-226_1"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-226_1'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
              </group>
              <group
                name="ergonomic_chair_2"
                position={[119.793, 502.937, 11.811]}
                rotation={[0, 0, Math.PI / 2]}
                scale={0.5}>
                <mesh
                  name="3DGeom-225_2"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-225_2'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
                <mesh
                  name="3DGeom-226_2"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-226_2'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
              </group>
              <group name="ergonomic_chair_3" position={[52.823, 514.97, 11.811]} scale={0.5}>
                <mesh
                  name="3DGeom-225_3"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-225_3'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
                <mesh
                  name="3DGeom-226_3"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-226_3'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
              </group>
              <group
                name="ergonomic_chair_4"
                position={[64.189, 569.296, 11.811]}
                rotation={[0, 0, Math.PI / 2]}
                scale={0.5}>
                <mesh
                  name="3DGeom-225_4"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-225_4'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
                <mesh
                  name="3DGeom-226_4"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-226_4'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
              </group>
              <group
                name="ergonomic_chair_5"
                position={[70.156, 227.19, 11.811]}
                rotation={[0, 0, Math.PI]}
                scale={0.5}>
                <mesh
                  name="3DGeom-225_5"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-225_5'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
                <mesh
                  name="3DGeom-226_5"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-226_5'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
              </group>
              <group
                name="ergonomic_chair_6"
                position={[136.812, 233.658, 11.811]}
                rotation={[0, 0, Math.PI]}
                scale={0.5}>
                <mesh
                  name="3DGeom-225_6"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-225_6'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
                <mesh
                  name="3DGeom-226_6"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-226_6'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
              </group>
              <group
                name="ergonomic_chair_7"
                position={[67.006, 688.129, 11.811]}
                rotation={[0, 0, Math.PI / 2]}
                scale={0.5}>
                <mesh
                  name="3DGeom-225_7"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-225_7'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
                <mesh
                  name="3DGeom-226_7"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-226_7'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
              </group>
              <group
                name="ergonomic_chair_8"
                position={[213.323, 77.848, 11.811]}
                rotation={[0, 0, Math.PI]}
                scale={0.5}>
                <mesh
                  name="3DGeom-225_8"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-225_8'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
                <mesh
                  name="3DGeom-226_8"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-226_8'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
              </group>
              <group name="ergonomic_chair_9" position={[64.812, 445.885, 11.811]} scale={0.5}>
                <mesh
                  name="3DGeom-225_9"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-225_9'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
                <mesh
                  name="3DGeom-226_9"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-226_9'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
              </group>
              <group name="grill" position={[33.465, 326.772, 59.803]} scale={[5.19, 1, 1.125]}>
                <mesh
                  name="3DGeom-245"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-245'].geometry}
                  material={materials['<auto>1']}
                />
              </group>
              <group name="grill_1" position={[33.465, 369.249, 59.803]} scale={[5.19, 1, 1.125]}>
                <mesh
                  name="3DGeom-246"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-246'].geometry}
                  material={materials['<auto>1']}
                />
              </group>
              <group
                name="grill_2"
                position={[33.465, 411.733, 59.803]}
                scale={[5.19, 1.058, 1.125]}>
                <mesh
                  name="3DGeom-247"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-247'].geometry}
                  material={materials['<auto>1']}
                />
              </group>
              <group
                name="windows"
                position={[31.496, 418.127, 59.803]}
                rotation={[0, 0, Math.PI / 2]}
                scale={[1, 1, 0.646]}>
                <mesh
                  name="3DGeom-248"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-248'].geometry}
                  material={materials['[0049_Beige]']}
                />
                <mesh
                  name="3DGeom-249"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-249'].geometry}
                  material={materials['[Translucent_Glass_Gray]']}
                />
              </group>
              <group
                name="windows_1"
                position={[31.496, 379.56, 59.803]}
                rotation={[0, 0, Math.PI / 2]}
                scale={[1, 1, 0.646]}>
                <mesh
                  name="3DGeom-250"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-250'].geometry}
                  material={materials['[0049_Beige]']}
                />
                <mesh
                  name="3DGeom-251"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-251'].geometry}
                  material={materials['[Translucent_Glass_Gray]']}
                />
              </group>
              <group
                name="windows_2"
                position={[31.496, 326.772, 59.803]}
                rotation={[0, 0, Math.PI / 2]}
                scale={[1, 1, 0.646]}>
                <mesh
                  name="3DGeom-252"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-252'].geometry}
                  material={materials['[0049_Beige]']}
                />
                <mesh
                  name="3DGeom-253"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-253'].geometry}
                  material={materials['[Translucent_Glass_Gray]']}
                />
              </group>
              <group position={[191.693, 702.48, 77.795]} rotation={[Math.PI / 2, Math.PI / 2, 0]}>
                <mesh
                  name="3DGeom-254"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-254'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <group position={[0, 0, 2.953]}>
                  <mesh
                    name="3DGeom-255"
                    castShadow
                    receiveShadow
                    geometry={nodes['3DGeom-255'].geometry}
                    material={materials['[0135_DarkGray]']}
                  />
                </group>
              </group>
              <group
                position={[191.693, 561.024, 103.661]}
                rotation={[Math.PI / 2, Math.PI / 2, 0]}>
                <mesh
                  name="3DGeom-256"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-256'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-257"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-257'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
              </group>
              <group
                name="double_stairs"
                position={[-785.966, 2335.291, 3.937]}
                rotation={[0, 0, -Math.PI / 2]}>
                <mesh
                  name="3DGeom-258"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-258'].geometry}
                  material={materials['[Terrazzo Tile Light]']}
                />
              </group>
            </group>
              )}
               {visibleFloors.includes('roof') && (
            <group name="roof" position={[26517.654, 15895.357, 6449]} scale={25.4}>
              <mesh
                name="3DGeom-259"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-259'].geometry}
                material={materials['*43']}
              />
              <mesh
                name="3DGeom-260"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-260'].geometry}
                material={materials['[0049_Beige]']}
              />
              <mesh
                name="3DGeom-261"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-261'].geometry}
                material={materials['[0022_Maroon]']}
              />
              <group position={[524.885, 715.337, -177.795]}>
                <mesh
                  name="3DGeom-262"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-262'].geometry}
                  material={materials['*43']}
                />
              </group>
              <group name="ap" position={[303.898, 614.173, 21.693]}>
                <mesh
                  name="3DGeom-263"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-263'].geometry}
                  material={materials['*43']}
                />
              </group>
              <group position={[284.213, 1070.866, 59.055]} rotation={[0, 0.39, -Math.PI]}>
                <mesh
                  name="3DGeom-264"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-264'].geometry}
                  material={materials['[0022_Maroon]']}
                />
                <mesh
                  name="3DGeom-265"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-265'].geometry}
                  material={materials['[0020_Red]']}
                />
              </group>
              <group position={[159.823, 1070.866, 110.236]} rotation={[0, -0.39, 0]}>
                <mesh
                  name="3DGeom-266"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-266'].geometry}
                  material={materials['[0022_Maroon]']}
                />
              </group>
            </group>
            )}

            <group position={[35772.652, 31495.357, 300]} scale={25.4}>
              <mesh
                name="3DGeom-267"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-267'].geometry}
                material={materials['*43']}
              />
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/CASS.glb')
