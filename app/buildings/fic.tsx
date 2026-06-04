
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
type Props = {
  selected?: boolean
  onSelect?: (id: string) => void
  onClick?: () => void
  visibleFloors?: string[]
}
export function FIC({ visibleFloors = ["1ST", "2ND", "roof"], selected, onSelect, onClick, ...props }: Props) {
  const { nodes, materials } = useGLTF('/Food Innovation Center_compressed.glb') as any;
  return (
    <group {...props}  onClick={(e) => {
        e.stopPropagation()
        onClick?.()
      }} 
      dispose={null}  position={[125,0,-153]} rotation={[0,Math.PI / 1.14, 0, ]} scale={[0.9,0.9,0.9]}>
      <group>
        <group rotation={[-Math.PI / 2, 0, 0]}>
          <group name="Assembly-343" scale={0.001}>
              {visibleFloors.includes('roof') && (
            <group name="Deck" position={[2927.289, 19493.096, 8776]} scale={25.4}>
              <mesh
                name="3DGeom-1"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-1'].geometry}
                material={materials['paint-white']}
              />
              <mesh
                name="3DGeom-2"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-2'].geometry}
                material={materials['[0019_Crimson]']}
              />
              <group position={[191.024, 33.465, 161.417]}>
                <mesh
                  name="3DGeom-3"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-3'].geometry}
                  material={materials['paint-white']}
                />
                <mesh
                  name="3DGeom-4"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-4'].geometry}
                  material={materials['[0019_Crimson]']}
                />
              </group>
              <group position={[190.945, 766.732, 161.417]}>
                <mesh
                  name="3DGeom-3_1"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-3_1'].geometry}
                  material={materials['paint-white']}
                />
                <mesh
                  name="3DGeom-4_1"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-4_1'].geometry}
                  material={materials['[0019_Crimson]']}
                />
              </group>
              <group position={[547.244, 86.614, -15.236]} rotation={[0, 0, -3.014]}>
                <mesh
                  name="3DGeom-7"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-7'].geometry}
                  material={materials['[0019_Crimson]']}
                />
              </group>
              <group name="apex-Lg" position={[271.654, 39.37, -26.024]}>
                <mesh
                  name="3DGeom-8"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-8'].geometry}
                  material={materials['[0019_Crimson]']}
                />
                <mesh
                  name="3DGeom-9"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-9'].geometry}
                  material={materials['[0019_Crimson]']}
                />
              </group>
            </group>
              )}
                 {visibleFloors.includes('1ST') && (
            <group name="FIC-1stFloor" position={[3927.289, 17368.096, 0]} scale={25.4}>
              <mesh
                name="3DGeom-10"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-10'].geometry}
                material={materials['[Polished Concrete Old]']}
              />
              <mesh
                name="3DGeom-11"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-11'].geometry}
                material={materials['paint-white']}
              />
              <mesh
                name="3DGeom-12"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-12'].geometry}
                material={materials['[White Square Tile]']}
              />
              <mesh
                name="3DGeom-13"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-13'].geometry}
                material={materials['[0133_Gray]']}
              />
              <mesh
                name="3DGeom-14"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-14'].geometry}
                material={materials.magenta}
              />
              <mesh
                name="3DGeom-15"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-15'].geometry}
                material={materials['[White Square Tile]4']}
              />
              <mesh
                name="3DGeom-16"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-16'].geometry}
                material={materials['[Formica Graystone]']}
              />
              <mesh
                name="3DGeom-17"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-17'].geometry}
                material={materials['[White Square Tile]2']}
              />
              <mesh
                name="3DGeom-18"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-18'].geometry}
                material={materials['[0019_Crimson]']}
              />
              <mesh
                name="3DGeom-19"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-19'].geometry}
                material={nodes['3DGeom-19'].material}
              />
              <group position={[425.185, 945.866, 118.484]} rotation={[-Math.PI / 2, 0, -Math.PI]}>
                <mesh
                  name="3DGeom-20"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-20'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <group position={[0, 0, 2.953]}>
                  <mesh
                    name="3DGeom-21"
                    castShadow
                    receiveShadow
                    geometry={nodes['3DGeom-21'].geometry}
                    material={materials['[0135_DarkGray]']}
                  />
                </group>
              </group>
              <group position={[425.185, 174.213, 118.484]} rotation={[-Math.PI / 2, 0, -Math.PI]}>
                <mesh
                  name="3DGeom-20_1"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-20_1'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <group position={[0, 0, 2.953]}>
                  <mesh
                    name="3DGeom-21_1"
                    castShadow
                    receiveShadow
                    geometry={nodes['3DGeom-21_1'].geometry}
                    material={materials['[0135_DarkGray]']}
                  />
                </group>
              </group>
              <group position={[503.031, 693.976, 89.331]} rotation={[Math.PI / 2, Math.PI / 2, 0]}>
                <mesh
                  name="3DGeom-24"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-24'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <group position={[0, 0, 2.953]}>
                  <mesh
                    name="3DGeom-25"
                    castShadow
                    receiveShadow
                    geometry={nodes['3DGeom-25'].geometry}
                    material={materials['[Translucent Glass Gray]']}
                  />
                </group>
              </group>
              <group position={[503.031, 729.961, 89.331]} rotation={[Math.PI / 2, Math.PI / 2, 0]}>
                <mesh
                  name="3DGeom-24_1"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-24_1'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <group position={[0, 0, 2.953]}>
                  <mesh
                    name="3DGeom-25_1"
                    castShadow
                    receiveShadow
                    geometry={nodes['3DGeom-25_1'].geometry}
                    material={materials['[Translucent Glass Gray]']}
                  />
                </group>
              </group>
              <group position={[368.11, 791.693, 89.331]} rotation={[Math.PI / 2, Math.PI / 2, 0]}>
                <mesh
                  name="3DGeom-24_2"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-24_2'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <group position={[0, 0, 2.953]}>
                  <mesh
                    name="3DGeom-25_2"
                    castShadow
                    receiveShadow
                    geometry={nodes['3DGeom-25_2'].geometry}
                    material={materials['[Translucent Glass Gray]']}
                  />
                </group>
              </group>
              <group position={[368.11, 334.291, 89.331]} rotation={[Math.PI / 2, Math.PI / 2, 0]}>
                <mesh
                  name="3DGeom-24_3"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-24_3'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <group position={[0, 0, 2.953]}>
                  <mesh
                    name="3DGeom-25_3"
                    castShadow
                    receiveShadow
                    geometry={nodes['3DGeom-25_3'].geometry}
                    material={materials['[Translucent Glass Gray]']}
                  />
                </group>
              </group>
              <group position={[38.74, 126.969, 89.331]} rotation={[-Math.PI / 2, 0, Math.PI]}>
                <mesh
                  name="3DGeom-24_4"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-24_4'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <group position={[0, 0, 2.953]}>
                  <mesh
                    name="3DGeom-25_4"
                    castShadow
                    receiveShadow
                    geometry={nodes['3DGeom-25_4'].geometry}
                    material={materials['[Translucent Glass Gray]']}
                  />
                </group>
              </group>
              <group position={[74.724, 126.969, 89.331]} rotation={[-Math.PI / 2, 0, Math.PI]}>
                <mesh
                  name="3DGeom-24_5"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-24_5'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <group position={[0, 0, 2.953]}>
                  <mesh
                    name="3DGeom-25_5"
                    castShadow
                    receiveShadow
                    geometry={nodes['3DGeom-25_5'].geometry}
                    material={materials['[Translucent Glass Gray]']}
                  />
                </group>
              </group>
              <group position={[74.724, 993.11, 89.331]} rotation={[-Math.PI / 2, 0, Math.PI]}>
                <mesh
                  name="3DGeom-24_6"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-24_6'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <group position={[0, 0, 2.953]}>
                  <mesh
                    name="3DGeom-25_6"
                    castShadow
                    receiveShadow
                    geometry={nodes['3DGeom-25_6'].geometry}
                    material={materials['[Translucent Glass Gray]']}
                  />
                </group>
              </group>
              <group position={[38.74, 993.11, 89.331]} rotation={[-Math.PI / 2, 0, Math.PI]}>
                <mesh
                  name="3DGeom-24_7"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-24_7'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <group position={[0, 0, 2.953]}>
                  <mesh
                    name="3DGeom-25_7"
                    castShadow
                    receiveShadow
                    geometry={nodes['3DGeom-25_7'].geometry}
                    material={materials['[Translucent Glass Gray]']}
                  />
                </group>
              </group>
              <group position={[1005.63, 993.11, 89.331]} rotation={[-Math.PI / 2, 0, Math.PI]}>
                <mesh
                  name="3DGeom-24_8"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-24_8'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <group position={[0, 0, 2.953]}>
                  <mesh
                    name="3DGeom-25_8"
                    castShadow
                    receiveShadow
                    geometry={nodes['3DGeom-25_8'].geometry}
                    material={materials['[Translucent Glass Gray]']}
                  />
                </group>
              </group>
              <group position={[969.646, 993.11, 89.331]} rotation={[-Math.PI / 2, 0, Math.PI]}>
                <mesh
                  name="3DGeom-24_9"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-24_9'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <group position={[0, 0, 2.953]}>
                  <mesh
                    name="3DGeom-25_9"
                    castShadow
                    receiveShadow
                    geometry={nodes['3DGeom-25_9'].geometry}
                    material={materials['[Translucent Glass Gray]']}
                  />
                </group>
              </group>
              <group position={[1043.307, 993.11, 89.331]} rotation={[-Math.PI / 2, 0, -Math.PI]}>
                <mesh
                  name="3DGeom-44"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-44'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <group position={[0, 0, 2.953]}>
                  <mesh
                    name="3DGeom-45"
                    castShadow
                    receiveShadow
                    geometry={nodes['3DGeom-45'].geometry}
                    material={materials['[0135_DarkGray]']}
                  />
                </group>
              </group>
              <group position={[916.772, 993.11, 89.331]} rotation={[-Math.PI / 2, 0, -Math.PI]}>
                <mesh
                  name="3DGeom-46"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-46'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <group position={[0, 0, 2.953]}>
                  <mesh
                    name="3DGeom-47"
                    castShadow
                    receiveShadow
                    geometry={nodes['3DGeom-47'].geometry}
                    material={materials['[0135_DarkGray]']}
                  />
                </group>
              </group>
              <group position={[972.441, 993.11, 150.354]} rotation={[-Math.PI / 2, 0, -Math.PI]}>
                <mesh
                  name="3DGeom-48"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-48'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <group position={[0, 0, 2.953]}>
                  <mesh
                    name="3DGeom-49"
                    castShadow
                    receiveShadow
                    geometry={nodes['3DGeom-49'].geometry}
                    material={materials['[0135_DarkGray]']}
                  />
                </group>
              </group>
              <group position={[1005.63, 126.969, 89.331]} rotation={[-Math.PI / 2, 0, Math.PI]}>
                <mesh
                  name="3DGeom-24_10"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-24_10'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <group position={[0, 0, 2.953]}>
                  <mesh
                    name="3DGeom-25_10"
                    castShadow
                    receiveShadow
                    geometry={nodes['3DGeom-25_10'].geometry}
                    material={materials['[Translucent Glass Gray]']}
                  />
                </group>
              </group>
              <group position={[969.646, 126.969, 89.331]} rotation={[-Math.PI / 2, 0, Math.PI]}>
                <mesh
                  name="3DGeom-24_11"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-24_11'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <group position={[0, 0, 2.953]}>
                  <mesh
                    name="3DGeom-25_11"
                    castShadow
                    receiveShadow
                    geometry={nodes['3DGeom-25_11'].geometry}
                    material={materials['[Translucent Glass Gray]']}
                  />
                </group>
              </group>
              <group position={[1043.307, 126.969, 89.331]} rotation={[-Math.PI / 2, 0, -Math.PI]}>
                <mesh
                  name="3DGeom-44_1"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-44_1'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <group position={[0, 0, 2.953]}>
                  <mesh
                    name="3DGeom-45_1"
                    castShadow
                    receiveShadow
                    geometry={nodes['3DGeom-45_1'].geometry}
                    material={materials['[0135_DarkGray]']}
                  />
                </group>
              </group>
              <group position={[972.441, 126.969, 150.354]} rotation={[-Math.PI / 2, 0, -Math.PI]}>
                <mesh
                  name="3DGeom-48_1"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-48_1'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <group position={[0, 0, 2.953]}>
                  <mesh
                    name="3DGeom-49_1"
                    castShadow
                    receiveShadow
                    geometry={nodes['3DGeom-49_1'].geometry}
                    material={materials['[0135_DarkGray]']}
                  />
                </group>
              </group>
              <group position={[916.772, 126.969, 89.331]} rotation={[-Math.PI / 2, 0, -Math.PI]}>
                <mesh
                  name="3DGeom-46_1"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-46_1'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <group position={[0, 0, 2.953]}>
                  <mesh
                    name="3DGeom-47_1"
                    castShadow
                    receiveShadow
                    geometry={nodes['3DGeom-47_1'].geometry}
                    material={materials['[0135_DarkGray]']}
                  />
                </group>
              </group>
              <group position={[1169.291, 132.874, 102.362]} rotation={[Math.PI / 2, 0, 0]}>
                <mesh
                  name="3DGeom-60"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-60'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <group position={[0, 0, 2.953]}>
                  <mesh
                    name="3DGeom-61"
                    castShadow
                    receiveShadow
                    geometry={nodes['3DGeom-61'].geometry}
                    material={materials['[0135_DarkGray]']}
                  />
                </group>
              </group>
              <group position={[1169.291, 999.016, 102.362]} rotation={[Math.PI / 2, 0, 0]}>
                <mesh
                  name="3DGeom-60_1"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-60_1'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <group position={[0, 0, 2.953]}>
                  <mesh
                    name="3DGeom-61_1"
                    castShadow
                    receiveShadow
                    geometry={nodes['3DGeom-61_1'].geometry}
                    material={materials['[0135_DarkGray]']}
                  />
                </group>
              </group>
              <group
                position={[1659.449, 504.213, 89.331]}
                rotation={[Math.PI / 2, Math.PI / 2, 0]}>
                <mesh
                  name="3DGeom-24_12"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-24_12'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <group position={[0, 0, 2.953]}>
                  <mesh
                    name="3DGeom-25_12"
                    castShadow
                    receiveShadow
                    geometry={nodes['3DGeom-25_12'].geometry}
                    material={materials['[Translucent Glass Gray]']}
                  />
                </group>
              </group>
              <group
                position={[1659.449, 468.228, 89.331]}
                rotation={[Math.PI / 2, Math.PI / 2, 0]}>
                <mesh
                  name="3DGeom-24_13"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-24_13'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <group position={[0, 0, 2.953]}>
                  <mesh
                    name="3DGeom-25_13"
                    castShadow
                    receiveShadow
                    geometry={nodes['3DGeom-25_13'].geometry}
                    material={materials['[Translucent Glass Gray]']}
                  />
                </group>
              </group>
              <group position={[1659.449, 433.78, 89.331]} rotation={[Math.PI / 2, Math.PI / 2, 0]}>
                <mesh
                  name="3DGeom-68"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-68'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <group position={[0, 0, 2.953]}>
                  <mesh
                    name="3DGeom-69"
                    castShadow
                    receiveShadow
                    geometry={nodes['3DGeom-69'].geometry}
                    material={materials['[0135_DarkGray]']}
                  />
                </group>
              </group>
              <group
                position={[1659.449, 486.22, 150.354]}
                rotation={[Math.PI / 2, Math.PI / 2, 0]}>
                <mesh
                  name="3DGeom-70"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-70'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <group position={[0, 0, 2.953]}>
                  <mesh
                    name="3DGeom-71"
                    castShadow
                    receiveShadow
                    geometry={nodes['3DGeom-71'].geometry}
                    material={materials['[0135_DarkGray]']}
                  />
                </group>
              </group>
              <group
                position={[1659.449, 538.661, 89.331]}
                rotation={[Math.PI / 2, Math.PI / 2, 0]}>
                <mesh
                  name="3DGeom-68_1"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-68_1'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <group position={[0, 0, 2.953]}>
                  <mesh
                    name="3DGeom-69_1"
                    castShadow
                    receiveShadow
                    geometry={nodes['3DGeom-69_1'].geometry}
                    material={materials['[0135_DarkGray]']}
                  />
                </group>
              </group>
              <group
                position={[1659.449, 657.756, 89.331]}
                rotation={[Math.PI / 2, Math.PI / 2, 0]}>
                <mesh
                  name="3DGeom-24_14"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-24_14'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <group position={[0, 0, 2.953]}>
                  <mesh
                    name="3DGeom-25_14"
                    castShadow
                    receiveShadow
                    geometry={nodes['3DGeom-25_14'].geometry}
                    material={materials['[Translucent Glass Gray]']}
                  />
                </group>
              </group>
              <group
                position={[1659.449, 621.772, 89.331]}
                rotation={[Math.PI / 2, Math.PI / 2, 0]}>
                <mesh
                  name="3DGeom-24_15"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-24_15'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <group position={[0, 0, 2.953]}>
                  <mesh
                    name="3DGeom-25_15"
                    castShadow
                    receiveShadow
                    geometry={nodes['3DGeom-25_15'].geometry}
                    material={materials['[Translucent Glass Gray]']}
                  />
                </group>
              </group>
              <group
                position={[1659.449, 639.764, 150.354]}
                rotation={[Math.PI / 2, Math.PI / 2, 0]}>
                <mesh
                  name="3DGeom-70_1"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-70_1'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <group position={[0, 0, 2.953]}>
                  <mesh
                    name="3DGeom-71_1"
                    castShadow
                    receiveShadow
                    geometry={nodes['3DGeom-71_1'].geometry}
                    material={materials['[0135_DarkGray]']}
                  />
                </group>
              </group>
              <group
                position={[1659.449, 692.205, 89.331]}
                rotation={[Math.PI / 2, Math.PI / 2, 0]}>
                <mesh
                  name="3DGeom-68_2"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-68_2'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <group position={[0, 0, 2.953]}>
                  <mesh
                    name="3DGeom-69_2"
                    castShadow
                    receiveShadow
                    geometry={nodes['3DGeom-69_2'].geometry}
                    material={materials['[0135_DarkGray]']}
                  />
                </group>
              </group>
              <group
                position={[1659.449, 587.323, 89.331]}
                rotation={[Math.PI / 2, Math.PI / 2, 0]}>
                <mesh
                  name="3DGeom-68_3"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-68_3'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <group position={[0, 0, 2.953]}>
                  <mesh
                    name="3DGeom-69_3"
                    castShadow
                    receiveShadow
                    geometry={nodes['3DGeom-69_3'].geometry}
                    material={materials['[0135_DarkGray]']}
                  />
                </group>
              </group>
              <group position={[7.126, 659.941, 114.37]} rotation={[Math.PI / 2, -Math.PI / 2, 0]}>
                <mesh
                  name="3DGeom-84"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-84'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <group position={[0, 0, 2.953]}>
                  <mesh
                    name="3DGeom-85"
                    castShadow
                    receiveShadow
                    geometry={nodes['3DGeom-85'].geometry}
                    material={materials['[0135_DarkGray]']}
                  />
                </group>
              </group>
              <group position={[9.843, 466.043, 114.37]} rotation={[Math.PI / 2, -Math.PI / 2, 0]}>
                <mesh
                  name="3DGeom-84_1"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-84_1'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <group position={[0, 0, 2.953]}>
                  <mesh
                    name="3DGeom-85_1"
                    castShadow
                    receiveShadow
                    geometry={nodes['3DGeom-85_1'].geometry}
                    material={materials['[0135_DarkGray]']}
                  />
                </group>
              </group>
              <group position={[9.843, 850.394, 114.37]} rotation={[Math.PI / 2, -Math.PI / 2, 0]}>
                <mesh
                  name="3DGeom-88"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-88'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <group position={[0, 0, 2.953]}>
                  <mesh
                    name="3DGeom-89"
                    castShadow
                    receiveShadow
                    geometry={nodes['3DGeom-89'].geometry}
                    material={materials['[0135_DarkGray]']}
                  />
                </group>
              </group>
              <group position={[9.843, 275.591, 114.37]} rotation={[Math.PI / 2, -Math.PI / 2, 0]}>
                <mesh
                  name="3DGeom-88_1"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-88_1'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <group position={[0, 0, 2.953]}>
                  <mesh
                    name="3DGeom-89_1"
                    castShadow
                    receiveShadow
                    geometry={nodes['3DGeom-89_1'].geometry}
                    material={materials['[0135_DarkGray]']}
                  />
                </group>
              </group>
              <group position={[588.583, 126.969, 147.854]} rotation={[-Math.PI / 2, 0, -Math.PI]}>
                <mesh
                  name="3DGeom-92"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-92'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <group position={[0, 0, 2.953]}>
                  <mesh
                    name="3DGeom-93"
                    castShadow
                    receiveShadow
                    geometry={nodes['3DGeom-93'].geometry}
                    material={materials['[0135_DarkGray]']}
                  />
                </group>
              </group>
              <group position={[244.094, 126.969, 102.343]} rotation={[-Math.PI / 2, 0, -Math.PI]}>
                <mesh
                  name="3DGeom-94"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-94'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <group position={[0, 0, 2.953]}>
                  <mesh
                    name="3DGeom-95"
                    castShadow
                    receiveShadow
                    geometry={nodes['3DGeom-95'].geometry}
                    material={materials['[0135_DarkGray]']}
                  />
                </group>
              </group>
              <group position={[775.591, 132.874, 102.362]} rotation={[Math.PI / 2, 0, 0]}>
                <mesh
                  name="3DGeom-60_2"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-60_2'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <group position={[0, 0, 2.953]}>
                  <mesh
                    name="3DGeom-61_2"
                    castShadow
                    receiveShadow
                    geometry={nodes['3DGeom-61_2'].geometry}
                    material={materials['[0135_DarkGray]']}
                  />
                </group>
              </group>
              <group
                position={[1659.449, 881.299, 102.362]}
                rotation={[Math.PI / 2, Math.PI / 2, 0]}>
                <mesh
                  name="3DGeom-98"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-98'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <group position={[0, 0, 2.953]}>
                  <mesh
                    name="3DGeom-99"
                    castShadow
                    receiveShadow
                    geometry={nodes['3DGeom-99'].geometry}
                    material={materials['[0135_DarkGray]']}
                  />
                </group>
              </group>
              <group
                position={[1659.449, 163.976, 102.362]}
                rotation={[Math.PI / 2, Math.PI / 2, 0]}>
                <mesh
                  name="3DGeom-100"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-100'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <group position={[0, 0, 2.953]}>
                  <mesh
                    name="3DGeom-101"
                    castShadow
                    receiveShadow
                    geometry={nodes['3DGeom-101'].geometry}
                    material={materials['[0135_DarkGray]']}
                  />
                </group>
              </group>
              <group
                position={[1659.449, 350.886, 102.362]}
                rotation={[Math.PI / 2, Math.PI / 2, 0]}>
                <mesh
                  name="3DGeom-102"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-102'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <group position={[0, 0, 2.953]}>
                  <mesh
                    name="3DGeom-103"
                    castShadow
                    receiveShadow
                    geometry={nodes['3DGeom-103'].geometry}
                    material={materials['[0135_DarkGray]']}
                  />
                </group>
              </group>
              <group position={[775.591, 999.016, 102.362]} rotation={[Math.PI / 2, 0, 0]}>
                <mesh
                  name="3DGeom-60_3"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-60_3'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <group position={[0, 0, 2.953]}>
                  <mesh
                    name="3DGeom-61_3"
                    castShadow
                    receiveShadow
                    geometry={nodes['3DGeom-61_3'].geometry}
                    material={materials['[0135_DarkGray]']}
                  />
                </group>
              </group>
              <group position={[588.583, 993.11, 147.392]} rotation={[-Math.PI / 2, 0, -Math.PI]}>
                <mesh
                  name="3DGeom-92_1"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-92_1'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <group position={[0, 0, 2.953]}>
                  <mesh
                    name="3DGeom-93_1"
                    castShadow
                    receiveShadow
                    geometry={nodes['3DGeom-93_1'].geometry}
                    material={materials['[0135_DarkGray]']}
                  />
                </group>
              </group>
              <group position={[244.094, 993.11, 102.343]} rotation={[-Math.PI / 2, 0, -Math.PI]}>
                <mesh
                  name="3DGeom-94_1"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-94_1'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <group position={[0, 0, 2.953]}>
                  <mesh
                    name="3DGeom-95_1"
                    castShadow
                    receiveShadow
                    geometry={nodes['3DGeom-95_1'].geometry}
                    material={materials['[0135_DarkGray]']}
                  />
                </group>
              </group>
              <group name="stair-R" position={[1446.777, 766.258, 41.339]}>
                <mesh
                  name="3DGeom-110"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-110'].geometry}
                  material={nodes['3DGeom-110'].material}
                />
                <mesh
                  name="3DGeom-111"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-111'].geometry}
                  material={materials['[White Square Tile]2']}
                />
                <group position={[15.98, 28.209, 7.992]}>
                  <mesh
                    name="3DGeom-112"
                    castShadow
                    receiveShadow
                    geometry={nodes['3DGeom-112'].geometry}
                    material={materials['[0136_Charcoal]']}
                  />
                </group>
                <group position={[-4576.429, -1860.903, 0.984]}>
                  <mesh
                    name="3DGeom-113"
                    castShadow
                    receiveShadow
                    geometry={nodes['3DGeom-113'].geometry}
                    material={materials['[White Square Tile]2']}
                  />
                </group>
                <group position={[2014.446, -4564.348, 72.047]} rotation={[0, 0, Math.PI / 2]}>
                  <mesh
                    name="3DGeom-114"
                    castShadow
                    receiveShadow
                    geometry={nodes['3DGeom-114'].geometry}
                    material={materials['[White Square Tile]2']}
                  />
                </group>
              </group>
              <group position={[893.727, 987.271, 41.339]} rotation={[0, 0, -Math.PI]}>
                <mesh
                  name="3DGeom-115"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-115'].geometry}
                  material={materials['[White Square Tile]2']}
                />
                <mesh
                  name="3DGeom-116"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-116'].geometry}
                  material={nodes['3DGeom-116'].material}
                />
                <group position={[2014.446, -4706.351, 72.047]} rotation={[0, 0, Math.PI / 2]}>
                  <mesh
                    name="3DGeom-117"
                    castShadow
                    receiveShadow
                    geometry={nodes['3DGeom-117'].geometry}
                    material={materials['[White Square Tile]2']}
                  />
                </group>
                <group position={[4915.012, 2081.645, 0.984]} rotation={[0, 0, -Math.PI]}>
                  <mesh
                    name="3DGeom-118"
                    castShadow
                    receiveShadow
                    geometry={nodes['3DGeom-118'].geometry}
                    material={materials['[White Square Tile]2']}
                  />
                </group>
                <group name="Rail_TA" position={[15.86, 72.307, 7.992]}>
                  <mesh
                    name="3DGeom-119"
                    castShadow
                    receiveShadow
                    geometry={nodes['3DGeom-119'].geometry}
                    material={materials['[0136_Charcoal]']}
                  />
                </group>
              </group>
              <group position={[1444.882, 138.68, 41.339]}>
                <mesh
                  name="3DGeom-115_1"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-115_1'].geometry}
                  material={materials['[White Square Tile]2']}
                />
                <mesh
                  name="3DGeom-116_1"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-116_1'].geometry}
                  material={nodes['3DGeom-116_1'].material}
                />
                <group position={[2014.446, -4706.351, 72.047]} rotation={[0, 0, Math.PI / 2]}>
                  <mesh
                    name="3DGeom-117_1"
                    castShadow
                    receiveShadow
                    geometry={nodes['3DGeom-117_1'].geometry}
                    material={materials['[White Square Tile]2']}
                  />
                </group>
                <group position={[4915.012, 2081.645, 0.984]} rotation={[0, 0, -Math.PI]}>
                  <mesh
                    name="3DGeom-118_1"
                    castShadow
                    receiveShadow
                    geometry={nodes['3DGeom-118_1'].geometry}
                    material={materials['[White Square Tile]2']}
                  />
                </group>
                <group name="Rail_TA_1" position={[15.86, 72.307, 7.992]}>
                  <mesh
                    name="3DGeom-119_1"
                    castShadow
                    receiveShadow
                    geometry={nodes['3DGeom-119_1'].geometry}
                    material={materials['[0136_Charcoal]']}
                  />
                </group>
              </group>
              <group position={[889.764, 359.423, 41.339]} rotation={[0, 0, -Math.PI]}>
                <mesh
                  name="3DGeom-110_1"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-110_1'].geometry}
                  material={nodes['3DGeom-110_1'].material}
                />
                <mesh
                  name="3DGeom-111_1"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-111_1'].geometry}
                  material={materials['[White Square Tile]2']}
                />
                <group position={[15.98, 28.209, 7.992]}>
                  <mesh
                    name="3DGeom-112_1"
                    castShadow
                    receiveShadow
                    geometry={nodes['3DGeom-112_1'].geometry}
                    material={materials['[0136_Charcoal]']}
                  />
                </group>
                <group position={[-4576.429, -1860.903, 0.984]}>
                  <mesh
                    name="3DGeom-113_1"
                    castShadow
                    receiveShadow
                    geometry={nodes['3DGeom-113_1'].geometry}
                    material={materials['[White Square Tile]2']}
                  />
                </group>
                <group position={[2014.446, -4564.348, 72.047]} rotation={[0, 0, Math.PI / 2]}>
                  <mesh
                    name="3DGeom-114_1"
                    castShadow
                    receiveShadow
                    geometry={nodes['3DGeom-114_1'].geometry}
                    material={materials['[White Square Tile]2']}
                  />
                </group>
              </group>
              <group
                position={[1659.449, 962.008, 102.362]}
                rotation={[Math.PI / 2, Math.PI / 2, 0]}>
                <mesh
                  name="3DGeom-100_1"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-100_1'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <group position={[0, 0, 2.953]}>
                  <mesh
                    name="3DGeom-101_1"
                    castShadow
                    receiveShadow
                    geometry={nodes['3DGeom-101_1'].geometry}
                    material={materials['[0135_DarkGray]']}
                  />
                </group>
              </group>
              <group
                position={[1659.449, 244.685, 102.362]}
                rotation={[Math.PI / 2, Math.PI / 2, 0]}>
                <mesh
                  name="3DGeom-98_1"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-98_1'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <group position={[0, 0, 2.953]}>
                  <mesh
                    name="3DGeom-99_1"
                    castShadow
                    receiveShadow
                    geometry={nodes['3DGeom-99_1'].geometry}
                    material={materials['[0135_DarkGray]']}
                  />
                </group>
              </group>
              <group
                position={[1659.449, 775.098, 102.362]}
                rotation={[Math.PI / 2, Math.PI / 2, 0]}>
                <mesh
                  name="3DGeom-102_1"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-102_1'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <group position={[0, 0, 2.953]}>
                  <mesh
                    name="3DGeom-103_1"
                    castShadow
                    receiveShadow
                    geometry={nodes['3DGeom-103_1'].geometry}
                    material={materials['[0135_DarkGray]']}
                  />
                </group>
              </group>
              <group position={[117.883, -8369.886, 155.204]} scale={[1, 0.904, 1]}>
                <mesh
                  name="3DGeom-136"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-136'].geometry}
                  material={materials['[0128_White]']}
                />
                <mesh
                  name="3DGeom-137"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-137'].geometry}
                  material={nodes['3DGeom-137'].material}
                />
                <mesh
                  name="3DGeom-138"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-138'].geometry}
                  material={materials['[0002_MediumVioletRed]']}
                />
              </group>
              <group position={[274.503, 187.111, 42.323]}>
                <group position={[0, 0, 5.906]}>
                  <mesh
                    name="3DGeom-139"
                    castShadow
                    receiveShadow
                    geometry={nodes['3DGeom-139'].geometry}
                    material={materials['[0135_DarkGray]']}
                  />
                  <group>
                    <mesh
                      name="3DGeom-140"
                      castShadow
                      receiveShadow
                      geometry={nodes['3DGeom-140'].geometry}
                      material={materials['[0135_DarkGray]']}
                    />
                  </group>
                </group>
                <group position={[0, 0, 11.811]} rotation={[0, 0, Math.PI / 6]}>
                  <mesh
                    name="3DGeom-139_1"
                    castShadow
                    receiveShadow
                    geometry={nodes['3DGeom-139_1'].geometry}
                    material={materials['[0135_DarkGray]']}
                  />
                  <group>
                    <mesh
                      name="3DGeom-140_1"
                      castShadow
                      receiveShadow
                      geometry={nodes['3DGeom-140_1'].geometry}
                      material={materials['[0135_DarkGray]']}
                    />
                  </group>
                </group>
                <group position={[0, 0, 17.717]} rotation={[0, 0, Math.PI / 3]}>
                  <mesh
                    name="3DGeom-139_2"
                    castShadow
                    receiveShadow
                    geometry={nodes['3DGeom-139_2'].geometry}
                    material={materials['[0135_DarkGray]']}
                  />
                  <group>
                    <mesh
                      name="3DGeom-140_2"
                      castShadow
                      receiveShadow
                      geometry={nodes['3DGeom-140_2'].geometry}
                      material={materials['[0135_DarkGray]']}
                    />
                  </group>
                </group>
                <group position={[0, 0, 23.622]} rotation={[0, 0, Math.PI / 2]}>
                  <mesh
                    name="3DGeom-139_3"
                    castShadow
                    receiveShadow
                    geometry={nodes['3DGeom-139_3'].geometry}
                    material={materials['[0135_DarkGray]']}
                  />
                  <group>
                    <mesh
                      name="3DGeom-140_3"
                      castShadow
                      receiveShadow
                      geometry={nodes['3DGeom-140_3'].geometry}
                      material={materials['[0135_DarkGray]']}
                    />
                  </group>
                </group>
                <group position={[0, 0, 29.528]} rotation={[0, 0, 2.094]}>
                  <mesh
                    name="3DGeom-139_4"
                    castShadow
                    receiveShadow
                    geometry={nodes['3DGeom-139_4'].geometry}
                    material={materials['[0135_DarkGray]']}
                  />
                  <group>
                    <mesh
                      name="3DGeom-140_4"
                      castShadow
                      receiveShadow
                      geometry={nodes['3DGeom-140_4'].geometry}
                      material={materials['[0135_DarkGray]']}
                    />
                  </group>
                </group>
                <group position={[0, 0, 35.433]} rotation={[0, 0, 2.618]}>
                  <mesh
                    name="3DGeom-139_5"
                    castShadow
                    receiveShadow
                    geometry={nodes['3DGeom-139_5'].geometry}
                    material={materials['[0135_DarkGray]']}
                  />
                  <group>
                    <mesh
                      name="3DGeom-140_5"
                      castShadow
                      receiveShadow
                      geometry={nodes['3DGeom-140_5'].geometry}
                      material={materials['[0135_DarkGray]']}
                    />
                  </group>
                </group>
                <group position={[0, 0, 41.339]} rotation={[0, 0, -Math.PI]}>
                  <mesh
                    name="3DGeom-139_6"
                    castShadow
                    receiveShadow
                    geometry={nodes['3DGeom-139_6'].geometry}
                    material={materials['[0135_DarkGray]']}
                  />
                  <group>
                    <mesh
                      name="3DGeom-140_6"
                      castShadow
                      receiveShadow
                      geometry={nodes['3DGeom-140_6'].geometry}
                      material={materials['[0135_DarkGray]']}
                    />
                  </group>
                </group>
                <group position={[0, 0, 47.244]} rotation={[0, 0, -2.618]}>
                  <mesh
                    name="3DGeom-139_7"
                    castShadow
                    receiveShadow
                    geometry={nodes['3DGeom-139_7'].geometry}
                    material={materials['[0135_DarkGray]']}
                  />
                  <group>
                    <mesh
                      name="3DGeom-140_7"
                      castShadow
                      receiveShadow
                      geometry={nodes['3DGeom-140_7'].geometry}
                      material={materials['[0135_DarkGray]']}
                    />
                  </group>
                </group>
                <group position={[0, 0, 53.15]} rotation={[0, 0, -2.094]}>
                  <mesh
                    name="3DGeom-139_8"
                    castShadow
                    receiveShadow
                    geometry={nodes['3DGeom-139_8'].geometry}
                    material={materials['[0135_DarkGray]']}
                  />
                  <group>
                    <mesh
                      name="3DGeom-140_8"
                      castShadow
                      receiveShadow
                      geometry={nodes['3DGeom-140_8'].geometry}
                      material={materials['[0135_DarkGray]']}
                    />
                  </group>
                </group>
                <group position={[0, 0, 59.055]} rotation={[0, 0, -Math.PI / 2]}>
                  <mesh
                    name="3DGeom-139_9"
                    castShadow
                    receiveShadow
                    geometry={nodes['3DGeom-139_9'].geometry}
                    material={materials['[0135_DarkGray]']}
                  />
                  <group>
                    <mesh
                      name="3DGeom-140_9"
                      castShadow
                      receiveShadow
                      geometry={nodes['3DGeom-140_9'].geometry}
                      material={materials['[0135_DarkGray]']}
                    />
                  </group>
                </group>
                <group position={[0, 0, 64.961]} rotation={[0, 0, -Math.PI / 3]}>
                  <mesh
                    name="3DGeom-139_10"
                    castShadow
                    receiveShadow
                    geometry={nodes['3DGeom-139_10'].geometry}
                    material={materials['[0135_DarkGray]']}
                  />
                  <group>
                    <mesh
                      name="3DGeom-140_10"
                      castShadow
                      receiveShadow
                      geometry={nodes['3DGeom-140_10'].geometry}
                      material={materials['[0135_DarkGray]']}
                    />
                  </group>
                </group>
                <group position={[0, 0, 70.866]} rotation={[0, 0, -Math.PI / 6]}>
                  <mesh
                    name="3DGeom-139_11"
                    castShadow
                    receiveShadow
                    geometry={nodes['3DGeom-139_11'].geometry}
                    material={materials['[0135_DarkGray]']}
                  />
                  <group>
                    <mesh
                      name="3DGeom-140_11"
                      castShadow
                      receiveShadow
                      geometry={nodes['3DGeom-140_11'].geometry}
                      material={materials['[0135_DarkGray]']}
                    />
                  </group>
                </group>
                <group position={[0, 0, 76.772]}>
                  <mesh
                    name="3DGeom-139_12"
                    castShadow
                    receiveShadow
                    geometry={nodes['3DGeom-139_12'].geometry}
                    material={materials['[0135_DarkGray]']}
                  />
                  <group>
                    <mesh
                      name="3DGeom-140_12"
                      castShadow
                      receiveShadow
                      geometry={nodes['3DGeom-140_12'].geometry}
                      material={materials['[0135_DarkGray]']}
                    />
                  </group>
                </group>
                <group position={[0, 0, 82.677]} rotation={[0, 0, Math.PI / 6]}>
                  <mesh
                    name="3DGeom-139_13"
                    castShadow
                    receiveShadow
                    geometry={nodes['3DGeom-139_13'].geometry}
                    material={materials['[0135_DarkGray]']}
                  />
                  <group>
                    <mesh
                      name="3DGeom-140_13"
                      castShadow
                      receiveShadow
                      geometry={nodes['3DGeom-140_13'].geometry}
                      material={materials['[0135_DarkGray]']}
                    />
                  </group>
                </group>
                <group position={[0, 0, 88.583]} rotation={[0, 0, Math.PI / 3]}>
                  <mesh
                    name="3DGeom-139_14"
                    castShadow
                    receiveShadow
                    geometry={nodes['3DGeom-139_14'].geometry}
                    material={materials['[0135_DarkGray]']}
                  />
                  <group>
                    <mesh
                      name="3DGeom-140_14"
                      castShadow
                      receiveShadow
                      geometry={nodes['3DGeom-140_14'].geometry}
                      material={materials['[0135_DarkGray]']}
                    />
                  </group>
                </group>
                <group position={[0, 0, 94.488]} rotation={[0, 0, Math.PI / 2]}>
                  <mesh
                    name="3DGeom-139_15"
                    castShadow
                    receiveShadow
                    geometry={nodes['3DGeom-139_15'].geometry}
                    material={materials['[0135_DarkGray]']}
                  />
                  <group>
                    <mesh
                      name="3DGeom-140_15"
                      castShadow
                      receiveShadow
                      geometry={nodes['3DGeom-140_15'].geometry}
                      material={materials['[0135_DarkGray]']}
                    />
                  </group>
                </group>
                <group position={[0, 0, 100.394]} rotation={[0, 0, 2.094]}>
                  <mesh
                    name="3DGeom-139_16"
                    castShadow
                    receiveShadow
                    geometry={nodes['3DGeom-139_16'].geometry}
                    material={materials['[0135_DarkGray]']}
                  />
                  <group>
                    <mesh
                      name="3DGeom-140_16"
                      castShadow
                      receiveShadow
                      geometry={nodes['3DGeom-140_16'].geometry}
                      material={materials['[0135_DarkGray]']}
                    />
                  </group>
                </group>
                <group position={[0, 0, 106.299]} rotation={[0, 0, 2.618]}>
                  <mesh
                    name="3DGeom-139_17"
                    castShadow
                    receiveShadow
                    geometry={nodes['3DGeom-139_17'].geometry}
                    material={materials['[0135_DarkGray]']}
                  />
                  <group>
                    <mesh
                      name="3DGeom-140_17"
                      castShadow
                      receiveShadow
                      geometry={nodes['3DGeom-140_17'].geometry}
                      material={materials['[0135_DarkGray]']}
                    />
                  </group>
                </group>
                <group position={[0, 0, 112.205]} rotation={[0, 0, -Math.PI]}>
                  <mesh
                    name="3DGeom-139_18"
                    castShadow
                    receiveShadow
                    geometry={nodes['3DGeom-139_18'].geometry}
                    material={materials['[0135_DarkGray]']}
                  />
                  <group>
                    <mesh
                      name="3DGeom-140_18"
                      castShadow
                      receiveShadow
                      geometry={nodes['3DGeom-140_18'].geometry}
                      material={materials['[0135_DarkGray]']}
                    />
                  </group>
                </group>
                <group position={[0, 0, 118.11]} rotation={[0, 0, -2.618]}>
                  <mesh
                    name="3DGeom-139_19"
                    castShadow
                    receiveShadow
                    geometry={nodes['3DGeom-139_19'].geometry}
                    material={materials['[0135_DarkGray]']}
                  />
                  <group>
                    <mesh
                      name="3DGeom-140_19"
                      castShadow
                      receiveShadow
                      geometry={nodes['3DGeom-140_19'].geometry}
                      material={materials['[0135_DarkGray]']}
                    />
                  </group>
                </group>
                <group>
                  <mesh
                    name="3DGeom-179"
                    castShadow
                    receiveShadow
                    geometry={nodes['3DGeom-179'].geometry}
                    material={materials['[0135_DarkGray]']}
                  />
                </group>
                <group>
                  <mesh
                    name="3DGeom-180"
                    castShadow
                    receiveShadow
                    geometry={nodes['3DGeom-180'].geometry}
                    material={materials['[0135_DarkGray]']}
                  />
                </group>
                <group>
                  <mesh
                    name="3DGeom-181"
                    castShadow
                    receiveShadow
                    geometry={nodes['3DGeom-181'].geometry}
                    material={materials['[0135_DarkGray]']}
                  />
                </group>
                <group position={[0, 0, 9.843]}>
                  <mesh
                    name="3DGeom-182"
                    castShadow
                    receiveShadow
                    geometry={nodes['3DGeom-182'].geometry}
                    material={materials['[0135_DarkGray]']}
                  />
                </group>
                <group position={[0, 0, -9.843]}>
                  <mesh
                    name="3DGeom-183"
                    castShadow
                    receiveShadow
                    geometry={nodes['3DGeom-183'].geometry}
                    material={materials['[0135_DarkGray]']}
                  />
                </group>
              </group>
              <group position={[274.503, 938.873, 42.323]}>
                <group position={[0, 0, 5.906]}>
                  <mesh
                    name="3DGeom-139_20"
                    castShadow
                    receiveShadow
                    geometry={nodes['3DGeom-139_20'].geometry}
                    material={materials['[0135_DarkGray]']}
                  />
                  <group>
                    <mesh
                      name="3DGeom-140_20"
                      castShadow
                      receiveShadow
                      geometry={nodes['3DGeom-140_20'].geometry}
                      material={materials['[0135_DarkGray]']}
                    />
                  </group>
                </group>
                <group position={[0, 0, 11.811]} rotation={[0, 0, Math.PI / 6]}>
                  <mesh
                    name="3DGeom-139_21"
                    castShadow
                    receiveShadow
                    geometry={nodes['3DGeom-139_21'].geometry}
                    material={materials['[0135_DarkGray]']}
                  />
                  <group>
                    <mesh
                      name="3DGeom-140_21"
                      castShadow
                      receiveShadow
                      geometry={nodes['3DGeom-140_21'].geometry}
                      material={materials['[0135_DarkGray]']}
                    />
                  </group>
                </group>
                <group position={[0, 0, 17.717]} rotation={[0, 0, Math.PI / 3]}>
                  <mesh
                    name="3DGeom-139_22"
                    castShadow
                    receiveShadow
                    geometry={nodes['3DGeom-139_22'].geometry}
                    material={materials['[0135_DarkGray]']}
                  />
                  <group>
                    <mesh
                      name="3DGeom-140_22"
                      castShadow
                      receiveShadow
                      geometry={nodes['3DGeom-140_22'].geometry}
                      material={materials['[0135_DarkGray]']}
                    />
                  </group>
                </group>
                <group position={[0, 0, 23.622]} rotation={[0, 0, Math.PI / 2]}>
                  <mesh
                    name="3DGeom-139_23"
                    castShadow
                    receiveShadow
                    geometry={nodes['3DGeom-139_23'].geometry}
                    material={materials['[0135_DarkGray]']}
                  />
                  <group>
                    <mesh
                      name="3DGeom-140_23"
                      castShadow
                      receiveShadow
                      geometry={nodes['3DGeom-140_23'].geometry}
                      material={materials['[0135_DarkGray]']}
                    />
                  </group>
                </group>
                <group position={[0, 0, 29.528]} rotation={[0, 0, 2.094]}>
                  <mesh
                    name="3DGeom-139_24"
                    castShadow
                    receiveShadow
                    geometry={nodes['3DGeom-139_24'].geometry}
                    material={materials['[0135_DarkGray]']}
                  />
                  <group>
                    <mesh
                      name="3DGeom-140_24"
                      castShadow
                      receiveShadow
                      geometry={nodes['3DGeom-140_24'].geometry}
                      material={materials['[0135_DarkGray]']}
                    />
                  </group>
                </group>
                <group position={[0, 0, 35.433]} rotation={[0, 0, 2.618]}>
                  <mesh
                    name="3DGeom-139_25"
                    castShadow
                    receiveShadow
                    geometry={nodes['3DGeom-139_25'].geometry}
                    material={materials['[0135_DarkGray]']}
                  />
                  <group>
                    <mesh
                      name="3DGeom-140_25"
                      castShadow
                      receiveShadow
                      geometry={nodes['3DGeom-140_25'].geometry}
                      material={materials['[0135_DarkGray]']}
                    />
                  </group>
                </group>
                <group position={[0, 0, 41.339]} rotation={[0, 0, -Math.PI]}>
                  <mesh
                    name="3DGeom-139_26"
                    castShadow
                    receiveShadow
                    geometry={nodes['3DGeom-139_26'].geometry}
                    material={materials['[0135_DarkGray]']}
                  />
                  <group>
                    <mesh
                      name="3DGeom-140_26"
                      castShadow
                      receiveShadow
                      geometry={nodes['3DGeom-140_26'].geometry}
                      material={materials['[0135_DarkGray]']}
                    />
                  </group>
                </group>
                <group position={[0, 0, 47.244]} rotation={[0, 0, -2.618]}>
                  <mesh
                    name="3DGeom-139_27"
                    castShadow
                    receiveShadow
                    geometry={nodes['3DGeom-139_27'].geometry}
                    material={materials['[0135_DarkGray]']}
                  />
                  <group>
                    <mesh
                      name="3DGeom-140_27"
                      castShadow
                      receiveShadow
                      geometry={nodes['3DGeom-140_27'].geometry}
                      material={materials['[0135_DarkGray]']}
                    />
                  </group>
                </group>
                <group position={[0, 0, 53.15]} rotation={[0, 0, -2.094]}>
                  <mesh
                    name="3DGeom-139_28"
                    castShadow
                    receiveShadow
                    geometry={nodes['3DGeom-139_28'].geometry}
                    material={materials['[0135_DarkGray]']}
                  />
                  <group>
                    <mesh
                      name="3DGeom-140_28"
                      castShadow
                      receiveShadow
                      geometry={nodes['3DGeom-140_28'].geometry}
                      material={materials['[0135_DarkGray]']}
                    />
                  </group>
                </group>
                <group position={[0, 0, 59.055]} rotation={[0, 0, -Math.PI / 2]}>
                  <mesh
                    name="3DGeom-139_29"
                    castShadow
                    receiveShadow
                    geometry={nodes['3DGeom-139_29'].geometry}
                    material={materials['[0135_DarkGray]']}
                  />
                  <group>
                    <mesh
                      name="3DGeom-140_29"
                      castShadow
                      receiveShadow
                      geometry={nodes['3DGeom-140_29'].geometry}
                      material={materials['[0135_DarkGray]']}
                    />
                  </group>
                </group>
                <group position={[0, 0, 64.961]} rotation={[0, 0, -Math.PI / 3]}>
                  <mesh
                    name="3DGeom-139_30"
                    castShadow
                    receiveShadow
                    geometry={nodes['3DGeom-139_30'].geometry}
                    material={materials['[0135_DarkGray]']}
                  />
                  <group>
                    <mesh
                      name="3DGeom-140_30"
                      castShadow
                      receiveShadow
                      geometry={nodes['3DGeom-140_30'].geometry}
                      material={materials['[0135_DarkGray]']}
                    />
                  </group>
                </group>
                <group position={[0, 0, 70.866]} rotation={[0, 0, -Math.PI / 6]}>
                  <mesh
                    name="3DGeom-139_31"
                    castShadow
                    receiveShadow
                    geometry={nodes['3DGeom-139_31'].geometry}
                    material={materials['[0135_DarkGray]']}
                  />
                  <group>
                    <mesh
                      name="3DGeom-140_31"
                      castShadow
                      receiveShadow
                      geometry={nodes['3DGeom-140_31'].geometry}
                      material={materials['[0135_DarkGray]']}
                    />
                  </group>
                </group>
                <group position={[0, 0, 76.772]}>
                  <mesh
                    name="3DGeom-139_32"
                    castShadow
                    receiveShadow
                    geometry={nodes['3DGeom-139_32'].geometry}
                    material={materials['[0135_DarkGray]']}
                  />
                  <group>
                    <mesh
                      name="3DGeom-140_32"
                      castShadow
                      receiveShadow
                      geometry={nodes['3DGeom-140_32'].geometry}
                      material={materials['[0135_DarkGray]']}
                    />
                  </group>
                </group>
                <group position={[0, 0, 82.677]} rotation={[0, 0, Math.PI / 6]}>
                  <mesh
                    name="3DGeom-139_33"
                    castShadow
                    receiveShadow
                    geometry={nodes['3DGeom-139_33'].geometry}
                    material={materials['[0135_DarkGray]']}
                  />
                  <group>
                    <mesh
                      name="3DGeom-140_33"
                      castShadow
                      receiveShadow
                      geometry={nodes['3DGeom-140_33'].geometry}
                      material={materials['[0135_DarkGray]']}
                    />
                  </group>
                </group>
                <group position={[0, 0, 88.583]} rotation={[0, 0, Math.PI / 3]}>
                  <mesh
                    name="3DGeom-139_34"
                    castShadow
                    receiveShadow
                    geometry={nodes['3DGeom-139_34'].geometry}
                    material={materials['[0135_DarkGray]']}
                  />
                  <group>
                    <mesh
                      name="3DGeom-140_34"
                      castShadow
                      receiveShadow
                      geometry={nodes['3DGeom-140_34'].geometry}
                      material={materials['[0135_DarkGray]']}
                    />
                  </group>
                </group>
                <group position={[0, 0, 94.488]} rotation={[0, 0, Math.PI / 2]}>
                  <mesh
                    name="3DGeom-139_35"
                    castShadow
                    receiveShadow
                    geometry={nodes['3DGeom-139_35'].geometry}
                    material={materials['[0135_DarkGray]']}
                  />
                  <group>
                    <mesh
                      name="3DGeom-140_35"
                      castShadow
                      receiveShadow
                      geometry={nodes['3DGeom-140_35'].geometry}
                      material={materials['[0135_DarkGray]']}
                    />
                  </group>
                </group>
                <group position={[0, 0, 100.394]} rotation={[0, 0, 2.094]}>
                  <mesh
                    name="3DGeom-139_36"
                    castShadow
                    receiveShadow
                    geometry={nodes['3DGeom-139_36'].geometry}
                    material={materials['[0135_DarkGray]']}
                  />
                  <group>
                    <mesh
                      name="3DGeom-140_36"
                      castShadow
                      receiveShadow
                      geometry={nodes['3DGeom-140_36'].geometry}
                      material={materials['[0135_DarkGray]']}
                    />
                  </group>
                </group>
                <group position={[0, 0, 106.299]} rotation={[0, 0, 2.618]}>
                  <mesh
                    name="3DGeom-139_37"
                    castShadow
                    receiveShadow
                    geometry={nodes['3DGeom-139_37'].geometry}
                    material={materials['[0135_DarkGray]']}
                  />
                  <group>
                    <mesh
                      name="3DGeom-140_37"
                      castShadow
                      receiveShadow
                      geometry={nodes['3DGeom-140_37'].geometry}
                      material={materials['[0135_DarkGray]']}
                    />
                  </group>
                </group>
                <group position={[0, 0, 112.205]} rotation={[0, 0, -Math.PI]}>
                  <mesh
                    name="3DGeom-139_38"
                    castShadow
                    receiveShadow
                    geometry={nodes['3DGeom-139_38'].geometry}
                    material={materials['[0135_DarkGray]']}
                  />
                  <group>
                    <mesh
                      name="3DGeom-140_38"
                      castShadow
                      receiveShadow
                      geometry={nodes['3DGeom-140_38'].geometry}
                      material={materials['[0135_DarkGray]']}
                    />
                  </group>
                </group>
                <group position={[0, 0, 118.11]} rotation={[0, 0, -2.618]}>
                  <mesh
                    name="3DGeom-139_39"
                    castShadow
                    receiveShadow
                    geometry={nodes['3DGeom-139_39'].geometry}
                    material={materials['[0135_DarkGray]']}
                  />
                  <group>
                    <mesh
                      name="3DGeom-140_39"
                      castShadow
                      receiveShadow
                      geometry={nodes['3DGeom-140_39'].geometry}
                      material={materials['[0135_DarkGray]']}
                    />
                  </group>
                </group>
                <group>
                  <mesh
                    name="3DGeom-224"
                    castShadow
                    receiveShadow
                    geometry={nodes['3DGeom-224'].geometry}
                    material={materials['[0135_DarkGray]']}
                  />
                </group>
                <group>
                  <mesh
                    name="3DGeom-225"
                    castShadow
                    receiveShadow
                    geometry={nodes['3DGeom-225'].geometry}
                    material={materials['[0135_DarkGray]']}
                  />
                </group>
                <group>
                  <mesh
                    name="3DGeom-226"
                    castShadow
                    receiveShadow
                    geometry={nodes['3DGeom-226'].geometry}
                    material={materials['[0135_DarkGray]']}
                  />
                </group>
                <group position={[0, 0, 9.843]}>
                  <mesh
                    name="3DGeom-227"
                    castShadow
                    receiveShadow
                    geometry={nodes['3DGeom-227'].geometry}
                    material={materials['[0135_DarkGray]']}
                  />
                </group>
                <group position={[0, 0, -9.843]}>
                  <mesh
                    name="3DGeom-228"
                    castShadow
                    receiveShadow
                    geometry={nodes['3DGeom-228'].geometry}
                    material={materials['[0135_DarkGray]']}
                  />
                </group>
              </group>
              <group position={[59.806, 1772.963, 0]} rotation={[0, 0, Math.PI]}>
                <mesh
                  name="3DGeom-229"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-229'].geometry}
                  material={materials['[0132_LightGray]']}
                />
              </group>
              <group position={[-171.911, 480.749, 0]}>
                <mesh
                  name="3DGeom-230"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-230'].geometry}
                  material={materials['[0132_LightGray]']}
                />
              </group>
              <group position={[2723.842, 940.727, 0]} rotation={[0, 0, -Math.PI]}>
                <mesh
                  name="3DGeom-231"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-231'].geometry}
                  material={materials['[0132_LightGray]']}
                />
              </group>
              <group position={[-51.894, -648.93, 0]}>
                <mesh
                  name="3DGeom-232"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-232'].geometry}
                  material={materials['[0132_LightGray]']}
                />
              </group>
              <group position={[-1723.919, -789.222, 0.282]}>
                <mesh
                  name="3DGeom-233"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-233'].geometry}
                  material={materials['[0132_LightGray]']}
                />
              </group>
              <group position={[-171.904, -637.365, 0]}>
                <mesh
                  name="3DGeom-234"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-234'].geometry}
                  material={materials['[0132_LightGray]']}
                />
              </group>
              <group position={[-200.941, -1953.701, 15.127]}>
                <mesh
                  name="3DGeom-235"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-235'].geometry}
                  material={materials['[0132_LightGray]']}
                />
              </group>
              <group position={[-778.987, -789.071, 0.084]}>
                <mesh
                  name="3DGeom-236"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-236'].geometry}
                  material={materials['[0132_LightGray]']}
                />
              </group>
              <group
                name="tri-gl"
                position={[1562.992, 126.969, 102.362]}
                rotation={[-Math.PI / 2, 0, -Math.PI]}>
                <mesh
                  name="3DGeom-237"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-237'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <group position={[0, 0, 2.953]}>
                  <mesh
                    name="3DGeom-238"
                    castShadow
                    receiveShadow
                    geometry={nodes['3DGeom-238'].geometry}
                    material={materials['[0135_DarkGray]']}
                  />
                </group>
              </group>
              <group
                name="tri-gl_1"
                position={[1562.992, 993.11, 102.362]}
                rotation={[-Math.PI / 2, 0, -Math.PI]}>
                <mesh
                  name="3DGeom-239"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-239'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <group position={[0, 0, 2.953]}>
                  <mesh
                    name="3DGeom-240"
                    castShadow
                    receiveShadow
                    geometry={nodes['3DGeom-240'].geometry}
                    material={materials['[0135_DarkGray]']}
                  />
                </group>
              </group>
              <group position={[2763.212, 1915.052, 0]} rotation={[0, 0, -Math.PI]}>
                <mesh
                  name="3DGeom-241"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-241'].geometry}
                  material={materials['[0132_LightGray]']}
                />
              </group>
              <group position={[-183.849, -834.999, 0]}>
                <mesh
                  name="3DGeom-242"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-242'].geometry}
                  material={materials['[0132_LightGray]']}
                />
              </group>
              <group position={[-778.96, 185.193, 0]}>
                <mesh
                  name="3DGeom-243"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-243'].geometry}
                  material={materials['[0132_LightGray]']}
                />
              </group>
              <group position={[-1723.842, 185.158, 0]}>
                <mesh
                  name="3DGeom-244"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-244'].geometry}
                  material={materials['[0132_LightGray]']}
                />
              </group>
              <group name="small_apex" position={[1669.291, 402.473, 178.792]}>
                <mesh
                  name="3DGeom-245"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-245'].geometry}
                  material={materials['[0019_Crimson]']}
                />
              </group>
            </group>
                 )}
              {visibleFloors.includes('2ND') && (
            <group name="FIC-2nd" position={[3927.289, 20493.096, 4550]} scale={25.4}>
              <mesh
                name="3DGeom-246"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-246'].geometry}
                material={materials['paint-white']}
              />
              <mesh
                name="3DGeom-247"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-247'].geometry}
                material={materials['[Polished Concrete Old]']}
              />
              <mesh
                name="3DGeom-248"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-248'].geometry}
                material={materials['[White Square Tile]4']}
              />
              <mesh
                name="3DGeom-249"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-249'].geometry}
                material={materials.magenta}
              />
              <group position={[1667.323, 321.005, 320.306]}>
                <mesh
                  name="3DGeom-250"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-250'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-251"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-251'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
              </group>
              <group position={[1669.291, 558.916, 320.306]} rotation={[0, 0, -Math.PI]}>
                <mesh
                  name="3DGeom-250_1"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-250_1'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-251_1"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-251_1'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
              </group>
              <group position={[1666.181, 154.043, 221.88]}>
                <mesh
                  name="3DGeom-254"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-254'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-255"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-255'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
              </group>
              <group position={[1669.291, 725.878, 221.88]} rotation={[0, 0, -Math.PI]}>
                <mesh
                  name="3DGeom-254_1"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-254_1'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-255_1"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-255_1'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
              </group>
              <group
                position={[1663.386, 363.189, 263.219]}
                rotation={[Math.PI / 2, Math.PI / 2, 0]}>
                <mesh
                  name="3DGeom-258"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-258'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <group position={[0, 0, 2.953]}>
                  <mesh
                    name="3DGeom-259"
                    castShadow
                    receiveShadow
                    geometry={nodes['3DGeom-259'].geometry}
                    material={materials['[0135_DarkGray]']}
                  />
                </group>
              </group>
              <group
                position={[1663.386, 88.583, 153.558]}
                rotation={[Math.PI / 2, Math.PI / 2, 0]}>
                <mesh
                  name="3DGeom-260"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-260'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <group position={[0, 0, 2.953]}>
                  <mesh
                    name="3DGeom-261"
                    castShadow
                    receiveShadow
                    geometry={nodes['3DGeom-261'].geometry}
                    material={materials['[0135_DarkGray]']}
                  />
                </group>
              </group>
              <group
                position={[1669.291, 791.339, 153.558]}
                rotation={[Math.PI / 2, -Math.PI / 2, 0]}>
                <mesh
                  name="3DGeom-260_1"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-260_1'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <group position={[0, 0, 2.953]}>
                  <mesh
                    name="3DGeom-261_1"
                    castShadow
                    receiveShadow
                    geometry={nodes['3DGeom-261_1'].geometry}
                    material={materials['[0135_DarkGray]']}
                  />
                </group>
              </group>
              <group
                position={[1663.386, 227.854, 153.558]}
                rotation={[Math.PI / 2, Math.PI / 2, 0]}>
                <mesh
                  name="3DGeom-264"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-264'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <group position={[0, 0, 2.953]}>
                  <mesh
                    name="3DGeom-265"
                    castShadow
                    receiveShadow
                    geometry={nodes['3DGeom-265'].geometry}
                    material={materials['[0135_DarkGray]']}
                  />
                </group>
              </group>
              <group
                position={[1663.386, 652.067, 153.558]}
                rotation={[Math.PI / 2, Math.PI / 2, 0]}>
                <mesh
                  name="3DGeom-264_1"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-264_1'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <group position={[0, 0, 2.953]}>
                  <mesh
                    name="3DGeom-265_1"
                    castShadow
                    receiveShadow
                    geometry={nodes['3DGeom-265_1'].geometry}
                    material={materials['[0135_DarkGray]']}
                  />
                </group>
              </group>
              <group
                position={[1663.386, 363.189, 153.558]}
                rotation={[Math.PI / 2, Math.PI / 2, 0]}>
                <mesh
                  name="3DGeom-268"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-268'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <group position={[0, 0, 2.953]}>
                  <mesh
                    name="3DGeom-269"
                    castShadow
                    receiveShadow
                    geometry={nodes['3DGeom-269'].geometry}
                    material={materials['[0135_DarkGray]']}
                  />
                </group>
              </group>
              <group
                position={[1663.386, 516.732, 153.558]}
                rotation={[Math.PI / 2, Math.PI / 2, 0]}>
                <mesh
                  name="3DGeom-268_1"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-268_1'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <group position={[0, 0, 2.953]}>
                  <mesh
                    name="3DGeom-269_1"
                    castShadow
                    receiveShadow
                    geometry={nodes['3DGeom-269_1'].geometry}
                    material={materials['[0135_DarkGray]']}
                  />
                </group>
              </group>
              <group
                position={[1663.386, 516.732, 263.219]}
                rotation={[Math.PI / 2, Math.PI / 2, 0]}>
                <mesh
                  name="3DGeom-258_1"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-258_1'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <group position={[0, 0, 2.953]}>
                  <mesh
                    name="3DGeom-259_1"
                    castShadow
                    receiveShadow
                    geometry={nodes['3DGeom-259_1'].geometry}
                    material={materials['[0135_DarkGray]']}
                  />
                </group>
              </group>
              <group position={[1562.992, 870.079, 50.492]} rotation={[-Math.PI / 2, 0, -Math.PI]}>
                <mesh
                  name="3DGeom-274"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-274'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <group position={[0, 0, 2.953]}>
                  <mesh
                    name="3DGeom-275"
                    castShadow
                    receiveShadow
                    geometry={nodes['3DGeom-275'].geometry}
                    material={materials['[0135_DarkGray]']}
                  />
                </group>
              </group>
              <group position={[1169.291, 870.079, 50.492]} rotation={[-Math.PI / 2, 0, -Math.PI]}>
                <mesh
                  name="3DGeom-274_1"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-274_1'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <group position={[0, 0, 2.953]}>
                  <mesh
                    name="3DGeom-275_1"
                    castShadow
                    receiveShadow
                    geometry={nodes['3DGeom-275_1'].geometry}
                    material={materials['[0135_DarkGray]']}
                  />
                </group>
              </group>
              <group position={[972.717, 870.079, 50.492]} rotation={[-Math.PI / 2, 0, -Math.PI]}>
                <mesh
                  name="3DGeom-274_2"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-274_2'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <group position={[0, 0, 2.953]}>
                  <mesh
                    name="3DGeom-275_2"
                    castShadow
                    receiveShadow
                    geometry={nodes['3DGeom-275_2'].geometry}
                    material={materials['[0135_DarkGray]']}
                  />
                </group>
              </group>
              <group position={[775.591, 870.079, 50.492]} rotation={[-Math.PI / 2, 0, -Math.PI]}>
                <mesh
                  name="3DGeom-274_3"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-274_3'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <group position={[0, 0, 2.953]}>
                  <mesh
                    name="3DGeom-275_3"
                    castShadow
                    receiveShadow
                    geometry={nodes['3DGeom-275_3'].geometry}
                    material={materials['[0135_DarkGray]']}
                  />
                </group>
              </group>
              <group position={[588.583, 870.079, 67.372]} rotation={[-Math.PI / 2, 0, -Math.PI]}>
                <mesh
                  name="3DGeom-282"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-282'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <group position={[0, 0, 2.953]}>
                  <mesh
                    name="3DGeom-283"
                    castShadow
                    receiveShadow
                    geometry={nodes['3DGeom-283'].geometry}
                    material={materials['[0135_DarkGray]']}
                  />
                </group>
              </group>
              <group position={[1562.992, 3.937, 50.492]} rotation={[-Math.PI / 2, 0, -Math.PI]}>
                <mesh
                  name="3DGeom-274_4"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-274_4'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <group position={[0, 0, 2.953]}>
                  <mesh
                    name="3DGeom-275_4"
                    castShadow
                    receiveShadow
                    geometry={nodes['3DGeom-275_4'].geometry}
                    material={materials['[0135_DarkGray]']}
                  />
                </group>
              </group>
              <group position={[1169.291, 3.937, 50.492]} rotation={[-Math.PI / 2, 0, -Math.PI]}>
                <mesh
                  name="3DGeom-274_5"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-274_5'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <group position={[0, 0, 2.953]}>
                  <mesh
                    name="3DGeom-275_5"
                    castShadow
                    receiveShadow
                    geometry={nodes['3DGeom-275_5'].geometry}
                    material={materials['[0135_DarkGray]']}
                  />
                </group>
              </group>
              <group position={[972.441, 3.937, 50.492]} rotation={[-Math.PI / 2, 0, -Math.PI]}>
                <mesh
                  name="3DGeom-274_6"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-274_6'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <group position={[0, 0, 2.953]}>
                  <mesh
                    name="3DGeom-275_6"
                    castShadow
                    receiveShadow
                    geometry={nodes['3DGeom-275_6'].geometry}
                    material={materials['[0135_DarkGray]']}
                  />
                </group>
              </group>
              <group position={[775.591, 3.937, 50.492]} rotation={[-Math.PI / 2, 0, -Math.PI]}>
                <mesh
                  name="3DGeom-274_7"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-274_7'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <group position={[0, 0, 2.953]}>
                  <mesh
                    name="3DGeom-275_7"
                    castShadow
                    receiveShadow
                    geometry={nodes['3DGeom-275_7'].geometry}
                    material={materials['[0135_DarkGray]']}
                  />
                </group>
              </group>
              <group position={[588.583, 3.937, 67.372]} rotation={[-Math.PI / 2, 0, -Math.PI]}>
                <mesh
                  name="3DGeom-282_1"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-282_1'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <group position={[0, 0, 2.953]}>
                  <mesh
                    name="3DGeom-283_1"
                    castShadow
                    receiveShadow
                    geometry={nodes['3DGeom-283_1'].geometry}
                    material={materials['[0135_DarkGray]']}
                  />
                </group>
              </group>
              <group position={[9.843, 752.953, 91.063]} rotation={[Math.PI / 2, -Math.PI / 2, 0]}>
                <mesh
                  name="3DGeom-294"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-294'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <group position={[0, 0, 2.953]}>
                  <mesh
                    name="3DGeom-295"
                    castShadow
                    receiveShadow
                    geometry={nodes['3DGeom-295'].geometry}
                    material={materials['[0135_DarkGray]']}
                  />
                </group>
              </group>
              <group position={[9.843, 126.969, 91.063]} rotation={[Math.PI / 2, -Math.PI / 2, 0]}>
                <mesh
                  name="3DGeom-294_1"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-294_1'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <group position={[0, 0, 2.953]}>
                  <mesh
                    name="3DGeom-295_1"
                    castShadow
                    receiveShadow
                    geometry={nodes['3DGeom-295_1'].geometry}
                    material={materials['[0135_DarkGray]']}
                  />
                </group>
              </group>
              <group position={[244.094, 870.079, 103.839]} rotation={[-Math.PI / 2, 0, -Math.PI]}>
                <mesh
                  name="3DGeom-298"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-298'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <group position={[0, 0, 2.953]}>
                  <mesh
                    name="3DGeom-299"
                    castShadow
                    receiveShadow
                    geometry={nodes['3DGeom-299'].geometry}
                    material={materials['[0135_DarkGray]']}
                  />
                </group>
              </group>
              <group position={[86.614, 870.079, 103.839]} rotation={[-Math.PI / 2, 0, -Math.PI]}>
                <mesh
                  name="3DGeom-298_1"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-298_1'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <group position={[0, 0, 2.953]}>
                  <mesh
                    name="3DGeom-299_1"
                    castShadow
                    receiveShadow
                    geometry={nodes['3DGeom-299_1'].geometry}
                    material={materials['[0135_DarkGray]']}
                  />
                </group>
              </group>
              <group position={[86.614, 3.937, 103.839]} rotation={[-Math.PI / 2, 0, -Math.PI]}>
                <mesh
                  name="3DGeom-298_2"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-298_2'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <group position={[0, 0, 2.953]}>
                  <mesh
                    name="3DGeom-299_2"
                    castShadow
                    receiveShadow
                    geometry={nodes['3DGeom-299_2'].geometry}
                    material={materials['[0135_DarkGray]']}
                  />
                </group>
              </group>
              <group position={[244.094, 3.937, 103.839]} rotation={[-Math.PI / 2, 0, -Math.PI]}>
                <mesh
                  name="3DGeom-298_3"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-298_3'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <group position={[0, 0, 2.953]}>
                  <mesh
                    name="3DGeom-299_3"
                    castShadow
                    receiveShadow
                    geometry={nodes['3DGeom-299_3'].geometry}
                    material={materials['[0135_DarkGray]']}
                  />
                </group>
              </group>
              <group position={[-1255.656, -5485.621, 13.78]}>
                <mesh
                  name="3DGeom-306"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-306'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
                <mesh
                  name="3DGeom-307"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-307'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
              </group>
              <group position={[-1255.616, -5448.309, 13.78]}>
                <mesh
                  name="3DGeom-306_1"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-306_1'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
                <mesh
                  name="3DGeom-307_1"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-307_1'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
              </group>
              <group position={[-1255.656, -5411.379, 13.78]}>
                <mesh
                  name="3DGeom-306_2"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-306_2'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
                <mesh
                  name="3DGeom-307_2"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-307_2'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
              </group>
              <group position={[-1255.616, -5374.067, 13.78]}>
                <mesh
                  name="3DGeom-306_3"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-306_3'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
                <mesh
                  name="3DGeom-307_3"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-307_3'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
              </group>
              <group position={[-1255.656, -5336.813, 13.78]}>
                <mesh
                  name="3DGeom-306_4"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-306_4'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
                <mesh
                  name="3DGeom-307_4"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-307_4'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
              </group>
              <group position={[-1255.616, -5299.5, 13.78]}>
                <mesh
                  name="3DGeom-306_5"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-306_5'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
                <mesh
                  name="3DGeom-307_5"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-307_5'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
              </group>
              <group position={[-1255.656, -5262.167, 13.78]}>
                <mesh
                  name="3DGeom-306_6"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-306_6'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
                <mesh
                  name="3DGeom-307_6"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-307_6'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
              </group>
              <group position={[-1255.616, -5224.854, 13.78]}>
                <mesh
                  name="3DGeom-306_7"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-306_7'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
                <mesh
                  name="3DGeom-307_7"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-307_7'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
              </group>
              <group position={[-770.159, -5336.813, 13.78]}>
                <mesh
                  name="3DGeom-306_8"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-306_8'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
                <mesh
                  name="3DGeom-307_8"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-307_8'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
              </group>
              <group position={[-770.159, -5411.379, 13.78]}>
                <mesh
                  name="3DGeom-306_9"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-306_9'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
                <mesh
                  name="3DGeom-307_9"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-307_9'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
              </group>
              <group position={[-770.119, -5374.067, 13.78]}>
                <mesh
                  name="3DGeom-306_10"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-306_10'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
                <mesh
                  name="3DGeom-307_10"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-307_10'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
              </group>
              <group position={[-770.159, -5262.167, 13.78]}>
                <mesh
                  name="3DGeom-306_11"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-306_11'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
                <mesh
                  name="3DGeom-307_11"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-307_11'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
              </group>
              <group position={[-770.159, -5485.621, 13.78]}>
                <mesh
                  name="3DGeom-306_12"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-306_12'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
                <mesh
                  name="3DGeom-307_12"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-307_12'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
              </group>
              <group position={[-770.119, -5448.309, 13.78]}>
                <mesh
                  name="3DGeom-306_13"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-306_13'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
                <mesh
                  name="3DGeom-307_13"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-307_13'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
              </group>
              <group position={[-770.119, -5299.5, 13.78]}>
                <mesh
                  name="3DGeom-306_14"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-306_14'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
                <mesh
                  name="3DGeom-307_14"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-307_14'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
              </group>
              <group position={[-770.119, -5224.854, 13.78]}>
                <mesh
                  name="3DGeom-306_15"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-306_15'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
                <mesh
                  name="3DGeom-307_15"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-307_15'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
              </group>
              <group position={[-5004.794, 2616.763, 13.78]} rotation={[0, 0, -Math.PI / 2]}>
                <mesh
                  name="3DGeom-306_16"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-306_16'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
                <mesh
                  name="3DGeom-307_16"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-307_16'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
              </group>
              <group position={[-4967.55, 2616.763, 13.78]} rotation={[0, 0, -Math.PI / 2]}>
                <mesh
                  name="3DGeom-306_17"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-306_17'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
                <mesh
                  name="3DGeom-307_17"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-307_17'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
              </group>
              <group position={[-4930.219, 2616.763, 13.78]} rotation={[0, 0, -Math.PI / 2]}>
                <mesh
                  name="3DGeom-306_18"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-306_18'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
                <mesh
                  name="3DGeom-307_18"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-307_18'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
              </group>
              <group position={[-4892.865, 2616.763, 13.78]} rotation={[0, 0, -Math.PI / 2]}>
                <mesh
                  name="3DGeom-306_19"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-306_19'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
                <mesh
                  name="3DGeom-307_19"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-307_19'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
              </group>
              <group position={[-4818.29, 2616.763, 13.78]} rotation={[0, 0, -Math.PI / 2]}>
                <mesh
                  name="3DGeom-306_20"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-306_20'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
                <mesh
                  name="3DGeom-307_20"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-307_20'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
              </group>
              <group position={[-4855.621, 2616.763, 13.78]} rotation={[0, 0, -Math.PI / 2]}>
                <mesh
                  name="3DGeom-306_21"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-306_21'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
                <mesh
                  name="3DGeom-307_21"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-307_21'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
              </group>
              <group position={[-4706.352, 2616.763, 13.78]} rotation={[0, 0, -Math.PI / 2]}>
                <mesh
                  name="3DGeom-306_22"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-306_22'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
                <mesh
                  name="3DGeom-307_22"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-307_22'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
              </group>
              <group position={[-4780.927, 2616.763, 13.78]} rotation={[0, 0, -Math.PI / 2]}>
                <mesh
                  name="3DGeom-306_23"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-306_23'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
                <mesh
                  name="3DGeom-307_23"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-307_23'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
              </group>
              <group position={[-4743.683, 2616.763, 13.78]} rotation={[0, 0, -Math.PI / 2]}>
                <mesh
                  name="3DGeom-306_24"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-306_24'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
                <mesh
                  name="3DGeom-307_24"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-307_24'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
              </group>
              <group position={[-4594.548, 2616.763, 13.78]} rotation={[0, 0, -Math.PI / 2]}>
                <mesh
                  name="3DGeom-306_25"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-306_25'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
                <mesh
                  name="3DGeom-307_25"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-307_25'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
              </group>
              <group position={[-4631.879, 2616.763, 13.78]} rotation={[0, 0, -Math.PI / 2]}>
                <mesh
                  name="3DGeom-306_26"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-306_26'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
                <mesh
                  name="3DGeom-307_26"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-307_26'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
              </group>
              <group position={[-4669.124, 2616.763, 13.78]} rotation={[0, 0, -Math.PI / 2]}>
                <mesh
                  name="3DGeom-306_27"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-306_27'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
                <mesh
                  name="3DGeom-307_27"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-307_27'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
              </group>
              <group position={[-4557.225, 2616.763, 13.78]} rotation={[0, 0, -Math.PI / 2]}>
                <mesh
                  name="3DGeom-306_28"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-306_28'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
                <mesh
                  name="3DGeom-307_28"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-307_28'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
              </group>
              <group position={[-4557.225, 2324.253, 13.78]} rotation={[0, 0, -Math.PI / 2]}>
                <mesh
                  name="3DGeom-306_29"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-306_29'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
                <mesh
                  name="3DGeom-307_29"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-307_29'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
              </group>
              <group position={[-4631.879, 2324.253, 13.78]} rotation={[0, 0, -Math.PI / 2]}>
                <mesh
                  name="3DGeom-306_30"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-306_30'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
                <mesh
                  name="3DGeom-307_30"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-307_30'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
              </group>
              <group position={[-4818.29, 2324.253, 13.78]} rotation={[0, 0, -Math.PI / 2]}>
                <mesh
                  name="3DGeom-306_31"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-306_31'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
                <mesh
                  name="3DGeom-307_31"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-307_31'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
              </group>
              <group position={[-4594.548, 2324.253, 13.78]} rotation={[0, 0, -Math.PI / 2]}>
                <mesh
                  name="3DGeom-306_32"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-306_32'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
                <mesh
                  name="3DGeom-307_32"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-307_32'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
              </group>
              <group position={[-5004.794, 2324.253, 13.78]} rotation={[0, 0, -Math.PI / 2]}>
                <mesh
                  name="3DGeom-306_33"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-306_33'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
                <mesh
                  name="3DGeom-307_33"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-307_33'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
              </group>
              <group position={[-4706.352, 2324.253, 13.78]} rotation={[0, 0, -Math.PI / 2]}>
                <mesh
                  name="3DGeom-306_34"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-306_34'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
                <mesh
                  name="3DGeom-307_34"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-307_34'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
              </group>
              <group position={[-4892.865, 2324.253, 13.78]} rotation={[0, 0, -Math.PI / 2]}>
                <mesh
                  name="3DGeom-306_35"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-306_35'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
                <mesh
                  name="3DGeom-307_35"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-307_35'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
              </group>
              <group position={[-4669.124, 2324.253, 13.78]} rotation={[0, 0, -Math.PI / 2]}>
                <mesh
                  name="3DGeom-306_36"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-306_36'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
                <mesh
                  name="3DGeom-307_36"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-307_36'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
              </group>
              <group position={[-4930.219, 2324.253, 13.78]} rotation={[0, 0, -Math.PI / 2]}>
                <mesh
                  name="3DGeom-306_37"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-306_37'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
                <mesh
                  name="3DGeom-307_37"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-307_37'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
              </group>
              <group position={[-4855.621, 2324.253, 13.78]} rotation={[0, 0, -Math.PI / 2]}>
                <mesh
                  name="3DGeom-306_38"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-306_38'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
                <mesh
                  name="3DGeom-307_38"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-307_38'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
              </group>
              <group position={[-4743.683, 2324.253, 13.78]} rotation={[0, 0, -Math.PI / 2]}>
                <mesh
                  name="3DGeom-306_39"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-306_39'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
                <mesh
                  name="3DGeom-307_39"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-307_39'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
              </group>
              <group position={[-4780.927, 2324.253, 13.78]} rotation={[0, 0, -Math.PI / 2]}>
                <mesh
                  name="3DGeom-306_40"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-306_40'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
                <mesh
                  name="3DGeom-307_40"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-307_40'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
              </group>
              <group position={[-4967.55, 2324.253, 13.78]} rotation={[0, 0, -Math.PI / 2]}>
                <mesh
                  name="3DGeom-306_41"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-306_41'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
                <mesh
                  name="3DGeom-307_41"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-307_41'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
              </group>
              <group position={[9.843, 343.012, 91.063]} rotation={[Math.PI / 2, -Math.PI / 2, 0]}>
                <mesh
                  name="3DGeom-390"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-390'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <group position={[0, 0, 2.953]}>
                  <mesh
                    name="3DGeom-391"
                    castShadow
                    receiveShadow
                    geometry={nodes['3DGeom-391'].geometry}
                    material={materials['[0135_DarkGray]']}
                  />
                </group>
              </group>
              <group position={[9.843, 536.909, 91.063]} rotation={[Math.PI / 2, -Math.PI / 2, 0]}>
                <mesh
                  name="3DGeom-390_1"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-390_1'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <group position={[0, 0, 2.953]}>
                  <mesh
                    name="3DGeom-391_1"
                    castShadow
                    receiveShadow
                    geometry={nodes['3DGeom-391_1'].geometry}
                    material={materials['[0135_DarkGray]']}
                  />
                </group>
              </group>
              <group position={[498.031, 215.197, 63.74]} rotation={[Math.PI / 2, Math.PI / 2, 0]}>
                <mesh
                  name="3DGeom-24_16"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-24_16'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <group position={[0, 0, 2.953]}>
                  <mesh
                    name="3DGeom-25_16"
                    castShadow
                    receiveShadow
                    geometry={nodes['3DGeom-25_16'].geometry}
                    material={materials['[Translucent Glass Gray]']}
                  />
                </group>
              </group>
              <group position={[389.685, 244.116, 63.74]} rotation={[Math.PI / 2, 0, 0]}>
                <mesh
                  name="3DGeom-24_17"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-24_17'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <group position={[0, 0, 2.953]}>
                  <mesh
                    name="3DGeom-25_17"
                    castShadow
                    receiveShadow
                    geometry={nodes['3DGeom-25_17'].geometry}
                    material={materials['[Translucent Glass Gray]']}
                  />
                </group>
              </group>
              <group position={[353.701, 244.094, 63.74]} rotation={[Math.PI / 2, 0, 0]}>
                <mesh
                  name="3DGeom-24_18"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-24_18'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <group position={[0, 0, 2.953]}>
                  <mesh
                    name="3DGeom-25_18"
                    castShadow
                    receiveShadow
                    geometry={nodes['3DGeom-25_18'].geometry}
                    material={materials['[Translucent Glass Gray]']}
                  />
                </group>
              </group>
              <group position={[498.031, 664.724, 63.74]} rotation={[Math.PI / 2, Math.PI / 2, 0]}>
                <mesh
                  name="3DGeom-24_19"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-24_19'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <group position={[0, 0, 2.953]}>
                  <mesh
                    name="3DGeom-25_19"
                    castShadow
                    receiveShadow
                    geometry={nodes['3DGeom-25_19'].geometry}
                    material={materials['[Translucent Glass Gray]']}
                  />
                </group>
              </group>
              <group position={[498.031, 602.992, 63.74]} rotation={[Math.PI / 2, Math.PI / 2, 0]}>
                <mesh
                  name="3DGeom-24_20"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-24_20'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <group position={[0, 0, 2.953]}>
                  <mesh
                    name="3DGeom-25_20"
                    castShadow
                    receiveShadow
                    geometry={nodes['3DGeom-25_20'].geometry}
                    material={materials['[Translucent Glass Gray]']}
                  />
                </group>
              </group>
              <group position={[498.031, 567.008, 63.74]} rotation={[Math.PI / 2, Math.PI / 2, 0]}>
                <mesh
                  name="3DGeom-24_21"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-24_21'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <group position={[0, 0, 2.953]}>
                  <mesh
                    name="3DGeom-25_21"
                    castShadow
                    receiveShadow
                    geometry={nodes['3DGeom-25_21'].geometry}
                    material={materials['[Translucent Glass Gray]']}
                  />
                </group>
              </group>
              <group
                position={[1669.291, 835.164, 128.862]}
                rotation={[-Math.PI, 0, -Math.PI]}
                scale={-1.05}>
                <mesh
                  name="3DGeom-406"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-406'].geometry}
                  material={nodes['3DGeom-406'].material}
                />
                <mesh
                  name="3DGeom-407"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-407'].geometry}
                  material={materials['[0020_Red]']}
                />
                <mesh
                  name="3DGeom-408"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-408'].geometry}
                  material={materials['paint-white']}
                />
              </group>
              <group position={[1669.291, 44.757, 128.862]} scale={1.05}>
                <mesh
                  name="3DGeom-406_1"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-406_1'].geometry}
                  material={nodes['3DGeom-406_1'].material}
                />
                <mesh
                  name="3DGeom-407_1"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-407_1'].geometry}
                  material={materials['[0020_Red]']}
                />
                <mesh
                  name="3DGeom-408_1"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-408_1'].geometry}
                  material={materials['paint-white']}
                />
              </group>
              <group name="triangle" position={[12.765, -9558.755, 206.723]}>
                <mesh
                  name="3DGeom-412"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-412'].geometry}
                  material={materials['[0128_White]']}
                />
                <mesh
                  name="3DGeom-413"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-413'].geometry}
                  material={nodes['3DGeom-413'].material}
                />
                <mesh
                  name="3DGeom-414"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-414'].geometry}
                  material={materials['[0002_MediumVioletRed]']}
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

useGLTF.preload('/Food Innovation Center_compressed.glb')
