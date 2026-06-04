

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
type Props = {
  selected?: boolean
  onSelect?: (id: string) => void
  onClick?: () => void
  visibleFloors?: string[]
}

export function Cafeteria({visibleFloors = ["1ST", "2ND", "roof"], selected, onSelect, onClick, ...props }: Props) {
  const { nodes, materials } = useGLTF('/Cafeteria.glb') as any;
  return (
    <group  {...props}
      onClick={(e) => {
        e.stopPropagation()
        onClick?.()
      }}  dispose={null} position={[-19,0,-83 ]} rotation={[0,Math.PI / 1.14, 0, ]}>
      <group>
        <group rotation={[-Math.PI / 2, 0, 0]}>
          <group name="Assembly-51" scale={0.001}>
            <group
              name="Active_View"
              position={[54964.277, 859.028, 30379.256]}
              rotation={[-0.321, 1.1, 1.928]}
              scale={1000}
            />       
            {visibleFloors.includes('1ST') && (
            <group
              name="ground"
              position={[12542.841, 14958.021, 0]}
              rotation={[0, 0, Math.PI]}
              scale={25.4}>
              <mesh
                name="3DGeom-1"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-1'].geometry}
                material={materials['[0056_Yellow]']}
              />
              <mesh
                name="3DGeom-2"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-2'].geometry}
                material={nodes['3DGeom-2'].material}
              />
              <mesh
                name="3DGeom-3"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-3'].geometry}
                material={materials['[0117_GhostWhite]']}
              />
              <mesh
                name="3DGeom-4"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-4'].geometry}
                material={materials['[0054_LightYellow]']}
              />
              <mesh
                name="3DGeom-5"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-5'].geometry}
                material={materials['[White Square Tile]']}
              />
              <mesh
                name="3DGeom-6"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-6'].geometry}
                material={materials['*']}
              />
              <mesh
                name="3DGeom-7"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-7'].geometry}
                material={materials['[0021_DarkRed]']}
              />
              <group
                position={[213.504, 590.551, 85.394]}
                rotation={[Math.PI / 2, -Math.PI / 2, 0]}>
                <mesh
                  name="3DGeom-8"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-8'].geometry}
                  material={materials['[0043_SaddleBrown]']}
                />
              </group>
              <group
                position={[213.504, 649.606, 85.394]}
                rotation={[Math.PI / 2, -Math.PI / 2, 0]}>
                <mesh
                  name="3DGeom-8_1"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-8_1'].geometry}
                  material={materials['[0043_SaddleBrown]']}
                />
              </group>
              <group
                position={[213.504, 496.063, 85.394]}
                rotation={[Math.PI / 2, -Math.PI / 2, 0]}>
                <mesh
                  name="3DGeom-8_2"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-8_2'].geometry}
                  material={materials['[0043_SaddleBrown]']}
                />
              </group>
              <group
                position={[213.504, 437.008, 85.394]}
                rotation={[Math.PI / 2, -Math.PI / 2, 0]}>
                <mesh
                  name="3DGeom-8_3"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-8_3'].geometry}
                  material={materials['[0043_SaddleBrown]']}
                />
              </group>
              <group position={[633.583, 75.984, 85.394]} rotation={[Math.PI / 2, 0, 0]}>
                <mesh
                  name="3DGeom-8_4"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-8_4'].geometry}
                  material={materials['[0043_SaddleBrown]']}
                />
              </group>
              <group position={[515.472, 75.984, 85.394]} rotation={[Math.PI / 2, 0, 0]}>
                <mesh
                  name="3DGeom-8_5"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-8_5'].geometry}
                  material={materials['[0043_SaddleBrown]']}
                />
              </group>
              <group
                position={[213.504, 708.661, 85.394]}
                rotation={[Math.PI / 2, -Math.PI / 2, 0]}>
                <mesh
                  name="3DGeom-8_6"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-8_6'].geometry}
                  material={materials['[0043_SaddleBrown]']}
                />
              </group>
              <group position={[411.142, 1183.858, 85.394]} rotation={[-Math.PI / 2, 0, -Math.PI]}>
                <mesh
                  name="3DGeom-8_7"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-8_7'].geometry}
                  material={materials['[0043_SaddleBrown]']}
                />
              </group>
              <group position={[342.244, 1183.858, 85.394]} rotation={[-Math.PI / 2, 0, -Math.PI]}>
                <mesh
                  name="3DGeom-8_8"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-8_8'].geometry}
                  material={materials['[0043_SaddleBrown]']}
                />
              </group>
              <group position={[273.346, 1183.858, 85.394]} rotation={[-Math.PI / 2, 0, -Math.PI]}>
                <mesh
                  name="3DGeom-8_9"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-8_9'].geometry}
                  material={materials['[0043_SaddleBrown]']}
                />
              </group>
              <group position={[798.937, 74.803, 59.803]}>
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
                  material={materials['[0135_DarkGray]']}
                />
                <mesh
                  name="3DGeom-20"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-20'].geometry}
                  material={materials['WB Glazing']}
                />
              </group>
              <group
                position={[213.504, 377.953, 85.394]}
                rotation={[Math.PI / 2, -Math.PI / 2, 0]}>
                <mesh
                  name="3DGeom-8_10"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-8_10'].geometry}
                  material={materials['[0043_SaddleBrown]']}
                />
              </group>
              <group position={[748.543, 1265.748, 79.488]}>
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
                  material={materials['[0135_DarkGray]']}
                />
              </group>
              <group position={[702.874, 1265.748, 79.488]}>
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
                  material={materials['[0135_DarkGray]']}
                />
              </group>
              <group position={[216.26, 862.205, 95.236]} rotation={[Math.PI / 2, -Math.PI / 2, 0]}>
                <mesh
                  name="3DGeom-26"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-26'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
              </group>
              <group position={[839.882, 1265.748, 79.488]}>
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
                  material={materials['[0135_DarkGray]']}
                />
              </group>
              <group position={[794.213, 1265.748, 79.488]}>
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
                  material={materials['[0135_DarkGray]']}
                />
              </group>
              <group
                position={[216.26, 1074.803, 95.236]}
                rotation={[Math.PI / 2, -Math.PI / 2, 0]}>
                <mesh
                  name="3DGeom-26_1"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-26_1'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
              </group>
              <group position={[574.528, 75.984, 85.394]} rotation={[Math.PI / 2, 0, 0]}>
                <mesh
                  name="3DGeom-8_11"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-8_11'].geometry}
                  material={materials['[0043_SaddleBrown]']}
                />
              </group>
              <group position={[420.984, 75.984, 85.394]} rotation={[Math.PI / 2, 0, 0]}>
                <mesh
                  name="3DGeom-8_12"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-8_12'].geometry}
                  material={materials['[0043_SaddleBrown]']}
                />
              </group>
              <group
                position={[897.362, 1074.803, 125.311]}
                rotation={[Math.PI / 2, -Math.PI / 2, 0]}
                scale={[1, 1.849, 1]}>
                <mesh
                  name="3DGeom-26_2"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-26_2'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
              </group>
              <group
                position={[897.362, 862.205, 125.311]}
                rotation={[Math.PI / 2, -Math.PI / 2, 0]}
                scale={[1, 1.849, 1]}>
                <mesh
                  name="3DGeom-26_3"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-26_3'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
              </group>
              <group position={[893.425, 106.299, 59.803]}>
                <mesh
                  name="3DGeom-36"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-36'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-37"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-37'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
                <mesh
                  name="3DGeom-38"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-38'].geometry}
                  material={materials['WB Glazing']}
                />
              </group>
              <group position={[893.425, 224.409, 59.803]}>
                <mesh
                  name="3DGeom-36_1"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-36_1'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-37_1"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-37_1'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
                <mesh
                  name="3DGeom-38_1"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-38_1'].geometry}
                  material={materials['WB Glazing']}
                />
              </group>
              <group position={[893.425, 397.638, 59.803]}>
                <mesh
                  name="3DGeom-36_2"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-36_2'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-37_2"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-37_2'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
                <mesh
                  name="3DGeom-38_2"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-38_2'].geometry}
                  material={materials['WB Glazing']}
                />
              </group>
              <group position={[711.772, 1177.165, 11.811]}>
                <mesh
                  name="3DGeom-45"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-45'].geometry}
                  material={materials['[0043_SaddleBrown]1']}
                />
                <mesh
                  name="3DGeom-46"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-46'].geometry}
                  material={materials['[0043_SaddleBrown]1']}
                />
              </group>
              <group position={[826.496, 1177.165, 11.811]}>
                <mesh
                  name="3DGeom-45_1"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-45_1'].geometry}
                  material={materials['[0043_SaddleBrown]1']}
                />
                <mesh
                  name="3DGeom-46_1"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-46_1'].geometry}
                  material={materials['[0043_SaddleBrown]1']}
                />
              </group>
              <group position={[858.025, 1267.717, 31.143]} rotation={[-Math.PI / 2, 0, -Math.PI]}>
                <mesh
                  name="3DGeom-49"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-49'].geometry}
                  material={materials['[0046_Gold]']}
                />
              </group>
              <group
                position={[212.323, 240.223, 128.591]}
                rotation={[Math.PI / 2, -Math.PI / 2, 0]}>
                <mesh
                  name="3DGeom-49_1"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-49_1'].geometry}
                  material={materials['[0046_Gold]']}
                />
              </group>
              <group
                position={[208.386, 976.378, 189.724]}
                rotation={[0, -0.271, -Math.PI]}
                scale={[1.04, 1, 1]}>
                <mesh
                  name="3DGeom-51"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-51'].geometry}
                  material={materials['[0021_DarkRed]']}
                />
              </group>
              <group
                position={[676.89, 1303.282, 157.973]}
                rotation={[-0.271, 0, Math.PI / 2]}
                scale={[1.051, 1, 1]}>
                <mesh
                  name="3DGeom-52"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-52'].geometry}
                  material={materials['[0021_DarkRed]']}
                />
              </group>
              <group position={[672.953, 0, 170.039]} rotation={[0.271, 0, -Math.PI / 2]}>
                <mesh
                  name="3DGeom-53"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-53'].geometry}
                  material={materials['[0021_DarkRed]']}
                />
              </group>
              <group position={[-1391.53, 321.307, 0.394]} scale={[1, 0.98, 1]}>
                <mesh
                  name="3DGeom-54"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-54'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
              </group>
              <group
                position={[27.184, -1531.018, 0.394]}
                rotation={[0, 0, Math.PI / 2]}
                scale={[1, 1.238, 1]}>
                <mesh
                  name="3DGeom-55"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-55'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
              </group>
              <group
                name="box"
                position={[641.732, 1181.102, 85.394]}
                rotation={[-Math.PI / 2, 0, -Math.PI]}>
                <mesh
                  name="3DGeom-56"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-56'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <group position={[29.252, -23.622, 1.969]} rotation={[-Math.PI / 2, 0, -Math.PI]} />
              </group>
              <group position={[574.528, 1181.102, 126.732]} rotation={[-Math.PI / 2, 0, -Math.PI]}>
                <mesh
                  name="3DGeom-57"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-57'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <group position={[0, 0, 1.969]} />
              </group>
              <group
                name="box_1"
                position={[507.323, 1181.102, 85.394]}
                rotation={[-Math.PI / 2, 0, -Math.PI]}>
                <mesh
                  name="3DGeom-58"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-58'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <group position={[29.252, -23.622, 1.969]} rotation={[-Math.PI / 2, 0, -Math.PI]} />
              </group>
              <group position={[574.528, 1181.102, 61.398]} rotation={[-Math.PI / 2, 0, -Math.PI]}>
                <mesh
                  name="3DGeom-59"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-59'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <group position={[0, 0, 1.969]} />
              </group>
              <group
                position={[-1395.467, 437.138, 145.49]}
                rotation={[0, 0, -Math.PI]}
                scale={[-1, -0.743, -1.298]}>
                <mesh
                  name="3DGeom-60"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-60'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
              </group>
              <group
                position={[893.425, 712.047, 101.315]}
                rotation={[Math.PI / 2, Math.PI / 2, 0]}
                scale={[1, 1.805, 1]}>
                <mesh
                  name="3DGeom-61"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-61'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <group position={[0, 0, 1.969]} />
              </group>
            </group>
             )}
            {visibleFloors.includes('roof') && (

            <group
              name="roof"
              position={[7249.841, 13158.021, 4846.556]}
              rotation={[0, 0, Math.PI]}
              scale={25.4}>
              <mesh
                name="3DGeom-62"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-62'].geometry}
                material={nodes['3DGeom-62'].material}
              />
              <mesh
                name="3DGeom-63"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-63'].geometry}
                material={materials['[0056_Yellow]']}
              />
              <mesh
                name="3DGeom-64"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-64'].geometry}
                material={materials['*']}
              />
              <mesh
                name="3DGeom-65"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-65'].geometry}
                material={materials['[0054_LightYellow]']}
              />
              <mesh
                name="3DGeom-66"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-66'].geometry}
                material={materials['[0136_Charcoal]']}
              />
              <group name="r1" position={[480.335, 3.937, 45.319]}>
                <mesh
                  name="3DGeom-67"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-67'].geometry}
                  material={materials['[0021_DarkRed]']}
                />
              </group>
              <group name="r2" position={[267.717, 0, 181.702]}>
                <mesh
                  name="3DGeom-68"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-68'].geometry}
                  material={materials['[0021_DarkRed]']}
                />
                <mesh
                  name="3DGeom-69"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-69'].geometry}
                  material={materials['[0021_DarkRed]']}
                />
              </group>
              <group name="r3" position={[15.335, 3.937, 86.517]}>
                <mesh
                  name="3DGeom-70"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-70'].geometry}
                  material={materials['[0021_DarkRed]']}
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

useGLTF.preload('/Cafeteria.glb')
