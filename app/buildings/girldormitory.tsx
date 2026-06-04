

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
type Props = {
  selected?: boolean
  onSelect?: (id: string) => void
  onClick?: () => void
  visibleFloors?: string[]
}

export function GIRLDORMITORY({ visibleFloors = ["1ST", "2ND", "roof"], selected, onSelect, onClick, ...props }: Props) {
  const { nodes, materials } = useGLTF('/Girls Dormitory.glb') as any;
  return (
    <group {...props}
      onClick={(e) => {
        e.stopPropagation()
        onClick?.()
      }}   dispose={null} position={[20,0,-241]}  rotation={[0, -Math.PI /1.6 , 0, ]} scale={[1,1,1.2]}>
      <group>
        <group rotation={[-Math.PI / 2, 0, 0]}>
          <group name="Assembly-85" scale={0.001}>
            <group
              name="Active_View"
              position={[75143.102, 32980.754, 51333.086]}
              rotation={[-0.686, 1.032, 2.333]}
              scale={1000}
            />
            {visibleFloors.includes('2ND') && (
            <group name="2nd" position={[-5771.383, -13594.317, 3900]} scale={25.4}>
              <mesh
                name="3DGeom-1"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-1'].geometry}
                material={materials['[0032_Moccasin]']}
              />
              <mesh
                name="3DGeom-2"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-2'].geometry}
                material={materials['[0092_Azure]']}
              />
              <mesh
                name="3DGeom-3"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-3'].geometry}
                material={materials.creame}
              />
              <mesh
                name="3DGeom-4"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-4'].geometry}
                material={materials['*1']}
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
                material={materials['[Tile Limestone Multi]']}
              />
              <mesh
                name="3DGeom-7"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-7'].geometry}
                material={nodes['3DGeom-7'].material}
              />
              <group position={[399.606, 9.843, 59.055]} rotation={[0, 0, -Math.PI / 2]}>
                <mesh
                  name="3DGeom-8"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-8'].geometry}
                  material={materials['[0134_DimGray]']}
                />
                <mesh
                  name="3DGeom-9"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-9'].geometry}
                  material={materials['[0012_Bisque]']}
                />
              </group>
              <group position={[525.591, 494.094, 59.055]}>
                <mesh
                  name="3DGeom-8_1"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-8_1'].geometry}
                  material={materials['[0134_DimGray]']}
                />
                <mesh
                  name="3DGeom-9_1"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-9_1'].geometry}
                  material={materials['[0012_Bisque]']}
                />
              </group>
              <group position={[525.591, 647.638, 59.055]}>
                <mesh
                  name="3DGeom-8_2"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-8_2'].geometry}
                  material={materials['[0134_DimGray]']}
                />
                <mesh
                  name="3DGeom-9_2"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-9_2'].geometry}
                  material={materials['[0012_Bisque]']}
                />
              </group>
              <group position={[525.591, 801.181, 59.055]}>
                <mesh
                  name="3DGeom-8_3"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-8_3'].geometry}
                  material={materials['[0134_DimGray]']}
                />
                <mesh
                  name="3DGeom-9_3"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-9_3'].geometry}
                  material={materials['[0012_Bisque]']}
                />
              </group>
              <group position={[525.591, 954.724, 59.055]}>
                <mesh
                  name="3DGeom-8_4"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-8_4'].geometry}
                  material={materials['[0134_DimGray]']}
                />
                <mesh
                  name="3DGeom-9_4"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-9_4'].geometry}
                  material={materials['[0012_Bisque]']}
                />
              </group>
              <group position={[9.843, 1057.113, 59.055]} rotation={[0, 0, Math.PI]}>
                <mesh
                  name="3DGeom-8_5"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-8_5'].geometry}
                  material={materials['[0134_DimGray]']}
                />
                <mesh
                  name="3DGeom-9_5"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-9_5'].geometry}
                  material={materials['[0012_Bisque]']}
                />
              </group>
              <group position={[9.843, 903.543, 59.055]} rotation={[0, 0, Math.PI]}>
                <mesh
                  name="3DGeom-8_6"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-8_6'].geometry}
                  material={materials['[0134_DimGray]']}
                />
                <mesh
                  name="3DGeom-9_6"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-9_6'].geometry}
                  material={materials['[0012_Bisque]']}
                />
              </group>
              <group position={[9.843, 442.913, 59.055]} rotation={[0, 0, Math.PI]}>
                <mesh
                  name="3DGeom-8_7"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-8_7'].geometry}
                  material={materials['[0134_DimGray]']}
                />
                <mesh
                  name="3DGeom-9_7"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-9_7'].geometry}
                  material={materials['[0012_Bisque]']}
                />
              </group>
              <group position={[9.843, 289.37, 59.055]} rotation={[0, 0, Math.PI]}>
                <mesh
                  name="3DGeom-8_8"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-8_8'].geometry}
                  material={materials['[0134_DimGray]']}
                />
                <mesh
                  name="3DGeom-9_8"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-9_8'].geometry}
                  material={materials['[0012_Bisque]']}
                />
              </group>
              <group position={[9.843, 135.827, 59.055]} rotation={[0, 0, Math.PI]}>
                <mesh
                  name="3DGeom-8_9"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-8_9'].geometry}
                  material={materials['[0134_DimGray]']}
                />
                <mesh
                  name="3DGeom-9_9"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-9_9'].geometry}
                  material={materials['[0012_Bisque]']}
                />
              </group>
              <group position={[3.937, 647.638, 98.425]}>
                <mesh
                  name="3DGeom-28"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-28'].geometry}
                  material={materials['[0012_Bisque]']}
                />
                <mesh
                  name="3DGeom-29"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-29'].geometry}
                  material={materials['[0134_DimGray]']}
                />
              </group>
              <group position={[3.937, 494.094, 98.425]}>
                <mesh
                  name="3DGeom-28_1"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-28_1'].geometry}
                  material={materials['[0012_Bisque]']}
                />
                <mesh
                  name="3DGeom-29_1"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-29_1'].geometry}
                  material={materials['[0134_DimGray]']}
                />
              </group>
              <group name="door" position={[218.504, 66.929, 23.622]}>
                <mesh
                  name="3DGeom-32"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-32'].geometry}
                  material={materials['[0043_SaddleBrown]']}
                />
              </group>
              <group name="door_1" position={[218.504, 220.472, 23.622]}>
                <mesh
                  name="3DGeom-32_1"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-32_1'].geometry}
                  material={materials['[0043_SaddleBrown]']}
                />
              </group>
              <group name="door_2" position={[218.504, 374.016, 23.622]}>
                <mesh
                  name="3DGeom-32_2"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-32_2'].geometry}
                  material={materials['[0043_SaddleBrown]']}
                />
              </group>
              <group name="door_3" position={[218.504, 527.559, 23.622]}>
                <mesh
                  name="3DGeom-32_3"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-32_3'].geometry}
                  material={materials['[0043_SaddleBrown]']}
                />
              </group>
              <group name="door_4" position={[218.504, 681.102, 23.622]}>
                <mesh
                  name="3DGeom-32_4"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-32_4'].geometry}
                  material={materials['[0043_SaddleBrown]']}
                />
              </group>
              <group name="door_5" position={[218.504, 834.646, 23.622]}>
                <mesh
                  name="3DGeom-32_5"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-32_5'].geometry}
                  material={materials['[0043_SaddleBrown]']}
                />
              </group>
              <group name="door_6" position={[218.504, 988.189, 23.622]}>
                <mesh
                  name="3DGeom-32_6"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-32_6'].geometry}
                  material={materials['[0043_SaddleBrown]']}
                />
              </group>
              <group name="door_7" position={[312.992, 988.189, 23.622]}>
                <mesh
                  name="3DGeom-32_7"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-32_7'].geometry}
                  material={materials['[0043_SaddleBrown]']}
                />
              </group>
              <group name="door_8" position={[312.992, 834.646, 23.622]}>
                <mesh
                  name="3DGeom-32_8"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-32_8'].geometry}
                  material={materials['[0043_SaddleBrown]']}
                />
              </group>
              <group name="door_9" position={[312.992, 681.102, 23.622]}>
                <mesh
                  name="3DGeom-32_9"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-32_9'].geometry}
                  material={materials['[0043_SaddleBrown]']}
                />
              </group>
              <group name="door_10" position={[312.992, 527.559, 23.622]}>
                <mesh
                  name="3DGeom-32_10"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-32_10'].geometry}
                  material={materials['[0043_SaddleBrown]']}
                />
              </group>
              <group
                position={[250, 7.874, 23.622]}
                rotation={[0, 0, -Math.PI / 2]}
                scale={[1, 1.125, 0.92]}>
                <mesh
                  name="3DGeom-43"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-43'].geometry}
                  material={materials['[0043_SaddleBrown]']}
                />
              </group>
              <group
                position={[285.433, 1082.283, 23.622]}
                rotation={[0, 0, Math.PI / 2]}
                scale={[1, 1.125, 0.92]}>
                <mesh
                  name="3DGeom-43_1"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-43_1'].geometry}
                  material={materials['[0043_SaddleBrown]']}
                />
              </group>
              <group name="door_11" position={[312.992, 66.929, 23.622]}>
                <mesh
                  name="3DGeom-32_11"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-32_11'].geometry}
                  material={materials['[0043_SaddleBrown]']}
                />
              </group>
              <group position={[525.591, 340.551, 59.055]}>
                <mesh
                  name="3DGeom-8_10"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-8_10'].geometry}
                  material={materials['[0134_DimGray]']}
                />
                <mesh
                  name="3DGeom-9_10"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-9_10'].geometry}
                  material={materials['[0012_Bisque]']}
                />
              </group>
              <group position={[525.591, 187.008, 59.055]}>
                <mesh
                  name="3DGeom-8_11"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-8_11'].geometry}
                  material={materials['[0134_DimGray]']}
                />
                <mesh
                  name="3DGeom-9_11"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-9_11'].geometry}
                  material={materials['[0012_Bisque]']}
                />
              </group>
              <group position={[525.591, 33.465, 59.055]}>
                <mesh
                  name="3DGeom-8_12"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-8_12'].geometry}
                  material={materials['[0134_DimGray]']}
                />
                <mesh
                  name="3DGeom-9_12"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-9_12'].geometry}
                  material={materials['[0012_Bisque]']}
                />
              </group>
              <group name="Rail_TA" position={[442.264, 313.386, 23.622]}>
                <group name="Rail" position={[-513.169, -364.685, -177.165]}>
                  <mesh
                    name="3DGeom-52"
                    castShadow
                    receiveShadow
                    geometry={nodes['3DGeom-52'].geometry}
                    material={materials['*']}
                  />
                </group>
                <group name="Poles" position={[-513.169, -364.685, -177.165]}>
                  <group>
                    <mesh
                      name="3DGeom-53"
                      castShadow
                      receiveShadow
                      geometry={nodes['3DGeom-53'].geometry}
                      material={materials['*']}
                    />
                  </group>
                  <group position={[-24.606, 0, 0]}>
                    <mesh
                      name="3DGeom-53_1"
                      castShadow
                      receiveShadow
                      geometry={nodes['3DGeom-53_1'].geometry}
                      material={materials['*']}
                    />
                  </group>
                  <group position={[-49.606, 0, 0]}>
                    <mesh
                      name="3DGeom-53_2"
                      castShadow
                      receiveShadow
                      geometry={nodes['3DGeom-53_2'].geometry}
                      material={materials['*']}
                    />
                  </group>
                  <group position={[-72.936, 0, 0]}>
                    <mesh
                      name="3DGeom-53_3"
                      castShadow
                      receiveShadow
                      geometry={nodes['3DGeom-53_3'].geometry}
                      material={materials['*']}
                    />
                  </group>
                </group>
              </group>
              <group name="Rail_TA_1" position={[373.799, 167.717, 23.622]}>
                <group name="Poles_1" position={[-444.705, -219.016, -177.165]}>
                  <group>
                    <mesh
                      name="3DGeom-57"
                      castShadow
                      receiveShadow
                      geometry={nodes['3DGeom-57'].geometry}
                      material={materials['*']}
                    />
                  </group>
                  <group position={[0, -43.543, 0]}>
                    <mesh
                      name="3DGeom-57_1"
                      castShadow
                      receiveShadow
                      geometry={nodes['3DGeom-57_1'].geometry}
                      material={materials['*']}
                    />
                  </group>
                  <group position={[0, -93.74, 0]}>
                    <mesh
                      name="3DGeom-57_2"
                      castShadow
                      receiveShadow
                      geometry={nodes['3DGeom-57_2'].geometry}
                      material={materials['*']}
                    />
                  </group>
                  <group position={[0, -145.669, 0]}>
                    <mesh
                      name="3DGeom-57_3"
                      castShadow
                      receiveShadow
                      geometry={nodes['3DGeom-57_3'].geometry}
                      material={materials['*']}
                    />
                  </group>
                </group>
                <group name="Rail_1" position={[-444.705, -219.016, -177.165]}>
                  <mesh
                    name="3DGeom-61"
                    castShadow
                    receiveShadow
                    geometry={nodes['3DGeom-61'].geometry}
                    material={materials['*']}
                  />
                </group>
              </group>
            </group>
            )}
            {visibleFloors.includes('roof') && (

            <group name="roof" position={[-6771.383, -14594.317, 7800]} scale={25.4}>
              <mesh
                name="3DGeom-62"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-62'].geometry}
                material={materials['[0032_Moccasin]']}
              />
            </group>
              )}
            {visibleFloors.includes('1ST') && (

            <group name="1st" position={[-5771.383, -13594.317, 0]} scale={25.4}>
              <mesh
                name="3DGeom-63"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-63'].geometry}
                material={materials['[0032_Moccasin]']}
              />
              <mesh
                name="3DGeom-64"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-64'].geometry}
                material={materials['[0092_Azure]']}
              />
              <mesh
                name="3DGeom-65"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-65'].geometry}
                material={materials.creame}
              />
              <mesh
                name="3DGeom-66"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-66'].geometry}
                material={materials['*1']}
              />
              <mesh
                name="3DGeom-67"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-67'].geometry}
                material={materials['[Formica Graystone]']}
              />
              <mesh
                name="3DGeom-68"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-68'].geometry}
                material={materials['[Tile Limestone Multi]']}
              />
              <mesh
                name="3DGeom-69"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-69'].geometry}
                material={materials['[0090_LightCyan]']}
              />
              <group position={[399.606, 9.843, 59.055]} rotation={[0, 0, -Math.PI / 2]}>
                <mesh
                  name="3DGeom-8_13"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-8_13'].geometry}
                  material={materials['[0134_DimGray]']}
                />
                <mesh
                  name="3DGeom-9_13"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-9_13'].geometry}
                  material={materials['[0012_Bisque]']}
                />
              </group>
              <group position={[525.591, 494.094, 59.055]}>
                <mesh
                  name="3DGeom-8_14"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-8_14'].geometry}
                  material={materials['[0134_DimGray]']}
                />
                <mesh
                  name="3DGeom-9_14"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-9_14'].geometry}
                  material={materials['[0012_Bisque]']}
                />
              </group>
              <group position={[525.591, 647.638, 59.055]}>
                <mesh
                  name="3DGeom-8_15"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-8_15'].geometry}
                  material={materials['[0134_DimGray]']}
                />
                <mesh
                  name="3DGeom-9_15"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-9_15'].geometry}
                  material={materials['[0012_Bisque]']}
                />
              </group>
              <group position={[525.591, 801.181, 59.055]}>
                <mesh
                  name="3DGeom-8_16"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-8_16'].geometry}
                  material={materials['[0134_DimGray]']}
                />
                <mesh
                  name="3DGeom-9_16"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-9_16'].geometry}
                  material={materials['[0012_Bisque]']}
                />
              </group>
              <group position={[525.591, 954.724, 59.055]}>
                <mesh
                  name="3DGeom-8_17"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-8_17'].geometry}
                  material={materials['[0134_DimGray]']}
                />
                <mesh
                  name="3DGeom-9_17"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-9_17'].geometry}
                  material={materials['[0012_Bisque]']}
                />
              </group>
              <group position={[9.843, 1057.113, 59.055]} rotation={[0, 0, Math.PI]}>
                <mesh
                  name="3DGeom-8_18"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-8_18'].geometry}
                  material={materials['[0134_DimGray]']}
                />
                <mesh
                  name="3DGeom-9_18"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-9_18'].geometry}
                  material={materials['[0012_Bisque]']}
                />
              </group>
              <group position={[9.843, 903.543, 59.055]} rotation={[0, 0, Math.PI]}>
                <mesh
                  name="3DGeom-8_19"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-8_19'].geometry}
                  material={materials['[0134_DimGray]']}
                />
                <mesh
                  name="3DGeom-9_19"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-9_19'].geometry}
                  material={materials['[0012_Bisque]']}
                />
              </group>
              <group position={[9.843, 442.913, 59.055]} rotation={[0, 0, Math.PI]}>
                <mesh
                  name="3DGeom-8_20"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-8_20'].geometry}
                  material={materials['[0134_DimGray]']}
                />
                <mesh
                  name="3DGeom-9_20"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-9_20'].geometry}
                  material={materials['[0012_Bisque]']}
                />
              </group>
              <group position={[9.843, 289.37, 59.055]} rotation={[0, 0, Math.PI]}>
                <mesh
                  name="3DGeom-8_21"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-8_21'].geometry}
                  material={materials['[0134_DimGray]']}
                />
                <mesh
                  name="3DGeom-9_21"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-9_21'].geometry}
                  material={materials['[0012_Bisque]']}
                />
              </group>
              <group position={[9.843, 135.827, 59.055]} rotation={[0, 0, Math.PI]}>
                <mesh
                  name="3DGeom-8_22"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-8_22'].geometry}
                  material={materials['[0134_DimGray]']}
                />
                <mesh
                  name="3DGeom-9_22"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-9_22'].geometry}
                  material={materials['[0012_Bisque]']}
                />
              </group>
              <group position={[3.937, 647.638, 98.425]}>
                <mesh
                  name="3DGeom-28_2"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-28_2'].geometry}
                  material={materials['[0012_Bisque]']}
                />
                <mesh
                  name="3DGeom-29_2"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-29_2'].geometry}
                  material={materials['[0134_DimGray]']}
                />
              </group>
              <group position={[3.937, 494.094, 98.425]}>
                <mesh
                  name="3DGeom-28_3"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-28_3'].geometry}
                  material={materials['[0012_Bisque]']}
                />
                <mesh
                  name="3DGeom-29_3"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-29_3'].geometry}
                  material={materials['[0134_DimGray]']}
                />
              </group>
              <group name="door_12" position={[218.504, 66.929, 23.622]}>
                <mesh
                  name="3DGeom-32_12"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-32_12'].geometry}
                  material={materials['[0043_SaddleBrown]']}
                />
              </group>
              <group name="door_13" position={[218.504, 220.472, 23.622]}>
                <mesh
                  name="3DGeom-32_13"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-32_13'].geometry}
                  material={materials['[0043_SaddleBrown]']}
                />
              </group>
              <group name="door_14" position={[218.504, 374.016, 23.622]}>
                <mesh
                  name="3DGeom-32_14"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-32_14'].geometry}
                  material={materials['[0043_SaddleBrown]']}
                />
              </group>
              <group name="door_15" position={[218.504, 527.559, 23.622]}>
                <mesh
                  name="3DGeom-32_15"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-32_15'].geometry}
                  material={materials['[0043_SaddleBrown]']}
                />
              </group>
              <group name="door_16" position={[218.504, 681.102, 23.622]}>
                <mesh
                  name="3DGeom-32_16"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-32_16'].geometry}
                  material={materials['[0043_SaddleBrown]']}
                />
              </group>
              <group name="door_17" position={[218.504, 834.646, 23.622]}>
                <mesh
                  name="3DGeom-32_17"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-32_17'].geometry}
                  material={materials['[0043_SaddleBrown]']}
                />
              </group>
              <group name="door_18" position={[218.504, 988.189, 23.622]}>
                <mesh
                  name="3DGeom-32_18"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-32_18'].geometry}
                  material={materials['[0043_SaddleBrown]']}
                />
              </group>
              <group name="door_19" position={[312.992, 988.189, 23.622]}>
                <mesh
                  name="3DGeom-32_19"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-32_19'].geometry}
                  material={materials['[0043_SaddleBrown]']}
                />
              </group>
              <group name="door_20" position={[312.992, 834.646, 23.622]}>
                <mesh
                  name="3DGeom-32_20"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-32_20'].geometry}
                  material={materials['[0043_SaddleBrown]']}
                />
              </group>
              <group name="door_21" position={[312.992, 681.102, 23.622]}>
                <mesh
                  name="3DGeom-32_21"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-32_21'].geometry}
                  material={materials['[0043_SaddleBrown]']}
                />
              </group>
              <group name="door_22" position={[312.992, 527.559, 23.622]}>
                <mesh
                  name="3DGeom-32_22"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-32_22'].geometry}
                  material={materials['[0043_SaddleBrown]']}
                />
              </group>
              <group position={[527.559, 360.236, 23.622]}>
                <mesh
                  name="3DGeom-43_2"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-43_2'].geometry}
                  material={materials['[0043_SaddleBrown]']}
                />
              </group>
              <group position={[527.559, 391.732, 23.622]}>
                <mesh
                  name="3DGeom-43_3"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-43_3'].geometry}
                  material={materials['[0043_SaddleBrown]']}
                />
              </group>
              <group
                position={[250, 7.874, 23.622]}
                rotation={[0, 0, -Math.PI / 2]}
                scale={[1, 1.125, 0.92]}>
                <mesh
                  name="3DGeom-43_4"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-43_4'].geometry}
                  material={materials['[0043_SaddleBrown]']}
                />
              </group>
              <group
                position={[285.433, 1082.283, 23.622]}
                rotation={[0, 0, Math.PI / 2]}
                scale={[1, 1.125, 0.92]}>
                <mesh
                  name="3DGeom-43_5"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-43_5'].geometry}
                  material={materials['[0043_SaddleBrown]']}
                />
              </group>
              <group position={[525.591, 33.465, 59.055]}>
                <mesh
                  name="3DGeom-8_23"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-8_23'].geometry}
                  material={materials['[0134_DimGray]']}
                />
                <mesh
                  name="3DGeom-9_23"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-9_23'].geometry}
                  material={materials['[0012_Bisque]']}
                />
              </group>
              <group position={[525.591, 187.008, 59.055]}>
                <mesh
                  name="3DGeom-8_24"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-8_24'].geometry}
                  material={materials['[0134_DimGray]']}
                />
                <mesh
                  name="3DGeom-9_24"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-9_24'].geometry}
                  material={materials['[0012_Bisque]']}
                />
              </group>
              <group position={[333.902, 11.811, 23.622]}>
                <mesh
                  name="3DGeom-113"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-113'].geometry}
                  material={materials['[0043_SaddleBrown]']}
                />
              </group>
              <group position={[521.806, 59.055, 23.622]} rotation={[0, 0, Math.PI / 2]}>
                <mesh
                  name="3DGeom-113_1"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-113_1'].geometry}
                  material={materials['[0043_SaddleBrown]']}
                />
              </group>
              <group position={[105.71, 28.898, 23.622]} rotation={[0, 0, Math.PI / 2]}>
                <mesh
                  name="3DGeom-113_2"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-113_2'].geometry}
                  material={materials['[0043_SaddleBrown]']}
                />
              </group>
              <group position={[105.71, 200, 23.622]} rotation={[0, 0, Math.PI / 2]}>
                <mesh
                  name="3DGeom-113_3"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-113_3'].geometry}
                  material={materials['[0043_SaddleBrown]']}
                />
              </group>
              <group position={[105.71, 339.961, 23.622]} rotation={[0, 0, Math.PI / 2]}>
                <mesh
                  name="3DGeom-113_4"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-113_4'].geometry}
                  material={materials['[0043_SaddleBrown]']}
                />
              </group>
              <group position={[498.193, 490.568, 37.81]} rotation={[0, 0, Math.PI / 2]}>
                <mesh
                  name="3DGeom-113_5"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-113_5'].geometry}
                  material={materials['[0043_SaddleBrown]']}
                />
              </group>
              <group
                name="stairs"
                position={[1263.819, 244.739, 3.937]}
                rotation={[0, 0, -Math.PI]}>
                <mesh
                  name="3DGeom-119"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-119'].geometry}
                  material={materials['[White Square Tile]']}
                />
                <mesh
                  name="3DGeom-120"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-120'].geometry}
                  material={materials['[Granite Light Gray]']}
                />
                <group position={[829.427, 25.495, 31.496]} rotation={[0, 0, Math.PI]}>
                  <mesh
                    name="3DGeom-121"
                    castShadow
                    receiveShadow
                    geometry={nodes['3DGeom-121'].geometry}
                    material={materials['*']}
                  />
                </group>
              </group>
              <group position={[535.433, 313.79, 153.86]}>
                <mesh
                  name="3DGeom-122"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-122'].geometry}
                  material={materials['[0131_Silver]']}
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

useGLTF.preload('/Girls Dormitory.glb')
