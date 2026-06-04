

import React, { useMemo, useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { Mesh, MeshStandardMaterial } from 'three'

type Props = {
  selected?: boolean
  onSelect?: (id: string) => void
  onClick?: () => void
  visibleFloors?: string[]
}

export function Gym({ visibleFloors = ["1ST", "2ND", "roof"], selected, onSelect, onClick, ...props }: Props) {
  const { nodes, materials, scene} = useGLTF('/Gym.glb') as any;

// useMemo(() => {
//     // 2. Type cast the materials array so TS knows they are MeshStandardMaterials
//     Object.values(materials).forEach((mat) => {
//       const material = mat as MeshStandardMaterial
      
//       material.roughness = 0.85
//       material.metalness = 0.1
//       if (material.aoMap) material.aoMapIntensity = 1.2
//     })

//     // 3. Explicitly type 'child' as a base Three.js Object3D instance
//     scene.traverse((child: { castShadow: boolean; receiveShadow: boolean; }) => {
//       // Checking if it's a Mesh narrows down the type automatically for TypeScript
//       if (child instanceof Mesh) {
//         child.castShadow = true
//         child.receiveShadow = true
//       }
//     })
//   }, [scene, materials])

  return (
    <group {...props}
      onClick={(e) => {
        e.stopPropagation()
        onClick?.()
      }}  dispose={null} position={[182,0,-291]}  rotation={[0, -Math.PI / -1.14 , 0, ]}>
      <group>
        <group rotation={[-Math.PI / 2, 0, 0]}>
          <group name="Assembly-42" scale={0.001}>
            <group
              name="Active_View"
              position={[58627.914, 211345.359, 66102.688]}
              rotation={[-0.647, -0.517, -2.563]}
              scale={1000}
            />
              {visibleFloors.includes('roof') && (
            <group name="roof" position={[78200.68, 136535.938, 6867.657]} scale={25.4}>
              <mesh
                name="3DGeom-1"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-1'].geometry}
                material={materials['[0018_Brown]']}
              />
              <mesh
                name="3DGeom-2"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-2'].geometry}
                material={materials['[0018_Brown]']}
              />
            </group>
              )}
                {visibleFloors.includes('1ST') && (

            <group name="ground" position={[67496.438, 126964.523, 0]} scale={25.4}>
              <mesh
                name="3DGeom-3"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-3'].geometry}
                material={materials['[0055_LightGoldenrodYellow]']}
              />
              <mesh
                name="3DGeom-4"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-4'].geometry}
                material={materials['[0055_LightGoldenrodYellow]']}
              />
              <mesh
                name="3DGeom-5"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-5'].geometry}
                material={materials['[0022_Maroon]']}
              />
              <mesh
                name="3DGeom-6"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-6'].geometry}
                material={materials['[0096_SkyBlue]']}
              />
              <mesh
                name="3DGeom-7"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-7'].geometry}
                material={materials['[0021_DarkRed]']}
              />
              <mesh
                name="3DGeom-8"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-8'].geometry}
                material={materials['[White Square Tile]']}
              />
              <mesh
                name="3DGeom-9"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-9'].geometry}
                material={materials['[0023_FireBrick]1']}
              />
              <mesh
                name="3DGeom-10"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-10'].geometry}
                material={materials['*1']}
              />
              <mesh
                name="3DGeom-11"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-11'].geometry}
                material={materials['[0136_Charcoal]']}
              />
              <mesh
                name="3DGeom-12"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-12'].geometry}
                material={materials['[0046_Gold]1']}
              />
              <mesh
                name="3DGeom-13"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-13'].geometry}
                material={materials['[0012_Bisque]']}
              />
              <group position={[945.049, 1763.465, 71.791]} rotation={[-Math.PI / 2, 0, -Math.PI]}>
                <mesh
                  name="3DGeom-14"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-14'].geometry}
                  material={materials['[0055_LightGoldenrodYellow]']}
                />
              </group>
              <group position={[1157.647, 1763.465, 71.791]} rotation={[-Math.PI / 2, 0, -Math.PI]}>
                <mesh
                  name="3DGeom-14_1"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-14_1'].geometry}
                  material={materials['[0055_LightGoldenrodYellow]']}
                />
              </group>
              <group position={[1370.246, 1763.465, 71.791]} rotation={[-Math.PI / 2, 0, -Math.PI]}>
                <mesh
                  name="3DGeom-14_2"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-14_2'].geometry}
                  material={materials['[0055_LightGoldenrodYellow]']}
                />
              </group>
              <group position={[1582.844, 1763.465, 71.791]} rotation={[-Math.PI / 2, 0, -Math.PI]}>
                <mesh
                  name="3DGeom-14_3"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-14_3'].geometry}
                  material={materials['[0055_LightGoldenrodYellow]']}
                />
              </group>
              <group position={[945.049, 395.748, 71.791]} rotation={[-Math.PI / 2, 0, -Math.PI]}>
                <mesh
                  name="3DGeom-14_4"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-14_4'].geometry}
                  material={materials['[0055_LightGoldenrodYellow]']}
                />
              </group>
              <group position={[1157.647, 395.748, 71.791]} rotation={[-Math.PI / 2, 0, -Math.PI]}>
                <mesh
                  name="3DGeom-14_5"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-14_5'].geometry}
                  material={materials['[0055_LightGoldenrodYellow]']}
                />
              </group>
              <group position={[1370.246, 395.748, 71.791]} rotation={[-Math.PI / 2, 0, -Math.PI]}>
                <mesh
                  name="3DGeom-14_6"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-14_6'].geometry}
                  material={materials['[0055_LightGoldenrodYellow]']}
                />
              </group>
              <group position={[1582.844, 395.748, 71.791]} rotation={[-Math.PI / 2, 0, -Math.PI]}>
                <mesh
                  name="3DGeom-14_7"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-14_7'].geometry}
                  material={materials['[0055_LightGoldenrodYellow]']}
                />
              </group>
              <group position={[-1162.803, -3312.447, 3.248]} scale={[0.999, 1, 1]}>
                <mesh
                  name="3DGeom-22"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-22'].geometry}
                  material={materials['[0055_LightGoldenrodYellow]']}
                />
              </group>
              <group position={[-1588, -3312.447, 3.248]} scale={[0.999, 1, 1]}>
                <mesh
                  name="3DGeom-22_1"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-22_1'].geometry}
                  material={materials['[0055_LightGoldenrodYellow]']}
                />
              </group>
              <group position={[-1375.401, -3312.447, 3.248]} scale={[0.999, 1, 1]}>
                <mesh
                  name="3DGeom-22_2"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-22_2'].geometry}
                  material={materials['[0055_LightGoldenrodYellow]']}
                />
              </group>
              <group
                position={[1236.387, 388.148, 47.795]}
                rotation={[0, 0, Math.PI / 2]}
                scale={[0.8, 2.13, 0.772]}>
                <mesh
                  name="3DGeom-25"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-25'].geometry}
                  material={materials['[Color_007]3']}
                />
              </group>
              <group position={[-950.204, -4681.542, 0.098]} scale={[0.999, 1, 1]}>
                <mesh
                  name="3DGeom-22_3"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-22_3'].geometry}
                  material={materials['[0055_LightGoldenrodYellow]']}
                />
              </group>
              <group
                position={[1504.104, 1775.002, 47.795]}
                rotation={[0, 0, -Math.PI / 2]}
                scale={[0.8, 2.13, 0.772]}>
                <mesh
                  name="3DGeom-25_1"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-25_1'].geometry}
                  material={materials['[Color_007]3']}
                />
              </group>
              <group position={[-1375.401, -4681.542, 0.098]} scale={[0.999, 1, 1]}>
                <mesh
                  name="3DGeom-22_4"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-22_4'].geometry}
                  material={materials['[0055_LightGoldenrodYellow]']}
                />
              </group>
              <group position={[-525.007, -4681.542, 0.098]} scale={[0.999, 1, 1]}>
                <mesh
                  name="3DGeom-22_5"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-22_5'].geometry}
                  material={materials['[0055_LightGoldenrodYellow]']}
                />
              </group>
              <group
                position={[866.309, 1775.002, 47.795]}
                rotation={[0, 0, -Math.PI / 2]}
                scale={[0.8, 2.13, 0.772]}>
                <mesh
                  name="3DGeom-25_2"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-25_2'].geometry}
                  material={materials['[Color_007]3']}
                />
              </group>
              <group position={[-1588, -4681.542, 0.098]} scale={[0.999, 1, 1]}>
                <mesh
                  name="3DGeom-22_6"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-22_6'].geometry}
                  material={materials['[0055_LightGoldenrodYellow]']}
                />
              </group>
              <group position={[-737.606, -4681.542, 0.098]} scale={[0.999, 1, 1]}>
                <mesh
                  name="3DGeom-22_7"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-22_7'].geometry}
                  material={materials['[0055_LightGoldenrodYellow]']}
                />
              </group>
              <group position={[-525.071, -3312.447, 3.248]} scale={[0.999, 1, 1]}>
                <mesh
                  name="3DGeom-22_8"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-22_8'].geometry}
                  material={materials['[0055_LightGoldenrodYellow]']}
                />
              </group>
              <group
                position={[1291.505, 1775.002, 47.795]}
                rotation={[0, 0, -Math.PI / 2]}
                scale={[0.8, 2.13, 0.772]}>
                <mesh
                  name="3DGeom-25_3"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-25_3'].geometry}
                  material={materials['[Color_007]3']}
                />
              </group>
              <group
                position={[1661.584, 388.148, 47.795]}
                rotation={[0, 0, Math.PI / 2]}
                scale={[0.8, 2.13, 0.772]}>
                <mesh
                  name="3DGeom-25_4"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-25_4'].geometry}
                  material={materials['[Color_007]3']}
                />
              </group>
              <group position={[131.996, -3312.447, 3.248]} scale={[0.799, 1, 1]}>
                <mesh
                  name="3DGeom-22_9"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-22_9'].geometry}
                  material={materials['[0055_LightGoldenrodYellow]']}
                />
              </group>
              <group position={[-1162.803, -4681.542, 0.098]} scale={[0.999, 1, 1]}>
                <mesh
                  name="3DGeom-22_10"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-22_10'].geometry}
                  material={materials['[0055_LightGoldenrodYellow]']}
                />
              </group>
              <group
                position={[1023.789, 388.148, 47.795]}
                rotation={[0, 0, Math.PI / 2]}
                scale={[0.8, 2.13, 0.772]}>
                <mesh
                  name="3DGeom-25_5"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-25_5'].geometry}
                  material={materials['[Color_007]3']}
                />
              </group>
              <group position={[-737.606, -3312.447, 3.248]} scale={[0.999, 1, 1]}>
                <mesh
                  name="3DGeom-22_11"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-22_11'].geometry}
                  material={materials['[0055_LightGoldenrodYellow]']}
                />
              </group>
              <group
                position={[1078.907, 1775.002, 47.795]}
                rotation={[0, 0, -Math.PI / 2]}
                scale={[0.8, 2.13, 0.772]}>
                <mesh
                  name="3DGeom-25_6"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-25_6'].geometry}
                  material={materials['[Color_007]3']}
                />
              </group>
              <group position={[-950.204, -3312.447, 3.248]} scale={[0.999, 1, 1]}>
                <mesh
                  name="3DGeom-22_12"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-22_12'].geometry}
                  material={materials['[0055_LightGoldenrodYellow]']}
                />
              </group>
              <group
                position={[1448.986, 388.148, 47.795]}
                rotation={[0, 0, Math.PI / 2]}
                scale={[0.8, 2.13, 0.772]}>
                <mesh
                  name="3DGeom-25_7"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-25_7'].geometry}
                  material={materials['[Color_007]3']}
                />
              </group>
              <group position={[131.996, -4681.542, 0.098]} scale={[0.799, 1, 1]}>
                <mesh
                  name="3DGeom-22_13"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-22_13'].geometry}
                  material={materials['[0055_LightGoldenrodYellow]']}
                />
              </group>
              <group position={[770.228, 983.687, 11.811]} scale={0.91} />
              <group position={[634.025, 765.827, 315.181]} rotation={[0, 0.896, 0]}>
                <mesh
                  name="3DGeom-44"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-44'].geometry}
                  material={materials['[0021_DarkRed]']}
                />
              </group>
              <group position={[2256.073, 939.055, 99.921]} rotation={[0, 0, 0.047]}>
                <mesh
                  name="3DGeom-45"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-45'].geometry}
                  material={materials['[0021_DarkRed]']}
                />
              </group>
              <group name="fin" position={[-2657.34, -4998.604, 0]}>
                <mesh
                  name="3DGeom-46"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-46'].geometry}
                  material={materials['[0046_Gold]1']}
                />
              </group>
              <group position={[-2503.797, -4951.357, 1.496]}>
                <mesh
                  name="3DGeom-47"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-47'].geometry}
                  material={materials['[0018_Brown]']}
                />
              </group>
              <group position={[-1920.953, -5560.977, 1.496]}>
                <mesh
                  name="3DGeom-48"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-48'].geometry}
                  material={materials['[0018_Brown]']}
                />
              </group>
              <group position={[6728.54, 5853.032, 1.496]} rotation={[0, 0, -Math.PI]}>
                <mesh
                  name="3DGeom-49"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-49'].geometry}
                  material={materials['[0018_Brown]']}
                />
              </group>
              <group position={[3393.727, 5433.17, 1.496]} rotation={[0, 0, -Math.PI]}>
                <mesh
                  name="3DGeom-50"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-50'].geometry}
                  material={materials['[0018_Brown]']}
                />
              </group>
              <group
                position={[868.63, 1054.555, 11.811]}
                rotation={[0, 0, Math.PI / 2]}
                scale={0.755}>
                <mesh
                  name="3DGeom-51"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-51'].geometry}
                  material={materials['[Color_B02]']}
                />
                <mesh
                  name="3DGeom-52"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-52'].geometry}
                  material={materials['[0055_LightGoldenrodYellow]']}
                />
                <mesh
                  name="3DGeom-53"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-53'].geometry}
                  material={materials['[Color_B01]']}
                />
                <mesh
                  name="3DGeom-54"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-54'].geometry}
                  material={materials['[0096_SkyBlue]']}
                />
                <mesh
                  name="3DGeom-55"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-55'].geometry}
                  material={materials['[Color_001]1']}
                />
                <mesh
                  name="3DGeom-56"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-56'].geometry}
                  material={materials['<Gray6>']}
                />
                <mesh
                  name="3DGeom-57"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-57'].geometry}
                  material={materials['[Translucent_Glass_Blue]']}
                />
                <mesh
                  name="3DGeom-58"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-58'].geometry}
                  material={materials['[Color_008]']}
                />
                <mesh
                  name="3DGeom-59"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-59'].geometry}
                  material={materials['[Color_A01]']}
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

useGLTF.preload('/Gym.glb')
