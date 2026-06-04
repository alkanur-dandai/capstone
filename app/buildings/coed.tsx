
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { types } from 'util';


type Props = {
  selected?: boolean
  onSelect?: (id: string) => void
  onClick?: () => void
  visibleFloors?: string[]
}

export function COED({ visibleFloors = ["1ST", "2ND", "roof"], selected, onSelect, onClick, ...props }: Props) {
  const { nodes, materials } = useGLTF('/COED_compressed (1).glb') as any;
  return (
    <group   {...props}
      onClick={(e) => {
        e.stopPropagation()
        onClick?.()
      }} 
      dispose={null} position={[-48,0,45]} rotation={[0,-Math.PI / 8, 0, ]}>
      <group>
        <group rotation={[-Math.PI / 2, 0, 0]}>
          <group name="Assembly-188" scale={0.001}>

  {visibleFloors.includes('roof') && (
            <group name="coed-roof" position={[4409.905, 2169.515, 6900]} scale={25.4}>
              <mesh
                name="3DGeom-1"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-1'].geometry}
                material={materials['[0129_WhiteSmoke]']}
              />
              <mesh
                name="3DGeom-2"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-2'].geometry}
                material={materials['[0023_FireBrick]']}
              />
              <group position={[-149.606, -0.566, 31.496]}>
                <mesh
                  name="3DGeom-3"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-3'].geometry}
                  material={materials['[0023_FireBrick]']}
                />
              </group>
            </group>
                  )}

               {visibleFloors.includes('2ND') && (

            <group name="coed-2nd-floor" position={[1609.905, 3169.515, 3600]} scale={25.4}>
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
                material={materials['[Polished Concrete Old]']}
              />
              <mesh
                name="3DGeom-6"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-6'].geometry}
                material={materials['[White Square Tile]']}
              />
              <group position={[591.535, 23.622, 51.732]}>
                <mesh
                  name="3DGeom-7"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-7'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-8"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-8'].geometry}
                  material={materials['WB Glazing']}
                />
                <mesh
                  name="3DGeom-9"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-9'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
              </group>
              <group position={[591.535, 97.638, 51.732]}>
                <mesh
                  name="3DGeom-7_1"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-7_1'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-8_1"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-8_1'].geometry}
                  material={materials['WB Glazing']}
                />
                <mesh
                  name="3DGeom-9_1"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-9_1'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
              </group>
              <group position={[591.535, 266.929, 51.732]}>
                <mesh
                  name="3DGeom-7_2"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-7_2'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-8_2"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-8_2'].geometry}
                  material={materials['WB Glazing']}
                />
                <mesh
                  name="3DGeom-9_2"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-9_2'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
              </group>
              <group
                position={[591.535, 476.378, 51.732]}
                rotation={[0, 0, -Math.PI / 2]}
                scale={[1.034, 1, 1]}>
                <mesh
                  name="3DGeom-16"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-16'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-17"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-17'].geometry}
                  material={materials['WB Glazing']}
                />
                <mesh
                  name="3DGeom-18"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-18'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
              </group>
              <group position={[593.504, 188.976, 51.732]} scale={[1, 1.5, 1.334]}>
                <mesh
                  name="3DGeom-19"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-19'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-20"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-20'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
                <mesh
                  name="3DGeom-21"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-21'].geometry}
                  material={materials['WB Glazing']}
                />
              </group>
              <group position={[591.535, 519.685, 51.732]}>
                <mesh
                  name="3DGeom-7_3"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-7_3'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-8_3"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-8_3'].geometry}
                  material={materials['WB Glazing']}
                />
                <mesh
                  name="3DGeom-9_3"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-9_3'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
              </group>
              <group position={[591.535, 605.512, 51.732]}>
                <mesh
                  name="3DGeom-7_4"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-7_4'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-8_4"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-8_4'].geometry}
                  material={materials['WB Glazing']}
                />
                <mesh
                  name="3DGeom-9_4"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-9_4'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
              </group>
              <group position={[591.535, 688.976, 51.732]}>
                <mesh
                  name="3DGeom-7_5"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-7_5'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-8_5"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-8_5'].geometry}
                  material={materials['WB Glazing']}
                />
                <mesh
                  name="3DGeom-9_5"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-9_5'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
              </group>
              <group position={[591.535, 774.803, 51.732]}>
                <mesh
                  name="3DGeom-7_6"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-7_6'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-8_6"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-8_6'].geometry}
                  material={materials['WB Glazing']}
                />
                <mesh
                  name="3DGeom-9_6"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-9_6'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
              </group>
              <group position={[591.535, 858.268, 51.732]}>
                <mesh
                  name="3DGeom-7_7"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-7_7'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-8_7"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-8_7'].geometry}
                  material={materials['WB Glazing']}
                />
                <mesh
                  name="3DGeom-9_7"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-9_7'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
              </group>
              <group position={[591.535, 944.094, 51.732]}>
                <mesh
                  name="3DGeom-7_8"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-7_8'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-8_8"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-8_8'].geometry}
                  material={materials['WB Glazing']}
                />
                <mesh
                  name="3DGeom-9_8"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-9_8'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
              </group>
              <group position={[460.63, 1008.858, 51.732]}>
                <mesh
                  name="3DGeom-16_1"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-16_1'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-17_1"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-17_1'].geometry}
                  material={materials['WB Glazing']}
                />
                <mesh
                  name="3DGeom-18_1"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-18_1'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
              </group>
              <group position={[312.992, 1008.858, 51.732]}>
                <mesh
                  name="3DGeom-16_2"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-16_2'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-17_2"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-17_2'].geometry}
                  material={materials['WB Glazing']}
                />
                <mesh
                  name="3DGeom-18_2"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-18_2'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
              </group>
              <group position={[167.323, 1008.858, 51.732]}>
                <mesh
                  name="3DGeom-16_3"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-16_3'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-17_3"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-17_3'].geometry}
                  material={materials['WB Glazing']}
                />
                <mesh
                  name="3DGeom-18_3"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-18_3'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
              </group>
              <group position={[152.559, 866.142, 51.732]}>
                <mesh
                  name="3DGeom-49"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-49'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-50"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-50'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
                <mesh
                  name="3DGeom-51"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-51'].geometry}
                  material={materials['WB Glazing']}
                />
              </group>
              <group position={[152.559, 696.85, 51.732]}>
                <mesh
                  name="3DGeom-49_1"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-49_1'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-50_1"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-50_1'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
                <mesh
                  name="3DGeom-51_1"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-51_1'].geometry}
                  material={materials['WB Glazing']}
                />
              </group>
              <group position={[152.559, 556.811, 51.732]}>
                <mesh
                  name="3DGeom-55"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-55'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-56"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-56'].geometry}
                  material={materials['WB Glazing']}
                />
                <mesh
                  name="3DGeom-57"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-57'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
              </group>
              <group position={[120.079, 504.921, 51.732]} rotation={[0, 0, Math.PI]}>
                <mesh
                  name="3DGeom-58"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-58'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
                <mesh
                  name="3DGeom-59"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-59'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-60"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-60'].geometry}
                  material={materials['WB Glazing']}
                />
              </group>
              <group position={[120.079, 331.693, 51.732]} rotation={[0, 0, Math.PI]}>
                <mesh
                  name="3DGeom-58_1"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-58_1'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
                <mesh
                  name="3DGeom-59_1"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-59_1'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-60_1"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-60_1'].geometry}
                  material={materials['WB Glazing']}
                />
              </group>
              <group position={[152.559, 181.102, 51.732]}>
                <mesh
                  name="3DGeom-64"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-64'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-65"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-65'].geometry}
                  material={materials['WB Glazing']}
                />
                <mesh
                  name="3DGeom-66"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-66'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
              </group>
              <group position={[152.559, 23.622, 51.732]}>
                <mesh
                  name="3DGeom-67"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-67'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
                <mesh
                  name="3DGeom-68"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-68'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-69"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-69'].geometry}
                  material={materials['WB Glazing']}
                />
              </group>
              <group position={[281.496, 6.89, 51.732]} rotation={[0, 0, Math.PI]}>
                <mesh
                  name="3DGeom-16_4"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-16_4'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-17_4"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-17_4'].geometry}
                  material={materials['WB Glazing']}
                />
                <mesh
                  name="3DGeom-18_4"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-18_4'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
              </group>
              <group position={[425.197, 6.89, 51.732]} rotation={[0, 0, Math.PI]}>
                <mesh
                  name="3DGeom-16_5"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-16_5'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-17_5"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-17_5'].geometry}
                  material={materials['WB Glazing']}
                />
                <mesh
                  name="3DGeom-18_5"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-18_5'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
              </group>
              <group position={[574.803, 6.89, 51.732]} rotation={[0, 0, Math.PI]}>
                <mesh
                  name="3DGeom-16_6"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-16_6'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-17_6"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-17_6'].geometry}
                  material={materials['WB Glazing']}
                />
                <mesh
                  name="3DGeom-18_6"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-18_6'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
              </group>
              <group position={[152.559, 512.953, 15.748]}>
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
              <group position={[2.953, 488.412, 22.728]} rotation={[Math.PI / 2, -Math.PI / 2, 0]}>
                <mesh
                  name="3DGeom-81"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-81'].geometry}
                  material={materials['[0131_Silver]']}
                />
              </group>
              <group position={[338.583, 693.622, 15.748]}>
                <mesh
                  name="3DGeom-79_1"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-79_1'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-80_1"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-80_1'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
              </group>
              <group position={[437.008, 270.63, 15.748]}>
                <mesh
                  name="3DGeom-79_2"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-79_2'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-80_2"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-80_2'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
              </group>
              <group position={[246.872, 834.646, 15.748]} rotation={[0, 0, Math.PI / 2]}>
                <mesh
                  name="3DGeom-79_3"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-79_3'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-80_3"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-80_3'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
              </group>
              <group position={[452.528, 416.304, 15.748]} rotation={[0, 0, Math.PI / 2]}>
                <mesh
                  name="3DGeom-88"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-88'].geometry}
                  material={materials['[Wood Bamboo]']}
                />
                <mesh
                  name="3DGeom-89"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-89'].geometry}
                  material={materials['[Carpet Loop Pattern]']}
                />
              </group>
              <group position={[563.777, 354.137, 15.748]} rotation={[0, 0, Math.PI / 2]}>
                <mesh
                  name="3DGeom-88_1"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-88_1'].geometry}
                  material={materials['[Wood Bamboo]']}
                />
                <mesh
                  name="3DGeom-89_1"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-89_1'].geometry}
                  material={materials['[Carpet Loop Pattern]']}
                />
              </group>
              <group position={[537.109, 707.58, 15.748]} rotation={[0, 0, Math.PI / 2]}>
                <mesh
                  name="3DGeom-88_2"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-88_2'].geometry}
                  material={materials['[Wood Bamboo]']}
                />
                <mesh
                  name="3DGeom-89_2"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-89_2'].geometry}
                  material={materials['[Carpet Loop Pattern]']}
                />
              </group>
              <group position={[334.905, 162.768, 15.748]}>
                <mesh
                  name="3DGeom-88_3"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-88_3'].geometry}
                  material={materials['[Wood Bamboo]']}
                />
                <mesh
                  name="3DGeom-89_3"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-89_3'].geometry}
                  material={materials['[Carpet Loop Pattern]']}
                />
              </group>
              <group position={[335.678, 65.597, 15.748]}>
                <mesh
                  name="3DGeom-88_4"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-88_4'].geometry}
                  material={materials['[Wood Bamboo]']}
                />
                <mesh
                  name="3DGeom-89_4"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-89_4'].geometry}
                  material={materials['[Carpet Loop Pattern]']}
                />
              </group>
              <group position={[189.93, 65.597, 15.748]}>
                <mesh
                  name="3DGeom-88_5"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-88_5'].geometry}
                  material={materials['[Wood Bamboo]']}
                />
                <mesh
                  name="3DGeom-89_5"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-89_5'].geometry}
                  material={materials['[Carpet Loop Pattern]']}
                />
              </group>
              <group position={[500.585, 136.625, 15.748]}>
                <mesh
                  name="3DGeom-88_6"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-88_6'].geometry}
                  material={materials['[Wood Bamboo]']}
                />
                <mesh
                  name="3DGeom-89_6"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-89_6'].geometry}
                  material={materials['[Carpet Loop Pattern]']}
                />
              </group>
              <group position={[382.613, 417.323, 78.74]} rotation={[Math.PI / 2, -Math.PI / 2, 0]}>
                <mesh
                  name="3DGeom-102"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-102'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-103"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-103'].geometry}
                  material={materials['[Translucent Glass Gray]']}
                />
              </group>
              <group position={[261.161, 334.646, 78.74]} rotation={[-Math.PI / 2, 0, -Math.PI]}>
                <mesh
                  name="3DGeom-104"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-104'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-105"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-105'].geometry}
                  material={materials['[Translucent Glass Gray]']}
                />
              </group>
              <group
                name="ergonomic_chair"
                position={[368.702, 55.701, 15.748]}
                rotation={[0, 0, Math.PI]}>
                <mesh
                  name="3DGeom-106"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-106'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
                <mesh
                  name="3DGeom-107"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-107'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
              </group>
              <group
                name="ergonomic_chair_1"
                position={[368.702, 155.741, 15.748]}
                rotation={[0, 0, Math.PI]}>
                <mesh
                  name="3DGeom-106_1"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-106_1'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
                <mesh
                  name="3DGeom-107_1"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-107_1'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
              </group>
              <group
                name="ergonomic_chair_2"
                position={[547.314, 141.549, 15.748]}
                rotation={[0, 0, Math.PI]}>
                <mesh
                  name="3DGeom-106_2"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-106_2'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
                <mesh
                  name="3DGeom-107_2"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-107_2'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
              </group>
              <group
                name="ergonomic_chair_3"
                position={[235.828, 55.701, 15.748]}
                rotation={[0, 0, Math.PI]}>
                <mesh
                  name="3DGeom-106_3"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-106_3'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
                <mesh
                  name="3DGeom-107_3"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-107_3'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
              </group>
            </group>
               )}

             {visibleFloors.includes('1ST') && (
            <group name="coed-1st-floor" position={[1609.905, 3169.515, 0]} scale={25.4}>
              <mesh
                name="3DGeom-114"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-114'].geometry}
                material={materials.cream}
              />
              <mesh
                name="3DGeom-115"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-115'].geometry}
                material={materials['[Polished Concrete Old]']}
              />
              <mesh
                name="3DGeom-116"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-116'].geometry}
                material={materials['[0023_FireBrick]']}
              />
              <mesh
                name="3DGeom-117"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-117'].geometry}
                material={materials['[White Square Tile]']}
              />
              <mesh
                name="3DGeom-118"
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-118'].geometry}
                material={materials['[Concrete Scored Jointless]']}
              />
              <group position={[595.472, 984.252, 51.732]} rotation={[0, 0, -Math.PI]}>
                <mesh
                  name="3DGeom-49_2"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-49_2'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-50_2"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-50_2'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
                <mesh
                  name="3DGeom-51_2"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-51_2'].geometry}
                  material={materials['WB Glazing']}
                />
              </group>
              <group position={[595.472, 814.961, 51.732]} rotation={[0, 0, -Math.PI]}>
                <mesh
                  name="3DGeom-49_3"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-49_3'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-50_3"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-50_3'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
                <mesh
                  name="3DGeom-51_3"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-51_3'].geometry}
                  material={materials['WB Glazing']}
                />
              </group>
              <group position={[593.504, 523.543, 63.74]}>
                <mesh
                  name="3DGeom-125"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-125'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-126"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-126'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
                <mesh
                  name="3DGeom-127"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-127'].geometry}
                  material={materials['WB Glazing']}
                />
              </group>
              <group position={[593.504, 437.008, 75.709]}>
                <mesh
                  name="3DGeom-128"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-128'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-129"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-129'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
              </group>
              <group position={[593.504, 373.622, 75.709]}>
                <mesh
                  name="3DGeom-128_1"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-128_1'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-129_1"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-129_1'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
              </group>
              <group position={[591.535, 266.929, 51.732]}>
                <mesh
                  name="3DGeom-7_9"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-7_9'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-8_9"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-8_9'].geometry}
                  material={materials['WB Glazing']}
                />
                <mesh
                  name="3DGeom-9_9"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-9_9'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
              </group>
              <group position={[591.535, 181.102, 51.732]}>
                <mesh
                  name="3DGeom-7_10"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-7_10'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-8_10"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-8_10'].geometry}
                  material={materials['WB Glazing']}
                />
                <mesh
                  name="3DGeom-9_10"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-9_10'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
              </group>
              <group position={[591.535, 97.638, 51.732]}>
                <mesh
                  name="3DGeom-7_11"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-7_11'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-8_11"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-8_11'].geometry}
                  material={materials['WB Glazing']}
                />
                <mesh
                  name="3DGeom-9_11"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-9_11'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
              </group>
              <group position={[591.535, 23.622, 51.732]}>
                <mesh
                  name="3DGeom-7_12"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-7_12'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-8_12"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-8_12'].geometry}
                  material={materials['WB Glazing']}
                />
                <mesh
                  name="3DGeom-9_12"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-9_12'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
              </group>
              <group position={[574.803, 6.89, 51.732]} rotation={[0, 0, Math.PI]}>
                <mesh
                  name="3DGeom-16_7"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-16_7'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-17_7"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-17_7'].geometry}
                  material={materials['WB Glazing']}
                />
                <mesh
                  name="3DGeom-18_7"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-18_7'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
              </group>
              <group position={[425.197, 6.89, 51.732]} rotation={[0, 0, Math.PI]}>
                <mesh
                  name="3DGeom-16_8"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-16_8'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-17_8"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-17_8'].geometry}
                  material={materials['WB Glazing']}
                />
                <mesh
                  name="3DGeom-18_8"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-18_8'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
              </group>
              <group position={[156.496, 71.654, 51.732]} rotation={[0, 0, -Math.PI]}>
                <mesh
                  name="3DGeom-7_13"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-7_13'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-8_13"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-8_13'].geometry}
                  material={materials['WB Glazing']}
                />
                <mesh
                  name="3DGeom-9_13"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-9_13'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
              </group>
              <group position={[156.496, 145.669, 51.732]} rotation={[0, 0, -Math.PI]}>
                <mesh
                  name="3DGeom-7_14"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-7_14'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-8_14"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-8_14'].geometry}
                  material={materials['WB Glazing']}
                />
                <mesh
                  name="3DGeom-9_14"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-9_14'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
              </group>
              <group position={[156.496, 229.134, 51.732]} rotation={[0, 0, -Math.PI]}>
                <mesh
                  name="3DGeom-7_15"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-7_15'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-8_15"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-8_15'].geometry}
                  material={materials['WB Glazing']}
                />
                <mesh
                  name="3DGeom-9_15"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-9_15'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
              </group>
              <group position={[156.496, 314.961, 51.732]} rotation={[0, 0, -Math.PI]}>
                <mesh
                  name="3DGeom-7_16"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-7_16'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-8_16"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-8_16'].geometry}
                  material={materials['WB Glazing']}
                />
                <mesh
                  name="3DGeom-9_16"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-9_16'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
              </group>
              <group position={[152.559, 515.748, 51.732]}>
                <mesh
                  name="3DGeom-162"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-162'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-163"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-163'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
              </group>
              <group position={[152.559, 631.89, 51.732]}>
                <mesh
                  name="3DGeom-162_1"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-162_1'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-163_1"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-163_1'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
              </group>
              <group position={[152.559, 550.63, 15.748]}>
                <mesh
                  name="3DGeom-166"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-166'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-167"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-167'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
              </group>
              <group position={[152.559, 586.614, 15.748]}>
                <mesh
                  name="3DGeom-166_1"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-166_1'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-167_1"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-167_1'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
              </group>
              <group position={[152.559, 866.142, 51.732]}>
                <mesh
                  name="3DGeom-49_4"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-49_4'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-50_4"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-50_4'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
                <mesh
                  name="3DGeom-51_4"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-51_4'].geometry}
                  material={materials['WB Glazing']}
                />
              </group>
              <group position={[152.559, 696.85, 51.732]}>
                <mesh
                  name="3DGeom-49_5"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-49_5'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-50_5"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-50_5'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
                <mesh
                  name="3DGeom-51_5"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-51_5'].geometry}
                  material={materials['WB Glazing']}
                />
              </group>
              <group position={[460.63, 1008.858, 51.732]}>
                <mesh
                  name="3DGeom-16_9"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-16_9'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-17_9"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-17_9'].geometry}
                  material={materials['WB Glazing']}
                />
                <mesh
                  name="3DGeom-18_9"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-18_9'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
              </group>
              <group position={[311.024, 1008.858, 51.732]}>
                <mesh
                  name="3DGeom-16_10"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-16_10'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-17_10"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-17_10'].geometry}
                  material={materials['WB Glazing']}
                />
                <mesh
                  name="3DGeom-18_10"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-18_10'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
              </group>
              <group position={[167.323, 1008.858, 51.732]}>
                <mesh
                  name="3DGeom-16_11"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-16_11'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-17_11"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-17_11'].geometry}
                  material={materials['WB Glazing']}
                />
                <mesh
                  name="3DGeom-18_11"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-18_11'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
              </group>
              <group position={[281.496, 6.89, 51.732]} rotation={[0, 0, Math.PI]}>
                <mesh
                  name="3DGeom-16_12"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-16_12'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-17_12"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-17_12'].geometry}
                  material={materials['WB Glazing']}
                />
                <mesh
                  name="3DGeom-18_12"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-18_12'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
              </group>
              <group position={[-62.794, 679.274, 0]}>
                <mesh
                  name="3DGeom-188"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-188'].geometry}
                  material={materials['[0102_RoyalBlue]']}
                />
              </group>
              <group position={[-48.858, 326.501, 0]}>
                <mesh
                  name="3DGeom-189"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-189'].geometry}
                  material={materials['[Terrazzo Tile Light]']}
                />
              </group>
              <group position={[7.733, 909.94, 0]}>
                <mesh
                  name="3DGeom-190"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-190'].geometry}
                  material={materials['[0061_OliveDrab]']}
                />
                <mesh
                  name="3DGeom-191"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-191'].geometry}
                  material={materials['[0042_Sienna]']}
                />
              </group>
              <group position={[7.733, 789.743, 0]}>
                <mesh
                  name="3DGeom-190_1"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-190_1'].geometry}
                  material={materials['[0061_OliveDrab]']}
                />
                <mesh
                  name="3DGeom-191_1"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-191_1'].geometry}
                  material={materials['[0042_Sienna]']}
                />
              </group>
              <group position={[7.733, 734.821, 0]}>
                <mesh
                  name="3DGeom-190_2"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-190_2'].geometry}
                  material={materials['[0061_OliveDrab]']}
                />
                <mesh
                  name="3DGeom-191_2"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-191_2'].geometry}
                  material={materials['[0042_Sienna]']}
                />
              </group>
              <group position={[17.11, 840.518, 4.134]} scale={0.89}>
                <group scale={[0.569, 0.502, 0.408]}>
                  <mesh
                    name="3DGeom-196"
                    castShadow
                    receiveShadow
                    geometry={nodes['3DGeom-196'].geometry}
                    material={materials['[0061_OliveDrab]']}
                  />
                </group>
                <group position={[15.551, 0, 0]} scale={[0.569, 0.502, 0.408]}>
                  <mesh
                    name="3DGeom-196_1"
                    castShadow
                    receiveShadow
                    geometry={nodes['3DGeom-196_1'].geometry}
                    material={materials['[0061_OliveDrab]']}
                  />
                </group>
              </group>
              <group position={[17.11, 957.976, 4.134]} scale={0.83}>
                <group scale={[0.569, 0.502, 0.408]}>
                  <mesh
                    name="3DGeom-196_2"
                    castShadow
                    receiveShadow
                    geometry={nodes['3DGeom-196_2'].geometry}
                    material={materials['[0061_OliveDrab]']}
                  />
                </group>
                <group position={[15.551, 0, 0]} scale={[0.569, 0.502, 0.408]}>
                  <mesh
                    name="3DGeom-196_3"
                    castShadow
                    receiveShadow
                    geometry={nodes['3DGeom-196_3'].geometry}
                    material={materials['[0061_OliveDrab]']}
                  />
                </group>
              </group>
              <group position={[17.11, 935.782, 4.134]} scale={0.84}>
                <group scale={[0.569, 0.502, 0.408]}>
                  <mesh
                    name="3DGeom-196_4"
                    castShadow
                    receiveShadow
                    geometry={nodes['3DGeom-196_4'].geometry}
                    material={materials['[0061_OliveDrab]']}
                  />
                </group>
                <group position={[15.551, 0, 0]} scale={[0.569, 0.502, 0.408]}>
                  <mesh
                    name="3DGeom-196_5"
                    castShadow
                    receiveShadow
                    geometry={nodes['3DGeom-196_5'].geometry}
                    material={materials['[0061_OliveDrab]']}
                  />
                </group>
              </group>
              <group position={[17.11, 900.813, 4.134]} scale={0.87}>
                <group scale={[0.569, 0.502, 0.408]}>
                  <mesh
                    name="3DGeom-196_6"
                    castShadow
                    receiveShadow
                    geometry={nodes['3DGeom-196_6'].geometry}
                    material={materials['[0061_OliveDrab]']}
                  />
                </group>
                <group position={[15.551, 0, 0]} scale={[0.569, 0.502, 0.408]}>
                  <mesh
                    name="3DGeom-196_7"
                    castShadow
                    receiveShadow
                    geometry={nodes['3DGeom-196_7'].geometry}
                    material={materials['[0061_OliveDrab]']}
                  />
                </group>
              </group>
              <group position={[17.11, 871.147, 4.134]} scale={0.85}>
                <group scale={[0.569, 0.502, 0.408]}>
                  <mesh
                    name="3DGeom-196_8"
                    castShadow
                    receiveShadow
                    geometry={nodes['3DGeom-196_8'].geometry}
                    material={materials['[0061_OliveDrab]']}
                  />
                </group>
                <group position={[15.551, 0, 0]} scale={[0.569, 0.502, 0.408]}>
                  <mesh
                    name="3DGeom-196_9"
                    castShadow
                    receiveShadow
                    geometry={nodes['3DGeom-196_9'].geometry}
                    material={materials['[0061_OliveDrab]']}
                  />
                </group>
              </group>
              <group position={[17.11, 801.473, 4.134]} scale={0.9}>
                <group scale={[0.569, 0.502, 0.408]}>
                  <mesh
                    name="3DGeom-196_10"
                    castShadow
                    receiveShadow
                    geometry={nodes['3DGeom-196_10'].geometry}
                    material={materials['[0061_OliveDrab]']}
                  />
                </group>
                <group position={[15.551, 0, 0]} scale={[0.569, 0.502, 0.408]}>
                  <mesh
                    name="3DGeom-196_11"
                    castShadow
                    receiveShadow
                    geometry={nodes['3DGeom-196_11'].geometry}
                    material={materials['[0061_OliveDrab]']}
                  />
                </group>
              </group>
              <group position={[17.11, 886.243, 4.134]} scale={0.818}>
                <group scale={[0.569, 0.502, 0.408]}>
                  <mesh
                    name="3DGeom-196_12"
                    castShadow
                    receiveShadow
                    geometry={nodes['3DGeom-196_12'].geometry}
                    material={materials['[0061_OliveDrab]']}
                  />
                </group>
                <group position={[15.551, 0, 0]} scale={[0.569, 0.502, 0.408]}>
                  <mesh
                    name="3DGeom-196_13"
                    castShadow
                    receiveShadow
                    geometry={nodes['3DGeom-196_13'].geometry}
                    material={materials['[0061_OliveDrab]']}
                  />
                </group>
              </group>
              <group position={[17.11, 979.255, 4.134]} scale={0.81}>
                <group scale={[0.569, 0.502, 0.408]}>
                  <mesh
                    name="3DGeom-196_14"
                    castShadow
                    receiveShadow
                    geometry={nodes['3DGeom-196_14'].geometry}
                    material={materials['[0061_OliveDrab]']}
                  />
                </group>
                <group position={[15.551, 0, 0]} scale={[0.569, 0.502, 0.408]}>
                  <mesh
                    name="3DGeom-196_15"
                    castShadow
                    receiveShadow
                    geometry={nodes['3DGeom-196_15'].geometry}
                    material={materials['[0061_OliveDrab]']}
                  />
                </group>
              </group>
              <group position={[17.11, 918.067, 4.134]} scale={0.88}>
                <group scale={[0.569, 0.502, 0.408]}>
                  <mesh
                    name="3DGeom-196_16"
                    castShadow
                    receiveShadow
                    geometry={nodes['3DGeom-196_16'].geometry}
                    material={materials['[0061_OliveDrab]']}
                  />
                </group>
                <group position={[15.551, 0, 0]} scale={[0.569, 0.502, 0.408]}>
                  <mesh
                    name="3DGeom-196_17"
                    castShadow
                    receiveShadow
                    geometry={nodes['3DGeom-196_17'].geometry}
                    material={materials['[0061_OliveDrab]']}
                  />
                </group>
              </group>
              <group position={[17.11, 855.162, 4.134]} scale={0.85}>
                <group scale={[0.569, 0.502, 0.408]}>
                  <mesh
                    name="3DGeom-196_18"
                    castShadow
                    receiveShadow
                    geometry={nodes['3DGeom-196_18'].geometry}
                    material={materials['[0061_OliveDrab]']}
                  />
                </group>
                <group position={[15.551, 0, 0]} scale={[0.569, 0.502, 0.408]}>
                  <mesh
                    name="3DGeom-196_19"
                    castShadow
                    receiveShadow
                    geometry={nodes['3DGeom-196_19'].geometry}
                    material={materials['[0061_OliveDrab]']}
                  />
                </group>
              </group>
              <group position={[17.11, 819.849, 4.134]} scale={0.89}>
                <group scale={[0.569, 0.502, 0.408]}>
                  <mesh
                    name="3DGeom-196_20"
                    castShadow
                    receiveShadow
                    geometry={nodes['3DGeom-196_20'].geometry}
                    material={materials['[0061_OliveDrab]']}
                  />
                </group>
                <group position={[15.551, 0, 0]} scale={[0.569, 0.502, 0.408]}>
                  <mesh
                    name="3DGeom-196_21"
                    castShadow
                    receiveShadow
                    geometry={nodes['3DGeom-196_21'].geometry}
                    material={materials['[0061_OliveDrab]']}
                  />
                </group>
              </group>
              <group position={[17.11, 782.468, 4.134]} scale={0.91}>
                <group scale={[0.569, 0.502, 0.408]}>
                  <mesh
                    name="3DGeom-196_22"
                    castShadow
                    receiveShadow
                    geometry={nodes['3DGeom-196_22'].geometry}
                    material={materials['[0061_OliveDrab]']}
                  />
                </group>
                <group position={[15.551, 0, 0]} scale={[0.569, 0.502, 0.408]}>
                  <mesh
                    name="3DGeom-196_23"
                    castShadow
                    receiveShadow
                    geometry={nodes['3DGeom-196_23'].geometry}
                    material={materials['[0061_OliveDrab]']}
                  />
                </group>
              </group>
              <group position={[17.11, 763.688, 4.134]} scale={0.91}>
                <group scale={[0.569, 0.502, 0.408]}>
                  <mesh
                    name="3DGeom-196_24"
                    castShadow
                    receiveShadow
                    geometry={nodes['3DGeom-196_24'].geometry}
                    material={materials['[0061_OliveDrab]']}
                  />
                </group>
                <group position={[15.551, 0, 0]} scale={[0.569, 0.502, 0.408]}>
                  <mesh
                    name="3DGeom-196_25"
                    castShadow
                    receiveShadow
                    geometry={nodes['3DGeom-196_25'].geometry}
                    material={materials['[0061_OliveDrab]']}
                  />
                </group>
              </group>
              <group position={[17.11, 748.471, 4.134]} scale={0.89}>
                <group scale={[0.569, 0.502, 0.408]}>
                  <mesh
                    name="3DGeom-196_26"
                    castShadow
                    receiveShadow
                    geometry={nodes['3DGeom-196_26'].geometry}
                    material={materials['[0061_OliveDrab]']}
                  />
                </group>
                <group position={[15.551, 0, 0]} scale={[0.569, 0.502, 0.408]}>
                  <mesh
                    name="3DGeom-196_27"
                    castShadow
                    receiveShadow
                    geometry={nodes['3DGeom-196_27'].geometry}
                    material={materials['[0061_OliveDrab]']}
                  />
                </group>
              </group>
              <group position={[17.11, 728.964, 4.134]} scale={0.91}>
                <group scale={[0.569, 0.502, 0.408]}>
                  <mesh
                    name="3DGeom-196_28"
                    castShadow
                    receiveShadow
                    geometry={nodes['3DGeom-196_28'].geometry}
                    material={materials['[0061_OliveDrab]']}
                  />
                </group>
                <group position={[15.551, 0, 0]} scale={[0.569, 0.502, 0.408]}>
                  <mesh
                    name="3DGeom-196_29"
                    castShadow
                    receiveShadow
                    geometry={nodes['3DGeom-196_29'].geometry}
                    material={materials['[0061_OliveDrab]']}
                  />
                </group>
              </group>
              <group position={[-38.346, 468.709, 0]} scale={[0.644, 0.966, 0.644]}>
                <group scale={[0.569, 0.502, 0.408]}>
                  <mesh
                    name="3DGeom-196_30"
                    castShadow
                    receiveShadow
                    geometry={nodes['3DGeom-196_30'].geometry}
                    material={materials['[0061_OliveDrab]']}
                  />
                </group>
                <group position={[15.551, 0, 0]} scale={[0.569, 0.502, 0.408]}>
                  <mesh
                    name="3DGeom-196_31"
                    castShadow
                    receiveShadow
                    geometry={nodes['3DGeom-196_31'].geometry}
                    material={materials['[0061_OliveDrab]']}
                  />
                </group>
              </group>
              <group position={[17.11, 710.695, 4.134]} scale={0.87}>
                <group scale={[0.569, 0.502, 0.408]}>
                  <mesh
                    name="3DGeom-196_32"
                    castShadow
                    receiveShadow
                    geometry={nodes['3DGeom-196_32'].geometry}
                    material={materials['[0061_OliveDrab]']}
                  />
                </group>
                <group position={[15.551, 0, 0]} scale={[0.569, 0.502, 0.408]}>
                  <mesh
                    name="3DGeom-196_33"
                    castShadow
                    receiveShadow
                    geometry={nodes['3DGeom-196_33'].geometry}
                    material={materials['[0061_OliveDrab]']}
                  />
                </group>
              </group>
              <group position={[17.11, 693.928, 4.134]} scale={0.87}>
                <group scale={[0.569, 0.502, 0.408]}>
                  <mesh
                    name="3DGeom-196_34"
                    castShadow
                    receiveShadow
                    geometry={nodes['3DGeom-196_34'].geometry}
                    material={materials['[0061_OliveDrab]']}
                  />
                </group>
                <group position={[15.551, 0, 0]} scale={[0.569, 0.502, 0.408]}>
                  <mesh
                    name="3DGeom-196_35"
                    castShadow
                    receiveShadow
                    geometry={nodes['3DGeom-196_35'].geometry}
                    material={materials['[0061_OliveDrab]']}
                  />
                </group>
              </group>
              <group
                position={[-43.237, 775.16, 22.047]}
                rotation={[0, -Math.PI / 2, 0]}
                scale={[0.399, 0.337, 0.273]}>
                <mesh
                  name="3DGeom-232"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-232'].geometry}
                  material={materials['[0021_DarkRed]']}
                />
              </group>
              <group position={[-38.346, 407.961, 0]} scale={[0.644, 0.966, 0.644]}>
                <group scale={[0.569, 0.502, 0.408]}>
                  <mesh
                    name="3DGeom-196_36"
                    castShadow
                    receiveShadow
                    geometry={nodes['3DGeom-196_36'].geometry}
                    material={materials['[0061_OliveDrab]']}
                  />
                </group>
                <group position={[15.551, 0, 0]} scale={[0.569, 0.502, 0.408]}>
                  <mesh
                    name="3DGeom-196_37"
                    castShadow
                    receiveShadow
                    geometry={nodes['3DGeom-196_37'].geometry}
                    material={materials['[0061_OliveDrab]']}
                  />
                </group>
              </group>
              <group position={[-38.346, 369.93, 0]} scale={[0.644, 0.966, 0.644]}>
                <group scale={[0.569, 0.502, 0.408]}>
                  <mesh
                    name="3DGeom-196_38"
                    castShadow
                    receiveShadow
                    geometry={nodes['3DGeom-196_38'].geometry}
                    material={materials['[0061_OliveDrab]']}
                  />
                </group>
                <group position={[15.551, 0, 0]} scale={[0.569, 0.502, 0.408]}>
                  <mesh
                    name="3DGeom-196_39"
                    castShadow
                    receiveShadow
                    geometry={nodes['3DGeom-196_39'].geometry}
                    material={materials['[0061_OliveDrab]']}
                  />
                </group>
              </group>
              <group position={[-38.346, 350.52, 0]} scale={[0.644, 0.966, 0.644]}>
                <group scale={[0.569, 0.502, 0.408]}>
                  <mesh
                    name="3DGeom-196_40"
                    castShadow
                    receiveShadow
                    geometry={nodes['3DGeom-196_40'].geometry}
                    material={materials['[0061_OliveDrab]']}
                  />
                </group>
                <group position={[15.551, 0, 0]} scale={[0.569, 0.502, 0.408]}>
                  <mesh
                    name="3DGeom-196_41"
                    castShadow
                    receiveShadow
                    geometry={nodes['3DGeom-196_41'].geometry}
                    material={materials['[0061_OliveDrab]']}
                  />
                </group>
              </group>
              <group position={[-38.346, 449.064, 0]} scale={[0.644, 0.966, 0.644]}>
                <group scale={[0.569, 0.502, 0.408]}>
                  <mesh
                    name="3DGeom-196_42"
                    castShadow
                    receiveShadow
                    geometry={nodes['3DGeom-196_42'].geometry}
                    material={materials['[0061_OliveDrab]']}
                  />
                </group>
                <group position={[15.551, 0, 0]} scale={[0.569, 0.502, 0.408]}>
                  <mesh
                    name="3DGeom-196_43"
                    castShadow
                    receiveShadow
                    geometry={nodes['3DGeom-196_43'].geometry}
                    material={materials['[0061_OliveDrab]']}
                  />
                </group>
              </group>
              <group position={[-38.346, 333.749, 0]} scale={[0.644, 0.966, 0.644]}>
                <group scale={[0.569, 0.502, 0.408]}>
                  <mesh
                    name="3DGeom-196_44"
                    castShadow
                    receiveShadow
                    geometry={nodes['3DGeom-196_44'].geometry}
                    material={materials['[0061_OliveDrab]']}
                  />
                </group>
                <group position={[15.551, 0, 0]} scale={[0.569, 0.502, 0.408]}>
                  <mesh
                    name="3DGeom-196_45"
                    castShadow
                    receiveShadow
                    geometry={nodes['3DGeom-196_45'].geometry}
                    material={materials['[0061_OliveDrab]']}
                  />
                </group>
              </group>
              <group position={[-38.346, 428.355, 0]} scale={[0.644, 0.966, 0.644]}>
                <group scale={[0.569, 0.502, 0.408]}>
                  <mesh
                    name="3DGeom-196_46"
                    castShadow
                    receiveShadow
                    geometry={nodes['3DGeom-196_46'].geometry}
                    material={materials['[0061_OliveDrab]']}
                  />
                </group>
                <group position={[15.551, 0, 0]} scale={[0.569, 0.502, 0.408]}>
                  <mesh
                    name="3DGeom-196_47"
                    castShadow
                    receiveShadow
                    geometry={nodes['3DGeom-196_47'].geometry}
                    material={materials['[0061_OliveDrab]']}
                  />
                </group>
              </group>
              <group position={[-38.346, 388.434, 0]} scale={[0.644, 0.966, 0.644]}>
                <group scale={[0.569, 0.502, 0.408]}>
                  <mesh
                    name="3DGeom-196_48"
                    castShadow
                    receiveShadow
                    geometry={nodes['3DGeom-196_48'].geometry}
                    material={materials['[0061_OliveDrab]']}
                  />
                </group>
                <group position={[15.551, 0, 0]} scale={[0.569, 0.502, 0.408]}>
                  <mesh
                    name="3DGeom-196_49"
                    castShadow
                    receiveShadow
                    geometry={nodes['3DGeom-196_49'].geometry}
                    material={materials['[0061_OliveDrab]']}
                  />
                </group>
              </group>
              <group position={[-48.38, 694.201, 21.506]} scale={[1.061, 1.061, 1.348]}>
                <mesh
                  name="3DGeom-247"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-247'].geometry}
                  material={materials['[0021_DarkRed]']}
                />
              </group>
              <group position={[466.947, 714.268, 15.748]} rotation={[0, 0, Math.PI / 2]}>
                <mesh
                  name="3DGeom-88_7"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-88_7'].geometry}
                  material={materials['[Wood Bamboo]']}
                />
                <mesh
                  name="3DGeom-89_7"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-89_7'].geometry}
                  material={materials['[Carpet Loop Pattern]']}
                />
              </group>
              <group position={[368.792, 137.309, 15.748]}>
                <mesh
                  name="3DGeom-88_8"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-88_8'].geometry}
                  material={materials['[Wood Bamboo]']}
                />
                <mesh
                  name="3DGeom-89_8"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-89_8'].geometry}
                  material={materials['[Carpet Loop Pattern]']}
                />
              </group>
              <group position={[254.344, 137.309, 15.748]}>
                <mesh
                  name="3DGeom-88_9"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-88_9'].geometry}
                  material={materials['[Wood Bamboo]']}
                />
                <mesh
                  name="3DGeom-89_9"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-89_9'].geometry}
                  material={materials['[Carpet Loop Pattern]']}
                />
              </group>
              <group position={[367.141, 53.779, 15.748]}>
                <mesh
                  name="3DGeom-88_10"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-88_10'].geometry}
                  material={materials['[Wood Bamboo]']}
                />
                <mesh
                  name="3DGeom-89_10"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-89_10'].geometry}
                  material={materials['[Carpet Loop Pattern]']}
                />
              </group>
              <group position={[249.812, 52.382, 15.748]}>
                <mesh
                  name="3DGeom-88_11"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-88_11'].geometry}
                  material={materials['[Wood Bamboo]']}
                />
                <mesh
                  name="3DGeom-89_11"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-89_11'].geometry}
                  material={materials['[Carpet Loop Pattern]']}
                />
              </group>
              <group position={[528.872, 276.838, 15.748]} rotation={[0, 0, Math.PI]}>
                <mesh
                  name="3DGeom-88_12"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-88_12'].geometry}
                  material={materials['[Wood Bamboo]']}
                />
                <mesh
                  name="3DGeom-89_12"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-89_12'].geometry}
                  material={materials['[Carpet Loop Pattern]']}
                />
              </group>
              <group position={[494.634, 55.41, 15.748]}>
                <mesh
                  name="3DGeom-88_13"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-88_13'].geometry}
                  material={materials['[Wood Bamboo]']}
                />
                <mesh
                  name="3DGeom-89_13"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-89_13'].geometry}
                  material={materials['[Carpet Loop Pattern]']}
                />
              </group>
              <group position={[489.404, 152.811, 15.748]}>
                <mesh
                  name="3DGeom-88_14"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-88_14'].geometry}
                  material={materials['[Wood Bamboo]']}
                />
                <mesh
                  name="3DGeom-89_14"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-89_14'].geometry}
                  material={materials['[Carpet Loop Pattern]']}
                />
              </group>
              <group position={[233.563, 735.64, 15.748]} rotation={[0, 0, Math.PI]}>
                <mesh
                  name="3DGeom-88_15"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-88_15'].geometry}
                  material={materials['[Wood Bamboo]']}
                />
                <mesh
                  name="3DGeom-89_15"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-89_15'].geometry}
                  material={materials['[Carpet Loop Pattern]']}
                />
              </group>
              <group position={[488.189, 357.008, 15.748]}>
                <mesh
                  name="3DGeom-266"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-266'].geometry}
                  material={materials['[Wood Veneer 01]']}
                />
              </group>
              <group position={[488.189, 441.654, 15.748]}>
                <mesh
                  name="3DGeom-266_1"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-266_1'].geometry}
                  material={materials['[Wood Veneer 01]']}
                />
              </group>
              <group position={[275.195, 880.878, 15.748]}>
                <mesh
                  name="3DGeom-268"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-268'].geometry}
                  material={materials['[Wood Veneer 01]']}
                />
              </group>
              <group position={[223.749, 250, 63.74]} rotation={[-Math.PI / 2, 0, -Math.PI]}>
                <mesh
                  name="3DGeom-269"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-269'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-270"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-270'].geometry}
                  material={materials['[Translucent Glass Gray]']}
                />
              </group>
              <group
                name="ergonomic_chair_4"
                position={[300.688, 138.823, 15.748]}
                rotation={[0, 0, Math.PI]}>
                <mesh
                  name="3DGeom-106_4"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-106_4'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
                <mesh
                  name="3DGeom-107_4"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-107_4'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
              </group>
              <group
                name="ergonomic_chair_5"
                position={[529.707, 148.261, 15.748]}
                rotation={[0, 0, Math.PI]}>
                <mesh
                  name="3DGeom-106_5"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-106_5'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
                <mesh
                  name="3DGeom-107_5"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-107_5'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
              </group>
              <group
                name="ergonomic_chair_6"
                position={[415.885, 138.823, 15.748]}
                rotation={[0, 0, Math.PI]}>
                <mesh
                  name="3DGeom-106_6"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-106_6'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
                <mesh
                  name="3DGeom-107_6"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-107_6'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
              </group>
              <group
                name="ergonomic_chair_7"
                position={[528.923, 53.156, 15.748]}
                rotation={[0, 0, Math.PI]}>
                <mesh
                  name="3DGeom-106_7"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-106_7'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
                <mesh
                  name="3DGeom-107_7"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-107_7'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
              </group>
              <group
                name="ergonomic_chair_8"
                position={[407.584, 53.156, 15.748]}
                rotation={[0, 0, Math.PI]}>
                <mesh
                  name="3DGeom-106_8"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-106_8'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
                <mesh
                  name="3DGeom-107_8"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-107_8'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
              </group>
              <group
                name="ergonomic_chair_9"
                position={[321.898, 983.557, 15.748]}
                rotation={[0, 0, -0.999]}>
                <mesh
                  name="3DGeom-106_9"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-106_9'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
                <mesh
                  name="3DGeom-107_9"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-107_9'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
              </group>
              <group
                name="ergonomic_chair_10"
                position={[273.636, 910.362, 15.748]}
                rotation={[0, 0, Math.PI / 2]}>
                <mesh
                  name="3DGeom-106_10"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-106_10'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
                <mesh
                  name="3DGeom-107_10"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-107_10'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
              </group>
              <group
                name="ergonomic_chair_11"
                position={[543.515, 929.677, 15.748]}
                rotation={[0, 0, -Math.PI / 2]}>
                <mesh
                  name="3DGeom-106_11"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-106_11'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
                <mesh
                  name="3DGeom-107_11"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-107_11'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
              </group>
              <group
                name="ergonomic_chair_12"
                position={[296.206, 53.156, 15.748]}
                rotation={[0, 0, Math.PI]}>
                <mesh
                  name="3DGeom-106_12"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-106_12'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
                <mesh
                  name="3DGeom-107_12"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-107_12'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
              </group>
              <group
                name="ergonomic_chair_13"
                position={[378, 983.557, 15.748]}
                rotation={[0, 0, -0.999]}>
                <mesh
                  name="3DGeom-106_13"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-106_13'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
                <mesh
                  name="3DGeom-107_13"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-107_13'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
              </group>
              <group
                name="ergonomic_chair_14"
                position={[468.985, 983.557, 15.748]}
                rotation={[0, 0, -0.999]}>
                <mesh
                  name="3DGeom-106_14"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-106_14'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
                <mesh
                  name="3DGeom-107_14"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-107_14'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
              </group>
              <group
                name="ergonomic_chair_15"
                position={[488.782, 287.634, 15.748]}
                rotation={[0, 0, -0.999]}>
                <mesh
                  name="3DGeom-106_15"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-106_15'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
                <mesh
                  name="3DGeom-107_15"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-107_15'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
              </group>
              <group
                position={[491.901, 758.744, 15.748]}
                rotation={[0, 0, -Math.PI / 2]}
                scale={1.12}>
                <mesh
                  name="3DGeom-295"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-295'].geometry}
                  material={materials['[0047_Khaki]']}
                />
              </group>
              <group position={[359.352, 389.282, 15.748]} rotation={[0, 0, -Math.PI / 2]}>
                <mesh
                  name="3DGeom-295_1"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-295_1'].geometry}
                  material={materials['[0047_Khaki]']}
                />
              </group>
              <group
                name="Door"
                position={[589.567, 642.362, 63.74]}
                rotation={[Math.PI / 2, Math.PI / 2, 0]}>
                <mesh
                  name="3DGeom-297"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-297'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-298"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-298'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
              </group>
              <group
                name="stair"
                position={[-76.401, 519.892, 19.685]}
                rotation={[0, 0, Math.PI / 2]}>
                <mesh
                  name="3DGeom-301"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-301'].geometry}
                  material={materials['[Terrazzo Tile Light]']}
                />
                <mesh
                  name="3DGeom-302"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-302'].geometry}
                  material={materials['[Stone Brushed Khaki]']}
                />
                <group name="Rail_TB" position={[-113.199, -233.409, 7.008]}>
                  <mesh
                    name="3DGeom-303"
                    castShadow
                    receiveShadow
                    geometry={nodes['3DGeom-303'].geometry}
                    material={materials['*']}
                  />
                  <mesh
                    name="3DGeom-304"
                    castShadow
                    receiveShadow
                    geometry={nodes['3DGeom-304'].geometry}
                    material={materials['[Wood Veneer 02]']}
                  />
                </group>
              </group>
              <group
                name="Door_1"
                position={[488.189, 525.866, 63.74]}
                rotation={[Math.PI / 2, Math.PI / 2, 0]}>
                <mesh
                  name="3DGeom-305"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-305'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-306"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-306'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
              </group>
              <group
                name="Door_2"
                position={[233.425, 834.646, 63.74]}
                rotation={[-Math.PI / 2, 0, -Math.PI]}>
                <mesh
                  name="3DGeom-307"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-307'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-308"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-308'].geometry}
                  material={materials['[0135_DarkGray]']}
                />
              </group>
              <group
                name="Door_3"
                position={[236.496, 683.346, 63.74]}
                rotation={[Math.PI / 2, Math.PI / 2, 0]}>
                <mesh
                  name="3DGeom-309"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-309'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  name="3DGeom-310"
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-310'].geometry}
                  material={materials['[0135_DarkGray]']}
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

useGLTF.preload('/COED_compressed (1).glb')
