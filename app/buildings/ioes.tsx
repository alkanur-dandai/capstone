"use client"

import { Edges, useGLTF } from "@react-three/drei"
import { useEffect, useRef } from "react"

import * as THREE from 'three'

type Props = {
  selected?: boolean
  onSelect?: (id: string) => void
  onClick?: () => void
  visibleFloors?: string[]
}

export function IOES({  visibleFloors = ["1ST", "2ND", "roof"], selected, onSelect, onClick, ...props }: Props) {
  const { nodes, materials } = useGLTF("/IOES.glb") as any;

  const floorRef = useRef<THREE.Group>(null!)

useEffect(() => {
  floorRef.current.traverse((child: any) => {
    if (child.isMesh) {
      const edges = new THREE.EdgesGeometry(child.geometry, 15)

      const line = new THREE.LineSegments(
        edges,
        new THREE.LineBasicMaterial({
          color: 'black',

        })
      )

      child.add(line)
    }
  })
}, [])

  

  return (
    <group
  
      {...props}
      onClick={(e) => {
        e.stopPropagation()
        onSelect?.("IOES")
        onClick?.()
      }}
      dispose={null}
      position={[-119, 0, 30]}
      rotation={[0, -Math.PI / 8, 0]} >



      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group name="Assembly-92" scale={0.001}>
          <group position={[-7024.339, 2993.901, -53.009]} rotation={[0, 0, -0.002]} scale={25.4}>
            <mesh
              name="3DGeom-2"
              castShadow
              receiveShadow
              geometry={nodes['3DGeom-2'].geometry}
              material={materials['[Granite Light Gray]']}   
                    
            />
            
            <mesh
              name="3DGeom-3"
              castShadow
              receiveShadow
              geometry={nodes['3DGeom-3'].geometry}
              material={materials['[Stone Brushed Khaki]']}
            />
            <group name="Rail_TB" position={[876.201, 1614.738, 20.906]}>
              <mesh
                name="3DGeom-4"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-4'].geometry}
                material={materials.White}
              />
              <mesh
                name="3DGeom-5"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-5'].geometry}
                material={materials['[Wood Veneer 02]']}
              />
            </group>
          </group>
          <group position={[41554.887, 13836.378, 0]} rotation={[0, 0, -Math.PI]} scale={25.4}>
            <mesh
              name="3DGeom-6"
              castShadow
              receiveShadow
              geometry={nodes['3DGeom-6'].geometry}
              material={materials['[Granite Light Gray]']}
            />
            <mesh
              name="3DGeom-7"
              castShadow
              receiveShadow
              geometry={nodes['3DGeom-7'].geometry}
              material={materials['[Stone Brushed Khaki]']}
            />
            <group name="Rail_TB_1" position={[1016.66, 181.011, 18.819]}>
              <mesh
                name="3DGeom-8"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-8'].geometry}
                material={materials.White}
              />
              <mesh
                name="3DGeom-9"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-9'].geometry}
                material={materials['[Wood Veneer 02]']}
              />
            </group>
          </group>
          {visibleFloors.includes('1ST') && (
          <group  ref={floorRef} name="1st-Floor" position={[7130.714, 4947.189, 0]} scale={25.4} >
            <mesh
              name="3DGeom-11"
              castShadow
              receiveShadow
              geometry={nodes['3DGeom-11'].geometry}
              material={materials.bbb}
            />
            
            <mesh
              name="3DGeom-12"
              castShadow
              receiveShadow
              geometry={nodes['3DGeom-12'].geometry}
              material={materials['*42']}
            />
            <mesh
              name="3DGeom-13"
              castShadow
              receiveShadow
              geometry={nodes['3DGeom-13'].geometry}
              material={materials['[Terrazzo Tile Light]']}
            />
            <mesh
              name="3DGeom-14"
              castShadow
              receiveShadow
              geometry={nodes['3DGeom-14'].geometry}
              material={materials['[Quartz Light Grey]']}
            />
            <mesh
              name="3DGeom-15"
              castShadow
              receiveShadow
              geometry={nodes['3DGeom-15'].geometry}
              material={materials['*46']}>

                
              </mesh>
            
            <mesh
              name="3DGeom-16"
              castShadow
              receiveShadow
              geometry={nodes['3DGeom-16'].geometry}
              material={materials['[Formica Graystone]']}
            />
            <group position={[225.392, 1642.717, 93.819]} rotation={[0, 0, -Math.PI / 2]}>
              <mesh
                name="3DGeom-17"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-17'].geometry}
                material={materials['[0136_Charcoal]']}
              />
              <mesh
                name="3DGeom-18"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-18'].geometry}
                material={materials['[0133_Gray]']}
              />
              <mesh
                name="3DGeom-19"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-19'].geometry}
                material={materials['[0132_LightGray]']}
              />
            </group>
            <group position={[199.801, 1642.717, 93.819]} rotation={[0, 0, -Math.PI / 2]}>
              <mesh
                name="3DGeom-17_1"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-17_1'].geometry}
                material={materials['[0136_Charcoal]']}
              />
              <mesh
                name="3DGeom-18_1"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-18_1'].geometry}
                material={materials['[0133_Gray]']}
              />
              <mesh
                name="3DGeom-19_1"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-19_1'].geometry}
                material={materials['[0132_LightGray]']}
              />
            </group>
            <group position={[174.211, 1642.717, 93.819]} rotation={[0, 0, -Math.PI / 2]}>
              <mesh
                name="3DGeom-17_2"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-17_2'].geometry}
                material={materials['[0136_Charcoal]']}
              />
              <mesh
                name="3DGeom-18_2"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-18_2'].geometry}
                material={materials['[0133_Gray]']}
              />
              <mesh
                name="3DGeom-19_2"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-19_2'].geometry}
                material={materials['[0132_LightGray]']}
              />
            </group>
            <group position={[87.598, 1642.717, 93.819]} rotation={[0, 0, -Math.PI / 2]}>
              <mesh
                name="3DGeom-17_3"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-17_3'].geometry}
                material={materials['[0136_Charcoal]']}
              />
              <mesh
                name="3DGeom-18_3"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-18_3'].geometry}
                material={materials['[0133_Gray]']}
              />
              <mesh
                name="3DGeom-19_3"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-19_3'].geometry}
                material={materials['[0132_LightGray]']}
              />
            </group>
            <group position={[62.008, 1642.717, 93.819]} rotation={[0, 0, -Math.PI / 2]}>
              <mesh
                name="3DGeom-17_4"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-17_4'].geometry}
                material={materials['[0136_Charcoal]']}
              />
              <mesh
                name="3DGeom-18_4"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-18_4'].geometry}
                material={materials['[0133_Gray]']}
              />
              <mesh
                name="3DGeom-19_4"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-19_4'].geometry}
                material={materials['[0132_LightGray]']}
              />
            </group>
            <group position={[36.417, 1642.717, 93.819]} rotation={[0, 0, -Math.PI / 2]}>
              <mesh
                name="3DGeom-17_5"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-17_5'].geometry}
                material={materials['[0136_Charcoal]']}
              />
              <mesh
                name="3DGeom-18_5"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-18_5'].geometry}
                material={materials['[0133_Gray]']}
              />
              <mesh
                name="3DGeom-19_5"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-19_5'].geometry}
                material={materials['[0132_LightGray]']}
              />
            </group>
            <group position={[2.953, 1548.228, 93.819]}>
              <mesh
                name="3DGeom-17_6"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-17_6'].geometry}
                material={materials['[0136_Charcoal]']}
              />
              <mesh
                name="3DGeom-18_6"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-18_6'].geometry}
                material={materials['[0133_Gray]']}
              />
              <mesh
                name="3DGeom-19_6"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-19_6'].geometry}
                material={materials['[0132_LightGray]']}
              />
            </group>
            <group position={[2.953, 130.906, 93.819]}>
              <mesh
                name="3DGeom-17_7"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-17_7'].geometry}
                material={materials['[0136_Charcoal]']}
              />
              <mesh
                name="3DGeom-18_7"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-18_7'].geometry}
                material={materials['[0133_Gray]']}
              />
              <mesh
                name="3DGeom-19_7"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-19_7'].geometry}
                material={materials['[0132_LightGray]']}
              />
            </group>
            <group position={[62.008, 62.008, 93.819]} rotation={[0, 0, Math.PI / 2]}>
              <mesh
                name="3DGeom-17_8"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-17_8'].geometry}
                material={materials['[0136_Charcoal]']}
              />
              <mesh
                name="3DGeom-18_8"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-18_8'].geometry}
                material={materials['[0133_Gray]']}
              />
              <mesh
                name="3DGeom-19_8"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-19_8'].geometry}
                material={materials['[0132_LightGray]']}
              />
            </group>
            <group position={[87.598, 62.008, 93.819]} rotation={[0, 0, Math.PI / 2]}>
              <mesh
                name="3DGeom-17_9"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-17_9'].geometry}
                material={materials['[0136_Charcoal]']}
              />
              <mesh
                name="3DGeom-18_9"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-18_9'].geometry}
                material={materials['[0133_Gray]']}
              />
              <mesh
                name="3DGeom-19_9"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-19_9'].geometry}
                material={materials['[0132_LightGray]']}
              />
            </group>
            <group position={[113.189, 62.008, 93.819]} rotation={[0, 0, Math.PI / 2]}>
              <mesh
                name="3DGeom-17_10"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-17_10'].geometry}
                material={materials['[0136_Charcoal]']}
              />
              <mesh
                name="3DGeom-18_10"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-18_10'].geometry}
                material={materials['[0133_Gray]']}
              />
              <mesh
                name="3DGeom-19_10"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-19_10'].geometry}
                material={materials['[0132_LightGray]']}
              />
            </group>
            <group position={[225.394, 62.008, 93.819]} rotation={[0, 0, Math.PI / 2]}>
              <mesh
                name="3DGeom-17_11"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-17_11'].geometry}
                material={materials['[0136_Charcoal]']}
              />
              <mesh
                name="3DGeom-18_11"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-18_11'].geometry}
                material={materials['[0133_Gray]']}
              />
              <mesh
                name="3DGeom-19_11"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-19_11'].geometry}
                material={materials['[0132_LightGray]']}
              />
            </group>
            <group position={[250.984, 62.008, 93.819]} rotation={[0, 0, Math.PI / 2]}>
              <mesh
                name="3DGeom-17_12"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-17_12'].geometry}
                material={materials['[0136_Charcoal]']}
              />
              <mesh
                name="3DGeom-18_12"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-18_12'].geometry}
                material={materials['[0133_Gray]']}
              />
              <mesh
                name="3DGeom-19_12"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-19_12'].geometry}
                material={materials['[0132_LightGray]']}
              />
            </group>
            <group position={[199.803, 62.008, 93.819]} rotation={[0, 0, Math.PI / 2]}>
              <mesh
                name="3DGeom-17_13"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-17_13'].geometry}
                material={materials['[0136_Charcoal]']}
              />
              <mesh
                name="3DGeom-18_13"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-18_13'].geometry}
                material={materials['[0133_Gray]']}
              />
              <mesh
                name="3DGeom-19_13"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-19_13'].geometry}
                material={materials['[0132_LightGray]']}
              />
            </group>
            <group position={[284.449, 485.512, 80.591]} rotation={[0, 0, Math.PI]}>
              <mesh
                name="3DGeom-59"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-59'].geometry}
                material={materials['WB Glazing']}
              />
              <mesh
                name="3DGeom-60"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-60'].geometry}
                material={materials['[0136_Charcoal]']}
              />
              <mesh
                name="3DGeom-61"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-61'].geometry}
                material={materials['[0137_Black]']}
              />
              <mesh
                name="3DGeom-62"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-62'].geometry}
                material={materials['[Translucent Glass Gray]1']}
              />
            </group>
            <group position={[284.449, 800.472, 80.591]} rotation={[0, 0, Math.PI]}>
              <mesh
                name="3DGeom-59_1"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-59_1'].geometry}
                material={materials['WB Glazing']}
              />
              <mesh
                name="3DGeom-60_1"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-60_1'].geometry}
                material={materials['[0136_Charcoal]']}
              />
              <mesh
                name="3DGeom-61_1"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-61_1'].geometry}
                material={materials['[0137_Black]']}
              />
              <mesh
                name="3DGeom-62_1"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-62_1'].geometry}
                material={materials['[Translucent Glass Gray]1']}
              />
            </group>
            <group position={[284.449, 1000.315, 80.591]} rotation={[0, 0, Math.PI]}>
              <mesh
                name="3DGeom-59_2"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-59_2'].geometry}
                material={materials['WB Glazing']}
              />
              <mesh
                name="3DGeom-60_2"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-60_2'].geometry}
                material={materials['[0136_Charcoal]']}
              />
              <mesh
                name="3DGeom-61_2"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-61_2'].geometry}
                material={materials['[0137_Black]']}
              />
              <mesh
                name="3DGeom-62_2"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-62_2'].geometry}
                material={materials['[Translucent Glass Gray]1']}
              />
            </group>
            <group position={[284.449, 1315.276, 80.591]} rotation={[0, 0, Math.PI]}>
              <mesh
                name="3DGeom-59_3"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-59_3'].geometry}
                material={materials['WB Glazing']}
              />
              <mesh
                name="3DGeom-60_3"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-60_3'].geometry}
                material={materials['[0136_Charcoal]']}
              />
              <mesh
                name="3DGeom-61_3"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-61_3'].geometry}
                material={materials['[0137_Black]']}
              />
              <mesh
                name="3DGeom-62_3"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-62_3'].geometry}
                material={materials['[Translucent Glass Gray]1']}
              />
            </group>
            <group position={[4.921, 241.339, 47.795]}>
              <mesh
                name="3DGeom-75"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-75'].geometry}
                material={materials['[0136_Charcoal]']}
              />
              <mesh
                name="3DGeom-76"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-76'].geometry}
                material={materials['[Translucent Glass Gray]1']}
              />
            </group>
            <group position={[4.921, 398.819, 47.795]}>
              <mesh
                name="3DGeom-75_1"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-75_1'].geometry}
                material={materials['[0136_Charcoal]']}
              />
              <mesh
                name="3DGeom-76_1"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-76_1'].geometry}
                material={materials['[Translucent Glass Gray]1']}
              />
            </group>
            <group position={[4.921, 557.087, 47.795]}>
              <mesh
                name="3DGeom-75_2"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-75_2'].geometry}
                material={materials['[0136_Charcoal]']}
              />
              <mesh
                name="3DGeom-76_2"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-76_2'].geometry}
                material={materials['[Translucent Glass Gray]1']}
              />
            </group>
            <group position={[4.921, 714.567, 47.795]}>
              <mesh
                name="3DGeom-75_3"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-75_3'].geometry}
                material={materials['[0136_Charcoal]']}
              />
              <mesh
                name="3DGeom-76_3"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-76_3'].geometry}
                material={materials['[Translucent Glass Gray]1']}
              />
            </group>
            <group position={[4.921, 1344.488, 47.795]}>
              <mesh
                name="3DGeom-83"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-83'].geometry}
                material={materials['[Translucent Glass Gray]']}
              />
              <mesh
                name="3DGeom-84"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-84'].geometry}
                material={materials['[0136_Charcoal]']}
              />
            </group>
            <group position={[4.921, 1029.528, 47.795]}>
              <mesh
                name="3DGeom-83_1"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-83_1'].geometry}
                material={materials['[Translucent Glass Gray]']}
              />
              <mesh
                name="3DGeom-84_1"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-84_1'].geometry}
                material={materials['[0136_Charcoal]']}
              />
            </group>
            <group position={[4.89, 872.283, 47.795]}>
              <mesh
                name="3DGeom-83_2"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-83_2'].geometry}
                material={materials['[Translucent Glass Gray]']}
              />
              <mesh
                name="3DGeom-84_2"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-84_2'].geometry}
                material={materials['[0136_Charcoal]']}
              />
            </group>
            <group position={[4.89, 1187.008, 47.795]}>
              <mesh
                name="3DGeom-83_3"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-83_3'].geometry}
                material={materials['[Translucent Glass Gray]']}
              />
              <mesh
                name="3DGeom-84_3"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-84_3'].geometry}
                material={materials['[0136_Charcoal]']}
              />
            </group>
            <group position={[282.48, 242.126, 80.591]}>
              <mesh
                name="3DGeom-91"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-91'].geometry}
                material={materials['[0136_Charcoal]']}
              />
              <mesh
                name="3DGeom-92"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-92'].geometry}
                material={materials['[Translucent Glass Gray]1']}
              />
              <mesh
                name="3DGeom-93"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-93'].geometry}
                material={materials['WB Glazing']}
              />
            </group>
            <group position={[282.48, 557.087, 80.591]}>
              <mesh
                name="3DGeom-91_1"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-91_1'].geometry}
                material={materials['[0136_Charcoal]']}
              />
              <mesh
                name="3DGeom-92_1"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-92_1'].geometry}
                material={materials['[Translucent Glass Gray]1']}
              />
              <mesh
                name="3DGeom-93_1"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-93_1'].geometry}
                material={materials['WB Glazing']}
              />
            </group>
            <group position={[282.48, 1029.528, 80.591]}>
              <mesh
                name="3DGeom-91_2"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-91_2'].geometry}
                material={materials['[0136_Charcoal]']}
              />
              <mesh
                name="3DGeom-92_2"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-92_2'].geometry}
                material={materials['[Translucent Glass Gray]1']}
              />
              <mesh
                name="3DGeom-93_2"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-93_2'].geometry}
                material={materials['WB Glazing']}
              />
            </group>
            <group position={[282.48, 1344.488, 80.591]}>
              <mesh
                name="3DGeom-91_3"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-91_3'].geometry}
                material={materials['[0136_Charcoal]']}
              />
              <mesh
                name="3DGeom-92_3"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-92_3'].geometry}
                material={materials['[Translucent Glass Gray]1']}
              />
              <mesh
                name="3DGeom-93_3"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-93_3'].geometry}
                material={materials['WB Glazing']}
              />
            </group>
            <group position={[230.591, 1539.531, 11.811]} rotation={[0, 0, -Math.PI]}>
              <mesh
                name="3DGeom-103"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-103'].geometry}
                material={materials['[0131_Silver]']}
              />
              <mesh
                name="3DGeom-104"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-104'].geometry}
                material={materials['[Wood Veneer 01]']}
              />
            </group>
            <group position={[194.606, 165.194, 11.811]}>
              <mesh
                name="3DGeom-103_1"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-103_1'].geometry}
                material={materials['[0131_Silver]']}
              />
              <mesh
                name="3DGeom-104_1"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-104_1'].geometry}
                material={materials['[Wood Veneer 01]']}
              />
            </group>
            <group position={[283.661, 508.504, 98.602]} rotation={[Math.PI / 2, Math.PI / 2, 0]}>
              <mesh
                name="3DGeom-114"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-114'].geometry}
                material={materials['[0137_Black]']}
              />
              <mesh
                name="3DGeom-115"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-115'].geometry}
                material={materials['[Translucent Glass Gray]1']}
              />
            </group>
            <group position={[283.661, 823.465, 98.602]} rotation={[Math.PI / 2, Math.PI / 2, 0]}>
              <mesh
                name="3DGeom-114_1"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-114_1'].geometry}
                material={materials['[0137_Black]']}
              />
              <mesh
                name="3DGeom-115_1"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-115_1'].geometry}
                material={materials['[Translucent Glass Gray]1']}
              />
            </group>
            <group position={[283.661, 881.26, 98.602]} rotation={[Math.PI / 2, Math.PI / 2, 0]}>
              <mesh
                name="3DGeom-114_2"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-114_2'].geometry}
                material={materials['[0137_Black]']}
              />
              <mesh
                name="3DGeom-115_2"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-115_2'].geometry}
                material={materials['[Translucent Glass Gray]1']}
              />
            </group>
            <group position={[283.661, 1196.22, 98.602]} rotation={[Math.PI / 2, Math.PI / 2, 0]}>
              <mesh
                name="3DGeom-114_3"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-114_3'].geometry}
                material={materials['[0137_Black]']}
              />
              <mesh
                name="3DGeom-115_3"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-115_3'].geometry}
                material={materials['[Translucent Glass Gray]1']}
              />
            </group>
            <group position={[139.603, 212.402, 11.811]} rotation={[0, 0, -Math.PI / 2]}>
              <mesh
                name="3DGeom-103_2"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-103_2'].geometry}
                material={materials['[0131_Silver]']}
              />
              <mesh
                name="3DGeom-104_2"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-104_2'].geometry}
                material={materials['[Wood Veneer 01]']}
              />
            </group>
            <group position={[139.603, 1528.307, 11.811]} rotation={[0, 0, -Math.PI / 2]}>
              <mesh
                name="3DGeom-103_3"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-103_3'].geometry}
                material={materials['[0131_Silver]']}
              />
              <mesh
                name="3DGeom-104_3"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-104_3'].geometry}
                material={materials['[Wood Veneer 01]']}
              />
            </group>
            <group position={[282.48, 1196.22, 51.811]} rotation={[Math.PI / 2, Math.PI / 2, 0]}>
              <mesh
                name="3DGeom-126"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-126'].geometry}
                material={materials['[Color M09]']}
              />
              <mesh
                name="3DGeom-127"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-127'].geometry}
                material={materials['[Translucent Glass Gray]1']}
              />
            </group>
            <group position={[282.48, 881.26, 51.811]} rotation={[Math.PI / 2, Math.PI / 2, 0]}>
              <mesh
                name="3DGeom-126_1"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-126_1'].geometry}
                material={materials['[Color M09]']}
              />
              <mesh
                name="3DGeom-127_1"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-127_1'].geometry}
                material={materials['[Translucent Glass Gray]1']}
              />
            </group>
            <group position={[282.48, 823.465, 51.811]} rotation={[Math.PI / 2, Math.PI / 2, 0]}>
              <mesh
                name="3DGeom-126_2"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-126_2'].geometry}
                material={materials['[Color M09]']}
              />
              <mesh
                name="3DGeom-127_2"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-127_2'].geometry}
                material={materials['[Translucent Glass Gray]1']}
              />
            </group>
            <group position={[282.48, 508.504, 51.811]} rotation={[Math.PI / 2, Math.PI / 2, 0]}>
              <mesh
                name="3DGeom-126_3"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-126_3'].geometry}
                material={materials['[Color M09]']}
              />
              <mesh
                name="3DGeom-127_3"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-127_3'].geometry}
                material={materials['[Translucent Glass Gray]1']}
              />
            </group>
            <mesh
              name="3DGeom-107"
              castShadow
              receiveShadow
              geometry={nodes['3DGeom-107'].geometry}
              material={materials['[0042_Sienna]']}
              position={[102.677, 1573.819, 17.717]}
            />
            <mesh
              name="3DGeom-107_1"
              castShadow
              receiveShadow
              geometry={nodes['3DGeom-107_1'].geometry}
              material={materials['[0042_Sienna]']}
              position={[56.732, 1573.819, 17.717]}
            />
            <mesh
              name="3DGeom-107_2"
              castShadow
              receiveShadow
              geometry={nodes['3DGeom-107_2'].geometry}
              material={materials['[0042_Sienna]']}
              position={[56.732, 1573.819, 17.717]}
            />
            <mesh
              name="3DGeom-107_3"
              castShadow
              receiveShadow
              geometry={nodes['3DGeom-107_3'].geometry}
              material={materials['[0042_Sienna]']}
              position={[14.764, 1573.819, 17.717]}
            />
            <mesh
              name="3DGeom-107_4"
              castShadow
              receiveShadow
              geometry={nodes['3DGeom-107_4'].geometry}
              material={materials['[0042_Sienna]']}
              position={[14.764, 129.921, 17.717]}
            />
            <mesh
              name="3DGeom-107_5"
              castShadow
              receiveShadow
              geometry={nodes['3DGeom-107_5'].geometry}
              material={materials['[0042_Sienna]']}
              position={[63.228, 129.921, 17.717]}
            />
            <mesh
              name="3DGeom-107_6"
              castShadow
              receiveShadow
              geometry={nodes['3DGeom-107_6'].geometry}
              material={materials['[0042_Sienna]']}
              position={[109.252, 129.921, 17.717]}
            />
          </group>
            )}
            {visibleFloors.includes('2ND') && (
              
          <group name="IOES-2ndfloor" position={[7130.714, 4947.189, 3500]} scale={25.4} >
            <mesh
              name="3DGeom-134"
              castShadow
              receiveShadow
              geometry={nodes['3DGeom-134'].geometry}
              material={materials.bbb}>
                <Edges color="black" threshold={5} renderOrder={1}/>
              </mesh>
          
            <mesh
              name="3DGeom-135"
              castShadow
              receiveShadow
              geometry={nodes['3DGeom-135'].geometry}
              material={materials['*42']}
              >
                 <Edges color="black" threshold={5} renderOrder={1}/>
              </mesh>
           
            <mesh
              name="3DGeom-136"
              castShadow
              receiveShadow
              geometry={nodes['3DGeom-136'].geometry}
              material={materials['*46']}
            />
            <mesh
              name="3DGeom-137"
              castShadow
              receiveShadow
              geometry={nodes['3DGeom-137'].geometry}
              material={materials['*45']}
            />
            <group position={[2.953, 1344.488, 47.795]}>
              <mesh
                name="3DGeom-83_4"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-83_4'].geometry}
                material={materials['[Translucent Glass Gray]']}
              />
              <mesh
                name="3DGeom-84_4"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-84_4'].geometry}
                material={materials['[0136_Charcoal]']}
              />
            </group>
            <group position={[2.953, 1187.008, 47.795]}>
              <mesh
                name="3DGeom-83_5"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-83_5'].geometry}
                material={materials['[Translucent Glass Gray]']}
              />
              <mesh
                name="3DGeom-84_5"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-84_5'].geometry}
                material={materials['[0136_Charcoal]']}
              />
            </group>
            <group position={[2.953, 1029.528, 47.795]}>
              <mesh
                name="3DGeom-83_6"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-83_6'].geometry}
                material={materials['[Translucent Glass Gray]']}
              />
              <mesh
                name="3DGeom-84_6"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-84_6'].geometry}
                material={materials['[0136_Charcoal]']}
              />
            </group>
            <group position={[2.953, 872.047, 47.795]}>
              <mesh
                name="3DGeom-83_7"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-83_7'].geometry}
                material={materials['[Translucent Glass Gray]']}
              />
              <mesh
                name="3DGeom-84_7"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-84_7'].geometry}
                material={materials['[0136_Charcoal]']}
              />
            </group>
            <group position={[2.953, 714.567, 47.795]}>
              <mesh
                name="3DGeom-83_8"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-83_8'].geometry}
                material={materials['[Translucent Glass Gray]']}
              />
              <mesh
                name="3DGeom-84_8"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-84_8'].geometry}
                material={materials['[0136_Charcoal]']}
              />
            </group>
            <group position={[2.953, 557.087, 47.795]}>
              <mesh
                name="3DGeom-83_9"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-83_9'].geometry}
                material={materials['[Translucent Glass Gray]']}
              />
              <mesh
                name="3DGeom-84_9"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-84_9'].geometry}
                material={materials['[0136_Charcoal]']}
              />
            </group>
            <group position={[2.953, 399.606, 47.795]}>
              <mesh
                name="3DGeom-83_10"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-83_10'].geometry}
                material={materials['[Translucent Glass Gray]']}
              />
              <mesh
                name="3DGeom-84_10"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-84_10'].geometry}
                material={materials['[0136_Charcoal]']}
              />
            </group>
            <group position={[2.953, 242.126, 47.795]}>
              <mesh
                name="3DGeom-83_11"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-83_11'].geometry}
                material={materials['[Translucent Glass Gray]']}
              />
              <mesh
                name="3DGeom-84_11"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-84_11'].geometry}
                material={materials['[0136_Charcoal]']}
              />
            </group>
            <group position={[2.953, 1501.969, 47.795]}>
              <mesh
                name="3DGeom-83_12"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-83_12'].geometry}
                material={materials['[Translucent Glass Gray]']}
              />
              <mesh
                name="3DGeom-84_12"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-84_12'].geometry}
                material={materials['[0136_Charcoal]']}
              />
            </group>
            <group position={[2.953, 84.646, 47.795]}>
              <mesh
                name="3DGeom-83_13"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-83_13'].geometry}
                material={materials['[Translucent Glass Gray]']}
              />
              <mesh
                name="3DGeom-84_13"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-84_13'].geometry}
                material={materials['[0136_Charcoal]']}
              />
            </group>
            <group position={[282.48, 242.126, 80.591]}>
              <mesh
                name="3DGeom-91_4"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-91_4'].geometry}
                material={materials['[0136_Charcoal]']}
              />
              <mesh
                name="3DGeom-92_4"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-92_4'].geometry}
                material={materials['[Translucent Glass Gray]1']}
              />
              <mesh
                name="3DGeom-93_4"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-93_4'].geometry}
                material={materials['WB Glazing']}
              />
            </group>
            <group position={[282.48, 1029.528, 80.591]}>
              <mesh
                name="3DGeom-91_5"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-91_5'].geometry}
                material={materials['[0136_Charcoal]']}
              />
              <mesh
                name="3DGeom-92_5"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-92_5'].geometry}
                material={materials['[Translucent Glass Gray]1']}
              />
              <mesh
                name="3DGeom-93_5"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-93_5'].geometry}
                material={materials['WB Glazing']}
              />
            </group>
            <group position={[282.087, 1344.488, 80.591]}>
              <mesh
                name="3DGeom-91_6"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-91_6'].geometry}
                material={materials['[0136_Charcoal]']}
              />
              <mesh
                name="3DGeom-92_6"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-92_6'].geometry}
                material={materials['[Translucent Glass Gray]1']}
              />
              <mesh
                name="3DGeom-93_6"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-93_6'].geometry}
                material={materials['WB Glazing']}
              />
            </group>
            <group position={[284.449, 485.512, 80.591]} rotation={[0, 0, Math.PI]}>
              <mesh
                name="3DGeom-59_4"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-59_4'].geometry}
                material={materials['WB Glazing']}
              />
              <mesh
                name="3DGeom-60_4"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-60_4'].geometry}
                material={materials['[0136_Charcoal]']}
              />
              <mesh
                name="3DGeom-61_4"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-61_4'].geometry}
                material={materials['[0137_Black]']}
              />
              <mesh
                name="3DGeom-62_4"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-62_4'].geometry}
                material={materials['[Translucent Glass Gray]1']}
              />
            </group>
            <group position={[284.449, 800.472, 80.591]} rotation={[0, 0, Math.PI]}>
              <mesh
                name="3DGeom-59_5"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-59_5'].geometry}
                material={materials['WB Glazing']}
              />
              <mesh
                name="3DGeom-60_5"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-60_5'].geometry}
                material={materials['[0136_Charcoal]']}
              />
              <mesh
                name="3DGeom-61_5"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-61_5'].geometry}
                material={materials['[0137_Black]']}
              />
              <mesh
                name="3DGeom-62_5"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-62_5'].geometry}
                material={materials['[Translucent Glass Gray]1']}
              />
            </group>
            <group position={[282.087, 557.087, 80.591]}>
              <mesh
                name="3DGeom-91_7"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-91_7'].geometry}
                material={materials['[0136_Charcoal]']}
              />
              <mesh
                name="3DGeom-92_7"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-92_7'].geometry}
                material={materials['[Translucent Glass Gray]1']}
              />
              <mesh
                name="3DGeom-93_7"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-93_7'].geometry}
                material={materials['WB Glazing']}
              />
            </group>
            <group position={[284.449, 1000.315, 80.591]} rotation={[0, 0, Math.PI]}>
              <mesh
                name="3DGeom-59_6"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-59_6'].geometry}
                material={materials['WB Glazing']}
              />
              <mesh
                name="3DGeom-60_6"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-60_6'].geometry}
                material={materials['[0136_Charcoal]']}
              />
              <mesh
                name="3DGeom-61_6"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-61_6'].geometry}
                material={materials['[0137_Black]']}
              />
              <mesh
                name="3DGeom-62_6"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-62_6'].geometry}
                material={materials['[Translucent Glass Gray]1']}
              />
            </group>
            <group position={[284.449, 1315.276, 80.591]} rotation={[0, 0, Math.PI]}>
              <mesh
                name="3DGeom-59_7"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-59_7'].geometry}
                material={materials['WB Glazing']}
              />
              <mesh
                name="3DGeom-60_7"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-60_7'].geometry}
                material={materials['[0136_Charcoal]']}
              />
              <mesh
                name="3DGeom-61_7"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-61_7'].geometry}
                material={materials['[0137_Black]']}
              />
              <mesh
                name="3DGeom-62_7"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-62_7'].geometry}
                material={materials['[Translucent Glass Gray]1']}
              />
            </group>
            <group position={[277.399, 490.512, 11.811]}>
              <mesh
                name="3DGeom-186"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-186'].geometry}
                material={materials['[0131_Silver]']}
              />
              <mesh
                name="3DGeom-187"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-187'].geometry}
                material={materials['[Wood Cherry Original]']}
              />
              <mesh
                name="3DGeom-188"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-188'].geometry}
                material={materials['[Wood Bamboo]']}
              />
            </group>
            <group position={[277.399, 805.472, 11.811]}>
              <mesh
                name="3DGeom-186_1"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-186_1'].geometry}
                material={materials['[0131_Silver]']}
              />
              <mesh
                name="3DGeom-187_1"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-187_1'].geometry}
                material={materials['[Wood Cherry Original]']}
              />
              <mesh
                name="3DGeom-188_1"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-188_1'].geometry}
                material={materials['[Wood Bamboo]']}
              />
            </group>
            <group position={[277.399, 863.268, 11.811]}>
              <mesh
                name="3DGeom-186_2"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-186_2'].geometry}
                material={materials['[0131_Silver]']}
              />
              <mesh
                name="3DGeom-187_2"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-187_2'].geometry}
                material={materials['[Wood Cherry Original]']}
              />
              <mesh
                name="3DGeom-188_2"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-188_2'].geometry}
                material={materials['[Wood Bamboo]']}
              />
            </group>
            <group position={[277.399, 1178.228, 11.811]}>
              <mesh
                name="3DGeom-186_3"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-186_3'].geometry}
                material={materials['[0131_Silver]']}
              />
              <mesh
                name="3DGeom-187_3"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-187_3'].geometry}
                material={materials['[Wood Cherry Original]']}
              />
              <mesh
                name="3DGeom-188_3"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-188_3'].geometry}
                material={materials['[Wood Bamboo]']}
              />
            </group>
            <group position={[277.399, 175.551, 11.811]}>
              <mesh
                name="3DGeom-186_4"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-186_4'].geometry}
                material={materials['[0131_Silver]']}
              />
              <mesh
                name="3DGeom-187_4"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-187_4'].geometry}
                material={materials['[Wood Cherry Original]']}
              />
              <mesh
                name="3DGeom-188_4"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-188_4'].geometry}
                material={materials['[Wood Bamboo]']}
              />
            </group>
            <group position={[277.399, 1493.189, 11.811]}>
              <mesh
                name="3DGeom-186_5"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-186_5'].geometry}
                material={materials['[0131_Silver]']}
              />
              <mesh
                name="3DGeom-187_5"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-187_5'].geometry}
                material={materials['[Wood Cherry Original]']}
              />
              <mesh
                name="3DGeom-188_5"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-188_5'].geometry}
                material={materials['[Wood Bamboo]']}
              />
            </group>
            <group position={[376.969, 11.811, 11.811]}>
              <mesh
                name="3DGeom-204"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-204'].geometry}
                material={materials['[0129_WhiteSmoke]1']}
              />
              <mesh
                name="3DGeom-205"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-205'].geometry}
                material={materials['[Translucent Glass Gray]5']}
              />
            </group>
            <group position={[376.969, 1653.543, 11.811]}>
              <mesh
                name="3DGeom-204_1"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-204_1'].geometry}
                material={materials['[0129_WhiteSmoke]1']}
              />
              <mesh
                name="3DGeom-205_1"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-205_1'].geometry}
                material={materials['[Translucent Glass Gray]5']}
              />
            </group>
            <group position={[283.661, 823.465, 98.602]} rotation={[Math.PI / 2, Math.PI / 2, 0]}>
              <mesh
                name="3DGeom-208"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-208'].geometry}
                material={materials['[0137_Black]']}
              />
              <mesh
                name="3DGeom-209"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-209'].geometry}
                material={materials['[Translucent Glass Gray]1']}
                position={[0, 0, 0.394]}
              />
            </group>
            <group position={[283.661, 881.26, 98.602]} rotation={[Math.PI / 2, Math.PI / 2, 0]}>
              <mesh
                name="3DGeom-210"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-210'].geometry}
                material={materials['[0137_Black]']}
              />
              <mesh
                name="3DGeom-211"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-211'].geometry}
                material={materials['[Translucent Glass Gray]1']}
                position={[0, 0, 0.394]}
              />
            </group>
            <group position={[283.661, 1196.22, 98.602]} rotation={[Math.PI / 2, Math.PI / 2, 0]}>
              <mesh
                name="3DGeom-212"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-212'].geometry}
                material={materials['[0137_Black]']}
              />
              <mesh
                name="3DGeom-213"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-213'].geometry}
                material={materials['[Translucent Glass Gray]1']}
                position={[0, 0, 0.394]}
              />
            </group>
            <group position={[283.661, 508.504, 98.602]} rotation={[Math.PI / 2, Math.PI / 2, 0]}>
              <mesh
                name="3DGeom-214"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-214'].geometry}
                material={materials['[0137_Black]']}
              />
              <mesh
                name="3DGeom-215"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-215'].geometry}
                material={materials['[Translucent Glass Gray]1']}
                position={[0, 0, 0.394]}
              />
            </group>
          </group>
           )}
             {visibleFloors.includes('roof') && (
          <group name="roof">
          <mesh
            name="3DGeom-1"
            castShadow
            receiveShadow
            geometry={nodes['3DGeom-1'].geometry}
            material={materials['[0131_Silver]']}
            position={[29559.83, 87521.953, 274.757]}
            rotation={[0, 0, Math.PI / 2]}
            scale={25.4}
          />
          <mesh
            name="3DGeom-10"
            castShadow
            receiveShadow
            geometry={nodes['3DGeom-10'].geometry}
            material={materials.bbb}
            position={[6130.714, 3947.189, 7000]}
            scale={25.4}
          />
          </group>
            )}
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/IOES.glb')

