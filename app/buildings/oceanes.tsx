

 


import { useGLTF } from '@react-three/drei'
type Props = {
  selected?: boolean
  onSelect?: (id: string) => void
  onClick?: () => void
  visibleFloors?: string[]
}

export function OCeanes({ visibleFloors = ["1ST", "2ND", "roof"], selected, onSelect, onClick, ...props }: Props) {
  const { nodes, materials } = useGLTF('/OCEanes.glb') as any;
  return (
    <group  {...props}
      onClick={(e) => {
        e.stopPropagation()
        onClick?.()
      }}   dispose={null}  position={[-173,0,257]} rotation={[0, -Math.PI / 7.5, 0, ]}  >
      <group>
        <group rotation={[-Math.PI / 2, 0, 0]}>
          <group name="Assembly-47" scale={0.001}>
            <group
              name="Active_View" 
              position={[89013.078, -490.702, 49057.234]}
              rotation={[0.04, 1.119, 1.526]}
              scale={1000}
            />
            {visibleFloors.includes('1ST') && (

            <group name="Oceanes" position={[-13450.065, -13844.472, 0]} scale={25.4}>
              <mesh
                name="3DGeom-1"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-1'].geometry}
                material={materials['[0089_PaleTurquoise]']}
              />
              <mesh
                name="3DGeom-2"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-2'].geometry}
                material={materials.tiless}
              />
              <group position={[677.795, 326.421, 59.055]} rotation={[-Math.PI / 2, 0, -Math.PI]}>
                <mesh
                  name="3DGeom-3"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-3'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-4"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-4'].geometry}
                  material={materials['[Translucent Glass Gray]']}
                />
                <mesh
                  name="3DGeom-5"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-5'].geometry}
                  material={materials['[0137_Black]']}
                />
              </group>
              <group position={[616.063, 326.421, 59.055]} rotation={[-Math.PI / 2, 0, -Math.PI]}>
                <mesh
                  name="3DGeom-3_1"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-3_1'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-4_1"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-4_1'].geometry}
                  material={materials['[Translucent Glass Gray]']}
                />
                <mesh
                  name="3DGeom-5_1"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-5_1'].geometry}
                  material={materials['[0137_Black]']}
                />
              </group>
              <group position={[677.795, 918.934, 59.055]} rotation={[Math.PI / 2, 0, 0]}>
                <mesh
                  name="3DGeom-3_2"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-3_2'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-4_2"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-4_2'].geometry}
                  material={materials['[Translucent Glass Gray]']}
                />
                <mesh
                  name="3DGeom-5_2"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-5_2'].geometry}
                  material={materials['[0137_Black]']}
                />
              </group>
              <group position={[616.063, 918.934, 59.055]} rotation={[Math.PI / 2, 0, 0]}>
                <mesh
                  name="3DGeom-3_3"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-3_3'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-4_3"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-4_3'].geometry}
                  material={materials['[Translucent Glass Gray]']}
                />
                <mesh
                  name="3DGeom-5_3"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-5_3'].geometry}
                  material={materials['[0137_Black]']}
                />
              </group>
              <group position={[616.063, 422.871, 59.055]} rotation={[Math.PI / 2, 0, 0]}>
                <mesh
                  name="3DGeom-3_4"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-3_4'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-4_4"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-4_4'].geometry}
                  material={materials['[Translucent Glass Gray]']}
                />
                <mesh
                  name="3DGeom-5_4"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-5_4'].geometry}
                  material={materials['[0137_Black]']}
                />
              </group>
              <group position={[616.063, 822.484, 59.055]} rotation={[-Math.PI / 2, 0, -Math.PI]}>
                <mesh
                  name="3DGeom-3_5"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-3_5'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-4_5"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-4_5'].geometry}
                  material={materials['[Translucent Glass Gray]']}
                />
                <mesh
                  name="3DGeom-5_5"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-5_5'].geometry}
                  material={materials['[0137_Black]']}
                />
              </group>
              <group position={[962.913, 31.496, 55.118]}>
                <mesh
                  name="3DGeom-21"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-21'].geometry}
                  material={materials['WB Glazing']}
                />
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
              <group position={[962.913, 191.26, 55.118]}>
                <mesh
                  name="3DGeom-21_1"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-21_1'].geometry}
                  material={materials['WB Glazing']}
                />
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
              <group position={[830.293, 11.417, 55.118]} rotation={[0, 0, -Math.PI / 2]}>
                <mesh
                  name="3DGeom-21_2"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-21_2'].geometry}
                  material={materials['WB Glazing']}
                />
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
              <group position={[670.551, 11.417, 55.118]} rotation={[0, 0, -Math.PI / 2]}>
                <mesh
                  name="3DGeom-21_3"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-21_3'].geometry}
                  material={materials['WB Glazing']}
                />
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
              <group position={[510.787, 11.417, 55.118]} rotation={[0, 0, -Math.PI / 2]}>
                <mesh
                  name="3DGeom-21_4"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-21_4'].geometry}
                  material={materials['WB Glazing']}
                />
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
                  material={materials['[0135_DarkGray]']}
                />
              </group>
              <group position={[351.024, 11.417, 55.118]} rotation={[0, 0, -Math.PI / 2]}>
                <mesh
                  name="3DGeom-21_5"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-21_5'].geometry}
                  material={materials['WB Glazing']}
                />
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
                  material={materials['[0135_DarkGray]']}
                />
              </group>
              <group position={[191.26, 11.417, 55.118]} rotation={[0, 0, -Math.PI / 2]}>
                <mesh
                  name="3DGeom-21_6"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-21_6'].geometry}
                  material={materials['WB Glazing']}
                />
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
                  material={materials['[0135_DarkGray]']}
                />
              </group>
              <group position={[31.496, 11.417, 55.118]} rotation={[0, 0, -Math.PI / 2]}>
                <mesh
                  name="3DGeom-21_7"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-21_7'].geometry}
                  material={materials['WB Glazing']}
                />
                <mesh
                  name="3DGeom-22_7"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-22_7'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-23_7"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-23_7'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
              </group>
              <group position={[962.913, 941.575, 55.118]}>
                <mesh
                  name="3DGeom-21_8"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-21_8'].geometry}
                  material={materials['WB Glazing']}
                />
                <mesh
                  name="3DGeom-22_8"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-22_8'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-23_8"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-23_8'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
              </group>
              <group position={[962.913, 1101.339, 55.118]}>
                <mesh
                  name="3DGeom-21_9"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-21_9'].geometry}
                  material={materials['WB Glazing']}
                />
                <mesh
                  name="3DGeom-22_9"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-22_9'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-23_9"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-23_9'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
              </group>
              <group position={[942.835, 1233.937, 55.118]} rotation={[0, 0, Math.PI / 2]}>
                <mesh
                  name="3DGeom-21_10"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-21_10'].geometry}
                  material={materials['WB Glazing']}
                />
                <mesh
                  name="3DGeom-22_10"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-22_10'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-23_10"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-23_10'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
              </group>
              <group position={[783.071, 1233.937, 55.118]} rotation={[0, 0, Math.PI / 2]}>
                <mesh
                  name="3DGeom-21_11"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-21_11'].geometry}
                  material={materials['WB Glazing']}
                />
                <mesh
                  name="3DGeom-22_11"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-22_11'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-23_11"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-23_11'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
              </group>
              <group position={[623.425, 1233.937, 55.118]} rotation={[0, 0, Math.PI / 2]}>
                <mesh
                  name="3DGeom-21_12"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-21_12'].geometry}
                  material={materials['WB Glazing']}
                />
                <mesh
                  name="3DGeom-22_12"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-22_12'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-23_12"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-23_12'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
              </group>
              <group position={[463.543, 1233.937, 55.118]} rotation={[0, 0, Math.PI / 2]}>
                <mesh
                  name="3DGeom-21_13"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-21_13'].geometry}
                  material={materials['WB Glazing']}
                />
                <mesh
                  name="3DGeom-22_13"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-22_13'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-23_13"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-23_13'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
              </group>
              <group position={[303.78, 1233.937, 55.118]} rotation={[0, 0, Math.PI / 2]}>
                <mesh
                  name="3DGeom-21_14"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-21_14'].geometry}
                  material={materials['WB Glazing']}
                />
                <mesh
                  name="3DGeom-22_14"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-22_14'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-23_14"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-23_14'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
              </group>
              <group position={[144.016, 1233.937, 55.118]} rotation={[0, 0, Math.PI / 2]}>
                <mesh
                  name="3DGeom-21_15"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-21_15'].geometry}
                  material={materials['WB Glazing']}
                />
                <mesh
                  name="3DGeom-22_15"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-22_15'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-23_15"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-23_15'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
              </group>
              <group
                position={[351.024, 919.528, 55.118]}
                rotation={[0, 0, -Math.PI / 2]}
                scale={[1, 1, 0.944]}>
                <mesh
                  name="3DGeom-21_16"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-21_16'].geometry}
                  material={materials['WB Glazing']}
                />
                <mesh
                  name="3DGeom-22_16"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-22_16'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-23_16"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-23_16'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
              </group>
              <group position={[830.287, 921.496, 55.118]} rotation={[0, 0, -Math.PI / 2]}>
                <mesh
                  name="3DGeom-21_17"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-21_17'].geometry}
                  material={materials['WB Glazing']}
                />
                <mesh
                  name="3DGeom-22_17"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-22_17'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-23_17"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-23_17'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
              </group>
              <group position={[942.835, 323.858, 55.118]} rotation={[0, 0, Math.PI / 2]}>
                <mesh
                  name="3DGeom-21_18"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-21_18'].geometry}
                  material={materials['WB Glazing']}
                />
                <mesh
                  name="3DGeom-22_18"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-22_18'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-23_18"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-23_18'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
              </group>
              <group position={[806.693, 488.819, 85.118]} rotation={[Math.PI / 2, Math.PI / 2, 0]}>
                <mesh
                  name="3DGeom-78"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-78'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-79"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-79'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
              </group>
              <group position={[806.693, 622.677, 85.118]} rotation={[Math.PI / 2, Math.PI / 2, 0]}>
                <mesh
                  name="3DGeom-78_1"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-78_1'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-79_1"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-79_1'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
              </group>
              <group position={[806.693, 756.535, 85.118]} rotation={[Math.PI / 2, Math.PI / 2, 0]}>
                <mesh
                  name="3DGeom-78_2"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-78_2'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-79_2"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-79_2'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
              </group>
              <group position={[873.604, 75.887, 15.748]}>
                <mesh
                  name="3DGeom-84"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-84'].geometry}
                  material={materials['[Wood Bamboo]']}
                />
                <mesh
                  name="3DGeom-85"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-85'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
              </group>
              <group position={[678.25, 75.887, 15.748]}>
                <mesh
                  name="3DGeom-84_1"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-84_1'].geometry}
                  material={materials['[Wood Bamboo]']}
                />
                <mesh
                  name="3DGeom-85_1"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-85_1'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
              </group>
              <group position={[916.086, 215.209, 15.748]} rotation={[0, 0, Math.PI / 2]}>
                <mesh
                  name="3DGeom-84_2"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-84_2'].geometry}
                  material={materials['[Wood Bamboo]']}
                />
                <mesh
                  name="3DGeom-85_2"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-85_2'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
              </group>
              <group position={[927.377, 1170.168, 15.748]} rotation={[0, 0, -Math.PI]}>
                <mesh
                  name="3DGeom-84_3"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-84_3'].geometry}
                  material={materials['[Wood Bamboo]']}
                />
                <mesh
                  name="3DGeom-85_3"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-85_3'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
              </group>
              <group position={[744.905, 1183.955, 15.748]} rotation={[0, 0, -Math.PI]}>
                <mesh
                  name="3DGeom-84_4"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-84_4'].geometry}
                  material={materials['[Wood Bamboo]']}
                />
                <mesh
                  name="3DGeom-85_4"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-85_4'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
              </group>
              <group position={[912.669, 953.809, 15.748]} rotation={[0, 0, Math.PI / 2]}>
                <mesh
                  name="3DGeom-84_5"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-84_5'].geometry}
                  material={materials['[Wood Bamboo]']}
                />
                <mesh
                  name="3DGeom-85_5"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-85_5'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
              </group>
              <group
                position={[463.543, 325.827, 55.118]}
                rotation={[0, 0, Math.PI / 2]}
                scale={[1, 1, 0.935]}>
                <mesh
                  name="3DGeom-21_19"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-21_19'].geometry}
                  material={materials['WB Glazing']}
                />
                <mesh
                  name="3DGeom-22_19"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-22_19'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-23_19"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-23_19'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
              </group>
              <group
                position={[191.26, 919.528, 55.118]}
                rotation={[0, 0, -Math.PI / 2]}
                scale={[1, 1, 0.944]}>
                <mesh
                  name="3DGeom-21_20"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-21_20'].geometry}
                  material={materials['WB Glazing']}
                />
                <mesh
                  name="3DGeom-22_20"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-22_20'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-23_20"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-23_20'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
              </group>
              <group
                position={[303.78, 325.827, 55.118]}
                rotation={[0, 0, Math.PI / 2]}
                scale={[1, 1, 0.935]}>
                <mesh
                  name="3DGeom-21_21"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-21_21'].geometry}
                  material={materials['WB Glazing']}
                />
                <mesh
                  name="3DGeom-22_21"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-22_21'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-23_21"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-23_21'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
              </group>
              <group position={[710.429, 1176.475, 15.748]} scale={0.1}>
                <mesh
                  name="3DGeom-105"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-105'].geometry}
                  material={materials['[0045_Goldenrod]']}
                />
              </group>
              <group position={[730.683, 75.707, 15.748]} rotation={[0, 0, Math.PI]} scale={0.1}>
                <mesh
                  name="3DGeom-105_1"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-105_1'].geometry}
                  material={materials['[0045_Goldenrod]']}
                />
              </group>
              <group
                position={[919.45, 258.945, 15.748]}
                rotation={[0, 0, -Math.PI / 2]}
                scale={0.1}>
                <mesh
                  name="3DGeom-105_2"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-105_2'].geometry}
                  material={materials['[0045_Goldenrod]']}
                />
              </group>
              <group position={[883.957, 1177.296, 15.748]} scale={0.1}>
                <mesh
                  name="3DGeom-105_3"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-105_3'].geometry}
                  material={materials['[0045_Goldenrod]']}
                />
              </group>
              <group
                position={[919.45, 999.221, 15.748]}
                rotation={[0, 0, -Math.PI / 2]}
                scale={0.1}>
                <mesh
                  name="3DGeom-105_4"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-105_4'].geometry}
                  material={materials['[0045_Goldenrod]']}
                />
              </group>
              <group position={[909.958, 61.631, 15.748]} rotation={[0, 0, Math.PI]} scale={0.1}>
                <mesh
                  name="3DGeom-105_5"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-105_5'].geometry}
                  material={materials['[0045_Goldenrod]']}
                />
              </group>
            </group>
            )} 
            {visibleFloors.includes('roof') && (

            <group name="roof" position={[-14450.065, -14844.472, 4058]} scale={25.4}>
              <mesh
                name="3DGeom-111"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-111'].geometry}
                material={materials['[0129_WhiteSmoke]']}
              />
              <mesh
                name="3DGeom-112"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-112'].geometry}
                material={materials['[0073_MediumSeaGreen]']}
              />
              <group position={[-1.17, -0.829, 11.811]}>
                <mesh
                  name="3DGeom-113"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-113'].geometry}
                  material={materials['[0073_MediumSeaGreen]']}
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

useGLTF.preload('/OCEanes.glb')
