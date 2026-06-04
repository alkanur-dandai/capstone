

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

type Props = {
  selected?: boolean
  onSelect?: (id: string) => void
  onClick?: () => void
  visibleFloors?: string[]
}


export function SHSBUILDING({ visibleFloors = ["1ST", "2ND", "roof"], selected, onSelect, onClick, ...props }: Props) {
  const { nodes, materials } = useGLTF('/SHS-building.glb') as any
  return (
    <group  {...props}
     {...props}
      onClick={(e) => {
        e.stopPropagation()
        onClick?.()
      }}
     dispose={null} position={[-46,0,-92 ]} rotation={[0,-Math.PI / 8, 0, ]} scale={[1.5, 1, 1.5]} >

      <group>
        <group rotation={[-Math.PI / 2, 0, 0]}>
          <group name="Assembly-99" scale={0.001}>
            <group
              name="Active_View"
              position={[26439.949, -43044.16, 24598.607]}
              rotation={[1.161, 0.31, 0.132]}
              scale={1000}
            />

             {visibleFloors.includes('2ND') && (
            <group name="SHS-2ndfloor" position={[0, 0, 3653]} scale={25.4}>
              <mesh
                name="3DGeom-1"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-1'].geometry}
                material={materials['[0049_Beige]']}
              />
              <group position={[25.591, 1127.953, 87.913]} rotation={[Math.PI / 2, Math.PI / 2, 0]}>
                <mesh
                  name="3DGeom-2"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-2'].geometry}
                  material={materials['[0018_Brown]1']}
                />
                <mesh
                  name="3DGeom-3"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-3'].geometry}
                  material={materials['[Translucent Glass Gray]']}
                />
              </group>
              <group position={[14.052, 1066.924, 47.795]} scale={[1, 1.089, 0.672]}>
                <mesh
                  name="3DGeom-4"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-4'].geometry}
                  material={materials['[0018_Brown]1']}
                />
                <mesh
                  name="3DGeom-5"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-5'].geometry}
                  material={materials['[Translucent_Glass_Gray]10']}
                />
              </group>
              <group position={[14.052, 874.01, 47.795]} scale={[1, 1.089, 0.672]}>
                <mesh
                  name="3DGeom-4_1"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-4_1'].geometry}
                  material={materials['[0018_Brown]1']}
                />
                <mesh
                  name="3DGeom-5_1"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-5_1'].geometry}
                  material={materials['[Translucent_Glass_Gray]10']}
                />
              </group>
              <group position={[14.052, 681.102, 47.795]} scale={[1, 1.089, 0.672]}>
                <mesh
                  name="3DGeom-4_2"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-4_2'].geometry}
                  material={materials['[0018_Brown]1']}
                />
                <mesh
                  name="3DGeom-5_2"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-5_2'].geometry}
                  material={materials['[Translucent_Glass_Gray]10']}
                />
              </group>
              <group position={[14.052, 488.189, 47.795]} scale={[1, 1.089, 0.672]}>
                <mesh
                  name="3DGeom-4_3"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-4_3'].geometry}
                  material={materials['[0018_Brown]1']}
                />
                <mesh
                  name="3DGeom-5_3"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-5_3'].geometry}
                  material={materials['[Translucent_Glass_Gray]10']}
                />
              </group>
              <group position={[14.052, 295.276, 47.795]} scale={[1, 1.089, 0.672]}>
                <mesh
                  name="3DGeom-4_4"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-4_4'].geometry}
                  material={materials['[0018_Brown]1']}
                />
                <mesh
                  name="3DGeom-5_4"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-5_4'].geometry}
                  material={materials['[Translucent_Glass_Gray]10']}
                />
              </group>
              <group position={[25.591, 935.039, 87.913]} rotation={[Math.PI / 2, Math.PI / 2, 0]}>
                <mesh
                  name="3DGeom-2_1"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-2_1'].geometry}
                  material={materials['[0018_Brown]1']}
                />
                <mesh
                  name="3DGeom-3_1"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-3_1'].geometry}
                  material={materials['[Translucent Glass Gray]']}
                />
              </group>
              <group position={[25.591, 742.126, 87.913]} rotation={[Math.PI / 2, Math.PI / 2, 0]}>
                <mesh
                  name="3DGeom-2_2"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-2_2'].geometry}
                  material={materials['[0018_Brown]1']}
                />
                <mesh
                  name="3DGeom-3_2"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-3_2'].geometry}
                  material={materials['[Translucent Glass Gray]']}
                />
              </group>
              <group position={[25.591, 549.213, 87.913]} rotation={[Math.PI / 2, Math.PI / 2, 0]}>
                <mesh
                  name="3DGeom-2_3"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-2_3'].geometry}
                  material={materials['[0018_Brown]1']}
                />
                <mesh
                  name="3DGeom-3_3"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-3_3'].geometry}
                  material={materials['[Translucent Glass Gray]']}
                />
              </group>
              <group position={[25.591, 356.299, 87.913]} rotation={[Math.PI / 2, Math.PI / 2, 0]}>
                <mesh
                  name="3DGeom-2_4"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-2_4'].geometry}
                  material={materials['[0018_Brown]1']}
                />
                <mesh
                  name="3DGeom-3_4"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-3_4'].geometry}
                  material={materials['[Translucent Glass Gray]']}
                />
              </group>
              <group position={[25.591, 193.287, 87.913]} rotation={[Math.PI / 2, Math.PI / 2, 0]}>
                <mesh
                  name="3DGeom-22"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-22'].geometry}
                  material={materials['[0018_Brown]1']}
                />
                <mesh
                  name="3DGeom-23"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-23'].geometry}
                  material={materials['[Translucent Glass Gray]']}
                />
              </group>
              <group position={[25.591, 114.173, 87.913]} rotation={[Math.PI / 2, Math.PI / 2, 0]}>
                <mesh
                  name="3DGeom-24"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-24'].geometry}
                  material={materials['[0018_Brown]1']}
                />
                <mesh
                  name="3DGeom-25"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-25'].geometry}
                  material={materials['[Translucent Glass Gray]']}
                />
              </group>
              <group position={[168.412, 115.787, 11.811]} rotation={[0, 0, -Math.PI]}>
                <mesh
                  name="3DGeom-26"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-26'].geometry}
                  material={materials['[0005_LightPink]']}
                />
                <group position={[-0.333, 2.896, 43.68]} scale={2.25}>
                  <group position={[1.902, -1.287, 1.042]}>
                    <mesh
                      name="3DGeom-27"
                      castShadow
                      receiveShadow
                      geometry={nodes['3DGeom-27'].geometry}
                      material={materials['[0131_Silver]']}
                    />
                  </group>
                  <group position={[-1.993, -1.287, 1.042]}>
                    <mesh
                      name="3DGeom-28"
                      castShadow
                      receiveShadow
                      geometry={nodes['3DGeom-28'].geometry}
                      material={materials['[0131_Silver]']}
                    />
                  </group>
                </group>
              </group>
              <group position={[168.412, 246.969, 11.811]} rotation={[0, 0, -Math.PI]}>
                <mesh
                  name="3DGeom-26_1"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-26_1'].geometry}
                  material={materials['[0005_LightPink]']}
                />
                <group position={[-0.333, 2.896, 43.68]} scale={2.25}>
                  <group position={[1.902, -1.287, 1.042]}>
                    <mesh
                      name="3DGeom-27_1"
                      castShadow
                      receiveShadow
                      geometry={nodes['3DGeom-27_1'].geometry}
                      material={materials['[0131_Silver]']}
                    />
                  </group>
                  <group position={[-1.993, -1.287, 1.042]}>
                    <mesh
                      name="3DGeom-28_1"
                      castShadow
                      receiveShadow
                      geometry={nodes['3DGeom-28_1'].geometry}
                      material={materials['[0131_Silver]']}
                    />
                  </group>
                </group>
              </group>
              <group position={[168.412, 308.701, 11.811]} rotation={[0, 0, -Math.PI]}>
                <mesh
                  name="3DGeom-26_2"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-26_2'].geometry}
                  material={materials['[0005_LightPink]']}
                />
                <group position={[-0.333, 2.896, 43.68]} scale={2.25}>
                  <group position={[1.902, -1.287, 1.042]}>
                    <mesh
                      name="3DGeom-27_2"
                      castShadow
                      receiveShadow
                      geometry={nodes['3DGeom-27_2'].geometry}
                      material={materials['[0131_Silver]']}
                    />
                  </group>
                  <group position={[-1.993, -1.287, 1.042]}>
                    <mesh
                      name="3DGeom-28_2"
                      castShadow
                      receiveShadow
                      geometry={nodes['3DGeom-28_2'].geometry}
                      material={materials['[0131_Silver]']}
                    />
                  </group>
                </group>
              </group>
              <group position={[168.412, 439.882, 11.811]} rotation={[0, 0, -Math.PI]}>
                <mesh
                  name="3DGeom-26_3"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-26_3'].geometry}
                  material={materials['[0005_LightPink]']}
                />
                <group position={[-0.333, 2.896, 43.68]} scale={2.25}>
                  <group position={[1.902, -1.287, 1.042]}>
                    <mesh
                      name="3DGeom-27_3"
                      castShadow
                      receiveShadow
                      geometry={nodes['3DGeom-27_3'].geometry}
                      material={materials['[0131_Silver]']}
                    />
                  </group>
                  <group position={[-1.993, -1.287, 1.042]}>
                    <mesh
                      name="3DGeom-28_3"
                      castShadow
                      receiveShadow
                      geometry={nodes['3DGeom-28_3'].geometry}
                      material={materials['[0131_Silver]']}
                    />
                  </group>
                </group>
              </group>
              <group position={[168.412, 501.614, 11.811]} rotation={[0, 0, -Math.PI]}>
                <mesh
                  name="3DGeom-26_4"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-26_4'].geometry}
                  material={materials['[0005_LightPink]']}
                />
                <group position={[-0.333, 2.896, 43.68]} scale={2.25}>
                  <group position={[1.902, -1.287, 1.042]}>
                    <mesh
                      name="3DGeom-27_4"
                      castShadow
                      receiveShadow
                      geometry={nodes['3DGeom-27_4'].geometry}
                      material={materials['[0131_Silver]']}
                    />
                  </group>
                  <group position={[-1.993, -1.287, 1.042]}>
                    <mesh
                      name="3DGeom-28_4"
                      castShadow
                      receiveShadow
                      geometry={nodes['3DGeom-28_4'].geometry}
                      material={materials['[0131_Silver]']}
                    />
                  </group>
                </group>
              </group>
              <group position={[168.412, 632.795, 11.811]} rotation={[0, 0, -Math.PI]}>
                <mesh
                  name="3DGeom-26_5"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-26_5'].geometry}
                  material={materials['[0005_LightPink]']}
                />
                <group position={[-0.333, 2.896, 43.68]} scale={2.25}>
                  <group position={[1.902, -1.287, 1.042]}>
                    <mesh
                      name="3DGeom-27_5"
                      castShadow
                      receiveShadow
                      geometry={nodes['3DGeom-27_5'].geometry}
                      material={materials['[0131_Silver]']}
                    />
                  </group>
                  <group position={[-1.993, -1.287, 1.042]}>
                    <mesh
                      name="3DGeom-28_5"
                      castShadow
                      receiveShadow
                      geometry={nodes['3DGeom-28_5'].geometry}
                      material={materials['[0131_Silver]']}
                    />
                  </group>
                </group>
              </group>
              <group position={[168.412, 694.528, 11.811]} rotation={[0, 0, -Math.PI]}>
                <mesh
                  name="3DGeom-26_6"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-26_6'].geometry}
                  material={materials['[0005_LightPink]']}
                />
                <group position={[-0.333, 2.896, 43.68]} scale={2.25}>
                  <group position={[1.902, -1.287, 1.042]}>
                    <mesh
                      name="3DGeom-27_6"
                      castShadow
                      receiveShadow
                      geometry={nodes['3DGeom-27_6'].geometry}
                      material={materials['[0131_Silver]']}
                    />
                  </group>
                  <group position={[-1.993, -1.287, 1.042]}>
                    <mesh
                      name="3DGeom-28_6"
                      castShadow
                      receiveShadow
                      geometry={nodes['3DGeom-28_6'].geometry}
                      material={materials['[0131_Silver]']}
                    />
                  </group>
                </group>
              </group>
              <group position={[168.412, 825.709, 11.811]} rotation={[0, 0, -Math.PI]}>
                <mesh
                  name="3DGeom-26_7"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-26_7'].geometry}
                  material={materials['[0005_LightPink]']}
                />
                <group position={[-0.333, 2.896, 43.68]} scale={2.25}>
                  <group position={[1.902, -1.287, 1.042]}>
                    <mesh
                      name="3DGeom-27_7"
                      castShadow
                      receiveShadow
                      geometry={nodes['3DGeom-27_7'].geometry}
                      material={materials['[0131_Silver]']}
                    />
                  </group>
                  <group position={[-1.993, -1.287, 1.042]}>
                    <mesh
                      name="3DGeom-28_7"
                      castShadow
                      receiveShadow
                      geometry={nodes['3DGeom-28_7'].geometry}
                      material={materials['[0131_Silver]']}
                    />
                  </group>
                </group>
              </group>
              <group position={[168.412, 887.441, 11.811]} rotation={[0, 0, -Math.PI]}>
                <mesh
                  name="3DGeom-26_8"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-26_8'].geometry}
                  material={materials['[0005_LightPink]']}
                />
                <group position={[-0.333, 2.896, 43.68]} scale={2.25}>
                  <group position={[1.902, -1.287, 1.042]}>
                    <mesh
                      name="3DGeom-27_8"
                      castShadow
                      receiveShadow
                      geometry={nodes['3DGeom-27_8'].geometry}
                      material={materials['[0131_Silver]']}
                    />
                  </group>
                  <group position={[-1.993, -1.287, 1.042]}>
                    <mesh
                      name="3DGeom-28_8"
                      castShadow
                      receiveShadow
                      geometry={nodes['3DGeom-28_8'].geometry}
                      material={materials['[0131_Silver]']}
                    />
                  </group>
                </group>
              </group>
              <group position={[168.412, 1018.622, 11.811]} rotation={[0, 0, -Math.PI]}>
                <mesh
                  name="3DGeom-26_9"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-26_9'].geometry}
                  material={materials['[0005_LightPink]']}
                />
                <group position={[-0.333, 2.896, 43.68]} scale={2.25}>
                  <group position={[1.902, -1.287, 1.042]}>
                    <mesh
                      name="3DGeom-27_9"
                      castShadow
                      receiveShadow
                      geometry={nodes['3DGeom-27_9'].geometry}
                      material={materials['[0131_Silver]']}
                    />
                  </group>
                  <group position={[-1.993, -1.287, 1.042]}>
                    <mesh
                      name="3DGeom-28_9"
                      castShadow
                      receiveShadow
                      geometry={nodes['3DGeom-28_9'].geometry}
                      material={materials['[0131_Silver]']}
                    />
                  </group>
                </group>
              </group>
              <group position={[168.412, 1080.354, 11.811]} rotation={[0, 0, -Math.PI]}>
                <mesh
                  name="3DGeom-26_10"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-26_10'].geometry}
                  material={materials['[0005_LightPink]']}
                />
                <group position={[-0.333, 2.896, 43.68]} scale={2.25}>
                  <group position={[1.902, -1.287, 1.042]}>
                    <mesh
                      name="3DGeom-27_10"
                      castShadow
                      receiveShadow
                      geometry={nodes['3DGeom-27_10'].geometry}
                      material={materials['[0131_Silver]']}
                    />
                  </group>
                  <group position={[-1.993, -1.287, 1.042]}>
                    <mesh
                      name="3DGeom-28_10"
                      castShadow
                      receiveShadow
                      geometry={nodes['3DGeom-28_10'].geometry}
                      material={materials['[0131_Silver]']}
                    />
                  </group>
                </group>
              </group>
              <group position={[168.412, 1211.535, 11.811]} rotation={[0, 0, -Math.PI]}>
                <mesh
                  name="3DGeom-26_11"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-26_11'].geometry}
                  material={materials['[0005_LightPink]']}
                />
                <group position={[-0.333, 2.896, 43.68]} scale={2.25}>
                  <group position={[1.902, -1.287, 1.042]}>
                    <mesh
                      name="3DGeom-27_11"
                      castShadow
                      receiveShadow
                      geometry={nodes['3DGeom-27_11'].geometry}
                      material={materials['[0131_Silver]']}
                    />
                  </group>
                  <group position={[-1.993, -1.287, 1.042]}>
                    <mesh
                      name="3DGeom-28_11"
                      castShadow
                      receiveShadow
                      geometry={nodes['3DGeom-28_11'].geometry}
                      material={materials['[0131_Silver]']}
                    />
                  </group>
                </group>
              </group>
              <group position={[267.717, 59.055, -1.201]}>
                <mesh
                  name="3DGeom-62"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-62'].geometry}
                  material={materials['[0059_DarkOliveGreen]']}
                />
              </group>
              <group position={[267.717, 253.504, -1.201]}>
                <mesh
                  name="3DGeom-62_1"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-62_1'].geometry}
                  material={materials['[0059_DarkOliveGreen]']}
                />
              </group>
              <group position={[267.717, 447.953, -1.201]}>
                <mesh
                  name="3DGeom-62_2"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-62_2'].geometry}
                  material={materials['[0059_DarkOliveGreen]']}
                />
              </group>
              <group position={[268.041, 642.402, -1.268]}>
                <mesh
                  name="3DGeom-62_3"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-62_3'].geometry}
                  material={materials['[0059_DarkOliveGreen]']}
                />
              </group>
              <group position={[268.041, 836.85, -1.268]}>
                <mesh
                  name="3DGeom-62_4"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-62_4'].geometry}
                  material={materials['[0059_DarkOliveGreen]']}
                />
              </group>
              <group position={[268.041, 1031.299, -1.268]}>
                <mesh
                  name="3DGeom-62_5"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-62_5'].geometry}
                  material={materials['[0059_DarkOliveGreen]']}
                />
              </group>
              <group position={[268.041, 1225.748, -1.268]} scale={[1, 0.585, 1]}>
                <mesh
                  name="3DGeom-62_6"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-62_6'].geometry}
                  material={materials['[0059_DarkOliveGreen]']}
                />
              </group>
              <group
                position={[63.788, 1314.861, 19.685]}
                rotation={[Math.PI / 2, -Math.PI / 2, 0]}
                scale={[0.377, 0.625, 0.377]}>
                <mesh
                  name="3DGeom-69"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-69'].geometry}
                  material={materials['*']}
                />
              </group>
            </group>
             )}
               {visibleFloors.includes('1ST') && (
            <group name="SHS-1stfloor" scale={25.4}  >
              <mesh
                name="3DGeom-70"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-70'].geometry}
                material={materials['[0049_Beige]']}
              />
              <group position={[168.838, 1175.551, 11.811]}>
                <mesh
                  name="3DGeom-71"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-71'].geometry}
                  material={materials.黑金色}
                />
                <mesh
                  name="3DGeom-72"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-72'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-73"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-73'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
              </group>
              <group position={[168.838, 982.638, 11.811]}>
                <mesh
                  name="3DGeom-71_1"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-71_1'].geometry}
                  material={materials.黑金色}
                />
                <mesh
                  name="3DGeom-72_1"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-72_1'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-73_1"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-73_1'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
              </group>
              <group position={[168.838, 789.724, 11.811]}>
                <mesh
                  name="3DGeom-71_2"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-71_2'].geometry}
                  material={materials.黑金色}
                />
                <mesh
                  name="3DGeom-72_2"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-72_2'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-73_2"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-73_2'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
              </group>
              <group position={[168.838, 596.811, 11.811]}>
                <mesh
                  name="3DGeom-71_3"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-71_3'].geometry}
                  material={materials.黑金色}
                />
                <mesh
                  name="3DGeom-72_3"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-72_3'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-73_3"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-73_3'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
              </group>
              <group position={[168.838, 403.898, 11.811]}>
                <mesh
                  name="3DGeom-71_4"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-71_4'].geometry}
                  material={materials.黑金色}
                />
                <mesh
                  name="3DGeom-72_4"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-72_4'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-73_4"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-73_4'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
              </group>
              <group position={[168.838, 210.984, 11.811]}>
                <mesh
                  name="3DGeom-71_5"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-71_5'].geometry}
                  material={materials.黑金色}
                />
                <mesh
                  name="3DGeom-72_5"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-72_5'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-73_5"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-73_5'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
              </group>
              <group position={[168.838, 79.803, 11.811]}>
                <mesh
                  name="3DGeom-89"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-89'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-90"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-90'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
                <mesh
                  name="3DGeom-91"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-91'].geometry}
                  material={materials.黑金色}
                />
              </group>
              <group position={[168.838, 1044.37, 11.811]}>
                <mesh
                  name="3DGeom-89_1"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-89_1'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-90_1"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-90_1'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
                <mesh
                  name="3DGeom-91_1"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-91_1'].geometry}
                  material={materials.黑金色}
                />
              </group>
              <group position={[168.838, 465.63, 11.811]}>
                <mesh
                  name="3DGeom-89_2"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-89_2'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-90_2"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-90_2'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
                <mesh
                  name="3DGeom-91_2"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-91_2'].geometry}
                  material={materials.黑金色}
                />
              </group>
              <group position={[168.838, 658.543, 11.811]}>
                <mesh
                  name="3DGeom-89_3"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-89_3'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-90_3"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-90_3'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
                <mesh
                  name="3DGeom-91_3"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-91_3'].geometry}
                  material={materials.黑金色}
                />
              </group>
              <group position={[168.838, 851.457, 11.811]}>
                <mesh
                  name="3DGeom-89_4"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-89_4'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-90_4"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-90_4'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
                <mesh
                  name="3DGeom-91_4"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-91_4'].geometry}
                  material={materials.黑金色}
                />
              </group>
              <group position={[168.838, 465.63, 11.811]}>
                <mesh
                  name="3DGeom-89_5"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-89_5'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-90_5"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-90_5'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
                <mesh
                  name="3DGeom-91_5"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-91_5'].geometry}
                  material={materials.黑金色}
                />
              </group>
              <group position={[168.838, 272.717, 11.811]}>
                <mesh
                  name="3DGeom-89_6"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-89_6'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-90_6"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-90_6'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
                <mesh
                  name="3DGeom-91_6"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-91_6'].geometry}
                  material={materials.黑金色}
                />
              </group>
              <group position={[23.622, 295.276, 47.795]}>
                <mesh
                  name="3DGeom-110"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-110'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-111"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-111'].geometry}
                  material={materials['WB Glazing']}
                />
                <mesh
                  name="3DGeom-112"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-112'].geometry}
                  material={materials['[Translucent Glass Gray]']}
                />
              </group>
              <group position={[23.622, 94.488, 47.795]}>
                <mesh
                  name="3DGeom-113"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-113'].geometry}
                  material={materials['WB Glazing']}
                />
                <mesh
                  name="3DGeom-114"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-114'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-115"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-115'].geometry}
                  material={materials['[Translucent Glass Gray]']}
                />
              </group>
              <group position={[23.622, 169.291, 47.795]}>
                <mesh
                  name="3DGeom-116"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-116'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-117"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-117'].geometry}
                  material={materials['[Translucent Glass Gray]']}
                />
                <mesh
                  name="3DGeom-118"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-118'].geometry}
                  material={materials['WB Glazing']}
                />
              </group>
              <group position={[23.622, 681.102, 47.795]}>
                <mesh
                  name="3DGeom-110_1"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-110_1'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-111_1"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-111_1'].geometry}
                  material={materials['WB Glazing']}
                />
                <mesh
                  name="3DGeom-112_1"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-112_1'].geometry}
                  material={materials['[Translucent Glass Gray]']}
                />
              </group>
              <group position={[23.622, 1066.929, 47.795]}>
                <mesh
                  name="3DGeom-122"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-122'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-123"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-123'].geometry}
                  material={materials['[Translucent Glass Gray]']}
                />
                <mesh
                  name="3DGeom-124"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-124'].geometry}
                  material={materials['WB Glazing']}
                />
              </group>
              <group position={[23.622, 874.016, 47.795]}>
                <mesh
                  name="3DGeom-110_2"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-110_2'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-111_2"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-111_2'].geometry}
                  material={materials['WB Glazing']}
                />
                <mesh
                  name="3DGeom-112_2"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-112_2'].geometry}
                  material={materials['[Translucent Glass Gray]']}
                />
              </group>
              <group position={[23.622, 488.189, 47.795]}>
                <mesh
                  name="3DGeom-110_3"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-110_3'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-111_3"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-111_3'].geometry}
                  material={materials['WB Glazing']}
                />
                <mesh
                  name="3DGeom-112_3"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-112_3'].geometry}
                  material={materials['[Translucent Glass Gray]']}
                />
              </group>
              <group name="stair" position={[78.74, 1232.283, 11.811]}>
                <mesh
                  name="3DGeom-131"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-131'].geometry}
                  material={materials['[Terrazzo Tile Light]']}
                />
                <group position={[47.736, 45.266, 34.577]}>
                  <mesh
                    name="3DGeom-132"
                    castShadow
                    receiveShadow
                    geometry={nodes['3DGeom-132'].geometry}
                    material={materials['[Terrazzo Tile Light]']}
                  />
                </group>
                <group position={[47.736, 38.346, 100.202]}>
                  <mesh
                    name="3DGeom-133"
                    castShadow
                    receiveShadow
                    geometry={nodes['3DGeom-133'].geometry}
                    material={materials['[Terrazzo Tile Light]']}
                  />
                </group>
                <group position={[98.863, 38.346, 155.669]}>
                  <mesh
                    name="3DGeom-134"
                    castShadow
                    receiveShadow
                    geometry={nodes['3DGeom-134'].geometry}
                    material={materials['[Terrazzo Tile Light]']}
                  />
                </group>
              </group>
              <group
                position={[63.796, 1314.861, 83.425]}
                rotation={[Math.PI / 2, -Math.PI / 2, 0]}
                scale={[0.377, 0.53, 0.377]}>
                <mesh
                  name="3DGeom-135"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-135'].geometry}
                  material={materials['*']}
                />
              </group>
            </group>
             )}
               {visibleFloors.includes('roof') && (
            <group name="SHS-roof" position={[-500, 1500, 7306]} scale={25.4}>
              <mesh
             
                name="3DGeom-136"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-136'].geometry}
                material={materials['[0059_DarkOliveGreen]']}
              />
              <mesh
                name="3DGeom-137"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-137'].geometry}
                material={materials['[0049_Beige]']}
              />
              <group position={[248.031, 1133.858, 39.37]} rotation={[0, 0.515, 0]}>
                <mesh
                  name="3DGeom-138"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-138'].geometry}
                  material={materials['[0059_DarkOliveGreen]']}
                />
              </group>
              <group position={[143.701, 1133.858, 98.425]} rotation={[0, -0.515, -Math.PI]}>
                <mesh
                  name="3DGeom-139"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-139'].geometry}
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

useGLTF.preload('/SHS-building.glb')
