

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
type Props = {
  selected?: boolean
  onSelect?: (id: string) => void
  onClick?: () => void
   visibleFloors?: string[]
}

export function CBAM({ visibleFloors = ["1ST", "2ND",  "roof"], selected, onClick, ...props }: Props) {
  const { nodes, materials } = useGLTF('/Old Registrar.glb') as any;
  return (
    <group {...props}
      onClick={(e) => {
        e.stopPropagation()
        onClick?.()
      }} dispose={null} position={[-28,-1, -46]} rotation={[0, Math.PI / -8, 0, ]} scale={[1.3,1,1.2]}>
      
      <group>
        <group rotation={[-Math.PI / 2, 0, 0]}>
          <group name="Assembly-30" scale={0.001}>
            <group
              name="Active_View"
              position={[9961.484, 43019.695, 42078.414]}
              rotation={[-0.826, 0.099, 3.05]}
              scale={1000}
            />
             {visibleFloors.includes('1ST') && (

            <group name="1st" position={[-15349.975, -9112.225, 0]} scale={25.4}>
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
                material={materials['[0018_Brown]']}
              />
              <mesh
                name="3DGeom-3"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-3'].geometry}
                material={materials.tiles}
              />
              <group position={[955.63, 354.055, 100.118]} rotation={[Math.PI / 2, Math.PI / 2, 0]}>
                <mesh
                  name="3DGeom-4"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-4'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-5"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-5'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
              </group>
              <group
                position={[907.835, 192.205, 100.118]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={[1.032, 1, 1]}>
                <mesh
                  name="3DGeom-4_1"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-4_1'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-5_1"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-5_1'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
              </group>
              <group position={[836.85, 192.205, 100.118]} rotation={[Math.PI / 2, 0, 0]}>
                <mesh
                  name="3DGeom-4_2"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-4_2'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-5_2"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-5_2'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
              </group>
              <group position={[743.15, 408.74, 11.811]}>
                <mesh
                  name="3DGeom-10"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-10'].geometry}
                  material={materials['[0043_SaddleBrown]2']}
                />
              </group>
              <group position={[485.512, 408.74, 11.811]}>
                <mesh
                  name="3DGeom-10_1"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-10_1'].geometry}
                  material={materials['[0043_SaddleBrown]2']}
                />
              </group>
              <group position={[712.165, 408.74, 100.118]} rotation={[-Math.PI / 2, 0, -Math.PI]}>
                <mesh
                  name="3DGeom-12"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-12'].geometry}
                  material={materials['[0043_SaddleBrown]1']}
                />
                <mesh
                  name="3DGeom-13"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-13'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
              </group>
              <group position={[552.48, 408.74, 100.118]} rotation={[-Math.PI / 2, 0, -Math.PI]}>
                <mesh
                  name="3DGeom-12_1"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-12_1'].geometry}
                  material={materials['[0043_SaddleBrown]1']}
                />
                <mesh
                  name="3DGeom-13_1"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-13_1'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
              </group>
              <group position={[681.831, 408.74, 70.118]} rotation={[-Math.PI / 2, 0, -Math.PI]}>
                <mesh
                  name="3DGeom-16"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-16'].geometry}
                  material={materials['[0043_SaddleBrown]1']}
                />
                <mesh
                  name="3DGeom-17"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-17'].geometry}
                  material={materials['[Translucent Glass Gray]']}
                />
              </group>
              <group position={[582.815, 408.74, 70.118]} rotation={[-Math.PI / 2, 0, -Math.PI]}>
                <mesh
                  name="3DGeom-16_1"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-16_1'].geometry}
                  material={materials['[0043_SaddleBrown]1']}
                />
                <mesh
                  name="3DGeom-17_1"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-17_1'].geometry}
                  material={materials['[Translucent Glass Gray]']}
                />
              </group>
              <group position={[712.165, 192.205, 104.252]} rotation={[Math.PI / 2, 0, 0]}>
                <mesh
                  name="3DGeom-20"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-20'].geometry}
                  material={materials['[0043_SaddleBrown]1']}
                />
                <mesh
                  name="3DGeom-21"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-21'].geometry}
                  material={materials['[Translucent Glass Gray]']}
                />
              </group>
              <group position={[712.165, 192.205, 78.386]} rotation={[Math.PI / 2, 0, 0]}>
                <mesh
                  name="3DGeom-22"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-22'].geometry}
                  material={materials['[0043_SaddleBrown]1']}
                />
                <mesh
                  name="3DGeom-23"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-23'].geometry}
                  material={materials['[0134_DimGray]']}
                />
              </group>
              <group position={[552.48, 192.205, 78.386]} rotation={[Math.PI / 2, 0, 0]}>
                <mesh
                  name="3DGeom-22_1"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-22_1'].geometry}
                  material={materials['[0043_SaddleBrown]1']}
                />
                <mesh
                  name="3DGeom-23_1"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-23_1'].geometry}
                  material={materials['[0134_DimGray]']}
                />
              </group>
              <group position={[552.48, 192.205, 104.252]} rotation={[Math.PI / 2, 0, 0]}>
                <mesh
                  name="3DGeom-20_1"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-20_1'].geometry}
                  material={materials['[0043_SaddleBrown]1']}
                />
                <mesh
                  name="3DGeom-21_1"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-21_1'].geometry}
                  material={materials['[Translucent Glass Gray]']}
                />
              </group>
              <group position={[871.85, 211.89, 11.811]} rotation={[0, 0, Math.PI / 2]}>
                <mesh
                  name="3DGeom-10_2"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-10_2'].geometry}
                  material={materials['[0043_SaddleBrown]2']}
                />
              </group>
              <group position={[788.071, 286.693, 11.811]} rotation={[0, 0, Math.PI / 2]}>
                <mesh
                  name="3DGeom-10_3"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-10_3'].geometry}
                  material={materials['[0043_SaddleBrown]2']}
                />
              </group>
              <group position={[706.147, 335.503, 11.811]} rotation={[0, 0, Math.PI / 2]}>
                <mesh
                  name="3DGeom-30"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-30'].geometry}
                  material={materials['[0039_DarkOrange]']}
                />
              </group>
              <group position={[644.608, 453.579, 11.811]} rotation={[0, 0, Math.PI / 2]}>
                <mesh
                  name="3DGeom-30_1"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-30_1'].geometry}
                  material={materials['[0039_DarkOrange]']}
                />
              </group>
              <group position={[619.753, 340.369, 11.618]} rotation={[0, 0, Math.PI / 2]}>
                <mesh
                  name="3DGeom-30_2"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-30_2'].geometry}
                  material={materials['[0039_DarkOrange]']}
                />
              </group>
              <group position={[514.151, 209.764, 11.811]}>
                <mesh
                  name="3DGeom-30_3"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-30_3'].geometry}
                  material={materials['[0039_DarkOrange]']}
                />
              </group>
              <group position={[613.482, 209.764, 11.811]}>
                <mesh
                  name="3DGeom-30_4"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-30_4'].geometry}
                  material={materials['[0039_DarkOrange]']}
                />
              </group>
              <group position={[652.639, 427.379, 11.811]}>
                <mesh
                  name="3DGeom-30_5"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-30_5'].geometry}
                  material={materials['[0039_DarkOrange]']}
                />
              </group>
              <group position={[474.803, 229.391, 11.811]}>
                <mesh
                  name="3DGeom-36"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-36'].geometry}
                  material={materials['[Wood Bamboo]']}
                />
                <mesh
                  name="3DGeom-37"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-37'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
              </group>
              <group position={[597.988, 314.783, 11.811]} rotation={[0, 0, Math.PI / 2]}>
                <mesh
                  name="3DGeom-36_1"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-36_1'].geometry}
                  material={materials['[Wood Bamboo]']}
                />
                <mesh
                  name="3DGeom-37_1"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-37_1'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
              </group>
              <group position={[690.862, 314.783, 11.811]} rotation={[0, 0, Math.PI / 2]}>
                <mesh
                  name="3DGeom-36_2"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-36_2'].geometry}
                  material={materials['[Wood Bamboo]']}
                />
                <mesh
                  name="3DGeom-37_2"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-37_2'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
              </group>
              <group position={[581.024, 229.391, 11.811]}>
                <mesh
                  name="3DGeom-36_3"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-36_3'].geometry}
                  material={materials['[Wood Bamboo]']}
                />
                <mesh
                  name="3DGeom-37_3"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-37_3'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
              </group>
            </group>
             )}
              {visibleFloors.includes('roof') && (

            <group name="roof" position={[-8200.975, -5030.224, 3348]} scale={25.4}>
              <mesh
                name="3DGeom-44"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-44'].geometry}
                material={materials['[0012_Bisque]']}
              />
              <mesh
                name="3DGeom-45"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-45'].geometry}
                material={materials['[0059_DarkOliveGreen]']}
              />
              <group position={[701.732, 370.079, 11.811]} rotation={[-0.309, 0, Math.PI / 2]}>
                <mesh
                  name="3DGeom-46"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-46'].geometry}
                  material={materials['[0059_DarkOliveGreen]']}
                />
              </group>
              <group position={[701.732, 185.039, 70.866]} rotation={[0.309, 0, -Math.PI / 2]}>
                <mesh
                  name="3DGeom-47"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-47'].geometry}
                  material={materials['[0059_DarkOliveGreen]']}
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

useGLTF.preload('/Old Registrar.glb')
