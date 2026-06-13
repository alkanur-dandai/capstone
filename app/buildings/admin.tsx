

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

type Props = {
  selected?: boolean
  onSelect?: (id: string) => void
  onClick?: () => void
   visibleFloors?: string[]
}

export function Admin({ visibleFloors = ["1ST", "2ND",  "roof"], selected, onClick, ...props }: Props) {
  const { nodes, materials } = useGLTF('/glb/adminnew.glb') as any;
  return (
    <group {...props}
      onClick={(e) => {
        e.stopPropagation()
        onClick?.()
      }} dispose={null} position={[-80,0,60]} rotation={[0, -Math.PI / 1.6, 0, ]} scale={[0.9,0.9,0.9]}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group name="Assembly-274" scale={0.001}>
               {visibleFloors.includes('roof') && (
          <group name="roof" position={[-12330.999, -29639.779, 9616]} scale={25.4}>
            <mesh
              name="3DGeom-1"
              castShadow
              receiveShadow
              geometry={nodes['3DGeom-1'].geometry}
              material={materials.cream}
              position={[403.543, 1181.102, 5.906]}
              scale={1181.102}
            />
            <mesh
              name="3DGeom-2"
              castShadow
              receiveShadow
              geometry={nodes['3DGeom-2'].geometry}
              material={materials['[0059_DarkOliveGreen]']}
              position={[403.543, 1190.945, 80.709]}
              scale={915.354}
            />
            <group position={[141.732, 2377.953, -39.37]}>
              <mesh
                name="3DGeom-3"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-3'].geometry}
                material={materials.cream}
                position={[165.354, 66.929, 3.937]}
                scale={165.354}
              />
            </group>
            <group position={[403.543, 1948.819, 149.606]} rotation={[0, 0.51, 0.033]}>
              <mesh
                name="3DGeom-4"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-4'].geometry}
                material={materials['[0059_DarkOliveGreen]']}
                position={[118.736, -766.687, 0.984]}
                scale={914.865}
              />
            </group>
            <group position={[403.543, 433.071, 149.606]} rotation={[0, -0.51, 3.105]}>
              <mesh
                name="3DGeom-5"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-5'].geometry}
                material={materials['[0059_DarkOliveGreen]']}
                position={[171.282, -747.138, 0.984]}
                scale={914.751}
              />
            </group>
            <group position={[649.606, 275.591, 11.811]} rotation={[0.719, 0, -1.34]}>
              <mesh
                name="3DGeom-6"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-6'].geometry}
                material={materials['[0059_DarkOliveGreen]']}
                position={[-130.015, -239.528, 0.984]}
                scale={239.528}
              />
            </group>
            <group position={[157.48, 2106.299, 11.811]} rotation={[-0.719, 0, Math.PI / 2]}>
              <mesh
                name="3DGeom-7"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-7'].geometry}
                material={materials['[0059_DarkOliveGreen]']}
                position={[-104.627, -246.063, 0.984]}
                scale={246.063}
              />
            </group>
          </group>
               )}
                {visibleFloors.includes('1ST') && (
          <group name="1stfloor" position={[-16044.999, -28722.779, 0]} scale={25.4}>
            <mesh
              name="3DGeom-8"
              castShadow
              receiveShadow
              geometry={nodes['3DGeom-8'].geometry}
              material={materials['[0052_FloralWhite]']}
              position={[648.189, 1236.496, 115.591]}
              scale={1288.346}
            />
            <mesh
              name="3DGeom-9"
              castShadow
              receiveShadow
              geometry={nodes['3DGeom-9'].geometry}
              material={materials.cream}
              position={[649.724, 1236.496, 121.535]}
              scale={1288.346}
            />
            <mesh
              name="3DGeom-10"
              castShadow
              receiveShadow
              geometry={nodes['3DGeom-10'].geometry}
              material={materials['[0049_Beige]']}
              position={[539.921, 1204.055, 97.598]}
              scale={1255.906}
            />
            <mesh
              name="3DGeom-11"
              castShadow
              receiveShadow
              geometry={nodes['3DGeom-11'].geometry}
              material={materials['*']}
              position={[658.032, 1145, 15.748]}
              scale={1181.102}
            />
            <mesh
              name="3DGeom-12"
              castShadow
              receiveShadow
              geometry={nodes['3DGeom-12'].geometry}
              material={materials['[0022_Maroon]']}
              position={[707.244, 1145, 19.685]}
              scale={1181.102}
            />
            <mesh
              name="3DGeom-13"
              castShadow
              receiveShadow
              geometry={nodes['3DGeom-13'].geometry}
              material={materials['[0136_Charcoal]']}
              position={[776.142, 2011.142, 97.598]}
              scale={157.48}
            />
            <mesh
              name="3DGeom-14"
              castShadow
              receiveShadow
              geometry={nodes['3DGeom-14'].geometry}
              material={materials['[0021_DarkRed]']}
              position={[1172.913, 1145, 213.543]}
              scale={196.85}
            />
            <group position={[476.929, 2109.567, 15.748]}>
              <mesh
                name="3DGeom-15"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-15'].geometry}
                material={materials['[0042_Sienna]']}
                position={[1.969, 18.701, 41.339]}
                scale={41.339}
              />
              <mesh
                name="3DGeom-16"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-16'].geometry}
                material={materials['[0052_FloralWhite]']}
                position={[1.969, 18.701, 61.516]}
                scale={19.193}
              />
              <mesh
                name="3DGeom-17"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-17'].geometry}
                material={materials['[Translucent Glass Gray]6']}
                position={[1.87, 18.701, 61.516]}
                scale={19.193}
              />
            </group>
            <group position={[602.913, 852.756, 15.748]} rotation={[0, 0, -Math.PI]}>
              <mesh
                name="3DGeom-18"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-18'].geometry}
                material={materials.Heather_Brim1}
                position={[1.969, 18.701, 41.339]}
                scale={41.339}
              />
              <mesh
                name="3DGeom-19"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-19'].geometry}
                material={materials['[Translucent Glass Gray]6']}
                position={[2.402, 18.701, 61.516]}
                scale={15.256}
              />
              <mesh
                name="3DGeom-20"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-20'].geometry}
                material={materials['[0071_MediumSpringGreen]']}
                position={[3.15, 18.701, 21.161]}
                scale={16.043}
              />
            </group>
            <group position={[602.913, 785.669, 15.748]} rotation={[0, 0, -Math.PI]}>
              <mesh
                name="3DGeom-18_1"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-18_1'].geometry}
                material={materials.Heather_Brim1}
                position={[1.969, 18.701, 41.339]}
                scale={41.339}
              />
              <mesh
                name="3DGeom-19_1"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-19_1'].geometry}
                material={materials['[Translucent Glass Gray]6']}
                position={[2.402, 18.701, 61.516]}
                scale={15.256}
              />
              <mesh
                name="3DGeom-20_1"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-20_1'].geometry}
                material={materials['[0071_MediumSpringGreen]']}
                position={[3.15, 18.701, 21.161]}
                scale={16.043}
              />
            </group>
            <group position={[602.913, 498.425, 15.748]} rotation={[0, 0, -Math.PI]}>
              <mesh
                name="3DGeom-18_2"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-18_2'].geometry}
                material={materials.Heather_Brim1}
                position={[1.969, 18.701, 41.339]}
                scale={41.339}
              />
              <mesh
                name="3DGeom-19_2"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-19_2'].geometry}
                material={materials['[Translucent Glass Gray]6']}
                position={[2.402, 18.701, 61.516]}
                scale={15.256}
              />
              <mesh
                name="3DGeom-20_2"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-20_2'].geometry}
                material={materials['[0071_MediumSpringGreen]']}
                position={[3.15, 18.701, 21.161]}
                scale={16.043}
              />
            </group>
            <group position={[602.913, 431.339, 15.748]} rotation={[0, 0, -Math.PI]}>
              <mesh
                name="3DGeom-18_3"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-18_3'].geometry}
                material={materials.Heather_Brim1}
                position={[1.969, 18.701, 41.339]}
                scale={41.339}
              />
              <mesh
                name="3DGeom-19_3"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-19_3'].geometry}
                material={materials['[Translucent Glass Gray]6']}
                position={[2.402, 18.701, 61.516]}
                scale={15.256}
              />
              <mesh
                name="3DGeom-20_3"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-20_3'].geometry}
                material={materials['[0071_MediumSpringGreen]']}
                position={[3.15, 18.701, 21.161]}
                scale={16.043}
              />
            </group>
            <group position={[476.929, 922.559, 15.748]}>
              <mesh
                name="3DGeom-18_4"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-18_4'].geometry}
                material={materials.Heather_Brim1}
                position={[1.969, 18.701, 41.339]}
                scale={41.339}
              />
              <mesh
                name="3DGeom-19_4"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-19_4'].geometry}
                material={materials['[Translucent Glass Gray]6']}
                position={[2.402, 18.701, 61.516]}
                scale={15.256}
              />
              <mesh
                name="3DGeom-20_4"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-20_4'].geometry}
                material={materials['[0071_MediumSpringGreen]']}
                position={[3.15, 18.701, 21.161]}
                scale={16.043}
              />
            </group>
            <group position={[598.976, 1759.173, 15.748]}>
              <mesh
                name="3DGeom-33"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-33'].geometry}
                material={materials.Heather_Brim1}
                position={[1.969, 18.701, 41.339]}
                scale={41.339}
              />
            </group>
            <group position={[598.976, 1796.575, 15.748]}>
              <mesh
                name="3DGeom-33_1"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-33_1'].geometry}
                material={materials.Heather_Brim1}
                position={[1.969, 18.701, 41.339]}
                scale={41.339}
              />
            </group>
            <group position={[480.866, 1479.646, 15.748]} rotation={[0, 0, -Math.PI]}>
              <mesh
                name="3DGeom-33_2"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-33_2'].geometry}
                material={materials.Heather_Brim1}
                position={[1.969, 18.701, 41.339]}
                scale={41.339}
              />
            </group>
            <group position={[598.976, 1896.417, 51.732]} rotation={[Math.PI / 2, Math.PI / 2, 0]}>
              <mesh
                name="3DGeom-36"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-36'].geometry}
                material={materials['[0136_Charcoal]']}
                position={[39.37, 41.339, 1.969]}
                scale={41.339}
              />
              <mesh
                name="3DGeom-37"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-37'].geometry}
                material={materials['WB Glazing']}
                position={[39.37, 41.339, 1.969]}
                scale={37.402}
              />
              <mesh
                name="3DGeom-38"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-38'].geometry}
                material={materials['[0135_DarkGray]']}
                position={[39.37, 41.339, 2.362]}
                scale={37.402}
              />
            </group>
            <group position={[602.913, 2068.228, 15.748]} rotation={[0, 0, Math.PI]}>
              <mesh
                name="3DGeom-18_5"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-18_5'].geometry}
                material={materials.Heather_Brim1}
                position={[1.969, 18.701, 41.339]}
                scale={41.339}
              />
              <mesh
                name="3DGeom-19_5"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-19_5'].geometry}
                material={materials['[Translucent Glass Gray]6']}
                position={[2.402, 18.701, 61.516]}
                scale={15.256}
              />
              <mesh
                name="3DGeom-20_5"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-20_5'].geometry}
                material={materials['[0071_MediumSpringGreen]']}
                position={[3.15, 18.701, 21.161]}
                scale={16.043}
              />
            </group>
            <group position={[602.913, 254.173, 15.748]} rotation={[0, 0, -Math.PI]}>
              <mesh
                name="3DGeom-18_6"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-18_6'].geometry}
                material={materials.Heather_Brim1}
                position={[1.969, 18.701, 41.339]}
                scale={41.339}
              />
              <mesh
                name="3DGeom-19_6"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-19_6'].geometry}
                material={materials['[Translucent Glass Gray]6']}
                position={[2.402, 18.701, 61.516]}
                scale={15.256}
              />
              <mesh
                name="3DGeom-20_6"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-20_6'].geometry}
                material={materials['[0071_MediumSpringGreen]']}
                position={[3.15, 18.701, 21.161]}
                scale={16.043}
              />
            </group>
            <group position={[378.504, 151.378, 15.748]} rotation={[0, 0, -Math.PI / 2]}>
              <mesh
                name="3DGeom-45"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-45'].geometry}
                material={materials['[0043_SaddleBrown]']}
                position={[18.701, 1.969, 41.339]}
                scale={41.339}
              />
            </group>
            <group position={[419.843, 263.11, 15.748]} rotation={[0, 0, Math.PI]}>
              <mesh
                name="3DGeom-45_1"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-45_1'].geometry}
                material={materials['[0043_SaddleBrown]']}
                position={[18.701, 1.969, 41.339]}
                scale={41.339}
              />
            </group>
            <group position={[949.37, 180.433, 95.906]} rotation={[Math.PI / 2, Math.PI / 2, 0]}>
              <mesh
                name="3DGeom-47"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-47'].geometry}
                material={materials['[0136_Charcoal]']}
                position={[0, 9.843, 1.969]}
                scale={78.74}
              />
              <mesh
                name="3DGeom-48"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-48'].geometry}
                material={materials['[0135_DarkGray]']}
                position={[0, 9.843, 1.969]}
                scale={76.772}
              />
            </group>
            <group position={[949.37, 357.598, 95.906]} rotation={[Math.PI / 2, Math.PI / 2, 0]}>
              <mesh
                name="3DGeom-47_1"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-47_1'].geometry}
                material={materials['[0136_Charcoal]']}
                position={[0, 9.843, 1.969]}
                scale={78.74}
              />
              <mesh
                name="3DGeom-48_1"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-48_1'].geometry}
                material={materials['[0135_DarkGray]']}
                position={[0, 9.843, 1.969]}
                scale={76.772}
              />
            </group>
            <group position={[949.37, 534.764, 95.906]} rotation={[Math.PI / 2, Math.PI / 2, 0]}>
              <mesh
                name="3DGeom-47_2"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-47_2'].geometry}
                material={materials['[0136_Charcoal]']}
                position={[0, 9.843, 1.969]}
                scale={78.74}
              />
              <mesh
                name="3DGeom-48_2"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-48_2'].geometry}
                material={materials['[0135_DarkGray]']}
                position={[0, 9.843, 1.969]}
                scale={76.772}
              />
            </group>
            <group position={[949.37, 711.929, 95.906]} rotation={[Math.PI / 2, Math.PI / 2, 0]}>
              <mesh
                name="3DGeom-47_3"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-47_3'].geometry}
                material={materials['[0136_Charcoal]']}
                position={[0, 9.843, 1.969]}
                scale={78.74}
              />
              <mesh
                name="3DGeom-48_3"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-48_3'].geometry}
                material={materials['[0135_DarkGray]']}
                position={[0, 9.843, 1.969]}
                scale={76.772}
              />
            </group>
            <group position={[949.37, 889.094, 95.906]} rotation={[Math.PI / 2, Math.PI / 2, 0]}>
              <mesh
                name="3DGeom-47_4"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-47_4'].geometry}
                material={materials['[0136_Charcoal]']}
                position={[0, 9.843, 1.969]}
                scale={78.74}
              />
              <mesh
                name="3DGeom-48_4"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-48_4'].geometry}
                material={materials['[0135_DarkGray]']}
                position={[0, 9.843, 1.969]}
                scale={76.772}
              />
            </group>
            <group position={[949.37, 1400.906, 95.906]} rotation={[Math.PI / 2, Math.PI / 2, 0]}>
              <mesh
                name="3DGeom-47_5"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-47_5'].geometry}
                material={materials['[0136_Charcoal]']}
                position={[0, 9.843, 1.969]}
                scale={78.74}
              />
              <mesh
                name="3DGeom-48_5"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-48_5'].geometry}
                material={materials['[0135_DarkGray]']}
                position={[0, 9.843, 1.969]}
                scale={76.772}
              />
            </group>
            <group position={[949.37, 1578.071, 95.906]} rotation={[Math.PI / 2, Math.PI / 2, 0]}>
              <mesh
                name="3DGeom-47_6"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-47_6'].geometry}
                material={materials['[0136_Charcoal]']}
                position={[0, 9.843, 1.969]}
                scale={78.74}
              />
              <mesh
                name="3DGeom-48_6"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-48_6'].geometry}
                material={materials['[0135_DarkGray]']}
                position={[0, 9.843, 1.969]}
                scale={76.772}
              />
            </group>
            <group position={[949.37, 1755.236, 95.906]} rotation={[Math.PI / 2, Math.PI / 2, 0]}>
              <mesh
                name="3DGeom-47_7"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-47_7'].geometry}
                material={materials['[0136_Charcoal]']}
                position={[0, 9.843, 1.969]}
                scale={78.74}
              />
              <mesh
                name="3DGeom-48_7"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-48_7'].geometry}
                material={materials['[0135_DarkGray]']}
                position={[0, 9.843, 1.969]}
                scale={76.772}
              />
            </group>
            <group position={[949.37, 1932.402, 95.906]} rotation={[Math.PI / 2, Math.PI / 2, 0]}>
              <mesh
                name="3DGeom-47_8"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-47_8'].geometry}
                material={materials['[0136_Charcoal]']}
                position={[0, 9.843, 1.969]}
                scale={78.74}
              />
              <mesh
                name="3DGeom-48_8"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-48_8'].geometry}
                material={materials['[0135_DarkGray]']}
                position={[0, 9.843, 1.969]}
                scale={76.772}
              />
            </group>
            <group position={[949.37, 2109.567, 95.906]} rotation={[Math.PI / 2, Math.PI / 2, 0]}>
              <mesh
                name="3DGeom-47_9"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-47_9'].geometry}
                material={materials['[0136_Charcoal]']}
                position={[0, 9.843, 1.969]}
                scale={78.74}
              />
              <mesh
                name="3DGeom-48_9"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-48_9'].geometry}
                material={materials['[0135_DarkGray]']}
                position={[0, 9.843, 1.969]}
                scale={76.772}
              />
            </group>
            <group position={[130.472, 180.433, 95.906]} rotation={[Math.PI / 2, -Math.PI / 2, 0]}>
              <mesh
                name="3DGeom-47_10"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-47_10'].geometry}
                material={materials['[0136_Charcoal]']}
                position={[0, 9.843, 1.969]}
                scale={78.74}
              />
              <mesh
                name="3DGeom-48_10"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-48_10'].geometry}
                material={materials['[0135_DarkGray]']}
                position={[0, 9.843, 1.969]}
                scale={76.772}
              />
            </group>
            <group position={[130.472, 357.598, 95.906]} rotation={[Math.PI / 2, -Math.PI / 2, 0]}>
              <mesh
                name="3DGeom-47_11"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-47_11'].geometry}
                material={materials['[0136_Charcoal]']}
                position={[0, 9.843, 1.969]}
                scale={78.74}
              />
              <mesh
                name="3DGeom-48_11"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-48_11'].geometry}
                material={materials['[0135_DarkGray]']}
                position={[0, 9.843, 1.969]}
                scale={76.772}
              />
            </group>
            <group position={[130.472, 534.764, 95.906]} rotation={[Math.PI / 2, -Math.PI / 2, 0]}>
              <mesh
                name="3DGeom-47_12"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-47_12'].geometry}
                material={materials['[0136_Charcoal]']}
                position={[0, 9.843, 1.969]}
                scale={78.74}
              />
              <mesh
                name="3DGeom-48_12"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-48_12'].geometry}
                material={materials['[0135_DarkGray]']}
                position={[0, 9.843, 1.969]}
                scale={76.772}
              />
            </group>
            <group position={[130.472, 711.929, 95.906]} rotation={[Math.PI / 2, -Math.PI / 2, 0]}>
              <mesh
                name="3DGeom-47_13"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-47_13'].geometry}
                material={materials['[0136_Charcoal]']}
                position={[0, 9.843, 1.969]}
                scale={78.74}
              />
              <mesh
                name="3DGeom-48_13"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-48_13'].geometry}
                material={materials['[0135_DarkGray]']}
                position={[0, 9.843, 1.969]}
                scale={76.772}
              />
            </group>
            <group position={[130.472, 889.094, 95.906]} rotation={[Math.PI / 2, -Math.PI / 2, 0]}>
              <mesh
                name="3DGeom-47_14"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-47_14'].geometry}
                material={materials['[0136_Charcoal]']}
                position={[0, 9.843, 1.969]}
                scale={78.74}
              />
              <mesh
                name="3DGeom-48_14"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-48_14'].geometry}
                material={materials['[0135_DarkGray]']}
                position={[0, 9.843, 1.969]}
                scale={76.772}
              />
            </group>
            <group position={[130.472, 1400.906, 95.906]} rotation={[Math.PI / 2, -Math.PI / 2, 0]}>
              <mesh
                name="3DGeom-47_15"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-47_15'].geometry}
                material={materials['[0136_Charcoal]']}
                position={[0, 9.843, 1.969]}
                scale={78.74}
              />
              <mesh
                name="3DGeom-48_15"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-48_15'].geometry}
                material={materials['[0135_DarkGray]']}
                position={[0, 9.843, 1.969]}
                scale={76.772}
              />
            </group>
            <group position={[130.472, 1578.071, 95.906]} rotation={[Math.PI / 2, -Math.PI / 2, 0]}>
              <mesh
                name="3DGeom-47_16"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-47_16'].geometry}
                material={materials['[0136_Charcoal]']}
                position={[0, 9.843, 1.969]}
                scale={78.74}
              />
              <mesh
                name="3DGeom-48_16"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-48_16'].geometry}
                material={materials['[0135_DarkGray]']}
                position={[0, 9.843, 1.969]}
                scale={76.772}
              />
            </group>
            <group position={[130.472, 1755.236, 95.906]} rotation={[Math.PI / 2, -Math.PI / 2, 0]}>
              <mesh
                name="3DGeom-47_17"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-47_17'].geometry}
                material={materials['[0136_Charcoal]']}
                position={[0, 9.843, 1.969]}
                scale={78.74}
              />
              <mesh
                name="3DGeom-48_17"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-48_17'].geometry}
                material={materials['[0135_DarkGray]']}
                position={[0, 9.843, 1.969]}
                scale={76.772}
              />
            </group>
            <group position={[130.472, 1932.402, 95.906]} rotation={[Math.PI / 2, -Math.PI / 2, 0]}>
              <mesh
                name="3DGeom-47_18"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-47_18'].geometry}
                material={materials['[0136_Charcoal]']}
                position={[0, 9.843, 1.969]}
                scale={78.74}
              />
              <mesh
                name="3DGeom-48_18"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-48_18'].geometry}
                material={materials['[0135_DarkGray]']}
                position={[0, 9.843, 1.969]}
                scale={76.772}
              />
            </group>
            <group position={[130.472, 2109.567, 95.906]} rotation={[Math.PI / 2, -Math.PI / 2, 0]}>
              <mesh
                name="3DGeom-47_19"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-47_19'].geometry}
                material={materials['[0136_Charcoal]']}
                position={[0, 9.843, 1.969]}
                scale={78.74}
              />
              <mesh
                name="3DGeom-48_19"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-48_19'].geometry}
                material={materials['[0135_DarkGray]']}
                position={[0, 9.843, 1.969]}
                scale={76.772}
              />
            </group>
            <group position={[949.37, 1036.26, 69.291]} rotation={[Math.PI / 2, Math.PI / 2, 0]}>
              <mesh
                name="3DGeom-87"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-87'].geometry}
                material={materials['[0136_Charcoal]']}
                position={[0, 0, 1.969]}
                scale={30}
              />
              <mesh
                name="3DGeom-88"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-88'].geometry}
                material={materials['[Translucent Glass Gray]6']}
                position={[0, 0, 1.969]}
                scale={28.031}
              />
            </group>
            <group position={[949.37, 1253.74, 69.291]} rotation={[Math.PI / 2, Math.PI / 2, 0]}>
              <mesh
                name="3DGeom-87_1"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-87_1'].geometry}
                material={materials['[0136_Charcoal]']}
                position={[0, 0, 1.969]}
                scale={30}
              />
              <mesh
                name="3DGeom-88_1"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-88_1'].geometry}
                material={materials['[Translucent Glass Gray]6']}
                position={[0, 0, 1.969]}
                scale={28.031}
              />
            </group>
            <group position={[476.929, 1231.614, 87.756]} rotation={[Math.PI / 2, Math.PI / 2, 0]}>
              <mesh
                name="3DGeom-91"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-91'].geometry}
                material={materials['[0136_Charcoal]']}
                position={[0, 0, 1.969]}
                scale={72.008}
              />
              <mesh
                name="3DGeom-92"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-92'].geometry}
                material={materials['[Translucent Glass Gray]6']}
                position={[0, 0, 1.969]}
                scale={70.039}
              />
            </group>
            <group
              position={[390.315, 1148.937, 72.876]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={[1, 0.793, 1]}>
              <mesh
                name="3DGeom-91_1"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-91_1'].geometry}
                material={materials['[0136_Charcoal]']}
                position={[0, 0, 1.969]}
                scale={72.008}
              />
              <mesh
                name="3DGeom-92_1"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-92_1'].geometry}
                material={materials['[Translucent Glass Gray]6']}
                position={[0, 0, 1.969]}
                scale={70.039}
              />
            </group>
            <group position={[776.142, 983.583, 93.74]} rotation={[-Math.PI / 2, 0, -Math.PI]}>
              <mesh
                name="3DGeom-95"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-95'].geometry}
                material={materials.Heather_Brim1}
                position={[0, 0, 1.969]}
                scale={98.425}
              />
              <mesh
                name="3DGeom-96"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-96'].geometry}
                material={materials['[Translucent Glass Gray]6']}
                position={[0, 0, 1.969]}
                scale={96.457}
              />
            </group>
            <group position={[598.976, 1359.567, 51.732]} rotation={[Math.PI / 2, Math.PI / 2, 0]}>
              <mesh
                name="3DGeom-36_1"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-36_1'].geometry}
                material={materials['[0136_Charcoal]']}
                position={[39.37, 41.339, 1.969]}
                scale={41.339}
              />
              <mesh
                name="3DGeom-37_1"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-37_1'].geometry}
                material={materials['WB Glazing']}
                position={[39.37, 41.339, 1.969]}
                scale={37.402}
              />
              <mesh
                name="3DGeom-38_1"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-38_1'].geometry}
                material={materials['[0135_DarkGray]']}
                position={[39.37, 41.339, 2.362]}
                scale={37.402}
              />
            </group>
            <group position={[598.976, 1576.102, 51.732]} rotation={[Math.PI / 2, Math.PI / 2, 0]}>
              <mesh
                name="3DGeom-36_2"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-36_2'].geometry}
                material={materials['[0136_Charcoal]']}
                position={[39.37, 41.339, 1.969]}
                scale={41.339}
              />
              <mesh
                name="3DGeom-37_2"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-37_2'].geometry}
                material={materials['WB Glazing']}
                position={[39.37, 41.339, 1.969]}
                scale={37.402}
              />
              <mesh
                name="3DGeom-38_2"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-38_2'].geometry}
                material={materials['[0135_DarkGray]']}
                position={[39.37, 41.339, 2.362]}
                scale={37.402}
              />
            </group>
            <group position={[480.866, 1833.976, 15.748]} rotation={[0, 0, -Math.PI]}>
              <mesh
                name="3DGeom-33_3"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-33_3'].geometry}
                material={materials.Heather_Brim1}
                position={[1.969, 18.701, 41.339]}
                scale={41.339}
              />
            </group>
            <group position={[913.987, 1305.127, 15.748]} rotation={[0, 0, Math.PI / 2]}>
              <mesh
                name="3DGeom-33_4"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-33_4'].geometry}
                material={materials.Heather_Brim1}
                position={[1.969, 18.701, 41.339]}
                scale={41.339}
              />
            </group>
            <group position={[476.929, 6.299, 15.748]} rotation={[0, 0, -Math.PI / 2]}>
              <mesh
                name="3DGeom-45_2"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-45_2'].geometry}
                material={materials['[0043_SaddleBrown]']}
                position={[18.701, 1.969, 41.339]}
                scale={41.339}
              />
            </group>
            <group position={[539.921, -47.913, 104.331]} rotation={[Math.PI / 2, 0, 0]}>
              <mesh
                name="3DGeom-106"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-106'].geometry}
                material={materials['[0043_SaddleBrown]']}
                position={[0, 0, 1.969]}
                scale={39.37}
              />
              <mesh
                name="3DGeom-107"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-107'].geometry}
                material={materials['[Translucent Glass Gray]6']}
                position={[0, 0, 1.969]}
                scale={37.402}
              />
            </group>
            <group position={[500.551, -51.85, 15.748]}>
              <mesh
                name="3DGeom-108"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-108'].geometry}
                material={materials['[0071_MediumSpringGreen]']}
                position={[19.685, 1.969, 39.37]}
                scale={33.465}
              />
              <mesh
                name="3DGeom-109"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-109'].geometry}
                material={materials['[0043_SaddleBrown]']}
                position={[19.685, 1.969, 39.37]}
                scale={39.37}
              />
            </group>
            <group position={[539.921, -51.85, 15.748]}>
              <mesh
                name="3DGeom-108_1"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-108_1'].geometry}
                material={materials['[0071_MediumSpringGreen]']}
                position={[19.685, 1.969, 39.37]}
                scale={33.465}
              />
              <mesh
                name="3DGeom-109_1"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-109_1'].geometry}
                material={materials['[0043_SaddleBrown]']}
                position={[19.685, 1.969, 39.37]}
                scale={39.37}
              />
            </group>
            <group position={[500.551, 2337.913, 15.748]}>
              <mesh
                name="3DGeom-108_2"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-108_2'].geometry}
                material={materials['[0071_MediumSpringGreen]']}
                position={[19.685, 1.969, 39.37]}
                scale={33.465}
              />
              <mesh
                name="3DGeom-109_2"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-109_2'].geometry}
                material={materials['[0043_SaddleBrown]']}
                position={[19.685, 1.969, 39.37]}
                scale={39.37}
              />
            </group>
            <group position={[539.921, 2337.913, 15.748]}>
              <mesh
                name="3DGeom-108_3"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-108_3'].geometry}
                material={materials['[0071_MediumSpringGreen]']}
                position={[19.685, 1.969, 39.37]}
                scale={33.465}
              />
              <mesh
                name="3DGeom-109_3"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-109_3'].geometry}
                material={materials['[0043_SaddleBrown]']}
                position={[19.685, 1.969, 39.37]}
                scale={39.37}
              />
            </group>
            <group position={[476.929, 2382.205, 15.748]}>
              <mesh
                name="3DGeom-116"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-116'].geometry}
                material={materials['[0043_SaddleBrown]']}
                position={[1.969, 18.701, 41.339]}
                scale={41.339}
              />
              <mesh
                name="3DGeom-117"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-117'].geometry}
                material={materials['[0071_MediumSpringGreen]']}
                position={[1.969, 18.701, 41.339]}
                scale={39.37}
              />
            </group>
            <group position={[478.898, 2437.323, 88.583]} rotation={[Math.PI / 2, Math.PI / 2, 0]}>
              <mesh
                name="3DGeom-118"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-118'].geometry}
                material={materials['[0136_Charcoal]']}
                position={[0, 0, 0.984]}
                scale={9.843}
              />
              <mesh
                name="3DGeom-119"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-119'].geometry}
                material={materials['[0135_DarkGray]']}
                position={[0, 0, 0.984]}
                scale={9.055}
              />
            </group>
            <group position={[478.898, 2364.488, 88.583]} rotation={[Math.PI / 2, Math.PI / 2, 0]}>
              <mesh
                name="3DGeom-118_1"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-118_1'].geometry}
                material={materials['[0136_Charcoal]']}
                position={[0, 0, 0.984]}
                scale={9.843}
              />
              <mesh
                name="3DGeom-119_1"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-119_1'].geometry}
                material={materials['[0135_DarkGray]']}
                position={[0, 0, 0.984]}
                scale={9.055}
              />
            </group>
            <group position={[854.882, 85.945, 95.906]} rotation={[Math.PI / 2, 0, 0]}>
              <mesh
                name="3DGeom-47_20"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-47_20'].geometry}
                material={materials['[0136_Charcoal]']}
                position={[0, 9.843, 1.969]}
                scale={78.74}
              />
              <mesh
                name="3DGeom-48_20"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-48_20'].geometry}
                material={materials['[0135_DarkGray]']}
                position={[0, 9.843, 1.969]}
                scale={76.772}
              />
            </group>
            <group
              position={[756.457, 82.008, 91.102]}
              rotation={[-Math.PI / 2, 0, Math.PI]}
              scale={[0.82, 1.505, 0.78]}>
              <mesh
                name="3DGeom-124"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-124'].geometry}
                material={materials['[0136_Charcoal]']}
                position={[23.996, 22.815, 1.969]}
                scale={23.996}
              />
              <mesh
                name="3DGeom-125"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-125'].geometry}
                material={materials['[0135_DarkGray]']}
                position={[23.996, 22.815, 1.969]}
                scale={20.059}
              />
              <mesh
                name="3DGeom-126"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-126'].geometry}
                material={materials['WB Glazing']}
                position={[23.996, 22.815, 2.362]}
                scale={20.059}
              />
            </group>
            <group position={[618.661, 82.008, 51.732]}>
              <mesh
                name="3DGeom-127"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-127'].geometry}
                material={materials['[0136_Charcoal]']}
                position={[39.37, 1.969, 54.016]}
                scale={54.016}
              />
              <mesh
                name="3DGeom-128"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-128'].geometry}
                material={materials['[0135_DarkGray]']}
                position={[39.37, 1.969, 54.016]}
                scale={52.047}
              />
            </group>
            <group position={[854.882, 2207.992, 95.906]} rotation={[Math.PI / 2, 0, 0]}>
              <mesh
                name="3DGeom-47_21"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-47_21'].geometry}
                material={materials['[0136_Charcoal]']}
                position={[0, 9.843, 1.969]}
                scale={78.74}
              />
              <mesh
                name="3DGeom-48_21"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-48_21'].geometry}
                material={materials['[0135_DarkGray]']}
                position={[0, 9.843, 1.969]}
                scale={76.772}
              />
            </group>
            <group
              position={[717.087, 2207.992, 91.102]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={[0.82, 1.505, 0.78]}>
              <mesh
                name="3DGeom-124_1"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-124_1'].geometry}
                material={materials['[0136_Charcoal]']}
                position={[23.996, 22.815, 1.969]}
                scale={23.996}
              />
              <mesh
                name="3DGeom-125_1"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-125_1'].geometry}
                material={materials['[0135_DarkGray]']}
                position={[23.996, 22.815, 1.969]}
                scale={20.059}
              />
              <mesh
                name="3DGeom-126_1"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-126_1'].geometry}
                material={materials['WB Glazing']}
                position={[23.996, 22.815, 2.362]}
                scale={20.059}
              />
            </group>
            <group position={[618.661, 2204.055, 51.732]}>
              <mesh
                name="3DGeom-127_1"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-127_1'].geometry}
                material={materials['[0136_Charcoal]']}
                position={[39.37, 1.969, 54.016]}
                scale={54.016}
              />
              <mesh
                name="3DGeom-128_1"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-128_1'].geometry}
                material={materials['[0135_DarkGray]']}
                position={[39.37, 1.969, 54.016]}
                scale={52.047}
              />
            </group>
            <group position={[602.913, 697.087, 88.583]} rotation={[Math.PI / 2, -Math.PI / 2, 0]}>
              <mesh
                name="3DGeom-136"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-136'].geometry}
                material={materials.Heather_Brim1}
                position={[0, 0, 1.969]}
                scale={39.37}
              />
              <mesh
                name="3DGeom-137"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-137'].geometry}
                material={materials['[Translucent Glass Gray]6']}
                position={[0, 0, 1.969]}
                scale={37.402}
              />
            </group>
            <group position={[-2240.057, -4665.019, 0]}>
              <mesh
                name="3DGeom-138"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-138'].geometry}
                material={materials['[0045_Goldenrod]']}
                position={[3066.221, 5694.825, 40.72]}
                scale={25.948}
              />
            </group>
            <group position={[-2290.844, -4664.742, 0]}>
              <mesh
                name="3DGeom-138_1"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-138_1'].geometry}
                material={materials['[0045_Goldenrod]']}
                position={[3066.221, 5694.825, 40.72]}
                scale={25.948}
              />
            </group>
            <group position={[-2341.396, -4665.019, 0]}>
              <mesh
                name="3DGeom-138_2"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-138_2'].geometry}
                material={materials['[0045_Goldenrod]']}
                position={[3066.221, 5694.825, 40.72]}
                scale={25.948}
              />
            </group>
            <group position={[949.37, 1184.37, 61.024]} rotation={[Math.PI / 2, Math.PI / 2, 0]}>
              <mesh
                name="3DGeom-141"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-141'].geometry}
                material={materials['[0136_Charcoal]']}
                position={[0, 0, 2.953]}
                scale={45.276}
              />
              <mesh
                name="3DGeom-142"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-142'].geometry}
                material={materials['[Translucent Glass Gray]6']}
                position={[0, 0, 1.969]}
                scale={43.307}
              />
            </group>
            <group position={[949.37, 1105.63, 61.024]} rotation={[Math.PI / 2, Math.PI / 2, 0]}>
              <mesh
                name="3DGeom-141_1"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-141_1'].geometry}
                material={materials['[0136_Charcoal]']}
                position={[0, 0, 2.953]}
                scale={45.276}
              />
              <mesh
                name="3DGeom-142_1"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-142_1'].geometry}
                material={materials['[Translucent Glass Gray]6']}
                position={[0, 0, 1.969]}
                scale={43.307}
              />
            </group>
            <group position={[602.913, 549.606, 88.583]} rotation={[Math.PI / 2, -Math.PI / 2, 0]}>
              <mesh
                name="3DGeom-136_1"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-136_1'].geometry}
                material={materials.Heather_Brim1}
                position={[0, 0, 1.969]}
                scale={39.37}
              />
              <mesh
                name="3DGeom-137_1"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-137_1'].geometry}
                material={materials['[Translucent Glass Gray]6']}
                position={[0, 0, 1.969]}
                scale={37.402}
              />
            </group>
            <group position={[622.385, 744.198, 15.748]} rotation={[0, 0, -Math.PI / 2]}>
              <mesh
                name="3DGeom-147"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-147'].geometry}
                material={materials['[Wood Bamboo]']}
                position={[36.89, 22.323, 15]}
                scale={31.181}
              />
              <mesh
                name="3DGeom-148"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-148'].geometry}
                material={materials['[Carpet Loop Pattern]']}
                position={[36.89, 22.323, 30]}
                scale={31.181}
              />
            </group>
            <group position={[622.385, 654.472, 15.748]} rotation={[0, 0, -Math.PI / 2]}>
              <mesh
                name="3DGeom-147_1"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-147_1'].geometry}
                material={materials['[Wood Bamboo]']}
                position={[36.89, 22.323, 15]}
                scale={31.181}
              />
              <mesh
                name="3DGeom-148_1"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-148_1'].geometry}
                material={materials['[Carpet Loop Pattern]']}
                position={[36.89, 22.323, 30]}
                scale={31.181}
              />
            </group>
            <group position={[734.438, 489.168, 15.748]}>
              <mesh
                name="3DGeom-147_2"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-147_2'].geometry}
                material={materials['[Wood Bamboo]']}
                position={[36.89, 22.323, 15]}
                scale={31.181}
              />
              <mesh
                name="3DGeom-148_2"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-148_2'].geometry}
                material={materials['[Carpet Loop Pattern]']}
                position={[36.89, 22.323, 30]}
                scale={31.181}
              />
            </group>
            <group position={[917.802, 816.973, 15.748]} rotation={[0, 0, Math.PI / 2]}>
              <mesh
                name="3DGeom-147_3"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-147_3'].geometry}
                material={materials['[Wood Bamboo]']}
                position={[36.89, 22.323, 15]}
                scale={31.181}
              />
              <mesh
                name="3DGeom-148_3"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-148_3'].geometry}
                material={materials['[Carpet Loop Pattern]']}
                position={[36.89, 22.323, 30]}
                scale={31.181}
              />
            </group>
            <group position={[822.037, 489.168, 15.748]}>
              <mesh
                name="3DGeom-147_4"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-147_4'].geometry}
                material={materials['[Wood Bamboo]']}
                position={[36.89, 22.323, 15]}
                scale={31.181}
              />
              <mesh
                name="3DGeom-148_4"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-148_4'].geometry}
                material={materials['[Carpet Loop Pattern]']}
                position={[36.89, 22.323, 30]}
                scale={31.181}
              />
            </group>
            <group position={[912.577, 321.202, 15.748]} rotation={[0, 0, Math.PI / 2]}>
              <mesh
                name="3DGeom-147_5"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-147_5'].geometry}
                material={materials['[Wood Bamboo]']}
                position={[36.89, 22.323, 15]}
                scale={31.181}
              />
              <mesh
                name="3DGeom-148_5"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-148_5'].geometry}
                material={materials['[Carpet Loop Pattern]']}
                position={[36.89, 22.323, 30]}
                scale={31.181}
              />
            </group>
            <group position={[912.577, 134.184, 15.748]} rotation={[0, 0, Math.PI / 2]}>
              <mesh
                name="3DGeom-147_6"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-147_6'].geometry}
                material={materials['[Wood Bamboo]']}
                position={[36.89, 22.323, 15]}
                scale={31.181}
              />
              <mesh
                name="3DGeom-148_6"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-148_6'].geometry}
                material={materials['[Carpet Loop Pattern]']}
                position={[36.89, 22.323, 30]}
                scale={31.181}
              />
            </group>
            <group position={[833.904, 816.973, 15.748]} rotation={[0, 0, Math.PI / 2]}>
              <mesh
                name="3DGeom-147_7"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-147_7'].geometry}
                material={materials['[Wood Bamboo]']}
                position={[36.89, 22.323, 15]}
                scale={31.181}
              />
              <mesh
                name="3DGeom-148_7"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-148_7'].geometry}
                material={materials['[Carpet Loop Pattern]']}
                position={[36.89, 22.323, 30]}
                scale={31.181}
              />
            </group>
            <group position={[742.408, 816.973, 15.748]} rotation={[0, 0, Math.PI / 2]}>
              <mesh
                name="3DGeom-147_8"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-147_8'].geometry}
                material={materials['[Wood Bamboo]']}
                position={[36.89, 22.323, 15]}
                scale={31.181}
              />
              <mesh
                name="3DGeom-148_8"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-148_8'].geometry}
                material={materials['[Carpet Loop Pattern]']}
                position={[36.89, 22.323, 30]}
                scale={31.181}
              />
            </group>
            <group position={[701.468, 939.097, 15.748]} rotation={[0, 0, -Math.PI]}>
              <mesh
                name="3DGeom-147_9"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-147_9'].geometry}
                material={materials['[Wood Bamboo]']}
                position={[36.89, 22.323, 15]}
                scale={31.181}
              />
              <mesh
                name="3DGeom-148_9"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-148_9'].geometry}
                material={materials['[Carpet Loop Pattern]']}
                position={[36.89, 22.323, 30]}
                scale={31.181}
              />
            </group>
            <group position={[286.449, 485.765, 15.748]}>
              <mesh
                name="3DGeom-147_10"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-147_10'].geometry}
                material={materials['[Wood Bamboo]']}
                position={[36.89, 22.323, 15]}
                scale={31.181}
              />
              <mesh
                name="3DGeom-148_10"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-148_10'].geometry}
                material={materials['[Carpet Loop Pattern]']}
                position={[36.89, 22.323, 30]}
                scale={31.181}
              />
            </group>
            <group position={[175.594, 579.537, 15.748]}>
              <mesh
                name="3DGeom-147_11"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-147_11'].geometry}
                material={materials['[Wood Bamboo]']}
                position={[36.89, 22.323, 15]}
                scale={31.181}
              />
              <mesh
                name="3DGeom-148_11"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-148_11'].geometry}
                material={materials['[Carpet Loop Pattern]']}
                position={[36.89, 22.323, 30]}
                scale={31.181}
              />
            </group>
            <group position={[175.594, 660.797, 15.748]}>
              <mesh
                name="3DGeom-147_12"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-147_12'].geometry}
                material={materials['[Wood Bamboo]']}
                position={[36.89, 22.323, 15]}
                scale={31.181}
              />
              <mesh
                name="3DGeom-148_12"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-148_12'].geometry}
                material={materials['[Carpet Loop Pattern]']}
                position={[36.89, 22.323, 30]}
                scale={31.181}
              />
            </group>
            <group position={[428.278, 2175.343, 15.748]} rotation={[0, 0, -Math.PI]}>
              <mesh
                name="3DGeom-147_13"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-147_13'].geometry}
                material={materials['[Wood Bamboo]']}
                position={[36.89, 22.323, 15]}
                scale={31.181}
              />
              <mesh
                name="3DGeom-148_13"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-148_13'].geometry}
                material={materials['[Carpet Loop Pattern]']}
                position={[36.89, 22.323, 30]}
                scale={31.181}
              />
            </group>
            <group position={[183.583, 2160.866, 15.748]} rotation={[0, 0, -Math.PI / 2]}>
              <mesh
                name="3DGeom-147_14"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-147_14'].geometry}
                material={materials['[Wood Bamboo]']}
                position={[36.89, 22.323, 15]}
                scale={31.181}
              />
              <mesh
                name="3DGeom-148_14"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-148_14'].geometry}
                material={materials['[Carpet Loop Pattern]']}
                position={[36.89, 22.323, 30]}
                scale={31.181}
              />
            </group>
            <group position={[183.583, 2084.921, 15.748]} rotation={[0, 0, -Math.PI / 2]}>
              <mesh
                name="3DGeom-147_15"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-147_15'].geometry}
                material={materials['[Wood Bamboo]']}
                position={[36.89, 22.323, 15]}
                scale={31.181}
              />
              <mesh
                name="3DGeom-148_15"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-148_15'].geometry}
                material={materials['[Carpet Loop Pattern]']}
                position={[36.89, 22.323, 30]}
                scale={31.181}
              />
            </group>
            <group position={[670.016, 2045.747, 15.748]}>
              <mesh
                name="3DGeom-147_16"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-147_16'].geometry}
                material={materials['[Wood Bamboo]']}
                position={[36.89, 22.323, 15]}
                scale={31.181}
              />
              <mesh
                name="3DGeom-148_16"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-148_16'].geometry}
                material={materials['[Carpet Loop Pattern]']}
                position={[36.89, 22.323, 30]}
                scale={31.181}
              />
            </group>
            <group position={[804.209, 2046.461, 15.748]} rotation={[0, 0, Math.PI / 2]}>
              <mesh
                name="3DGeom-147_17"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-147_17'].geometry}
                material={materials['[Wood Bamboo]']}
                position={[36.89, 22.323, 15]}
                scale={31.181}
              />
              <mesh
                name="3DGeom-148_17"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-148_17'].geometry}
                material={materials['[Carpet Loop Pattern]']}
                position={[36.89, 22.323, 30]}
                scale={31.181}
              />
            </group>
            <group position={[916.526, 2070.163, 15.748]} rotation={[0, 0, Math.PI / 2]}>
              <mesh
                name="3DGeom-147_18"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-147_18'].geometry}
                material={materials['[Wood Bamboo]']}
                position={[36.89, 22.323, 15]}
                scale={31.181}
              />
              <mesh
                name="3DGeom-148_18"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-148_18'].geometry}
                material={materials['[Carpet Loop Pattern]']}
                position={[36.89, 22.323, 30]}
                scale={31.181}
              />
            </group>
            <group position={[964.975, 1295.196, 15.748]} rotation={[0, 0, -Math.PI / 2]}>
              <mesh
                name="3DGeom-147_19"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-147_19'].geometry}
                material={materials['[Wood Bamboo]']}
                position={[36.89, 22.323, 15]}
                scale={31.181}
              />
              <mesh
                name="3DGeom-148_19"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-148_19'].geometry}
                material={materials['[Carpet Loop Pattern]']}
                position={[36.89, 22.323, 30]}
                scale={31.181}
              />
            </group>
            <group position={[1172.52, 1069.246, 171.575]} rotation={[Math.PI / 2, Math.PI / 2, 0]}>
              <mesh
                name="3DGeom-187"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-187'].geometry}
                material={materials['[0131_Silver]']}
                position={[80.437, 4, 1.969]}
                scale={80.051}
              />
            </group>
            <group position={[208.07, 1765.779, 15.748]} rotation={[0, 0, -Math.PI / 2]}>
              <mesh
                name="3DGeom-147_20"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-147_20'].geometry}
                material={materials['[Wood Bamboo]']}
                position={[36.89, 22.323, 15]}
                scale={31.181}
              />
              <mesh
                name="3DGeom-148_20"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-148_20'].geometry}
                material={materials['[Carpet Loop Pattern]']}
                position={[36.89, 22.323, 30]}
                scale={31.181}
              />
            </group>
            <group position={[189.782, 1610.593, 15.748]} rotation={[0, 0, -Math.PI / 2]}>
              <mesh
                name="3DGeom-147_21"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-147_21'].geometry}
                material={materials['[Wood Bamboo]']}
                position={[36.89, 22.323, 15]}
                scale={31.181}
              />
              <mesh
                name="3DGeom-148_21"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-148_21'].geometry}
                material={materials['[Carpet Loop Pattern]']}
                position={[36.89, 22.323, 30]}
                scale={31.181}
              />
            </group>
            <group position={[189.782, 1411.341, 15.748]} rotation={[0, 0, -Math.PI / 2]}>
              <mesh
                name="3DGeom-147_22"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-147_22'].geometry}
                material={materials['[Wood Bamboo]']}
                position={[36.89, 22.323, 15]}
                scale={31.181}
              />
              <mesh
                name="3DGeom-148_22"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-148_22'].geometry}
                material={materials['[Carpet Loop Pattern]']}
                position={[36.89, 22.323, 30]}
                scale={31.181}
              />
            </group>
            <group position={[682.439, 1542.369, 15.748]}>
              <mesh
                name="3DGeom-194"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-194'].geometry}
                material={materials['[Wood Bamboo]']}
                position={[103.543, 186.693, 17.992]}
                scale={186.693}
              />
              <group position={[191.532, 292.249, 35.984]} rotation={[0, 0, -Math.PI]}>
                <mesh
                  name="3DGeom-195"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-195'].geometry}
                  material={materials['[Color_007]1']}
                  position={[4.144, 3.537, 10.445]}
                  scale={10.445}
                />
                <mesh
                  name="3DGeom-196"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-196'].geometry}
                  material={materials['[CoolGray1]']}
                  position={[5.726, 3.231, 3.841]}
                  scale={2.876}
                />
                <mesh
                  name="3DGeom-197"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-197'].geometry}
                  material={materials['[Color_002]1']}
                  position={[3.237, 3.621, 0.695]}
                  scale={1.957}
                />
                <mesh
                  name="3DGeom-198"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-198'].geometry}
                  material={materials['[Green]']}
                  position={[3.212, 3.606, 0.706]}
                  scale={0.051}
                />
                <mesh
                  name="3DGeom-199"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-199'].geometry}
                  material={materials.Micl}
                  position={[2.084, 3.475, 21.908]}
                  scale={1.308}
                />
              </group>
              <group position={[145.84, 19.028, 35.984]} rotation={[0, 0, Math.PI / 2]}>
                <mesh
                  name="3DGeom-195_1"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-195_1'].geometry}
                  material={materials['[Color_007]1']}
                  position={[4.144, 3.537, 10.445]}
                  scale={10.445}
                />
                <mesh
                  name="3DGeom-196_1"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-196_1'].geometry}
                  material={materials['[CoolGray1]']}
                  position={[5.726, 3.231, 3.841]}
                  scale={2.876}
                />
                <mesh
                  name="3DGeom-197_1"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-197_1'].geometry}
                  material={materials['[Color_002]1']}
                  position={[3.237, 3.621, 0.695]}
                  scale={1.957}
                />
                <mesh
                  name="3DGeom-198_1"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-198_1'].geometry}
                  material={materials['[Green]']}
                  position={[3.212, 3.606, 0.706]}
                  scale={0.051}
                />
                <mesh
                  name="3DGeom-199_1"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-199_1'].geometry}
                  material={materials.Micl}
                  position={[2.084, 3.475, 21.908]}
                  scale={1.308}
                />
              </group>
              <group position={[78.163, 19.028, 35.984]} rotation={[0, 0, Math.PI / 2]}>
                <mesh
                  name="3DGeom-195_2"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-195_2'].geometry}
                  material={materials['[Color_007]1']}
                  position={[4.144, 3.537, 10.445]}
                  scale={10.445}
                />
                <mesh
                  name="3DGeom-196_2"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-196_2'].geometry}
                  material={materials['[CoolGray1]']}
                  position={[5.726, 3.231, 3.841]}
                  scale={2.876}
                />
                <mesh
                  name="3DGeom-197_2"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-197_2'].geometry}
                  material={materials['[Color_002]1']}
                  position={[3.237, 3.621, 0.695]}
                  scale={1.957}
                />
                <mesh
                  name="3DGeom-198_2"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-198_2'].geometry}
                  material={materials['[Green]']}
                  position={[3.212, 3.606, 0.706]}
                  scale={0.051}
                />
                <mesh
                  name="3DGeom-199_2"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-199_2'].geometry}
                  material={materials.Micl}
                  position={[2.084, 3.475, 21.908]}
                  scale={1.308}
                />
              </group>
              <group position={[12.522, 48.178, 35.984]}>
                <mesh
                  name="3DGeom-195_3"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-195_3'].geometry}
                  material={materials['[Color_007]1']}
                  position={[4.144, 3.537, 10.445]}
                  scale={10.445}
                />
                <mesh
                  name="3DGeom-196_3"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-196_3'].geometry}
                  material={materials['[CoolGray1]']}
                  position={[5.726, 3.231, 3.841]}
                  scale={2.876}
                />
                <mesh
                  name="3DGeom-197_3"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-197_3'].geometry}
                  material={materials['[Color_002]1']}
                  position={[3.237, 3.621, 0.695]}
                  scale={1.957}
                />
                <mesh
                  name="3DGeom-198_3"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-198_3'].geometry}
                  material={materials['[Green]']}
                  position={[3.212, 3.606, 0.706]}
                  scale={0.051}
                />
                <mesh
                  name="3DGeom-199_3"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-199_3'].geometry}
                  material={materials.Micl}
                  position={[2.084, 3.475, 21.908]}
                  scale={1.308}
                />
              </group>
              <group position={[12.522, 180.068, 35.984]}>
                <mesh
                  name="3DGeom-195_4"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-195_4'].geometry}
                  material={materials['[Color_007]1']}
                  position={[4.144, 3.537, 10.445]}
                  scale={10.445}
                />
                <mesh
                  name="3DGeom-196_4"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-196_4'].geometry}
                  material={materials['[CoolGray1]']}
                  position={[5.726, 3.231, 3.841]}
                  scale={2.876}
                />
                <mesh
                  name="3DGeom-197_4"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-197_4'].geometry}
                  material={materials['[Color_002]1']}
                  position={[3.237, 3.621, 0.695]}
                  scale={1.957}
                />
                <mesh
                  name="3DGeom-198_4"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-198_4'].geometry}
                  material={materials['[Green]']}
                  position={[3.212, 3.606, 0.706]}
                  scale={0.051}
                />
                <mesh
                  name="3DGeom-199_4"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-199_4'].geometry}
                  material={materials.Micl}
                  position={[2.084, 3.475, 21.908]}
                  scale={1.308}
                />
              </group>
              <group position={[12.522, 102.115, 35.984]}>
                <mesh
                  name="3DGeom-195_5"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-195_5'].geometry}
                  material={materials['[Color_007]1']}
                  position={[4.144, 3.537, 10.445]}
                  scale={10.445}
                />
                <mesh
                  name="3DGeom-196_5"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-196_5'].geometry}
                  material={materials['[CoolGray1]']}
                  position={[5.726, 3.231, 3.841]}
                  scale={2.876}
                />
                <mesh
                  name="3DGeom-197_5"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-197_5'].geometry}
                  material={materials['[Color_002]1']}
                  position={[3.237, 3.621, 0.695]}
                  scale={1.957}
                />
                <mesh
                  name="3DGeom-198_5"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-198_5'].geometry}
                  material={materials['[Green]']}
                  position={[3.212, 3.606, 0.706]}
                  scale={0.051}
                />
                <mesh
                  name="3DGeom-199_5"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-199_5'].geometry}
                  material={materials.Micl}
                  position={[2.084, 3.475, 21.908]}
                  scale={1.308}
                />
              </group>
              <group position={[12.522, 246.761, 35.984]}>
                <mesh
                  name="3DGeom-195_6"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-195_6'].geometry}
                  material={materials['[Color_007]1']}
                  position={[4.144, 3.537, 10.445]}
                  scale={10.445}
                />
                <mesh
                  name="3DGeom-196_6"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-196_6'].geometry}
                  material={materials['[CoolGray1]']}
                  position={[5.726, 3.231, 3.841]}
                  scale={2.876}
                />
                <mesh
                  name="3DGeom-197_6"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-197_6'].geometry}
                  material={materials['[Color_002]1']}
                  position={[3.237, 3.621, 0.695]}
                  scale={1.957}
                />
                <mesh
                  name="3DGeom-198_6"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-198_6'].geometry}
                  material={materials['[Green]']}
                  position={[3.212, 3.606, 0.706]}
                  scale={0.051}
                />
                <mesh
                  name="3DGeom-199_6"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-199_6'].geometry}
                  material={materials.Micl}
                  position={[2.084, 3.475, 21.908]}
                  scale={1.308}
                />
              </group>
              <group position={[191.532, 83.863, 35.984]} rotation={[0, 0, -Math.PI]}>
                <mesh
                  name="3DGeom-195_7"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-195_7'].geometry}
                  material={materials['[Color_007]1']}
                  position={[4.144, 3.537, 10.445]}
                  scale={10.445}
                />
                <mesh
                  name="3DGeom-196_7"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-196_7'].geometry}
                  material={materials['[CoolGray1]']}
                  position={[5.726, 3.231, 3.841]}
                  scale={2.876}
                />
                <mesh
                  name="3DGeom-197_7"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-197_7'].geometry}
                  material={materials['[Color_002]1']}
                  position={[3.237, 3.621, 0.695]}
                  scale={1.957}
                />
                <mesh
                  name="3DGeom-198_7"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-198_7'].geometry}
                  material={materials['[Green]']}
                  position={[3.212, 3.606, 0.706]}
                  scale={0.051}
                />
                <mesh
                  name="3DGeom-199_7"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-199_7'].geometry}
                  material={materials.Micl}
                  position={[2.084, 3.475, 21.908]}
                  scale={1.308}
                />
              </group>
              <group position={[191.532, 212.643, 35.984]} rotation={[0, 0, -Math.PI]}>
                <mesh
                  name="3DGeom-195_8"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-195_8'].geometry}
                  material={materials['[Color_007]1']}
                  position={[4.144, 3.537, 10.445]}
                  scale={10.445}
                />
                <mesh
                  name="3DGeom-196_8"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-196_8'].geometry}
                  material={materials['[CoolGray1]']}
                  position={[5.726, 3.231, 3.841]}
                  scale={2.876}
                />
                <mesh
                  name="3DGeom-197_8"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-197_8'].geometry}
                  material={materials['[Color_002]1']}
                  position={[3.237, 3.621, 0.695]}
                  scale={1.957}
                />
                <mesh
                  name="3DGeom-198_8"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-198_8'].geometry}
                  material={materials['[Green]']}
                  position={[3.212, 3.606, 0.706]}
                  scale={0.051}
                />
                <mesh
                  name="3DGeom-199_8"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-199_8'].geometry}
                  material={materials.Micl}
                  position={[2.084, 3.475, 21.908]}
                  scale={1.308}
                />
              </group>
              <group position={[191.532, 143.155, 35.984]} rotation={[0, 0, -Math.PI]}>
                <mesh
                  name="3DGeom-195_9"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-195_9'].geometry}
                  material={materials['[Color_007]1']}
                  position={[4.144, 3.537, 10.445]}
                  scale={10.445}
                />
                <mesh
                  name="3DGeom-196_9"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-196_9'].geometry}
                  material={materials['[CoolGray1]']}
                  position={[5.726, 3.231, 3.841]}
                  scale={2.876}
                />
                <mesh
                  name="3DGeom-197_9"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-197_9'].geometry}
                  material={materials['[Color_002]1']}
                  position={[3.237, 3.621, 0.695]}
                  scale={1.957}
                />
                <mesh
                  name="3DGeom-198_9"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-198_9'].geometry}
                  material={materials['[Green]']}
                  position={[3.212, 3.606, 0.706]}
                  scale={0.051}
                />
                <mesh
                  name="3DGeom-199_9"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-199_9'].geometry}
                  material={materials.Micl}
                  position={[2.084, 3.475, 21.908]}
                  scale={1.308}
                />
              </group>
              <group name="m" position={[12.522, 317.43, 35.984]}>
                <mesh
                  name="3DGeom-195_10"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-195_10'].geometry}
                  material={materials['[Color_007]1']}
                  position={[4.144, 3.537, 10.445]}
                  scale={10.445}
                />
                <mesh
                  name="3DGeom-196_10"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-196_10'].geometry}
                  material={materials['[CoolGray1]']}
                  position={[5.726, 3.231, 3.841]}
                  scale={2.876}
                />
                <mesh
                  name="3DGeom-197_10"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-197_10'].geometry}
                  material={materials['[Color_002]1']}
                  position={[3.237, 3.621, 0.695]}
                  scale={1.957}
                />
                <mesh
                  name="3DGeom-198_10"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-198_10'].geometry}
                  material={materials['[Green]']}
                  position={[3.212, 3.606, 0.706]}
                  scale={0.051}
                />
                <mesh
                  name="3DGeom-199_10"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-199_10'].geometry}
                  material={materials.Micl}
                  position={[2.084, 3.475, 21.908]}
                  scale={1.308}
                />
              </group>
            </group>
            <group position={[662.447, 1944.212, 15.748]}>
              <mesh
                name="3DGeom-250"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-250'].geometry}
                material={materials['[0038_Orange]']}
                position={[124.272, 21.319, 17.992]}
                scale={124.272}
              />
              <mesh
                name="3DGeom-251"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-251'].geometry}
                material={materials['[0136_Charcoal]']}
                position={[124.272, 0, 17.992]}
                scale={118.366}
              />
              <group position={[205.545, 30.677, 24.173]} rotation={[0, 0, -Math.PI / 2]}>
                <mesh
                  name="3DGeom-195_11"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-195_11'].geometry}
                  material={materials['[Color_007]1']}
                  position={[4.144, 3.537, 10.445]}
                  scale={10.445}
                />
                <mesh
                  name="3DGeom-196_11"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-196_11'].geometry}
                  material={materials['[CoolGray1]']}
                  position={[5.726, 3.231, 3.841]}
                  scale={2.876}
                />
                <mesh
                  name="3DGeom-197_11"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-197_11'].geometry}
                  material={materials['[Color_002]1']}
                  position={[3.237, 3.621, 0.695]}
                  scale={1.957}
                />
                <mesh
                  name="3DGeom-198_11"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-198_11'].geometry}
                  material={materials['[Green]']}
                  position={[3.212, 3.606, 0.706]}
                  scale={0.051}
                />
                <mesh
                  name="3DGeom-199_11"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-199_11'].geometry}
                  material={materials.Micl}
                  position={[2.084, 3.475, 21.908]}
                  scale={1.308}
                />
              </group>
              <group position={[121.638, 31.852, 32.047]} rotation={[0, 0, -Math.PI / 2]}>
                <mesh
                  name="3DGeom-195_12"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-195_12'].geometry}
                  material={materials['[Color_007]1']}
                  position={[4.144, 3.537, 10.445]}
                  scale={10.445}
                />
                <mesh
                  name="3DGeom-196_12"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-196_12'].geometry}
                  material={materials['[CoolGray1]']}
                  position={[5.726, 3.231, 3.841]}
                  scale={2.876}
                />
                <mesh
                  name="3DGeom-197_12"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-197_12'].geometry}
                  material={materials['[Color_002]1']}
                  position={[3.237, 3.621, 0.695]}
                  scale={1.957}
                />
                <mesh
                  name="3DGeom-198_12"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-198_12'].geometry}
                  material={materials['[Green]']}
                  position={[3.212, 3.606, 0.706]}
                  scale={0.051}
                />
                <mesh
                  name="3DGeom-199_12"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-199_12'].geometry}
                  material={materials.Micl}
                  position={[2.084, 3.475, 21.908]}
                  scale={1.308}
                />
              </group>
              <group position={[31.705, 33.116, 24.173]} rotation={[0, 0, -Math.PI / 2]}>
                <mesh
                  name="3DGeom-195_13"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-195_13'].geometry}
                  material={materials['[Color_007]1']}
                  position={[4.144, 3.537, 10.445]}
                  scale={10.445}
                />
                <mesh
                  name="3DGeom-196_13"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-196_13'].geometry}
                  material={materials['[CoolGray1]']}
                  position={[5.726, 3.231, 3.841]}
                  scale={2.876}
                />
                <mesh
                  name="3DGeom-197_13"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-197_13'].geometry}
                  material={materials['[Color_002]1']}
                  position={[3.237, 3.621, 0.695]}
                  scale={1.957}
                />
                <mesh
                  name="3DGeom-198_13"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-198_13'].geometry}
                  material={materials['[Green]']}
                  position={[3.212, 3.606, 0.706]}
                  scale={0.051}
                />
                <mesh
                  name="3DGeom-199_13"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-199_13'].geometry}
                  material={materials.Micl}
                  position={[2.084, 3.475, 21.908]}
                  scale={1.308}
                />
              </group>
            </group>
            <group
              position={[185.591, -49.882, 113.72]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={[1, 1.176, 1]}>
              <mesh
                name="3DGeom-267"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-267'].geometry}
                material={materials['[0130_Gainsboro]']}
                position={[0, 0, 0.984]}
                scale={55.886}
              />
              <group position={[0, 0, 0.984]}>
                <mesh
                  name="3DGeom-268"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-268'].geometry}
                  material={materials['[Translucent Glass Gray]4']}
                  scale={55.098}
                />
              </group>
            </group>
            <group position={[7470.638, 486.06, 2.283]} rotation={[0, 0, Math.PI / 2]}>
              <mesh
                name="3DGeom-269"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-269'].geometry}
                material={materials['[Tile Ceramic Multi]']}
                position={[1780.987, 7245.677, 99.409]}
                scale={78.74}
              />
              <mesh
                name="3DGeom-270"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-270'].geometry}
                material={materials['[0043_SaddleBrown]']}
                position={[1780.987, 7245.677, 111.339]}
                scale={97.874}
              />
            </group>
            <group position={[5285.599, -1874.293, 2.283]} rotation={[0, 0, Math.PI / 2]}>
              <mesh
                name="3DGeom-271"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-271'].geometry}
                material={materials['[Tile Ceramic Multi]']}
                position={[1897.619, 5060.638, 99.409]}
                scale={78.74}
              />
              <mesh
                name="3DGeom-272"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-272'].geometry}
                material={materials['[0043_SaddleBrown]']}
                position={[1897.619, 5060.638, 111.339]}
                scale={97.874}
              />
              <mesh
                name="3DGeom-273"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-273'].geometry}
                material={materials['[0052_FloralWhite]']}
                position={[1901.93, 5060.638, 110.512]}
                scale={19.961}
              />
            </group>
            <group name="c" position={[6281.662, -867.546, 6.22]} rotation={[0, 0, Math.PI / 2]}>
              <mesh
                name="3DGeom-274"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-274'].geometry}
                material={materials['[Concrete Pavers Block Multi]']}
                position={[2012.546, 5993.709, 98.425]}
                scale={157.48}
              />
              <mesh
                name="3DGeom-275"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-275'].geometry}
                material={materials['[Granite Light Gray]']}
                position={[2012.546, 5993.709, 91.378]}
                scale={157.48}
              />
              <mesh
                name="3DGeom-276"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-276'].geometry}
                material={materials['[Granite Light Gray]']}
                position={[2091.286, 5899.221, 171.027]}
                scale={78.74}
              />
              <mesh
                name="3DGeom-277"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-277'].geometry}
                material={materials['[Encaustic Tile Circular 02]1']}
                position={[2011.562, 5980.914, 98.425]}
                scale={128.937}
              />
            </group>
            <group position={[774.566, 2011.667, 97.598]} rotation={[Math.PI / 2, 0, 0]}>
              <mesh
                name="3DGeom-278"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-278'].geometry}
                material={materials['[0038_Orange]']}
                position={[-156.445, 0, 2.953]}
                scale={81.85}
              />
              <mesh
                name="3DGeom-279"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-279'].geometry}
                material={materials['[0038_Orange]']}
                position={[-148.571, 0, 2.953]}
                scale={81.85}
              />
              <mesh
                name="3DGeom-280"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-280'].geometry}
                material={materials['[0038_Orange]']}
                position={[-140.696, 0, 2.953]}
                scale={81.85}
              />
              <mesh
                name="3DGeom-281"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-281'].geometry}
                material={materials['[0038_Orange]']}
                position={[-132.822, 0, 2.953]}
                scale={81.85}
              />
              <mesh
                name="3DGeom-282"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-282'].geometry}
                material={materials['[0038_Orange]']}
                position={[-124.948, 0, 2.953]}
                scale={81.85}
              />
              <mesh
                name="3DGeom-283"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-283'].geometry}
                material={materials['[0038_Orange]']}
                position={[-117.074, 0, 2.953]}
                scale={81.85}
              />
              <mesh
                name="3DGeom-284"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-284'].geometry}
                material={materials['[0038_Orange]']}
                position={[-109.2, 0, 2.953]}
                scale={81.85}
              />
              <mesh
                name="3DGeom-285"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-285'].geometry}
                material={materials['[0038_Orange]']}
                position={[-101.326, 0, 2.953]}
                scale={81.85}
              />
              <mesh
                name="3DGeom-286"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-286'].geometry}
                material={materials['[0038_Orange]']}
                position={[-93.452, 0, 2.953]}
                scale={81.85}
              />
              <mesh
                name="3DGeom-287"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-287'].geometry}
                material={materials['[0038_Orange]']}
                position={[-85.578, 0, 2.953]}
                scale={81.85}
              />
              <mesh
                name="3DGeom-288"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-288'].geometry}
                material={materials['[0038_Orange]']}
                position={[-77.704, 0, 2.953]}
                scale={81.85}
              />
              <mesh
                name="3DGeom-289"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-289'].geometry}
                material={materials['[0038_Orange]']}
                position={[-69.83, 0, 2.953]}
                scale={81.85}
              />
              <mesh
                name="3DGeom-290"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-290'].geometry}
                material={materials['[0038_Orange]']}
                position={[-61.956, 0, 2.953]}
                scale={81.85}
              />
              <mesh
                name="3DGeom-291"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-291'].geometry}
                material={materials['[0038_Orange]']}
                position={[-54.082, 0, 2.953]}
                scale={81.85}
              />
              <mesh
                name="3DGeom-292"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-292'].geometry}
                material={materials['[0038_Orange]']}
                position={[-46.208, 0, 2.953]}
                scale={81.85}
              />
              <mesh
                name="3DGeom-293"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-293'].geometry}
                material={materials['[0038_Orange]']}
                position={[-38.334, 0, 2.953]}
                scale={81.85}
              />
              <mesh
                name="3DGeom-294"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-294'].geometry}
                material={materials['[0038_Orange]']}
                position={[-30.46, 0, 2.953]}
                scale={81.85}
              />
              <mesh
                name="3DGeom-295"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-295'].geometry}
                material={materials['[0038_Orange]']}
                position={[-22.586, 0, 2.953]}
                scale={81.85}
              />
              <mesh
                name="3DGeom-296"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-296'].geometry}
                material={materials['[0038_Orange]']}
                position={[-14.712, 0, 2.953]}
                scale={81.85}
              />
              <mesh
                name="3DGeom-297"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-297'].geometry}
                material={materials['[0038_Orange]']}
                position={[-6.838, 0, 2.953]}
                scale={81.85}
              />
              <mesh
                name="3DGeom-298"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-298'].geometry}
                material={materials['[0038_Orange]']}
                position={[1.036, 0, 2.953]}
                scale={81.85}
              />
              <mesh
                name="3DGeom-299"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-299'].geometry}
                material={materials['[0038_Orange]']}
                position={[8.91, 0, 2.953]}
                scale={81.85}
              />
              <mesh
                name="3DGeom-300"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-300'].geometry}
                material={materials['[0038_Orange]']}
                position={[16.784, 0, 2.953]}
                scale={81.85}
              />
              <mesh
                name="3DGeom-301"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-301'].geometry}
                material={materials['[0038_Orange]']}
                position={[24.658, 0, 2.953]}
                scale={81.85}
              />
              <mesh
                name="3DGeom-302"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-302'].geometry}
                material={materials['[0038_Orange]']}
                position={[32.532, 0, 2.953]}
                scale={81.85}
              />
              <mesh
                name="3DGeom-303"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-303'].geometry}
                material={materials['[0038_Orange]']}
                position={[40.406, 0, 2.953]}
                scale={81.85}
              />
              <mesh
                name="3DGeom-304"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-304'].geometry}
                material={materials['[0038_Orange]']}
                position={[48.28, 0, 2.953]}
                scale={81.85}
              />
              <mesh
                name="3DGeom-305"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-305'].geometry}
                material={materials['[0038_Orange]']}
                position={[56.154, 0, 2.953]}
                scale={81.85}
              />
              <mesh
                name="3DGeom-306"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-306'].geometry}
                material={materials['[0038_Orange]']}
                position={[64.028, 0, 2.953]}
                scale={81.85}
              />
              <mesh
                name="3DGeom-307"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-307'].geometry}
                material={materials['[0038_Orange]']}
                position={[71.902, 0, 2.953]}
                scale={81.85}
              />
              <mesh
                name="3DGeom-308"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-308'].geometry}
                material={materials['[0038_Orange]']}
                position={[79.776, 0, 2.953]}
                scale={81.85}
              />
              <mesh
                name="3DGeom-309"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-309'].geometry}
                material={materials['[0038_Orange]']}
                position={[87.65, 0, 2.953]}
                scale={81.85}
              />
              <mesh
                name="3DGeom-310"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-310'].geometry}
                material={materials['[0038_Orange]']}
                position={[95.524, 0, 2.953]}
                scale={81.85}
              />
              <mesh
                name="3DGeom-311"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-311'].geometry}
                material={materials['[0038_Orange]']}
                position={[103.398, 0, 2.953]}
                scale={81.85}
              />
              <mesh
                name="3DGeom-312"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-312'].geometry}
                material={materials['[0038_Orange]']}
                position={[111.272, 0, 2.953]}
                scale={81.85}
              />
              <mesh
                name="3DGeom-313"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-313'].geometry}
                material={materials['[0038_Orange]']}
                position={[119.146, 0, 2.953]}
                scale={81.85}
              />
              <mesh
                name="3DGeom-314"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-314'].geometry}
                material={materials['[0038_Orange]']}
                position={[127.02, 0, 2.953]}
                scale={81.85}
              />
              <mesh
                name="3DGeom-315"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-315'].geometry}
                material={materials['[0038_Orange]']}
                position={[134.894, 0, 2.953]}
                scale={81.85}
              />
              <mesh
                name="3DGeom-316"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-316'].geometry}
                material={materials['[0038_Orange]']}
                position={[142.768, 0, 2.953]}
                scale={81.85}
              />
              <mesh
                name="3DGeom-317"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-317'].geometry}
                material={materials['[0038_Orange]']}
                position={[150.642, 0, 2.953]}
                scale={81.85}
              />
            </group>
          </group>
            )}
                {visibleFloors.includes('2ND') && (
          <group name="2nd" position={[-16044.999, -28722.779, 4558]} scale={25.4}>
            <mesh
              name="3DGeom-318"
              castShadow
              receiveShadow
              geometry={nodes['3DGeom-318'].geometry}
              material={materials['[0049_Beige]']}
              position={[539.921, 1211.929, 113.346]}
              scale={1248.032}
            />
            <mesh
              name="3DGeom-319"
              castShadow
              receiveShadow
              geometry={nodes['3DGeom-319'].geometry}
              material={materials['[0049_Beige]']}
              position={[545.594, 1211.929, 103.504]}
              scale={1263.78}
            />
            <mesh
              name="3DGeom-320"
              castShadow
              receiveShadow
              geometry={nodes['3DGeom-320'].geometry}
              material={materials.cream}
              position={[539.921, 1152.874, 103.504]}
              scale={1322.835}
            />
            <mesh
              name="3DGeom-321"
              castShadow
              receiveShadow
              geometry={nodes['3DGeom-321'].geometry}
              material={materials['*']}
              position={[539.921, 1204.055, 15.748]}
              scale={1255.906}
            />
            <mesh
              name="3DGeom-322"
              castShadow
              receiveShadow
              geometry={nodes['3DGeom-322'].geometry}
              material={materials['[0130_Gainsboro]']}
              position={[313.543, 623.346, 142.047]}
              scale={167.323}
            />
            <mesh
              name="3DGeom-323"
              castShadow
              receiveShadow
              geometry={nodes['3DGeom-323'].geometry}
              material={materials['[Translucent Glass Gray]4']}
              position={[313.543, 623.346, 142.047]}
              scale={165.231}
            />
            <group position={[776.142, 1309.37, 68.071]} rotation={[-Math.PI / 2, 0, -Math.PI]}>
              <mesh
                name="3DGeom-324"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-324'].geometry}
                material={materials['[0131_Silver]']}
                position={[0, 0, 2.953]}
                scale={157.48}
              />
              <mesh
                name="3DGeom-325"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-325'].geometry}
                material={materials['[Translucent Glass Gray]4']}
                position={[0, 0, 2.953]}
                scale={155.512}
              />
            </group>
            <group position={[776.142, 1309.37, 140.079]} rotation={[-Math.PI / 2, 0, -Math.PI]}>
              <mesh
                name="3DGeom-326"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-326'].geometry}
                material={materials['[0131_Silver]']}
                position={[0, 0, 2.953]}
                scale={157.48}
              />
              <mesh
                name="3DGeom-327"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-327'].geometry}
                material={materials['[Translucent Glass Gray]4']}
                position={[0, 0, 2.953]}
                scale={155.512}
              />
            </group>
            <group position={[776.142, 974.724, 68.071]} rotation={[-Math.PI / 2, 0, -Math.PI]}>
              <mesh
                name="3DGeom-324_1"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-324_1'].geometry}
                material={materials['[0131_Silver]']}
                position={[0, 0, 2.953]}
                scale={157.48}
              />
              <mesh
                name="3DGeom-325_1"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-325_1'].geometry}
                material={materials['[Translucent Glass Gray]4']}
                position={[0, 0, 2.953]}
                scale={155.512}
              />
            </group>
            <group position={[776.142, 974.724, 140.079]} rotation={[-Math.PI / 2, 0, -Math.PI]}>
              <mesh
                name="3DGeom-326_1"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-326_1'].geometry}
                material={materials['[0131_Silver]']}
                position={[0, 0, 2.953]}
                scale={157.48}
              />
              <mesh
                name="3DGeom-327_1"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-327_1'].geometry}
                material={materials['[Translucent Glass Gray]4']}
                position={[0, 0, 2.953]}
                scale={155.512}
              />
            </group>
            <group
              position={[618.661, 1145.197, 68.071]}
              rotation={[Math.PI / 2, -Math.PI / 2, 0]}
              scale={[1.08, 1, 1]}>
              <mesh
                name="3DGeom-324_2"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-324_2'].geometry}
                material={materials['[0131_Silver]']}
                position={[0, 0, 2.953]}
                scale={157.48}
              />
              <mesh
                name="3DGeom-325_2"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-325_2'].geometry}
                material={materials['[Translucent Glass Gray]4']}
                position={[0, 0, 2.953]}
                scale={155.512}
              />
            </group>
            <group
              position={[618.661, 1145.197, 140.079]}
              rotation={[Math.PI / 2, -Math.PI / 2, 0]}
              scale={[1.08, 1, 1]}>
              <mesh
                name="3DGeom-326_2"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-326_2'].geometry}
                material={materials['[0131_Silver]']}
                position={[0, 0, 2.953]}
                scale={157.48}
              />
              <mesh
                name="3DGeom-327_2"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-327_2'].geometry}
                material={materials['[Translucent Glass Gray]4']}
                position={[0, 0, 2.953]}
                scale={155.512}
              />
            </group>
            <group position={[776.142, 797.559, 68.071]} rotation={[-Math.PI / 2, 0, -Math.PI]}>
              <mesh
                name="3DGeom-324_3"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-324_3'].geometry}
                material={materials['[0131_Silver]']}
                position={[0, 0, 2.953]}
                scale={157.48}
              />
              <mesh
                name="3DGeom-325_3"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-325_3'].geometry}
                material={materials['[Translucent Glass Gray]4']}
                position={[0, 0, 2.953]}
                scale={155.512}
              />
            </group>
            <group position={[776.142, 620.394, 68.071]} rotation={[-Math.PI / 2, 0, -Math.PI]}>
              <mesh
                name="3DGeom-324_4"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-324_4'].geometry}
                material={materials['[0131_Silver]']}
                position={[0, 0, 2.953]}
                scale={157.48}
              />
              <mesh
                name="3DGeom-325_4"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-325_4'].geometry}
                material={materials['[Translucent Glass Gray]4']}
                position={[0, 0, 2.953]}
                scale={155.512}
              />
            </group>
            <group position={[776.142, 443.228, 68.071]} rotation={[-Math.PI / 2, 0, -Math.PI]}>
              <mesh
                name="3DGeom-324_5"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-324_5'].geometry}
                material={materials['[0131_Silver]']}
                position={[0, 0, 2.953]}
                scale={157.48}
              />
              <mesh
                name="3DGeom-325_5"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-325_5'].geometry}
                material={materials['[Translucent Glass Gray]4']}
                position={[0, 0, 2.953]}
                scale={155.512}
              />
            </group>
            <group position={[776.142, 797.559, 140.079]} rotation={[-Math.PI / 2, 0, -Math.PI]}>
              <mesh
                name="3DGeom-326_3"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-326_3'].geometry}
                material={materials['[0131_Silver]']}
                position={[0, 0, 2.953]}
                scale={157.48}
              />
              <mesh
                name="3DGeom-327_3"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-327_3'].geometry}
                material={materials['[Translucent Glass Gray]4']}
                position={[0, 0, 2.953]}
                scale={155.512}
              />
            </group>
            <group position={[776.142, 620.394, 140.079]} rotation={[-Math.PI / 2, 0, -Math.PI]}>
              <mesh
                name="3DGeom-326_4"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-326_4'].geometry}
                material={materials['[0131_Silver]']}
                position={[0, 0, 2.953]}
                scale={157.48}
              />
              <mesh
                name="3DGeom-327_4"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-327_4'].geometry}
                material={materials['[Translucent Glass Gray]4']}
                position={[0, 0, 2.953]}
                scale={155.512}
              />
            </group>
            <group position={[776.142, 443.228, 140.079]} rotation={[-Math.PI / 2, 0, -Math.PI]}>
              <mesh
                name="3DGeom-326_5"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-326_5'].geometry}
                material={materials['[0131_Silver]']}
                position={[0, 0, 2.953]}
                scale={157.48}
              />
              <mesh
                name="3DGeom-327_5"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-327_5'].geometry}
                material={materials['[Translucent Glass Gray]4']}
                position={[0, 0, 2.953]}
                scale={155.512}
              />
            </group>
            <group position={[776.142, 1486.535, 68.071]} rotation={[-Math.PI / 2, 0, -Math.PI]}>
              <mesh
                name="3DGeom-324_6"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-324_6'].geometry}
                material={materials['[0131_Silver]']}
                position={[0, 0, 2.953]}
                scale={157.48}
              />
              <mesh
                name="3DGeom-325_6"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-325_6'].geometry}
                material={materials['[Translucent Glass Gray]4']}
                position={[0, 0, 2.953]}
                scale={155.512}
              />
            </group>
            <group position={[776.142, 1663.701, 68.071]} rotation={[-Math.PI / 2, 0, -Math.PI]}>
              <mesh
                name="3DGeom-324_7"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-324_7'].geometry}
                material={materials['[0131_Silver]']}
                position={[0, 0, 2.953]}
                scale={157.48}
              />
              <mesh
                name="3DGeom-325_7"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-325_7'].geometry}
                material={materials['[Translucent Glass Gray]4']}
                position={[0, 0, 2.953]}
                scale={155.512}
              />
            </group>
            <group position={[776.142, 1939.291, 68.071]} rotation={[-Math.PI / 2, 0, -Math.PI]}>
              <mesh
                name="3DGeom-324_8"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-324_8'].geometry}
                material={materials['[0131_Silver]']}
                position={[0, 0, 2.953]}
                scale={157.48}
              />
              <mesh
                name="3DGeom-325_8"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-325_8'].geometry}
                material={materials['[Translucent Glass Gray]4']}
                position={[0, 0, 2.953]}
                scale={155.512}
              />
            </group>
            <group position={[776.142, 1486.535, 140.079]} rotation={[-Math.PI / 2, 0, -Math.PI]}>
              <mesh
                name="3DGeom-326_6"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-326_6'].geometry}
                material={materials['[0131_Silver]']}
                position={[0, 0, 2.953]}
                scale={157.48}
              />
              <mesh
                name="3DGeom-327_6"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-327_6'].geometry}
                material={materials['[Translucent Glass Gray]4']}
                position={[0, 0, 2.953]}
                scale={155.512}
              />
            </group>
            <group position={[776.142, 1663.701, 140.079]} rotation={[-Math.PI / 2, 0, -Math.PI]}>
              <mesh
                name="3DGeom-326_7"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-326_7'].geometry}
                material={materials['[0131_Silver]']}
                position={[0, 0, 2.953]}
                scale={157.48}
              />
              <mesh
                name="3DGeom-327_7"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-327_7'].geometry}
                material={materials['[Translucent Glass Gray]4']}
                position={[0, 0, 2.953]}
                scale={155.512}
              />
            </group>
            <group position={[776.142, 1939.291, 140.079]} rotation={[-Math.PI / 2, 0, -Math.PI]}>
              <mesh
                name="3DGeom-326_8"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-326_8'].geometry}
                material={materials['[0131_Silver]']}
                position={[0, 0, 2.953]}
                scale={157.48}
              />
              <mesh
                name="3DGeom-327_8"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-327_8'].geometry}
                material={materials['[Translucent Glass Gray]4']}
                position={[0, 0, 2.953]}
                scale={155.512}
              />
            </group>
            <group
              position={[618.661, 886.339, 67.798]}
              rotation={[Math.PI / 2, -Math.PI / 2, 0]}
              scale={[1.037, 1.014, 1]}>
              <mesh
                name="3DGeom-360"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-360'].geometry}
                material={materials['[0130_Gainsboro]']}
                position={[0, 19.685, 2.362]}
                scale={85.63}
              />
              <mesh
                name="3DGeom-361"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-361'].geometry}
                material={materials['[Translucent Glass Gray]4']}
                position={[0, 19.685, 1.969]}
                scale={83.661}
              />
              <mesh
                name="3DGeom-362"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-362'].geometry}
                material={materials['[Mirror 02]1']}
                position={[0, 0, 1.772]}
                scale={48.583}
              />
            </group>
            <group
              position={[618.661, 708.976, 67.798]}
              rotation={[Math.PI / 2, -Math.PI / 2, 0]}
              scale={[1.034, 1.014, 1]}>
              <mesh
                name="3DGeom-360_1"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-360_1'].geometry}
                material={materials['[0130_Gainsboro]']}
                position={[0, 19.685, 2.362]}
                scale={85.63}
              />
              <mesh
                name="3DGeom-361_1"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-361_1'].geometry}
                material={materials['[Translucent Glass Gray]4']}
                position={[0, 19.685, 1.969]}
                scale={83.661}
              />
              <mesh
                name="3DGeom-362_1"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-362_1'].geometry}
                material={materials['[Mirror 02]1']}
                position={[0, 0, 1.772]}
                scale={48.583}
              />
            </group>
            <group
              position={[618.661, 531.811, 67.798]}
              rotation={[Math.PI / 2, -Math.PI / 2, 0]}
              scale={[1.034, 1.014, 1]}>
              <mesh
                name="3DGeom-360_2"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-360_2'].geometry}
                material={materials['[0130_Gainsboro]']}
                position={[0, 19.685, 2.362]}
                scale={85.63}
              />
              <mesh
                name="3DGeom-361_2"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-361_2'].geometry}
                material={materials['[Translucent Glass Gray]4']}
                position={[0, 19.685, 1.969]}
                scale={83.661}
              />
              <mesh
                name="3DGeom-362_2"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-362_2'].geometry}
                material={materials['[Mirror 02]1']}
                position={[0, 0, 1.772]}
                scale={48.583}
              />
            </group>
            <group
              position={[549.764, 386.142, 67.798]}
              rotation={[-Math.PI / 2, 0, Math.PI]}
              scale={[0.805, 1.014, 1]}>
              <mesh
                name="3DGeom-360_3"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-360_3'].geometry}
                material={materials['[0130_Gainsboro]']}
                position={[0, 19.685, 2.362]}
                scale={85.63}
              />
              <mesh
                name="3DGeom-361_3"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-361_3'].geometry}
                material={materials['[Translucent Glass Gray]4']}
                position={[0, 19.685, 1.969]}
                scale={83.661}
              />
              <mesh
                name="3DGeom-362_3"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-362_3'].geometry}
                material={materials['[Mirror 02]1']}
                position={[0, 0, 1.772]}
                scale={48.583}
              />
            </group>
            <group
              position={[618.661, 1404.055, 67.798]}
              rotation={[Math.PI / 2, -Math.PI / 2, 0]}
              scale={[1.037, 1.014, 1]}>
              <mesh
                name="3DGeom-360_4"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-360_4'].geometry}
                material={materials['[0130_Gainsboro]']}
                position={[0, 19.685, 2.362]}
                scale={85.63}
              />
              <mesh
                name="3DGeom-361_4"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-361_4'].geometry}
                material={materials['[Translucent Glass Gray]4']}
                position={[0, 19.685, 1.969]}
                scale={83.661}
              />
              <mesh
                name="3DGeom-362_4"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-362_4'].geometry}
                material={materials['[Mirror 02]1']}
                position={[0, 0, 1.772]}
                scale={48.583}
              />
            </group>
            <group
              position={[618.661, 1581.614, 67.798]}
              rotation={[Math.PI / 2, -Math.PI / 2, 0]}
              scale={[1.037, 1.014, 1]}>
              <mesh
                name="3DGeom-360_5"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-360_5'].geometry}
                material={materials['[0130_Gainsboro]']}
                position={[0, 19.685, 2.362]}
                scale={85.63}
              />
              <mesh
                name="3DGeom-361_5"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-361_5'].geometry}
                material={materials['[Translucent Glass Gray]4']}
                position={[0, 19.685, 1.969]}
                scale={83.661}
              />
              <mesh
                name="3DGeom-362_5"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-362_5'].geometry}
                material={materials['[Mirror 02]1']}
                position={[0, 0, 1.772]}
                scale={48.583}
              />
            </group>
            <group
              position={[618.661, 1807.558, 67.798]}
              rotation={[Math.PI / 2, -Math.PI / 2, 0]}
              scale={[1.602, 1.014, 1]}>
              <mesh
                name="3DGeom-360_6"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-360_6'].geometry}
                material={materials['[0130_Gainsboro]']}
                position={[0, 19.685, 2.362]}
                scale={85.63}
              />
              <mesh
                name="3DGeom-361_6"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-361_6'].geometry}
                material={materials['[Translucent Glass Gray]4']}
                position={[0, 19.685, 1.969]}
                scale={83.661}
              />
              <mesh
                name="3DGeom-362_6"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-362_6'].geometry}
                material={materials['[Mirror 02]1']}
                position={[0, 0, 1.772]}
                scale={48.583}
              />
            </group>
            <group
              position={[390.315, 255.236, 67.798]}
              rotation={[-Math.PI / 2, 0, Math.PI]}
              scale={[0.828, 1.014, 1]}>
              <mesh
                name="3DGeom-360_7"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-360_7'].geometry}
                material={materials['[0130_Gainsboro]']}
                position={[0, 19.685, 2.362]}
                scale={85.63}
              />
              <mesh
                name="3DGeom-361_7"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-361_7'].geometry}
                material={materials['[Translucent Glass Gray]4']}
                position={[0, 19.685, 1.969]}
                scale={83.661}
              />
              <mesh
                name="3DGeom-362_7"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-362_7'].geometry}
                material={materials['[Mirror 02]1']}
                position={[0, 0, 1.772]}
                scale={48.583}
              />
            </group>
            <group position={[945.433, 180.433, 95.906]} rotation={[Math.PI / 2, Math.PI / 2, 0]}>
              <mesh
                name="3DGeom-47_22"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-47_22'].geometry}
                material={materials['[0136_Charcoal]']}
                position={[0, 9.843, 1.969]}
                scale={78.74}
              />
              <mesh
                name="3DGeom-48_22"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-48_22'].geometry}
                material={materials['[0135_DarkGray]']}
                position={[0, 9.843, 1.969]}
                scale={76.772}
              />
            </group>
            <group position={[945.433, 357.598, 95.906]} rotation={[Math.PI / 2, Math.PI / 2, 0]}>
              <mesh
                name="3DGeom-47_23"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-47_23'].geometry}
                material={materials['[0136_Charcoal]']}
                position={[0, 9.843, 1.969]}
                scale={78.74}
              />
              <mesh
                name="3DGeom-48_23"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-48_23'].geometry}
                material={materials['[0135_DarkGray]']}
                position={[0, 9.843, 1.969]}
                scale={76.772}
              />
            </group>
            <group position={[945.433, 534.724, 95.906]} rotation={[Math.PI / 2, Math.PI / 2, 0]}>
              <mesh
                name="3DGeom-47_24"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-47_24'].geometry}
                material={materials['[0136_Charcoal]']}
                position={[0, 9.843, 1.969]}
                scale={78.74}
              />
              <mesh
                name="3DGeom-48_24"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-48_24'].geometry}
                material={materials['[0135_DarkGray]']}
                position={[0, 9.843, 1.969]}
                scale={76.772}
              />
            </group>
            <group position={[945.433, 711.929, 95.906]} rotation={[Math.PI / 2, Math.PI / 2, 0]}>
              <mesh
                name="3DGeom-47_25"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-47_25'].geometry}
                material={materials['[0136_Charcoal]']}
                position={[0, 9.843, 1.969]}
                scale={78.74}
              />
              <mesh
                name="3DGeom-48_25"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-48_25'].geometry}
                material={materials['[0135_DarkGray]']}
                position={[0, 9.843, 1.969]}
                scale={76.772}
              />
            </group>
            <group position={[945.433, 889.055, 95.906]} rotation={[Math.PI / 2, Math.PI / 2, 0]}>
              <mesh
                name="3DGeom-47_26"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-47_26'].geometry}
                material={materials['[0136_Charcoal]']}
                position={[0, 9.843, 1.969]}
                scale={78.74}
              />
              <mesh
                name="3DGeom-48_26"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-48_26'].geometry}
                material={materials['[0135_DarkGray]']}
                position={[0, 9.843, 1.969]}
                scale={76.772}
              />
            </group>
            <group position={[945.433, 1400.669, 95.906]} rotation={[Math.PI / 2, Math.PI / 2, 0]}>
              <mesh
                name="3DGeom-47_27"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-47_27'].geometry}
                material={materials['[0136_Charcoal]']}
                position={[0, 9.843, 1.969]}
                scale={78.74}
              />
              <mesh
                name="3DGeom-48_27"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-48_27'].geometry}
                material={materials['[0135_DarkGray]']}
                position={[0, 9.843, 1.969]}
                scale={76.772}
              />
            </group>
            <group position={[945.433, 1578.071, 95.906]} rotation={[Math.PI / 2, Math.PI / 2, 0]}>
              <mesh
                name="3DGeom-47_28"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-47_28'].geometry}
                material={materials['[0136_Charcoal]']}
                position={[0, 9.843, 1.969]}
                scale={78.74}
              />
              <mesh
                name="3DGeom-48_28"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-48_28'].geometry}
                material={materials['[0135_DarkGray]']}
                position={[0, 9.843, 1.969]}
                scale={76.772}
              />
            </group>
            <group position={[945.433, 1755.236, 95.906]} rotation={[Math.PI / 2, Math.PI / 2, 0]}>
              <mesh
                name="3DGeom-47_29"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-47_29'].geometry}
                material={materials['[0136_Charcoal]']}
                position={[0, 9.843, 1.969]}
                scale={78.74}
              />
              <mesh
                name="3DGeom-48_29"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-48_29'].geometry}
                material={materials['[0135_DarkGray]']}
                position={[0, 9.843, 1.969]}
                scale={76.772}
              />
            </group>
            <group position={[945.433, 1932.402, 95.906]} rotation={[Math.PI / 2, Math.PI / 2, 0]}>
              <mesh
                name="3DGeom-47_30"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-47_30'].geometry}
                material={materials['[0136_Charcoal]']}
                position={[0, 9.843, 1.969]}
                scale={78.74}
              />
              <mesh
                name="3DGeom-48_30"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-48_30'].geometry}
                material={materials['[0135_DarkGray]']}
                position={[0, 9.843, 1.969]}
                scale={76.772}
              />
            </group>
            <group position={[945.433, 2109.567, 95.906]} rotation={[Math.PI / 2, Math.PI / 2, 0]}>
              <mesh
                name="3DGeom-47_31"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-47_31'].geometry}
                material={materials['[0136_Charcoal]']}
                position={[0, 9.843, 1.969]}
                scale={78.74}
              />
              <mesh
                name="3DGeom-48_31"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-48_31'].geometry}
                material={materials['[0135_DarkGray]']}
                position={[0, 9.843, 1.969]}
                scale={76.772}
              />
            </group>
            <group position={[134.409, 2109.402, 95.906]} rotation={[Math.PI / 2, -Math.PI / 2, 0]}>
              <mesh
                name="3DGeom-47_32"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-47_32'].geometry}
                material={materials['[0136_Charcoal]']}
                position={[0, 9.843, 1.969]}
                scale={78.74}
              />
              <mesh
                name="3DGeom-48_32"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-48_32'].geometry}
                material={materials['[0135_DarkGray]']}
                position={[0, 9.843, 1.969]}
                scale={76.772}
              />
            </group>
            <group position={[134.409, 1932.402, 95.906]} rotation={[Math.PI / 2, -Math.PI / 2, 0]}>
              <mesh
                name="3DGeom-47_33"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-47_33'].geometry}
                material={materials['[0136_Charcoal]']}
                position={[0, 9.843, 1.969]}
                scale={78.74}
              />
              <mesh
                name="3DGeom-48_33"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-48_33'].geometry}
                material={materials['[0135_DarkGray]']}
                position={[0, 9.843, 1.969]}
                scale={76.772}
              />
            </group>
            <group position={[134.409, 1755.236, 95.906]} rotation={[Math.PI / 2, -Math.PI / 2, 0]}>
              <mesh
                name="3DGeom-47_34"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-47_34'].geometry}
                material={materials['[0136_Charcoal]']}
                position={[0, 9.843, 1.969]}
                scale={78.74}
              />
              <mesh
                name="3DGeom-48_34"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-48_34'].geometry}
                material={materials['[0135_DarkGray]']}
                position={[0, 9.843, 1.969]}
                scale={76.772}
              />
            </group>
            <group position={[134.409, 1578.071, 95.906]} rotation={[Math.PI / 2, -Math.PI / 2, 0]}>
              <mesh
                name="3DGeom-47_35"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-47_35'].geometry}
                material={materials['[0136_Charcoal]']}
                position={[0, 9.843, 1.969]}
                scale={78.74}
              />
              <mesh
                name="3DGeom-48_35"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-48_35'].geometry}
                material={materials['[0135_DarkGray]']}
                position={[0, 9.843, 1.969]}
                scale={76.772}
              />
            </group>
            <group position={[134.409, 1400.906, 95.906]} rotation={[Math.PI / 2, -Math.PI / 2, 0]}>
              <mesh
                name="3DGeom-47_36"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-47_36'].geometry}
                material={materials['[0136_Charcoal]']}
                position={[0, 9.843, 1.969]}
                scale={78.74}
              />
              <mesh
                name="3DGeom-48_36"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-48_36'].geometry}
                material={materials['[0135_DarkGray]']}
                position={[0, 9.843, 1.969]}
                scale={76.772}
              />
            </group>
            <group position={[134.409, 889.094, 95.906]} rotation={[Math.PI / 2, -Math.PI / 2, 0]}>
              <mesh
                name="3DGeom-47_37"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-47_37'].geometry}
                material={materials['[0136_Charcoal]']}
                position={[0, 9.843, 1.969]}
                scale={78.74}
              />
              <mesh
                name="3DGeom-48_37"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-48_37'].geometry}
                material={materials['[0135_DarkGray]']}
                position={[0, 9.843, 1.969]}
                scale={76.772}
              />
            </group>
            <group position={[134.409, 711.929, 95.906]} rotation={[Math.PI / 2, -Math.PI / 2, 0]}>
              <mesh
                name="3DGeom-47_38"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-47_38'].geometry}
                material={materials['[0136_Charcoal]']}
                position={[0, 9.843, 1.969]}
                scale={78.74}
              />
              <mesh
                name="3DGeom-48_38"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-48_38'].geometry}
                material={materials['[0135_DarkGray]']}
                position={[0, 9.843, 1.969]}
                scale={76.772}
              />
            </group>
            <group position={[134.409, 534.764, 95.906]} rotation={[Math.PI / 2, -Math.PI / 2, 0]}>
              <mesh
                name="3DGeom-47_39"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-47_39'].geometry}
                material={materials['[0136_Charcoal]']}
                position={[0, 9.843, 1.969]}
                scale={78.74}
              />
              <mesh
                name="3DGeom-48_39"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-48_39'].geometry}
                material={materials['[0135_DarkGray]']}
                position={[0, 9.843, 1.969]}
                scale={76.772}
              />
            </group>
            <group position={[134.409, 357.598, 95.906]} rotation={[Math.PI / 2, -Math.PI / 2, 0]}>
              <mesh
                name="3DGeom-47_40"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-47_40'].geometry}
                material={materials['[0136_Charcoal]']}
                position={[0, 9.843, 1.969]}
                scale={78.74}
              />
              <mesh
                name="3DGeom-48_40"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-48_40'].geometry}
                material={materials['[0135_DarkGray]']}
                position={[0, 9.843, 1.969]}
                scale={76.772}
              />
            </group>
            <group position={[134.409, 180.433, 95.906]} rotation={[Math.PI / 2, -Math.PI / 2, 0]}>
              <mesh
                name="3DGeom-47_41"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-47_41'].geometry}
                material={materials['[0136_Charcoal]']}
                position={[0, 9.843, 1.969]}
                scale={78.74}
              />
              <mesh
                name="3DGeom-48_41"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-48_41'].geometry}
                material={materials['[0135_DarkGray]']}
                position={[0, 9.843, 1.969]}
                scale={76.772}
              />
            </group>
            <group position={[776.142, 89.882, 95.906]} rotation={[Math.PI / 2, 0, 0]}>
              <mesh
                name="3DGeom-424"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-424'].geometry}
                material={materials['[0136_Charcoal]']}
                position={[0, 9.843, 1.969]}
                scale={157.48}
              />
              <mesh
                name="3DGeom-425"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-425'].geometry}
                material={materials['[0135_DarkGray]']}
                position={[0, 9.843, 1.969]}
                scale={155.512}
              />
            </group>
            <group position={[776.142, 2200.118, 95.906]} rotation={[-Math.PI / 2, 0, -Math.PI]}>
              <mesh
                name="3DGeom-424_1"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-424_1'].geometry}
                material={materials['[0136_Charcoal]']}
                position={[0, 9.843, 1.969]}
                scale={157.48}
              />
              <mesh
                name="3DGeom-425_1"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-425_1'].geometry}
                material={materials['[0135_DarkGray]']}
                position={[0, 9.843, 1.969]}
                scale={155.512}
              />
            </group>
            <group position={[488.74, 2011.142, 15.748]}>
              <mesh
                name="3DGeom-45_3"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-45_3'].geometry}
                material={materials['[0043_SaddleBrown]']}
                position={[18.701, 1.969, 41.339]}
                scale={41.339}
              />
            </group>
            <group position={[888.346, 2011.142, 15.748]}>
              <mesh
                name="3DGeom-45_4"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-45_4'].geometry}
                material={materials['[0043_SaddleBrown]']}
                position={[18.701, 1.969, 41.339]}
                scale={41.339}
              />
            </group>
            <group position={[800.748, 2015.079, 75.079]} rotation={[Math.PI / 2, 0, 0]}>
              <mesh
                name="3DGeom-430"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-430'].geometry}
                material={materials['[0131_Silver]']}
                position={[0, 0, 1.969]}
                scale={67.913}
              />
              <mesh
                name="3DGeom-431"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-431'].geometry}
                material={materials['[Translucent Glass Gray]6']}
                position={[0, 0, 1.969]}
                scale={65.945}
              />
            </group>
            <group position={[613.74, 2015.079, 75.079]} rotation={[Math.PI / 2, 0, 0]}>
              <mesh
                name="3DGeom-430_1"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-430_1'].geometry}
                material={materials['[0131_Silver]']}
                position={[0, 0, 1.969]}
                scale={67.913}
              />
              <mesh
                name="3DGeom-431_1"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-431_1'].geometry}
                material={materials['[Translucent Glass Gray]6']}
                position={[0, 0, 1.969]}
                scale={65.945}
              />
            </group>
            <group position={[319.449, 2019.921, 15.748]} rotation={[0, 0, Math.PI / 2]}>
              <mesh
                name="3DGeom-45_5"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-45_5'].geometry}
                material={materials['[0043_SaddleBrown]']}
                position={[18.701, 1.969, 41.339]}
                scale={41.339}
              />
            </group>
            <group position={[429.685, 2349.724, 15.748]} rotation={[0, 0, Math.PI / 2]}>
              <mesh
                name="3DGeom-45_6"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-45_6'].geometry}
                material={materials['[0043_SaddleBrown]']}
                position={[18.701, 1.969, 41.339]}
                scale={41.339}
              />
            </group>
            <group position={[480.866, 1489.488, 15.748]} rotation={[0, 0, Math.PI / 2]}>
              <mesh
                name="3DGeom-45_7"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-45_7'].geometry}
                material={materials['[0043_SaddleBrown]']}
                position={[18.701, 1.969, 41.339]}
                scale={41.339}
              />
            </group>
            <group position={[461.181, 101.693, 15.748]} rotation={[0, 0, Math.PI]}>
              <mesh
                name="3DGeom-45_8"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-45_8'].geometry}
                material={materials['[0043_SaddleBrown]']}
                position={[18.701, 1.969, 41.339]}
                scale={41.339}
              />
            </group>
            <group position={[423.78, 101.693, 15.748]} rotation={[0, 0, Math.PI]}>
              <mesh
                name="3DGeom-45_9"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-45_9'].geometry}
                material={materials['[0043_SaddleBrown]']}
                position={[18.701, 1.969, 41.339]}
                scale={41.339}
              />
            </group>
            <group
              position={[949.37, 1145, 98.365]}
              rotation={[Math.PI / 2, Math.PI / 2, 0]}
              scale={[1, 0.75, 1]}>
              <mesh
                name="3DGeom-439"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-439'].geometry}
                material={materials['[0136_Charcoal]']}
                position={[0, 9.843, 1.969]}
                scale={157.48}
              />
              <mesh
                name="3DGeom-440"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-440'].geometry}
                material={materials['[0135_DarkGray]']}
                position={[0, 9.843, 1.969]}
                scale={155.512}
              />
            </group>
            <group position={[480.866, 1641.063, 52.795]} rotation={[Math.PI / 2, -Math.PI / 2, 0]}>
              <mesh
                name="3DGeom-124_2"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-124_2'].geometry}
                material={materials['[0136_Charcoal]']}
                position={[23.996, 22.815, 1.969]}
                scale={23.996}
              />
              <mesh
                name="3DGeom-125_2"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-125_2'].geometry}
                material={materials['[0135_DarkGray]']}
                position={[23.996, 22.815, 1.969]}
                scale={20.059}
              />
              <mesh
                name="3DGeom-126_2"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-126_2'].geometry}
                material={materials['WB Glazing']}
                position={[23.996, 22.815, 2.362]}
                scale={20.059}
              />
            </group>
            <group position={[352.913, 2196.181, 15.748]}>
              <mesh
                name="3DGeom-45_10"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-45_10'].geometry}
                material={materials['[0043_SaddleBrown]']}
                position={[18.701, 1.969, 41.339]}
                scale={41.339}
              />
            </group>
            <group position={[390.315, 2196.181, 15.748]}>
              <mesh
                name="3DGeom-45_11"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-45_11'].geometry}
                material={materials['[0043_SaddleBrown]']}
                position={[18.701, 1.969, 41.339]}
                scale={41.339}
              />
            </group>
            <group position={[476.929, 1695.197, 57.087]} rotation={[Math.PI / 2, Math.PI / 2, 0]}>
              <mesh
                name="3DGeom-446"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-446'].geometry}
                material={materials['[0136_Charcoal]']}
                position={[0, 0, 1.969]}
                scale={41.339}
              />
              <mesh
                name="3DGeom-447"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-447'].geometry}
                material={materials['[0135_DarkGray]']}
                position={[0, 0, 1.969]}
                scale={39.37}
              />
            </group>
            <group position={[476.929, 1872.362, 57.087]} rotation={[Math.PI / 2, Math.PI / 2, 0]}>
              <mesh
                name="3DGeom-446_1"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-446_1'].geometry}
                material={materials['[0136_Charcoal]']}
                position={[0, 0, 1.969]}
                scale={41.339}
              />
              <mesh
                name="3DGeom-447_1"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-447_1'].geometry}
                material={materials['[0135_DarkGray]']}
                position={[0, 0, 1.969]}
                scale={39.37}
              />
            </group>
            <group position={[404.724, 1672.559, 57.087]} rotation={[-Math.PI / 2, 0, -Math.PI]}>
              <mesh
                name="3DGeom-446_2"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-446_2'].geometry}
                material={materials['[0136_Charcoal]']}
                position={[0, 0, 1.969]}
                scale={41.339}
              />
              <mesh
                name="3DGeom-447_2"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-447_2'].geometry}
                material={materials['[0135_DarkGray]']}
                position={[0, 0, 1.969]}
                scale={39.37}
              />
            </group>
            <group position={[490.335, 2475.709, 51.732]} rotation={[Math.PI / 2, 0, 0]}>
              <mesh
                name="3DGeom-124_3"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-124_3'].geometry}
                material={materials['[0136_Charcoal]']}
                position={[23.996, 22.815, 1.969]}
                scale={23.996}
              />
              <mesh
                name="3DGeom-125_3"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-125_3'].geometry}
                material={materials['[0135_DarkGray]']}
                position={[23.996, 22.815, 1.969]}
                scale={20.059}
              />
              <mesh
                name="3DGeom-126_3"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-126_3'].geometry}
                material={materials['WB Glazing']}
                position={[23.996, 22.815, 2.362]}
                scale={20.059}
              />
            </group>
            <group position={[618.661, 2428.839, 51.732]} rotation={[Math.PI / 2, -Math.PI / 2, 0]}>
              <mesh
                name="3DGeom-124_4"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-124_4'].geometry}
                material={materials['[0136_Charcoal]']}
                position={[23.996, 22.815, 1.969]}
                scale={23.996}
              />
              <mesh
                name="3DGeom-125_4"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-125_4'].geometry}
                material={materials['[0135_DarkGray]']}
                position={[23.996, 22.815, 1.969]}
                scale={20.059}
              />
              <mesh
                name="3DGeom-126_4"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-126_4'].geometry}
                material={materials['WB Glazing']}
                position={[23.996, 22.815, 2.362]}
                scale={20.059}
              />
            </group>
            <group position={[472.992, 1145, 106.299]} rotation={[Math.PI / 2, -Math.PI / 2, 0]}>
              <mesh
                name="3DGeom-458"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-458'].geometry}
                material={materials['[0043_SaddleBrown]']}
                position={[0, 0, 1.969]}
                scale={39.37}
              />
              <mesh
                name="3DGeom-459"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-459'].geometry}
                material={materials['[Translucent Glass Gray]6']}
                position={[0, 0, 1.969]}
                scale={37.402}
              />
            </group>
            <group position={[469.055, 1145, 15.748]}>
              <mesh
                name="3DGeom-460"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-460'].geometry}
                material={materials['[0043_SaddleBrown]']}
                position={[1.969, 19.685, 41.339]}
                scale={41.339}
              />
              <mesh
                name="3DGeom-461"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-461'].geometry}
                material={materials['[Translucent Glass Gray]6']}
                position={[1.969, 19.685, 60.039]}
                scale={17.52}
              />
            </group>
            <group position={[469.055, 1105.63, 15.748]}>
              <mesh
                name="3DGeom-460_1"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-460_1'].geometry}
                material={materials['[0043_SaddleBrown]']}
                position={[1.969, 19.685, 41.339]}
                scale={41.339}
              />
              <mesh
                name="3DGeom-461_1"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-461_1'].geometry}
                material={materials['[Translucent Glass Gray]6']}
                position={[1.969, 19.685, 60.039]}
                scale={17.52}
              />
            </group>
            <group position={[-1453.238, -5436.683, 182.769]}>
              <mesh
                name="3DGeom-464"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-464'].geometry}
                material={materials['[0045_Goldenrod]']}
                position={[1580.364, 6582.274, -76.43]}
                scale={158.071}
              />
            </group>
            <group position={[429.685, 2414.685, 15.748]} rotation={[0, 0, Math.PI / 2]}>
              <mesh
                name="3DGeom-45_12"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-45_12'].geometry}
                material={materials['[0043_SaddleBrown]']}
                position={[18.701, 1.969, 41.339]}
                scale={41.339}
              />
            </group>
            <group position={[850.306, 130.341, 15.748]}>
              <mesh
                name="3DGeom-147_23"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-147_23'].geometry}
                material={materials['[Wood Bamboo]']}
                position={[36.89, 22.323, 15]}
                scale={31.181}
              />
              <mesh
                name="3DGeom-148_23"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-148_23'].geometry}
                material={materials['[Carpet Loop Pattern]']}
                position={[36.89, 22.323, 30]}
                scale={31.181}
              />
            </group>
            <group position={[185.591, -49.882, 83.819]} rotation={[Math.PI / 2, 0, 0]}>
              <mesh
                name="3DGeom-468"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-468'].geometry}
                material={materials['[0130_Gainsboro]']}
                position={[0, 0, 0.984]}
                scale={83.819}
              />
              <mesh
                name="3DGeom-469"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-469'].geometry}
                material={materials['[Translucent Glass Gray]4']}
                position={[0, 0, 0.984]}
                scale={83.031}
              />
            </group>
            <group
              position={[313.543, 367.441, 96]}
              rotation={[Math.PI / 2, Math.PI / 2, 0]}
              scale={[0.493, 0.8, 1]}>
              <mesh
                name="3DGeom-470"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-470'].geometry}
                material={materials['[0130_Gainsboro]']}
                position={[0, 19.685, 2.953]}
                scale={139.764}
              />
              <mesh
                name="3DGeom-471"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-471'].geometry}
                material={materials['[Translucent Glass Gray]4']}
                position={[0, 19.685, 2.953]}
                scale={137.795}
              />
            </group>
            <group position={[618.661, 416.654, 68.071]} rotation={[Math.PI / 2, -Math.PI / 2, 0]}>
              <mesh
                name="3DGeom-472"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-472'].geometry}
                material={materials['[0131_Silver]']}
                position={[0, 19.685, 2.953]}
                scale={72.008}
              />
              <mesh
                name="3DGeom-473"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-473'].geometry}
                material={materials['[Translucent Glass Gray]4']}
                position={[0, 19.685, 2.953]}
                scale={70.039}
              />
            </group>
            <group
              position={[476.929, 708.484, 67.087]}
              rotation={[Math.PI / 2, Math.PI / 2, 0]}
              scale={[0.96, 1, 1]}>
              <mesh
                name="3DGeom-474"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-474'].geometry}
                material={materials['[0130_Gainsboro]']}
                position={[0, 19.685, 2.362]}
                scale={85.63}
              />
              <mesh
                name="3DGeom-475"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-475'].geometry}
                material={materials['[Translucent Glass Gray]4']}
                position={[0, 19.685, 1.969]}
                scale={83.661}
              />
              <mesh
                name="3DGeom-476"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-476'].geometry}
                material={materials['[Mirror 02]1']}
                position={[0, 0, 1.772]}
                scale={48.583}
              />
            </group>
            <group position={[476.929, 534.764, 67.087]} rotation={[Math.PI / 2, Math.PI / 2, 0]}>
              <mesh
                name="3DGeom-477"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-477'].geometry}
                material={materials['[0130_Gainsboro]']}
                position={[0, 19.685, 2.362]}
                scale={85.63}
              />
              <mesh
                name="3DGeom-478"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-478'].geometry}
                material={materials['[Translucent Glass Gray]4']}
                position={[0, 19.685, 1.969]}
                scale={83.661}
              />
              <mesh
                name="3DGeom-479"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-479'].geometry}
                material={materials['[Mirror 02]1']}
                position={[0, 0, 1.772]}
                scale={48.583}
              />
            </group>
            <group
              position={[313.543, 180.433, 80.079]}
              rotation={[Math.PI / 2, Math.PI / 2, 0]}
              scale={[0.563, 1, 1]}>
              <mesh
                name="3DGeom-480"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-480'].geometry}
                material={materials['[0130_Gainsboro]']}
                position={[0, 19.685, 2.953]}
                scale={139.764}
              />
              <mesh
                name="3DGeom-481"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-481'].geometry}
                material={materials['[Translucent Glass Gray]4']}
                position={[0, 19.685, 2.953]}
                scale={137.795}
              />
            </group>
            <group position={[465.118, 241.457, 80.079]} rotation={[Math.PI / 2, Math.PI / 2, 0]}>
              <mesh
                name="3DGeom-482"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-482'].geometry}
                material={materials['[0130_Gainsboro]']}
                position={[0, 19.685, 2.953]}
                scale={139.764}
              />
              <mesh
                name="3DGeom-483"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-483'].geometry}
                material={materials['[Translucent Glass Gray]4']}
                position={[0, 19.685, 2.953]}
                scale={137.795}
              />
            </group>
            <group
              position={[313.781, 443.228, 80.079]}
              rotation={[-Math.PI / 2, 0, -Math.PI]}
              scale={[1.061, 1, 1]}>
              <mesh
                name="3DGeom-484"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-484'].geometry}
                material={materials['[0130_Gainsboro]']}
                position={[0, 0, 2.953]}
                scale={157.48}
              />
              <mesh
                name="3DGeom-485"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-485'].geometry}
                material={materials['[Translucent Glass Gray]4']}
                position={[0, 0, 2.953]}
                scale={155.512}
              />
            </group>
            <group
              position={[313.543, 620.394, 82.047]}
              rotation={[-Math.PI / 2, 0, -Math.PI]}
              scale={[1.063, 1, 1]}>
              <mesh
                name="3DGeom-486"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-486'].geometry}
                material={materials['[0130_Gainsboro]']}
                position={[0, 0, 2.953]}
                scale={157.48}
              />
              <mesh
                name="3DGeom-487"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-487'].geometry}
                material={materials['[Translucent Glass Gray]4']}
                position={[0, 0, 2.953]}
                scale={155.512}
              />
            </group>
            <group
              position={[313.781, 443.228, 140.079]}
              rotation={[-Math.PI / 2, 0, -Math.PI]}
              scale={[1.061, 1, 1]}>
              <mesh
                name="3DGeom-488"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-488'].geometry}
                material={materials['[0130_Gainsboro]']}
                position={[0, 0, 2.953]}
                scale={157.48}
              />
              <mesh
                name="3DGeom-489"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-489'].geometry}
                material={materials['[Translucent Glass Gray]4']}
                position={[0, 0, 2.953]}
                scale={155.512}
              />
            </group>
            <group position={[563.849, 130.341, 15.748]}>
              <mesh
                name="3DGeom-147_24"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-147_24'].geometry}
                material={materials['[Wood Bamboo]']}
                position={[36.89, 22.323, 15]}
                scale={31.181}
              />
              <mesh
                name="3DGeom-148_24"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-148_24'].geometry}
                material={materials['[Carpet Loop Pattern]']}
                position={[36.89, 22.323, 30]}
                scale={31.181}
              />
            </group>
            <group position={[890.79, 496.17, 15.748]} rotation={[0, 0, Math.PI / 2]}>
              <mesh
                name="3DGeom-147_25"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-147_25'].geometry}
                material={materials['[Wood Bamboo]']}
                position={[36.89, 22.323, 15]}
                scale={31.181}
              />
              <mesh
                name="3DGeom-148_25"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-148_25'].geometry}
                material={materials['[Carpet Loop Pattern]']}
                position={[36.89, 22.323, 30]}
                scale={31.181}
              />
            </group>
            <group position={[696.801, 142.907, 15.748]}>
              <mesh
                name="3DGeom-147_26"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-147_26'].geometry}
                material={materials['[Wood Bamboo]']}
                position={[36.89, 22.323, 15]}
                scale={31.181}
              />
              <mesh
                name="3DGeom-148_26"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-148_26'].geometry}
                material={materials['[Carpet Loop Pattern]']}
                position={[36.89, 22.323, 30]}
                scale={31.181}
              />
            </group>
            <group position={[304.105, 359.024, 15.748]} rotation={[0, 0, -Math.PI]}>
              <mesh
                name="3DGeom-147_27"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-147_27'].geometry}
                material={materials['[Wood Bamboo]']}
                position={[36.89, 22.323, 15]}
                scale={31.181}
              />
              <mesh
                name="3DGeom-148_27"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-148_27'].geometry}
                material={materials['[Carpet Loop Pattern]']}
                position={[36.89, 22.323, 30]}
                scale={31.181}
              />
            </group>
            <group position={[167.231, 390.896, 15.748]} rotation={[0, 0, -Math.PI / 2]}>
              <mesh
                name="3DGeom-147_28"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-147_28'].geometry}
                material={materials['[Wood Bamboo]']}
                position={[36.89, 22.323, 15]}
                scale={31.181}
              />
              <mesh
                name="3DGeom-148_28"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-148_28'].geometry}
                material={materials['[Carpet Loop Pattern]']}
                position={[36.89, 22.323, 30]}
                scale={31.181}
              />
            </group>
            <group
              position={[229.882, 254.449, 67.798]}
              rotation={[-Math.PI / 2, 0, Math.PI]}
              scale={[0.977, 1.014, 1]}>
              <mesh
                name="3DGeom-360_8"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-360_8'].geometry}
                material={materials['[0130_Gainsboro]']}
                position={[0, 19.685, 2.362]}
                scale={85.63}
              />
              <mesh
                name="3DGeom-361_8"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-361_8'].geometry}
                material={materials['[Translucent Glass Gray]4']}
                position={[0, 19.685, 1.969]}
                scale={83.661}
              />
              <mesh
                name="3DGeom-362_8"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-362_8'].geometry}
                material={materials['[Mirror 02]1']}
                position={[0, 0, 1.772]}
                scale={48.583}
              />
            </group>
            <group position={[159.809, 617.467, 15.748]} rotation={[0, 0, -Math.PI / 2]}>
              <mesh
                name="3DGeom-147_29"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-147_29'].geometry}
                material={materials['[Wood Bamboo]']}
                position={[36.89, 22.323, 15]}
                scale={31.181}
              />
              <mesh
                name="3DGeom-148_29"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-148_29'].geometry}
                material={materials['[Carpet Loop Pattern]']}
                position={[36.89, 22.323, 30]}
                scale={31.181}
              />
            </group>
            <group position={[234.024, 455.314, 15.748]}>
              <mesh
                name="3DGeom-147_30"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-147_30'].geometry}
                material={materials['[Wood Bamboo]']}
                position={[36.89, 22.323, 15]}
                scale={31.181}
              />
              <mesh
                name="3DGeom-148_30"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-148_30'].geometry}
                material={materials['[Carpet Loop Pattern]']}
                position={[36.89, 22.323, 30]}
                scale={31.181}
              />
            </group>
            <group position={[380.175, 619.763, 15.748]} rotation={[0, 0, -Math.PI / 2]}>
              <mesh
                name="3DGeom-147_31"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-147_31'].geometry}
                material={materials['[Wood Bamboo]']}
                position={[36.89, 22.323, 15]}
                scale={31.181}
              />
              <mesh
                name="3DGeom-148_31"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-148_31'].geometry}
                material={materials['[Carpet Loop Pattern]']}
                position={[36.89, 22.323, 30]}
                scale={31.181}
              />
            </group>
            <group position={[169.517, 649.034, 15.748]}>
              <mesh
                name="3DGeom-147_32"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-147_32'].geometry}
                material={materials['[Wood Bamboo]']}
                position={[36.89, 22.323, 15]}
                scale={31.181}
              />
              <mesh
                name="3DGeom-148_32"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-148_32'].geometry}
                material={materials['[Carpet Loop Pattern]']}
                position={[36.89, 22.323, 30]}
                scale={31.181}
              />
            </group>
            <group position={[263.911, 650.071, 15.748]}>
              <mesh
                name="3DGeom-147_33"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-147_33'].geometry}
                material={materials['[Wood Bamboo]']}
                position={[36.89, 22.323, 15]}
                scale={31.181}
              />
              <mesh
                name="3DGeom-148_33"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-148_33'].geometry}
                material={materials['[Carpet Loop Pattern]']}
                position={[36.89, 22.323, 30]}
                scale={31.181}
              />
            </group>
            <group position={[370.724, 644.046, 15.748]}>
              <mesh
                name="3DGeom-147_34"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-147_34'].geometry}
                material={materials['[Wood Bamboo]']}
                position={[36.89, 22.323, 15]}
                scale={31.181}
              />
              <mesh
                name="3DGeom-148_34"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-148_34'].geometry}
                material={materials['[Carpet Loop Pattern]']}
                position={[36.89, 22.323, 30]}
                scale={31.181}
              />
            </group>
            <group position={[364.137, 791.227, 15.748]} rotation={[0, 0, -Math.PI / 2]}>
              <mesh
                name="3DGeom-147_35"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-147_35'].geometry}
                material={materials['[Wood Bamboo]']}
                position={[36.89, 22.323, 15]}
                scale={31.181}
              />
              <mesh
                name="3DGeom-148_35"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-148_35'].geometry}
                material={materials['[Carpet Loop Pattern]']}
                position={[36.89, 22.323, 30]}
                scale={31.181}
              />
            </group>
            <group position={[890.79, 685.894, 15.748]} rotation={[0, 0, Math.PI / 2]}>
              <mesh
                name="3DGeom-147_36"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-147_36'].geometry}
                material={materials['[Wood Bamboo]']}
                position={[36.89, 22.323, 15]}
                scale={31.181}
              />
              <mesh
                name="3DGeom-148_36"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-148_36'].geometry}
                material={materials['[Carpet Loop Pattern]']}
                position={[36.89, 22.323, 30]}
                scale={31.181}
              />
            </group>
            <group position={[890.79, 856.327, 15.748]} rotation={[0, 0, Math.PI / 2]}>
              <mesh
                name="3DGeom-147_37"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-147_37'].geometry}
                material={materials['[Wood Bamboo]']}
                position={[36.89, 22.323, 15]}
                scale={31.181}
              />
              <mesh
                name="3DGeom-148_37"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-148_37'].geometry}
                material={materials['[Carpet Loop Pattern]']}
                position={[36.89, 22.323, 30]}
                scale={31.181}
              />
            </group>
            <group position={[905.357, 1265.815, 15.748]} rotation={[0, 0, Math.PI]}>
              <mesh
                name="3DGeom-147_38"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-147_38'].geometry}
                material={materials['[Wood Bamboo]']}
                position={[36.89, 22.323, 15]}
                scale={31.181}
              />
              <mesh
                name="3DGeom-148_38"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-148_38'].geometry}
                material={materials['[Carpet Loop Pattern]']}
                position={[36.89, 22.323, 30]}
                scale={31.181}
              />
            </group>
            <group position={[890.79, 1017.941, 15.748]} rotation={[0, 0, Math.PI / 2]}>
              <mesh
                name="3DGeom-147_39"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-147_39'].geometry}
                material={materials['[Wood Bamboo]']}
                position={[36.89, 22.323, 15]}
                scale={31.181}
              />
              <mesh
                name="3DGeom-148_39"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-148_39'].geometry}
                material={materials['[Carpet Loop Pattern]']}
                position={[36.89, 22.323, 30]}
                scale={31.181}
              />
            </group>
            <group position={[804.968, 1000.386, 15.748]} rotation={[0, 0, Math.PI / 2]}>
              <mesh
                name="3DGeom-147_40"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-147_40'].geometry}
                material={materials['[Wood Bamboo]']}
                position={[36.89, 22.323, 15]}
                scale={31.181}
              />
              <mesh
                name="3DGeom-148_40"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-148_40'].geometry}
                material={materials['[Carpet Loop Pattern]']}
                position={[36.89, 22.323, 30]}
                scale={31.181}
              />
            </group>
            <group position={[778.875, 1201.575, 15.748]} rotation={[0, 0, Math.PI / 2]}>
              <mesh
                name="3DGeom-147_41"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-147_41'].geometry}
                material={materials['[Wood Bamboo]']}
                position={[36.89, 22.323, 15]}
                scale={31.181}
              />
              <mesh
                name="3DGeom-148_41"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-148_41'].geometry}
                material={materials['[Carpet Loop Pattern]']}
                position={[36.89, 22.323, 30]}
                scale={31.181}
              />
            </group>
            <group position={[901.074, 1361.143, 15.748]} rotation={[0, 0, Math.PI / 2]}>
              <mesh
                name="3DGeom-147_42"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-147_42'].geometry}
                material={materials['[Wood Bamboo]']}
                position={[36.89, 22.323, 15]}
                scale={31.181}
              />
              <mesh
                name="3DGeom-148_42"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-148_42'].geometry}
                material={materials['[Carpet Loop Pattern]']}
                position={[36.89, 22.323, 30]}
                scale={31.181}
              />
            </group>
            <group position={[724.71, 1346.953, 15.748]}>
              <mesh
                name="3DGeom-147_43"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-147_43'].geometry}
                material={materials['[Wood Bamboo]']}
                position={[36.89, 22.323, 15]}
                scale={31.181}
              />
              <mesh
                name="3DGeom-148_43"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-148_43'].geometry}
                material={materials['[Carpet Loop Pattern]']}
                position={[36.89, 22.323, 30]}
                scale={31.181}
              />
            </group>
            <group position={[883.492, 1540.382, 15.748]} rotation={[0, 0, Math.PI / 2]}>
              <mesh
                name="3DGeom-147_44"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-147_44'].geometry}
                material={materials['[Wood Bamboo]']}
                position={[36.89, 22.323, 15]}
                scale={31.181}
              />
              <mesh
                name="3DGeom-148_44"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-148_44'].geometry}
                material={materials['[Carpet Loop Pattern]']}
                position={[36.89, 22.323, 30]}
                scale={31.181}
              />
            </group>
            <group position={[899.298, 1712.835, 15.748]} rotation={[0, 0, Math.PI / 2]}>
              <mesh
                name="3DGeom-147_45"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-147_45'].geometry}
                material={materials['[Wood Bamboo]']}
                position={[36.89, 22.323, 15]}
                scale={31.181}
              />
              <mesh
                name="3DGeom-148_45"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-148_45'].geometry}
                material={materials['[Carpet Loop Pattern]']}
                position={[36.89, 22.323, 30]}
                scale={31.181}
              />
            </group>
            <group position={[883.275, 1832.873, 15.748]} rotation={[0, 0, Math.PI / 2]}>
              <mesh
                name="3DGeom-147_46"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-147_46'].geometry}
                material={materials['[Wood Bamboo]']}
                position={[36.89, 22.323, 15]}
                scale={31.181}
              />
              <mesh
                name="3DGeom-148_46"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-148_46'].geometry}
                material={materials['[Carpet Loop Pattern]']}
                position={[36.89, 22.323, 30]}
                scale={31.181}
              />
            </group>
            <group position={[759.694, 1704.94, 15.748]} rotation={[0, 0, Math.PI / 2]}>
              <mesh
                name="3DGeom-147_47"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-147_47'].geometry}
                material={materials['[Wood Bamboo]']}
                position={[36.89, 22.323, 15]}
                scale={31.181}
              />
              <mesh
                name="3DGeom-148_47"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-148_47'].geometry}
                material={materials['[Carpet Loop Pattern]']}
                position={[36.89, 22.323, 30]}
                scale={31.181}
              />
            </group>
            <group position={[729.875, 1560.063, 15.748]} rotation={[0, 0, Math.PI / 2]}>
              <mesh
                name="3DGeom-147_48"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-147_48'].geometry}
                material={materials['[Wood Bamboo]']}
                position={[36.89, 22.323, 15]}
                scale={31.181}
              />
              <mesh
                name="3DGeom-148_48"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-148_48'].geometry}
                material={materials['[Carpet Loop Pattern]']}
                position={[36.89, 22.323, 30]}
                scale={31.181}
              />
            </group>
            <group position={[253.842, 1370.04, 15.748]}>
              <mesh
                name="3DGeom-147_49"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-147_49'].geometry}
                material={materials['[Wood Bamboo]']}
                position={[36.89, 22.323, 15]}
                scale={31.181}
              />
              <mesh
                name="3DGeom-148_49"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-148_49'].geometry}
                material={materials['[Carpet Loop Pattern]']}
                position={[36.89, 22.323, 30]}
                scale={31.181}
              />
            </group>
            <group position={[189.498, 1773.069, 15.748]} rotation={[0, 0, -Math.PI / 2]}>
              <mesh
                name="3DGeom-147_50"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-147_50'].geometry}
                material={materials['[Wood Bamboo]']}
                position={[36.89, 22.323, 15]}
                scale={31.181}
              />
              <mesh
                name="3DGeom-148_50"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-148_50'].geometry}
                material={materials['[Carpet Loop Pattern]']}
                position={[36.89, 22.323, 30]}
                scale={31.181}
              />
            </group>
            <group position={[284.341, 1773.069, 15.748]} rotation={[0, 0, -Math.PI / 2]}>
              <mesh
                name="3DGeom-147_51"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-147_51'].geometry}
                material={materials['[Wood Bamboo]']}
                position={[36.89, 22.323, 15]}
                scale={31.181}
              />
              <mesh
                name="3DGeom-148_51"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-148_51'].geometry}
                material={materials['[Carpet Loop Pattern]']}
                position={[36.89, 22.323, 30]}
                scale={31.181}
              />
            </group>
            <group position={[191.237, 1921.34, 15.748]} rotation={[0, 0, -Math.PI / 2]}>
              <mesh
                name="3DGeom-147_52"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-147_52'].geometry}
                material={materials['[Wood Bamboo]']}
                position={[36.89, 22.323, 15]}
                scale={31.181}
              />
              <mesh
                name="3DGeom-148_52"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-148_52'].geometry}
                material={materials['[Carpet Loop Pattern]']}
                position={[36.89, 22.323, 30]}
                scale={31.181}
              />
            </group>
            <group position={[273.56, 1921.34, 15.748]} rotation={[0, 0, -Math.PI / 2]}>
              <mesh
                name="3DGeom-147_53"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-147_53'].geometry}
                material={materials['[Wood Bamboo]']}
                position={[36.89, 22.323, 15]}
                scale={31.181}
              />
              <mesh
                name="3DGeom-148_53"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-148_53'].geometry}
                material={materials['[Carpet Loop Pattern]']}
                position={[36.89, 22.323, 30]}
                scale={31.181}
              />
            </group>
            <group name="Rail_TC" position={[394.555, 986.339, 15.748]}>
              <mesh
                name="3DGeom-553"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-553'].geometry}
                material={materials['[Color M00]']}
                position={[1.575, 85.846, 18.484]}
                scale={85.846}
              />
              <mesh
                name="3DGeom-554"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-554'].geometry}
                material={materials['[Translucent Glass Gray]6']}
                position={[1.575, 85.846, 21.929]}
                scale={83.878}
              />
              <mesh
                name="3DGeom-555"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-555'].geometry}
                material={materials['[0049_Beige]']}
                position={[1.575, 85.846, 16.063]}
                scale={85.453}
              />
            </group>
          </group>
                )}
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/glb/adminnew.glb')
