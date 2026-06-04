

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

type Props = {
  selected?: boolean
  onSelect?: (id: string) => void
  onClick?: () => void
  visibleFloors?: string[]
}


export function Dormitel({ visibleFloors = ["1ST", "2ND", "roof"], selected, onSelect, onClick, ...props }: Props){
  const { nodes, materials } = useGLTF('/Dormitel.glb') as any
  return (
    <group {...props}
      onClick={(e) => {
        e.stopPropagation()
        onClick?.()
      }} 
      
      dispose={null} position={[-67,0,304]} rotation={[0, -Math.PI / -1.17 , 0, ]} >
      <group>
        <group rotation={[-Math.PI / 2, 0, 0]}>
          <group name="Assembly-52" scale={0.001}>
            <group
              name="Active_View"
              position={[32183.66, 4482.596, 4508.404]}
              rotation={[-1.803, 1.394, -2.913]}
              scale={1000}
            />
              {visibleFloors.includes('roof') && (

            <group name="roof" position={[-14951.62, -13757.007, 3448]} scale={25.4}>
              <mesh
                name="3DGeom-1"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-1'].geometry}
                material={materials['[0059_DarkOliveGreen]']}
              />
              <mesh
                name="3DGeom-2"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-2'].geometry}
                material={materials['[0047_Khaki]']}
              />
              <group name="m" position={[-841.142, -68.819, -135.748]}>
                <mesh
                  name="3DGeom-3"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-3'].geometry}
                  material={materials['[0059_DarkOliveGreen]']}
                />
              </group>
            </group>
              )}
               {visibleFloors.includes('1ST') && (

            <group name="Dormitel" position={[-13951.62, -15505.007, 0]} scale={25.4}>
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
                material={materials['[0018_Brown]']}
              />
              <mesh
                name="3DGeom-6"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-6'].geometry}
                material={materials.magenta}
              />
              <mesh
                name="3DGeom-7"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-7'].geometry}
                material={materials['[0043_SaddleBrown]']}
              />
              <mesh
                name="3DGeom-8"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-8'].geometry}
                material={materials['[0043_SaddleBrown]']}
              />
              <group position={[1027.559, 797.165, 51.732]} scale={[1, 1, 0.973]}>
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
                  material={materials['WB Glazing']}
                />
                <mesh
                  name="3DGeom-11"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-11'].geometry}
                  material={materials['[0134_DimGray]']}
                />
              </group>
              <group
                position={[433.071, 1112.126, 63.74]}
                rotation={[0, 0, -Math.PI]}
                scale={[1.333, 1, 1]}>
                <mesh
                  name="3DGeom-9_1"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-9_1'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-10_1"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-10_1'].geometry}
                  material={materials['WB Glazing']}
                />
                <mesh
                  name="3DGeom-11_1"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-11_1'].geometry}
                  material={materials['[0134_DimGray]']}
                />
              </group>
              <group
                position={[746.063, 1112.126, 63.74]}
                rotation={[0, 0, -Math.PI]}
                scale={[1.333, 1, 1]}>
                <mesh
                  name="3DGeom-9_2"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-9_2'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-10_2"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-10_2'].geometry}
                  material={materials['WB Glazing']}
                />
                <mesh
                  name="3DGeom-11_2"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-11_2'].geometry}
                  material={materials['[0134_DimGray]']}
                />
              </group>
              <group
                position={[1102.362, 860.157, 63.74]}
                rotation={[0, 0, Math.PI / 2]}
                scale={[1.333, 1, 1]}>
                <mesh
                  name="3DGeom-9_3"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-9_3'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-10_3"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-10_3'].geometry}
                  material={materials['WB Glazing']}
                />
                <mesh
                  name="3DGeom-11_3"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-11_3'].geometry}
                  material={materials['[0134_DimGray]']}
                />
              </group>
              <group
                position={[590.551, 1112.126, 63.74]}
                rotation={[0, 0, -Math.PI]}
                scale={[1.333, 1, 1]}>
                <mesh
                  name="3DGeom-9_4"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-9_4'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-10_4"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-10_4'].geometry}
                  material={materials['WB Glazing']}
                />
                <mesh
                  name="3DGeom-11_4"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-11_4'].geometry}
                  material={materials['[0134_DimGray]']}
                />
              </group>
              <group
                position={[279.528, 1112.126, 63.74]}
                rotation={[0, 0, -Math.PI]}
                scale={[1.333, 1, 1]}>
                <mesh
                  name="3DGeom-9_5"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-9_5'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-10_5"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-10_5'].geometry}
                  material={materials['WB Glazing']}
                />
                <mesh
                  name="3DGeom-11_5"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-11_5'].geometry}
                  material={materials['[0134_DimGray]']}
                />
              </group>
              <group position={[267.717, 482.205, 63.74]} rotation={[0, 0, -Math.PI]}>
                <mesh
                  name="3DGeom-9_6"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-9_6'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-10_6"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-10_6'].geometry}
                  material={materials['WB Glazing']}
                />
                <mesh
                  name="3DGeom-11_6"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-11_6'].geometry}
                  material={materials['[0134_DimGray]']}
                />
              </group>
              <group position={[423.228, 482.205, 63.74]} rotation={[0, 0, -Math.PI]}>
                <mesh
                  name="3DGeom-9_7"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-9_7'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-10_7"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-10_7'].geometry}
                  material={materials['WB Glazing']}
                />
                <mesh
                  name="3DGeom-11_7"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-11_7'].geometry}
                  material={materials['[0134_DimGray]']}
                />
              </group>
              <group position={[580.709, 482.205, 63.74]} rotation={[0, 0, -Math.PI]}>
                <mesh
                  name="3DGeom-9_8"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-9_8'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-10_8"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-10_8'].geometry}
                  material={materials['WB Glazing']}
                />
                <mesh
                  name="3DGeom-11_8"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-11_8'].geometry}
                  material={materials['[0134_DimGray]']}
                />
              </group>
              <group position={[736.22, 482.205, 63.74]} rotation={[0, 0, -Math.PI]}>
                <mesh
                  name="3DGeom-9_9"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-9_9'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-10_9"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-10_9'].geometry}
                  material={materials['WB Glazing']}
                />
                <mesh
                  name="3DGeom-11_9"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-11_9'].geometry}
                  material={materials['[0134_DimGray]']}
                />
              </group>
              <group position={[1053.15, 482.205, 63.74]} rotation={[0, 0, -Math.PI]}>
                <mesh
                  name="3DGeom-9_10"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-9_10'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-10_10"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-10_10'].geometry}
                  material={materials['WB Glazing']}
                />
                <mesh
                  name="3DGeom-11_10"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-11_10'].geometry}
                  material={materials['[0134_DimGray]']}
                />
              </group>
              <group position={[173.228, 108.189, 63.74]}>
                <mesh
                  name="3DGeom-9_11"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-9_11'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-10_11"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-10_11'].geometry}
                  material={materials['WB Glazing']}
                />
                <mesh
                  name="3DGeom-11_11"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-11_11'].geometry}
                  material={materials['[0134_DimGray]']}
                />
              </group>
              <group position={[401.575, 108.189, 63.74]}>
                <mesh
                  name="3DGeom-9_12"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-9_12'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-10_12"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-10_12'].geometry}
                  material={materials['WB Glazing']}
                />
                <mesh
                  name="3DGeom-11_12"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-11_12'].geometry}
                  material={materials['[0134_DimGray]']}
                />
              </group>
              <group position={[484.252, 108.189, 63.74]}>
                <mesh
                  name="3DGeom-9_13"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-9_13'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-10_13"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-10_13'].geometry}
                  material={materials['WB Glazing']}
                />
                <mesh
                  name="3DGeom-11_13"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-11_13'].geometry}
                  material={materials['[0134_DimGray]']}
                />
              </group>
              <group position={[641.732, 108.189, 63.74]}>
                <mesh
                  name="3DGeom-9_14"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-9_14'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-10_14"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-10_14'].geometry}
                  material={materials['WB Glazing']}
                />
                <mesh
                  name="3DGeom-11_14"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-11_14'].geometry}
                  material={materials['[0134_DimGray]']}
                />
              </group>
              <group position={[799.213, 108.189, 63.74]}>
                <mesh
                  name="3DGeom-9_15"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-9_15'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-10_15"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-10_15'].geometry}
                  material={materials['WB Glazing']}
                />
                <mesh
                  name="3DGeom-11_15"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-11_15'].geometry}
                  material={materials['[0134_DimGray]']}
                />
              </group>
              <group position={[1027.559, 108.189, 63.74]}>
                <mesh
                  name="3DGeom-9_16"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-9_16'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-10_16"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-10_16'].geometry}
                  material={materials['WB Glazing']}
                />
                <mesh
                  name="3DGeom-11_16"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-11_16'].geometry}
                  material={materials['[0134_DimGray]']}
                />
              </group>
              <group position={[738.543, 324.724, 15.748]}>
                <mesh
                  name="3DGeom-60"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-60'].geometry}
                  material={materials['[0043_SaddleBrown]']}
                />
              </group>
              <group position={[585, 324.724, 15.748]}>
                <mesh
                  name="3DGeom-60_1"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-60_1'].geometry}
                  material={materials['[0043_SaddleBrown]']}
                />
              </group>
              <group position={[427.52, 324.724, 15.748]}>
                <mesh
                  name="3DGeom-60_2"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-60_2'].geometry}
                  material={materials['[0043_SaddleBrown]']}
                />
              </group>
              <group position={[270.039, 324.724, 15.748]}>
                <mesh
                  name="3DGeom-60_3"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-60_3'].geometry}
                  material={materials['[0043_SaddleBrown]']}
                />
              </group>
              <group position={[270.039, 257.795, 15.748]}>
                <mesh
                  name="3DGeom-60_4"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-60_4'].geometry}
                  material={materials['[0043_SaddleBrown]']}
                />
              </group>
              <group position={[427.52, 257.795, 15.748]}>
                <mesh
                  name="3DGeom-60_5"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-60_5'].geometry}
                  material={materials['[0043_SaddleBrown]']}
                />
              </group>
              <group position={[585, 257.795, 15.748]}>
                <mesh
                  name="3DGeom-60_6"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-60_6'].geometry}
                  material={materials['[0043_SaddleBrown]']}
                />
              </group>
              <group position={[742.48, 257.795, 15.748]}>
                <mesh
                  name="3DGeom-60_7"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-60_7'].geometry}
                  material={materials['[0043_SaddleBrown]']}
                />
              </group>
              <group position={[899.961, 257.795, 15.748]}>
                <mesh
                  name="3DGeom-60_8"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-60_8'].geometry}
                  material={materials['[0043_SaddleBrown]']}
                />
              </group>
              <group position={[953.819, 257.795, 15.748]}>
                <mesh
                  name="3DGeom-60_9"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-60_9'].geometry}
                  material={materials['[0043_SaddleBrown]']}
                />
              </group>
              <group position={[957.756, 324.724, 15.748]}>
                <mesh
                  name="3DGeom-60_10"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-60_10'].geometry}
                  material={materials['[0043_SaddleBrown]']}
                />
              </group>
              <group position={[896.024, 797.165, 15.748]}>
                <mesh
                  name="3DGeom-60_11"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-60_11'].geometry}
                  material={materials['[0043_SaddleBrown]']}
                />
              </group>
              <group position={[944.882, 797.165, 15.748]}>
                <mesh
                  name="3DGeom-60_12"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-60_12'].geometry}
                  material={materials['[0043_SaddleBrown]']}
                />
              </group>
              <group position={[705.276, 801.298, 57.087]} rotation={[Math.PI / 2, 0, 0]}>
                <mesh
                  name="3DGeom-73"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-73'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-74"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-74'].geometry}
                  material={materials['[Translucent Glass Gray]']}
                />
                <mesh
                  name="3DGeom-75"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-75'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
              </group>
              <group position={[-1457.356, -227.208, 0.591]}>
                <mesh
                  name="3DGeom-76"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-76'].geometry}
                  material={materials['[Wood Floor Dark]']}
                />
              </group>
              <group position={[1102.362, 245.984, 15.748]}>
                <mesh
                  name="3DGeom-77"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-77'].geometry}
                  material={materials['[Wood Floor Dark]']}
                />
              </group>
              <group position={[148.622, 480.394, 15.748]}>
                <mesh
                  name="3DGeom-78"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-78'].geometry}
                  material={materials['[Wood Floor Dark]']}
                />
              </group>
              <group position={[1019.685, 997.953, 57.087]} rotation={[Math.PI / 2, 0, 0]}>
                <mesh
                  name="3DGeom-79"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-79'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-80"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-80'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
              </group>
              <group position={[844.488, 1108.189, 99.921]} rotation={[-Math.PI / 2, 0, -Math.PI]}>
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
                  material={materials['[0134_DimGray]']}
                />
              </group>
              <group position={[883.858, 1108.189, 99.921]} rotation={[-Math.PI / 2, 0, -Math.PI]}>
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
                  material={materials['[0134_DimGray]']}
                />
              </group>
              <group position={[285.433, 112.126, 99.921]} rotation={[Math.PI / 2, 0, 0]}>
                <mesh
                  name="3DGeom-81_2"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-81_2'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-82_2"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-82_2'].geometry}
                  material={materials['[0134_DimGray]']}
                />
              </group>
              <group position={[344.488, 112.126, 99.921]} rotation={[Math.PI / 2, 0, 0]}>
                <mesh
                  name="3DGeom-81_3"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-81_3'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-82_3"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-82_3'].geometry}
                  material={materials['[0134_DimGray]']}
                />
              </group>
              <group position={[600.394, 112.126, 99.921]} rotation={[Math.PI / 2, 0, 0]}>
                <mesh
                  name="3DGeom-81_4"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-81_4'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-82_4"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-82_4'].geometry}
                  material={materials['[0134_DimGray]']}
                />
              </group>
              <group position={[757.874, 112.126, 99.921]} rotation={[Math.PI / 2, 0, 0]}>
                <mesh
                  name="3DGeom-81_5"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-81_5'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-82_5"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-82_5'].geometry}
                  material={materials['[0134_DimGray]']}
                />
              </group>
              <group position={[915.354, 112.126, 99.921]} rotation={[Math.PI / 2, 0, 0]}>
                <mesh
                  name="3DGeom-81_6"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-81_6'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-82_6"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-82_6'].geometry}
                  material={materials['[0134_DimGray]']}
                />
              </group>
              <group position={[976.378, 112.126, 99.921]} rotation={[Math.PI / 2, 0, 0]}>
                <mesh
                  name="3DGeom-81_7"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-81_7'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-82_7"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-82_7'].geometry}
                  material={materials['[0134_DimGray]']}
                />
              </group>
              <group position={[999.37, 481.024, 15.748]}>
                <mesh
                  name="3DGeom-97"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-97'].geometry}
                  material={materials['[Wood Floor Dark]']}
                />
              </group>
              <group position={[170.354, 797.165, 15.748]}>
                <mesh
                  name="3DGeom-98"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-98'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
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
                  material={materials['[Translucent Glass Gray]']}
                />
              </group>
              <group position={[944.882, 1001.89, 15.748]}>
                <mesh
                  name="3DGeom-101"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-101'].geometry}
                  material={materials['[Wood Floor Dark]']}
                />
              </group>
              <group name="a" position={[-1244.108, -81.381, 0]}>
                <mesh
                  name="3DGeom-102"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-102'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <group position={[2243.357, 660.436, 136.732]}>
                  <mesh
                    name="3DGeom-103"
                    castShadow
                    receiveShadow
                    geometry={nodes['3DGeom-103'].geometry}
                    material={materials['[Translucent Glass Gray]']}
                  />
                </group>
              </group>
            </group>
            )}

          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/Dormitel.glb')
